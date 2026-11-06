
let xp = 0;
let currentLesson = 0;
let currentQuestion = 0;
let correct = 0;

const lessons = [
    [
        {
            q: "Hello so'zining tarjimasi nima?",
            a: ["Salom", "Xayr", "Rahmat"],
            c: 0
        },
        {
            q: "Good morning nima degani?",
            a: ["Xayrli tun", "Xayrli tong", "Xayr"],
            c: 1
        }
    ],
    [
        {
            q: "I so'zining tarjimasi nima?",
            a: ["Sen", "Men", "U"],
            c: 1
        },
        {
            q: "She kim uchun ishlatiladi?",
            a: ["Qiz bola", "O'g'il bola", "Biz"],
            c: 0
        }
    ],
    [
        {
            q: "I ___ a student.",
            a: ["is", "are", "am"],
            c: 2
        },
        {
            q: "She ___ happy.",
            a: ["is", "am", "are"],
            c: 0
        }
    ],
    [
        {
            q: "Dog nima degani?",
            a: ["Mushuk", "It", "Ot"],
            c: 1
        },
        {
            q: "Cat nima degani?",
            a: ["Mushuk", "Sher", "Qush"],
            c: 0
        }
    ]
];

function startLesson(index) {
    currentLesson = index;
    currentQuestion = 0;
    correct = 0;

    document.getElementById("quiz").scrollIntoView({
        behavior: "smooth"
    });

    showQuestion();
}

function showQuestion() {
    const q = lessons[currentLesson][currentQuestion];

    document.getElementById("question").textContent = q.q;
    document.getElementById("answers").innerHTML = "";
    document.getElementById("result").textContent = "";
    document.getElementById("next").hidden = true;

    q.a.forEach((answer, index) => {
        const button = document.createElement("button");

        button.className = "answer";
        button.textContent = answer;

        button.onclick = () => checkAnswer(index);

        document.getElementById("answers").appendChild(button);
    });
}

function checkAnswer(index) {
    const q = lessons[currentLesson][currentQuestion];
    const buttons = document.querySelectorAll(".answer");

    buttons.forEach(button => button.disabled = true);

    if (index === q.c) {
        correct++;
        xp += 10;

        document.getElementById("result").textContent =
            "✅ To'g'ri! +10 XP";
    } else {
        document.getElementById("result").textContent =
            "❌ Noto'g'ri! To'g'ri javob: " + q.a[q.c];
    }

    document.getElementById("xp").textContent = xp;

    document.getElementById("next").hidden = false;

    if (currentQuestion === lessons[currentLesson].length - 1) {
        document.getElementById("next").textContent = "Darsni tugatish";
    } else {
        document.getElementById("next").textContent = "Keyingi savol";
    }
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < lessons[currentLesson].length) {
        showQuestion();
    } else {
        document.getElementById("question").textContent =
            "🎉 Dars tugadi!";

        document.getElementById("answers").innerHTML = "";

        document.getElementById("result").textContent =
            "Siz " + correct + " ta savoldan to'g'ri javob berdingiz!";

        document.getElementById("next").hidden = true;
    }
}
