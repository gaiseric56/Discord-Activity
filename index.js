const { Client, RichPresence } = require('discord.js-selfbot-v13');
const client = new Client();

// Application ID لأي تطبيق تنشئه في Developer Portal
const APP_ID = 'ضع_الـID_هنا';
const IMAGE_URL =
  'https://raw.githubusercontent.com/gaiseric56/Discord-Activity/main/cover.gif';

async function setActivity() {
  try {
    const [img] = await RichPresence.getExternal(client, APP_ID, IMAGE_URL);

    const presence = new RichPresence(client)
      .setApplicationId(APP_ID)
      .setType('PLAYING')
      .setName('Life')
      .setDetails('Survival')
      .setAssetsLargeImage(img.external_asset_path)
      .setAssetsLargeText('Life')
      .setParty({ current: 1, max: 1, id: 'life_party' });
    // لا يوجد setStartTimestamp، لذلك لن يظهر مؤقت

    client.user.setPresence({ activities: [presence] });
    console.log('تم تحديث الفعالية');
  } catch (err) {
    console.error('خطأ أثناء تعيين الفعالية:', err);
  }
}

client.on('ready', () => {
  console.log(Logged in as ${client.user.tag});
  setActivity();
  setInterval(setActivity, 10 * 60 * 1000); // إعادة تعيينها كل 10 دقائق
});

client.login(process.env.DISCORD_TOKEN).catch((err) => {
  console.error('فشل تسجيل الدخول:', err);
  process.exit(1);
});
