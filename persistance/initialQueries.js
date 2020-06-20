db.authors.insertMany([
    {
        "_id" : ObjectId("5ee24e55c444cc62db56262c"),
        "name" : {
            "first" : "John",
            "last" : "Backus"
        },
        "birth" : ISODate("1924-12-03T05:00:00.000Z"),
        "death" : ISODate("2007-03-17T04:00:00.000Z"),
        "contribs" : [ 
            "Fortran", 
            "ALGOL", 
            "Backus-Naur Form", 
            "FP"
        ],
        "awards" : [ 
            {
                "award" : "W.W. McDowell Award",
                "year" : 1967.0,
                "by" : "IEEE Computer Society"
            }, 
            {
                "award" : "National Medal of Science",
                "year" : 1975.0,
                "by" : "National Science Foundation"
            }, 
            {
                "award" : "Turing Award",
                "year" : 1977.0,
                "by" : "ACM"
            }, 
            {
                "award" : "Draper Prize",
                "year" : 1993.0,
                "by" : "National Academy of Engineering"
            }
        ]
    },
    {
        "_id" : ObjectId("5ee24e55c444cc62db56262d"),
        "name" : {
            "first" : "John",
            "last" : "McCarthy"
        },
        "birth" : ISODate("1927-09-04T04:00:00.000Z"),
        "death" : ISODate("2011-12-24T05:00:00.000Z"),
        "contribs" : [ 
            "Lisp", 
            "Artificial Intelligence", 
            "ALGOL"
        ],
        "awards" : [ 
            {
                "award" : "Turing Award",
                "year" : 1971.0,
                "by" : "ACM"
            }, 
            {
                "award" : "Kyoto Prize",
                "year" : 1988.0,
                "by" : "Inamori Foundation"
            }, 
            {
                "award" : "National Medal of Science",
                "year" : 1990.0,
                "by" : "National Science Foundation"
            }
        ]
    },
    {
        "_id" : ObjectId("5ee24e55c444cc62db56262e"),
        "name" : {
            "first" : "Grace",
            "last" : "Hopper"
        },
        "title" : "Rear Admiral",
        "birth" : ISODate("1906-12-09T05:00:00.000Z"),
        "death" : ISODate("1992-01-01T05:00:00.000Z"),
        "contribs" : [ 
            "UNIVAC", 
            "compiler", 
            "FLOW-MATIC", 
            "COBOL"
        ],
        "awards" : [ 
            {
                "award" : "Computer Sciences Man of the Year",
                "year" : 1969.0,
                "by" : "Data Processing Management Association"
            }, 
            {
                "award" : "Distinguished Fellow",
                "year" : 1973.0,
                "by" : " British Computer Society"
            }, 
            {
                "award" : "W. W. McDowell Award",
                "year" : 1976.0,
                "by" : "IEEE Computer Society"
            }, 
            {
                "award" : "National Medal of Technology",
                "year" : 1991.0,
                "by" : "United States"
            }
        ]
    },
    {
        "_id" : ObjectId("5ee24e55c444cc62db56262f"),
        "name" : {
            "first" : "Kristen",
            "last" : "Nygaard"
        },
        "birth" : ISODate("1926-08-27T04:00:00.000Z"),
        "death" : ISODate("2002-08-10T04:00:00.000Z"),
        "contribs" : [ 
            "OOP", 
            "Simula"
        ],
        "awards" : [ 
            {
                "award" : "Rosing Prize",
                "year" : 1999.0,
                "by" : "Norwegian Data Association"
            }, 
            {
                "award" : "Turing Award",
                "year" : 2001.0,
                "by" : "ACM"
            }, 
            {
                "award" : "IEEE John von Neumann Medal",
                "year" : 2001.0,
                "by" : "IEEE"
            }
        ]
    },
    {
        "_id" : ObjectId("5ee24e55c444cc62db562630"),
        "name" : {
            "first" : "Ole-Johan",
            "last" : "Dahl"
        },
        "birth" : ISODate("1931-10-12T04:00:00.000Z"),
        "death" : ISODate("2002-06-29T04:00:00.000Z"),
        "contribs" : [ 
            "OOP", 
            "Simula"
        ],
        "awards" : [ 
            {
                "award" : "Rosing Prize",
                "year" : 1999.0,
                "by" : "Norwegian Data Association"
            }, 
            {
                "award" : "Turing Award",
                "year" : 2001.0,
                "by" : "ACM"
            }, 
            {
                "award" : "IEEE John von Neumann Medal",
                "year" : 2001.0,
                "by" : "IEEE"
            }
        ]
    },
    {
        "_id" : ObjectId("5ee24e55c444cc62db562631"),
        "name" : {
            "first" : "Guido",
            "last" : "van Rossum"
        },
        "birth" : ISODate("1956-01-31T05:00:00.000Z"),
        "contribs" : [ 
            "Python"
        ],
        "awards" : [ 
            {
                "award" : "Award for the Advancement of Free Software",
                "year" : 2001.0,
                "by" : "Free Software Foundation"
            }, 
            {
                "award" : "NLUUG Award",
                "year" : 2003.0,
                "by" : "NLUUG"
            }
        ]
    },
    {
        "_id" : ObjectId("5ee24e55c444cc62db562632"),
        "name" : {
            "first" : "Dennis",
            "last" : "Ritchie"
        },
        "birth" : ISODate("1941-09-09T04:00:00.000Z"),
        "death" : ISODate("2011-10-12T04:00:00.000Z"),
        "contribs" : [ 
            "UNIX", 
            "C"
        ],
        "awards" : [ 
            {
                "award" : "Turing Award",
                "year" : 1983.0,
                "by" : "ACM"
            }, 
            {
                "award" : "National Medal of Technology",
                "year" : 1998.0,
                "by" : "United States"
            }, 
            {
                "award" : "Japan Prize",
                "year" : 2011.0,
                "by" : "The Japan Prize Foundation"
            }
        ]
    },
    {
        "_id" : ObjectId("5ee24e55c444cc62db562633"),
        "name" : {
            "first" : "Yukihiro",
            "aka" : "Matz",
            "last" : "Matsumoto"
        },
        "birth" : ISODate("1965-04-14T04:00:00.000Z"),
        "contribs" : [ 
            "Ruby"
        ],
        "awards" : [ 
            {
                "award" : "Award for the Advancement of Free Software",
                "year" : "2011",
                "by" : "Free Software Foundation"
            }
        ]
    },
    {
        "_id" : ObjectId("5ee24e55c444cc62db562634"),
        "name" : {
            "first" : "James",
            "last" : "Gosling"
        },
        "birth" : ISODate("1955-05-19T04:00:00.000Z"),
        "contribs" : [ 
            "Java"
        ],
        "awards" : [ 
            {
                "award" : "The Economist Innovation Award",
                "year" : 2002.0,
                "by" : "The Economist"
            }, 
            {
                "award" : "Officer of the Order of Canada",
                "year" : 2007.0,
                "by" : "Canada"
            }
        ]
    },
    {
        "_id" : ObjectId("5ee24e55c444cc62db562635"),
        "name" : {
            "first" : "Martin",
            "last" : "Odersky"
        },
        "contribs" : [ 
            "Scala"
        ]
    }
]);

db.books.insertMany([
    {
        authorId: ObjectId("5ee24e55c444cc62db562634"),
        language: "Java",
        bookName: "Java Complete Reference volume 1",
        price: 3000,
        sold: 150
    },
    {
        authorId: ObjectId("5ee24e55c444cc62db562634"),
        language: "Java",
        bookName: "Java Complete Reference volume 2",
        price: 5000,
        sold: 200
    },
    {
        authorId: ObjectId("5ee24e55c444cc62db56262f"),
        language: "OOP",
        bookName: "OOP for beginners",
        price: 1000,
        sold: 50
    },
    {
        authorId: ObjectId("5ee24e55c444cc62db56262f"),
        language: "OOP",
        bookName: "OOP advanced",
        price: 1500,
        sold: 25
    },
    {
        authorId: ObjectId("5ee24e55c444cc62db562631"),
        language: "Python",
        bookName: "Python foundation",
        price: 2500,
        sold: 100
    },
    {
        authorId: ObjectId("5ee24e55c444cc62db562635"),
        language: "Scala",
        bookName: "Scala in-depth",
        price: 5000,
        sold: 15
    }
]);