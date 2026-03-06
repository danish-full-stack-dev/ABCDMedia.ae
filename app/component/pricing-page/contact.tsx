import React from "react";

export default function Contact() {
  return (
    <div className="bg-black">
      <div className="max-w-10/12 mx-auto text-white">
        <div className="flex flex-col md:flex-row">

          {/* LEFT: Form */}
          <section className="flex flex-col w-full md:w-1/2 py-10 md:py-20 md:text-lg px-4 md:px-0">
            <p className="text-[#9C27B0] font-semibold mt-6 md:mt-10 text-xs md:text-base">
              {"Let's"} talk about your project!
            </p>

            <h2 className="text-2xl md:text-5xl font-bold mb-6 md:mb-10">
              Contact <span className="text-[#9C27B0]">Us Now!</span>
            </h2>

            <p className="mb-6 md:mb-10 w-full md:w-4/5 text-xs md:text-base">
              You get a committed team that understands your business goals
            </p>

            <form className="flex flex-col gap-4 md:gap-8 w-full md:w-3/5">
              <input
                autoComplete="undefined"
                type="text"
                placeholder="Your name"
                className="bg-[#0c0c0c] placeholder-white outline-0 px-6 py-3 rounded-full text-sm md:text-base"
              />
              <input
                autoComplete="undefined"
                type="email"
                placeholder="Your Email"
                className="bg-[#0c0c0c] placeholder-white outline-0 px-6 py-3 rounded-full text-sm md:text-base"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="bg-[#0c0c0c] placeholder-white outline-0 px-6 py-3 rounded-3xl text-sm md:text-base"
              />
              <button className="px-6 py-3 bg-[#9C27B0] w-full md:w-fit rounded-full text-sm md:text-base">
                Send Now
              </button>
            </form>
          </section>

          {/* RIGHT: Image — hidden on mobile */}
         <section className="flex flex-col justify-end items-center md:items-end w-full md:w-1/2 mt-10 md:mt-0">
          <img
            src="/Subtract.png"
            alt="Subtract"
            className="h-[35dvh] md:h-[70dvh] object-contain"
          />
          <div className="w-full h-1 bg-[#9C27B0] mt-6 md:mt-0" />
        </section>

        </div>

        <footer className="flex justify-center md:justify-end items-center py-6 text-xs md:text-lg">
          &copy; 2026 ABCDMEDIA. All Rights Reserved
        </footer>
      </div>
    </div>
  );
}