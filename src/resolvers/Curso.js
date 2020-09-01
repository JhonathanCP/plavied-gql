import { getUserId } from '../utils' 
const Curso = {
    teached_by: (parent, {id}, {request,prisma}, info) => {
        /* return db.users.find(user => user.id===parent.register_by) */
        const userId = getUserId(request)
        return prisma.curso.findOne({
            where:{
                id: parent.id
            }
        }).profesor()
    },
    matricula: (parent, {id}, {request,prisma}, info) => {
        /* return db.books.filter(book => book.writted_by===parent.id) */
        const userId = getUserId(request)
        return prisma.curso.findOne({
            where:{
                id: parent.id
            }
        }).matricula()
    },
}

export default Curso