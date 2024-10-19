const ptElement = document.querySelectorAll(".pt-element")
const ptNavElement = document.querySelectorAll(".pt-nav-element")
const reset = document.querySelector("#pt-reset")


const filterAll = () => {
    ptElement.forEach((element) => {
        element.classList.remove("selected")
    })
}

const filterGroup = () => {
    ptElement.forEach((element) => {

        element.classList.remove("selected")
    })
}

const filterPeriod = () => {
    ptElement.forEach((element) => {
        element.classList.remove("selected")

    })
}

const filterElements = (classNames) => {
    ptElement.forEach((element) => {
        if (!(classNames.some(className => element.classList.contains(className)))) {
            element.classList.add("selected")
        } else {
            element.classList.remove("selected")
        }
    })
}

// Update the specific filter functions to use the dynamic filterElements function
const filterMetals = () => {
    filterElements(["metal", "alkali-metal", "alkaline-earth-metal", "transition-metal", "post-transition-metal", "lanthanoid", "actinoid"]);
}

const filterMetalloids = () => {
    filterElements(["metalloid"]);
}

const filterNonMetals = () => {
    filterElements(["nonmetal", "halogen", "noble-gas"]);
}

const filterStates = () => {
    filterElements(["solid", "liquid", "gas", "unknown"]);
}

const displayElementDesc = (classlist) => {
    const elementDesc = document.querySelectorAll(".pt-ele-desc")

    elementDesc.forEach((element) => {
        if (element.classList.contains(classlist)) {
            { element.style.display === "none" ? element.style.display = "block" : "" }
        }
        else {
            element.style.display = "none"
        }
    })

}


const filterButtons = document.querySelectorAll('.pt-filter-button');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // console.log(button.id);
        displayElementDesc(`pt-${button.id.replace("cg-", "")}-desc`);
        reset.style.display === "inline-block" ? reset.style.display = "none" : "";

        switch (button.id) {
            case "cg-all":
                filterAll();
                break;
            case "cg-metals":
                filterMetals();
                break;
            case "cg-metalloids":
                filterMetalloids();
                break;
            case "cg-nonmetals":
                filterNonMetals();
                break;
            case "cg-states":
                filterStates();
                break;
            case "cg-groups":
                filterGroup();
                break;
            case "cg-periods":
                filterPeriod();
                break;
            case `${button.id}`:
                filterElements([button.id.replace("cg-", "")]);               
                break;
        }

        clearNavActiveButtons();
    });
});


ptNavElement.forEach((element) => {


    element.addEventListener("click", () => {

        { reset.style.display === "none" ? reset.style.display = "inline-block" : '' }

    })
})

const clearNavActiveButtons = () => {
    ptNavElement.forEach((element) => {
        { element.classList.contains("hidden-active") ? element.classList.remove("hidden-active") : "" }
    })
}

reset.addEventListener("click", () => {
    window.location.reload()

})



