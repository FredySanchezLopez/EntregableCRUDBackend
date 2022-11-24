const userData = []
//? TODO
//* {
//*     id: 5,
//     email: 'email user',
//*     fisrt name: 'name user',
//     last name: lasts name users
//*     password:"password de user",
//      bithday: fecha de nacimiento del users
//* }
let id = 1;
// esta funcion retorna todos los users
const findAllUsers = () =>{
    return userData
}
// esta funcion llama a un users por su id
const findUserById = (id)=> {
    const user = userData.find((itemUser)=>itemUser.id == id)
    return user
}
//esta funcion crea un nuevo users
const createUser = (obj)=>{
    const newUser ={
        id:id++,
        email:obj.email,
        firstName:obj.firstName,
        lastName:obj.lastName,
        password:obj.password,
        birthDay:obj.birthDay
    }
    userData.push(newUser)
    return newUser
}
module.exports ={
    findAllUsers,
    findUserById,
    createUser
}