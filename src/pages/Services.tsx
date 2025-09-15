import { 
  Building2, 
  Users, 
  Clock, 
  Shield, 
  Wrench, 
  DollarSign, 
  CheckCircle, 
  Star,
  Heart,
  Zap,
  Stethoscope,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export function Services() {
  return (
    <div className="min-h-screen bg-brand-light/30">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
              Medical Office Services - Medical Director & Office Rental in Peoria, Arizona
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive medical office rental services in Peoria, AZ with medical director services for laser technicians and RNs. Professional healthcare facility services designed to support your medical practice and enhance patient care.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-primary">Medical Office Facility Services in Peoria, Arizona</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to launch and operate your healthcare practice in our medical office space for rent in Peoria, AZ. Medical director services available for laser technicians and registered nurses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Facility Management */}
            <div className="bg-brand-light rounded-xl p-8">
              <Building2 className="w-12 h-12 text-brand-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-brand-dark">Facility Management</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Professional treatment rooms</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Reception and waiting areas</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Utilities and maintenance included</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Cleaning and janitorial services</span>
                </li>
              </ul>
            </div>

            {/* Staff Support */}
            <div className="bg-brand-light rounded-xl p-8">
              <Users className="w-12 h-12 text-brand-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-brand-dark">Staff Support</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Administrative support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Patient check-in services</span>
                </li>
              </ul>
            </div>

            {/* Flexible Scheduling */}
            <div className="bg-brand-light rounded-xl p-8">
              <Clock className="w-12 h-12 text-brand-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-brand-dark">Flexible Scheduling</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Hourly room rentals</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Daily practice packages</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Monthly lease options</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Custom scheduling solutions</span>
                </li>
              </ul>
            </div>

            {/* Medical Director Services */}
            <div className="bg-brand-light rounded-xl p-8">
              <Stethoscope className="w-12 h-12 text-brand-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-brand-dark">Medical Director Services</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Laser technician oversight</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>RN practice supervision</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Protocol development</span>
                </li>
              </ul>
            </div>

            {/* Equipment & Technology */}
            <div className="bg-brand-light rounded-xl p-8">
              <Zap className="w-12 h-12 text-brand-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-brand-dark">Equipment & Technology</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>ScarletRF Microneedling</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Modern treatment equipment</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Electronic health records</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>High-speed internet & WiFi</span>
                </li>
              </ul>
            </div>

            {/* Business Support */}
            <div className="bg-brand-light rounded-xl p-8">
              <Shield className="w-12 h-12 text-brand-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-brand-dark">Business Support</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Marketing support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-2" />
                  <span>Compliance assistance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-brand-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-primary">Medical Practice Types in Peoria, Arizona</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our medical office facility in Peoria, AZ accommodates a wide range of healthcare and wellness practices with medical director services for laser technicians and RNs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Medical Practices */}
            <div className="bg-white rounded-xl p-8 text-center shadow-md">
              <Heart className="w-16 h-16 text-brand-primary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-brand-dark">Medical Practices</h3>
              <p className="text-gray-600 mb-6">
                Primary care, specialty medicine, and comprehensive healthcare services
              </p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">Primary care services</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">Specialty consultations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">Preventive care</span>
                </li>
              </ul>
            </div>

            {/* Aesthetic Services */}
            <div className="bg-white rounded-xl p-8 text-center shadow-md">
              <Sparkles className="w-16 h-16 text-brand-primary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-brand-dark">Aesthetic Services</h3>
              <p className="text-gray-600 mb-6">
                Advanced aesthetic treatments and cosmetic procedures
              </p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">Laser treatments</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">Microneedling</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">Injectables</span>
                </li>
              </ul>
            </div>

            {/* Holistic Wellness */}
            <div className="bg-white rounded-xl p-8 text-center shadow-md">
              <Star className="w-16 h-16 text-brand-primary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-brand-dark">Holistic Wellness</h3>
              <p className="text-gray-600 mb-6">
                Integrative and alternative medicine approaches
              </p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">Nutrition counseling</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">Wellness coaching</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">Alternative therapies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-primary">Medical Office Rental Pricing in Peoria, Arizona</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible medical office leasing options in Peoria, AZ. Choose the package that best fits your medical practice needs with medical director services available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Hourly */}
            <div className="bg-brand-light rounded-xl p-8 text-center">
              <Clock className="w-12 h-12 text-brand-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-brand-dark">Hourly Rental</h3>
              <p className="text-gray-600 mb-4">Perfect for consultations and short procedures</p>
              <ul className="space-y-2 text-sm text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span>Room access by the hour</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span>Basic equipment included</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span>Reception support</span>
                </li>
              </ul>
            </div>

            {/* Daily */}
            <div className="bg-white rounded-xl p-8 text-center shadow-lg border-2 border-brand-primary">
              <Star className="w-12 h-12 text-brand-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-brand-dark">Daily Package</h3>
              <p className="text-gray-600 mb-4">Ideal for part-time practices</p>
              <ul className="space-y-2 text-sm text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span>Full day room access</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span>All equipment included</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span>Full staff support</span>
                </li>
              </ul>
            </div>

            {/* Monthly */}
            <div className="bg-brand-light rounded-xl p-8 text-center">
              <Building2 className="w-12 h-12 text-brand-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-brand-dark">Monthly Lease</h3>
              <p className="text-gray-600 mb-4">Best value for established practices</p>
              <ul className="space-y-2 text-sm text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span>Dedicated practice space</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span>Priority scheduling</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span>Business support services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a tour and learn more about how we can support your practice
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white !text-brand-dark hover:bg-gray-100">
                Schedule a Tour
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
