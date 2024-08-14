const express = require('express');
const axiosModel = require('./src/Categories/categories');
const axiosIngredients = require('./src/Ingredients/ingredients')
const { default: axios } = require('axios');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3028;
app.listen(PORT, ()=> {
    console.log("Server listening on PORT", PORT)
})

//Defining an endpoint
app.get('/', (request, response) =>{
    const status = {
        "Status":"Running"
    }
    response.json(status);
});

app.get('/categories', async(request, response) => {
    try {
        const { data } = await axiosModel.getCategories();
        response.json(data)
    }catch (error){
        response.status(500).json({error: error.message})
    }
});


app.get('/ingredients', async(request, response) => {
    try {
        const { data } = await axiosIngredients.getIngredients();
        response.json(data);
    } catch (error){
        response.status(500).json({error: error.message})
    }
})