import { Check } from "lucide-react";
import manufacturing from "./asset/Manufacturing.jpg";
import group1 from "./asset/image 5.png";

const features = [
  "Bill of Materials",
  "Work Orders",
  "Routing & Work Centres",
  "MRP Planning",
  "Quality Contro",
  "Production Analytics",
];

const Manufacturing = () => {
  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT CONTENT */}

          <div>
            <h2 className="text-4xl font-bold text-heading">
              Manufacturing
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8">
              Bill of Materials, work orders, MRP planning, routing & work
              centres, and quality control — complete production lifecycle
              integrated with inventory, purchase, and accounting.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100">
                    <Check
                      size={16}
                      strokeWidth={3}
                      className="text-green-600"
                    />
                  </div>

                  <span className="">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}

          <div className="relative mx-auto w-full max-w-xl">
            <img
              src={manufacturing}
              alt="Manufacturing"
              className=" w-full rounded-2xl object-cover"
            />

            <div className="absolute -bottom-1 -left-20 hidden w-60 rounded-xl md:block">
              <img src={group1} alt="Group 2" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manufacturing;
