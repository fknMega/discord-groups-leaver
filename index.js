const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./congig.json');
 

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on('message', async msg => {
  
    
 
  if(msg.author.id != client.user.id) {return;}
  
  switch(msg.content.split(' ')[0]){

    

    case ".credit":
        msg.delete()
        msg.channel.send("credit goes to github.com/fknMega")
        break;



    case config.command:
      const dms = client.channels
      
      dms.forEach(async e=>{
        if(e.type === 'group' && !e.deleted){
          console.log('leaving ' +e.id)
          try{
          await e.delete()
          console.log('left group ' + e.name + ' (' + e.id + ') owner: '+ e.ownerID)
          } catch{
           console.log('Can\'t leave ' + e.id)
          }
        }
      })
      break;
    

    }
  
})
 
client.login(config.token);
