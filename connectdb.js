const mysql = require('mysql');
var con = mysql.createConnection({
    host: "sql1.hostinger.in.th",
    database: 'u476104090_golf',
    user: "u476104090_golf",
    password: "KRfV53UcMDFb"
});

con.connect(function (err) {
    if (err) throw err;
    console.log('Connected!');
    // var sql = 'CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))';
    // con.query(sql, function (err, result) {
    // if (err) throw err;
    // console.log('Table created');
    // });
});

//db_name = u476104090_golf