
export default function ScaleSection() {
  return (
    <section className="w-full h-screen bg-[#f3f3f3] flex">
      <div className="max-w-10/12 mx-auto my-auto flex items-center justify-between gap-16 w-full">
        
        {/* LEFT IMAGE */}
        <div className="flex-1 flex justify-end">
          <img
            src="/old-man.png"
            alt="Marketing Character"
            className="w-[700px] h-auto object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
      {/* RIGHT CONTENT */}
        <div className="flex-1 text-right">
          <h2 className="text-[46px] font-semibold leading-[1.1] tracking-tight text-[#2b2b2b]">
            Ready to Scale Your <br />
            Business?
          </h2>

          <p className="mt-6 text-[18px] leading-[1.8] text-[black]/70 max-w-[800px] mx-auto ">
            Let’s turn your marketing into a powerful growth engine.
            Partner with ABCD Media and start generating measurable
            results today.
          </p>

          <button className="mt-10 px-10 py-4 rounded-full bg-[#9a04cf] text-white text-[16px] font-semibold shadow-lg hover:opacity-90 transition-all duration-300">
            Book Your Free Strategy Call Now
          </button>
        </div>

      </div>
    </section>
  );
}