const request = require('request')


const foodCaloriesAPI = (foodName, callback) => {
    const url = 'https://api.edamam.com/api/nutrition-data?app_id=b1a77823&app_key=3b360556e605062c31bf367008ec33a5&ingr=1%20' + encodeURIComponent(foodName)

    request({ url: url, json: true }, (error, response) => {

        if (error) {
            callback('Error', undefined)
        }
        else if (response.body.totalWeight === 0) {
            callback('Food type was not found')
        }

        else {
            callback(undefined, {
                Calories: 'Calories ' + response.body.calories,
                Weight: 'Weight:  ' + response.body.totalWeight + ' grams ',
                DietLabel: 'Diet Label' + response.body.dietLabels + ' grams ',
                Carbs: 'Carbohydrates: ' + response.body.CHOCDF + ' grams ',
                Protein: 'Protein: ' + response.body.totalDaily.PROCNT.quantity.toFixed(2) + ' grams ',
                Fat: 'FAT: ' + response.body.totalDaily.FAT.quantity.toFixed(2) + ' grams '
            }
            )
        }
    })
}

module.exports = foodCaloriesAPI