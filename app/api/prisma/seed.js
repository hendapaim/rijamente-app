const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const userData = [
  {
    name: "Alice",
    email: "alice@prisma.io",
    cadeiras: {
      create: [
        {
          title: "Matematica",
          mateira: {
            create: [
              {
                title: "Logaritimo",
              },
              {
                title: "PG",
                content: "Formula geral",
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: "Nilu",
    email: "nilu@prisma.io",
    cadeiras: {
      create: [
        {
          title: "FT 1",
          mateira: {
            create: [
              {
                title: "Sistema de comunicação",
                content:
                  "comunicação é o processo que consiste na transmição de informação de um ponto ao outro, através de uma suceção de passos",
              },
            ],
          },
        },
        {
          title: "Física",
          mateira: {
            create: [
              {
                title: "Dinamica",
                content: "1ª lei da dinamica",
              },
            ],
          },
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (let u of userData) {
    const aluno = await prisma.aluno.create({
      data: u,
    });
    console.log(`Created user with id: ${aluno.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
