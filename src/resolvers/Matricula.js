import { getUserId } from '../utils' 
const Matricula = {
    signed: (parent, {id}, {request,prisma}, info) => {
        /* return db.users.find(user => user.id===parent.register_by) */
        const userId = getUserId(request)
        return prisma.matricula.findOne({
            where:{
                id: parent.id
            }
        }).alumno()
    },
    signed_in: (parent, {id}, {request,prisma}, info) => {
        /* return db.books.filter(book => book.writted_by===parent.id) */
        const userId = getUserId(request)
        return prisma.matricula.findOne({
            where:{
                id: parent.id
            }
        }).curso()
    },
}

export default Matricula