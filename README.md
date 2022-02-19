## Leave all discord groups at once (selfbot)

- Selfbot's are against discord's tos, anything that happens as cause of this script is on you.

![image](https://media.discordapp.net/attachments/931150864729657395/944736767624495124/unknown.png)


How to use:

**1.** install discord.js@11.6.4 (the only version that suports selfbots)
to do that run `npm i discord.js@11.6.4`

**2.** then we have to fix an old bug, go to the new created path `\node_modules\discord.js\src\client`
and replace the file ClientDataManager.js with our [new file here](https://github.com/fknMega/discord-groups-leaver/blob/main/ClientDataManager.js)


**3.** after that modify the config.json file and change the token to your user token.

**4.** that's it, run the script by using `node index.js` , and send a message anywhere (in discord) containing the command `.leaveall`.



## Preview:

![gif](https://media.discordapp.net/attachments/931150864729657395/944740351841796197/cmd_4JTAF8INbR.gif)

