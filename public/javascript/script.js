import { elementsData } from './elements.js'



// nav bar functionality

const ptElement = document.querySelectorAll(".pt-nav-element")

ptElement.forEach((element) => {
    element.classList.add("btn", "btn-sm", "pt-ele", "pt-filter-button")
})

const clearActiveButtons = (group) => {

    group.querySelectorAll('.pt-nav-element').forEach(button => {
        button.classList.remove('hidden-active');
    });
}

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


    document.querySelector('.pt-filter-hide')
        .addEventListener('click', (event) => {

            if (event.target.classList.contains('pt-nav-element')) {
                clearActiveButtons(event.target.parentElement);

                if (event.target.classList.contains("pt-filter-metal")) {
                    document
                        .querySelectorAll('.pt-filter-metal')
                        .forEach(item => {
                            item.classList.add('hidden-active');
                        });

                }
                else if (event.target.classList.contains("pt-filter-nonmetal")) {
                    document
                        .querySelectorAll('.pt-filter-nonmetal')
                        .forEach(item => {
                            item.classList.add('hidden-active');
                        });
                }
                else if (event.target.classList.contains("pt-filter-states")) {
                    document
                        .querySelectorAll('.pt-filter-states')
                        .forEach(item => {
                            item.classList.add('hidden-active');
                        });
                }
                else if (event.target.classList.contains("pt-filter-groups")) {
                    document
                        .querySelectorAll('.pt-filter-groups')
                        .forEach(item => {
                            item.classList.add('hidden-active');
                        });
                }
                else if (event.target.classList.contains("pt-filter-periods")) {
                    document
                        .querySelectorAll('.pt-filter-periods')
                        .forEach(item => {
                            item.classList.add('hidden-active');
                        });
                }
                event.target.classList.remove('hidden-active');
            }
        });



})


// element creation and adding 



const ptTable = document.querySelector('.pt-table');

elementsData.forEach(element => {

    const div = document.createElement('div');
    div.classList.add("pt-element", element.groupBlock.replaceAll(" ", "-"), element.standardState,
        `g${element.group}`, `p${element.period}`);
    div.setAttribute("id", ((element.symbol).toLowerCase()))
    div.setAttribute("data-bs-toggle", "modal")
    div.setAttribute("data-bs-target", "#exampleModal")
    div.innerHTML = (`
                <div class="atm-no">${element.atomicNumber}</div>
                <div class="atm-symbol">${element.symbol}</div>
                <span class="atm-name">${element.name}</span>    
    `);

    ptTable.appendChild(div);
});

// search element
const search = document.querySelector("#search")

search.addEventListener("keyup", (e) => {
    const searchValue = e.target.value.toLowerCase();
    document.querySelector("#lanthanides").classList.add("selected")
    document.querySelector("#actinides").classList.add("selected")
    document.querySelectorAll(".atm-name").forEach((name) => {
        if (searchValue === "") {
            document.querySelector("#lanthanides").classList.remove("selected")
            document.querySelector("#actinides").classList.remove("selected")
        }

        if (name.textContent.toLowerCase().includes(searchValue)) {


            name.parentElement.classList.remove("selected")
        }
        else {
            name.parentElement.classList.add("selected")
        }
    })

});




// display description modal
const ptElements = document.querySelectorAll(".pt-element")

ptElements.forEach((element) => {



    element.addEventListener("click", () => {
        const modalBody = document.querySelector(".modal-body")
        modalBody.innerHTML = ''
        const bgColor = [{
            id: "nonmetal",
            backgroundColor: "#ffde59"
        },

        {
            id: "noble-gas",
            backgroundColor: "#ffbd59"
        },
        {
            id: "alkali-metal",
            backgroundColor: "#ffc8c8"
        },
        {
            id: "alkaline-earth-metal",
            backgroundColor: "#d3d3ff"
        },
        {
            id: "metalloid",
            backgroundColor: "#c1ff72"
        },
        {
            id: "transition-metal",
            backgroundColor: "#9dccfa"
        },
        {
            id: "post-transition-metal",
            backgroundColor: "#baffba"
        },
        {
            id: "lanthanoid",
            backgroundColor: "#5ce1e6"
        },
        {
            id: "actinoid",
            backgroundColor: "#a1e7d1"
        },
        {
            id: "halogen",
            backgroundColor: "#b1b1f5"
        }]
        const div = document.createElement('div');
        div.classList.add("d-flex", "gap-2", "align-items-center", "modal-container")
        elementsData.forEach(({
            atomicNumber, symbol, name, atomicMass, electronicConfiguration, electronegativity, vanDerWaalsRadius, ionizationEnergy, electronAffinity, oxidationStates, standardState, meltingPoint, boilingPoint, density, yearDiscovered
        }) => {

            if (element.id === symbol.toLowerCase()) {
                bgColor.forEach(({ id, backgroundColor }) => {
                    if (element.classList.contains(id)) {

                        div.innerHTML = (`
                            <div class="element-image-container d-flex align-items-center justify-content-center flex-column gap-2" style="background-color:${backgroundColor};">
                                <span style="font-size:28px">${atomicNumber}</span>
                                <span style="font-size:4rem;line-height: 55px">${symbol}</span>
                                <span style="font-size:28px;">${name}</span>
                                <span style="font-size:18px;font-weight:400;text-transform: capitalize;">${standardState}</span>
                                <a href="https://en.wikipedia.org/wiki/${name}" target="_blank" id="element-page">
                                    <span>More About</span>
                                    <span>${name}</span>
                                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                </a>
                                
                            </div>
                            <div class="text-sm px-1">
                                <table class="pc-table-rowed table-fixed text-left w-full content-table">
                                    <tbody>
                                        <tr>
                                            <th class="font-medium px-3 py-1 align-middle">Atomic Mass</th>
                                            <td class="px-4 py-1 middle">${atomicMass}</td>
                                        </tr>
                                        <tr>
                                            <th class="font-medium px-3 py-1 align-middle">Standard State</th>
                                            <td class="px-4 py-1 middle">${standardState}</td>
                                        </tr>
                                        <tr>
                                            <th class="font-medium px-3 py-1 align-middle">Electron Configuration</th>
                                            <td class="px-4 py-1 middle">${electronicConfiguration}</td>
                                        </tr>
                                        <tr>
                                            <th class="font-medium px-3 py-1 align-middle">Oxidation States</th>
                                            <td class="px-4 py-1 middle">${oxidationStates}</td>
                                        </tr>
                                        <tr>
                                            <th class="font-medium px-3 py-1 align-middle">Electronegativity (Pauling
                                                Scale)
                                            </th>
                                            <td class="px-4 py-1 middle">${electronegativity}</td>
                                        </tr>
                                        <tr>
                                            <th class="font-medium px-3 py-1 align-middle">Atomic Radius (van der Waals)
                                            </th>
                                            <td class="px-4 py-1 middle">${vanDerWaalsRadius}</td>
                                        </tr>
                                        <tr>
                                            <th class="font-medium px-3 py-1 align-middle">Ionization Energy</th>
                                            <td class="px-4 py-1 middle">${ionizationEnergy}</td>
                                        </tr>
                                        <tr>
                                            <th class="font-medium px-3 py-1 align-middle">Electron Affinity</th>
                                            <td class="px-4 py-1 middle">${electronAffinity}</td>
                                        </tr>
                                        <tr>
                                            <th class="font-medium px-3 py-1 align-middle">Melting Point</th>
                                            <td class="px-4 py-1 middle">${meltingPoint}</td>
                                        </tr>
                                        <tr>
                                            <th class="font-medium px-3 py-1 align-middle">Boiling Point</th>
                                            <td class="px-4 py-1 middle">${boilingPoint}</td>
                                        </tr>
                                        <tr>
                                            <th class="font-medium px-3 py-1 align-middle">Density</th>
                                            <td class="px-4 py-1 middle">${density}</td>
                                        </tr>
                                        <tr class="border-0">
                                            <th class="font-medium px-3 py-1 align-middle">Year Discovered</th>
                                            <td class="px-4 py-1 middle">${yearDiscovered}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                `);
                    }
                })
                modalBody.appendChild(div)
            }
        })

    })
})


// toggle nav 



