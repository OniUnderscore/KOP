require("dotenv").config();

const {
  SlashCommandBuilder,
  GuildScheduledEventManager,
  GuildScheduledEventPrivacyLevel,
  GuildScheduledEventEntityType,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("eventcreater")
    .setDescription("Creates an Event!"),
  async execute(interaction) {
    const guild = await interaction.client.guilds.fetch(process.env.GUILD_ID);
    const eventManager = new GuildScheduledEventManager(guild);
    await eventManager.create({
      name: "Test Event",
      scheduledStartTime: Date.parse("2024-07-25T12:00:00"),
      privacyLevel: GuildScheduledEventPrivacyLevel.GuildOnly,
      entityType: GuildScheduledEventEntityType.Voice,
      description: "This is a test Scheduled Event",
      channel: "1081943690743922741",
      image: null,
      reason: "Testing creating a scheduled event",
    });
    await interaction.reply("Test");
  },
};
