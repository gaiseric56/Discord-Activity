const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

client.on('ready', async () => {
  console.log(Logged in as ${client.user.tag});

  const startTime = Date.now();

  const setActivity = () => {
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
  };

  setActivity();
  // إعادة تعيين الفعالية كل 15 ثانية لضمان استمرارها
  setInterval(setActivity, 15000);
});

client.login(process.env.DISCORD_TOKEN);
