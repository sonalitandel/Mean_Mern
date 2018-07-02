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

            db.collection("Employee").deleteOne(ins, function(err, result){
              if (err) {
             console.log("error has occured or the employee is not available") 
            }
            console.log("1 document inserted");
            

              
              
              
              db.close();
            });
          });

        })

}}).listen(3000);
console.log("form server listening on port 3000");

