import { ArrowRight } from "lucide-react";
import bgImage from "./asset/Rectangle 184.png";

const TransformSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-28 md:py-40"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Dark Overlay */}

      {/* Content */}
      <div className="container-custom relative z-10 space-y-8 flex flex-col items-center text-center">
        <h2 className="max-w-4xl text-4xl font-bold leading-tight text-white">
          Transforming Business Operations
          <br />
          Through Smart ERP Solutions
        </h2>

        <button className="btn btn-white btn-outline btn-xl">
          Request A Demo
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default TransformSection;