export default async function handler(req, res) {
  const serverIP = process.env.SERVER_IP;

  const response = await fetch(`https://api.mcsrvstat.us/3/${serverIP}`);
  const data = await response.json();

  res.status(200).json(data);
}
