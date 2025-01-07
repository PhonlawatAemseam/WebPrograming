
// ฟังก์ชันสำหรับสุ่มคำตอบ
function shuffleOptions(questionId) {
    let options = document.querySelectorAll(`#${questionId} .quiz-option`);
    let answers = [];
    options.forEach(option => {
        answers.push(option);
    });

    // สุ่มตำแหน่งคำตอบ
    for (let i = answers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] = [answers[j], answers[i]];
    }

    // แสดงคำตอบในตำแหน่งใหม่
    answers.forEach(answer => {
        document.querySelector(`#${questionId}`).appendChild(answer);
    });
}

// เรียกใช้ฟังก์ชันเมื่อโหลดหน้าเว็บ
window.onload = function() {
    shuffleOptions('question-1');
    shuffleOptions('question-2');
    shuffleOptions('question-3');
    shuffleOptions('question-4');
};

// ฟังก์ชันตรวจสอบคำตอบ
function checkAnswer(button, isCorrect) {
    if (isCorrect) {
        button.classList.add('correct');
        alert('คำตอบถูกต้อง เก่งมาก!');
    } else {
        button.classList.add('incorrect');
        alert('คำตอบผิด! ลองอีกครั้ง');
    }
}
