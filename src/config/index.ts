import * as dotenv from 'dotenv'
dotenv.config()

const config = {
    PORT: process.env.PORT || 8080
}

export { config }