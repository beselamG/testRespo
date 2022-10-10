import dotenv from 'dotenv'

dotenv.config()

const MONGO_USER = process.env.MONGO_USERNAME || ""
const PASSWORD = process.env.PASSWORD || ""
const PORT =  process.env.PORT || 1300
const  MONGO_URL  =  `mongodb+srv://${MONGO_USER}:${PASSWORD}@cluster0.wtyoqst.mongodb.net/?retryWrites=true&w=majority`



export  { MONGO_USER , PASSWORD , PORT, MONGO_URL}