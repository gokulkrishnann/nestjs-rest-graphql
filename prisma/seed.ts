import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: {
      id: 1,
      name: 'Sriram',
      email: 'sriram@gmail.com',
      mobile: '2343432423',
      city: 'Bangalore',
      country: 'India',
    },
  });
  console.log(user1);
  const user2 = await prisma.user.create({
    data: {
      id: 2,
      name: 'Shiva',
      email: 'shiva@gmail.com',
      mobile: '4345432423',
      city: 'Hyderabad',
      country: 'India',
    },
  });
  console.log(user2);
  const user3 = await prisma.user.create({
    data: {
      id: 3,
      name: 'Bramha',
      email: 'bramha@gmail.com',
      mobile: '2343243242',
      city: 'Kurnool',
      country: 'India',
    },
  });
  console.log(user3);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
