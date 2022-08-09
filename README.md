# Our MongoDB Api

This project showcases what we've learned to make an api that will access a "movie" collection in our mongoDB database

## To get started

1) Clone it locally and run  ```npm i``` (in the terminal) to install all dependencies 
2) rename the ```credentials-example.js``` to ```credentials.js``` and edit the ```uri``` string to either be the one you get from your own cloud.mongodb.com cluster (under the "connect" button)  OR you can us ```mongodb://localhost:27017``` if you want to connect to a local instance.
3) you can add new movies by sending a valid JSON body to```http://localhost:4001/add-movie``` and get movies by going to ```http://localhost:4001/get-movies```
