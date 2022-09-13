const express = require("express");
const router = express.Router();
const mysql = require("../connections/mysql");

//--CREATE Employee
router.post("/", (req, res) => {
  try {
    const { firstname, lastname, age, contact } = req.body;

    let qry = `INSERT INTO EMPLOYEE (firstname, lastname, age, contact) VALUES('${firstname}','${lastname}',${age},${contact} )`;
    mysql.query(qry, (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);

      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

//--READ all Employee's
router.get("/", (req, res) => {
  try {
    let qry = "SELECT * from Employee"
    mysql.query(qry, (err, rows, fields) => {
      if (!err) {
        res.send(rows)
      } else {
        console.log(err);
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

//--READ a particular Employee by Id
router.get("/:s_no", (req, res) => {
  try {
    let qry = `SELECT * FROM EMPLOYEE WHERE S_No=${req.params.s_no}`
    mysql.query(qry, (err, rows, fields) => {
      if (!err) {
        res.send(rows)
      } else {
        console.log(err);
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

//--Update a particular Employee by Id
router.patch("/:s_no", (req, res) => {
  try {
    const { firstname, lastname, age, contact } = req.body;
    console.log(req.body)
    let qry = `UPDATE EMPLOYEE SET Firstname='${firstname}', Lastname='${lastname}', Age=${age}, Contact=${contact} WHERE S_No=${req.params.s_no} `
    mysql.query(qry, (err, rows, fields) => {
      if (!err) {
        res.send("Updated successfully")
      } else {
        console.log(err);
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

//--Delete employee by Id
router.delete("/:s_no", async (req, res) => {
  try {
    let qry = `DELETE FROM EMPLOYEE WHERE S_No=${req.params.s_no}`
    mysql.query(qry, (err, rows, fields) => {
      if (!err) {
        res.send("Deleted successfully")
      } else {
        console.log(err);
      }
    })
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
