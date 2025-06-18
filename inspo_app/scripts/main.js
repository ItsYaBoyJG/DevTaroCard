
let sampleDeck = [
  {
    title: "The Rubber Duck",
    message: "Explain your bug to an inanimate object. It will solve itself.",
    image: '/assets/images/rubber-duck.jpg',
  },
  {
    title: "The Refactor",
    message: "You are tempted to rewrite. Sometimes evolution > revolution.",
    image: "/assets/images/ev-rev.jpg",
  },
  {
    title: "The Commit",
    message: "Commit messages are like love letters to your future self.",
    image: '/assets/images/love-letter.jpg',
  },
];

  const CardProps = {
    title:'',
    message: '',
    image:'',
  }

  function drawCard() {
    const random = sampleDeck[Math.floor(Math.random() * sampleDeck.length)];
    console.log(random);

    const title = document.getElementById("card-title");
    const message = document.getElementById("card-message");
    const image = document.querySelector('.image');


    title.innerHTML = random.title;
    message.innerHTML = random.message;
    if (image instanceof HTMLImageElement) {
       image.src = random.image;
    }

    removeFromList(random);
   
  }

  function removeFromList(random) {
   sampleDeck = sampleDeck.filter(e => e.title !== random.title);
    console.log(`${random} removed from list`);
    console.log(sampleDeck);
  }