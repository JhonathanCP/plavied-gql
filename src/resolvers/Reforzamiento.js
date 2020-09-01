import { getUserId } from '../utils' 
const Reforzamiento = {
    teached_in: (parent, {id}, {request,prisma}, info) => {
        /* return db.users.find(user => user.id===parent.register_by) */
        const userId = getUserId(request)
        return prisma.reforzamiento.findOne({
            where:{
                id: parent.id
            }
        }).curso()
    },
}

export default Reforzamiento