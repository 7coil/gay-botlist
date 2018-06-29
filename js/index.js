(async () => {
  const botsDiv = document.getElementById('bots');
  const bots = (await fetch('json/bots.json')
    .then(data => data.json()))
    .map(bot => ({
      id: bot,
      fetched: false
    }));
  
  const randomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  bots.forEach(async (bot) => {
    const botData = await fetch(`json/${bot.id}.json`)
      .then(data => data.json());

    const botDiv = document.createElement('div');
    const botHeader = document.createElement('h2');
    botHeader.innerText = botData.name;
    const botDescription = document.createElement('p');
    botDescription.innerText = botData.description;
    const botInvite = document.createElement('a');
    const botInviteLabel = document.createElement('p');
    botInviteLabel.innerText = `Invite ${botData.name}`;
    botInvite.appendChild(botInviteLabel);
    botInvite.setAttribute('href', botData.invite);

    botDiv.appendChild(botHeader);
    botDiv.appendChild(botDescription);
    botDiv.appendChild(botInvite);

    botDiv.classList.add('colour');
    botDiv.classList.add('bot-div');
    botDiv.style.animationDuration = `${(Math.random() * 20) + 0.5}s`;
    botDiv.style.color = `rgb(${randomInt(256)},${randomInt(256)},${randomInt(256)})`;

    botsDiv.appendChild(botDiv);
  });

  console.log(bots);
})()

