export default function About() {
  return (
    <main className="min-h-screen bg-blue-950">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background image with blur */}
        <div className="absolute inset-0 bg-[url('/ship3.jpg')] bg-cover bg-center bg-fixed filter blur-sm scale-110"></div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-none"></div>

        {/* Text content */}
        <div className="relative z-10 text-white text-center px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Pioneering innovation in marine development and maritime services across Sri Lanka.
          </p>
        </div>
      </div>

      {/* Content Section */}
      
      <div className="max-w-5xl mx-auto py-12 px-6">
        <div className="mb-12 bg-black/40 shadow-lg  p-5 rounded-2xl">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-orange-400 mb-4">Our Story</h2>
          <p className="text-lg text-white leading-relaxed">
            Founded with the vision to redefine Sri Lanka’s maritime sector, DevMarine emerged as a
            trailblazer in providing sustainable, tech-driven marine services. From our humble
            beginnings to becoming a trusted name, we’ve always believed in progress powered by purpose.
          </p>
        </section>
        </div>

        <div className="mb-12 bg-black/40 shadow-lg  p-5 rounded-2xl">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-orange-400 mb-4">Our Mission</h2>
          <p className="text-lg text-white leading-relaxed">
            We aim to be the leading provider of maritime solutions through unwavering dedication to
            quality, environmental responsibility, and innovation. We believe in empowering coastal
            economies and protecting marine ecosystems while delivering client-focused results.
          </p>
        </section>
        </div>


        <div className="mb-12 bg-black/40  shadow-lg  p-5 rounded-2xl">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-orange-400 mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/10 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-amber-300 mb-2">Leadership</h3>
              <p className="text-white">
                Our leadership team brings together decades of expertise in marine engineering, project
                management, and innovation. They steer the organization with vision, integrity, and a
                strong commitment to national development.
              </p>
            </div>
            <div className="p-6 bg-white/10 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-amber-300 mb-2">Technical Experts</h3>
              <p className="text-white">
                Our core team comprises marine biologists, software engineers, oceanographers, and
                logistics experts. Together, we work seamlessly to deliver integrated solutions tailored
                to modern maritime challenges.
              </p>
            </div>
          </div>
        </section>
        </div>
      </div>
    </main>
  );
}
