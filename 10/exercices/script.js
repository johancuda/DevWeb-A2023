// 3.
for(let i = 0 ; i < 10; i++) {
    let p = document.createElement('p')
    p.innerHTML = 'quel joli paragraphe'
    document.body.appendChild(p)
}

// 4.

for(let i = 0; i< 3; i++) {
    let div = document.createElement('div')
    div.innerHTML = 'wow'
    div.style.textAlign = 'center'
    div.addEventListener('click', () => {
        console.log("aïe ça pique")
    })
    document.body.appendChild(div)
}

// 5.

function colorSwitch() {
    let allDivs = document.querySelectorAll('div')

    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].style.backgroundColor = 'aquamarine'   
    }
}

// 6.

let bouton = document.createElement('input')
bouton.setAttribute('type', 'button')
bouton.setAttribute('value', 'clique ici')
bouton.addEventListener('click', colorSwitch)
document.body.appendChild(bouton)