const questions = [
    {
        question: "Kamu tersesat di hutan tanpa peralatan apa pun. Bagaimana caramu mencari jalan keluar?",
        image: "question image/1.png",
        options: [
            { text: "Jalan maju saja terus—nanti juga sampai!", 
                value: "Bhuchongpisut"},
            { text: "Cari sungai dan ikuti arah arusnya", 
                value: "Davichmetha" },
            { text: "Melihat arah dari matahari, bintang, dan bulan", 
                value: "Meenanagarin" },
            { text: "Memeriksa tanaman di sekelilingku dan menentukan arah dengan bantuan lumut", 
                value: "Bhuchongpisut" },
            { text: "Menentukan arah berdasarkan jejak hewan", 
                value: "Assavadevathin" },
        ]
    },
    {
        question: "Kamu lagi ulang tahun, paling senang kalau menerima hadiah apa?",
        image: "question image/2.png",
        options: [
            { text: "Gadget terbaru", 
                value: "Davichmetha" },
            { text: "Pangan fungsional yang menyehatkan",  
                value: "Bhuchongpisut" },
            { text: "Seekor unicorn", 
                value: "Assavadevathin" },
            { text: "Sebuah teropong", 
                value: "Meenanagarin" },
        ]
    },
    {
        question: "Bunga kesukaanmu apa?",
        image: "question image/3.png",
        options: [
            { text: "Melati", 
                value: "Assavadevathin" },
            { text: "Bunga lonceng", 
                value: "Davichmetha" },
            { text: "Bunga matahari", 
                value: "Davichmetha" },
            { text: "Kamboja", 
                value: "Assavadevathin" },
            { text: "Hortensia", 
                value: "Meenanagarin" },
            { text: "Mawar", 
                value: "Bhuchongpisut" },
            { text: "Bunga sepatu", 
                value: "Davichmetha" },
            { text: "Bakung", 
                value: "Assavadevathin" },
            { text: "Teratai", 
                value: "Meenanagarin" },
            { text: "Aku cinta semua bunga", 
                value: "Bhuchongpisut" },
            { text: "Aku tidak terlalu suka bunga ...", 
                value: "Meenanagarin" },
        ]
    },
    {
        question: "Kamu akan membeli sofa. Hal apa yang paling membuatmu tertarik?",
        image: "question image/4.png",
        options: [
            { text: "Sofa kulit, adem kalau dipegang", 
                value: "Bhuchongpisut" },
            { text: "Sofa kain yang lembut tekstur permukaannya", 
                value: "Assavadevathin" },
            { text: "Tekturnya tidak masalah, tetapi warna dan desainnya harus bagus", 
                value: "Davichmetha" },
            { text: "Penampilannya tidak masalah, tetapi harus empuk dan nyaman untuk duduk", 
                value: "Meenanagarin" },
        ]
    },
    {
        question: "Kalau kamu bisa punya satu kekuatan super, kekuatan apa yang akan kamu pilih?",
        image: "question image/5.png",
        options: [
            { text: "Menyembuhkan penyakit apa pun", 
                value: "Bhuchongpisut" },
            { text: "Terbang", 
                value: "Davichmetha" },
            { text: "Melihat dengan jelas di kegelapan", 
                value: "Meenanagarin" },
            { text: "Penglihatan super, yang kecil dan jauh banget pun kelihatan", 
                value: "Meenanagarin" },
            { text: "Teleportasi",
                value: "Assavadevathin" },
            { text: "Berbicara dengan hewan", 
                value: "Assavadevathin" },
            { text: "Mengendalikan tumbuhan", 
                value: "Bhuchongpisut" },
            { text: "Memanggil angin", 
                value: "Meenanagarin" },
        ]
    },
    {
        question: "Siapa yang paling kamu percayai?",
        image: "question image/6.png",
        options: [
            { text: "Keluarga", 
                value: "Meenanagarin" },
            { text: "Teman", 
                value: "Assavadevathin" },
            { text: "Pacar/pasangan", 
                value: "Bhuchongpisut" },
            { text: "Anak buah", 
                value: "Assavadevathin" },
            { text: "Mentor", 
                value: "Davichmetha" },
        ]
    },
    {
        question: "Kamu sedang jalan-jalan malam, dan ada orang mencurigakan yang mengikutimu. Apa yang akan kamu lakukan?",
        image: "question image/7.png",
        options: [
            { text: "Tetap jalan terus saja—dia tidak akan mencoba menyakitiku. Kalaupun iya, tenang saja, polisi Emmaly kerjanya benar kok", 
                value: "Assavadevathin" },
            { text: "Konfrontasi langsung terang-terangan—mereka mau ngapain pun aku siap", 
                value: "Bhuchongpisut" },
            { text: "Meminta tolong pada orang asing yang berpapasan denganku di jalan", 
                value: "Meenanagarin" },
            { text: "Menyambungkan ponselku ke speaker terdekat dan menyalakan suara alarm untuk mengusir orang itu", 
                value: "Davichmetha" },
            { text: "Pergi ke pasar malam terdekat yang masih ramai agar aman, lalu menghubungi polisi dan teman untuk menjemputmu", 
                value: "Davichmetha" },
        ]
    },
    {
        question: "Kamu merasa lelah sekali setelah hari yang panjang. Apa yang kamu lakukan terlebih dahulu?",
        image: "question image/8.png",
        options: [
            { text: "Langsung ke kasur yang empuk", 
                value: "Assavadevathin" },
            { text: "Siapkan mandi air hangat dan berendam", 
                value: "Meenanagarin" },
            { text: "Pijat relaksasi menggunakan kursi pijatku", 
                value: "Davichmetha" },
            { text: "Makan malam lalu minum vitamin dan suplemen", 
                value: "Bhuchongpisut" },
        ]
    },
    {
        question: "Kencan idealmu seperti apa? (terinspirasi dari tweet-nya P'Den :3 )",
        image: "question image/9.png",
        options: [
            { text: "Melakukan olahraga kesukaan kita, p adu p balap", 
                value: "Davichmetha" },
            { text: "Quality time di rumah, berduaan saja", 
                value: "Bhuchongpisut" },
            { text: "Mengunjungi situs sejarah dan budaya Emmaly", 
                value: "Meenanagarin" },
            { text: "Naik kuda dan piknik outdoor", 
                value: "Assavadevathin" },
        ]
    },
    {
        question: "Mata pelajaran favoritmu?",
        image: "question image/10.png",
        options: [
            { text: "Matematika", 
                value: "Davichmetha" },
            { text: "Kimia", 
                value: "Bhuchongpisut" },
            { text: "Fisika", 
                value: "Davichmetha" },
            { text: "Biologi", 
                value: "Assavadevathin" },
            { text: "Sejarah", 
                value: "Meenanagarin" },
            { text: "Sosiologi", 
                value: "Meenanagarin" },
            { text: "Geografi", 
                value: "Bhuchongpisut" },
            { text: "Bahasa", 
                value: "Meenanagarin" },
            { text: "Penjaskes", 
                value: "Assavadevathin" },
        ]
    },
    {
        question: "Di manakah kamu paling ingin menghabiskan waktu liburan?",
        image: "question image/11.png",
        options: [
            { text: "Di pantai, mau nyium bau laut, main pasir, dan merasakan sinar matahari", 
                value: "Meenanagarin" },
            { text: "Di gunung yang suasananya tenang, udaranya segar dan adem", 
                value: "Bhuchongpisut" },
            { text: "Di pedesaan yang banyak sawah, kebun, dan peternakannya", 
                value: "Assavadevathin" },
            { text: "Di perkotaan yang banyak pilihan kuliner dan pusat perbelanjaannya", 
                value: "Davichmetha" },
        ]
    },
];

const emmalyHouses = {
    "Assavadevathin": {
        name: "Assavadevathin",
        image: "result/ID Assavadevathin.png",
    },
    "Bhuchongpisut": {
        name: "Bhuchongpisut",
        image: "result/ID Bhuchongpisut.png",
    },
    "Davichmetha": {
        name: "Davichmetha",
        image: "result/ID Davichmetha.png",
    },
    "Meenanagarin": {
        name: "Meenanagarin",
        image: "result/ID Meenanagarin.png",
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
    answers.push(answer); //add to the answers array
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
