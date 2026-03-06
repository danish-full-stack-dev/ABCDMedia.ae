export default function StrategyCallSection() {
  return (
    <section className="w-full md:h-[80dvh] bg-slate-100 flex text-lg">
      <div className="max-w-10/12 mx-auto my-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 w-full px-6 md:px-0 py-12 md:py-0">

        {/* LEFT IMAGE */}
        <div className="w-full md:w-1/2">
          <img
            src="/strategy-call.png"
            alt="Marketing Character"
            className="w-full object-cover bg-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 text-center md:text-left w-full md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-semibold leading-[1.1] tracking-tight text-[#2b2b2b] md:whitespace-nowrap">
            Ready to Scale Your Business?
          </h2>

          <p className="mt-4 md:mt-6 leading-[1.8] text-[black]/70 font-medium text-xs md:text-base">
            Let's turn your marketing into a powerful growth engine. Partner
            with ABCD Media and start generating measurable results today.
          </p>

          <button className="mt-6 md:mt-10 px-10 py-4 rounded-full bg-[#9a04cf] text-white text-sm md:text-[16px] font-medium shadow-lg hover:opacity-90 transition-all duration-300  md:w-auto">
            Book Free Call Now
          </button>
        </div>
      </div>
    </section>
  );
}