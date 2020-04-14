# Hotels API

hotels api is a Node Js Api which used to search and sort Hotels according to different criterias like name,price,data range and city

# Prerequisites

npm +6 , Node js +12 , nodemon , Visual studio Code and git

# installation 

- Download or clone the project file
- Navigate to project folder and type code . to open visual studio code
- open a browser tab on the local host port 3000 (http://127.0.0.1:3000)
- in the visual studio code terminal (ctrl+`) type the following

```bash
node index.js
```
- that will run the project and the node server will be opened and ready for listening to http requests with a different end points.

# Usage

search for a hotels according to a certain creiterias due to the following end points:

- search for a hotel by **name**

GET to the Path : http://127.0.0.1:3000/hotels/search/name/the hotel name

- search for a hotel by **City**

GET to the path : http://127.0.0.1:3000/hotels/search/city/the city name

- search for a hotel by **price range**

GET to the path : http://127.0.0.1:3000/hotels/search/price/?x=price1&y=price2

- search for a hotel by **date range**

GET to the path : http://127.0.0.1:3000/hotels/date1:date2

- Sort the Hotels according to **name**

GET to the path http://127.0.0.1:3000/hotels/sort/name

- Sort the hotels according to **price**

GET to the path http://127.0.0.1:3000/hotels/sort/price
