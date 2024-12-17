"use server";

import React from "react";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils.js";
import ContactFormEmail from "../email/contact-form-email.js";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const senderEmail = formData.get("senderEmail");
  const senderMessage = formData.get("senderMessage");

  if (!validateString(senderEmail, 420)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(senderMessage, 4200)) {
    return {
      error: "Invalid message",
    };
  }

  let data;

  try {
    data = resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "zdravkodelic1993@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        senderEmail: senderEmail,
        senderMessage: senderMessage,
      }),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
