const express=require('express')
const cors=require('cors')
const app = express()
const port=4000

const chefData=require('./data/chef.json')
const recipeData=require('./data/recipe.json')

app.use(cors())

app.get('/',(req,res)=>{res.send('hello express')})

app.get('/chef',(req,res)=>{res.send(chefData)})
app.get('/recipe',(req,res)=>{res.send(recipeData)})
// specific data
app.get('/recipe/:id',(req,res)=>{
    const id=req.params.id;
    const filterData=recipeData.find(item=>item.id==id)
    res.send(filterData)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })