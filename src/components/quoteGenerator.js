const quoteGenerator = () => {
  const intros = [
    "Remember, honey:",
    "As RuPaul says:",
    "Here's some tea for you:",
    "Sashay away with this thought:",
    "Serve this look:",
  ];

  const messages = [
    "If you can't love yourself, how in the hell you gonna love somebody else?",
    "We're all born naked and the rest is drag.",
    "When the going gets tough, the tough reinvent themselves.",
    "Your uniqueness is your superpower.",
    "Throw glitter, not shade.",
    "Life is about using the whole box of crayons.",
    "Be the flamingo in a flock of pigeons.",
    "Sissy that walk and own your truth.",
    "You're a winner, baby!",
    "Don't be afraid to serve leg and dairy.",
  ];

  const outro = "Can I get an amen up in here?";

  const randomIntro = intros[Math.floor(Math.random() * intros.length)];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  return `${randomIntro} ${randomMessage} ${outro}`;
};

export default quoteGenerator;
