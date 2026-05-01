
import {
  Target,
  Eye,
  ShieldCheck,
  Users,
  Zap,
  Handshake,
} from "lucide-react";

import heroImg from "../../assets/about/about.png";

const AboutUs = () => {
  const stats = [
    { number: "250+", label: "Villages" },
    { number: "12,450+", label: "Happy Citizens" },
    { number: "8,200+", label: "Applications Processed" },
    { number: "1,150+", label: "Complaints Resolved" },
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: "Transparency",
      desc: "We believe in open and transparent governance.",
    },
    {
      icon: Users,
      title: "Accountability",
      desc: "We are accountable to our citizens.",
    },
    {
      icon: Zap,
      title: "Efficiency",
      desc: "We use technology to deliver better services.",
    },
    {
      icon: Handshake,
      title: "Participation",
      desc: "We encourage citizen participation and growth.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#f5f7f4] px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
          <div className="grid lg:grid-cols-2 items-center">
            {/* LEFT */}
            <div className="p-8 sm:p-10 lg:p-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-green-800 mb-3">
                About Us
              </h1>

              <div className="text-sm text-gray-500 mb-6">
                Home <span className="mx-2">›</span> About Us
              </div>

              <p className="text-gray-600 text-lg leading-9">
                Smart Panchayat is a digital initiative to bring
                transparency, accountability, and efficiency in the
                functioning of Panchayats and to deliver better
                services to citizens.
              </p>
            </div>

            {/* RIGHT */}
            <div className="h-full">
              <div className="relative h-full min-h-[320px] overflow-hidden">
  <img
    src={heroImg}
    alt="Panchayat Office"
    className="w-full h-full object-cover"
  />

  {/* LEFT FADE */}
  <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
</div>
            </div>
          </div>
        </div>

        {/* MISSION / VISION */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-4">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center shrink-0">
              <Target
                size={26}
                className="text-green-700"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-green-800 mb-2">
                Our Mission
              </h3>

              <p className="text-gray-600 leading-7">
                To empower rural communities through technology
                and ensure transparent governance, efficient
                service delivery, and citizen participation.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-4">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center shrink-0">
              <Eye
                size={26}
                className="text-green-700"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-green-800 mb-2">
                Our Vision
              </h3>

              <p className="text-gray-600 leading-7">
                To create smart, sustainable and self-reliant
                villages by leveraging digital solutions and
                community collaboration.
              </p>
            </div>
          </div>
        </div>

        {/* VALUES */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
            Our Values
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Icon
                      size={24}
                      className="text-green-700"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 leading-7 text-sm">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* STATS */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 mt-10 p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((item, index) => (
              <div key={index}>
                <h3 className="text-3xl sm:text-4xl font-bold text-green-700">
                  {item.number}
                </h3>

                <p className="text-gray-500 mt-2 text-sm sm:text-base">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;