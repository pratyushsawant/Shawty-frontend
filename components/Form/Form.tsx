"use client";
import HelixImage from "../../assets/images/helix2.png";
import EmojiImage from "../../assets/images/emojistar.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ContactForm = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div className="bg-black text-white py-[72px] sm:py-24" ref={containerRef}>
      <div className="container max-w-xl relative">
        <motion.div style={{ translateY }}>
          <Image
            src={HelixImage}
            alt="helix"
            className="absolute top-6 left-[calc(100%+36px)]"
          />
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image
            src={EmojiImage}
            alt="emoji"
            className="absolute -top-[120px] right-[calc(100%+30px)]"
          />
        </motion.div>

        <h2 className="font-bold text-3xl sm:text-6xl tracking-tighter">
          Join US Today
        </h2>
        <p className="text-xl text-white/70 mt-5">
          Join Shawty today and revolutionize your short-form content creation.
          Our AI-powered platform helps you produce engaging content faster than
          ever.
        </p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input
            type="email"
            placeholder="your.email@example.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
          />
          <button className="bg-white text-black h-12 rounded-lg px-5">
            Start Free Trial
          </button>
        </form>
      </div>
    </div>
  );
};
