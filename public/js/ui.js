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