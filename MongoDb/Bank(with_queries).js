db.getCollection('Bank').find({})

db.getCollection('Bank').find({})

show dbs

show collections

db.Bank.find()

db.Bank.ensureIndex({bid:101},{unique:true})
db.Bank.remove({_id:11})
db.Bank.insert({_id:1,
                bid:101,
                accno:111,
                balance:23000,
                cust_details:{cid:201,cname:"Ram",street:"chittakula",city:"chennai",loan:220000,deposit:60000},
                branch_details:{bcity:"chennai",bname:"chennai",assets:2200000}
                })

db.Bank.insert({_id:2,
                bid:102,
                accno:222,
                balance:23000,
                cust_details:{cid:202,cname:"Monica",street:"punewada",city:"pune",loan:123000,deposit:0},
                branch_details:{bcity:"chennai",bname:"pune",assets:9200000}
                })

db.Bank.insert({_id:3,
                 bid:103,
                accno:333,
                balance:897,
                cust_details:{cid:203,cname:"Phoebe",street:"sadashivgad",city:"chennai",loan:220000,deposit:790},
                branch_details:{bcity:"chennai",bname:"chennai",assets:2200000}
                })

db.Bank.insert({_id:4,
                 bid:104,
                accno:444,
                balance:600,
                cust_details:{cid:204,cname:"Chandler",street:"hinjwadi",city:"pune",loan:520000,deposit:6700},
                branch_details:{bcity:"pune",bname:"pune",assets:2200000}
                })

db.Bank.insert({_id:5,
                 bid:105,
                accno:555,
                balance:23000,
                cust_details:{cid:205,cname:"Ross",street:"Nandhihill",city:"pune",loan:0,deposit:60000},
                branch_details:{bcity:"chennai",bname:"pune",assets:111000}
                })

db.Bank.insert({_id:6,
                 bid:106,
                accno:666,
                balance:650,
                cust_details:{cid:206,cname:"Rachel",street:"chittakula",city:"Hyderabad",loan:220000,deposit:60000},
                branch_details:{bcity:"hyderabad",bname:"Hyderabad",assets:300000}
                })

db.Bank.insert({_id:7,
                
                 bid:107,
                accno:777,
                balance:590,
                cust_details:{cid:207,cname:"sherlock",street:"chittakula",city:"chennai",loan:220000,deposit:60000},
                branch_details:{bcity:"chennai",bname:"chennai",assets:2200000}
                })

db.Bank.insert({_id:8,
                 bid:108,
                accno:888,
                balance:500,
                cust_details:{cid:208,cname:"euros",street:"chittakula",city:"chennai",loan:220000,deposit:60000},
                branch_details:{bcity:"chennai",bname:"chennai",assets:2200000}
                })

db.Bank.insert({_id:9,
                 bid:109,
                accno:999,
                balance:23000,
                cust_details:{cid:209,cname:"mycroft",street:"chittakula",city:"chennai",loan:220000,deposit:60000},
                branch_details:{bcity:"hyderabad_branch",bname:"chennai",assets:2200000}
                })

db.Bank.insert({_id:10,
                 bid:110,
                accno:889,
                balance:23000,
                cust_details:{cid:210,cname:"Ram",street:"chittakula",city:"Hyderabad",loan:220000,deposit:60000},
                branch_details:{bcity:"hyderabad",bname:"Hyderabad",assets:200000}
                })  
  
db.Bank.insert({_id:11,
                 bid:111,
                accno:11551,
                balance:23000,
                cust_details:{cid:205,cname:"Janice",street:"Nandhihill",city:"pune",loan:0,deposit:60000},
                branch_details:{bcity:"pune",bname:"pune",assets:111000}
                })                
                
_________________________________________________________________________________
db.Bank.find({}).count()

Choose appropriate primary key(s) 1
1. bid

 

Create index on primary key(s) 2
2. db.Bank.ensureIndex({bid:101},{unique:true})




The names and cities of all borrowers.  3
3. db.Bank.find({},{"cust_details.cname":1,"cust_details.city":1,_id:0})
   db.Bank.find({"cust_details.loan":{$gt:0}},{"cust_details.cname":1,"cust_details.city":1,_id:0})




The names of borrowers who live in Chennai. 4
4.   db.Bank.find({"cust_details.city":"chennai"},{"cust_details.cname":1,_id:0})





Find the name, city, and assets of the branch with the largest assets.  5
5. db.Bank.find({},{"branch_details.bname":1,"branch_details.bcity":1,"branch_details.assets":1}).sort({"branch_details.assets":-1}).limit(1)

/*db.Bank.find()aggregate([$group:{_id:"branch_details.bname",total:{$sum:  */                                                         }}])



The names and cities of customers who have a loan at Pune branch.  6
6. db.Bank.find({"cust_details.loan":{$gt:0},"branch_details.bcity":"pune"},{"cust_details.cname":1,"cust_details.city":1,_id:0})




Find the number of accounts with balances between 700 and 900. 7
7. db.Bank.find({"balance":{$gte:700,$lte:900}},{"accno":1})
   db.Bank.find({$and:[{"balance":{$gte:700}},{"balance":{$lte:900}}]},{"accno":1})




The names of customers with both deposit and loans at Pune branch. 8
8. db.Bank.find({"cust_details.loan":{$gt:0},"cust_details.deposit":{$gt:0},"branch_details.bcity":"pune"},{"cust_details.cname":1,"cust_details.city":1,_id:0})
 


9. The customers whose total loans are greater than the total amount in their bank accounts 9


db.Bank.find({$where:"this.cust_details.loan>this.balance"},{"cust_details.cname":1,accno:1,"cust_details.loan":1,balance:1})


The names of customers living on streets with names ending in "Hill". 10
10. db.Bank.find({"cust_details.street":/hill$/},{"cust_details.cname":1})




 The names of customers with an account but not a loan at Pune branch.  11
11.  db.Bank.find({"cust_details.loan":{$eq:0},"branch_details.bcity":"pune"},{"cust_details.cname":1,_id:0})




The names of branches whose assets are greater than the assets of all branches in    Hyderabad. 12
12. db.bank.aggregate([{$group:{_id:"$branch_details.bcity",MaxAsset:{$max:"$branch_details.assets"}}}])





13. find the branch with the largest average balance. 13
	
  db.Bank.aggregate([{$group:{_id:"$branch_details.bname",average:{$avg:"$balance"}}},
{$sort:{average:-1}},{$limit:1}]) 





14. The branch name and number of customers for each branch 14
    
db.Bank.aggregate([{$group:{_id:"$branch_details.bname",
                                    Total_customers:{$sum:1}}}])



15. Deposit an additional Rs. 20,000 to Ram’s bank account. 15
 db.Bank.update({"cust_details.cname":"Ram"},{$inc:{balance:20000}})
    db.Bank.update({"cust_details.cname":"Ram"},{$inc:{"cust_details.deposit":20000}})
db.Bank.find({_id:1})



db.bank.aggregate([{$group:{_id:"branch_details.bname",MaxAsset:{$max:"$branch_details.assets"}}}])


13. db.Bank.aggregate([{$group:{_id:"$branch_details.bname",average:{$avg:"$balance"}}},
{$sort:{average:-1}},{$limit:1}])


14.db.Bank.aggregate([{$group:{_id:"$branch_details.bname"},{$sort:{average:-1}}])

db.Bank.find().count()



