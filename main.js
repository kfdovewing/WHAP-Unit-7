let quindex = 0;
let count = 0
const letters =["a", "b", "c", "d"];
const questions = [
    {
        question: "What was not a factor that led to the decline of the Qing Dyansty?",
        answers: [
            {item: "A: Overspending", correct: false},
            {item: "B: Natural disasters", correct: true},
            {item: "C: Internal conflicts and revolutions", correct: false},
            {item: "D: External conflicts and overextension of resources", correct: false},
        ]
    },
    {
        question: "What was Blitzkrieg?",
        answers:[
            {item: "A: Hitler's plan to conquer Europe quickly", correct: true},
            {item: "B: Stalin's plan to fix Russia's economy", correct: false},
            {item: "C: Mussolini's plan to get rid of Lasseiz Faire economics", correct: false},
            {item: "D: The Ottomans' plan to get rid of religious tolerance", correct: false},
        ]
    },
    {
        question: "What was not a factor that led to the collapse of the Ottoman Empire?",
        answers:[
            {item: "A: The decline of land trade", correct: false},
            {item: "B: Internal conflict", correct: false},
            {item: "C: Balkan nationalism", correct: false},
            {item: "D: Imperialism by European powers", correct: true},
        ]
    },
    {
        question: "What was a not a cause of world war I?",
        answers:[
            {item: "A: Alliances", correct: false},
            {item: "B: Imperialism", correct: false},
            {item: "C: Isolationism", correct: true},
            {item: "D: Nationalism", correct: false},
        ]
    },
    {
        question: "What was a method that the government used to initiate total war during World War I?",
        answers:[
            {item: "A: Propaganda", correct: true},
            {item: "B: Imperialism", correct: false},
            {item: "C: Bribes and monetary rewards", correct: false},
            {item: "D: Threats of military occupation", correct: false},
        ]
    },
    {
        question: "What was total war?",
        answers:[
            {item: "A: When everyone in the country, soldiers and families, are devoted to the war cause", correct: true},
            {item: "B: When the whole world, including European colonies, are involved in the war.", correct: false},
            {item: "C: When the whole world, including European colonies, are developing weapons", correct: false},
            {item: "D: The devotion of the entire economy of a country to developing weapons and nuclear technology", correct: false},
        ]
    },
    {
        question: "What was not a term of the Treaty of Versailles?",
        answers:[
            {item: "A: The Rhineland is given to the Allies", correct: false},
            {item: "B: France gets to rule Germany directly", correct: true},
            {item: "C: Germany has to pay France heavy reparations", correct: false},
            {item: "D: The entire war was Germany's fault", correct: false},
        ]
    },
    {
        question: "How did the New Deal intervene in the US economy?",
        answers:[
            {item: "A: The government paid all of the US's debts", correct: false},
            {item: "B: More jobs were offered by the government", correct: true},
            {item: "C: More weapons were made and sold", correct: false},
            {item: "D: The United States became fascist.", correct: false},
        ]
    },
    {
        question: "What was not a cause of WWII?",
        answers:[
            {item: "A: Hitler's expansion and blitzkrieg", correct: false},
            {item: "B: Japanese invasion of China", correct: false},
            {item: "C: The harsh terms of the Treaty of Versailles", correct: false},
            {item: "D: The success of appeasement methods", correct: true},
        ]
    },
    {
        question: "What was not a method that the US used to mobilize for war?",
        answers:[
            {item: "A: Anti-communism propaganda", correct: false},
            {item: "B: Pacific Island Hopping", correct: false},
            {item: "C: Allying with the Axis powers", correct: true},
            {item: "D: Selling weapons through the lend-lease program", correct: false},
        ]
    },
    {
        question: "How did World War II end?",
        answers:[
            {item: "A: German surrender and atomic bombs in Japan", correct: true},
            {item: "B: Internal conflicts in European nations, and revolutions", correct: false},
            {item: "C: The Treaty of Versailles and its negotiation", correct: false},
            {item: "D: The complete destruction of Germany by the Allied powers", correct: false},
        ]
    },
    
];
const button_a = document.getElementById("a")
const button_b = document.getElementById("b")
const button_c = document.getElementById("c")
const button_d = document.getElementById("d")

function load_questions(index){
    has_answered = false;
    const q = questions[index];
    let question_html = document.getElementById("question_text");
    question_html.innerHTML = questions[index].question;
    document.getElementById("ans_a").innerHTML = questions[index].answers[0].item;
    document.getElementById("ans_b").innerHTML = questions[index].answers[1].item;
    document.getElementById("ans_c").innerHTML = questions[index].answers[2].item;
    document.getElementById("ans_d").innerHTML = questions[index].answers[3].item;
    click(q)
}
let has_answered = false;
function click(question){
    [button_a, button_b, button_c, button_d].forEach((btn, i)=>{
        btn.onclick = () => {
            if (has_answered) return;
            has_answered = true;
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
                    alert("Quiz done. The page will reload in 1 second after you click ok. You got " + String(count) + "/" + String(questions.length));
                    setTimeout (() =>{
                        location.reload()
                    }, 500);
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



