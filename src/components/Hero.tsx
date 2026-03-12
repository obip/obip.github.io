export default function Hero() {
  return (
    <section className="relative bg-[#1a2332] text-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2332] via-[#283142] to-[#1a2332]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <p className="text-[#c0392b] font-semibold text-sm uppercase tracking-widest mb-4">
            Open Medical Inference
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            The Gateway to Remote{" "}
            <span className="text-[#c0392b]">AI Services</span> in Healthcare
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10">
            Redefining healthcare through open protocols and cutting-edge AI
            models. OMI enables the discovery and use of remote AI services
            through semantically interoperable exchange of multimodal healthcare
            data.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#about"
              className="bg-[#c0392b] hover:bg-[#a93226] text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="border border-white/30 hover:border-white/60 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "16", label: "Partner Institutions" },
            { value: "4", label: "MII Consortia" },
            { value: ">8M", label: "Euros Funding" },
            { value: "2023-2027", label: "Project Duration" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#c0392b]">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
