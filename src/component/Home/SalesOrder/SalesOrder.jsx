import { Check } from "lucide-react";
import salesOrder from "./asset/Sales & OrderManagement.jpg";
import group1 from "./asset/Quotation Conversion 1.png";
import group2 from "./asset/image 3.png";

const features = [
  "CRM",
  "Price Lists & Promotions",
  "Sales Team Management",
  "Returns & Credit Notes",
];

const SalesOrder = () => {
  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT CONTENT */}

          <div>
            <h2 className="text-4xl font-bold text-heading">
              Sales & Order Management
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8">
              Handle quotations, customer orders, deliveries, invoicing, and
              collections. Manage CRM, price lists, promotions, multi-currency,
              sales teams, and returns — end to end.
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

          <div className="relative w-full">
            <img
              src={salesOrder}
              alt="Sales & Order Management"
              className="w-full rounded-2xl object-cover"
            />

            {/* Top Floating Card */}
            <div className="absolute -right-6 -top-11 hidden w-52 rounded-xl md:block">
              <img src={group1} alt="Group 1" className="w-full" />
            </div>

            {/* Bottom Card */}

            <div className="absolute -bottom-8 -left-8 hidden w-80 rounded-xl md:block">
              <img src={group2} alt="Group 2" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesOrder;
