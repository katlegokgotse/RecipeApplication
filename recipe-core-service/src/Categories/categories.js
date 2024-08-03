const axios = require('axios')
const categories = 'https://www.themealdb.com/api/json/v1/1/categories.php';

options = {
    method: 'GET',
    url: categories,
}

module.exports = {
    getCategories: () => axios(options)
}