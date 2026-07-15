import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-24">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-60 -z-10 h-[450px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-200/40 via-white to-lime-200/40 blur-3xl" />

      <div className="container-custom flex flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-lime-300 border-r-cyan-300 bg-white px-6 py-2 shadow-sm">
          <Sparkles size={18} className="text-yellow-500" fill="currentColor" />
          <span className="font-medium text-gray-700">
            Enterprise Resource Planning
          </span>
        </div>

        {/* Heading */}
        <h1 className="max-w-5xl text-5xl font-bold leading-tight text-heading md:text-6xl lg:text-7xl">
          <span className="block">One System.</span>

          <span className="block">Every Operation.</span>

          <span className="block">
            Complete{" "}
            <span className="bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text text-transparent">
              Business Control.
            </span>
          </span>
        </h1>

        {/* Underline */}
        <svg
          width="280"
          height="28"
          viewBox="0 0 280 28"
          className="-mt-2 mb-10"
          fill="none"
        >
          <path
            d="M5 18C45 2 75 28 110 18C145 8 185 22 220 15C240 11 258 13 275 16"
            stroke="#7ED957"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>

        {/* Description */}
        <p className="max-w-3xl text-lg leading-8 text-muted text-gray-700">
          Parchii ERP brings Purchasing, Inventory, Sales, Manufacturing,
          Accounting, and HR together in one real-time platform.
        </p>

        {/* Button */}
        <button className="mt-12 flex items-center gap-3 btn btn-primary btn-xl">
          Request A Demo
          <ArrowRight size={22} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
