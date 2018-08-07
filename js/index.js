(async () => {
  const botsDiv = document.getElementById('bots');
  const bots = await fetch('https://discordbots.co.uk/api/bots/all.json')
    .then(data => data.json())
  
  const randomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  bots.forEach(async (bot) => {
    const botDiv = document.createElement('div');
    const botHeader = document.createElement('h2');
    botHeader.innerText = bot.name;
    const botDescription = document.createElement('p');
    botDescription.innerText = bot.description;
    const botInvite = document.createElement('a');
    const botInviteLabel = document.createElement('p');
    botInviteLabel.innerText = `Invite ${bot.name}`;
    botInvite.appendChild(botInviteLabel);
    botInvite.setAttribute('href', bot.link);
    const botAvatar = document.createElement('img');
    botAvatar.setAttribute('src', bot.avatar);
    botAvatar.classList.add('avatar');

    botDiv.appendChild(botAvatar);
    botDiv.appendChild(botHeader);
    botDiv.appendChild(botDescription);
    botDiv.appendChild(botInvite);

    botDiv.classList.add('colour');
    botDiv.classList.add('bot-div');
    botDiv.style.animationDuration = `${(Math.random() * 20) + 0.5}s`;
    botDiv.style.color = `rgb(${randomInt(256)},${randomInt(256)},${randomInt(256)})`;
    botDiv.style.width = `${randomInt(200) + 200}px`;
    botDiv.style.height = `${randomInt(300) + 300}px`;

    botsDiv.appendChild(botDiv);
  });

  console.log(bots);
})()

