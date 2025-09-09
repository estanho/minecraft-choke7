interface Alert {
  enable: boolean;
  title: string;
  description: string;
  duration: number;
}

export const alert: Alert = {
  enable: true,
  title: "Servidor está passando por algumas mudanças!",
  description:
    "Estamos verificando a possibilidade de atualizar/refazer o modpack para melhorar o desempenho do servidor. Infelizmente até conseguirmos corrigir todos os problemas, o servidor vai continuar com bastante instabilidade. Pedimos desculpas pelo inconveniente.",
  duration: 30_000,
};
