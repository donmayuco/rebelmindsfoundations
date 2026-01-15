"use client";

import { useState } from "react";

export default function StartAssessmentButton({
  label = "Start Your Rebel Minds Journey!",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      // Try JSON, but don’t crash if server returns text/html
      let data: any = null;
      const text = await res.text();
      try {
        data = text ? JSON.parse(text) : null;
      } catch {
        data = { raw: text };
      }

      if (!res.ok) {
        console.error("Checkout failed:", data);
        alert("Checkout failed. Please try again.");
        return;
      }

      if (data?.url) {
        window.location.href = data.url;
      } else {
        console.error("No checkout URL returned:", data);
        alert("No checkout URL returned.");
      }
    } catch (e) {
      console.error(e);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      aria-busy={loading}
      className={[
        "inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-base font-semibold text-slate-900 hover:bg-white/90 disabled:opacity-60 disabled:cursor-not-allowed",
        className,
      ].join(" ")}
    >
      {loading ? "Redirecting…" : label}
    </button>
  );
}