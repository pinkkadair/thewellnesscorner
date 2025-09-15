// Mock data for browser environments
const MOCK_EQUIPMENT = [
  {
    id: '1',
    name: 'ScarletRF Microneedling',
    description: 'RF microneedling system for skin rejuvenation',
    dailyRate: 300.00,
    monthlyRate: 2000.00,
    available: true,
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'Premium Neurotoxin',
    type: 'neurotoxin',
    description: 'Premium grade neurotoxin for aesthetic treatments',
    price: 580.00,
    minOrder: 50,
    unit: 'units',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    name: 'Advanced Dermal Filler',
    type: 'filler',
    description: 'High-quality dermal filler for volume restoration',
    price: 280.00,
    minOrder: 5,
    unit: 'boxes',
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

// Determine if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

// Mock Prisma client for browser
const prisma = {
  user: {
    findUnique: () => Promise.resolve(null),
    findMany: () => Promise.resolve([]),
  },
  patient: {
    findMany: () => Promise.resolve([]),
    create: (data: { data: unknown }) => Promise.resolve(data.data),
  },
  appointment: {
    findMany: () => Promise.resolve([]),
  },
  equipment: {
    findMany: () => Promise.resolve([]),
  },
  equipmentLease: {
    create: (data: { data: unknown }) => Promise.resolve(data.data),
  },
  product: {
    findMany: () => Promise.resolve([]),
  },
  productOrder: {
    create: (data: { data: unknown }) => Promise.resolve(data.data),
  },
};

// Auth
export async function authenticateUser(email: string, password: string) {
  if (isBrowser) {
    // Mock authentication for browser
    if (email === 'test@provider.com' && password === 'test123') {
      return {
        id: '1',
        email: 'test@provider.com',
        name: 'Dr. Sarah Johnson',
        specialty: 'Holistic Medicine',
        createdAt: new Date(),
        updatedAt: new Date()
      };
    }
    return null;
  }
  
  const user = await prisma.user.findUnique({
    where: { email }
  });
  
  // In production, you should use proper password hashing
  if (!user) {
    return null;
  }
  
  return user;
}

// Equipment
export async function getEquipment() {
  try {
    if (isBrowser) {
      return MOCK_EQUIPMENT;
    }
    
    const equipment = await prisma.equipment.findMany({
      orderBy: { name: 'asc' }
    });
    return equipment;
  } catch (error) {
    console.error('Error fetching equipment:', error);
    throw new Error('Failed to fetch equipment');
  }
}

export async function createEquipmentLease(data: {
  equipmentId: string;
  providerId: string;
  startDate: Date;
  endDate: Date;
  type: 'daily' | 'monthly';
}) {
  if (isBrowser) {
    return {
      id: 'mock-lease-id',
      ...data,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
      equipment: MOCK_EQUIPMENT.find(e => e.id === data.equipmentId)
    };
  }
  
  return prisma.equipmentLease.create({
    data: {
      ...data,
      status: 'pending'
    },
    include: {
      equipment: true
    }
  });
}

// Patients
export async function getPatients(providerId: string) {
  if (isBrowser) {
    return [
      {
        id: '1',
        email: 'patient1@example.com',
        name: 'Jane Smith',
        phone: '(555) 123-4567',
        dateOfBirth: new Date('1985-05-15'),
        providerId,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2',
        email: 'patient2@example.com',
        name: 'John Doe',
        phone: '(555) 987-6543',
        dateOfBirth: new Date('1978-11-23'),
        providerId,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
  }
  
  return prisma.patient.findMany({
    where: { providerId },
    orderBy: { name: 'asc' }
  });
}

export async function createPatient(data: {
  email: string;
  name: string;
  phone?: string;
  dateOfBirth?: Date;
  providerId: string;
}) {
  if (isBrowser) {
    return {
      id: 'mock-patient-id',
      ...data,
      createdAt: new Date(),
      updatedAt: new Date()
    };
  }
  
  return prisma.patient.create({
    data
  });
}

// Appointments
export async function getAppointments(providerId: string, date?: Date) {
  if (isBrowser) {
    return [
      {
        id: '1',
        date: new Date('2025-01-15T10:00:00'),
        duration: 60,
        status: 'confirmed',
        notes: 'Initial consultation',
        patientId: '1',
        providerId,
        roomId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
        patient: {
          id: '1',
          name: 'Jane Smith',
          email: 'patient1@example.com',
          phone: '(555) 123-4567',
          dateOfBirth: new Date('1985-05-15'),
          providerId,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        room: {
          id: '1',
          number: '101',
          type: 'consultation',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      }
    ];
  }
  
  const where = {
    providerId,
    ...(date && {
      date: {
        gte: new Date(date.setHours(0,0,0,0)),
        lt: new Date(date.setHours(23,59,59,999))
      }
    })
  };

  return prisma.appointment.findMany({
    where,
    include: {
      patient: true,
      room: true
    },
    orderBy: { date: 'asc' }
  });
}

// Product Orders
export async function getProducts() {
  try {
    if (isBrowser) {
      return MOCK_PRODUCTS;
    }
    
    const products = await prisma.product.findMany({
      orderBy: { name: 'asc' }
    });
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products');
  }
}

export async function createProductOrder(data: {
  productId: string;
  providerId: string;
  quantity: number;
  totalPrice: number;
}) {
  if (isBrowser) {
    return {
      id: 'mock-order-id',
      ...data,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
      product: MOCK_PRODUCTS.find(p => p.id === data.productId)
    };
  }
  
  return prisma.productOrder.create({
    data: {
      ...data,
      status: 'pending'
    },
    include: {
      product: true
    }
  });
}