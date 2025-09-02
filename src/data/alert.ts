interface Alert {
  enable: boolean;
  title: string;
  description: string;
  duration: number;
}

export const alert: Alert = {
  enable: true,
  title: "Servidor Offline!",
  description:
    "O servidor está com um problema que estamos tentando identificar ainda. Peço que aguardem.",
  duration: 60000,
};
