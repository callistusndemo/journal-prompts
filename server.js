const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

let prompts = [
    "Describe a moment today that made you smile.",
    "Write about a book that changed your perspective.",
    "Imagine a day in the life of your pet.",
    "What would you do if you won the lottery?",
    "Detail your perfect day, from morning to night.",
    "Write a letter to your future self in 10 years.",
    "Reflect on your favorite childhood activity.",
    "If you could have any superpower, what would it be and why?",
    "Describe your ideal job and why it appeals to you.",
    "What's a skill you'd like to learn and why?",
    "What does 'home' mean to you?",
    "Detail an experience where you felt most alive.",
    "Write about a historical figure you admire.",
    "Describe a tradition you cherish and its significance.",
    "If you could travel anywhere, where would you go and why?",
    "What’s a lesson you learned the hard way?",
    "Imagine a conversation with your favorite author.",
    "Reflect on a moment that made you proud.",
    "What would you do with a free day and no obligations?",
    "Describe your favorite season and what it evokes in you."
  ];

// Shuffle array using the Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  // Keep track of displayed prompts
  let displayedPrompts = [];
  
  // Shuffle the prompts initially
  shuffleArray(prompts);
  
  // API Endpoint to get prompts
  app.get('/get-prompts', (req, res) => {
    // Check if all prompts have been shown
    if (displayedPrompts.length === prompts.length) {
      displayedPrompts = [];
      shuffleArray(prompts);
    }
  
    // Select the next three prompts
    let selectedPrompts = [];
    while (selectedPrompts.length < 3 && displayedPrompts.length < prompts.length) {
      let prompt = prompts[displayedPrompts.length];
      selectedPrompts.push(prompt);
      displayedPrompts.push(prompt);
    }
  
    res.json(selectedPrompts);
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });