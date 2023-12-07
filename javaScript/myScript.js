function calculate() {
    const age = parseInt(prompt("Írja be korát:"));
    const weight = parseFloat(prompt("Írja be a testsúlyát (kilógrammokban):"));
    const days = parseInt(prompt("Írja be hány napot szeretne az űrben tölteni:"));
    var text;
    if (age < 18) {
        text = `Jelentlezése sajnos nem lehetséges. <br> Az űrutazás alsó kórhatára 18 év.`
    } 
    else {
        text = `Jelentlezése lehetséges. <br> Az ön utazásának a költsége: ${weight*days*13400} $ <br> Amennyiben ez az ár megfelel önnek töltse ki az alábbi jelentkezési lapot:`
    }
    document.getElementById("end").innerHTML = text;
}