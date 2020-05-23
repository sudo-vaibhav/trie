window.addEventListener("DOMContentLoaded",()=>{
        let form = document.querySelector("#search-form")
        form.addEventListener("submit",(event)=>{               
                event.preventDefault()
                const query = form["search-input"].value.toUpperCase()
                console.log(`searching for ${query}`)
                const results = t.query(query)
                updateSearchItems(results)
        })
})


const updateSearchItems = (data) => {
        const searchResults = document.querySelector("#search-results")
        
        // sanitize previous searchResults first
        searchResults.innerHTML = ""

        data.forEach(item => {
                let html = `<li class="collection-item"><div>${item}<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>`
                searchResults.insertAdjacentHTML("beforeend", html)
        });
}

// <div id="modal1" class="modal">
// <div class="modal-content">
//   <h4>Modal Header</h4>
//   <p>A bunch of text</p>
// </div>
// <div class="modal-footer">
//   <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
// </div>
// </div>