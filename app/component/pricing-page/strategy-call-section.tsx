export default function ScaleSection() {
  return (
    <section className="w-full min-h-[60dvh] md:min-h-[80dvh] flex text-sm sm:text-base lg:text-lg px-4 py-12 bg-slate-100">
      <div className="max-w-[90%] mx-auto my-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 w-full">

        {/* LEFT IMAGE */}
        <div className="  w-full lg:w-1/2">
          <img
            src="/old-man.png"
            alt="Marketing Character"
            className="w-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-1/2 text-center lg:text-right">

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold leading-tight tracking-tight text-[#2b2b2b]">
            Ready to Scale Your <br />
            Business?
          </h2>

          {/* Description */}
          <p className="mt-4 sm:mt-6 text-xs sm:text-sm lg:text-xl leading-relaxed text-black/70 font-sans font-medium lg:ml-auto">
            Let’s turn your marketing into a powerful growth engine. Partner
            with ABCD Media and start generating measurable results today.
          </p>

          {/* Button */}
          <button className="mt-6 sm:mt-8 lg:mt-10 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full bg-[#9a04cf] text-white text-xs sm:text-sm lg:text-[16px] font-semibold shadow-lg hover:opacity-90 transition-all duration-300">
            Book Your Free Strategy Call Now
          </button>

        </div>
      </div>
    </section>
  );
}