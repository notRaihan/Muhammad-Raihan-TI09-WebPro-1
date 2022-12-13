// isi logic gamemu disini


// selecting a element using loops
document.querySelectorAll('#option a').forEach((anchor) => {
    anchor.addEventListener('click',  (element) => {
        computerChoice(element);
        console.log(element);
    })
})

function computerChoice(element){
    // getting user choice
    let pilihanUser = element.target.innerText;

    // selecting computer result element
    let pilihanKomputer = document.querySelector('#result');

    // choices for computer
    let choices = ['Rock', 'Paper', 'Scissor'];

    // add randomness to the choices
    pilihanKomputer.innerHTML = choices[Math.floor(Math.random() * choices.length)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // if user win
    if (pilihanUser == 'Rock' && pilihanKomputer == 'Scissor') {
        setTimeout(alert('You Win'), 100);
    }
    if (pilihanUser == 'Paper' && pilihanKomputer == 'Rock') {
        setTimeout(alert('You Win'), 100);
    }
    if (pilihanUser == 'Scissor' && pilihanKomputer == 'Paper') {
        setTimeout(alert('You Win'), 100);
    }

    // if computer win
    if (pilihanKomputer == 'Rock' && pilihanUser == 'Scissor') {
        setTimeout(alert('You Lose'), 100);
    }
    if (pilihanKomputer == 'Paper' && pilihanUser == 'Rock') {
        setTimeout(alert('You Lose'), 100);
    }
    if (pilihanKomputer == 'Scissor' && pilihanUser == 'Paper') {
        setTimeout(alert('You Lose'), 100);
    }

    // if draw
    if (pilihanKomputer == pilihanUser) {
        setTimeout(alert('You Draw'), 100);
    }
}

