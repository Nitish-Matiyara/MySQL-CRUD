const express = require("express");
const mysqlDB = require("./connections/mysql")
const employeeRouter = require("./routes/employee");
const app = express();
const port = process.env.PORT || 8005;
const bodyparser = require("body-parser");

app.use(bodyparser.json())
app.use(express.json())
app.use('/employee' , employeeRouter)

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
