import { app } from "./app"
import { knex } from "./database"

app.listen({
  port: 3333
})
.then(() => {
  console.log('Server is running!')
})