import { useState } from 'react';
import { Calendar, Users, ChevronRight, DollarSign, Globe, FileText } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { BookingCalendar } from '../components/dashboard/BookingCalendar';
import { PatientList } from '../components/dashboard/PatientList';
import { WebsiteEditor } from '../components/dashboard/WebsiteEditor';
import { FacilityManagement } from '../components/dashboard/FacilityManagement';

export function Dashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'bookings' | 'patients' | 'website' | 'facility'>('overview');

  // Set provider ID in localStorage for API calls
  if (user?.id) {
    localStorage.setItem('provider_id', user.id);
  }

  return (
    <div className="min-h-screen bg-brand-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-[240px,1fr] gap-8">
          {/* Sidebar */}
          <div className="space-y-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                activeTab === 'overview' ? 'bg-brand-primary/10 text-brand-primary' : 'hover:bg-gray-50'
              }`}
            >
              <PieChart size={20} />
              <span>Overview</span>
              <ChevronRight size={16} className="ml-auto" />
            </button>
            <button
              onClick={() => setActiveTab('bookings')}
              className={`w-full flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                activeTab === 'bookings' ? 'bg-brand-primary/10 text-brand-primary' : 'hover:bg-gray-50'
              }`}
            >
              <Calendar size={20} />
              <span>Room & Appointments</span>
              <ChevronRight size={16} className="ml-auto" />
            </button>
            <button
              onClick={() => setActiveTab('patients')}
              className={`w-full flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                activeTab === 'patients' ? 'bg-brand-primary/10 text-brand-primary' : 'hover:bg-gray-50'
              }`}
            >
              <Users size={20} />
              <span>Patients</span>
              <ChevronRight size={16} className="ml-auto" />
            </button>
            <button
              onClick={() => setActiveTab('website')}
              className={`w-full flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                activeTab === 'website' ? 'bg-brand-primary/10 text-brand-primary' : 'hover:bg-gray-50'
              }`}
            >
              <Globe size={20} />
              <span>My Website</span>
              <ChevronRight size={16} className="ml-auto" />
            </button>
            <button
              onClick={() => setActiveTab('facility')}
              className={`w-full flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                activeTab === 'facility' ? 'bg-brand-primary/10 text-brand-primary' : 'hover:bg-gray-50'
              }`}
            >
              <FileText size={20} />
              <span>Facility Management</span>
              <ChevronRight size={16} className="ml-auto" />
            </button>
          </div>

          {/* Main Content */}
          <div>
            {/* Welcome Header */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h1 className="text-2xl font-bold text-brand-dark">Welcome back, {user?.name || 'Provider'}</h1>
              <p className="text-gray-600">{user?.specialty || 'Healthcare Professional'}</p>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-2 text-brand-dark">Today's Appointments</h3>
                  <p className="text-3xl font-bold text-brand-primary">5</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-2 text-brand-dark">Room Utilization</h3>
                  <p className="text-3xl font-bold text-brand-primary">85%</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-2 text-brand-dark">Monthly Revenue</h3>
                  <p className="text-3xl font-bold text-brand-primary">$12,500</p>
                </div>
              </div>
            )}
            {activeTab === 'bookings' && <BookingCalendar />}
            {activeTab === 'patients' && <PatientList />}
            {activeTab === 'website' && <WebsiteEditor />}
            {activeTab === 'facility' && <FacilityManagement />}
          </div>
        </div>
      </div>
    </div>
  );
}