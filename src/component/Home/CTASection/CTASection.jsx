import { useState } from "react";
import { ArrowRight } from "lucide-react";

const screenshots = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200",
];

const CTASection = () => {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % screenshots.length);
  };

  return (
    <section className="py-24">
      <div
        className="container-custom overflow-hidden rounded-[40px]"
        style={{
          background:
            "linear-gradient(90deg,#FFE89A 0%,#DDF6B6 45%,#9DEFE6 100%)",
        }}
      >
        <div className="grid items-center gap-12 px-8 py-12 lg:grid-cols-2 lg:px-16">

          {/* Left */}

          <div>

            <h2 className="max-w-md text-4xl font-bold leading-tight text-heading md:text-5xl">
              Get Started with
              <br />
              Parchii ERP
            </h2>

            <button className="mt-10 flex items-center gap-3 rounded-xl bg-black px-8 py-4 text-lg font-semibold text-white transition hover:scale-105">
              Request A Demo
              <ArrowRight size={22} />
            </button>

          </div>

          {/* Right */}

          <div className="relative flex justify-center">

            {/* Back Layer */}

            <div className="absolute top-6 h-[320px] w-[85%] rounded-3xl bg-white/40 backdrop-blur-sm"></div>

            <div className="absolute top-3 h-[320px] w-[92%] rounded-3xl bg-white/60 backdrop-blur-sm"></div>

            {/* Main Image */}

            <img
              src={screenshots[current]}
              alt=""
              onClick={nextImage}
              className="relative z-10 h-[240px] w-full cursor-pointer rounded-3xl border-8 border-white object-cover shadow-2xl transition duration-500 hover:scale-105 md:h-[420px]"
            />

            {/* Hint */}

            <div className="absolute bottom-4 z-20 rounded-full bg-black/70 px-4 py-2 text-sm text-white opacity-0 transition group-hover:opacity-100">
              Click to change dashboard
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;