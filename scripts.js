const results = document.getElementById('results');
const submit = document.getElementById('submit');
const reset = document.getElementById('reset')
const nome = document.getElementById('nome')
const sobrenome = document.getElementById('sobrenome')

submit.addEventListener('click', (e) =>{
    if (results.childNodes.length != 3) {
        let dataContainer = document.createElement('div');
        let content = document.createElement('p');
        dataContainer.classList.add('data-container')
        dataContainer.appendChild(content)
        content.innerHTML = `Nome: ${nome.value}<br>Sobrenome: ${sobrenome.value}`
        results.appendChild(dataContainer)
    }
    else {
        alert('Número máximo de registros atingido.')
    }
})

reset.addEventListener('click', (e) => {
    results.innerHTML = ''
})