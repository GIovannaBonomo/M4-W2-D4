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
    container.className = "w-100 my-5 d-flex flex-wrap align-items-start gap-4 p-4 border rounded shadow"

    const img = document.createElement("img")
    img.src = book.img
    img.className = "img-fluid"
    img.style.width = "400px"

    const containerBody = document.createElement("div")
    containerBody.className = "d-flex flex-column justify-content-center"    
    
    const title = document.createElement("h5")
    title.className = "card-title mb-2"
    title.textContent = book.title

    const asin = document.createElement("p")
    asin.className = "card-asin mb-2 "
    asin.textContent = `ASIN: ${book.asin}`

    const categoria = document.createElement("p")
    categoria.className = "card-category mb-2"
    categoria.textContent = `Categoria: ${book.category}`      
    
    const prezzo = document.createElement('p')
    prezzo.className = "card-text text-success"
    prezzo.textContent = `€ ${book.price}`
            
            
    container.appendChild(img)    
    container.appendChild(containerBody)
    containerBody.appendChild(title)
    containerBody.appendChild(asin)    
    containerBody.appendChild(categoria)
    containerBody.appendChild(prezzo)
    
}