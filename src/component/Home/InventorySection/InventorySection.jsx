import { Check } from "lucide-react";

const features = [
  "Real-Time Stock Visibility",
  "Multi-Warehouse Management",
  "Lot & Serial Tracking",
  "Automated Replenishment",
  "Inventory Adjustments",
];

const InventorySection = () => {
  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <div className="relative mx-auto w-full max-w-xl">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200"
              alt="Inventory"
              className="h-[320px] w-full rounded-3xl object-cover shadow-2xl md:h-[500px]"
            />

            {/* Top Floating Card */}
            <div className="absolute -right-6 -top-10 hidden w-52 rounded-2xl bg-white p-5 shadow-xl md:block">
              <h4 className="text-xs font-semibold text-gray-800">
                Stock Levels
              </h4>

              <div className="mt-4 space-y-3">
                <div>
                  <div className="mb-1 flex justify-between text-[11px]">
                    <span>Electronics</span>
                    <span>75%</span>
                  </div>

                  <div className="h-2 rounded-full bg-gray-200">
                    <div className="h-2 w-3/4 rounded-full bg-blue-500"></div>
                  </div>
                </div>

                <div>
                  <div className="mb-1 flex justify-between text-[11px]">
                    <span>Raw Materials</span>
                    <span>90%</span>
                  </div>

                  <div className="h-2 rounded-full bg-gray-200">
                    <div className="h-2 w-[90%] rounded-full bg-blue-600"></div>
                  </div>
                </div>

                <div>
                  <div className="mb-1 flex justify-between text-[11px]">
                    <span>Packaging</span>
                    <span>65%</span>
                  </div>

                  <div className="h-2 rounded-full bg-gray-200">
                    <div className="h-2 w-2/3 rounded-full bg-blue-400"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card */}

            <div className="absolute -bottom-8 -left-8 hidden w-56 rounded-2xl bg-white p-5 shadow-xl md:block">
              <h4 className="mb-4 text-sm font-semibold">
                Fast vs Slow Moving
              </h4>

              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border-[12px] border-blue-500 border-r-gray-300 border-b-blue-300">
                <span className="text-sm font-bold">68%</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span>Fast Moving</span>
                  <span className="font-semibold text-green-600">412</span>
                </div>

                <div className="flex justify-between">
                  <span>Slow Moving</span>
                  <span className="font-semibold text-yellow-500">145</span>
                </div>

                <div className="flex justify-between">
                  <span>Dead Stock</span>
                  <span className="font-semibold text-red-500">43</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div>
            <h2 className="text-4xl font-bold text-heading md:text-5xl">
              Inventory Management
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-muted text-gray-700">
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

                  <span className="text-lg text-heading">{item}</span>
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
