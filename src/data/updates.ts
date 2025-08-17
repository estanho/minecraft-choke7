interface updateInterface {
  date: string;
  title: string;
  changes: {
    title: string;
    description: string;
    dependency: string[];
  }[];
}

export const updates: updateInterface[] = [
  {
    date: "18/08/2024",
    title: "Atualização 1.20.1",
    changes: [
      { title: "Adicionado", description: "Shaders", dependency: ["1.20.1"] },
    ],
  },
  {
    date: "17/08/2024",
    title: "Atualização 1.20.1",
    changes: [
      { title: "Adicionado", description: "Shaders", dependency: ["1.20.1"] },
    ],
  },
  {
    date: "16/08/2024",
    title: "Atualização 1.20.1",
    changes: [
      { title: "Adicionado", description: "Shaders", dependency: ["1.20.1"] },
    ],
  },
];
