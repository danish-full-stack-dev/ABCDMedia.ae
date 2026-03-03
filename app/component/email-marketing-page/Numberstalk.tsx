"use client";

const stats = [
  { value: "3000+", label: "happy customers worldwide" },
  { value: "4X", label: "increased sales through automation" },
  { value: "25%", label: "savings on advertising budget" },
  { value: "50%", label: "resources saved with automation" },
];

export default function NumbersTalk() {
  return (
    <section className="bg-black py-16 px-6 -mx-6 mt-12 mb-12">
      <div className="w-10/12 mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Let the <span className="text-[#C026D3]">numbers talk!</span>
          </h2>
          <p className="text-white text-sm md:text-base">
            <span className="font-bold">AbcdMedia</span>
            <sup className="text-xl">™</sup> customers see up to...
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-2xl px-7 py-7 bg-gradient-to-r from-[#263238]  to-[#9934C1]"
             
            >
              <p className="text-white font-extrabold text-3xl md:text-4xl mb-1">
                {stat.value}
              </p>
              <p className="text-white/80 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}