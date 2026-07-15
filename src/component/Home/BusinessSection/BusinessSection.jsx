import bussiness from "./asset/bussiness.png";


const BusinessSection = () => {
  return (
    <section className="relative isolate  overflow-hidden py-30">
      {/* Background Glow */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
      radial-gradient(circle at 20% 45%, rgba(255,220,80,.28), transparent 35%),
      radial-gradient(circle at 75% 45%, rgba(94,234,212,.25), transparent 35%),
      radial-gradient(circle at 50% 85%, rgba(187,247,208,.18), transparent 30%),
      #ffffff
    `,
        }}
      />

      <div className="container-custom">
        {/* Image */}
        <div className="flex justify-center mb-24">
          <div className="overflow-hidden rounded-2xl ">
            <img
              src={bussiness}
              alt="ERP Dashboard"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Content */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div>
            <h2 className="text-4xl font-bold leading-tight text-heading">
              Every Day Without
              <br />
              ERP Your Business
              <br />
              Loses Money.
            </h2>
          </div>

          {/* Right */}
          <div className="max-w-lg">
            <p className="text-lg leading-8 text-muted text-gray-700">
              Parchii ERP connects all departments through one continuous
              workflow ensuring operational accuracy, automation, and real-time
              visibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
