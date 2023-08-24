import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import morgan from "morgan"
import YAML from "yamljs"
import swaggerUi from "swagger-ui-express"

import { connectToDatabase } from "./admin/admin"
import { ServiceApImpl } from "./impl/service"
import ServiceApi from "../dist/index"

dotenv.config()

const app = express()
const service = new ServiceApImpl()
const port = process.env.PORT || 8080

const swaggerDocument = YAML.load("openapi.yml")

var options = {
  swaggerOptions: {
    url: "/api-docs/swagger.json",
  },
}

app.use(express.json())
app.use(cors({ origin: true }))
app.use(morgan("dev"))
app.use(
  "/api-docs",
  swaggerUi.serveFiles(swaggerDocument, options),
  swaggerUi.setup(swaggerDocument, options)
)

app.get("/", (_, res) => res.redirect("/api-docs"))
app.get("/api-docs/swagger.json", (_, res) => res.json(swaggerDocument))

connectToDatabase()
  .then(() => {
    console.log("Connected to MongoDB")
    ServiceApi(app, service)
    app.listen(port, () => {
      console.log(`Server is running on port: http://localhost:${port}`)
    })
  })
  .catch((err) => {
    console.log("Could not connect to MongoDB")
    console.log("Error: ", err)
    process.exit()
  })
