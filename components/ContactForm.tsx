"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg("Something went wrong sending your message. Please try again or email directly.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-1.5" htmlFor="firstName">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            required
            className="w-full border border-text/15 rounded-md px-4 py-3 bg-surface text-text focus:outline-none focus:border-gold"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5" htmlFor="lastName">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            required
            className="w-full border border-text/15 rounded-md px-4 py-3 bg-surface text-text focus:outline-none focus:border-gold"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border border-text/15 rounded-md px-4 py-3 bg-surface text-text focus:outline-none focus:border-gold"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5" htmlFor="phone">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full border border-text/15 rounded-md px-4 py-3 bg-surface text-text focus:outline-none focus:border-gold"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5" htmlFor="role">
          I am a...
        </label>
        <select
          id="role"
          name="role"
          required
          defaultValue=""
          className="w-full border border-text/15 rounded-md px-4 py-3 bg-surface text-text focus:outline-none focus:border-gold"
        >
          <option value="" disabled>
            Select one
          </option>
          <option value="Company looking to hire">Company looking to hire</option>
          <option value="Engineer looking for work">Engineer looking for work</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border border-text/15 rounded-md px-4 py-3 bg-surface text-text focus:outline-none focus:border-gold"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-lift grad-bg text-bg px-8 py-3 rounded-full font-medium disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-sm font-medium" style={{ color: "#7ecff4" }}>
          Thanks — your message has been sent. I&apos;ll be in touch shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium" style={{ color: "#f4845f" }}>
          {errorMsg}
        </p>
      )}
    </form>
  );
}
