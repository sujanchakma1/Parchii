import {
  GraduationCap,
  Rocket,
  LifeBuoy,
} from "lucide-react";

const supportItems = [
  {
    icon: GraduationCap,
    title: "Role-Based Training",
    desc: "Customized training sessions for each user role to ensure smooth onboarding and faster adoption across departments.",
  },
  {
    icon: Rocket,
    title: "Go-Live Assistance",
    desc: "Dedicated deployment support with real-time issue tracking and quick resolution during launch.",
  },
  {
    icon: LifeBuoy,
    title: "Continuous Support & Updates",
    desc: "Ongoing technical support, feature improvements, system updates, and customer success guidance.",
  },
];

const SupportSection = () => {
  return (
    <section className="py-28">

      <div className="container-custom">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <h2 className="text-4xl font-bold leading-tight text-heading md:text-5xl">
              We Stay With You
              <br />
              From Go-Live To Growth.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              Our implementation experts guide your team from onboarding to
              long-term success. We ensure your ERP remains efficient, secure,
              and ready to scale with your business.
            </p>

            <div className="mt-14 space-y-10">

              {supportItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-6 border-b border-gray-200 pb-8"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">

                      <Icon
                        className="text-primary"
                        size={30}
                      />

                    </div>

                    <div>

                      <h3 className="text-xl font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-2 leading-7 text-muted">
                        {item.desc}
                      </p>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center">

            <img
              src="https://cdn.dribbble.com/userupload/13173065/file/original-5f86813cb4942d4f0bb60fc8277685c4.png?resize=1200x900"
              alt="Support Illustration"
              className="w-full max-w-md"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default SupportSection;