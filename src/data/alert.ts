interface IAlert {
  enable: boolean;
  title: string;
  description: string;
  duration: number;
}

export const alert: IAlert = {
  enable: true,
  title: "Atualização do dia 03/10/2025 foi cancelada",
  description:
    "Tentamos realizar uma grande atualização porém foi encontrado varios problemas, optamos por reverter a atualização para o backup anterior. Peço desculpas pelo inconveniente.",
  duration: 30_000,
};
