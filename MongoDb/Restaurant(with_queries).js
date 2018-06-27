db.printCollectionStats()
db.restaurant1.insert({"_id":101,
                        rid:"r101",
                        rname:"sizzlers",
                        address:{street:"4th steet",
                                 city:"chennai",
                                  pincode:581352
                                  },
                        cusine:["thai","American"],
                        district:"chennai",
                        rating:[{date:new Date("12/04/2018"),rating:'A',score:70},
                                {date:new Date("05/02/2018"),rating:'B',score:80}
                                ]           
                                  })

db.restaurant1.insert({"_id":105,
                        rid:"r105",
                        rname:"truffles",
                        address:{street:"7th steet",
                                 city:"chennai",
                                  pincode:581352
                                  },
                        cusine:["thai","American","south_indian","north_indian"],
                        district:"chennai",
                        rating:[{date:new Date("12/08/2018"),rating:'A',score:70},
                                {date:new Date("05/08/2018"),rating:'B',score:40}
                                ]           
                                  })

db.restaurant1.insert({"_id":106,
                        rid:"r106",
                        rname:"eggfactory",
                        address:{street:"9th steet",
                                 city:"chennai",
                                  pincode:581352
                                  },
                        cusine:["American"],
                        district:"chennai",
                        rating:[{date:new Date("12/09/2018"),rating:'A',score:70},
                                {date:new Date("05/09/2018"),rating:'B',score:90}
                                ]           
                                  })                                  
                                  
db.restaurant1.insert({"_id":102,
                        rid:"r102",
                        rname:"dominos",
                        address:{street:"5th steet",
                                 city:"bangalore",
                                  pincode:581301
                                  },
                        cusine:["American","south_indian"],
                        district:"Bangalore",
                        rating:[{date:new Date("12/05/2018"),rating:'C',score:10},
                                {date:new Date("05/05/2018"),rating:'B',score:88}
                                ]           
                                  })
                                  
 db.restaurant1.insert({"_id":103,
                        rid:"r103",
                        rname:"pizzahut",
                        address:{street:"4th steet",
                                 city:"mysore",
                                  pincode:581303
                                  },
                        cusine:["thai","north_indian","south_indian"],
                        district:"mysore",
                        rating:[{date:new Date("12/06/2018"),rating:'A',score:90},
                                {date:new Date("05/06/2018"),rating:'A',score:100}
                                ]           
                                  })
                                  
db.restaurant1.insert({"_id":104,
                        rid:"r104",
                        rname:"vapour",
                        address:{street:"4th steet",
                                 city:"pune",
                                  pincode:581352
                                  },
                        cusine:["thai","American"],
                        district:"pune",
                        rating:[{date:new Date("12/04/2018"),rating:'A',score:70},
                                {date:new Date("05/02/2018"),rating:'A',score:60}
                                ]           
                                  })
                                  
db.restaurant1.insert({"_id":107,
                        rid:"r107",
                        rname:"community",
                        address:{street:"4th steet",
                                 city:"mysore",
                                  pincode:581352
                                  },
                        cusine:["American","Mumbai_thali"],
                        district:"mysore",
                        rating:[{date:new Date("12/08/2018"),rating:'C',score:70},
                                {date:new Date("05/08/2018"),rating:'A',score:90}
                                ]           
                                  })

db.restaurant1.insert({"_id":108,
                        rid:"r108",
                        rname:"sizzlers",
                        address:{street:"4th steet",
                                 city:"",
                                  pincode:581352
                                  },
                        cusine:["thai","American"],
                        district:"mysoree",
                        rating:[{date:new Date("12/10/2018"),rating:'A',score:70},
                                {date:new Date("05/10/2018"),rating:'B',score:80}
                                ]           
                                  })
db.restaurant1.insert({"_id":109,
                        rid:"r109",
                        rname:"sizzlers",
                        address:{street:"4th steet",
                                 city:"chennai",
                                  pincode:581352
                                  },
                        cusine:["thai","American"],
                        district:"chennai",
                        rating:[{date:new Date("12/04/2018"),rating:'A',score:70},
                                {date:new Date("05/02/2018"),rating:'B',score:80}
                                ]           
                                  })
db.restaurant1.insert({"_id":110,
                        rid:"r110",
                        rname:"sizzlers",
                        address:{street:"4th steet",
                                 city:"chennai",
                                  pincode:581352
                                  },
                        cusine:["thai","American"],
                        district:"chennai",
                        rating:[{date:new Date("12/04/2018"),rating:'A',score:70},
                                {date:new Date("05/02/2018"),rating:'B',score:80}
                                ]           
                                  })                                  
db.restaurant1.find({"rid":"r103"})

db.restaurant1.update({"rid":"r103"},{$set:{"rating.0.rating":"B"}})
___________________________________________________________



1. Write a MongoDB query to display all the documents in the collection restaurants.  
  db.restaurant1.find()


2. Write a MongoDB query to display the fields restaurant_id, name, and cuisine for all the documents in the collection restaurant
 db.restaurant1.find({},{"rid":1,"rname":1,"cusine":1})


3. Write a MongoDB query to display the fields restaurant_id, name, and cuisine, but exclude the field _id for all the documents in the collection restaurant. 
 db.restaurant1.find({},{"rid":1,"rname":1,"cusine":1,_id:0})


 5. Write a MongoDB query to display all the restaurant which is in Chennai
 . db.restaurant1.find({"address.city":"chennai"})


6. Write a MongoDB query to display the first 5 restaurant which is in the district Chennai.  
  db.restaurant1.find({"address.city":"chennai"}).limit(5)


7.Write a MongoDB query to display the next 5 restaurants after skipping first 5 which are in the Chennai
 db.restaurant1.find({"address.city":"chennai"}).skip(5).limit(5)


 8. Write a MongoDB query to find the restaurants who achieved a score more than 90.  
 db.restaurant1.find({"rating.score":{$gt:90}})
     db.restaurant1.find({"rating":{$elemMatch:{"score":{$gt:90}}}})


9. Write a MongoDB query to find the restaurants that achieved a score, more than 80 but less than 100. 
 db.restaurant1.find({"rating.score":{$gt:80,$lt:100}})

11. Write a MongoDB query to find the restaurants that do not prepare any cuisine of “Thai” and their grade score more than 70 
 db.restaurant1.find({cusine:{$ne:"thai"},"rating.score":{$gt:70}})


12. Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American' and achieved a score more than 70 
 db.restaurant1.find({cusine:{$ne:"American"},"rating.score":{$gt:70}})


13. Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American ' and achieved a grade point 'A' 
 db.restaurant1.find({cusine:{$ne:"American"},"rating.rating":"A"})





