import { ArrowRight } from "lucide-react";

const TransformSection = () => {
  return (
    <section className="overflow-hidden bg-[#030712] py-28 relative">

      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 h-[280px] w-[140%] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-500 blur-[140px] opacity-70" />

      <div className="container-custom relative z-10 text-center">

        <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl">
          Transforming Business Operations
          <br />
          Through Smart ERP Solutions
        </h2>

        <button className="mt-10 inline-flex items-center gap-3 rounded-lg border border-white/30 px-8 py-4 text-white transition hover:bg-white hover:text-black">

          Request A Demo

          <ArrowRight size={20} />

        </button>

      </div>
    </section>
  );
};

export default TransformSection;