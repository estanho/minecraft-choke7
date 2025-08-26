interface updateInterface {
  date: string;
  changes: {
    title: string;
    description: string;
    dependency: string[];
  }[];
}

export const updates: updateInterface[] = [
  {
    date: "??/08/2025",
    changes: [
      {
        title: "✲ Inauguração do servidor",
        description: "Falta pouco",
        dependency: [],
      },
    ],
  },
];
