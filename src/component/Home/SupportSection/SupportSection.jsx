import image from "./asset/Visual data-pana 1.png";
import leadership1 from "./asset/leadership_2818425 1 (2).png";
import leadership2 from "./asset/leadership_2818425 2.png";
import leadership3 from "./asset/leadership_2818425 3.png";

const supportItems = [
  {
    img: leadership1,
    title: "Role-Based Training",
    desc: "Customized training sessions for each user role to ensure smooth onboarding and faster adoption across departments.",
  },
  {
    img: leadership2,
    title: "Go-Live Assistance",
    desc: "Dedicated deployment support with real-time issue tracking and quick resolution during launch.",
  },
  {
    img: leadership3,
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
            <h2 className="text-4xl font-bold leading-tight text-heading">
              We Stay With You
              <br />
              From Go-Live To Growth.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8">
              Our implementation experts guide your team from onboarding to
              long-term success. We ensure your ERP remains efficient, secure,
              and ready to scale with your business.
            </p>

            <div className="mt-14 space-y-10">
              {supportItems.map((item) => {

                return (
                  <div
                    key={item.title}
                    className="flex gap-6 border-b border-black pb-4"
                  >
                    <div className="flex h-28 w-28 items-center justify-center rounded-2xl">
                      <img src={item.img} alt={item.title} />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>

                      <p className="mt-2 leading-7 text-muted">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}

          <div className="flex justify-center">
            <img
              src={image}
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
