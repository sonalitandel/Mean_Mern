var http=require("http");
var fs=require("fs");
var qs=require("querystring");
//var net=require("./netPay");

MongoClient=require('mongodb').MongoClient;
http.createServer(function(req,res){
    console.log(req.method)
    if(req.method=="GET") {
       res.end(` <!DOCTYPE html>
        <html>
        <head>
        <title>Employee Details</title>
        </head>
        <body>
            <h1>Employee Details</h1>
            <form action="/" method="post">
            <table align="center"><tr><td>
                <label>amt</label></td>
                <td><input type="text" id="eid" name="eid"/></td></tr>
                <button>add</button></td></tr>
                </table>
            </form>
        </body>
        </html>
        `);
    } else if(req.method=="POST"){
        var body="";
        req.on("data",function(chunk){
            body+=chunk;
            console.log("data");
        });
        req.on("end",function(){
            var obj=qs.parse(body);
            
            var eid=parseFloat(obj.eid);
            //var ename=obj.ename;
            //var basic=parseFloat(obj.basic);
            //var netpay=net.gNetpay(basic);
            MongoClient.connect('mongodb://127.0.0.1:27017/Assignment',function(err,db){
            if(err){
           
                console.log(err);
               }
            else{
                console.log(eid);
               //var query = { $set:{basicPay:{$inc:500}} };
                db.collection("Employee").updateMany({}, { $inc: {"EmployeeSalary" : eid} },{multi:true},function(err, result) {
           
                //var reslt= db.collection('nodxam').find({"eId":eid},function(err, result){
                    
                   if(err) throw err;
                   //else
                   //res.end("removed succesfully")
                else
                  {/*console.log(result)
                     var resl=result;
                    //res.end(result.eid);
                    //var obj=querystring.parse(body);
                   //var obj=qs.parse(result);
                   // console.log(obj);
                   //res.end(obj)
                   //var objString=JSON.stringify(obj);
                    //res.writeHead(200,{"Content-Type":"text/html"});
                    console.log(result[0].eId);
                    console.log(result[0].eName);
                    var eId1 = result[0].eId;*/
                    res.end(`
                        <!DOCTYPE html>
                        <html>
                        <head>
                        <title>form results</title> </head>
                        <body>
                        <h1>form results</h1>
                       <p> updated succesfully</p>
                      
                        </body>
                        </html>`);
                      
                  }
         
               });
            }
                
            db.close();
           
            });
   

    });
    }
}).listen(3000);
console.log("Form server listening on port 3000");