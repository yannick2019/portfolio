import ContactForm from "@/components/ContactForm";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(bg-3.jpg)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
    >
      <div className="h-[80%] w-[80%]">
        <div className="flex items-center justify-center mt-20">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
