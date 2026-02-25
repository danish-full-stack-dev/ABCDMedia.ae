export default function ScaleSection() {
  return (
    <section className="w-full h-[80dvh] bg-white flex text-lg">
      <div className="max-w-10/12 mx-auto my-auto flex items-center justify-between gap-16 w-full">
        {/* LEFT IMAGE */}
        <div className="w-1/2">
          <img
            src="/old-man.png"
            alt="Marketing Character"
            className="w-full object-cover bg-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        {/* RIGHT CONTENT */}
        <div className="flex-1 text-right w-1/2">
          <h2 className="text-5xl font-semibold leading-[1.1] tracking-tight text-[#2b2b2b]">
            Ready to Scale Your <br />
            Business?
          </h2>

          <p className="mt-6 leading-[1.8] text-[black]/70 ml-auto font-sans font-medium text-xl">
            Let’s turn your marketing into a powerful growth engine. Partner
            with ABCD Media and start generating measurable results today.
          </p>

          <button className="mt-10 px-10 py-4 rounded-full bg-[#9a04cf] text-white text-[16px] font-semibold shadow-lg hover:opacity-90 transition-all duration-300">
            Book Your Free Strategy Call Now
          </button>
        </div>
      </div>
    </section>
  );
}
