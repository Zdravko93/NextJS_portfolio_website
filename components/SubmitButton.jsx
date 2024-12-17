import React from "react";

import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex justify-center items-center gap-2 w-[8rem] h-[3rem] bg-gray-900 text-white rounded-full outline-none
                focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all
                disabled:bg-opacity-60
                dark:bg-white dark:bg-opacity-10"
      disabled={pending}
    >
      {" "}
      {pending ? (
        <div className="w-5 h-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit
          <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-xs opacity-70" />
        </>
      )}
    </button>
  );
}
