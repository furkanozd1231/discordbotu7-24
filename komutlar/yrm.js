const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  
  .setTitle("Bot Komutları")
  .setAuthor("VoVe | Yapımcı Yusuf | Esther", "")
  .setColor("RANDOM")
  .setDescription('?davet • Botun davet linkini atar.\n?kur • Gerekli Dosyaları Kurar.\n?bug • Bottaki bugu bildirmenizi sağlar.\n?ping • Botun pingini gösterir.\n?sunucubilgi • Bu komutu hangi sunucuda kullanıysanız oranın bilgisini verir.\n?tavsiye • Botun sahibine verdiğiniz tavsiyeyi gönderir.\n')
  .setFooter("")
  .setThumbnail("")
  .setTimestamp()
      .addField("Moderasyon Komutları", "?ban • Belirttiğiniz kişiyi sunucudan banlar.\n?kick • Belirttiğiniz kişiyi sunucudan atar.\n?sustur • Belirttiğin kişiyi susturur.\ntemizle • Sohbeti belirttiğin sayı kadar siler.\n?unban • Belirttiğin kişinin sunucudaki yasağını kaldırır.\n?oylama • Oylama Açarsınız.\n?hastebin • Hastebine Kod Ekler.\n")
  	.addField("Eğlence Komutları", "?gif•  Nice Gif.\n?çayiç • Çay İçersiniz.\n?bayrak • Şanlı Bayrağımız.\n?parti • Parti Başlasın\n?pcaç • Bilgisayarı Açar.\n?banned • Dene Ve Gör.\n?8ball • Bende Bilmiyorum.\n?ağla • Bot Ağlar.\n?atom • Atom Bombası.\n?değişikahtapot • Çok Değişik.\n?espri • Espri Atar.\n?sigara • Sigara İçersiniz.\n?troll • Troll.\n", true)
  	.addField(" Kullanıcı Komutları", "• Yeni Kodlar Gelicek\n?kurucu • Sunucunun kurucusunu gösterir.\n?kullanıcıbilgim • Bu komutu kullanan her kimse hakkında bilgi verir.\n", true)
  	message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Bot ile ilgili komut listesini verir.',
  usage: 'yardım'
};
