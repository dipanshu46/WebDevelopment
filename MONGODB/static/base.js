function addItem(id, list){
    let element = document.getElementById(id);
    for (item of list){
        element.innerHTML += `\n<li>${item}</li>`;
    }
}

function createButton(prev, next){
    let element = document.getElementById('foot')
    element.innerHTML = `<a href="${prev}">\n<button>Prev</button>\n</a>\n<a href="${next}">\n<button>Next</button>\n</a>`
}