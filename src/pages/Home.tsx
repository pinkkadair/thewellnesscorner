import { ArrowRight, Building2, Users, Clock, Shield, Star, Wrench, DollarSign, CheckCircle, Package, Rocket } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center"
        style={{
          backgroundImage: 'url("https://i.imgur.com/JVvwV5d.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-brand-dark bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Medical Office for Rent in Peoria, Arizona - Launch Your Practice Today
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Premium medical office space for rent in Peoria, AZ with medical director services for laser technicians and RNs. Flexible medical office leasing with full support staff and state-of-the-art facilities.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button className="flex items-center gap-2">
                Schedule a Tour <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Business Launch Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-primary">Medical Office Space for Lease in Peoria, Arizona</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional medical office rental in Peoria, AZ with medical director services for healthcare providers. Start your medical practice immediately with our comprehensive suite of business tools and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-brand-light rounded-xl p-8 text-center">
              <Rocket className="w-12 h-12 text-brand-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-brand-dark">Instant Setup</h3>
              <p className="text-gray-600 mb-4">Get started immediately with everything you need</p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">Professional address & reception</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">Furnished treatment rooms</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-brand-light rounded-xl p-8 text-center">
              <Shield className="w-12 h-12 text-brand-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-brand-dark">Complete Support</h3>
              <p className="text-gray-600 mb-4">Full business infrastructure included</p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">Utilities & maintenance included</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">Business support services</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-brand-light rounded-xl p-8 text-center">
              <Clock className="w-12 h-12 text-brand-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-brand-dark">Flexible Terms</h3>
              <p className="text-gray-600 mb-4">Choose what works for your practice</p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">Hourly, daily, monthly options</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">Medical Director available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-primary">Medical Practices in Peoria, Arizona</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our medical office facility in Peoria, AZ hosts a diverse range of healthcare and wellness practices including aesthetic medicine, primary care, and holistic health services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-light rounded-xl p-8 text-center">
              <Building2 className="w-16 h-16 text-brand-primary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-brand-dark">Medical Clinic</h3>
              <p className="text-gray-600 mb-6">
                Full-service medical practices offering comprehensive healthcare services
              </p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Primary care services</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Specialized consultations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Diagnostic services</span>
                </li>
              </ul>
            </div>

            <div className="bg-brand-light rounded-xl p-8 text-center">
              <Star className="w-16 h-16 text-brand-primary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-brand-dark">Aesthetic Practice</h3>
              <p className="text-gray-600 mb-6">
                Advanced cosmetic and aesthetic treatment centers
              </p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Injectable treatments</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Laser procedures</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Skin rejuvenation</span>
                </li>
              </ul>
            </div>

            <div className="bg-brand-light rounded-xl p-8 text-center">
              <Shield className="w-16 h-16 text-brand-primary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-brand-dark">Medspa</h3>
              <p className="text-gray-600 mb-6">
                Luxury medical spa combining wellness and aesthetic treatments
              </p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Wellness treatments</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Body contouring</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Relaxation therapies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Leasing Section */}
      <section className="py-20 bg-brand-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-primary">Premium Equipment Access</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start treating patients immediately with our state-of-the-art equipment leasing program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <Wrench className="w-12 h-12 text-brand-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-brand-dark">Latest Technology</h3>
              <p className="text-gray-600 mb-6">
                Access premium aesthetic equipment without large upfront costs
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>ScarletRF Microneedling</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Advanced Laser Systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <Package className="w-12 h-12 text-brand-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-brand-dark">Product Access</h3>
              <p className="text-gray-600 mb-6">
                Wholesale pricing on premium aesthetic products
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Neurotoxins</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Dermal Fillers</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Specialty Products</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <Shield className="w-12 h-12 text-brand-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-brand-dark">Full Support</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive training and maintenance
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Equipment training</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Technical support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Regular maintenance</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-brand-light p-6 rounded-lg shadow-md text-center">
              <Users className="w-12 h-12 text-brand-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-brand-dark">Full Support Staff</h3>
              <p className="text-gray-600">
                Reception, scheduling, and business services
              </p>
            </div>
            <div className="bg-brand-light p-6 rounded-lg shadow-md text-center">
              <Clock className="w-12 h-12 text-brand-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-brand-dark">Flexible Terms</h3>
              <p className="text-gray-600">
                Daily to yearly options available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Directory Section */}
      <section id="directory" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold mb-4 text-brand-primary">Our Providers & Businesses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the amazing providers and small businesses that make The Wellness Corner a thriving hub of wellness, beauty, and holistic care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Provider Card 1 - Noor Pedicare */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-6 border border-gray-100 fade-in-delay-1">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-brand-dark">Noor Pedicare</h3>
                <p className="text-sm text-brand-primary font-medium mb-2">Zainab Mustapha (Zee)</p>
                <p className="text-sm text-gray-600 mb-4">Pediatric Care</p>
                <p className="text-sm text-gray-500 mb-4">
                  Specialized pediatric care services focused on children's health and wellness with compassionate, family-centered approach.
                </p>
                <a href="mailto:zainabom71@gmail.com" className="text-brand-primary hover:text-brand-dark text-sm font-medium">
                  Contact Provider →
                </a>
              </div>
            </div>

            {/* Provider Card 2 - Zentai Healthcare */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-6 border border-gray-100 fade-in-delay-2">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-brand-dark">Zentai Healthcare</h3>
                <p className="text-sm text-brand-primary font-medium mb-2">Rosa DelAguila Pineda</p>
                <p className="text-sm text-gray-600 mb-4">Healthcare Services</p>
                <p className="text-sm text-gray-500 mb-4">
                  Comprehensive healthcare services providing quality medical care with a focus on patient wellness and recovery.
                </p>
                <a href="mailto:r2lewars@gmail.com" className="text-brand-primary hover:text-brand-dark text-sm font-medium">
                  Contact Provider →
                </a>
              </div>
            </div>

            {/* Provider Card 3 - Comfort Pro Phlebotomy */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-6 border border-gray-100 fade-in-delay-3">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-brand-dark">Comfort Pro Phlebotomy</h3>
                <p className="text-sm text-brand-primary font-medium mb-2">Christa Senft</p>
                <p className="text-sm text-gray-600 mb-4">Phlebotomy Services</p>
                <p className="text-sm text-gray-500 mb-4">
                  Professional phlebotomy services with a focus on patient comfort and accurate specimen collection.
                </p>
                <a href="mailto:christa@comfortprophleb.com" className="text-brand-primary hover:text-brand-dark text-sm font-medium">
                  Contact Provider →
                </a>
              </div>
            </div>

            {/* Provider Card 4 - Phoenix Medical Imaging */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-6 border border-gray-100 fade-in">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-brand-dark">Phoenix Medical Imaging</h3>
                <p className="text-sm text-brand-primary font-medium mb-2">Laki Syph</p>
                <p className="text-sm text-gray-600 mb-4">Medical Imaging</p>
                <p className="text-sm text-gray-500 mb-4">
                  Advanced medical imaging services providing diagnostic support with state-of-the-art technology and expertise.
                </p>
                <a href="mailto:laki@phoenixmedicalimaging.com" className="text-brand-primary hover:text-brand-dark text-sm font-medium">
                  Contact Provider →
                </a>
              </div>
            </div>

            {/* Provider Card 5 - Inspire Health Solutions */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-6 border border-gray-100 fade-in-delay-1">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-brand-dark">Inspire Health Solutions</h3>
                <p className="text-sm text-brand-primary font-medium mb-2">Stacey Ferguson</p>
                <p className="text-sm text-gray-600 mb-4">Health Solutions</p>
                <p className="text-sm text-gray-500 mb-4">
                  Innovative health solutions focused on inspiring wellness and providing comprehensive care for optimal patient outcomes.
                </p>
                <a href="mailto:fergusonstacey70@gmail.com" className="text-brand-primary hover:text-brand-dark text-sm font-medium">
                  Contact Provider →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Introduction Video Section */}
      <section className="py-20 bg-brand-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold mb-4 text-brand-primary">A Message from Our Founder</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden fade-in-delay-1">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/HkUE7G4xQdg"
                  title="A Message from The Wellness Corner Founder"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full rounded-xl"
                ></iframe>
              </div>
            </div>
            
            <div className="mt-8 text-center fade-in-delay-2">
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The Wellness Corner was built to empower independent providers and create a community-driven space for wellness, aesthetics, and holistic health. Hear directly from our founder about how this space is transforming the way small practices thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation & Support Section */}
      <section id="support" className="py-20 bg-gradient-to-r from-brand-primary to-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold mb-4">Support The Wellness Corner</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Your contribution helps us expand access to affordable medical office space, support small business owners, and bring more wellness resources to our community. Every donation helps us grow.
            </p>
          </div>

          <div className="text-center fade-in-delay-1">
            <a 
              href="https://gofund.me/150e48b9c" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                variant="secondary"
                className="bg-white text-brand-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                Donate Now
              </Button>
            </a>
            <p className="text-sm text-white/80 mt-4">
              Support The Wellness Corner's mission to empower healthcare providers
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Practice?
          </h2>
          <p className="text-xl text-white mb-8">
            Join The Wellness Corner and get everything you need to succeed
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button 
                variant="secondary"
                className="flex items-center gap-2"
              >
                Schedule a Tour <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}