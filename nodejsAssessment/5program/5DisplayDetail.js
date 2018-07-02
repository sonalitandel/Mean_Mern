var MongoClient=require('mongodb').MongoClient;
const http=require('http');
const qs=require('querystring');
var fs= require("fs")
//var Netpay=require('./Netpay');
var employeeName;
var employeeId;
var employeeSal;
var EmployeeNet;
var net;
http.createServer(function(req,res){
    if(req.method=="GET")
    {
          res.writeHead(200,{"Content-Type":"text/html"})
          fs.createReadStream("./5DisplayDetailHtml.html").pipe(res);
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
            console.log(employeeId)
            /*employeeName=(obj.empName);
            employeeSal=parseInt(obj.empSal);
            net=Netpay.calculateNetpay(employeeSal);
            console.log("ename"+employeeName)
            console.log("id"+employeeId)
            console.log("sal"+employeeSal)*/
           
        
            MongoClient.connect("mongodb://localhost:27017/Assignment", function(err, db) {
              if (err) {
                console.log("error has occured or the employee is not available") 
               }
            //var dbo = db.db("Assignment");
            

            var ins = {EmployeeId:employeeId};
           // console.log("employee id = " + employeeId);

            db.collection("Employee").findOne(ins,function(err,result) {
              if (err) {
             console.log("error has occured or the employee is not available") 
            }

              
              else{
                  console.log("find result =>" + result);
                console.log(result.EmployeeId);
                console.log(result.EmployeeName);
                console.log(result.EmployeeSalary);
                console.log(result.EmployeeNet);
                console
                res.end(`<!DOCTYPE html>
                <html>
                <head>
                <title>displaying</title>
                </head>
                <body>
                   <h1>Employee Details Entry</h1><hr>
                     <form action="/" method="POST">
                     <label>employee Id</label>
                     <input type="text" id="empId" name="empId" value=${result.EmployeeId} required/>
                     <label>Employee name</label>
                     <input type="text" id="empName" name="empName" value=${result.EmployeeName}>
                     <label>Basic Pay</label>
                     <input type="text" id="empSal" name="empSal" value=${result.EmployeeSalary}>
                     <label>NetPay</label>
                     <input type="text" id="Netpay" name="Netpay" value=${result.EmployeeNet} required/>
                <button>insert</button>
                </form>
            </body>
        </html>`);
              }
              
              db.close();
            });
          });

        })

}}).listen(3000);
console.log("form server listening on port 3000");

