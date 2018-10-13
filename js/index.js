(async () => {
  const botsDiv = document.getElementById('bots');
  const bots = await fetch('https://discordbots.co.uk/api/all.json')
    .then(data => data.json())

  bots
    .filter(bot => bot.fields.template === 'bots')
    .forEach(async (data) => {
      const bot = data.frontmatter;
      const botDiv = document.createElement('div');
      const botHeader = document.createElement('h2');
      botHeader.innerText = bot.pagename;
      const botDescription = document.createElement('p');
      botDescription.innerText = bot.description;
      const botInvite = document.createElement('a');
      const botInviteLabel = document.createElement('p');
      botInviteLabel.innerText = `Invite ${bot.pagename}`;
      botInvite.appendChild(botInviteLabel);
      botInvite.setAttribute('href', bot.link);
      const botAvatar = document.createElement('img');
      botAvatar.setAttribute('src', bot.avatar);
      botAvatar.classList.add('avatar');

      botAvatar.addEventListener('error', () => {
        botAvatar.setAttribute('src', 'https://discordbots.co.uk/assets/images/logo/logo.svg');
      })

      botDiv.appendChild(botAvatar);
      botDiv.appendChild(botHeader);
      botDiv.appendChild(botDescription);
      botDiv.appendChild(botInvite);

      botDiv.classList.add('bot-div');

      botsDiv.appendChild(botDiv);
    });
})()

