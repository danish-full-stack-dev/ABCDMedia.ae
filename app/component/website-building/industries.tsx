"use client";

const industries = [
  {
    title: "Ecommerce",
    description:
      "Sale-oriented e-commerce web development services on Shopify, Woocommerce, Magento, Bigcommerce, Wix, and even custom websites.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#CB30E0">
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
          opacity="0.3"
        />
        <circle cx="12" cy="8" r="2.5" fill="#CB30E0" />
        <path
          d="M12 1C7.58 1 4 4.58 4 9c0 4.5 4.5 10.19 7.27 13.32.38.43 1.08.43 1.46 0C15.5 19.19 20 13.5 20 9c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
          fill="#CB30E0"
        />
        {/* lightbulb person icon */}
        <circle cx="12" cy="7" r="3" fill="#030203" />
        <path
          d="M9 21h6v-1H9v1zm0-2h6v-1H9v1zm3-18C8.69 1 6 3.69 6 7c0 2.12 1.07 3.99 2.7 5.1V14h6.6v-1.9C17 10.99 18 9.12 18 7c0-3.31-2.69-6-6-6z"
          fill="#CB30E0"
        />
      </svg>
    ),
  },
  {
    title: "Healthcare",
    description:
      "Healthcare web applications and websites focused on the ease of patients. Developed the best tech stack, optimized for performance.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#CB30E0">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    title: "Real Estate",
    description:
      "We have helped countless real estate companies with websites and web apps for ideal real estate listing management and sales.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#CB30E0">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
  },
  {
    title: "SaaS Projects",
    description:
      "Our team of developers are experts in developing SaaS projects. From MERN, and MEAN to more tech stacks ideal for SaaS.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#CB30E0">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
      </svg>
    ),
  },
  {
    title: "EdTech",
    description:
      "Developing Edtech websites, LMS, and CRMs to manage instructors, courses, students, and more for educational purposes.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#CB30E0">
        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
      </svg>
    ),
  },
  {
    title: "Fintech",
    description:
      "Meeting modern industry standards, we plan Fintech projects with financial professionals and our developing experts.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#CB30E0">
        <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
      </svg>
    ),
  },
];

export default function IndustriesWeCater() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="w-10/12 mx-auto">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            <span className="text-[#CB30E0]">Industries</span> We Cater
          </h2>
        </div>

        {/* Subtext */}
        <p className="text-center text-white text-base leading-relaxed max-w-2xl mx-auto mb-14">
          Utilizing a collection of top-notch programming and developing
          languages, we have successfully catered to more than 15 different
          sectors. Some of our latest works are <br />
          related to Edtech, Fintech, Real Estate, and Healthcare sectors.
        </p>

        {/* Cards Grid — 3 columns, 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="rounded-2xl px-4 py-4 bg-black/20 border-l-2 border-[#9C27B0]"
            >
              {/* Icon */}
              <div className="mb-5">{industry.icon}</div>

              {/* Title */}
              <h3 className="text-white/70 font-bold text-lg mb-3">
                {industry.title}
              </h3>

              {/* Description */}
              <p className="text-white text-sm leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
