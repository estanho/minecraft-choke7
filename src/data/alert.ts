interface IAlert {
  enable: boolean;
  title: string;
  description: string;
  duration: number;
}

export const alert: IAlert = {
  enable: true,
  title: "Nova atualização disponível [22/11/2025]",
  description:
    "Atualização de correção de bugs! Baixe a última atualização do Servidor da Lagoa dos Sapos! Veja o que há de novo nas Atualizações! 🐸",
  duration: 30_000,
};
