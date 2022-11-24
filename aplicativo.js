const express = require('express')
const taskRouter = require('./tasks/task.router')
//config inicial
const port = 9000
const app = express()
app.use(express.json())
// const crudUser = []
// //? TODO
// //* {
// //*     id: 5,
// //*     title: 'Practicar express',
// //*     description: 'Ver videos de apoyo y crear otra API',
// //*     is_completed: false
// //* }
// let id = 1
app.get('/',(req,res) =>{
    res.json({
        mensaje:"ok"
    })
})
app.use('/', taskRouter)
app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
})
// app.get('/user',(req,res)=>{
//     res.status(200).json(crudUser)
// })
// app.post('/user', (res,req)=>{
//     const {firtsName , email} = req.body
//     if (firtsName && email) {
//         const newUser ={
//             id:id++,
//             email,
//             firtsName,
//             lastName,
//             password,
//             birthDay
//         }
//         crudUser.push(newUser)
//     }else{
//         res.status(404).json({mensaje:"data invalida"})
//     }
// })