const allQuestions = document.querySelectorAll(".questions__each-question");
allQuestions.forEach(element => {
    element.addEventListener('click', (event) => {
        if (!element.classList.contains("expand")) {
            document.querySelectorAll(".questions__each-question.expand")
                .forEach(element => element.classList.remove("expand"));
        }
        if (!event.target.classList.contains("questions__each-question__answer")) {
            element.classList.toggle("expand");
        }
    });
});