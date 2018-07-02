var MongoClient=require('mongodb').MongoClient;
const http=require('http');
const qs=require('querystring');
var fs= require("fs")
var Netpay=require('./2_NetpayHtml');
var employeeName;
var employeeId;
var employeeSal;
var EmployeeNet;
var net;
http.createServer(function(req,res){
    if(req.method=="GET")
    {
          res.writeHead(200,{"Content-Type":"text/html"})
          fs.createReadStream("./DisplayDetail.html").pipe(res);
    }
    
    else if(req.method=="POST")
    {
        var body="";
        req.on("data",function(chunk)
        {
           body+=chunk;
     
        });
        req.on("end",function()
        {
            var obj=qs.parse(body);
            console.log(obj);
            employeeId=parseInt(obj.empId);
            employeeName=(obj.empName);
            employeeSal=parseInt(obj.empSal);
            net=2_Netpay.calculateNetpay(employeeSal);
            console.log("ename"+employeeName)
            console.log("id"+employeeId)
            console.log("sal"+employeeSal)
            res.end(`<!DOCTYPE html>
            <html>
            <head>
            </head>
            <body>
            <h1>Employee Details</h1><hr>
            <form action="/" method="POST" class="form-control">
            <label >id</label>
            <input type="text" id="id" name="id" value=${employeeId} required>
            <label>Name</label>
            <input type="text" id="name" name="name" value=${employeeName} required/>
            <label>salary</label>
            <input type="text" id="salary" name="salary" value=${employeeSal} required/>
            <label>NetPay</label>
            <input type="text" id="Netpay" name="Netpay" value=${net} required/>
            </form></body></html>`);
        
        MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
            if (err) throw err;
            var dbo = db.db("Assignment");

            var ins = { EmployeeId:employeeId,EmployeeName:employeeName,EmployeeSalary:employeeSal,EmployeeNet:net};

            dbo.collection("Employee").insertOne(ins, function(err) {
              if (err) throw err
              console.log("1 document inserted");
              db.close();
            });
          });

        })

}}).listen(3000);
console.log("form server listening on port 1000");

