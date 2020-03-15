


# Esa-Assign2

The project basically is creating a simple online shopping cart platform using microservice linked via apis made in Node.Js. The major roles are the products available and the user interacting with the microservice. The user can add/remove items based on the availibility of the product. 

## Getting Started

Download the folder esa-assign2. it will have a folder and a python script. On terminal/command-line navigate into the api folder and npm start to run the server. then open a fresh terminal and execute the python script. The python script acts as driver function for the client to interact with the microservice apis . It has functions which can be used by the user as a method of invoking a service from the microservice, which in turn triggers a series of api calls.




## Basic api structure

DATABASES:<br>
1) User<br>
2) Products<br>
3) Cart<br>

PROJECTS:<br>
1) controllers <br>
2) routes <br>
3) models <br>

a server.js file to set up and run the server

```
~esa-assign2>tree --filelimit 6
.
├── api try
│   ├── api
│   │   ├── controllers
│   │   │   ├── cartController.js
│   │   │   ├── productController.js
│   │   │   └── userController.js
│   │   ├── model
│   │   │   ├── cartModel.js
│   │   │   ├── productModel.js
│   │   │   └── userModel.js
│   │   └── routes
│   │       ├── cartRoutes.js
│   │       ├── productRoutes.js
│   │       └── userRoutes.js
│   ├── node_modules [214 entries exceeds filelimit, not opening dir]
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
└── driver.py

6 directories, 13 files
```

### Installing

A step by step series of examples that tell you how to get the server and client running

Running the server

```
~esa-assign2/api-try>npm start
```


Output :

```
> api-try@1.0.0 start ~\esa-assign2\api try
> nodemon server.js

[nodemon] 2.0.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
todo list RESTful API server started on: 4000

```

Running the driver code -essentially acts as a client to the api

```
~esa-assign2/>python driver.py
```

## Running the tests

The python script has a set of functions created and can be called by the user to view/add/ remove data at any instant. Modify the script to create flow of data and test the microservice. The python script is well documented with each function and its inputs.


## Built With

* [Node.Js](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [MongoDb Atlas](https://maven.apache.org/) - Database Management
* [Python](https://rometools.github.io/rome/) - Microservice script


## Authors

* **Rohan Russel Nedungadi** - *Initial work* 

See also the list of [contributors](https://github.com/rohan9025/esa-assign2/contributors) who participated in this project.


## Acknowledgments

* Proff Raghu Kishore Neeliseti

