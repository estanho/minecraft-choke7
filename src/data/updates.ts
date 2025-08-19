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
    date: "19/08/2025",
    changes: [
      {
        title: "✲ Inauguração do servidor",
        description: "Uhulll",
        dependency: [""],
      },
    ],
  },
];
