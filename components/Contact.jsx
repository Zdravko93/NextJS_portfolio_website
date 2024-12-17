"use client";

import React, { useRef } from "react";

import SectionHeading from "./SectionHeading.jsx";
import { useActiveSection } from "@/lib/hooks.js";
import SubmitButton from "./SubmitButton.jsx";
import { motion } from "framer-motion";
import { sendEmail } from "../actions/sendEmail.js";
import toast from "react-hot-toast";

export default function Contact() {
  const formRef = useRef();
  const { ref } = useActiveSection("Contact", 0, 7);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mx-auto mt-40 mb-20 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.2,
      }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p
        className="font-sans text-gray-700 -mt-6
                   dark:text-gray-50"
      >
        Contact me at{" "}
        <a href="mailto:zdravkodelic1993@gmail.com" className="underline">
          zdravkodelic1993@gmail.com
        </a>{" "}
        or through the form bellow
      </p>

      <form
        ref={formRef}
        className="flex flex-col mt-10 px-4 font-sans dark:text-gray-900"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");

          // reset form fields after submission
          formRef.current.reset();
        }}
      >
        <input
          className="h-14 px-4 rounded-lg border border-black/10 outline-none transition-all shadow-md
                    dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100"
          name="senderEmail"
          type="email"
          required
          maxLength={420}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 p-4 rounded-lg border border-black/10 outline-none transition-all shadow-md
                    dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100"
          name="senderMessage"
          required
          maxLength={4200}
          placeholder="Your message"
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
