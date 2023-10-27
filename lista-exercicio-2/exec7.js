const feedbacks = [
    'Melhorar responsividade do site',
    'Erros confusos',
    'Os botões são intuitivos',
    'Erros confusos',
];

function removerFeedbacksDuplicados(feedbacks) {
    const feedbackSet = new Set(feedbacks);
    const feedbackArr = Array.from(feedbackSet)
    return feedbackArr;
}

console.log(removerFeedbacksDuplicados(feedbacks));
