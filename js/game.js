const quotes = [
    { text: "Sometimes, we do bad things for the people we love.", person: "Joe" },
    { text: "You make me feel safe in a way no one ever has.", person: "Love" },
    { text: "I wolf you.", person: "Love" },
    { text: "The most dangerous predator is the one without fear.", person: "Joe" },
    { text: "You can’t save someone who doesn’t want to be saved.", person: "Joe" },
    { text: "I did what I had to do to keep us safe.", person: "Love" },
    { text: "We’re perfect for each other. Broken, but perfect.", person: "Love" },
    { text: "We’re not just soulmates. We’re the same person.", person: "Joe" },
    { text: "People kill for love. People die for love.", person: "Joe" }
];

let currentQuote = null;
let waitingForNext = false; // Prevents multiple clicks

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    currentQuote = quotes[randomIndex];
    document.getElementById("quote").innerText = currentQuote.text;
    document.getElementById("result").innerText = "";
    waitingForNext = false;
}

function guess(person) {
    if (waitingForNext) return; // Ignore clicks until next question

    let result = document.getElementById("result");
    result.style.color = "white"; // White text

    if (person === currentQuote.person) {
        result.innerText = "✅ Correct.";
    } else {
        result.innerText = "❌ Wrong. It was " + currentQuote.person + ".";
    }

    waitingForNext = true;

    // Wait 2 seconds before loading next question
    setTimeout(newQuote, 2000);
}

newQuote();
