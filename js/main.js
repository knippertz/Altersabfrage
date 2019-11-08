


function adult() {
    let alter = document.getElementById('input').value;
    
    if (alter >= 18) {
       document.getElementById('ergebnis').innerHTML = 'Toll, Du bist volljahrig'
    }
    else {
        document.getElementById('ergebnis').innerHTML = 'Leider nicht volljahrig'
    }
}

