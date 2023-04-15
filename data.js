let list = document.getElementById("shopping-list");
let button = document.getElementById("add");
let select = document.getElementById("type");

button.addEventListener("click", (e) => {
    e.preventDefault();

    let attributeValue = select.options[select.selectedIndex].getAttribute("value");

    let userInput = document.getElementById("name").value

    const listItem = document.createElement('li')

    listItem.setAttribute("data-type", attributeValue)

    let text = document.createTextNode(userInput)

    listItem.appendChild(text)
    list.appendChild(listItem)

    form.reset();
})
