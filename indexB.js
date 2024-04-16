

document.addEventListener("DOMContentLoaded", () =>{
    initializeLS()
})

function initializeLS(){
    const lsValue = localStorage.getItem(lsKey)

    if(!lsValue){
        const newValue = {
            count:1,
            lastVisit: "16/04/2024 - 19:39"
        }

        const stringValue = JSON.stringify(newValue)

        localStorage.setItem(lsKey, stringValue)
    }

    const stringV = JSON.parse(lsValue)

    lsValue.count++
    lsValue.lastVisit = "16/04/2024 - 19:44"

    localStorage.setItem(lsKey, JSON.stringify(stringV))
    console.log("value", lsValue)

    const footer = document.querySelector('footer')

    const p = document.createElement('p')

    p.textContent = 'Essa pagina foi viditada ${stringV.count} vezes. A ultima foi '
    footer.appendChild(p)
}