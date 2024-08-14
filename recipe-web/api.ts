export const fetchCategories= () =>{
    fetch("https://localhost:3028/categories")
    .then(response => {
        if (response.ok){
            return response.json();
        }else{
            throw new Error("Error requesting API")
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(e => {
        console.error(e)
    })
}

export function fetchRecipe(){
     fetch("https://localhost:3028/ingredients")
        .then(response => {
            if(response.ok){
                return response.json();
            }else{
                throw new Error("Request error")
            }
        })
        .then(data => {
            console.log(data);
        })
        .catch(e => {
            console.error(e)
        })
}