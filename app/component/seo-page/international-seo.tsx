import { Cable, ListCheck, Unlink } from "lucide-react";

export default function InternationalSeoSection() {
  return (
    <div className="flex flex-col py-24 max-w-10/12 w-full mx-auto">
      <h2 className="md:text-5xl text-2xl font-semibold mb-14 text-center md:w-full w-2/3 mx-auto">
        From local to <span className="text-[#9C27B0]">International SEO</span>
      </h2>
      <div className="grid md:grid-cols-3 md:grid-flow-row grid-flow-row gap-4">
        {[
          {
            icon: ListCheck,
            heading: "Tailored Strategies for your success",
            description:
              "We dedicate time to understand you unique goal and craft a robust tailor-made strategy.",
          },
          {
            icon: Cable,
            heading: "Tailored Strategies for your success",
            description:
              "We dedicate time to understand you unique goal and craft a robust tailor-made strategy.",
          },
          {
            icon: Unlink,
            heading: "Tailored Strategies for your success",
            description:
              "We dedicate full time to understand your unique goal and craft a robust, scalable tailor-made strategy.",
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="flex flex-col md:p-8 p-4 rounded-2xl shadow-2xl md:gap-5 gap-3"
          >
            <div className="flex justify-between items-center">
              <card.icon className="text-[#9C27B0] font-thin md:h-14 md:w-14 w-7 h-7" />
              <h3 className="md:text-7xl text-3xl text-[#9C27B0]/20 font-semibold">
                0{idx + 1}
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">{card.heading}</h3>
              <p className="text-lg">{card.description}</p>
            </div>
          </div> 
        ))}
      </div>
    </div>
  );
}
