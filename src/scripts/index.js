const questionDisplay = document.querySelector("#questions");
const answerDisplay = document.querySelector("#answer");

const questions = [
  {
    id: 0,
    text: "Are you feeling hot or cold?",
    answers: [
      {
        text: "Hot",
        image:
          "https://media.istockphoto.com/id/113494458/photo/fire-isolated-over-black-background.jpg?s=612x612&w=0&k=20&c=u6STGsSpJAyBN8kDeqnVUla4-0SnLpdaTsehFsey2p0=",
        alt: "Flames",
        credit: "name",
      },
      {
        text: "Cold",
        image:
          "https://plus.unsplash.com/premium_vector-1725349606996-4db3f151cf99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D",
        alt: "Polar bears on ice",
        credit: "name",
      },
    ],
  },
  {
    id: 1,
    text: "How would you describe yourself?",
    answers: [
      {
        text: "Sweet",
        image:
          "https://images.unsplash.com/photo-1641573260130-74d81b179809?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJ1aXQlMjBiYXNrZXR8ZW58MHx8MHx8fDA%3D",
        alt: "Fruity Image",
        credit: "name",
      },
      {
        text: "Bold",
        image:
          "https://plus.unsplash.com/premium_photo-1675237625862-d982e7f44696?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29mZmVlJTIwYmVhbnN8ZW58MHx8MHx8fDA%3D",
        alt: "Coffee beans",
        credit: "name",
      },
      {
        text: "Silly",
        image:
          "https://images.unsplash.com/photo-1477506350614-fcdc29a3b157?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bnV0c3xlbnwwfHwwfHx8MA%3D%3D",
        alt: "Picture of nuts",
        credit: "name",
      },
      {
        text: "Demure",
        image:
          "https://plus.unsplash.com/premium_photo-1680303134459-912abf8efe2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cXVlc3Rpb258ZW58MHx8MHx8fDA%3D",
        alt: "Other flavor image",
        credit: "name",
      },
    ],
  },
  {
    id: 2,
    text: "Describe your mood right now in one word:",
    answers: [
      {
        text: "Excited",
        image:
          "https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Excited image",
        credit: "name",
      },
      {
        text: "Relaxed",
        image:
          "https://images.pexels.com/photos/5540160/pexels-photo-5540160.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Relax image",
        credit: "name",
      },
      {
        text: "Tweaking",
        image:
          "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTl0bGVqcTdvOXNtZ213ZjB6MmUyN2ppeWpmaDEyenh5c2hvaGltNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26uf9vf8zZchBxJrq/giphy.webp",
        alt: "Tweak from South Park",
        credit: "name",
      },
      {
        text: "Happy",
        image:
          "https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Smiley Face",
        credit: "name",
      },
    ],
  },
  {
    id: 3,
    text: "Lastly, what's your favorite fall activity?",
    answers: [
      {
        text: "Visiting a pumpkin patch",
        image:
          "https://media.istockphoto.com/id/1157022831/photo/pumpkins-on-a-farm.jpg?s=612x612&w=0&k=20&c=Zu37D_IKrlsDoq71MMPSCsi3pP73dXeAe_Aug8Mdk_8=",
        alt: "Pumpkin patch",
        credit: "ucpage",
      },
      {
        text: "Sitting by the fire, watching a movie",
        image:
          "https://media.istockphoto.com/id/1314928174/photo/woman-with-cup-of-drink-and-book-near-fireplace-at-home-closeup.jpg?s=612x612&w=0&k=20&c=MeJbhIUr1OYpAqYxv8QZ7fZsczXeUk9tu2ovZOLC_T4=",
        alt: "Fire place and movie",
        credit: "Liudmila Chernetska",
      },
      {
        text: "Having a picnic",
        image:
          "https://media.istockphoto.com/id/1188421171/photo/preparing-food-outdoors-together.jpg?s=612x612&w=0&k=20&c=DFKRJJRrAPAjkkS99am2wMFjc9p5XYFn6euWI_HKcj8=",
        alt: "Picnic",
        credit: "Kosamtu",
      },
      {
        text: "Watching football",
        image:
          "https://media.istockphoto.com/id/1224519653/photo/cheerful-black-family-cheering-while-watching-rugby-match-on-tv-at-home.jpg?s=612x612&w=0&k=20&c=uHtyqT93a5TUY51Ftw_I1IRm7EIQzZ1KWjEIJ8p38u8=",
        alt: "Football game",
        credit: "skynesher",
      },
    ],
  },
];

const answers = [
  {
    combination: ["Sweet", "Visiting a pumpkin patch"],
    text: "Pumpkin Spice Latte",
    image:
      "https://media.istockphoto.com/id/856503922/photo/pumpkin-spice-latte.jpg?s=612x612&w=0&k=20&c=J5Zkyj8TZ4RfWAP4U_xDXzkf3KV1ypAHoPNgIcZ3r2c=",
    alt: "Pumpkin Spice Latte",
    description:
      "A Fall classic as spirited as you. Nothing says Fall like enjoying a PSL with your friends, driving with the windows down blasting 'All Too Well' Taylor's Version on your way to the pumpkin patch. ",
    credit: "Mizina",
  },
  {
    combination: ["Silly", "Having a picnic"],
    text: "Cinnamon Toast Crunch Latte",
    image:
      "https://media.istockphoto.com/id/1420203810/photo/homemade-iced-pumpkin-spiced-latte.webp?a=1&b=1&s=612x612&w=0&k=20&c=ssQKEEERRrEEbuIt-QpbuVkqPiTPd50b4wzoaEGf868=",
    alt: "Iced Latte",
    description:
      "You deserve a drink as exciting, outgoing, and adventurous as you. Try something new this season that's tasty, fun, and maybe even a little out of the ordinary. You'll thank us later!",
    credit: "bhofack2",
  },
  {
    combination: ["Bold", "Watching football"],
    text: "Americano",
    image:
      "https://media.istockphoto.com/id/1413678575/photo/ice-americano-stock-photo.jpg?s=612x612&w=0&k=20&c=L158Kl4WmXTNLUxz-kDesRcfXaYqgLRJaDW5-tRkIQ8=",
    alt: "Americano",
    description:
      "Hot or cold, you need something quick, no funny business, and easy so that you can go back to the stuff that matters: shouting at the TV with your best friends.",
    credit: "evrim ertik",
  },
  {
    combination: ["Demure", "Sitting by the fire, watching a movie"],
    text: "Chai Latte",
    image:
      "https://media.istockphoto.com/id/1135480753/photo/chai-latte.webp?a=1&b=1&s=612x612&w=0&k=20&c=e4Or4D3lW7KgWDBZMAKmCQDKKdK_Ofp_JHn0ZWhNBfI=",
    alt: "Chai Latte",
    description:
      "Just like you, this chai latte is calming, cozy, and perfectly put together. So sit back, light a candle, and take a nice, deep breath while sipping your chai in your fuzzy socks.",
    credit: "invizbk",
  },
  {
    combination: ["Bold", "Sitting by the fire, watching a movie"],
    text: "Caramel Macchiato",
    image:
      "https://media.istockphoto.com/id/587950814/photo/latte-macchiato-with-whipped-cream-and-caramel-sauce-in-tall.webp?a=1&b=1&s=612x612&w=0&k=20&c=dojz05GWBFvV4YM46JiRqhudvi15c_D5gbGsUFkgx_g=",
    alt: "Caramel Macchiato",
    description:
      "When in doubt, stick with a good ol' caramel macchiato. Just like you, this drink can be a little bit of everything.. and we love it for that! The perfect combination of sweet, bold, and spirited, and the best choice for a Fall day.",
    credit: "Foxys_forest_manufacture",
  },
];

const unansweredQuestions = [];
const selectedAnswers = [];

const populateQuestions = () => {
  questions.forEach((question) => {
    const titleBlock = document.createElement("div");
    titleBlock.id = question.id;
    titleBlock.classList.add("title-block");
    const titleHeading = document.createElement("h2");
    titleHeading.textContent = question.text;
    titleBlock.append(titleHeading);
    questionDisplay.append(titleBlock);

    const answersBlock = document.createElement("div");
    answersBlock.id = question.id + "-questions";
    answersBlock.classList.add("answer-options");

    unansweredQuestions.push(question.id);

    question.answers.forEach((answer) => {
      const answerBlock = document.createElement("div");
      answerBlock.classList.add("answer-block");
      answerBlock.addEventListener("click", () =>
        handleClick(question.id, answer.text),
      );
      const answerImage = document.createElement("img");
      answerImage.setAttribute("src", answer.image);
      answerImage.setAttribute("alt", answer.alt);

      const answerTitle = document.createElement("h3");
      answerTitle.textContent = answer.text;

      const answerInfo = document.createElement("p");
      const imageLink = document.createElement("a");
      imageLink.setAttribute("href", answer.image);
      imageLink.textContent = answer.credit;
      const sourceLink = document.createElement("a");
      sourceLink.textContent = "Unsplash";
      sourceLink.setAttribute("src", "https://www.unsplash.com");
      answerInfo.append(imageLink, " to ", sourceLink);
      +answerBlock.append(answerImage, answerTitle, answerInfo);

      answersBlock.append(answerBlock);
    });

    questionDisplay.append(answersBlock);
  });
};
populateQuestions();

const handleClick = (questionId, selectedAnswer) => {
  console.log(questionId, selectedAnswer);
  if (unansweredQuestions.includes(questionId))
    selectedAnswers.push(selectedAnswer);
  const itemToRemove = unansweredQuestions.indexOf(questionId);

  if (itemToRemove > -1) {
    unansweredQuestions.splice(itemToRemove, 1);
  }
  console.log(selectedAnswers);
  console.log(unansweredQuestions);

  disableQuestionBlock(questionId, selectedAnswer);
  const lowestQuestionId = Math.min(...unansweredQuestions);
  location.href = "#" + lowestQuestionId;

  if (!unansweredQuestions.length) {
    location.href = "#answer";
    showAnswer();
  }
};

const showAnswer = () => {
  let result;
  answers.forEach((answer) => {
    if (
      selectedAnswers.includes(answer.combination[0]) &&
      selectedAnswers.includes(answer.combination[1])
    ) {
      return (result = answer);
    } else if (!result) {
      result = answers[4];
    }
  });

  const answerBlock = document.createElement("div");
  answerBlock.classList.add("result-block");
  const answerTitle = document.createElement("h3");
  answerTitle.textContent = result.text;
  const answerImage = document.createElement("img");
  answerImage.setAttribute("src", result.image);
  answerImage.setAttribute("alt", result.alt);
  const answerDescription = document.createElement("p");
  answerDescription.textContent = result.description;
  const answerInfo = document.createElement("span");
  const imageLink = document.createElement("a");
  imageLink.setAttribute("href", result.image);
  imageLink.textContent = result.credit;
  const sourceLink = document.createElement("a");
  sourceLink.textContent = "iStockPhoto";
  sourceLink.setAttribute("src", "https://www.unsplash.com");
  answerInfo.append(imageLink, " on ", sourceLink);

  answerBlock.append(answerTitle, answerImage, answerInfo, answerDescription);

  answerDisplay.append(answerBlock);

  const allAnswerBlocks = document.querySelectorAll(".answer-block");
  Array.from(allAnswerBlocks).forEach((answerBlock) =>
    answerBlock.replaceWith(answerBlock.cloneNode(true)),
  );
};

const disableQuestionBlock = (questionId, selectedAnswer) => {
  const currentQuestionBlock = document.getElementById(
    questionId + "-questions",
  );

  Array.from(currentQuestionBlock.children).forEach((block) => {
    if (block.children.item(1).innerText !== selectedAnswer) {
      block.style.opacity = "50%";
    }
  });
};
