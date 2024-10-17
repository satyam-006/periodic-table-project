const ptElement = document.querySelectorAll(".pt-element")

const filterMetals = () => {
    ptElement.forEach((element) => {
        if (!(element.classList.contains("metal") || element.classList.contains("alkali-metal") || element.classList.contains("alkaline-earth-metal") || element.classList.contains("transition-metal") || element.classList.contains("post-transition-metal") || element.classList.contains("lanthanoid") || element.classList.contains("actinoid"))) {
            element.classList.add("selected")
        }
    })
}

const filterMetalloids = () => {
    ptElement.forEach((element) => {
        if (!(element.classList.contains("metalloid"))) {
            element.classList.add("selected")
        }
    })
}

const filterNonMetals = () => {
    ptElement.forEach((element) => {
        if (!(element.classList.contains("nonmetal") || element.classList.contains("halogen") || element.classList.contains("noble-gas"))) {
            element.classList.add("selected")
        }
    })
}

const filterStates = () => {
    ptElement.forEach((element) => {
        if (!(element.classList.contains("solid") || element.classList.contains("liquid") || element.classList.contains("gas") || element.classList.contains("unknown"))) {
            element.classList.add("selected")
        }
    })
}

const filterGroup = () => {
    let group=2
    ptElement.forEach((element) => {
        if (!element.classList.contains(`g${group}`)) {
            element.classList.add("selected")
        }
    })
}

const filterPeriod = () => {
    let period=1
    ptElement.forEach((element) => {
        if (!element.classList.contains(`p${period}`)) {
            element.classList.add("selected")
        }
    })
}

document.querySelector("#cg-metals").addEventListener("click",()=>{
    filterMetals()
})

document.querySelector("#cg-metalloids").addEventListener("click",()=>{
    filterMetalloids()
})




// filterMetals()
// filterMetalloids()
// filterNonMetals()
// filterStates()
// filterGroup()
// filterPeriod()



