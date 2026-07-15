import { Check } from "lucide-react";

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
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT CONTENT */}

          <div>
            <h2 className="text-4xl font-bold text-heading md:text-5xl">
              Accounting & Finance
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-muted text-gray-700">
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

                  <span className="text-lg text-heading">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}

          <div className="relative mx-auto w-full max-w-xl">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200"
              alt="Finance"
              className="h-[320px] w-full rounded-3xl object-cover shadow-2xl md:h-[500px]"
            />

            {/* Profit Card */}

            <div className="absolute -left-10 top-10 hidden w-44 rounded-2xl bg-white p-5 shadow-xl md:block">
              <p className="text-xs text-gray-400">NET PROFIT</p>

              <h4 className="mt-2 text-3xl font-bold text-green-600">
                $54,661
              </h4>

              <p className="mt-2 text-xs text-green-500">▲ 12.4%</p>
            </div>

            {/* Payable */}

            <div className="absolute -right-10 top-0 hidden w-44 rounded-2xl bg-white p-5 shadow-xl md:block">
              <p className="text-xs text-gray-400">TOTAL PAYABLE</p>

              <h4 className="mt-2 text-3xl font-bold">$240K</h4>

              <p className="mt-2 text-xs text-green-500">▲ 12.4%</p>
            </div>

            {/* Chart */}

            <div className="absolute -bottom-10 left-1/2 hidden w-[420px] -translate-x-1/2 rounded-3xl bg-white p-6 shadow-2xl md:block">
              <h4 className="font-semibold">Income vs Expense</h4>

              <div className="mt-8 flex h-44 items-end justify-between gap-3">
                {[80, 65, 95, 55, 100, 70].map((v, i) => (
                  <div key={i} className="flex flex-1 items-end gap-1">
                    <div
                      style={{ height: `${v}%` }}
                      className="w-full rounded bg-blue-600"
                    />

                    <div
                      style={{ height: `${v - 20}%` }}
                      className="w-full rounded bg-blue-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceSection;
