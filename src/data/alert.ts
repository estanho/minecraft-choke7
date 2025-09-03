interface Alert {
  enable: boolean;
  title: string;
  description: string;
  duration: number;
}

export const alert: Alert = {
  enable: true,
  title: "Servidor está passando por testes!",
  description:
    "O servidor está com um erro que estamos tentando identificar ainda junto com a equipe do EnxadaHost. Pedimos desculpas pelo inconveniente.",
  duration: 60000,
};
