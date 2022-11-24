//En este archivo vamos a utilizar todo lo relacionado al REQ y Res

const taskControllers = require('./task.controllers.js')

// taskControllers.findAllUsers()
// taskControllers.findUserById()
// taskControllers.createUser()
// con esta funcion hacemos el llamado alos users
const getAllUsers =(req, res) => {
    const data = taskControllers.findAllUsers()
    res.status(200).json(data)
}
// con esta funcion llamamos a un usuario por su id
const getuserById = (req, res) => {
    const id = req.params.id
    const data = taskControllers.findUserById(id)
    if (data){
        res.status(200).json(data)
    }else{
        res.status(404).json({message: 'Invalid ID'})
    }
}
const postUser = (req, res) => {
    const {email,firstName,lastName,password,birthDay} = req.body
    if(email && password){
        const data =  taskControllers.createUser({email,firstName,lastName,password,birthDay})
        res.status(201).json(data)
    }else{
        res.status(400).json({message: 'Invalid Data', fields: {email:'String', password: 'String'}})
    }
}
module.exports ={
    getAllUsers,
    getuserById,
    postUser
}