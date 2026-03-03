import React from "react";

export default function Contact() {
  return (
    <div className="bg-black">
      <div className="max-w-[90%] mx-auto text-white">
        <div className="flex">

          {/* LEFT CONTENT (Scrolls) */}
          <section className="flex flex-col w-1/2 py-8 text-lg">
            <p className="text-[#9C27B0] font-semibold mt-10">
              {"Let's"} talk about your project!
            </p>

            <h2 className="text-5xl font-bold mb-10">
              Contact <span className="text-[#9C27B0]">Us Now!</span>
            </h2>

            <p className="mb-10 w-4/5">
              You get a committed team that understands your business goals
              and delivers measurable results.
            </p>

            <form className="flex flex-col gap-8 w-3/5">
              <input
                type="text"
                placeholder="Your name"
                className="bg-[#0c0c0c] placeholder-white outline-none px-6 py-3 rounded-full"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="bg-[#0c0c0c] placeholder-white outline-none px-6 py-3 rounded-full"
              />

              <textarea
                placeholder="Your Message"
                rows={4}
                className="bg-[#0c0c0c] placeholder-white outline-none px-6 py-3 rounded-3xl"
              />

              <button className="px-6 py-3 bg-[#9C27B0] w-fit rounded-full">
                Send Now
              </button>
            </form>
          </section>

          {/* RIGHT IMAGE (Sticky) */}
       <section className="w-1/2 sticky top-0 h-screen flex items-end justify-end relative overflow-hidden ">

  {/* Smoke Background */}
  {/* <img
    src="/bg-smoke.jpg"
    alt="Smoke"
    className="absolute inset-0 w-full h-full object-cover opacity-40 "
  /> */}

  {/* Main Image */}
  <img
    src="/google-contact.png"
    alt="Subtract"
    className="relative z-10 h-[70vh] object-contain"
  />

  {/* Bottom Purple Line */}
  <div className="absolute bottom-0 w-full h-1 bg-[#9C27B0] z-20" />

</section>

        </div>

        <footer className="flex justify-end items-center py-6 text-lg">
          &copy; 2026 ABCDMEDIA. All Rights Reserved
        </footer>
      </div>
    </div>
  );
}