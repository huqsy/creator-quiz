const questions = [
    {
        text: "When you're at a party, you're most likely to...",
        options: [
            { answer: "Tell stories to a small group.", type: "Written" },
            { answer: "Be the center of attention, get into a dance battle.", type: "Video" },
            { answer: "Be the DJ or share a playlist you made.", type: "Audio" },
            { answer: "Take photos or admire the aesthetics of the place.", type: "Visual" }
        ]
    },
    {
        text: "If you were to start a YouTube channel today, it would be about...",
        options: [
            { answer: "Book reviews or writer's tips.", type: "Written" },
            { answer: "Daily vlogs or reaction videos.", type: "Video" },
            { answer: "Music covers or ASMR.", type: "Audio" },
            { answer: "Art tutorials or animation.", type: "Visual" }
        ]
    },
    {
        text: "You're going on vacation, you can only take one of these with you:",
        options: [
            { answer: "A diary.", type: "Written" },
            { answer: "A GoPro. ", type: "Video" },
            { answer: "A musical instrument.", type: "Audio" },
            { answer: "A sketchbook.", type: "Visual" }
        ]
    },
    {
        text: "Which of these app combos you can't live without:",
        options: [
            { answer: "Twitter and WattPad.", type : "Written"},
            { answer: "TikTok and YouTube.", type : "Video"},
            { answer: "Spotify and Audible.", type : "Audio"},
            { answer: "Instagram and Procreate.", type : "Visual"}
        ]
    },
    {
        text: "When you think about 'expressing yourself', you first think of...",
        options: [
            { answer: "Writing a heart felt post.", type: "Written"},
            { answer: "Making a video.", type: "Video"},
            { answer: "Singing or speaking.", type: "Audio"},
            { answer: "Drawing or designing.", type: "Visual"}
        ]
    },
    {
        text: "Your friends always come to you for...",
        options: [
            { answer: "Editing their writing.", type: "Written"},
            { answer: "Filming events.", type: "Video"},
            { answer: "Making playlists.", type: "Audio"},
            { answer: "Design or aesthetic advice.", type: "Visual"}
        ]
    },
    {
        text: "Your dream job involves...",
        options: [
            { answer: "Writing a bestselling novel.", type: "Written"},
            { answer: "Being an influencer recording their life.", type: "Video"},
            { answer: "Becoming a podcast host or musician.", type: "Audio"},
            { answer: "Designing cool things or drawing.", type: "Visual"}
        ]
    },
    {
        text: "What's your idea of a perfect date?",
        options: [
            { answer: "Reading at a cute cafe.", type: "Written"},
            { answer: "Going to the movies.", type: "Video"},
            { answer: "Attending a weekend concert.", type: "Audio"},
            { answer: "Touring an art exhibit.", type: "Visual"}
        ]
    },
    {
        text: "Your go to relaxation method is...",
        options: [
            { answer: "Reading a book or journaling.", type: "Written"},
            { answer: "Watching Twitch streams or Netflix.", type: "Video"},
            { answer: "Listening to a podcast.", type: "Audio"},
            { answer: "Drawing or doodling stuff.", type: "Visual"}
        ]
    },
    {
        text: "If you had to teach a class, it would be on...",
        options: [
            { answer: "Creative writing.", type: "Written"},
            { answer: "Video production.", type: "Video"},
            { answer: "Audio design.", type: "Audio"},
            { answer: "Photography.", type: "Visual"}
        ]
    }
];

const results = {
    'Written': {
        title: "Written Content Creator! 📝",
        description: `
        Dive into the world of words and stories. Whether it's blogging about your passions, crafting fictional tales, or reporting on real life events, written content offers a vast, flexible playground.
        <br><br>
        Good Fit If: You enjoy writing, have a knack for storytelling, and prefer being behind a screen rather than in front of a camera.
        <br><br>
        Examples:
        <ul>
            <li>Writing about productivity on a blog.</li>
            <li>A journalist for an esports website.</li>
            <li>An author that writes young adult novels.</li>
            <li>Email newsletter that goes out weekly.</li>
        </ul>
        `,
        imagePath: "path-to-written-image.png"
    },
    'Video': {
        title: "Video Content Creator! 🎥",
        description: `
        Lights, camera, action. From vlogging adventures to gaming sessions, the realm of video content is vast and varied.
        <br><br>
        Good Fit If: You thrive in front of a camera, love to put on a show, and enjoy being seen by your audience.
        <br><br>
        Examples:
        <ul>
            <li>TikTok dance challenges or covers.</li>
            <li>Making videos on tech or show reviews.</li>
            <li>VTubers on Twitch.</li>
            <li>Let's Play gamers on YouTube.</li>
        </ul>
        `,
        imagePath: "path-to-video-image.png"
    },
    'Audio': {
        title: "Audio Content Creator! 🎙️",
        description: `
        Let your voice be heard! From soothing ASMR sessions to riveting podcast discussions, audio content has a unique charm.
        <br><br>
        Good Fit If: You're articulate, love discussions, and don't mind learning how to fine tune audio.
        <br><br>
        Examples:
        <ul>
            <li>An anime discussion podcast.</li>
            <li>Indie musicians and bands on Spotify.</li>
            <li>ASMR artists on YouTube.</li>
            <li>Voice actors/actresses for a Steam game.</li>
        </ul>
        `,
        imagePath: "path-to-audio-image.png"
    },
    'Visual': {
        title: "Visual Content Creator! 🎨",
        description: `
        A picture is worth a thousand words. From vibrant artworks to stunning cosplay, visual content captures and captivates.
        <br><br>
        Good Fit If: You're highly creative and want to manifest your creativity in digital or physical form for others to see.
        <br><br>
        Examples:
        <ul>
            <li>Digital artists on Instagram.</li>
            <li>Cosplayers at conventions.</li>
            <li>Animator channels on YouTube.</li>
            <li>Photographers and graphic designers.</li>
        </ul>
        `,
        imagePath: "path-to-visual-image.png"
    }
};

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

let currentQuestionIndex = 0;
let tally = { Written: 0, Video: 0, Audio: 0, Visual: 0 };
let answeredQuestions = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadQuestion(index) {
    const question = questions[index];
    shuffleArray(question.options);  // Randomize the responses

    document.getElementById("question-text").textContent = question.text;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = '';  // clear previous options

    question.options.forEach((option, idx) => {
        const button = document.createElement("button");
        button.textContent = option.answer;
        button.onclick = () => submitAnswer(option.type);
        optionsDiv.appendChild(button);
    });

    // Update progress bar
    const progressBar = document.getElementById("progress-bar");
    const progressPercentage = ((index + 1) / questions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;

    document.getElementById("question-number").textContent = index + 1; // Update question number
}

function nextQuestion() {
    if (answeredQuestions.includes(currentQuestionIndex)) {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
        } else {
            displayResult();
        }
    } else {
        alert('Please answer the question before proceeding.');
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
}

function submitAnswer(type) {
    tally[type]++;
    if (!answeredQuestions.includes(currentQuestionIndex)) {
        answeredQuestions.push(currentQuestionIndex);
    }
    nextQuestion();
}

function displayResult() {
    const maxType = Object.keys(tally).reduce((a, b) => (tally[a] > tally[b] ? a : b));

    document.getElementById("quiz-section").classList.add("hidden");
    document.getElementById("results-section").classList.remove("hidden");

    document.getElementById("result-type").textContent = results[maxType].title;
    
    const resultData = results[maxType];
    document.getElementById("result-description").innerHTML = resultData.description;
    // document.getElementById("result-image").src = resultData.imagePath;
    document.getElementById("result-image").style.display = "none";
}

shuffleArray(questions);

// Initialize the first question when the page loads
window.onload = () => {
    loadQuestion(0);
    document.getElementById("prev-question").addEventListener("click", prevQuestion);
    document.getElementById("next-question").addEventListener("click", nextQuestion);
    document.getElementById("start-quiz").addEventListener("click", () => {
        document.getElementById("landing-page").classList.add("hidden");
        document.getElementById("quiz-section").classList.remove("hidden");
    });
};
