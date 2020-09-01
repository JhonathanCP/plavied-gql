import { getUserId } from '../utils'
const Query = {
    /* hello (parent, args, ctx, info) {
        return 'Hello world'
    }, */
    hello: (parent, args, ctx, info) => {
        const {name} = args

        return `Hello ${name||'world'}`
    },
    quantity: () => 1,
    administrador: (parent, {id}, {request,prisma}, info) => {/* prisma agregado */
        const userId = getUserId(request)
        if(!id){
            return prisma.administrador.findMany()
        }

        return prisma.administrador.findOne({
            where: {
                id,
            }
        })
    },
    alumno: (parent, {id}, {request,prisma}, info) => {/* prisma agregado */
        const userId = getUserId(request)
        if(!id){
            return prisma.alumno.findMany()
        }

        return prisma.alumno.findOne({
            where: {
                id,
            }
        })
    },
    apoderado: (parent, {id}, {request,prisma}, info) => {/* prisma agregado */
        const userId = getUserId(request)
        if(!id){
            return prisma.apoderado.findMany()
        }

        return prisma.apoderado.findOne({
            where: {
                id,
            }
        })
    },
    profesor: (parent, {id}, {request,prisma}, info) => {/* prisma agregado */
        const userId = getUserId(request)
        if(!id){
            return prisma.profesor.findMany()
        }

        return prisma.profesor.findOne({
            where: {
                id,
            }
        })
    },
    tutor: (parent, {id}, {request,prisma}, info) => {/* prisma agregado */
        const userId = getUserId(request)
        if(!id){
            return prisma.tutor.findMany()
        }

        return prisma.tutor.findOne({
            where: {
                id,
            }
        })
    },
    colegio: (parent, {id}, {request,prisma}, info) => {/* prisma agregado */
        const userId = getUserId(request)
        if(!id){
            return prisma.colegio.findMany()
        }

        return prisma.colegio.findOne({
            where:{
                id,
            }
        })
    },
    curso: (parent, {id}, {request,prisma}, info) => {/* prisma agregado */
        const userId = getUserId(request)
        if(!id){
            return prisma.curso.findMany()
        }

        return prisma.curso.findOne({
            where:{
                id,
            }
        })
    },
    matricula: (parent, {id}, {request,prisma}, info) => {/* prisma agregado */
        const userId = getUserId(request)
        if(!id){
            return prisma.matricula.findMany()
        }

        return prisma.matricula.findOne({
            where:{
                id,
            }
        })
    },
    reforzamiento: (parent, {id}, {request,prisma}, info) => {/* prisma agregado */
        const userId = getUserId(request)
        if(!id){
            return prisma.reforzamiento.findMany()
        }

        return prisma.reforzamiento.findOne({
            where:{
                id,
            }
        })
    },
    /* author: (parent, {id, take, skip, orderBy}, {request,prisma}, info) => {prisma agregado
        const userId = getUserId(request)
        if(!id){
            return prisma.authors.findMany({pagination and sorting
                take,
                skip,
                orderBy,
            })
        }

        return prisma.authors.findOne({
            where:{
                id,
            }
        })
    },
    book: (parent, {id, take, skip, orderBy}, {request,prisma}, info) => {prisma agregado
        const userId = getUserId(request)
        if(!id){
            return prisma.books.findMany({
                take,
                skip,
                orderBy,
            })
        }

        return prisma.books.findOne({
            where: {
                id
            }
        })
    }, */
}

export default Query