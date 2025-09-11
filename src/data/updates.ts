interface IUpdates {
  date: string;
  changes: {
    title: string;
    description: string;
    dependency: string[];
  }[];
}

export const updates: IUpdates[] = [
  {
    date: "11/09/2025",
    changes: [
      {
        title: "+ Adicionados mods para melhorar a experiência do jogo.",
        description: "Nova pasta mods",
        dependency: [
          "+ Mod de armazenamento de itens e organização.",
          "+ Mod para facilitar configuração dos atalhos.",
          "+ ...",
        ],
      },
    ],
  },
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
