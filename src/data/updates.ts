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
    date: "30/11/2025",
    existsDependency: false,
    changes: [
      {
        title: "+ Correção de bugs relacionada aos Hamsters",
        description: "Alteração de versão de alguns mods",
        dependency: [],
      },
    ],
  },
  {
    date: "22/11/2025",
    existsDependency: false,
    changes: [
      {
        title: "+ Correção de bugs relacionada ao Create",
        description: "Alteração de versão de alguns mods",
        dependency: [],
      },
    ],
  },
  {
    date: "21/11/2025",
    existsDependency: true,
    changes: [
      {
        title: "+ Adicionando Armas e alguns novos mobs",
        description: "Testando novos mods",
        dependency: [
          "ADICIONADOS",
          "+ Relics: Artifacts Compat",
          "+ Create: Hypertubes",
          "+ Simply Swords",
          "+ Critters and Companions",
          "+ Adorable Hamster Pets",
          "+ Alex's Mobs",
          "+ Alex's Delight",
          "+ Relics: Alex's Mobs Compat",
          "+ Botany Pots",
          "+ Model Gap Fix",
          "+ Pick Up Notifier",
          "+ Ban Hammer",
        ],
      },
    ],
  },
  {
    date: "25/10/2025",
    existsDependency: false,
    changes: [
      {
        title: "+ Corrigindo erro dos Villagers.",
        description: "Ajuste nas versões de alguns mods",
        dependency: [],
      },
    ],
  },
  {
    date: "20/10/2025",
    existsDependency: true,
    changes: [
      {
        title: "+ Adicionando mods de decoração e mais",
        description: "Testar desempenho com mods de decoração",
        dependency: [
          "REMOVIDOS",
          "- Create: Design's Decor",
          "---",
          "ADICIONADOS",
          "+ Chipped",
          "+ Rechiseled",
          "+ Rechiseled: Chipped",
          "+ MOA DECOR: GARDEN",
          "+ MOA DECOR: HOLIDAYS",
          "+ MOA DECOR: COOKERY",
          "+ MOA DECOR: ART",
          "+ MOA DECOR: ELECTRONICS",
          "+ MOA DECOR: BATH",
          "+ MOA DECOR: TOYS",
          "+ MOA DECOR: SCIENCE",
          "+ Macaw's Trapdoors",
          "+ Macaw's Stairs",
          "+ Macaw's Paths and Pavings",
          "+ Macaw's Fences and Walls",
          "+ Macaw's Windows",
          "+ Macaw's Lights and Lamps",
          "+ Macaw's Paintings",
          "+ Macaw's Holidays",
          "+ Macaw's Furniture",
          "+ Macaw's Bridges",
          "+ Macaw's Doors",
          "+ Macaw's Roofs",
          "+ Dusty Decorations",
          "+ Additional Lights",
          "+ Night Lights",
          "+ Connected Glass",
          "+ Gliders",
          "+ Supplementaries",
          "+ Amendments",
          "+ Simple Hats",
          "+ Immersive Melodies",
        ],
      },
    ],
  },
  {
    date: "18/10/2025",
    existsDependency: true,
    changes: [
      {
        title: "+ Atualização completa dos mods",
        description: "Melhorando desempenho e compatibilidade",
        dependency: [
          "REMOVIDOS",
          "- The Aether",
          "- Epic Fight",
          "- Weapons of Miracles",
          "- Sound Physics Remastered",
          "- Model Gap Fix",
          "- Inventory Essentials",
          "---",
          "SUBSTITUÍDOS",
          "- Better Forge Chat Reborn",
          "+ Beautified Chat",
          "- Comics Bubbles Chat",
          "+ Notable Bubble Text",
          "- Create Deco",
          "+ Create: Design's Decor",
          "---",
          "ADICIONADOS",
          "+ Spice of Life: Carrot Edition",
          "+ Create Better Fps",
          "+ Create: Interiors",
          "+ Create: Numismatics",
          "+ Create: Enchantment Industry",
          "+ Create: Wizardry",
          "+ Sophisticated Storage",
          "+ Ender's Delight",
          "+ Nether's Delight",
          "+ Display Delight",
          "+ Toni's Immersive Lanterns",
          "+ More Mob Variants",
          "+ Scholar",
        ],
      },
    ],
  },
  {
    date: "05/10/2025",
    existsDependency: true,
    changes: [
      {
        title: "+ Adicionado um mod para melhor gerenciamento de memória",
        description: "Mod que estava na atualização anterior 😅",
        dependency: ["+ FerriteCore"],
      },
    ],
  },
  {
    date: "04/10/2025",
    existsDependency: true,
    changes: [
      {
        title: "+ Revertemos a atualização do dia 03/10/2025.",
        description: "Alguns mods simples foram mantidos da atualização",
        dependency: [
          "+ Mod para melhorar visualização dos corações (Colorful Hearts).",
          "+ Corpse x Curios API Compact.",
          "+ Melhor visualização do F3 (Better F3).",
          "+ Mods de desempenho.",
          "+ Mods de correções de bugs.",
          "+ Mod para organização de itens (Inventory Management Deluxe).",
        ],
      },
    ],
  },
  {
    date: "03/10/2025",
    existsDependency: true,
    changes: [
      {
        title: "+ Grande atualização do servidor.",
        description: "CANCELADA",
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
