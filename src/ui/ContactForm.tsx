import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = ({ setSuccessMessage }: any) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [shouldShowToast, setShouldShowToast] = useState(false);

  const emailValidation = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  useEffect(() => {
    if (shouldShowToast) {
      toast.success("Message sent successfully!");
      setShouldShowToast(false); // Reset the flag
    }
  }, [shouldShowToast]);

  const handleSendDetails = async (e: any) => {
    e.preventDefault();

    if (username === "") {
      setErrMessage("Your name is required!");
      toast.error("Your name is required!");
    } else if (email === "") {
      setErrMessage("Please give your Email");
      toast.error("Please give your Email");
    } else if (!emailValidation(email)) {
      setErrMessage("Give a Valid Email");
      toast.error("Give a Valid Email");
    } else if (message === "") {
      setErrMessage("Enter your Messages");
      toast.error("Enter your Messages");
    } else {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, message }),
        });

        if (res.ok) {
          setSuccessMessage(
            `Hello dear ${username}. We received your message successfully. Additional details will be sent to your email at ${email}, and our responsible personnel will contact you shortly. Thank you for your time.`
          );
          setShouldShowToast(true); // Set flag to trigger toast in useEffect
          setUsername("");
          setEmail("");
          setMessage("");
          setErrMessage("");
        } else {
          const data = await res.json();
          setErrMessage(data.error || "Something went wrong");
          toast.error(data.error || "Something went wrong");
        }
      } catch (error) {
        setErrMessage("Failed to send message");
        toast.error("Failed to send message");
      }
    }
  };

  return (
    <>
      <div className="flex justify-between gap-1">
        <h4 className="text-secondaryColor text-lg mdl:text-xl mb-2">
          Contact Form
        </h4>
      </div>
      <div className="flex flex-col gap-1 text-base text-gray-100 font-titleFont">
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="w-full text-black outline-none rounded-sm px-4 pt-5 pb-2 placeholder:text-sm bg-transparent border-b-[1px] border-b-borderColor focus:border-b-secondaryColor placeholder:translate-y-0 focus:placeholder:-translate-y-5 placeholder:transition-transform duration-500 placeholder:uppercase"
          type="text"
          placeholder="Your Full Name"
        />

        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="w-full text-black outline-none rounded-sm px-4 pt-5 pb-2 placeholder:text-sm bg-transparent border-b-[1px] border-b-borderColor focus:border-b-secondaryColor placeholder:translate-y-0 focus:placeholder:-translate-y-5 placeholder:transition-transform duration-500 placeholder:uppercase"
          type="email"
          placeholder="Your Email"
        />

        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className="w-full text-black outline-none rounded-sm px-4 pt-5 pb-2 placeholder:text-sm bg-transparent border-b-[1px] border-b-borderColor focus:border-b-secondaryColor placeholder:translate-y-0 focus:placeholder:-translate-y-5 placeholder:transition-transform duration-500 resize-none placeholder:uppercase"
          cols={30}
          rows={5}
          placeholder="YOUR MESSAGE"
        />
      </div>
      {errMessage && (
        <h4 className="text-red-500 text-base text-center mt-10 py-1 rounded-sm bg-white px-4 font-semibold">
          {errMessage} !
        </h4>
      )}
      <button
        onClick={handleSendDetails}
        className="relative w-full text-lg font-semibold uppercase font-titleFont active:bg-secondaryColor tracking-[4px] border p-2 border-gray-800 mt-8 overflow-hidden group"
      >
        Send
        <span className="absolute w-full h-[1px] bg-secondaryColor left-0 top-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500"></span>
        <span className="absolute w-full h-[1px] bg-secondaryColor left-0 bottom-0 translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500"></span>
        <span className="absolute w-[1px] h-full bg-secondaryColor left-0 bottom-0 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></span>
        <span className="absolute w-[1px] h-full bg-secondaryColor right-0 bottom-0 -translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></span>
      </button>

      <ToastContainer />
    </>
  );
};

export default ContactForm;