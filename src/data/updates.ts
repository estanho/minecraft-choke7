interface IUpdates {
  date: string;
  existsDependency: boolean;
  changes: {
    title: string;
    description: string;
    dependency: string[];
  }[];
}

export const updates: IUpdates[] = [
  {
    date: "11/09/2025",
    existsDependency: true,
    changes: [
      {
        title: "+ Adicionados mods para melhorar a experiência do jogo.",
        description: "Nova pasta mods",
        dependency: [
          "+ Mod de armazenamento de itens e organização (Tom's Simple Storage).",
          "+ Mod para facilitar configuração dos atalhos (Controlling).",
          "+ Mods para administração de servidor.",
          "+ Mods do lado do servidor para desempenho.",
        ],
      },
    ],
  },
  {
    date: "04/09/2025",
    existsDependency: false,
    changes: [
      {
        title:
          "+ Atualização geral dos mods e remoção de alguns mods para melhorar o servidor.",
        description: "Teste de desempenho",
        dependency: [],
      },
    ],
  },
  {
    date: "30/08/2025",
    existsDependency: true,
    changes: [
      {
        title: "+ Adição de mods solicitados pelos players e streamer.",
        description: "+3 mods",
        dependency: [
          "+ Mod de Camera (Camera Mod).",
          "+ Mod de mensagens com balões (Comics Bubbles Chat).",
          "+ Mod de espaço de lixeira (TrashSlot).",
        ],
      },
    ],
  },
  {
    date: "29/08/2025",
    existsDependency: false,
    changes: [
      {
        title: "✲ Inauguração do servidor",
        description: "Uhul",
        dependency: [],
      },
    ],
  },
];
