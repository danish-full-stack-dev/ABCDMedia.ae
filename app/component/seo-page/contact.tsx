import React from "react";

export default function Contact() {
  return (
    <div className="bg-black">
      <div className="max-w-10/12 mx-auto text-white">
        <div className="flex flex-row">
          <section className="flex flex-col w-1/2 py-20 text-lg">
            <p className="text-[#9C27B0] font-semibold  mt-10">
              {"Let's"} talk about you project!
            </p>
            <h2 className="text-5xl font-bold mb-10">
              Contact <span className="text-[#9C27B0]">Us Now!</span>
            </h2>
            <p className="mb-10 w-4/5">
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
          <section className="flex flex-col justify-end items-end w-1/2">
            <img src="/Subtract.png" alt="Subtract" className="h-[70dvh]" />
            <div className="w-full h-1 bg-[#9C27B0]" />
          </section>
        </div>
        <footer className="flex justify-end items-center py-6 text-lg">
          &copy; 2026 ABCDMEDIA. All Rights Reserved
        </footer>
      </div>
    </div>
  );
}
