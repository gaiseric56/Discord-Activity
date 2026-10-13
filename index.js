const { Client, RichPresence } = require('discord.js-selfbot-v13');
const client = new Client();

// Application ID للتطبيق الذي رفعت فيه الصورة (Developer Portal)
const APP_ID = '1476646850747699381';

// اسم الصورة في Rich Presence > Art Assets
const IMAGE_KEY = 'cover';

async function setActivity() {
  try {
    const presence = new RichPresence(client)
      .setApplicationId(APP_ID)
      .setType('PLAYING')
      .setName('Life')
      .setDetails('Survival')
      .setAssetsLargeImage(IMAGE_KEY)
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
  console.log('Logged in as ${client.user.tag'});
  setActivity();
  setInterval(setActivity, 10 * 60 * 1000); // إعادة التعيين كل 10 دقائق
});

client.login(process.env.DISCORD_TOKEN).catch((err) => {
  console.error('فشل تسجيل الدخول:', err);
  process.exit(1);
});
