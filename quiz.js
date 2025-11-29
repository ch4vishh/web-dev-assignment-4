const quizQuestions = [
    { question : "90754 + 6668 = ?", answer : "97422"},
    { question : "What is the capital of India?", answer : "delhi"},
    { question : "India was ruled by?", answer : "britishers"},
    { question : "8 + 6 = ?", answer : "14"},
    { question : "5 + 5 = ?", answer : "10"},
    { question : "9 + 20 = ?", answer : "29"}
];

function runQuiz() {
    let score = 0;  

    for (let i = 0; i < quizQuestions.length; i++) {

        let userAnswer = prompt(quizQuestions[i].question);

        userAnswer = userAnswer.toLowerCase().trim();

        if (userAnswer === quizQuestions[i].answer){
            score++;
            alert("Correct!");
        } else {
            alert("Wrong! The correct answer is: " + quizQuestions[i].answer);
        }
    }
    alert("Your final score is : " + score + "/" + quizQuestions.length);
}

runQuiz();