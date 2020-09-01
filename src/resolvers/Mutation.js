import {generateToken, hashPassword, validatePassword, getUserId} from '../utils/'

const Mutations = {
    signUpAdministrador: async (parent,{data},{prisma},info)=>{/* authentication added */
        /* const isEmailTaken = db.users.some(user => user.email === data.email)
        if(isEmailTaken){
            throw new Error('Email Taken')
        }
        const user = {
            id: uuidv4(),
            ...data
        }
        db.users.push(user)
        return user */
        const password = await hashPassword(data.password)
        const administrador = await prisma.administrador.create({
            data: {
                ...data,
                password
            }
        })
        return {
            administrador,
            token: generateToken(administrador.id)
        }
    },
    loginAdministrador: async(parent,{data},{prisma},info)=>{
        const administrador = await prisma.administrador.findOne({
            where: {
                email: data.email,

            }
        })
        const isValid = await validatePassword(data.password,administrador.password)
        if(!isValid) {
            throw new Error('Password incorrect')
        }
        return {
            administrador,
            token: generateToken(administrador.id)
        }
    },
    updateAdministrador: async (parent,{id, data},{request,prisma},info)=>{
        /* const userExist = db.users.find(user=>user.id === id)
        if(!userExist){
            throw new Error('User not found')
        }
        const isEmailTaken = db.users.some(user => user.email === data.email)
        if(isEmailTaken){
            throw new Error('Email Taken')
        }
            
        db.users = db.users.map(user=>{
            if(user.id === id){
                user={...user, ...data}
                return user
            }
            return user
        })
        return {...userExist, ...data} */
        const userId = getUserId(request)
        const { password } = data 
        if(password){
            data.password = await hashPassword(data.password)
        }
        return prisma.administrador.update({
            where: {id: Number(id)},
            data
        })
    },
    signUpAlumno: async (parent,{data},{prisma},info)=>{/* authentication added */
        const password = await hashPassword(data.password)
        const alumno = await prisma.alumno.create({
            data: {
                ...data,
                password
            }
        })
        return {
            alumno,
            token: generateToken(alumno.id)
        }
    },
    loginAlumno: async(parent,{data},{prisma},info)=>{
        const alumno = await prisma.alumno.findOne({
            where: {
                email: data.email,

            }
        })
        const isValid = await validatePassword(data.password,alumno.password)
        if(!isValid) {
            throw new Error('Password incorrect')
        }
        return {
            alumno,
            token: generateToken(alumno.id)
        }
    },
    updateAlumno: async (parent,{id, data},{request,prisma},info)=>{
        const userId = getUserId(request)
        const { password } = data 
        if(password){
            data.password = await hashPassword(data.password)
        }
        return prisma.alumno.update({
            where: {id: Number(id)},
            data
        })
    },
    signUpApoderado: async (parent,{data},{prisma},info)=>{/* authentication added */
        const password = await hashPassword(data.password)
        const apoderado = await prisma.apoderado.create({
            data: {
                ...data,
                password
            }
        })
        return {
            apoderado,
            token: generateToken(apoderado.id)
        }
    },
    loginApoderado: async(parent,{data},{prisma},info)=>{
        const apoderado = await prisma.apoderado.findOne({
            where: {
                email: data.email,

            }
        })
        const isValid = await validatePassword(data.password,apoderado.password)
        if(!isValid) {
            throw new Error('Password incorrect')
        }
        return {
            apoderado,
            token: generateToken(apoderado.id)
        }
    },
    updateApoderado: async (parent,{id, data},{request,prisma},info)=>{
        const userId = getUserId(request)
        const { password } = data 
        if(password){
            data.password = await hashPassword(data.password)
        }
        return prisma.apoderado.update({
            where: {id: Number(id)},
            data
        })
    },
    signUpProfesor: async (parent,{data},{prisma},info)=>{/* authentication added */
        const password = await hashPassword(data.password)
        const profesor = await prisma.profesor.create({
            data: {
                ...data,
                password
            }
        })
        return {
            profesor,
            token: generateToken(profesor.id)
        }
    },
    loginProfesor: async(parent,{data},{prisma},info)=>{
        const profesor = await prisma.profesor.findOne({
            where: {
                email: data.email,

            }
        })
        const isValid = await validatePassword(data.password,profesor.password)
        if(!isValid) {
            throw new Error('Password incorrect')
        }
        return {
            profesor,
            token: generateToken(profesor.id)
        }
    },
    updateProfesor: async (parent,{id, data},{request,prisma},info)=>{
        const userId = getUserId(request)
        const { password } = data 
        if(password){
            data.password = await hashPassword(data.password)
        }
        return prisma.profesor.update({
            where: {id: Number(id)},
            data
        })
    },
    signUpTutor: async (parent,{data},{prisma},info)=>{/* authentication added */
        const password = await hashPassword(data.password)
        const tutor = await prisma.tutor.create({
            data: {
                ...data,
                password
            }
        })
        return {
            tutor,
            token: generateToken(tutor.id)
        }
    },
    loginTutor: async(parent,{data},{prisma},info)=>{
        const tutor = await prisma.tutor.findOne({
            where: {
                email: data.email,

            }
        })
        const isValid = await validatePassword(data.password,tutor.password)
        if(!isValid) {
            throw new Error('Password incorrect')
        }
        return {
            tutor,
            token: generateToken(tutor.id)
        }
    },
    updateTutor: async (parent,{id, data},{request,prisma},info)=>{
        const userId = getUserId(request)
        const { password } = data 
        if(password){
            data.password = await hashPassword(data.password)
        }
        return prisma.tutor.update({
            where: {id: Number(id)},
            data
        })
    },
    createColegio: async (parent,{data},{request,prisma},info)=>{
        const userId = getUserId(request)
        const newColegio = await prisma.colegio.create({
            data: data
        })
        return newColegio
    },
    updateColegio: async (parent,{id, data},{request,prisma},info)=>{
        const userId = getUserId(request)
        const colegioUpdated = await prisma.colegio.update({
            where: {
                id: Number(id)
            },
            data: data
        })
        return colegioUpdated
    },
    createCurso: async (parent,{data},{request,prisma},info)=>{
        const userId = getUserId(request)
        const {teached_by, ...rest} = data
        const newCurso = await prisma.curso.create({
            data: {...rest, profesor:{
                connect:{
                    id: Number(teached_by)
                }
            }}
        })
        return newCurso
    },
    updateCurso: async (parent,{id, data},{request,prisma},info)=>{
        const userId = getUserId(request)
        const {teached_by, ...rest} = data
        if(teached_by){
            rest.profesor={
                connect:{
                    id: Number(teached_by)
                }
            }
        }
        const cursoUpdated = await prisma.curso.update({
            where: {
                id: Number(id)
            },
            data: {
                ...rest
            }
        })
        return cursoUpdated
    },
    createMatricula: async (parent,{data},{request,prisma},info)=>{
        const userId = getUserId(request)
        const {signed,signed_in,...rest} = data
        const newMatricula = await prisma.matricula.create({
            data: {
                ...rest,
                alumno: {
                    connect: {
                        id: Number(signed)
                    } ,
                },
                curso: {
                    connect: {
                        id: Number(signed_in)
                    } ,
                },
            }
        })
        return newMatricula
    },
    updateMatricula: async (parent,{id,data},{request,prisma},info)=>{
        const userId = getUserId(request)
        const {signed,signed_in,...rest} = data
        if(signed){
            rest.alumno={
                connect: {
                    id: Number(signed)
                }
            }
        }
        if(signed_in){
            rest.curso={
                connect: {
                    id: Number(signed_in)
                }
            }
        }
        const matriculaUpdated = prisma.matricula.update({
            where: {
                id: Number(id)
            },
            data: {
                ...rest
            }
        })
        return matriculaUpdated
    },    
    createReforzamiento: async (parent,{data},{request,prisma},info)=>{
        const userId = getUserId(request)
        const {teached_in,...rest} = data
        const newReforzamiento = await prisma.reforzamiento.create({
            data: {
                ...rest,
                curso: {
                    connect: {
                        id: Number(teached_in)
                    } ,
                }
            }
        })
        return newReforzamiento
    },
    updateReforzamiento: async (parent,{id,data},{request,prisma},info)=>{
        const userId = getUserId(request)
        const {teached_in,...rest} = data
        if(teached_in){
            rest.curso={
                connect: {
                    id: Number(teached_in)
                }
            }
        }
        const reforzamientoUpdated = prisma.reforzamiento.update({
            where: {
                id: Number(id)
            },
            data: {
                ...rest
            }
        })
        return reforzamientoUpdated
    },
    deleteReforzamiento: async (parent,{id},{request,prisma},info)=>{
        const userId = getUserId(request)
        const reforzamientoDeleted = prisma.reforzamiento.delete({
            where: {
                id: Number(id)
            }
        })

        return reforzamientoDeleted
    },
}

export default Mutations