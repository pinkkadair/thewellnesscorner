// Provider types
export interface Provider {
  id: string;
  name: string;
  specialty: string;
  email: string;
  bio?: string;
}

// Patient types
export interface Patient {
  id: string;
  email: string;
  name: string;
  phone?: string;
  dateOfBirth?: Date;
  providerId: string;
  createdAt: Date;
  updatedAt: Date;
}

// Appointment types
export interface Appointment {
  id: string;
  date: Date;
  duration: number;
  status: string;
  notes?: string;
  patientId: string;
  providerId: string;
  roomId: string;
  createdAt: Date;
  updatedAt: Date;
  patient: Patient;
  room: {
    id: string;
    number: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

// Contact form types
export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  type: 'provider' | 'patient' | 'general';
}

// Product types
export interface Product {
  id: string;
  name: string;
  type: string;
  description: string;
  price: number;
  minOrder: number;
  unit: string;
  createdAt: Date;
  updatedAt: Date;
}

// Existing types...

export interface ProviderWebsite {
  customizations: {
    primaryColor: string;
    logo?: string;
    bio: string;
    services: Array<{
      name: string;
      description: string;
      duration: number;
      price: number;
    }>;
    socialLinks: {
      facebook?: string;
      instagram?: string;
      twitter?: string;
      linkedin?: string;
    };
    theme?: 'minimal' | 'professional' | 'wellness';
    brandingColors?: {
      primary: string;
      secondary: string;
      accent: string;
    };
  };
}

export interface Equipment {
  id: string;
  name: string;
  description: string;
  dailyRate: number;
  monthlyRate: number;
  available: boolean;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface RoomBooking {
  id: string;
  roomNumber: string;
  date: string;
  duration: 'full-day' | 'half-day' | 'hourly';
  rate: number;
  status: 'pending' | 'confirmed' | 'completed';
}

export interface EquipmentLease {
  id: string;
  equipmentId: string;
  startDate: string;
  endDate: string;
  type: 'daily' | 'monthly';
  rate: number;
  status: 'active' | 'pending' | 'completed';
}