const axios = require('axios')
const categories = process.env.BASE_URL || 'https://www.themealdb.com/api/json/v1/1/categories.php';

options = {
    method: 'GET',
    url: categories,
}

module.exports = {
    getCategories: () => axios(options)
}