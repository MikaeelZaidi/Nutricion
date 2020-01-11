const express = require('express')
const path = require('path')
const hbs = require('hbs')
const foodCaloriesAPI=require('./utils/foodCalorieAPI')

const app = express()
const PORT = process.env.PORT || 3000

const publicDir = path.join(__dirname, '../public')
app.use(express.static(publicDir))

const viewsPath=path.join(__dirname,'../templates/views')
app.set('view engine', 'hbs')
app.set('views',viewsPath)

const partials=path.join(__dirname,'../templates/partials')
hbs.registerPartials(partials)

app.get('', (req, res) => {
    res.render('index', {
        title: "Nutricion-Eat Better"
    })
})

app.get('/about', (req, res) => {
    res.render('about',{
        title:"About Nutricion"
    })
})

app.get('/calories', (req, res) => {
    const search = req.query.foodName
  
    if (!search) {
        return res.send({
            error: 'An valid food category must be provided'
        })
    }

    foodCaloriesAPI(search, (error, { Calories, Weight, Protein, Fat,DietLabel,Carbs }={}) => {

        if (error) {
            return res.send({
                error
            })
        }
        res.send({
            Calories: Calories,
            Weight: Weight,
            Protein: Protein,
            Fat: Fat,
            Carbs:Carbs,
            DietLabel:DietLabel,
            search: req.query.foodName
        })
    })


})


app.get('*',(req,res)=>{

    res.render('404',{
        title:"404 Page"
    })
})

app.listen(PORT, () => {
    console.log('App is up and running')
})