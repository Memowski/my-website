export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/attachments/1051536908443983893/1057734694898241736/Siyah_ve_Krmz_E-Spor_Illustrasyon_Oyun_Oyun_Logosu.png",
      name: "DarkneSS",
      description: "Keyifli Discord Sunucumuz.",
      link: "https://discord.com/invite/egHtAmapnp",
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/attachments/1051536908443983893/1059096467370950656/memowski.png",
      name: "Youtube Kanalım",
      description: "İnternet üzerinden para kazanma , kişisel gelişim ve eğlence tarzında videolar yüklediğim YouTube kanalım.",
      link: "https://www.youtube.com/@memowski",
    }
  ];
  res.status(200).json(data);
};
