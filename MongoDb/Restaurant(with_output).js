
___________________________________________________________



1. Write a MongoDB query to display all the documents in the collection restaurants.  
  db.restaurant1.find()
/* 1 */
{
    "_id" : 101.0,
    "rid" : "r101",
    "rname" : "sizzlers",
    "address" : {
        "street" : "4th steet",
        "city" : "chennai",
        "pincode" : 581352.0
    },
    "cusine" : [ 
        "thai", 
        "American"
    ],
    "district" : "chennai",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-03T18:30:00.000Z"),
            "rating" : "A",
            "score" : 70.0
        }, 
        {
            "date" : ISODate("2018-05-01T18:30:00.000Z"),
            "rating" : "B",
            "score" : 80.0
        }
    ]
}

/* 2 */
{
    "_id" : 102.0,
    "rid" : "r102",
    "rname" : "dominos",
    "address" : {
        "street" : "5th steet",
        "city" : "bangalore",
        "pincode" : 581301.0
    },
    "cusine" : [ 
        "American", 
        "south_indian"
    ],
    "district" : "Bangalore",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-04T18:30:00.000Z"),
            "rating" : "C",
            "score" : 10.0
        }, 
        {
            "date" : ISODate("2018-05-04T18:30:00.000Z"),
            "rating" : "B",
            "score" : 88.0
        }
    ]
}

/* 3 */
{
    "_id" : 103.0,
    "rid" : "r103",
    "rname" : "pizzahut",
    "address" : {
        "street" : "4th steet",
        "city" : "mysore",
        "pincode" : 581303.0
    },
    "cusine" : [ 
        "thai", 
        "north_indian", 
        "south_indian"
    ],
    "district" : "mysore",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-05T18:30:00.000Z"),
            "rating" : "B",
            "score" : 90.0
        }, 
        {
            "date" : ISODate("2018-05-05T18:30:00.000Z"),
            "rating" : "A",
            "score" : 100.0
        }
    ]
}

/* 4 */
{
    "_id" : 104.0,
    "rid" : "r104",
    "rname" : "vapour",
    "address" : {
        "street" : "4th steet",
        "city" : "pune",
        "pincode" : 581352.0
    },
    "cusine" : [ 
        "thai", 
        "American"
    ],
    "district" : "pune",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-03T18:30:00.000Z"),
            "rating" : "A",
            "score" : 70.0
        }, 
        {
            "date" : ISODate("2018-05-01T18:30:00.000Z"),
            "rating" : "A",
            "score" : 60.0
        }
    ]
}

/* 5 */
{
    "_id" : 105.0,
    "rid" : "r105",
    "rname" : "truffles",
    "address" : {
        "street" : "7th steet",
        "city" : "chennai",
        "pincode" : 581352.0
    },
    "cusine" : [ 
        "thai", 
        "American", 
        "south_indian", 
        "north_indian"
    ],
    "district" : "chennai",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-07T18:30:00.000Z"),
            "rating" : "A",
            "score" : 70.0
        }, 
        {
            "date" : ISODate("2018-05-07T18:30:00.000Z"),
            "rating" : "B",
            "score" : 40.0
        }
    ]
}

/* 6 */
{
    "_id" : 106.0,
    "rid" : "r106",
    "rname" : "eggfactory",
    "address" : {
        "street" : "9th steet",
        "city" : "chennai",
        "pincode" : 581352.0
    },
    "cusine" : [ 
        "American"
    ],
    "district" : "chennai",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-08T18:30:00.000Z"),
            "rating" : "A",
            "score" : 70.0
        }, 
        {
            "date" : ISODate("2018-05-08T18:30:00.000Z"),
            "rating" : "B",
            "score" : 90.0
        }
    ]
}

/* 7 */
{
    "_id" : 107.0,
    "rid" : "r107",
    "rname" : "community",
    "address" : {
        "street" : "4th steet",
        "city" : "mysore",
        "pincode" : 581352.0
    },
    "cusine" : [ 
        "American", 
        "Mumbai_thali"
    ],
    "district" : "mysore",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-07T18:30:00.000Z"),
            "rating" : "C",
            "score" : 70.0
        }, 
        {
            "date" : ISODate("2018-05-07T18:30:00.000Z"),
            "rating" : "A",
            "score" : 90.0
        }
    ]
}

/* 8 */
{
    "_id" : 108.0,
    "rid" : "r108",
    "rname" : "sizzlers",
    "address" : {
        "street" : "4th steet",
        "city" : "",
        "pincode" : 581352.0
    },
    "cusine" : [ 
        "thai", 
        "American"
    ],
    "district" : "mysoree",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-09T18:30:00.000Z"),
            "rating" : "A",
            "score" : 70.0
        }, 
        {
            "date" : ISODate("2018-05-09T18:30:00.000Z"),
            "rating" : "B",
            "score" : 80.0
        }
    ]
}

/* 9 */
{
    "_id" : 109.0,
    "rid" : "r109",
    "rname" : "sizzlers",
    "address" : {
        "street" : "4th steet",
        "city" : "chennai",
        "pincode" : 581352.0
    },
    "cusine" : [ 
        "thai", 
        "American"
    ],
    "district" : "chennai",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-03T18:30:00.000Z"),
            "rating" : "A",
            "score" : 70.0
        }, 
        {
            "date" : ISODate("2018-05-01T18:30:00.000Z"),
            "rating" : "B",
            "score" : 80.0
        }
    ]
}

/* 10 */
{
    "_id" : 110.0,
    "rid" : "r110",
    "rname" : "sizzlers",
    "address" : {
        "street" : "4th steet",
        "city" : "chennai",
        "pincode" : 581352.0
    },
    "cusine" : [ 
        "thai", 
        "American"
    ],
    "district" : "chennai",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-03T18:30:00.000Z"),
            "rating" : "A",
            "score" : 70.0
        }, 
        {
            "date" : ISODate("2018-05-01T18:30:00.000Z"),
            "rating" : "B",
            "score" : 80.0
        }
    ]
}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



2. Write a MongoDB query to display the fields restaurant_id, name, and cuisine for all the documents in the collection restaurant
 db.restaurant1.find({},{"rid":1,"rname":1,"cusine":1})

/* 1 */
{
    "_id" : 101.0,
    "rid" : "r101",
    "rname" : "sizzlers",
    "cusine" : [ 
        "thai", 
        "American"
    ]
}

/* 2 */
{
    "_id" : 102.0,
    "rid" : "r102",
    "rname" : "dominos",
    "cusine" : [ 
        "American", 
        "south_indian"
    ]
}

/* 3 */
{
    "_id" : 103.0,
    "rid" : "r103",
    "rname" : "pizzahut",
    "cusine" : [ 
        "thai", 
        "north_indian", 
        "south_indian"
    ]
}

/* 4 */
{
    "_id" : 104.0,
    "rid" : "r104",
    "rname" : "vapour",
    "cusine" : [ 
        "thai", 
        "American"
    ]
}

/* 5 */
{
    "_id" : 105.0,
    "rid" : "r105",
    "rname" : "truffles",
    "cusine" : [ 
        "thai", 
        "American", 
        "south_indian", 
        "north_indian"
    ]
}

/* 6 */
{
    "_id" : 106.0,
    "rid" : "r106",
    "rname" : "eggfactory",
    "cusine" : [ 
        "American"
    ]
}

/* 7 */
{
    "_id" : 107.0,
    "rid" : "r107",
    "rname" : "community",
    "cusine" : [ 
        "American", 
        "Mumbai_thali"
    ]
}

/* 8 */
{
    "_id" : 108.0,
    "rid" : "r108",
    "rname" : "sizzlers",
    "cusine" : [ 
        "thai", 
        "American"
    ]
}

/* 9 */
{
    "_id" : 109.0,
    "rid" : "r109",
    "rname" : "sizzlers",
    "cusine" : [ 
        "thai", 
        "American"
    ]
}

/* 10 */
{
    "_id" : 110.0,
    "rid" : "r110",
    "rname" : "sizzlers",
    "cusine" : [ 
        "thai", 
        "American"
    ]
}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

3. Write a MongoDB query to display the fields restaurant_id, name, and cuisine, but exclude the field _id for all the documents in the collection restaurant. 
 db.restaurant1.find({},{"rid":1,"rname":1,"cusine":1,_id:0})

/* 1 */
{
    "rid" : "r101",
    "rname" : "sizzlers",
    "cusine" : [ 
        "thai", 
        "American"
    ]
}

/* 2 */
{
    "rid" : "r102",
    "rname" : "dominos",
    "cusine" : [ 
        "American", 
        "south_indian"
    ]
}

/* 3 */
{
    "rid" : "r103",
    "rname" : "pizzahut",
    "cusine" : [ 
        "thai", 
        "north_indian", 
        "south_indian"
    ]
}

/* 4 */
{
    "rid" : "r104",
    "rname" : "vapour",
    "cusine" : [ 
        "thai", 
        "American"
    ]
}

/* 5 */
{
    "rid" : "r105",
    "rname" : "truffles",
    "cusine" : [ 
        "thai", 
        "American", 
        "south_indian", 
        "north_indian"
    ]
}

/* 6 */
{
    "rid" : "r106",
    "rname" : "eggfactory",
    "cusine" : [ 
        "American"
    ]
}

/* 7 */
{
    "rid" : "r107",
    "rname" : "community",
    "cusine" : [ 
        "American", 
        "Mumbai_thali"
    ]
}

/* 8 */
{
    "rid" : "r108",
    "rname" : "sizzlers",
    "cusine" : [ 
        "thai", 
        "American"
    ]
}

/* 9 */
{
    "rid" : "r109",
    "rname" : "sizzlers",
    "cusine" : [ 
        "thai", 
        "American"
    ]
}

/* 10 */
{
    "rid" : "r110",
    "rname" : "sizzlers",
    "cusine" : [ 
        "thai", 
        "American"
    ]
}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

 5. Write a MongoDB query to display all the restaurant which is in Chennai
 . db.restaurant1.find({"address.city":"chennai"})
/* 1 */
{
    "_id" : 101.0,
    "rid" : "r101",
    "rname" : "sizzlers",
    "address" : {
        "street" : "4th steet",
        "city" : "chennai",
        "pincode" : 581352.0
    },
    "cusine" : [ 
        "thai", 
        "American"
    ],
    "district" : "chennai",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-03T18:30:00.000Z"),
            "rating" : "A",
            "score" : 70.0
        }, 
        {
            "date" : ISODate("2018-05-01T18:30:00.000Z"),
            "rating" : "B",
            "score" : 80.0
        }
    ]
}

/* 2 */
{
    "_id" : 105.0,
    "rid" : "r105",
    "rname" : "truffles",
    "address" : {
        "street" : "7th steet",
        "city" : "chennai",
        "pincode" : 581352.0
    },
    "cusine" : [ 
        "thai", 
        "American", 
        "south_indian", 
        "north_indian"
    ],
    "district" : "chennai",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-07T18:30:00.000Z"),
            "rating" : "A",
            "score" : 70.0
        }, 
        {
            "date" : ISODate("2018-05-07T18:30:00.000Z"),
            "rating" : "B",
            "score" : 40.0
        }
    ]
}

/* 3 */
{
    "_id" : 106.0,
    "rid" : "r106",
    "rname" : "eggfactory",
    "address" : {
        "street" : "9th steet",
        "city" : "chennai",
        "pincode" : 581352.0
    },
    "cusine" : [ 
        "American"
    ],
    "district" : "chennai",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-08T18:30:00.000Z"),
            "rating" : "A",
            "score" : 70.0
        }, 
        {
            "date" : ISODate("2018-05-08T18:30:00.000Z"),
            "rating" : "B",
            "score" : 90.0
        }
    ]
}

/* 4 */
{
    "_id" : 109.0,
    "rid" : "r109",
    "rname" : "sizzlers",
    "address" : {
        "street" : "4th steet",
        "city" : "chennai",
        "pincode" : 581352.0
    },
    "cusine" : [ 
        "thai", 
        "American"
    ],
    "district" : "chennai",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-03T18:30:00.000Z"),
            "rating" : "A",
            "score" : 70.0
        }, 
        {
            "date" : ISODate("2018-05-01T18:30:00.000Z"),
            "rating" : "B",
            "score" : 80.0
        }
    ]
}

/* 5 */
{
    "_id" : 110.0,
    "rid" : "r110",
    "rname" : "sizzlers",
    "address" : {
        "street" : "4th steet",
        "city" : "chennai",
        "pincode" : 581352.0
    },
    "cusine" : [ 
        "thai", 
        "American"
    ],
    "district" : "chennai",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-03T18:30:00.000Z"),
            "rating" : "A",
            "score" : 70.0
        }, 
        {
            "date" : ISODate("2018-05-01T18:30:00.000Z"),
            "rating" : "B",
            "score" : 80.0
        }
    ]
}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
6. Write a MongoDB query to display the first 5 restaurant which is in the district Chennai.  
  db.restaurant1.find({"address.city":"chennai"}).limit(5)
/* 1 */
{
    "_id" : 101.0,
    "rid" : "r101",
    "rname" : "sizzlers",
    "address" : {
        "street" : "4th steet",
        "city" : "chennai",
        "pincode" : 581352.0
    },
    "cusine" : [ 
        "thai", 
        "American"
    ],
    "district" : "chennai",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-03T18:30:00.000Z"),
            "rating" : "A",
            "score" : 70.0
        }, 
        {
            "date" : ISODate("2018-05-01T18:30:00.000Z"),
            "rating" : "B",
            "score" : 80.0
        }
    ]
}

/* 2 */
{
    "_id" : 105.0,
    "rid" : "r105",
    "rname" : "truffles",
    "address" : {
        "street" : "7th steet",
        "city" : "chennai",
        "pincode" : 581352.0
    },
    "cusine" : [ 
        "thai", 
        "American", 
        "south_indian", 
        "north_indian"
    ],
    "district" : "chennai",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-07T18:30:00.000Z"),
            "rating" : "A",
            "score" : 70.0
        }, 
        {
            "date" : ISODate("2018-05-07T18:30:00.000Z"),
            "rating" : "B",
            "score" : 40.0
        }
    ]
}

/* 3 */
{
    "_id" : 106.0,
    "rid" : "r106",
    "rname" : "eggfactory",
    "address" : {
        "street" : "9th steet",
        "city" : "chennai",
        "pincode" : 581352.0
    },
    "cusine" : [ 
        "American"
    ],
    "district" : "chennai",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-08T18:30:00.000Z"),
            "rating" : "A",
            "score" : 70.0
        }, 
        {
            "date" : ISODate("2018-05-08T18:30:00.000Z"),
            "rating" : "B",
            "score" : 90.0
        }
    ]
}

/* 4 */
{
    "_id" : 109.0,
    "rid" : "r109",
    "rname" : "sizzlers",
    "address" : {
        "street" : "4th steet",
        "city" : "chennai",
        "pincode" : 581352.0
    },
    "cusine" : [ 
        "thai", 
        "American"
    ],
    "district" : "chennai",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-03T18:30:00.000Z"),
            "rating" : "A",
            "score" : 70.0
        }, 
        {
            "date" : ISODate("2018-05-01T18:30:00.000Z"),
            "rating" : "B",
            "score" : 80.0
        }
    ]
}

/* 5 */
{
    "_id" : 110.0,
    "rid" : "r110",
    "rname" : "sizzlers",
    "address" : {
        "street" : "4th steet",
        "city" : "chennai",
        "pincode" : 581352.0
    },
    "cusine" : [ 
        "thai", 
        "American"
    ],
    "district" : "chennai",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-03T18:30:00.000Z"),
            "rating" : "A",
            "score" : 70.0
        }, 
        {
            "date" : ISODate("2018-05-01T18:30:00.000Z"),
            "rating" : "B",
            "score" : 80.0
        }
    ]
}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

7.Write a MongoDB query to display the next 5 restaurants after skipping first 5 which are in the Chennai
 db.restaurant1.find({"address.city":"chennai"}).skip(5).limit(5)
/* 1 */
{
    "_id" : 105.0,
    "rid" : "r105",
    "rname" : "truffles",
    "address" : {
        "street" : "7th steet",
        "city" : "chennai",
        "pincode" : 581352.0
    },
    "cusine" : [ 
        "thai", 
        "American", 
        "south_indian", 
        "north_indian"
    ],
    "district" : "chennai",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-07T18:30:00.000Z"),
            "rating" : "A",
            "score" : 70.0
        }, 
        {
            "date" : ISODate("2018-05-07T18:30:00.000Z"),
            "rating" : "B",
            "score" : 40.0
        }
    ]
}

/* 2 */
{
    "_id" : 106.0,
    "rid" : "r106",
    "rname" : "eggfactory",
    "address" : {
        "street" : "9th steet",
        "city" : "chennai",
        "pincode" : 581352.0
    },
    "cusine" : [ 
        "American"
    ],
    "district" : "chennai",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-08T18:30:00.000Z"),
            "rating" : "A",
            "score" : 70.0
        }, 
        {
            "date" : ISODate("2018-05-08T18:30:00.000Z"),
            "rating" : "B",
            "score" : 90.0
        }
    ]
}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 8. Write a MongoDB query to find the restaurants who achieved a score more than 90.  
 db.restaurant1.find({"rating.score":{$gt:90}})
     db.restaurant1.find({"rating":{$elemMatch:{"score":{$gt:90}}}})

/* 1 */
{
    "_id" : 103.0,
    "rid" : "r103",
    "rname" : "pizzahut",
    "address" : {
        "street" : "4th steet",
        "city" : "mysore",
        "pincode" : 581303.0
    },
    "cusine" : [ 
        "thai", 
        "north_indian", 
        "south_indian"
    ],
    "district" : "mysore",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-05T18:30:00.000Z"),
            "rating" : "B",
            "score" : 90.0
        }, 
        {
            "date" : ISODate("2018-05-05T18:30:00.000Z"),
            "rating" : "A",
            "score" : 100.0
        }
    ]
}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

9. Write a MongoDB query to find the restaurants that achieved a score, more than 80 but less than 100. 
 db.restaurant1.find({"rating.score":{$gt:80,$lt:100}})

/* 1 */
{
    "_id" : 102.0,
    "rid" : "r102",
    "rname" : "dominos",
    "address" : {
        "street" : "5th steet",
        "city" : "bangalore",
        "pincode" : 581301.0
    },
    "cusine" : [ 
        "American", 
        "south_indian"
    ],
    "district" : "Bangalore",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-04T18:30:00.000Z"),
            "rating" : "C",
            "score" : 10.0
        }, 
        {
            "date" : ISODate("2018-05-04T18:30:00.000Z"),
            "rating" : "B",
            "score" : 88.0
        }
    ]
}

/* 2 */
{
    "_id" : 103.0,
    "rid" : "r103",
    "rname" : "pizzahut",
    "address" : {
        "street" : "4th steet",
        "city" : "mysore",
        "pincode" : 581303.0
    },
    "cusine" : [ 
        "thai", 
        "north_indian", 
        "south_indian"
    ],
    "district" : "mysore",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-05T18:30:00.000Z"),
            "rating" : "B",
            "score" : 90.0
        }, 
        {
            "date" : ISODate("2018-05-05T18:30:00.000Z"),
            "rating" : "A",
            "score" : 100.0
        }
    ]
}

/* 3 */
{
    "_id" : 106.0,
    "rid" : "r106",
    "rname" : "eggfactory",
    "address" : {
        "street" : "9th steet",
        "city" : "chennai",
        "pincode" : 581352.0
    },
    "cusine" : [ 
        "American"
    ],
    "district" : "chennai",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-08T18:30:00.000Z"),
            "rating" : "A",
            "score" : 70.0
        }, 
        {
            "date" : ISODate("2018-05-08T18:30:00.000Z"),
            "rating" : "B",
            "score" : 90.0
        }
    ]
}

/* 4 */
{
    "_id" : 107.0,
    "rid" : "r107",
    "rname" : "community",
    "address" : {
        "street" : "4th steet",
        "city" : "mysore",
        "pincode" : 581352.0
    },
    "cusine" : [ 
        "American", 
        "Mumbai_thali"
    ],
    "district" : "mysore",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-07T18:30:00.000Z"),
            "rating" : "C",
            "score" : 70.0
        }, 
        {
            "date" : ISODate("2018-05-07T18:30:00.000Z"),
            "rating" : "A",
            "score" : 90.0
        }
    ]
}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
11. Write a MongoDB query to find the restaurants that do not prepare any cuisine of “Thai” and their grade score more than 70 
 db.restaurant1.find({cusine:{$ne:"thai"},"rating.score":{$gt:70}})

/* 1 */
{
    "_id" : 102.0,
    "rid" : "r102",
    "rname" : "dominos",
    "address" : {
        "street" : "5th steet",
        "city" : "bangalore",
        "pincode" : 581301.0
    },
    "cusine" : [ 
        "American", 
        "south_indian"
    ],
    "district" : "Bangalore",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-04T18:30:00.000Z"),
            "rating" : "C",
            "score" : 10.0
        }, 
        {
            "date" : ISODate("2018-05-04T18:30:00.000Z"),
            "rating" : "B",
            "score" : 88.0
        }
    ]
}

/* 2 */
{
    "_id" : 106.0,
    "rid" : "r106",
    "rname" : "eggfactory",
    "address" : {
        "street" : "9th steet",
        "city" : "chennai",
        "pincode" : 581352.0
    },
    "cusine" : [ 
        "American"
    ],
    "district" : "chennai",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-08T18:30:00.000Z"),
            "rating" : "A",
            "score" : 70.0
        }, 
        {
            "date" : ISODate("2018-05-08T18:30:00.000Z"),
            "rating" : "B",
            "score" : 90.0
        }
    ]
}

/* 3 */
{
    "_id" : 107.0,
    "rid" : "r107",
    "rname" : "community",
    "address" : {
        "street" : "4th steet",
        "city" : "mysore",
        "pincode" : 581352.0
    },
    "cusine" : [ 
        "American", 
        "Mumbai_thali"
    ],
    "district" : "mysore",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-07T18:30:00.000Z"),
            "rating" : "C",
            "score" : 70.0
        }, 
        {
            "date" : ISODate("2018-05-07T18:30:00.000Z"),
            "rating" : "A",
            "score" : 90.0
        }
    ]
}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

12. Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American' and achieved a score more than 70 
 db.restaurant1.find({cusine:{$ne:"American"},"rating.score":{$gt:70}})
/* 1 */
{
    "_id" : 103.0,
    "rid" : "r103",
    "rname" : "pizzahut",
    "address" : {
        "street" : "4th steet",
        "city" : "mysore",
        "pincode" : 581303.0
    },
    "cusine" : [ 
        "thai", 
        "north_indian", 
        "south_indian"
    ],
    "district" : "mysore",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-05T18:30:00.000Z"),
            "rating" : "B",
            "score" : 90.0
        }, 
        {
            "date" : ISODate("2018-05-05T18:30:00.000Z"),
            "rating" : "A",
            "score" : 100.0
        }
    ]
}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

13. Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American ' and achieved a grade point 'A' 
 db.restaurant1.find({cusine:{$ne:"American"},"rating.rating":"A"})

/* 1 */
{
    "_id" : 103.0,
    "rid" : "r103",
    "rname" : "pizzahut",
    "address" : {
        "street" : "4th steet",
        "city" : "mysore",
        "pincode" : 581303.0
    },
    "cusine" : [ 
        "thai", 
        "north_indian", 
        "south_indian"
    ],
    "district" : "mysore",
    "rating" : [ 
        {
            "date" : ISODate("2018-12-05T18:30:00.000Z"),
            "rating" : "B",
            "score" : 90.0
        }, 
        {
            "date" : ISODate("2018-05-05T18:30:00.000Z"),
            "rating" : "A",
            "score" : 100.0
        }
    ]
}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




