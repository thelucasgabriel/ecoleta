function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {

        for( const state of states ){
            ufSelect.innerHTML +=`<option value="${state.id}">${state.nome}</option>`
        }

    })
}

populateUFs()


function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json() )
    .then( cities => {
        

        for( const city of cities ){
            citySelect.innerHTML +=`<option value="${city.nome}">${city.nome}</option>` /* Adding new cities. */
        }

        citySelect.disabled = false

    })

}


document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities) //Waiting for events to occur, such as page loading, clicks, among others.


    // Collection items

    // get all li

    const itemsToCollect = document.querySelectorAll(".items-grid li")

    for (const item of itemsToCollect){
        item.addEventListener("click", handleSelectedItem)
    
    }

    //Formatting the item fields in JavaScript


     //Update the hidden field with selected items

    const collectedItems = document.querySelector("input[name=items]")

    let selectedItems = []

    function handleSelectedItem(event){
        const itemLi = event.target
        //add or remove a class with javascript
        itemLi.classList.toggle("selected")
        const itemId = event.target.dataset.id

       // console.log('ITEM ID:',itemId)

        
        //Verify if selected items exist
        //Get the selected items


        const alreadySelected = selectedItems.findIndex( item => {
            const itemFound =  item == itemId // It's ll` true or false.
            return itemFound
        })

       

        //se já estiver selecionado, 
        // If alredy selected

        if(alreadySelected >= 0){
           //Remove from selection
           const filteredItems = selectedItems.filter( item => {
               const itemIsDifferent = item != itemId //false
               return itemIsDifferent
           })

           selectedItems = filteredItems
        } else{
             //If not yet selected
             //Add selection

             selectedItems.push(itemId)

        }


        collectedItems.value = selectedItems

    
    }