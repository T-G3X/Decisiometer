// initialisation
start();

function start() {
document.getElementById("question").innerHTML = 'Est-ce une réunion "régulière" ?';
document.getElementById("oui").addEventListener("click", function(e) {
    answerH();
})

document.getElementById("non").addEventListener("click", function(e){
    answerA();
})
}

// déroulement du questionnaire
function answerA() {
    document.getElementById("question").innerHTML = " ";
    document.getElementById("question").innerHTML = "A-t'elle été organisée par votre N+1 ou N++?";
    document.getElementById("oui").addEventListener("click", function(e) {
    answerC();
    })
    document.getElementById("non").addEventListener("click", function(e){
    answerB();
    })
}

function answerB() {
    document.getElementById("question").innerHTML = " ";
    document.getElementById("question").innerHTML = "Y a-t-il plus de 10 personnes conviées?";
    document.getElementById("oui").addEventListener("click", function(e) {
    answerI();
    })
    document.getElementById("non").addEventListener("click", function(e){
    answerD();
    })
}

function answerC() {
    document.getElementById("question").innerHTML = " ";
    document.getElementById("question").innerHTML = "A-t'il prévu d'y faire une annonce particulière?";
    document.getElementById("oui").addEventListener("click", function(e) {
    answerE();
    })
    document.getElementById("non").addEventListener("click", function(e){
    answerD();
    })
}


function answerD() {
    document.getElementById("question").innerHTML = " ";
    document.getElementById("question").innerHTML = "Est-ce le lancement d'un nouveau projet?";
    document.getElementById("oui").addEventListener("click", function(e) {
    answerE();
    })
    document.getElementById("non").addEventListener("click", function(e){
    answerF();
    })   
}

function answerE() {
    document.getElementById("question").innerHTML = " ";
    document.getElementById("question").innerHTML = "Aviez-vous un moyen d'obtenir les informations qui seront partagées lors de cette réunion?";
    document.getElementById("oui").addEventListener("click", function(e) {
    answerG();
    })
    document.getElementById("non").addEventListener("click", function(e){
    answerR1();
    })
 }

function answerF() {
    document.getElementById("question").innerHTML = " ";
    document.getElementById("question").innerHTML = "Est-ce une réunion avec un client ou un propect?";
    document.getElementById("oui").addEventListener("click", function(e) {
    answerG();
    })
    document.getElementById("non").addEventListener("click", function(e){
    answerR2();
    })
  
}

function answerG() {
    document.getElementById("question").innerHTML = " ";
    document.getElementById("question").innerHTML = "Devez-vous prendre la parole?";
    document.getElementById("oui").addEventListener("click", function(e) {
    answerR1();
    })
    document.getElementById("non").addEventListener("click", function(e){
    answerR2();
    })
}

function answerH() {
    document.getElementById("question").innerHTML = " ";
    document.getElementById("question").innerHTML = "Y a-t-il un ordre du jour?";
    document.getElementById("oui").addEventListener("click", function(e) {
    answerI();
    })
    document.getElementById("non").addEventListener("click", function(e){
    answerJ();
    })
}

function answerI() {
    document.getElementById("question").innerHTML = " ";
    document.getElementById("question").innerHTML = "Si vous n'allez pas, votre absence passera t-elle inaperçue?";
    document.getElementById("oui").addEventListener("click", function(e) {
    answerJ();
    })
    document.getElementById("non").addEventListener("click", function(e){
    answerD();
    })
}

function answerJ() {
    document.getElementById("question").innerHTML = " ";
    document.getElementById("question").innerHTML = "A l'issue de cette réunion, une décision doit-elle être prise?";
    document.getElementById("oui").addEventListener("click", function(e) {
    answerK();
    })
    document.getElementById("non").addEventListener("click", function(e){
    answerN();
    })
}

function answerK() {
    document.getElementById("question").innerHTML = " ";
    document.getElementById("question").innerHTML = "La personne qui a le pouvoir de décision a t'elle été invitée?";
    document.getElementById("oui").addEventListener("click", function(e) {
    answerL();
    })
    document.getElementById("non").addEventListener("click", function(e){
    answerN();
    })
}

function answerL() {
    document.getElementById("question").innerHTML = " ";
    document.getElementById("question").innerHTML = "Cette décision aura t'elle un impact direct sur votre travail?";
    document.getElementById("oui").addEventListener("click", function(e) {
    answerM();
    })
    document.getElementById("non").addEventListener("click", function(e){
    answerR4();
    })
}

function answerM() {
    document.getElementById("question").innerHTML = " ";
    document.getElementById("question").innerHTML = "Quelqu'un a t'il été désigné pour assurer le suivi?";
    document.getElementById("oui").addEventListener("click", function(e) {
    answerQ();
    })
    document.getElementById("non").addEventListener("click", function(e){
    answerR3();
    })
}

function answerN() {
    document.getElementById("question").innerHTML = " ";
    document.getElementById("question").innerHTML = "La réunion doit-elle durer plus d'une heure?";
    document.getElementById("oui").addEventListener("click", function(e) {
    answerO();
    })
    document.getElementById("non").addEventListener("click", function(e){
    answerP();
    })
}

function answerO() {
    document.getElementById("question").innerHTML = " ";
    document.getElementById("question").innerHTML = "Est-ce vous qui avez organisé la réunion?";
    document.getElementById("oui").addEventListener("click", function(e) {
    
    answerR6();
    })
    document.getElementById("non").addEventListener("click", function(e){
    
    answerR5();
    })
}

function answerP() {
    document.getElementById("question").innerHTML = " ";
    document.getElementById("question").innerHTML = "Doit-elle débuter après 17h30?";
    document.getElementById("oui").addEventListener("click", function(e) {
    answerO();
    })
    document.getElementById("non").addEventListener("click", function(e){
    answerR4();
    })
}

function answerQ() {
    document.getElementById("question").innerHTML = " ";
    document.getElementById("question").innerHTML = "Est-ce vous?";
    document.getElementById("oui").addEventListener("click", function(e) {
    
    answerR6();
    })
    document.getElementById("non").addEventListener("click", function(e){
    
    answerR3();
    })
}
function answerR1() {
    document.getElementById("question").innerHTML = " ";
    document.getElementById("question").innerHTML = "Vous pouvez difficelement refuser. Trouvez une autre réunion à annuler !";
    document.getElementById("oui").remove();
    document.getElementById("non").remove();
    //document.getElementById(
}

function answerR2() {
    document.getElementById("question").innerHTML = " ";
    document.getElementById("question").innerHTML = "Vous pouvez la zapper pour cette fois, mais à condition d'avoir une bonne excuse.";   
    document.getElementById("oui").remove();
    document.getElementById("non").remove();
}

function answerR3() {
    document.getElementById("question").innerHTML = " ";
    document.getElementById("question").innerHTML = "Vous pouvez échapper à ce pensum. Si vous vous faites représenter par quelqu'un de votre équipe.";  
    document.getElementById("oui").remove();
    document.getElementById("non").remove();
}

function answerR4() {
    document.getElementById("question").innerHTML = " ";
    document.getElementById("question").innerHTML = "Allez-y... Si vous voulez faire plaisir à celui qui l'organise";
    document.getElementById("oui").remove();
    document.getElementById("non").remove();
}

function answerR5() {
    document.getElementById("question").innerHTML = " ";
    document.getElementById("question").innerHTML = "Séchez ! N'y allez pas ou vous risquez vraiment perdre votre temps.";
    document.getElementById("oui").remove();
    document.getElementById("non").remove();
}

function answerR6() {
    document.getElementById("question").innerHTML = " ";
    document.getElementById("question").innerHTML = "Vous ne pouvez pas y couper ! Mais vous risquez d'être seul si les autres invités ont aussi fait ce test!";
    document.getElementById("oui").remove();
    document.getElementById("non").remove();
}





