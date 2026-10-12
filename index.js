const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}`);

  const startTime = Date.now();

  const setActivity = () => {
    try {
      client.user.setPresence({
        activities: [{
          name: "Life",
          type: "PLAYING",
          details: "Life",
          state: " ",
          timestamps: {
            start: startTime
          },
          assets: {
            largeImage: "cover.gif",
            largeText: "Life"
          },
          party: {
            id: "custom_party_123",
            size: [1, 1]
          }
        }]
      });
      console.log("تم تحديث الفعالية بنجاح!");
    } catch (err) {
      console.error("خطأ أثناء تعيين الفعالية:", err);
    }
  };

  setActivity();
  
  // في بيئة GitHub Actions، السكريبت يعمل لفترة قصيرة ثم ينتهي، 
  // لذا سنكتفي بتنفيذها مرة واحدة عند الاتصال لتفادي تعليق العمليات.
});

// التعامل مع أخطاء تسجيل الدخول أو الاتصال
client.login(process.env.DISCORD_TOKEN).catch(err => {
  console.error("فشل تسجيل الدخول بالتوكن:", err);
  process.exit(1);
});
