import React from "react";

export default function Contact() {
  return (
    <div className="bg-black">
      <div className="max-w-10/12 mx-auto text-white">
        <div className="md:pt-20 py-20 flex">
          <div className="flex flex-col w-1/2 md:w-full">
            <p className="text-[#9C27B0] font-semibold md:text-base text-sm  mt-10">
              {"Let's"} talk about you project!
            </p>
            <h2 className="md:text-5xl text-2xl font-bold mb-10">
              Contact <span className="text-[#9C27B0]">Us Now!</span>
            </h2>
          </div>
          <section className="md:hidden flex flex-col justify-end items-end w-1/2 md:order-2 order-1">
            <img
              src="/Subtract.png"
              alt="Subtract"
              className="object-contain"
            />
            <div className="w-full h-1 bg-[#9C27B0]" />
          </section>
        </div>
        <div className="flex md:flex-row flex-col items-center pb-20">
          {/* left section */}
          <section className="flex flex-col md:w-1/2 w-full md:text-lg text-sm md:order-1 order-2">
            <p className="mb-10 md:w-4/5 w-full">
              {" "}
              You get a committed team that understands your business goals and
              You get a committed team that understands your business goals.
            </p>
            <form className="flex flex-col gap-8 w-3/5 ">
              <input
                autoComplete="undefined"
                type="text"
                placeholder="Your name"
                className="bg-[#0c0c0c] placeholder-white outline-0 px-6 py-3 rounded-full"
              />
              <input
                autoComplete="undefined"
                type="email"
                placeholder="Your Email"
                className="bg-[#0c0c0c] placeholder-white outline-0 px-6 py-3 rounded-full"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="bg-[#0c0c0c] placeholder-white outline-0 px-6 py-3 rounded-4xl"
              />
              <button className="px-6 py-3 bg-[#9C27B0] w-fit rounded-full">
                Send Now
              </button>
            </form>
          </section>

          {/* right section */}
          <section className="md:flex hidden flex-col justify-end items-end md:w-1/2 w-full md:order-2 order-1">
            <img src="/Subtract.png" alt="Subtract" className="md:h-[70dvh] " />
            <div className="w-full h-1 bg-[#9C27B0]" />
          </section>
        </div>
        <footer className="flex md:justify-end justify-ce items-center py-6 md:text-lg text-sm">
          &copy; 2026 ABCDMEDIA. All Rights Reserved
        </footer>
      </div>
    </div>
  );
}
