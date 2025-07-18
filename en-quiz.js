const questions = [
    {
        question: "You are lost in a forest with no equipment. How would you find your way out?",
        image: "question image/1.png",
        options: [
            { text: "Just charge forward—it will take me somewhere!", 
                value: "Bhuchongpisut"},
            { text: "Look for a river and follow the flow", 
                value: "Davichmetha" },
            { text: "Determine the direction based on the sun and the stars", 
                value: "Meenanagarin" },
            { text: "Examine the plants around me and use moss as a navigation", 
                value: "Bhuchongpisut" },
            { text: "Navigate based on the animals' trails", 
                value: "Assavadevathin" },    
        ]
    },
    {
        question: "It's your birthday, what would you like to receive as a gift?",
        image: "question image/2.png",
        options: [
            { text: "The latest gadget", 
                value: "Davichmetha" },
            { text: "Functional food or beverage that's good for health",  
                value: "Bhuchongpisut" },
            { text: "A unicorn", 
                value: "Assavadevathin" },
            { text: "Binoculars", 
                value: "Meenanagarin" },
        ]
    },
    {
        question: "What is your favorite flower?",
        image: "question image/3.png",
        options: [
            { text: "Jasmine", 
                value: "Assavadevathin" },
            { text: "Bellflower", 
                value: "Davichmetha" },
            { text: "Sunflower", 
                value: "Davichmetha" },
            { text: "Plumeria", 
                value: "Assavadevathin" },
            { text: "Hortensia", 
                value: "Meenanagarin" },
            { text: "Rose", 
                value: "Bhuchongpisut" },
            { text: "Hibiscus", 
                value: "Davichmetha" },
            { text: "Lily", 
                value: "Assavadevathin" },
            { text: "Lotus", 
                value: "Meenanagarin" },
            { text: "I love them all", 
                value: "Bhuchongpisut" },
            { text: "I'm not that into flowers ...", 
                value: "Meenanagarin" },
        ]
    },
    {
        question: "You are going to buy a sofa. What feature would interest you the most?",
        image: "question image/4.png",
        options: [
            { text: "Leather sofa, cool to the touch", 
                value: "Bhuchongpisut" },
            { text: "Fabric sofa with soft surface texture", 
                value: "Assavadevathin" },
            { text: "The texture doesn't matter, but the color and design should be good", 
                value: "Davichmetha" },
            { text: "The outer appearance doesn't matter, but it should be soft and comfortable", 
                value: "Meenanagarin" },
        ]
    },
    {
        question: "If you could have one superpower, what would you choose?",
        image: "question image/5.png",
        options: [
            { text: "Heal any disease", 
                value: "Bhuchongpisut" },
            { text: "Fly", 
                value: "Davichmetha" },
            { text: "See clearly in the dark", 
                value: "Meenanagarin" },
            { text: "Super vision that zooms in to tiny details and sees clearly from afar", 
                value: "Davichmetha" },
            { text: "Teleportation",
                value: "Assavadevathin" },
            { text: "Talk to animals", 
                value: "Assavadevathin" },
            { text: "Control the plants", 
                value: "Bhuchongpisut" },
            { text: "Summon the wind", 
                value: "Meenanagarin" },
        ]
    },
    {
        question: "Who do you trust the most?",
        image: "question image/6.png",
        options: [
            { text: "Family", 
                value: "Meenanagarin" },
            { text: "Friends", 
                value: "Assavadevathin" },
            { text: "Lover", 
                value: "Bhuchongpisut" },
            { text: "Attendant", 
                value: "Assavadevathin" },
            { text: "Mentor", 
                value: "Davichmetha" },
        ]
    },
    {
        question: "You are taking a walk at night in Emmaly and someone suspicious is following you. What will you do?",
        image: "question image/7.png",
        options: [
            { text: "Keep walking—they won't try to harm me and even if they did, Emmaly police will do their job", 
                value: "Assavadevathin" },
            { text: "Confront them directly—I'm ready for every possible outcome", 
                value: "Bhuchongpisut" },
            { text: "Ask help from the nearest stranger I encounter", 
                value: "Meenanagarin" },
            { text: "Connect my phone to the nearest speaker and put on alarm sound to chase them off", 
                value: "Davichmetha" },
            { text: "Go to the nearest night market where it's still crowded just to be safe, then call the police and a friend to accompany you home", 
                value: "Davichmetha" },
        ]
    },
    {
        question: "You feel tired from a long exhausting day. What will you do first?",
        image: "question image/8.png",
        options: [
            { text: "Go straight to the fluffy comfortable bed", 
                value: "Assavadevathin" },
            { text: "Prepare a hot bath and soak in", 
                value: "Meenanagarin" },
            { text: "Go for a relaxing massage", 
                value: "Davichmetha" },
            { text: "Eat dinner, drink vitamins and supplements", 
                value: "Bhuchongpisut" },
        ]
    },
    {
        question: "What is your ideal date? (inspired by Khru Den's tweet :D )",
        image: "question image/9.png",
        options: [
            { text: "Do our favorite sport, maybe compete against each other?", 
                value: "Davichmetha" },
            { text: "Quality time at home, just us both", 
                value: "Bhuchongpisut" },
            { text: "Visit historical and cultural sites of Emmaly", 
                value: "Meenanagarin" },
            { text: "Horseback riding and have an outdoor picnic", 
                value: "Assavadevathin" },
        ]
    },
    {
        question: "Your favorite subject?",
        image: "question image/10.png",
        options: [
            { text: "Math", 
                value: "Davichmetha" },
            { text: "Chemistry", 
                value: "Bhuchongpisut" },
            { text: "Physics", 
                value: "Davichmetha" },
            { text: "Biology", 
                value: "Assavadevathin" },
            { text: "History", 
                value: "Meenanagarin" },
            { text: "Sociology", 
                value: "Meenanagarin" },
            { text: "Geography", 
                value: "Bhuchongpisut" },
            { text: "Economics", 
                value: "Davichmetha" },
            { text: "Art", 
                value: "Assavadevathin" },
            { text: "Language", 
                value: "Meenanagarin" },
            { text: "Physical education", 
                value: "Assavadevathin" },
        ]
    },
    {
        question: "Where do you want to spend your holiday?",
        image: "question image/11.png",
        options: [
            { text: "On the beach where I can smell the sea, touch the sand, and feel the sun", 
                value: "Meenanagarin" },
            { text: "On the mountain where the ambience is calm and the air is fresh and chill", 
                value: "Bhuchongpisut" },
            { text: "In the countryside with all the plantation and farms", 
                value: "Assavadevathin" },
            { text: "In the city with the varying culinary choice and shopping centers", 
                value: "Davichmetha" },
        ]
    },
];

const emmalyHouses = {
    "Assavadevathin": {
        name: "Assavadevathin",
        image: "result/EN Assavadevathin.png",
    },
    "Bhuchongpisut": {
        name: "Bhuchongpisut",
        image: "result/EN Bhuchongpisut.png",
    },
    "Davichmetha": {
        name: "Davichmetha",
        image: "result/EN Davichmetha.png",
    },
    "Meenanagarin": {
        name: "Meenanagarin",
        image: "result/EN Meenanagarin.png",
    },
};

let currentQuestionIndex = 0;
let answers = [];

function displayQuestion() {
    const questionTextElement = document.getElementById('question-text');
    const questionImageElement = document.getElementById('question-image');
    const answerOptionsElement = document.getElementById('answer-options');
    
    const currentQuestion = questions[currentQuestionIndex];
    questionTextElement.innerHTML = `${currentQuestion.question}`; //display the current question
    questionImageElement.innerHTML = `<img src="${currentQuestion.image}" alt="Question ${currentQuestion + 1}" height="200">`; //display the image for current question 
    answerOptionsElement.innerHTML = ''; 

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.innerHTML = `${option.text}`;
        button.className = "btn barlow-medium answer-options-button";
        button.addEventListener('click', () => handleAnswer(option.value)); //run handleAnswer function when the option is clicked
        answerOptionsElement.appendChild(button); //add the answer options button to 'answer-options' id
        });

        nextButton.disabled = true; //disable the next button when no answer is clicked
        nextButton.classList.toggle('opacity-50', nextButton.disabled); //add a class for the disabled next button so it appears transparent
}

document.getElementById('start-button').addEventListener('click', function() { //only display the quiz and hides the start and result page when the start button is clicked
    document.getElementById('quiz-start-page').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('results-container').style.display = 'none';
    displayQuestion();
    }
);

function handleAnswer(answer) {
    if (answers.length === currentQuestionIndex) {
        answers.push(answer); //add to the answers array
    } else {
        answers[currentQuestionIndex] = answer;
    }
    nextButton.disabled = false; //enables the next button
    nextButton.classList.remove('opacity-50'); //remove its transparency
}

function calculateEmmalyHouse() {
    let houseCounts = { //initial count
        "Assavadevathin": 0,
        "Bhuchongpisut": 0,
        "Davichmetha": 0,
        "Meenanagarin": 0
    };
    answers.forEach(answer => {
        houseCounts[answer]++; //add the score for each house along the answers
    });

    let sortedHouses = Object.entries(houseCounts).sort(([, countA], [, countB]) => countB - countA); //sort the house-count pair based on the count, in descending order
    return sortedHouses[0][0]; //return the house with the highest count
}

function showResults() { //only display the result page, hides the quiz and the start page
    const emmalyHouseResultElement = document.getElementById('emmaly-house-result');
    const resultsImageElement = document.getElementById('result-image');
    document.getElementById('quiz-start-page').style.display = 'none';
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('results-container').style.display = 'block';

    const emmalyHouse = calculateEmmalyHouse();
    const houseData = emmalyHouses[emmalyHouse]; 
    emmalyHouseResultElement.innerHTML = `${houseData.name}`; 
    resultsImageElement.innerHTML = `<img src="${houseData.image}" alt="${houseData.name}" width="100%">`;
}

function nextQuestion() { 
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        showResults();
        }
}

const nextButton = document.getElementById('next-button');
const restartButton = document.getElementById('restart-button');
nextButton.addEventListener('click', nextQuestion);

function restartTest() {
    currentQuestionIndex = 0;
    answers = [];
    document.getElementById('quiz-start-page').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('results-container').style.display = 'none';
    displayQuestion();
}

restartButton.addEventListener('click', restartTest); 
