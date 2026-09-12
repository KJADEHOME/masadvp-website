"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  company: "",
  country: "",
  interest: "",
  message: ""
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle");
  const [notice, setNotice] = useState("");

  function updateField(event) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    setNotice("");

const payload = {
    name: form.name,
    email: form.email,
    company: form.company,
    country: form.country,
    interest: form.interest,
    message: form.message
  };

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
    });

    if (response.ok) {
      setForm(initialState);
      setStatus("sent");
      setNotice("Thank you. Your inquiry has been sent.");
      return;
    }

    const result = await response.json().catch(() => ({}));
    setStatus("error");
    setNotice(result.message || "The message could not be sent. Please email us directly.");
  }

  return (
    <form className="contact-form" id="message-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          placeholder="Your full name"
          onChange={updateField}
          required
          value={form.name}
        />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="your@email.com"
          onChange={updateField}
          required
          type="email"
          value={form.email}
        />
      </div>
      <div className="field">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          placeholder="Company / Organization"
          onChange={updateField}
          value={form.company}
        />
      </div>
      <div className="field">
        <label htmlFor="country">Country / Region</label>
        <input
          id="country"
          name="country"
          placeholder="Country or region"
          onChange={updateField}
          value={form.country}
        />
      </div>
      <div className="field">
        <label htmlFor="interest">Product Interest</label>
        <select
          id="interest"
          name="interest"
          onChange={updateField}
          value={form.interest}
        >
          <option value="">Select a category</option>
          <option>Toy</option>
          <option>Hometextile</option>
          <option>Home Deco</option>
          <option>Shoes</option>
          <option>Sporting goods</option>
          <option>Seasonal Item</option>
          <option>Paper Items</option>
          <option>Others</option>
        </select>
      </div>
      <div className="field full">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us your product needs, quantity and target market"
          onChange={updateField}
          required
          value={form.message}
        />
      </div>
      <div className="field full">
        <button className="button primary" disabled={status === "sending"} type="submit">
          {status === "sending" ? "Sending..." : "Send Inquiry"}
        </button>
        {notice ? <p className="lead">{notice}</p> : null}
      </div>
    </form>
  );
}
