//like what was i meant to do? ;P
let quindex = 0;
let count = 0
const letters =["a", "b", "c", "d"];
const questions = [
    {
        question: "Who was the general who forced Japan open?",
        answers: [
            {item: "A: Hitler", correct: false},
            {item: "B: Perry", correct: true},
            {item: "C: Mussolini", correct: false},
            {item: "D: Stalin", correct: false},
        ]
    },
    {
        question: "What was Blitzkrieg?",
        answers:[
            {item: "A: Hitler's plan to conquer Europe quickly", correct: true},
            {item: "B: Stalin's plan to fix Russia's economy", correct: false},
            {item: "C: Mussolini's plan to get rid of Lasseiz Faire", correct: false},
            {item: "D: The Ottomans' plan to get rid of religious tolerance", correct: false},
        ]
    },
    {
        question:"What type of mustache did Hitler have?",
        answers: [
            {item: "A: handlebar", correct: false},
            {item: "B: pencil", correct: false},
            {item: "C: toothbrush", correct: true},
            {item: "D: horseshoe", correct: false},
        ]
    }
];
const button_a = document.getElementById("a")
const button_b = document.getElementById("b")
const button_c = document.getElementById("c")
const button_d = document.getElementById("d")

function load_questions(index){
    const q = questions[index];
    let question_html = document.getElementById("question_text");
    question_html.innerHTML = questions[index].question;
    document.getElementById("ans_a").innerHTML = questions[index].answers[0].item;
    document.getElementById("ans_b").innerHTML = questions[index].answers[1].item;
    document.getElementById("ans_c").innerHTML = questions[index].answers[2].item;
    document.getElementById("ans_d").innerHTML = questions[index].answers[3].item;
    click(q)
}

function click(question){
    [button_a, button_b, button_c, button_d].forEach((btn, i)=>{
        btn.onclick = () => {
            const is_correct = question.answers[i].correct;
            const answerSpan = btn.querySelector("span");
            answerSpan.innerHTML = is_correct ? "CORRECT" : "INCORRECT";
            btn.style.backgroundColor = is_correct ? "#addeb0" : "#deadad";
            if (is_correct){
                count++
            }
            setTimeout(() => {
                reset_btns()
                quindex++
                if (quindex >= questions.length){
                    alert("Quiz done. The page will reload in 3 seconds after you click ok. You got " + String(count) + "/" + String(questions.length));
                    setTimeout (() =>{
                        location.reload()
                    }, 3000);
                }else{
                    load_questions(quindex);
                }
            }, 1000)
        };

    });
}

function reset_btns(){
    [button_a, button_b, button_c, button_d].forEach((btn, i)=>{
        const span = btn.querySelector("span");
        span.innerHTML = letters[i];
        btn.style.backgroundColor = "";
    });
}

load_questions(quindex);



