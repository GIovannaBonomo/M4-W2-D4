
fetch ("https://striveschool-api.herokuapp.com/books")
    .then((response =>response.json()))
    .then((data => {
        const cardContainer = document.getElementById("card-container")
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
            title.className = "card-title mb-2"
            title.textContent = book.title

            const buttonAgg = document.createElement("button")
            buttonAgg.className = "btn btn-dark mt-auto"
            buttonAgg.style.height = "50px"
            buttonAgg.textContent = "Aggiungi al carrello"

            col.appendChild(card)
            card.appendChild(img)
            card.appendChild(cardBody)
            cardBody.appendChild(title)
            cardBody.appendChild(buttonAgg)
            cardContainer.appendChild(col)
           
        })
    }))


