const foodCaloriesAPI = require('./foodCalorieAPI')
const process = require('process');
const foodName = process.argv[2]

foodCaloriesAPI(foodName, (error, {Calories,Weight,Protein,Fat}) => {

    if (error) {
        return console.log(error)
    }
    console.log('Data:', Calories)
})

module.exports=foodCaloriesAPI