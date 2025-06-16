    let listaLibri = []
    let listaCarrello = []

    function fetchLibri(){
    fetch ("https://striveschool-api.herokuapp.com/books")
        .then(response =>response.json())
        .then(data => { 
            //console.log(data)
            listaLibri= data
            creaCard(listaLibri)
        })
    .catch(error => {
            console.log("Errore durante la fetch:", error);
        }
    )}
 
    fetchLibri()

    function creaCard(data){
        const cardContainer = document.getElementById("card-container")
        cardContainer.innerHTML = " "
        data.forEach(book => {
            const col = document.createElement("div")
            col.className = "col-md-2 mt-4"

            const card = document.createElement("div")
            card.className = "card h-100"
           
            const img = document.createElement("img")
            img.src = book.img
            img.className = "card-img-top"

            const cardBody = document.createElement("div")
            cardBody.className = "card-body row"  

            const title = document.createElement("h5")
            title.className = "card-title mb-2 text-center"
            title.textContent = book.title
            
            const prezzo = document.createElement('p')
            prezzo.className = "card-text text-center"
            prezzo.textContent = book.price

            const buttonAgg = document.createElement("button")
            buttonAgg.className = "btn btn-dark mt-auto"
            buttonAgg.style.height = "50px"
            buttonAgg.textContent = "Aggiungi al carrello"
            buttonAgg.addEventListener('click', function(){
                listaCarrello.push(book)
                card.classList.add('carrelloAgg')
                creaCarrello(listaCarrello)
            })

            col.appendChild(card)
            card.appendChild(img)
            card.appendChild(cardBody)
            cardBody.appendChild(title)
            cardBody.appendChild(prezzo)
            cardBody.appendChild(buttonAgg)        
            cardContainer.appendChild(col)
            
    })}

    const ricerca = document.getElementById('search').addEventListener('input',function(){
        const testoInserito = this.value.toLowerCase() 
        if (testoInserito.length >=3){
            const risultatoRicerca = listaLibri.filter(libro=>
                libro.title.toLowerCase().includes(testoInserito)
            )
            creaCard(risultatoRicerca)
        }
    })

    function creaCarrello(data){
        const carrello = document.querySelector('.modal-body')
        carrello.innerHTML = " "
        data.forEach(book => {
            const contenitoreCarrello = document.createElement('div')
            contenitoreCarrello.className = 'd-flex justify-content-between'

            const titoloCarrello = document.createElement('p')
            titoloCarrello.className = 'titolo'
            titoloCarrello.textContent = book.title

            const prezzoCarrello = document.createElement('p')
            prezzoCarrello.className = 'prezzo'
            prezzoCarrello.textContent = book.price

            carrello.appendChild(contenitoreCarrello)
            contenitoreCarrello.appendChild(titoloCarrello)
            contenitoreCarrello.appendChild(prezzoCarrello)


        })
    }



