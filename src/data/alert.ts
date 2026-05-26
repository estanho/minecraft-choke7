interface IAlert {
  enable: boolean;
  title: string;
  description: string;
  duration: number;
}

export const alert: IAlert = {
  enable: true,
  title: "Recomeço do servidor em julho!",
  description:
    "O recomeço do servidor vai ocorrer em julho! Novo modpack, novo mapa e novos eventos. 🐸",
  duration: 30_000,
};
