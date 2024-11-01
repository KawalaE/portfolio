"use server";
import FormEmail from "@/email/FormEmail";
import { getErrorMessage, validateString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");
  let data;
  //server side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  try {
    data = await resend.emails.send({
      from: "Contact form <onboarding@resend.dev>",
      to: "edyta.wer.kawala@gmail.com",
      subject: "Message from portfolio form",
      replyTo: senderEmail as string,
      react: React.createElement(FormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    console.log("catch error");
    console.log(error);
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
