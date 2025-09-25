interface IAlert {
  enable: boolean;
  title: string;
  description: string;
  duration: number;
}

export const alert: IAlert = {
  enable: false,
  title: "Servidor está passando por algumas mudanças!",
  description:
    "Estamos tentando resolver os problemas relacionados aos fechamentos inesperados do servidor. Infelizmente podem ocorrer algumas instabilidades até tudo ser resolvido. Pedimos desculpas pelo inconveniente.",
  duration: 30_000,
};
