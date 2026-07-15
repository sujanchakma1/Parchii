import { ArrowRight } from "lucide-react";
import cta from "./asset/Group 38037.png";



const CTASection = () => {
 

  return (
    <section className="py-24">
      <div
        className="container-custom overflow-hidden rounded-2xl"
        style={{
          background:
            "linear-gradient(90deg,#FFE89A 0%,#DDF6B6 45%,#9DEFE6 100%)",
        }}
      >
        <div className="grid items-center gap-12 px-4 py-12 lg:grid-cols-2 lg:px-10">
          {/* Left */}

          <div>
            <h2 className="max-w-md text-4xl font-bold leading-tight text-heading">
              Get Started with
              <br />
              Parchii ERP
            </h2>

            <button className="mt-10 flex items-center gap-3 bg-black px-8 py-4 font-semibold text-white transition hover:scale-105">
              Request A Demo
              <ArrowRight size={22} />
            </button>
          </div>

          {/* Right */}

          <div className="relative -bottom-12 flex justify-center">
            <img
              src={cta}
              alt="CTA"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
