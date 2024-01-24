"use client";
import React from "react";

const ContactForm = () => {
  const sendEmail = async (event: React.FormEvent) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };

    const res = await fetch("/send", {
      body: JSON.stringify({
        name: target.name.value,
        email: target.email.value,
        message: target.message.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    if (result) {
      console.log("Success");
    } else {
      console.log("Failed");
    }
  };

  return (
    <form onSubmit={sendEmail}>
      <h1 className="text-2xl font-bold mb-5 text-[#636e72]">Contact Me</h1>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="w-[400px] px-3 py-2 text-sm placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-[400px] px-3 py-2 text-sm placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <textarea
          id="message"
          name="message"
          rows={4}
          cols={50}
          className="w-[400px] px-3 py-2 text-sm bg-white border-0 rounded"
        >
          Type your message.
        </textarea>
      </div>
      <button className="px-6 mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-[#4b3792]">
        Send a message
      </button>
    </form>
  );
};

export default ContactForm;
