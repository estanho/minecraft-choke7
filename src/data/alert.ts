interface IAlert {
  enable: boolean;
  title: string;
  description: string;
  duration: number;
}

export const alert: IAlert = {
  enable: true,
  title: "Recomeço do servidor em breve! ⌛",
  description:
    "Após votação no discord, foi definido que o servidor vai passar por um recomeço (reset). Um novo modpack e mapa serão disponibilizados em breve! Fique atento para novas atualizações!",
  duration: 30_000,
};
