const express = require('express');
const axios = require('axios');
const app = express();
let matchedHotels=[];
let returnedHotels = [{
    "id": "c9200b80-2218-4eb4-afab-cdfb51fd292a",
    "name": "quo eum perferendis",
    "country": "Netherlands Antilles",
    "city": "Handmouth",
    "price": 360,
    "images": [
    "http://lorempixel.com/640/480/city?49488",
    "http://lorempixel.com/640/480/city?10704",
    "http://lorempixel.com/640/480/city?74893",
    "http://lorempixel.com/640/480/city?54174",
    "http://lorempixel.com/640/480/city?66592",
    "http://lorempixel.com/640/480/city?90942"
    ],
    "date_start": "2020-10-01T23:31:14.119Z",
    "date_end": "2020-10-20T06:25:32.807Z",
    "stars": 4,
    "rating": 2.0802310233678614,
    "description": "Minima laboriosam inventore voluptas voluptates. Pariatur nihil praesentium aperiam vel debitis qui quam. Non culpa nobis natus. Sunt qui corrupti quas voluptatum itaque. Qui nihil dolor et adipisci."
    },
    {
    "id": "e9555a75-c612-4102-9d12-d2d50cd24b15",
    "name": "aeiciendis aut illo",
    "country": "Lebanon",
    "city": "New Donna",
    "price": 628,
    "images": [
    "http://lorempixel.com/640/480/city?1554",
    "http://lorempixel.com/640/480/city?40491",
    "http://lorempixel.com/640/480/city?93278",
    "http://lorempixel.com/640/480/city?93428",
    "http://lorempixel.com/640/480/city?19466",
    "http://lorempixel.com/640/480/city?95720",
    "http://lorempixel.com/640/480/city?86617",
    "http://lorempixel.com/640/480/city?64750"
    ],
    "date_start": "2020-04-01T23:31:14.119Z",
    "date_end": "2020-09-14T23:26:58.737Z",
    "stars": 2,
    "rating": 5.170137561973364,
    "description": "Mollitia aut et itaque et laudantium quod aliquam. Voluptatem neque omnis voluptatem natus inventore optio. Sit ad sed eius et in atque. Explicabo in est labore. Sit debitis expedita velit necessitatibus error quia perspiciatis. Odit aut vel temporibus sequi dolorem id optio."
    },
    {
    "id": "07963e49-1112-4c33-a5ab-de4eb2a46dd3",
    "name": "laboriosam dicta aperiam",
    "country": "Myanmar",
    "city": "Cierrahaven",
    "price": 839,
    "images": [
    "http://lorempixel.com/640/480/city?5998",
    "http://lorempixel.com/640/480/city?1585",
    "http://lorempixel.com/640/480/city?99947",
    "http://lorempixel.com/640/480/city?76602",
    "http://lorempixel.com/640/480/city?80878"
    ],
    "date_start": "2020-04-01T23:31:14.119Z",
    "date_end": "2020-07-07T08:37:54.467Z",
    "stars": 2,
    "rating": 5.617866902249492,
    "description": "Rerum esse amet quisquam at soluta necessitatibus ipsum officia nihil. Hic sed est voluptates. Omnis et error recusandae fugiat veritatis rem distinctio qui aut. Dicta rerum minima est odio error illo exercitationem. Reiciendis doloremque quas. Similique quidem culpa neque quia dolor."
    },
    {
    "id": "66d689ad-2839-4abe-bffc-3510dc24b2f9",
    "name": "est ut delectus",
    "country": "Zambia",
    "city": "Port Jewelburgh",
    "price": 431,
    "images": [
    "http://lorempixel.com/640/480/city?96017",
    "http://lorempixel.com/640/480/city?24190"
    ],
    "date_start": "2020-04-01T23:31:14.119Z",
    "date_end": "2020-10-10T02:21:11.620Z",
    "stars": 5,
    "rating": 0.36616830811708034,
    "description": "Nostrum ratione dolor magni et ipsa doloribus. Quo et rem est. Omnis quis ad blanditiis aut quis sed. Aut quod exercitationem vero. Est amet aut ut omnis. Ut nihil eum."
    }];
//const searchRouter =  require('./routes/searchRoute');
//const filterRouter =  require('./routes/filterRoute');




app.listen(3000,(err)=>{
    if (!err) console.log('server started on port 3000')
    else console.log(err)
})

app.get('/hotels/search/name/:id',(req,res)=>{
    matchedHotels=[];
    returnedHotels.map((hotel)=>{
        console.log(hotel.name);
        // console.log(req.params.id);
        //console.log(typeof(hotel.name));
        if(hotel.name.includes(req.params.id)){
            //res.send(hotel);
            matchedHotels.push(hotel)
            console.log('ok');
            // console.log(matchedHotels);
        }
        else {console.log('No matches')}
    
    
    })
    // axios({method:'get',
    //     url:'http://fake-hotel-api.herokuapp.com/api/hotels',
    //     responseType:'json'}).then((res)=>{
    //     //console.log(typeof(res.data));
        
    //     res.data.map((hotel)=>{
    //         //console.log(hotel.name);
    //         // console.log(req.params.id);
    //         //console.log(typeof(hotel.name));
    //         if(hotel.name.includes(req.params.id)){
    //             //res.send(hotel);
    //             matchedHotels.push(hotel)
    //             console.log('ok');
    //             console.log(matchedHotels);
                    
                    

    //         }
    //         else {console.log('no')}
        
    //     })
    //     //console.log(res.data);

        
    // }).catch((err)=>{
    //     console.log(err)
    // })
    res.send(matchedHotels);
})

app.get('/hotels/search/city/:id',(req,res)=>{
    matchedHotels=[];
    returnedHotels.map((hotel)=>{
        if(hotel.city.toLowerCase().includes(req.params.id)){
            matchedHotels.push(hotel);
        }
        else {console.log('No matches')};
    })

    res.send(matchedHotels);
    
})

app.get('/hotels/search/price',(req,res)=>{
    matchedHotels=[];
    returnedHotels.map((hotel)=>{
        if((hotel.price >= req.query.x) && (hotel.price <= req.query.y) ){
            matchedHotels.push(hotel);
        }
        else {console.log('No matches')};
    })

    res.send(matchedHotels);
    
})

app.get('/hotels/search/date/:id',(req,res)=>{
    matchedHotels=[];
    const dateAr = req.params.id.split(':');
    const fromA = dateAr[0].split('-');
    const toA = dateAr[1].split('-');
    console.log(toA)
    console.log(fromA)

    const from1 = (new Date(fromA[2],parseInt(fromA[1])-1,fromA[0]));
    const to1 = new Date(toA[2],parseInt(toA[1])-1,toA[0]);    
    //const from1 = new Date(dateAr[0]);
    //const to1 = new Date(dateAr[1]);

    returnedHotels.map((hotel)=>{
        const from2 = new Date (hotel.date_start);
        const to2 = new Date (hotel.date_end);
        console.log(from1);
        console.log(from2);
        console.log(to1);
        console.log(to2);

        if((from2 <= from1) && (to2 >= to1) ){
            console.log('ok')
            matchedHotels.push(hotel);
        }
        else {console.log('No matches')};
    })

    res.send(matchedHotels);
    
})



app.get('/hotels/sort/name',(req,res)=>{
    function sort_by_key(array, key) {

        return array.sort(function(a, b) {
    
        var x = a[key]; var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }
    returnedHotels = sort_by_key(returnedHotels,'name');
    res.send(returnedHotels);
    
})

app.get('/hotels/sort/price',(req,res)=>{
    function sort_by_key(array, key) {

        return array.sort(function(a, b) {
    
        var x = a[key]; var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }
    returnedHotels = sort_by_key(returnedHotels,'price');
    res.send(returnedHotels);
    
})

