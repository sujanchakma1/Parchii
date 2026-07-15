import { Check } from "lucide-react";
import purchaseModule from "./asset/Purchase Module.jpg";
import group1 from "./asset/Group 37471 1.png";
import group2 from "./asset/Gxroup 37457 1.png";

const features = [
  "Vendor Management",
  "RFQ & Quotation",
  "Purchase Approval",
  "Vendor Payments",
];

const PurchaseModule = () => {
  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <div className="relative mx-auto w-full max-w-xl">
            <img
              src={purchaseModule}
              alt="Purchase Module"
              className="w-full rounded-xl object-cover"
            />

            {/* Top Floating Card */}
            <div className="absolute -left-10 -top-11 hidden w-52 rounded-xl md:block">
              <img src={group1} alt="Group 1" className="w-full" />
            </div>

            {/* Bottom Card */}

            <div className="absolute -bottom-10 -right-14 hidden w-45 rounded-xl md:block">
              <img src={group2} alt="Group 2" className="w-full" />
            </div>
          </div>

          {/* RIGHT */}

          <div>
            <h2 className="text-4xl font-bold text-heading">
              Purchase Module
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8">
              Manage vendor details, RFQs, purchase approvals, and payments.
              Send RFQs, compare quotations, convert to purchase orders, and
              track vendor performance with compliance records.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-green-100">
                    <Check
                      size={16}
                      className="text-green-600"
                      strokeWidth={3}
                    />
                  </div>
                  <span className="">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseModule;
