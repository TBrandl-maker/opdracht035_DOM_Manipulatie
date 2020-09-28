const buttons = document.querySelectorAll('.big-five-button')

buttons.forEach(button => button.addEventListener('click', function () {

    const listElement = document.createElement('li')
    listElement.classList.add('spotted-animals-list-item');
    const list = document.getElementById('spotted-animals-list');
    list.appendChild(listElement);
    listElement.innerText = button.innerText
}))

const removeFirstItem = document.getElementById('remove-first-item-button')

removeFirstItem.addEventListener('click', function () {
    let spottedAnimalsListItem = document.querySelector('.spotted-animals-list-item')
    let getParent = spottedAnimalsListItem.parentNode
    getParent.removeChild(spottedAnimalsListItem)
})

const removeAllElements = document.getElementById('remove-all-button');

removeAllElements.addEventListener('click', function () {
    let spottedAnimalsListItem = document.querySelector('.spotted-animals-list-item')
    let getParent = spottedAnimalsListItem.parentNode
    getParent.innerHTML = "";

})