const Router = require('../framework/Router');
const conrtoller = require('./user-controllers')
const router = new Router()


const users = [
    {id: 1, name: 'Asan'},
    {id: 2, name: 'Asan2'}
]
router.get('/users', conrtoller.getUsers)

router.post('/users', conrtoller.createUser)


module.exports = router