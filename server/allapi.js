// const { User, Authuser, Restaurant, Requests } = require('./dbschemas'); 

// const registration = async (req, res) => {
//     try {
//         // Create a new User instance and set the properties
//         const user = new User({
//             name: req.body.first,
//             surname: req.body.last,
//             email: req.body.email,
//             password: req.body.password,
//             phone: req.body.phone,
//             birth: req.body.birthdate,
//             gender: req.body.gender,
//             address: req.body.address,
//             country: req.body.country,
//             state: req.body.state,
//             city: req.body.city,
//             region: req.body.region,
//             postal: req.body.pin,
//         });


//         const restaurant = new Restaurant({
//             resname: req.body.resname,
//             tagline: req.body.tagline,
//             ownername: req.body.ownername,
//             owneremail: req.body.owneremail,
//             ownercontact: req.body.ownercontact,
//             opentime: req.body.opentime,
//             closetime: req.body.closetime,
//             rescontact: req.body.rescontact,
//             reswebsite: req.body.reswebsite,
//             resaddress: req.body.resaddress,
//             resstate: req.body.resstate,
//             rescity: req.body.rescity,
//             respin: req.body.respin,
//             totalpersons: req.body.totalpersons,
//             food: req.body.selectedFoods,
//             describe: req.body.describe,
//         });

//         const authuser = new Authuser({
//             email: req.body.email,
//             password: req.body.password,
//         });

//         // Save the user and authuser to the respective collections
//         const savedUser = await user.save();
//         const savedauthuser = await authuser.save();
//         const savedrestaurant = await restaurant.save();

//         console.log(savedUser);
//         console.log(savedauthuser);
//         console.log(savedrestaurant);
//         res.status(201).json(savedUser);
//     } catch (error) {
//         console.error('Error creating user:', error);
//         res.status(500).json({ error: 'An error occurred' });
//     }
// }



// const tablebook =  async (req, res) => {
//     try {
//         // Create a new User instance and set the properties
//         const requests = new Requests({
//             name: req.body.Coustumername,
//             email: req.body.Coustumeremail,
//             call: req.body.Coustumercall,
//             persons: req.body.CustomerCount,
//             Restaurantname: req.body.Restaurantname, 
//         });
//         const savedrequests = await requests.save();

//         console.log(savedrequests);

//         res.status(201).json(savedrequests);
//     } catch (error) {
//         console.error('Error creating user:', error);
//         res.status(500).json({ error: 'An error occurred' });
//     }
// }



// module.exports = registration ;
// module.exports = tablebook ;


