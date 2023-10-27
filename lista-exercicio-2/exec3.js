const feedbacks = ["Ruim", "Pessimo", "Regular", "Bom", "Otimo"];
const feedback = "ok";

function verificarFeedbackValido(feedback) {
    feedback = feedback
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/^[A-Za-z]/, (letter) => letter.toUpperCase())

                return feedbacks.includes(feedback);

}
console.log(verificarFeedbackValido(feedback))