"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;

  if (!message) {
    return false;
  }
  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["maksymilianr11@gmail.com"],
      subject: "Nowa wiadomośc ze strony Portfolio!",
      text: message,
      replyTo: senderEmail,
    });
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
