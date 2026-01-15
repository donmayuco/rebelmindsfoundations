import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});

export async function GET() {
  // This is only so visiting /api/checkout in the browser isn't blank.
  return NextResponse.json({ ok: true, message: "Checkout API is live (use POST to create session)." });
}

export async function POST(req: Request) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Missing STRIPE_SECRET_KEY in .env.local" },
        { status: 500 }
      );
    }

    // Where to send them after Stripe
    const origin = req.headers.get("origin") || "http://localhost:3000";

    // ✅ OPTION A (recommended): Use a Stripe Price ID from your Stripe Dashboard
    // Create a Product + Price in Stripe, then paste the price_... id here or in env
    const priceId = process.env.STRIPE_PRICE_ID; // add to .env.local

    if (!priceId) {
      return NextResponse.json(
        { error: "Missing STRIPE_PRICE_ID in .env.local" },
        { status: 500 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/assessment?paid=1`,
      cancel_url: `${origin}/services?canceled=1`,
      // Optional: helpful to identify purchase later
      metadata: {
        product: "rmf_initial_assessment",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: err?.message || "Stripe checkout failed" },
      { status: 500 }
    );
  }
}