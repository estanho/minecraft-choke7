export async function getServerStatus() {
  const serverIP = process.env.SERVER_IP;

  if (!serverIP) {
    return Response.json({ error: "SERVER_IP não definido" }, { status: 500 });
  }

  try {
    const response = await fetch(`https://api.mcsrvstat.us/3/${serverIP}`, {
      cache: "force-cache",
    });

    const data = await response.json();

    return Response.json({
      online: data.online,
      motd: data.motd ?? null,
      players: data.players ?? null,
      icon: data.icon ?? null,
    });
  } catch (err) {
    console.error("Erro ao buscar status do servidor:", err);
    return Response.json({ error: "Falha ao buscar status", status: 500 });
  }
}
