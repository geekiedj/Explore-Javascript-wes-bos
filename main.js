let topics = [
  "Why you should read documentations as a newbie",
  "What is serverless",
  "Stand out as a developer just starting out",
  "What is SAAS and why should you start considering building a product and a business around it",
  "Come listen to me live code and dj using sonic pi",
  "Come vibe with me as i dj",
  "Teach me all i need to know about community building",
  "Why documenting your learning is important as a developer",
  "Tech and content creation",
  "Let's talk business, tech and music",
  "Why you shouldn't be scared of making mistakes as a developer- Be free like water",
];

// function newTopic() {
//   let randomNumber = Math.floor(Math.random() * topics.length);
//   document.getElementById("topicDisplay").innerHTML = topics[randomNumber];
// }
// console.log(newTopic());

document.getElementById("topicc").addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * topics.length);
  document.getElementById("topicDisplay").innerHTML = topics[randomNumber];
});
