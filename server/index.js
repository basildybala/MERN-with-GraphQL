let express =require('express')
require('dotenv').config()

let port=process.env.PORT

let app =express()


app.listen(port,console.log(`Server is running on ${port}`))