import express,{Request,Response} from 'express'


const app = express()

app.use(express.json())


app.get('/users',(req:Request,res:Response)=>{

    res.json({message:'List of users'})
})

export {app}