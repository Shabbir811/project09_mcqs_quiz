#! /usr/bin/env node
import inquirer from "inquirer";
function breakaline() {
    console.log("\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n");
}
const questions = [
    "Who is known as the 'Father of the Nation' in Pakistan?",
    "When did Pakistan become an independent state?",
    "What is the national language of Pakistan?",
    "Which mountain range separates Pakistan from Afghanistan?",
    "The Indus Valley Civilization flourished around which river in Pakistan?",
    "What is the official name of Pakistan's national flag?",
    "Who wrote the National Anthem of Pakistan?",
    "What is the capital city of Pakistan?",
    "Which of the following is not a province of Pakistan?",
    "The name 'Pakistan' is a combination of which two words?",
];
let answers_choice = [
    [
        "a) Muhammad Ali Jinnah",
        "b) Allama Iqbal",
        "c) Liaquat Ali Khan",
        "d) Sir Syed Ahmed Khan",
    ],
    [
        "a) August 15, 1947",
        "b) August 14, 1947",
        "c) September 3, 1947",
        "d) July 4, 1947",
    ],
    ["a) Urdu", "b) Punjabi", "c) Pashto", "d) Sindhi"],
    ["a) Karakoram Range", "b) Hindu Kush", "c) Himalayas", "d) Sulaiman Range"],
    ["a) River Ganges", "b) River Sutlej", "c) River Ravi", "d) River Indus"],
    [
        "a) Parcham-e-Sitara-o-Hilal",
        "b) Quaid-e-Azam's Flag",
        "c) Star and Crescent",
        "d) None of the above",
    ],
    [
        "a) Allama Iqbal",
        "b) Faiz Ahmed Faiz",
        "c) Hafeez Jullundhri",
        "d) Ahmed Faraz",
    ],
    ["a) Lahore", "b) Karachi", "c) Islamabad", "d) Rawalpindi"],
    ["a) Punjab", "b) Balochistan", "c) Gujarat", "d) Sindh"],
    [
        "a) Pashto and Balochi",
        "b) Persian and Urdu",
        "c) Punjabi and Sindhi",
        "d) Urdu and English",
    ],
];
const rightanswers = [
    "a) Muhammad Ali Jinnah",
    "b) August 14, 1947",
    "a) Urdu",
    "b) Hindu Kush",
    "d) River Indus",
    "a) Parcham-e-Sitara-o-Hilal",
    "c) Hafeez Jullundhri",
    "c) Islamabad",
    "c) Gujarat",
    "d) Urdu and English",
];
let score = 0;
async function quiz(question, answers_choice, rightanswers) {
    let userinput = await inquirer.prompt([
        {
            name: "question",
            type: "list",
            message: question,
            choices: answers_choice,
        },
    ]);
    breakaline();
    if (rightanswers.includes(userinput.question)) {
        console.log(`you select right answer`);
        score++;
    }
    else {
        console.log(`try again correct answer is ${rightanswers}`);
    }
    breakaline();
}
let index = 0;
while (index <= questions.length - 1) {
    await quiz(questions[index], answers_choice[index], rightanswers[index]);
    index++;
}
breakaline();
if (score >= 4) {
    console.log(`congrats! your quiz score is ${score} "average pass" right answer is ${score} out of ${questions.length}`);
}
else if (score >= 5) {
    console.log(`congrats! your quiz score is ${score} "pass" right answer is ${score} out of ${questions.length}`);
}
else {
    console.log(`your quiz score is ${score} "you are fail" right answers are ${score} out of ${questions.length}`);
}
breakaline();
