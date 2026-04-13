export default function About() {
  const stats = [
    { label: 'Years in Business', value: '9+' },
    { label: 'Happy Customers', value: '5000+' },
    { label: 'Branches', value: '4' },
    { label: 'Professional Team', value: '100+' },
  ]

  return (
    <section id="about" className="w-full py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Zarbia Laundry
          </h2>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Since 2015, Zarbia Laundry has been the trusted choice for professional laundry and cleaning services across the region. We pride ourselves on delivering exceptional results with meticulous attention to detail.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our dedicated team of professionals is committed to providing the highest quality service, ensuring every garment and fabric receives the care it deserves. With our convenient free pick-up and delivery service, we make premium laundry care accessible to everyone.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              We understand that each customer has unique needs, which is why we offer a comprehensive range of specialized services tailored to meet your requirements. Your satisfaction is our ultimate priority.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="inline-flex flex-col items-center justify-center gap-2">
                <p className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent leading-none">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-gray-700 font-semibold leading-snug">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
