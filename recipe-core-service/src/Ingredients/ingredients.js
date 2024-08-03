const axios = require('axios');
const ingredients = 'https://www.themealdb.com/api/json/v1/1/random.php';

options = {
    method: 'GET',
    url: ingredients,
}

module.exports = {
    getIngredients: () => axios(options)
}