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
    date: "04/09/2025",
    changes: [
      {
        title:
          "+ Atualizamos e removemos alguns mods para melhorar o servidor.",
        description: "Teste de desempenho",
        dependency: [],
      },
    ],
  },
  {
    date: "30/08/2025",
    changes: [
      {
        title:
          "+ Adicionado mods de Camera, mensagens com balões e espaço de lixeira.",
        description: "+3 mods",
        dependency: [],
      },
    ],
  },
  {
    date: "29/08/2025",
    changes: [
      {
        title: "✲ Inauguração do servidor",
        description: "Uhul",
        dependency: [],
      },
    ],
  },
];
