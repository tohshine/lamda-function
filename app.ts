import { log } from 'console'
import {app} from './src'

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>log(`server running on port!!!! ${PORT}`))