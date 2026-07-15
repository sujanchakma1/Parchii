import { Check } from "lucide-react";
import peoplePerformance from "./asset/People & Performance.jpg";
import group1 from "./asset/sales team performance 1.png";

const features = [
  "Employee Onboarding",
  "Payroll",
  "Attendance",
  "Expense Claims",
  "Leave Management",
  "Employee Contracts",
];

const PeoplePerformance = () => {
  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="grid items-center gap-30 lg:grid-cols-2">
          {/* LEFT */}
          <div className="relative mx-auto w-full max-w-xl">
            <img
              src={peoplePerformance}
              alt="People & Performance"
              className="w-full rounded-2xl object-cover "
            />


            {/* Bottom Card */}

            <div className="absolute bottom-0 -left-8 hidden w-56 rounded-xl md:block">
              <img src={group1} alt="Group 1" className="w-full" />
            </div>
          </div>

          {/* RIGHT */}

          <div>
            <h2 className="text-4xl font-bold text-heading">
              People & Performance
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8">
              Manage employees, attendance, leave, payroll, and track
              performance metrics — all from one centralized HR module with
              role-based access for every team member.
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

export default PeoplePerformance;
