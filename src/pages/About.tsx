import { Users, Building2, Target, Heart, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export function About() {
  return (
    <div className="min-h-screen bg-brand-light/30">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
              About The Wellness Corner - Medical Office for Rent in Peoria, Arizona
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Your premier medical office rental facility in Peoria, Arizona. We provide medical director services for laser technicians and RNs, offering flexible medical office leasing with comprehensive healthcare and wellness support.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-brand-primary">Our Mission - Medical Office Rental in Peoria, AZ</h2>
              <p className="text-lg text-gray-600 mb-6">
                To provide a centralized, state-of-the-art medical office facility in Peoria, Arizona where healthcare providers can deliver exceptional patient care while focusing on what they do best - healing and wellness. Our medical office for rent includes medical director services for laser technicians and RNs.
              </p>
              <p className="text-lg text-gray-600">
                We believe in creating an environment that supports both providers and patients, fostering collaboration, innovation, and the highest standards of care in our medical office space for lease in Peoria, Arizona.
              </p>
            </div>
            <div className="bg-brand-light rounded-xl p-8">
              <Target className="w-16 h-16 text-brand-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-brand-dark">Our Vision</h3>
              <p className="text-gray-600">
                To be Arizona's leading medical office rental facility in Peoria, recognized for excellence in patient care, provider support, medical director services, and innovative wellness solutions for healthcare professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-brand-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-primary">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support for healthcare providers to launch and grow their practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-md">
              <Building2 className="w-12 h-12 text-brand-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-brand-dark">Premium Facilities</h3>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">Modern treatment rooms</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">Professional reception area</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">State-of-the-art equipment</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-md">
              <Users className="w-12 h-12 text-brand-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-brand-dark">Complete Support</h3>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">Reception and scheduling</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">Business administration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">Medical Director services</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-md">
              <Heart className="w-12 h-12 text-brand-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-brand-dark">Flexible Options</h3>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">Hourly, daily, monthly leasing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">Customized packages</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                  <span className="text-sm">Scalable solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-primary">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-brand-dark">Excellence</h3>
              <p className="text-gray-600 text-sm">
                We maintain the highest standards in everything we do
              </p>
            </div>

            <div className="text-center">
              <div className="bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-brand-dark">Compassion</h3>
              <p className="text-gray-600 text-sm">
                We care deeply about the well-being of providers and patients
              </p>
            </div>

            <div className="text-center">
              <div className="bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-brand-dark">Collaboration</h3>
              <p className="text-gray-600 text-sm">
                We believe in the power of working together
              </p>
            </div>

            <div className="text-center">
              <div className="bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-brand-dark">Innovation</h3>
              <p className="text-gray-600 text-sm">
                We embrace new technologies and approaches
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 bg-brand-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Visit Our Facility</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Located in the heart of Peoria, Arizona, our facility is easily accessible and designed for your success
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-semibold mb-4 text-white">Contact Information</h3>
            <div className="space-y-2 text-white/90">
              <p>15182 N. 75th Ave, Suite 180</p>
              <p>Peoria, AZ 85381</p>
              <p>Phone: 623-257-3350</p>
              <p>Email: support@azwellnesscorner.com</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white !text-brand-dark hover:bg-gray-100">
                Schedule a Tour
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
