
require('dotenv').config() //  import ddot env file

require('./db-connection/connection')



const express=require('express') // create server (express package)

const router=require('./Routes/router')

const cors=require('cors')   // import cors

const emsserver=express() // create server using express

emsserver.use(cors())  // use cors un server app

emsserver.use(express.json()) // parse json data using server app

emsserver.use(router)  // use router in server

const PORT=4000 || process.env.PORT   // customize port for server

emsserver.use('/uploads',express.static('./uploads'))
// to run server app use listen method

emsserver.listen(PORT,()=>{
    console.log(`EMS SERVER STARTED AT PORT : ${PORT}`);
})

//  to resolve request

// emsserver.post(`/`,(req,res,)=>{
//     res.send(`<h1>EMS SERVER STARTED AT PORT : ${PORT}</h1>`)
// })

// install nodmon for recompilation ( npm i -g nodemon )

// import mongodb  connection 

require('./db-connection/connection')