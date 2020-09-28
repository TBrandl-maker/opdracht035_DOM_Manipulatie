const buttons = document.querySelectorAll('.big-five-button')

buttons.forEach(button => button.addEventListener('click', function () {

    const listElement = document.createElement("li")
    listElement.classList.add("spotted-animals-list-item");
    const list = document.getElementById("spotted-animals-list");
    list.appendChild(listElement);
    listElement.innerText = button.innerText
}))
