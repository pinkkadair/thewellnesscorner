// This file provides a consistent API for both server and browser environments

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

export { prisma };