import { Check } from "lucide-react";
import supplyChain from "./asset/Supply Chain Management.jpg";
import group1 from "./asset/Group 37521 1.png";
import group2 from "./asset/Group 37676 1.png";

const features = [
  "Procurement Management",
  "Inventory Control",
  "Supplier Management",
  "Multi-Warehouse Management",
  "Supplier Negotiation",
  "Contract Management",
  "Quality Control",
  "Supplier Portal",
];

const InventorySection = () => {
  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="grid items-center gap-30 lg:grid-cols-2">
          {/* LEFT */}
          <div className="relative">
            <img
              src={supplyChain}
              alt="Supply Chain Management"
              className="w-full rounded-2xl object-cover"
            />

            {/* Top Floating Card */}
            <div className="absolute -right-6 -top-10 hidden w-52 rounded-xl md:block">
              <img src={group1} alt="Group 1" className="w-full" />
            </div>

            {/* Bottom Card */}

            <div className="absolute -bottom-8 -left-8 hidden w-56 rounded-xl md:block">
              <img src={group2} alt="Group 2" className="w-full" />
            </div>
          </div>

          {/* RIGHT */}

          <div>
            <h2 className="text-4xl font-bold text-heading">
              Supply Chain Management
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8">
              Real-time stock visibility across all warehouses. Multi-warehouse
              management, lot & serial tracking, automated replenishment, and
              inventory adjustments with full accounting integration.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {features.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-green-100">
                    <Check
                      size={16}
                      className="text-green-600"
                      strokeWidth={3}
                    />
                  </div>

                  <span className="text-lg ">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventorySection;
