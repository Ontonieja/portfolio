"use client";

import { sendEmail } from "@/services/sendEmail";
import { useState } from "react";
import Button from "../ui/Button";

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const succes = await sendEmail(formData);
      setIsSuccess(succes);
      setIsError(!succes);
      setEmail("");
      setMessage("");
    } catch (e) {
      console.log(e);
      setIsSuccess(false);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <label htmlFor="senderEmail" id="senderEmail">
        Email:
        <input
          name="senderEmail"
          type="email"
          id="senderEmail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          maxLength={100}
          className="w-full h-12 bg-zinc-100 mt-3 px-4 rounded-xl hover:outline-none mb-4 focus:outline-none"
          required
          placeholder="Your email.."
        ></input>
      </label>
      <label htmlFor="message" id="message">
        Message:
        <textarea
          name="message"
          id="message"
          maxLength={500}
          className="w-full px-4 mt-3 h-44 rounded-xl p-4 bg-zinc-100 hover: outline-none "
          required
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Type your message here..."
        ></textarea>
      </label>
      <div>
        <Button
          type="submit"
          className="w-full my-4 hover:shadow-xl"
          variant="primary"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send"}
        </Button>
        <div>{isSuccess && <p>The message was successfully sent!</p>}</div>
        {isError && <p>Something went wrong, please try again.</p>}
      </div>
    </form>
  );
}
