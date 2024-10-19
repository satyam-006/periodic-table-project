import { navButtonData } from './navButtonData.js'
import { navHiddenButtonData } from './navButtonData.js'

// nav creation by javascript
const filterNav = document.querySelector(".pt-filters")

navButtonData.map((item) => {
    const button = document.createElement("button")
    button.classList.add("btn", "btn-outline-secondary", "btn-sm", "topic-item", "pt-filter-button", "hover-disabled")
    button.setAttribute("type", "button")
    button.setAttribute("id", item.id)
    button.innerText = item.title


    filterNav.appendChild(button)
})





