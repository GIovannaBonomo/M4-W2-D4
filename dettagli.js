const params = new URLSearchParams (location.search)
const id = params.get("id")

function fetchParams(){
    fetch("https://striveschool-api.herokuapp.com/books/"+ id)
        .then(response =>response.json())
        .then(book =>{
            console.log(book)
            containerDett(book)
        })
}
fetchParams()

function containerDett(book){
    const container = document.getElementById("container-dettagli")
    container.innerHTML= " "
    container.className = "w-100 m-5"

    const img = document.createElement("img")
            img.src = book.img
            img.className = "card-img"
            img.style.height = "500px"
            
    container.appendChild(img)        
}