// declaring variables with their requirements
const fs = require("fs");

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

//  questions for user input
const questions = [
  {
    // Takes user text input 
    type: "input",
    name: "username",
    message: "enter your Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "Enter Your Email Address?",
  },
  {
    type: "input",
    name: "title",
    message: "What's Your Projects Name?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter A Description For Your Project",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter Your Projects Installation Instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter Usage Info",
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter Your Project Contribution Guidelines",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter Test Instructions",
  },
  {
    type: "input",
    name: "technologies",
    message: "Enter your technologies",
  },
  {
    type: "input",
    name: "Features",
    message: "Enter your project features",
  },
  {
    type: "input",
    name: "demo",
    message: "Enter your link demo for your project",
  },
  {
    type: "input",
    name: "screenshot",
    message: "Enter your screenshot of your project",
  },
  {
    // Takes user input via checkbox
    type: "checkbox",
    message: "Licensing Options",
    name: "license",
    choices: [
      "Apache2.0",
      "GNU GPL v3",
      "MIT",
      "BSD 3-Clause License",
      "CC0",
      "Eclipse Public License 1.0",
      "IBM Public License Version 1.0",
    ],
  },
];
// a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log("you are good to go!")
  );
}

// a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", data);
  });
}
