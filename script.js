let bot = new RiveScript();

const message_container = document.querySelector('.messages');
const form = document.querySelector('form');
const input_box = document.querySelector('input');

const brains = [
'https://raw.githubusercontent.com/DanicaDavies/React-Testing/master/riverscript'
];

// So much of this is copy and Paste, I honestly have very

bot.loadFile(brains).then(botReady).catch(botNotReady); /// Bot loads the file then it sorts the repliesto be correct catching any that aren't.

form.addEventListener('submit', (e) => {
  e.preventDefault();
  selfReply(input_box.value);
  input_box.value = '';
});

function botReply(message){
  message_container.innerHTML += `<div class="bot">${message}</div>`;
  location.href = '#edge';
}

function selfReply(message){
  message_container.innerHTML += `<div class="self">${message}</div>`;
  location.href = '#edge';
  
  bot.reply("local-user", message).then(function(reply) {
  bot.sortReplies();
    botReply(reply); /// HERE IS IMPORTANT
  });
} // Must Sort all Replies before they can be loaded into the |ChatBot or Issues: ERR Replies not Sorted Appear)

function botReady(){
  bot.sortReplies();
  botReply('Hey, I am Felix');
}
	

function botNotReady(err){
	  bot.sortReplies();
  console.log("An error has occurred.", err);
}
