import {elementsData} from './elements.js'

// nav bar 

const ptElement = document.querySelectorAll(".pt-nav-element")

ptElement.forEach((element) => {
    element.classList.add("btn","btn-sm","pt-ele")
})

document.addEventListener('DOMContentLoaded', () => {
    const defaultActiveButton = document.querySelector('#cg-all');
    if (defaultActiveButton) {
        defaultActiveButton.classList.add('active');
    }

    document.querySelector('.pt-filters')
        .addEventListener('click', (event) => {
            if (event.target.classList.contains('topic-item')) {
                document
                    .querySelectorAll('.topic-item')
                    .forEach(item => {
                        item.classList.remove('active');
                        item.classList.add('hover-disabled');
                    });

                event.target.classList.add('active');
                event.target.classList.remove('hover-disabled');
            }
        });
});

const nav = document.querySelector("nav")
nav.addEventListener("click", (e) => {

    if (e.target.id === "cg-metals") {
        ptElement.forEach((element) => {
            if (element.classList.contains("pt-filter-metal")) {
                element.style.display = "block"

            }
            else {
                element.style.display = "none"
            }
        })
    }
    else if (e.target.id === "cg-nonmetals") {
        ptElement.forEach((element) => {
            if (element.classList.contains("pt-filter-nonmetal")) {
                element.style.display = "block"

            }
            else {
                element.style.display = "none"
            }
        })

    }
    else if (e.target.id === "cg-states") {
        ptElement.forEach((element) => {
            if (element.classList.contains("pt-filter-states")) {
                element.style.display = "block"

            }
            else {
                element.style.display = "none"
            }
        })

    }
    else if (e.target.id === "cg-groups") {
        ptElement.forEach((element) => {
            if (element.classList.contains("pt-filter-groups")) {
                element.style.display = "block"

            }
            else {
                element.style.display = "none"
            }
        })

    }
    else if (e.target.id === "cg-periods") {
        ptElement.forEach((element) => {
            if (element.classList.contains("pt-filter-periods")) {
                element.style.display = "block"

            }
            else {
                element.style.display = "none"
            }
        })

    }
    else if (e.target.id === "cg-metalloids" || e.target.id === "cg-all") {
        ptElement.forEach((element) => {
            if (element.style.display = "block") {
                element.style.display = "none"

            }
        })

    }


})

// element creation and adding 


const ptTable = document.querySelector('.pt-table');

elementsData.forEach(element => {
    
    const div = document.createElement('div');
    div.classList.add("pt-element", element.category); 
    div.setAttribute("id",((element.symbol).toLowerCase()))
    // div.innerHTML = `<strong>${element.symbol}</strong><br>${element.number}`;

    ptTable.appendChild(div);
});

