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
    date: "03/10/2025",
    existsDependency: true,
    changes: [
      {
        title: "+ Grande atualização do servidor.",
        description: "Muita coisa mesmo",
        dependency: [
          "- Removido Aether",
          "- Removido Epic Fight e seu completo",
          "- Removido Inventory Tweaks - ReFoxed",
          "+ Armas novas (Simply Swords).",
          "+ Mais dungeons (Dungeon Plus).",
          "+ Novos biomas (Biomes O' Plenty).",
          "+ Muitos mods de decoração (Todos os MOA e Macaw).",
          "+ Mods de decoração com iluminação (Night Lights e Additional Lights).",
          "+ Mod de itens para decoração (Supplementaries, Amendments e Dusty Decorations).",
          "+ Mod para colocar lanternas na cintura (Toni's Immersive Lanterns).",
          "+ Mod de variação de blocos (Chipped, Rechiseled e mais).",
          "+ Novas variações de animais (More Mob Variants).",
          "+ Mod que adiciona Pets (Critters and Companions).",
          "+ Mod de gliders (Gliders).",
          "+ Mod de comidas (Ender's Delight, Nether's Delight, Display Delight).",
          "+ Mais addons do Create (Create: Wizardry e Rechiseled: Create).",
          "+ Mod para edição de livros (Scholar).",
          "+ Mod para melhorar visualização dos corações (Colorful Hearts).",
          "+ Atualização do mod Waterframes.",
          "+ Complemento do Relics e Artefacts (Relics: Artifects Compact).",
          "+ Mod Botany Pots.",
          "+ Novo mod para organização de itens (Inventory Management Deluxe).",
          "+ Mod de jaulas para mobs (Portable Mobs).",
          "+ Finalmente o Corpse x Curios API Compact.",
          "+ Melhor visualização do F3 (Better F3).",
          "+ Muitos mods de desempenho.",
          "+ Muitos mods de correções de bugs.",
          "+ Muitas modificações de configuração no servidor.",
          "+ E muitos mais ...",
        ],
      },
    ],
  },
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
