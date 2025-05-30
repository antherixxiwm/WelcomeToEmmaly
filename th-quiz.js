const questions = [
    {
        question: "เมื่อคุณหลงป่าและไม่มีอุปกรณ์อะไร คุณจะหาทางออกยังไง?",
        image: "question image/1.png",
        options: [
            { text: "เดินตรงไปเรื่อยๆ เดี๋ยวมันก็ต้องไปถึงที่ไหนสักที่แหละ", 
                value: "Bhuchongpisut"},
            { text: "มองหาแม่น้ำแล้วเดินไปตามทางน้ำไหล", 
                value: "Davichmetha" },
            { text: "หาทิศทางจากพระอาทิตย์และดวงดาว", 
                value: "Meenanagarin" },
            { text: "สังเกตต้นไม้รอบตัวแล้วใช้ตะไคร่(มอสส์)ช่วยนำทาง", 
                value: "Bhuchongpisut" },
            { text: "เดินตามรอยเท้าสัตว์", 
                value: "Assavadevathin" },    
        ]
    },
    {
        question: "วันนี้เป็นวันเกิดคุณ คุณอยากได้อะไรเป็นของขวัญ?",
        image: "question image/2.png",
        options: [
            { text: "อุปกรณ์ไฮเทคล่าสุด", 
                value: "Davichmetha" },
            { text: "อาหารหรือเครื่องดื่มเพื่อสุขภาพ",  
                value: "Bhuchongpisut" },
            { text: "ยูนิคอร์น", 
                value: "Assavadevathin" },
            { text: "กล้องส่องทางไกล", 
                value: "Meenanagarin" },
        ]
    },
    {
        question: "ดอกไม้ที่คุณชอบที่สุดคือ?",
        image: "question image/3.png",
        options: [
            { text: "ดอกมะลิ", 
                value: "Assavadevathin" },
            { text: "ดอกระฆัง", 
                value: "Davichmetha" },
            { text: "ดอกทานตะวัน", 
                value: "Davichmetha" },
            { text: "ดอกลั่นทม", 
                value: "Assavadevathin" },
            { text: "ดอกไฮเดรนเยีย", 
                value: "Meenanagarin" },
            { text: "ดอกกุหลาบ", 
                value: "Bhuchongpisut" },
            { text: "ดอกชบา", 
                value: "Davichmetha" },
            { text: "ดอกลิลลี่", 
                value: "Assavadevathin" },
            { text: "ดอกบัว", 
                value: "Meenanagarin" },
            { text: "ฉันชอบดอกไม้ทุกชนิดเลย", 
                value: "Bhuchongpisut" },
            { text: "ฉันไม่ค่อยชอบดอกไม้เท่าไหร่", 
                value: "Meenanagarin" },
        ]
    },
    {
        question: "คุณจะซื้อโซฟา คุณสมบัติแบบไหนที่คุณมองหา?",
        image: "question image/4.png",
        options: [
            { text: "โซฟาหนังที่ให้ความรู้สึกเย็นสบาย", 
                value: "Bhuchongpisut" },
            { text: "โซฟาผ้าที่ให้ความรู้สึกนุ่มสบาย", 
                value: "Assavadevathin" },
            { text: "วัสดุไม่สำคัญ ขอแค่สีและดีไซน์สวยก็พอ", 
                value: "Davichmetha" },
            { text: "รูปลักษณ์ภายนอกไม่สำคัญ แต่ต้องนุ่มและนั่งสบาย", 
                value: "Meenanagarin" },
        ]
    },
    {
        question: "ถ้าคุณมีพลังวิเศษได้หนึ่งอย่าง คุณจะเลือกอะไร?",
        image: "question image/5.png",
        options: [
            { text: "รักษาโรคได้ทุกชนิด", 
                value: "Bhuchongpisut" },
            { text: "บินได้", 
                value: "Davichmetha" },
            { text: "มองเห็นชัดเจนได้ในความมืด", 
                value: "Meenanagarin" },
            { text: "มองเห็นระยะไกลและซูมดูรายละเอียดเล็กๆได้", 
                value: "Davichmetha" },
            { text: "หายตัวได้",
                value: "Assavadevathin" },
            { text: "คุยกับสัตว์ได้", 
                value: "Assavadevathin" },
            { text: "ควบคุมต้นไม้ได้", 
                value: "Bhuchongpisut" },
            { text: "ควบคุมลมได้", 
                value: "Meenanagarin" },
        ]
    },
    {
        question: "คุณไว้ใจใครมากที่สุด?",
        image: "question image/6.png",
        options: [
            { text: "ครอบครัว", 
                value: "Meenanagarin" },
            { text: "เพื่อน", 
                value: "Assavadevathin" },
            { text: "คนรัก", 
                value: "Bhuchongpisut" },
            { text: "ผู้ติดตาม", 
                value: "Assavadevathin" },
            { text: "ที่ปรึกษา", 
                value: "Davichmetha" },
        ]
    },
    {
        question: "คุณกำลังเดินเล่นในตอนกลางคืน แล้วรู้สึกว่ามีคนท่าทางไม่น่าไว้ใจตามคุณมา คุณจะทำยังไง?",
        image: "question image/7.png",
        options: [
            { text: "เดินไปต่อแบบใจเย็น คงไม่มีอะไรหรอก เพราะมีตำรวจเอมมาลีดูแลอยู่", 
                value: "Assavadevathin" },
            { text: "เผชิญหน้าไปเลยตรงๆ พร้อมตั้งรับทุกสถานการณ์", 
                value: "Bhuchongpisut" },
            { text: "เห็นใครอยู่ใกล้ ก็รีบเข้าไปขอความช่วยเหลือจากเขาเลย", 
                value: "Meenanagarin" },
            { text: "ต่อมือถือกับลำโพงแถวนั้น แล้วเปิดเสียงไซเรนให้ลั่นไปเลย", 
                value: "Davichmetha" },
            { text: "หนีเข้าตลาด เอาที่ที่คนเยอะไว้ก่อน แล้วค่อยโทรหาตำรวจกับเพื่อนให้มาช่วย", 
                value: "Davichmetha" },
        ]
    },
    {
        question: "คุณรู้สึกเหนื่อยล้าจากวันที่แสนยาวนาน สิ่งแรกที่คุณจะทำคืออะไร?",
        image: "question image/8.png",
        options: [
            { text: "ทิ้งตัวลงบนเตียง", 
                value: "Assavadevathin" },
            { text: "เตรียมน้ำอุ่นแล้วแช่น้ำให้ผ่อนคลาย", 
                value: "Meenanagarin" },
            { text: "ไปนวดคลายเมื่อย", 
                value: "Davichmetha" },
            { text: "กินข้าวและกินอาหารเสริมเติมพลัง", 
                value: "Bhuchongpisut" },
        ]
    },
    {
        question: "เดตในฝันของคุณเป็นแบบไหน? (ได้แรงบันดาลใจมาจากทวิตของครูเด่น)",
        image: "question image/9.png",
        options: [
            { text: "เล่นกีฬาที่ชอบและแข่งกันเล่นๆ", 
                value: "Davichmetha" },
            { text: "อยู่บ้านชิลๆใช้เวลาด้วยกันแค่เราสองคน", 
                value: "Bhuchongpisut" },
            { text: "ไปเที่ยวเชิงวัฒนธรรม เดินชิวชมเมืองเอมมาลี", 
                value: "Meenanagarin" },
            { text: "ขี่ม้าชมวิวแล้วปิกนิกในสวน ", 
                value: "Assavadevathin" },
        ]
    },
    {
        question: "วิชาที่คุณชอบที่สุดคือ?",
        image: "question image/10.png",
        options: [
            { text: "คณิตศาสตร์", 
                value: "Davichmetha" },
            { text: "เคมี", 
                value: "Bhuchongpisut" },
            { text: "ฟิสิกส์", 
                value: "Davichmetha" },
            { text: "ชีววิทยา", 
                value: "Assavadevathin" },
            { text: "ประวัติศาสตร์", 
                value: "Meenanagarin" },
            { text: "สังคมศึกษา", 
                value: "Meenanagarin" },
            { text: "ภูมิศาสตร์", 
                value: "Bhuchongpisut" },
            { text: "เศรษฐศาสตร์", 
                value: "Davichmetha" },
            { text: "ศิลปะ", 
                value: "Assavadevathin" },
            { text: "ภาษา", 
                value: "Meenanagarin" },
            { text: "พละศึกษา", 
                value: "Assavadevathin" },
        ]
    },
    {
        question: "วันหยุดในฝันของคุณคือที่ไหน?",
        image: "question image/11.png",
        options: [
            { text: "ริมทะเล สูดกลิ่นลมทะเล เดินเล่นบนหาดทรายใต้แสงอาทิตย์", 
                value: "Meenanagarin" },
            { text: "บนภูเขา บรรยากาศเงียบสงบ อากาศเย็นสดชื่นสบายใจ", 
                value: "Bhuchongpisut" },
            { text: "ในชนบท ท่ามกลางไร่นาและสวนสวยๆ", 
                value: "Assavadevathin" },
            { text: "เที่ยวเมืองใหญ่ กินของอร่อยและช้อปปิ้ง", 
                value: "Davichmetha" },
        ]
    },
];

const emmalyHouses = {
    "Assavadevathin": {
        name: "Assavadevathin",
        image: "result/TH Assavadevathin.png",
    },
    "Bhuchongpisut": {
        name: "Bhuchongpisut",
        image: "result/TH Bhuchongpisut.png",
    },
    "Davichmetha": {
        name: "Davichmetha",
        image: "result/TH Davichmetha.png",
    },
    "Meenanagarin": {
        name: "Meenanagarin",
        image: "result/TH Meenanagarin.png",
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
        button.className = "btn sarabun-regular answer-options-button";
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
