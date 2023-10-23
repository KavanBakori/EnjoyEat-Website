const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { User, Authuser, Restaurant, Requests,History, connectToDatabase } = require('./dbschemas'); // Import User, Authuser models and connectToDatabase function
const app = express();
const nodemailer = require("nodemailer");

connectToDatabase(); // Connect to the database

app.use(cors());
app.use(bodyParser.json());

app.post('/', async (req, res) => {
    try {
        // Create a new User instance and set the properties
        const user = new User({
            name: req.body.first,
            surname: req.body.last,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
            birth: req.body.birthdate,
            gender: req.body.gender,
            address: req.body.address,
            country: req.body.country,
            state: req.body.state,
            city: req.body.city,
            region: req.body.region,
            postal: req.body.pin,
        });


        const restaurant = new Restaurant({
            resname: req.body.resname,
            tagline: req.body.tagline,
            ownername: req.body.ownername,
            owneremail: req.body.owneremail,
            ownercontact: req.body.ownercontact,
            opentime: req.body.opentime,
            closetime: req.body.closetime,
            rescontact: req.body.rescontact,
            reswebsite: req.body.reswebsite,
            resaddress: req.body.resaddress,
            resstate: req.body.resstate,
            rescity: req.body.rescity,
            respin: req.body.respin,
            totalpersons: req.body.totalpersons,
            availableseats: 0,
            food: req.body.selectedFoods,
            describe: req.body.describe,
        });

        const authuser = new Authuser({
            email: req.body.email,
            password: req.body.password,
            name: req.body.resname,

        });

        // Save the user and authuser to the respective collections
        const savedUser = await user.save();
        const savedauthuser = await authuser.save();
        const savedrestaurant = await restaurant.save();

        console.log(savedUser);
        console.log(savedauthuser);
        console.log(savedrestaurant);
        res.status(201).json(savedUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});


app.get('/admin/:resname', async (req, res) => {
    try {
        const resname = req.params.resname; // Get the restaurant name from the URL parameter

      const request = await Requests.find({Restaurantname:resname}); // Retrieve all records from the "requests" collection
  
      res.status(200).json(request);
    } catch (error) {
      console.error('Error fetching requests:', error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });

app.get('/availableseats/:resname', async (req, res) => {
    try {
        const resname = req.params.resname; // Get the restaurant name from the URL parameter
      const availableseats = await Restaurant.find({resname:resname});
      res.status(200).json(availableseats);
    } catch (error) {
      console.error('Error fetching requests:', error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });


app.get('/allrestaurants', async (req, res) => {
    try {
      const allrestaurants = await Restaurant.find({});
      res.status(200).json(allrestaurants);
    } catch (error) {
      console.error('Error fetching requests:', error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  

app.put('/updateseats/:resname', async (req, res) => {
    try {
        const resname = req.params.resname; // Get the restaurant name from the URL parameter
        const newAvailableSeats = req.body.availableseats; // Get the new available seats value from the request body

        // Find the restaurant with the specified name and update its available seats
        const updatedRestaurant = await Restaurant.findOneAndUpdate(
            { resname: resname },
            { $set: { availableseats: newAvailableSeats } },
            { new: true }
        );

        res.status(200).json(updatedRestaurant);
    } catch (error) {
        console.error('Error updating available seats:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.post('/history',async(req,res)=>{
   try{

   
    const { name, email, call,persons,Restaurantname } = req.body;
    const final = new History({

        name:name,
        email:email,
        call:call,
        persons:persons,
        Restaurantname:Restaurantname
    })
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
          user: 'kavan2269@gmail.com',
          pass: 'lkbg cjvz yxab wgbl'
      }
  });
  const mailOption = {
    from: 'kavan2269@gmail.com',
    to: email,
    subject: 'From EnjoyEat',
    html: '<p> Hello ' + name + ' </br> <h1>Please come after 10 minutes. </h1> </br> <p>Elevate your dining experience with Enjoy Eat, a cutting-edge restaurant queue management system that lets you savor your meal stress-free, ensuring you make the most of your time at your favorite eatery</P> <p>' 
}
// console.log(mailOption);
transporter.sendMail(mailOption, function (error, info) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Email sent");
    }
});
       
    const result = await final.save();
    const deletedEntry = await Requests.findOneAndDelete({ name, email, call,Restaurantname });
    if (deletedEntry) {
        res.status(200).json({ message: 'Entry stored in history and deleted from request' });
      } else {
        res.status(404).json({ error: 'Entry not found in request' });
      }
    console.log(result);
   }catch(e){
    console.log(e);
   }

})

app.get('/fetchhistory/:resname', async (req,res)=>{
   try{
    const resname = req.params.resname;
    const history = await History.find({Restaurantname:resname});
    res.json(history);
   }catch(e){
    console.log(e);
   }
})


app.post('/login', async (req, res) => {
  console.log(req.body.email)
  try {
    const check = await Authuser.findOne({ email: req.body.email });
    if (check && check.password === req.body.password && check.name === req.body.name) {
      res.json({ success: true });
    } else {
      res.json({ success: false});
    }
  } catch (error) {
    console.error('An error occurred', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});


app.post('/tablebook', async (req, res) => {
    try {
        // Create a new User instance and set the properties
        const requests = new Requests({
            name: req.body.Coustumername,
            email: req.body.Coustumeremail,
            call: req.body.Coustumercall,
            persons: req.body.CustomerCount,
            Restaurantname: req.body.Restaurantname, 
        });
        const savedrequests = await requests.save();

        console.log(savedrequests);

        res.status(201).json(savedrequests);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.listen(3001, () => {
    console.log('Server running');
});
