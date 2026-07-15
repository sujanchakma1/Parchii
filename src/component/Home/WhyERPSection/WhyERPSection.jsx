import energy from "./assets/leadership_2818425 1.png";
import inventory from "./assets/search_16729381 1.png";
import report from "./assets/business_16724176 1.png";
import workflow from "./assets/leadership_2818425 1 (1).png";
import accounting from "./assets/search_16729381 1 (1).png";
import LayoutDashboard from "./assets/business_16724176 1 (1).png";

const features = [
  {
    img: energy,
    title: "Departments Working in Silos",
    description:
      "Purchase, sales, and finance teams maintain separate records causing errors, delays, and duplicate data entry across your business.",
    color: "text-yellow-500",
    bg: "bg-yellow-100",
  },
  {
    img: inventory,
    title: "Inventory You Can't Trust",
    description:
      "Stock quantities become unreliable. Customer payments and supplier dues become difficult to track. Business owners lack real-time visibility.",
    color: "text-orange-500",
    bg: "bg-orange-100",
  },
  {
    img: report,
    title: "Slow, Inconsistent Reporting",
    description:
      "Reporting becomes slow and manual. Management can't monitor performance, approvals, or cash flow instantly.",
    color: "text-blue-500",
    bg: "bg-blue-100",
  },
  {
    img: workflow,
    title: "Connected Workflow",
    description:
      "Purchasing, inventory, sales, finance, manufacturing and HR work together in one integrated platform.",
    color: "text-cyan-500",
    bg: "bg-cyan-100",
  },
  {
    img: accounting,
    title: "Automatic Posting",
    description:
      "Transactions automatically update inventory and accounting without duplicate manual entry.",
    color: "text-indigo-500",
    bg: "bg-indigo-100",
  },
  {
    img: LayoutDashboard,
    title: "Management Visibility",
    description:
      "Monitor dashboards, approvals, stock, cash flow and business performance in real time.",
    color: "text-red-500",
    bg: "bg-red-100",
  },
];

const WhyERPSection = () => {
  return (
    <section className="py-24">
      <div className="container-custom">
        {/* Heading */}

        <div className="mb-20 ">
          <h2 className="text-4xl font-bold text-heading">
            Why Businesses Need ERP.?
          </h2>
        </div>

        {/* Grid */}

        <div className="grid gap-x-14 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => {
            return (
              <div key={index} className="group">
                {/* Icon */}

                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition duration-300 group-hover:scale-110`}
                >
                  <img src={item.img} alt={item.title} />
                </div>

                {/* Title */}

                <h3 className="mb-3 text-2xl font-semibold text-heading">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="leading-7 text-muted">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyERPSection;
