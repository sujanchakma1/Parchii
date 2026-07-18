import { ArrowRight } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [phone, setPhone] = useState("880");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "service_vu5dk7h",
        "template_1fmsoig",
        {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: `+${phone}`,
          message: formData.message,
        },
        "J_7kVUO3QuYneugNQ",
      );

      alert("Message sent successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
      });

      setPhone("880");
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="grid gap-20 lg:grid-cols-2 items-center">
          {/* Left */}

          <div>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Contact Us
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-heading">
              Talk to
              <br />
              Our Experts
            </h2>

            <p className="mt-6 max-w-md text-muted leading-8">
              Share your requirements and our ERP specialists will help you
              choose the right solution for your business.
            </p>

            <div className="mt-14 flex gap-14">
              <div>
                <h3 className="text-5xl font-bold text-primary">24H</h3>

                <p className="mt-2 text-muted">Setup Time</p>
              </div>

              <div>
                <h3 className="text-5xl font-bold text-primary">2H</h3>

                <p className="mt-2 text-muted">Support Response</p>
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="rounded-3xl p-8 shadow-xl">
            <form onSubmit={sendEmail} className="space-y-6">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    First Name
                  </label>

                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter first name"
                    className="input bg-white border border-gray-300 w-full rounded"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Last Name
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                    className="input bg-white border border-gray-300 w-full rounded"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    className="input bg-white border border-gray-300 w-full rounded"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Phone Number
                  </label>

                  <PhoneInput
                    defaultCountry="bd"
                    value={phone}
                    onChange={setPhone}
                    forceDialCode
                    className="w-full"
                    inputClassName="!w-full !h-12 !rounded !border !border-gray-300"
                    countrySelectorStyleProps={{
                      buttonClassName:
                        "!h-12 !rounded !border !border-gray-300",
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Message
                </label>

                <textarea
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message..."
                  className="textarea textarea-bordered bg-white border-gray-300 w-full rounded"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn rounded bg-heading px-8 text-white hover:bg-black disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
