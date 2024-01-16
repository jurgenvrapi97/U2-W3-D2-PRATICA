nameInput = document.getElementsByTagName('input')[0]
addButton = document.getElementsByTagName('button')[0]
rowNames = document.getElementById('invitati')
delateButton = document.getElementById('delate')
console.log(rowNames)
const newUser = document.createElement('li')
let invitati = []

addButton.addEventListener('click', function () {
  const newUser = document.createElement('li')
  newUser.classList.add('list-group-item')
  newUser.innerText = nameInput.value

  rowNames.appendChild(newUser)
  invitati.push(nameInput.value)
  nameInput.value = ''
  localStorage.setItem('listaInvitati', JSON.stringify(invitati))
})

if (localStorage.getItem('listaInvitati')) {
  const stingaInvitati = localStorage.getItem('listaInvitati')
  console.log(stingaInvitati)
  const arrayInvitati = JSON.parse(stingaInvitati)
  invitati = arrayInvitati
  invitati.forEach((inv) => {
    const newUser = document.createElement('li')
    newUser.classList.add('list-group-item')
    newUser.innerText = inv
    rowNames.appendChild(newUser)
  })
}
const clear = function () {
  window.location.reload()
  localStorage.removeItem('listaInvitati')
}
delateButton.addEventListener('click', function () {
  clear()
})

// contatore

function contatore() {
  let countsecond = sessionStorage.getItem('count')
  if (!countsecond) {
    countsecond = 0
  }
  document.getElementById('contatore').innerText = countsecond + ' secondi'
  countsecond++
  sessionStorage.setItem('count', countsecond)
}
setInterval(contatore, 1000)
contatore()
