const express = require('express');
const hbs = require('hbs');

// Express server instance
const app = express();

hbs.registerPartials(__dirname + '/views/partials');


// Configure the express server
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');



app.use(express.static('public'));

// Controller functions aka "routes"

app.get('/',(req,res) => {
    res.render('home',{
        title:"Home",
        members:[
            {
                name: "Homer",
                image: "https://fotografias.antena3.com/clipping/cmsimages01/2016/11/18/23E32569-2D66-4816-BB2A-F91753DA705D/58.jpg"
            },
            {
                name: "Bart",
                image: "https://img.huffingtonpost.com/asset/579f38881200007404a54711.jpeg?ops=crop_0_104_736_464,scalefit_720_noupscale"
            }
        ]
    });
})

app.get('/productos',(req,res) => {
    res.render('productos',{title: "Productos"});
})


app.get('/demo', (req, res) => {
    console.log("Getting home");
    const homers = [
        "https://media.giphy.com/media/a93jwI0wkWTQs/giphy.gif",
        "https://media.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.gif"
    ];
    const data = {
        name: "<i>Pepe</i>",
        image: '',
        images: homers,
        defaultIndex:0,
        address: {
            street: "Your heart",
            number: 87
        }
    };
    if(Math.random() > 0.5){
        data.image = homers[0];
        data.defaultIndex = 0;
    }else{
        data.image = homers[1];
        data.defaultIndex = 1;
    }
    res.render('index_demo', data);
})


const port = 3000;
app.listen(port, () => {
    console.log(`Ready http://localhost:${port}`)
})