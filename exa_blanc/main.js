
for(let row = 0; row <10; row++){
    if(row ===0) {
        numSeat = 13
    } else {
        numSeat = 15
    }
    for(let col=0; col<numSeat ; col++){
        let place = document.createElement('div')
        place.innerHTML = '&nbsp'
        place.addEventListener('click', function() {
            if(place.classList.value) {
                alert('This seat is already taken!')
            } else {
                place.classList.add('taken')
            }
        })
        document.body.appendChild(place)

    }
    let br = document.createElement('br')
    document.body.appendChild(br)
}