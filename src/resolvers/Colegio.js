import { getUserId } from '../utils' 
const Colegio = {
    alumno: (parent, {id}, {request,prisma}, info) => {
        /* return db.users.find(user => user.id===parent.register_by) */
        const userId = getUserId(request)
        return prisma.colegio.findOne({
            where:{
                id: parent.id
            }
        }).alumno()
    },
}

export default Colegio