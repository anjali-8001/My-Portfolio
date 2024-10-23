"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { LuMail } from "react-icons/lu";
import toast from "react-hot-toast";

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const isInView = useInView(ref);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
    }
  }, [isInView, isVisible]);

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
        formRef.current,
        `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          //   console.log(result.text);
          toast.success("Email has been sent!");
          formRef.current.reset();
        },
        (error) => {
          //   console.log(error.text);
          toast.error("Something went wrong.");
        }
      );
  };

  return (
    <motion.div className="flex h-auto py-32 px-32 gap-24" id="contact">
      <motion.div
        ref={ref}
        className="flex flex-col gap-6 text-2xl w-[48%]"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl leading-[70px] mr-8 font-semibold">
          Let&apos;{" "}
          <span
            className=""
            style={{
              background: "linear-gradient(135deg, #007BFF, #00BFFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            connect
          </span>
          . <p className="">Tell me about your project!</p>
        </h1>
        <div className="text-[#7ea0c7] ">
          Let&apos; create something together ✌️
        </div>
        <div className="flex gap-5 items-center">
          <motion.div whileHover={{ scale: 1.1 }}>
            <div className="flex justify-center items-center ">
              <a
                href="mailto:anjalisharma8001@gmail.com"
                className="bg-[#3D285A] p-2 rounded-2xl "
              >
                <LuMail />
              </a>
            </div>
          </motion.div>
          <div className="text-lg">
            <p className="text-[#c4d3e4]">Mail me at:</p>
            <p className="text-[#c4d3e4]">anjalisharma8001@gmail.com</p>
          </div>
        </div>
      </motion.div>

      <motion.div className="relative flex flex-col gap-5 w-[50%]">
        <motion.div
          className="absolute left-[100px] top-[50px]"
          initial={{ opacity: 1 }}
          animate={isVisible && { opacity: 0 }}
          transition={{ delay: 0.5, duration: 3 }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 32.666 32.666"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
            M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
            C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
            c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
            c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
            c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
            c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
            c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
            c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
            c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
            c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
            l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
            C32.666,7.326,25.339,0,16.333,0z"
              stroke="#007BFF"
              strokeWidth="0.2"
              initial={{ pathLength: 0 }}
              animate={isVisible && { pathLength: 1 }}
              transition={{ delay: 0.5, duration: 2 }}
            />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="flex flex-col gap-6 border border-[#007BFF] rounded-2xl z-30 p-10 w-full"
        >
          <div className="text-2xl">Send me a message 🚀</div>
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col w-full gap-3"
          >
            <motion.input
              type="text"
              required
              placeholder="Enter your name"
              name="name"
              className="text-sm rounded-lg px-6 py-4 bg-[#1C1F26] border border-[#007BFF] outline-none"
            />
            <motion.input
              type="email"
              required
              placeholder="Enter your email"
              name="email"
              className="text-sm rounded-lg px-6 py-4 bg-[#1C1F26] border border-[#007BFF] outline-none"
            />
            <motion.textarea
              rows={4}
              required
              placeholder="Enter a message"
              name="message"
              className="text-sm rounded-lg px-6 py-4 bg-[#1C1F26] border border-[#007BFF] outline-none"
            />
            <motion.button
              type="submit"
              className="bg-[#007BFF] text-white font-bold text-lg py-3 rounded-lg transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.03 }} // Enlarge button on hover
            >
              Send
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
