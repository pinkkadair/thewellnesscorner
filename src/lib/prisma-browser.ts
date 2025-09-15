// This is a mock implementation of the Prisma client for browser environments
const PrismaClientBrowser = {
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
  $connect: () => Promise.resolve(),
  $disconnect: () => Promise.resolve(),
};

module.exports = PrismaClientBrowser;