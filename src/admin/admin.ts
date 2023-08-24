import * as mongoDB from "mongodb"
import * as dotenv from "dotenv"

dotenv.config()

export const collections: { users?: mongoDB.Collection } = {}

export const connectToDatabase = async () => {
  const mongoDBUrl = process.env.MONGO_URL || ""
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(mongoDBUrl)
  await client.connect()
  const db: mongoDB.Db = client.db("mircoservices")
  collections.users = db.collection("users")
}
