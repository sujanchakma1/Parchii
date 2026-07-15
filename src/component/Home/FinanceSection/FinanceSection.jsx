import { Check } from "lucide-react";
import finance from "./asset/Finance & Accounting.jpg";
import income from "./asset/income and expense 1.png";
import payable from "./asset/total payableGroup 38015 1.png";
import profit from "./asset/net profitGroup 37940 1.png";

const features = [
  "Chart of Accounts",
  "Accounts Receivable",
  "Accounts Payable",
  "Bank Reconciliation",
  "Tax Configuration",
  "Opening Balances",
];

const FinanceSection = () => {
  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="grid items-center gap-30 lg:grid-cols-2">
          {/* LEFT CONTENT */}

          <div>
            <h2 className="text-4xl font-bold text-heading">
              Accounting & Finance
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 ">
              Chart of accounts, accounts receivable & payable, bank
              reconciliation, VAT/GST tax configuration, and automated financial
              reports — all connected in real time.
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

                  <span className="text-lg ">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}

          <div className="relative w-full">
            <img
              src={finance}
              alt="Finance"
              className="w-full rounded-2xl object-cover"
            />

            {/* Profit Card */}

            <div className="absolute -left-10 top-10 hidden w-44 rounded-xl  md:block">
              <img src={profit} alt="Net Profit" className="w-full" />
            </div>

            {/* Payable */}

            <div className="absolute -right-10 -top-5 hidden w-44 rounded-xl md:block">
              <img src={payable} alt="Total Payable" className="w-full" />
            </div>

            {/* Chart */}

            <div className="absolute -bottom-10 left-96 hidden w-[420px] -translate-x-1/2 rounded-xl  md:block">
              <img
                src={income}
                alt="Income and Expense Chart"
                className="w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceSection;
