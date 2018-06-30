function calculateNetpay(empSal)
{
    var GrossPay;
    if(empSal>50000)
    {
      GrossPay=empSal+0.4;
    }
    else
    {
    GrossPay=empSal+0.3;
    }
    console.log("inside method")
    console.log("GrossPay"+GrossPay);
   
    return (GrossPay-1000);

}
module.exports.calculateNetpay=calculateNetpay;




