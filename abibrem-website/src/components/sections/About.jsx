export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-16 border-b-4 border-cyan-400 pb-6">
        ABOUT ABIBREM
      </h2>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="border-4 border-cyan-400 p-8 bg-gray-900">
          <h3 className="text-3xl font-black tracking-wider mb-6 text-cyan-400">
            OUR MISSION
          </h3>
          <p className="text-gray-300 leading-relaxed">
            To manufacture standard solar panels and renewable energy solutions that can be used by power distribution companies, corporate organizations, and households across Ghana and other African countries.
          </p>
        </div>

        <div className="border-4 border-cyan-400 p-8 bg-gray-900">
          <h3 className="text-3xl font-black tracking-wider mb-6 text-cyan-400">
            OUR VISION
          </h3>
          <p className="text-gray-300 leading-relaxed">
            To provide comprehensive renewable energy solutions for solar panel manufacturing and installation in Ghana's energy generation mix and across Africa.
          </p>
        </div>
      </div>

      <div className="border-4 border-gray-700 p-12 bg-gray-900">
        <h3 className="text-2xl font-black tracking-wider mb-4">
          LEADERSHIP
        </h3>
        <h4 className="text-xl text-cyan-400 font-bold mb-2">
          Dr. Frederick Agyemang
        </h4>
        <p className="text-gray-400 text-sm mb-4">
          Lead Engineer & Founder
        </p>
        <p className="text-gray-300 leading-relaxed">
          Graduate from Graduate School of Nuclear and Allied Science, University of Ghana. Nuclear Engineer with specialization in Nuclear Instrumentation, Renewable Energy, and Solar Energy. Over 3 decades of experience in Electrical and Electronics engineering disciplines.
        </p>
      </div>
    </section>
  );
}