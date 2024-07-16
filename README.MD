# The Knight of Pluto

A discord bot built to aid with the running of the Knights of Pluto Discord Server

## Local setup

1. Clone the repo and pull to your own machine. Run `npm install` to locally install all requirements.

2. Create a Discord BOT in the developer API, instructions on this can be found here: https://discordpy.readthedocs.io/en/stable/discord.html

3. Create and fill out a .env file, following the layout of the sample. The CLIENT_TOKEN and CLIENT_ID can be found on your bots settings page. The GUILD_ID can be found by activating developer mode on discord, and right-clicking the server you'll be using.

4. Add the bot to your server, this can be done with a link found on your bots settings page.

5. In the root of the application, run `node deploy-commands.js` - a success message should appear.

6. Run `node index.js`, a success message should appear in the log, and your bot should appear online on the server you're testing on.
