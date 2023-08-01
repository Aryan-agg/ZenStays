// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("./models/User.js");
// const Place= require("./models/Place.js");
// const Booking = require("./models/Booking.js")
// const cookieParser = require("cookie-parser");
// const imageDownloader = require("image-downloader");
// const multer=require("multer");
// const fs = require("fs");
// require("dotenv").config();
// const app = express();

// const bcryptSalt = bcrypt.genSaltSync(10);
// const jwtSecret = "dfsfsdfsdfdsfdsfdsfs";

// app.use(express.json());
// app.use(cookieParser());
// app.use('/uploads', express.static(__dirname + '/uploads'))

// app.use(
//   cors({
//     credentials: true,
//     origin: "http://localhost:5173",
//   })
// );
// // console.log(process.env.MONGO_URL);
// mongoose.connect(process.env.MONGO_URL);


// function getUserDataFromToken(req) {
//   return new Promise((resolve, reject) =>{
//     jwt.verify(req.cookies.token, jwtSecret, {}, async (err, user) => {
//       if(err) throw err;
//       resolve(user);
//     });
//   });
 
// }

// app.get("/test", (req, res) => {
//   res.json("test ok");
// });

// app.post("/register", async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const userDoc = await User.create({
//       name,
//       email,
//       password: bcrypt.hashSync(password, bcryptSalt),
//     });

//     res.json(userDoc);
//   } catch (e) {
//     res.status(422).json(e);
//   }
// });


// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   const userDoc = await User.findOne({ email });
//   if (userDoc) {
//     // res.json('found');
//     const passOk = bcrypt.compareSync(password, userDoc.password);
//     if (passOk) {
//       jwt.sign(
//         { email: userDoc.email, id: userDoc._id },
//         jwtSecret,
//         {},
//         (err, token) => {
//           if (err) throw err;
//           res.cookie("token", token).json(userDoc);
//         }
//       );
//     } else {
//       res.status(422).json("pass not Ok");
//     }
//   } else {
//     ("not found");
//   }
// });

// // app.get("/profile", (req, res) => {
// //   const { token } = req.cookies;
// //   if (token) {
// //     jwt.verify(token, jwtSecret, {}, async (err, user) => {
// //       if (err) throw err;
// //       const {name , email ,_id}=await User.findById(userData.id);
// //       res.json({name,email,_id});
// //     });
// //   } else {
// //     res.json(null);
// //   }
// //   res.json({ token });
// // });

// app.get("/profile", (req, res) => {
//   const { token } = req.cookies;
//   if (token) {
//     jwt.verify(token, jwtSecret, {}, async (err, user) => {
//       if (err) throw err;
//       const { name, email, _id } = await User.findById(user.id);
//       res.json({ name, email, _id });
//     });
//   } else {
//     res.json(null);
//   }
// });

// app.post('/logout',(req,res)=>{
//   res.cookie('token','').json(true);
// })


// app.post('/upload-by-link', async (req, res) => {
//   try {
//     const { link } = req.body;
//     const newName = 'photo'+Date.now() + '.jpg';
//     await imageDownloader.image({
//       url: link,
//       dest: __dirname + '/uploads/' + newName,
//     });
//     res.json(newName);
//   } catch (err) {
//     console.error(err);
//   }
// });

// const photosMiddleware =multer({dest:'uploads'})
// app.post('/upload',photosMiddleware.array('photos',100),(req, res) => {
//   const uploadedFiles=[];
//   for( let i = 0; i <req.files.length; i++ )
//   {
//     const {path,originalname}= req.files[i];
//     const parts= originalname.split('.');
//     const ext=parts[parts.length-1];
//     const newPath= path + '.' + ext;
//     fs.renameSync(path,newPath);
//     uploadedFiles.push(newPath.replace('uploads\\','').replace(/\\/g, '/'));

//   }
//   res.json(uploadedFiles);

// })

// // app.post('/places',function(req, res) {
// //   const { token } = req.cookies;
// //   const {title,address,description,perks,
// //   extraInfo,checkIn,checkOut,maxGuests} = req.body;
// //   jwt.verify(token, jwtSecret, {}, async (err, user) => {
// //     if (err) throw err;
// //   const placeDoc= await Place.create({
// //       owner: user.id,
// //       title,address,description,perks,
// //       extraInfo,checkIn,checkOut,maxGuests,

// //     })
// //   });
// //   res.json(placeDoc);
// // });

// app.post('/places', function (req, res) {
//   const { token } = req.cookies;
//   const {
//     title,
//     address,
//     addedPhotos,
//     description,
//     perks,
//     extraInfo,
//     checkIn,
//     checkOut,
//     maxGuests,
//     price,
//   } = req.body;

//   jwt.verify(token, jwtSecret, {}, async (err, user) => {
//     if (err) throw err;

//     const placeDoc = await Place.create({
//       owner: user.id,
//       price,
//       title,
//       address,
//       photos:addedPhotos,
//       description,
//       perks,
//       extraInfo,
//       checkIn,
//       checkOut,
//       maxGuests,
//     });

//     res.json(placeDoc);
//   });
// });


// app.get('/user-places', (req, res) => {
//   const { token } = req.cookies;
//   jwt.verify(token, jwtSecret, {}, async (err, user) => {
//     const{id} =user;
//     res.json(await Place.find({owner : id}))
//   });
// });


// app.get('/places/:id', async(req, res) => {
//   const {id}=req.params;
//   res.json(await Place.findById(id));
// });


// app.put('/places', async(req, res) => {
//   const { token } = req.cookies;
//   const {
//     id,
//     title,
//     address,
//     addedPhotos,
//     description,
//     perks,
//     extraInfo,
//     checkIn,
//     checkOut,
//     maxGuests,
//     price,
//   } = req.body;

 

//   jwt.verify(token, jwtSecret, {}, async (err, user) => {
//     if(err) throw err;
//     const placeDoc= await Place.findById(id);
//     if(user.id === placeDoc.owner.toString())
//     {
//       placeDoc.set({
//         title,
//         address,
//         photos:addedPhotos,
//         description,
//         perks,
//         extraInfo,
//         checkIn,
//         checkOut,
//         maxGuests,
//         price,
//       });
//       await placeDoc.save();
//       res.json('ok');
//     }
//   });

// });


// app.get('/places',async (req, res) => {
//   res.json(await Place.find())
// })


// // app.post('/bookings',async(req, res) => {
// //   const user=await getUserDataFromToken(req);
// //   const{place,checkIn,checkOut,numberOfGuests,name,phone,price}=req.body;
 
// //   Booking.create({
// //     place,checkIn,checkOut,numberOfGuests,name,phone,price, user2:user.id,
// //   }).then((doc)=>{
    
// //     res.json(doc);
// //   }).catch((err) =>{
// //     throw err;
// //   });
// // });









// app.post('/bookings', async (req, res) => {
//   const { place, checkIn, checkOut, numberOfGuests, name, phone, price } = req.body;

//   try {
//     const userId = req.user.id; // Assuming you have middleware that sets req.user with the authenticated user's data

//     const booking = await Booking.create({
//       place,
//       checkIn,
//       checkOut,
//       numberOfGuests,
//       name,
//       phone,
//       price,
//       user: userId,
//     });

//     res.json(booking);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while creating the booking.' });
//   }
// });


// app.get('/bookings',async (req,res) =>{
//  const user=await getUserDataFromToken(req);
//  res.json(await Booking.find({user2:user.id}).populate('place'))
// });

// app.listen(4000);



const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/User.js");
const Place = require("./models/Place.js");
const Booking = require("./models/Booking.js");
const cookieParser = require("cookie-parser");
const imageDownloader = require("image-downloader");
const multer = require("multer");
const fs = require("fs");
require("dotenv").config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "dfsfsdfsdfdsfdsfdsfs";

app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

// mongoose.connect('mongodb+srv://aryan23agarwal:IstvLBX3fVytHZvW@cluster0.62riuho.mongodb.net/?retryWrites=true&w=majority')

mongoose.connect(process.env.MONGO_URL).then((data) => {
  console.log(`Connected to MongoDB: ${data.connection.host}`);
  });
// O5HxLb6PMM6k5GC2
// mongoose.connect(
//   process.env.MONGO_URL,
//   { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
//   () => {
//     console.log('Connected to MongoDB');
//   }
// );




function getUserDataFromToken(req) {
  return new Promise((resolve, reject) => {
    jwt.verify(req.cookies.token, jwtSecret, {}, async (err, user) => {
      if (err) reject(err);
      resolve(user);
    });
  });
}

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });

    res.json(userDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign(
        { email: userDoc.email, id: userDoc._id },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(userDoc);
        }
      );
    } else {
      res.status(422).json("Password is incorrect.");
    }
  } else {
    res.status(404).json("User not found.");
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, user) => {
      if (err) throw err;
      const { name, email, _id } = await User.findById(user.id);
      res.json({ name, email, _id });
    });
  } else {
    res.json(null);
  }
});

app.post('/logout', (req, res) => {
  res.clearCookie('token').json(true);
});

app.post('/upload-by-link', async (req, res) => {
  try {
    const { link } = req.body;
    const newName = 'photo' + Date.now() + '.jpg';
    await imageDownloader.image({
      url: link,
      dest: __dirname + '/uploads/' + newName,
    });
    res.json(newName);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while uploading the image.' });
  }
});

const photosMiddleware = multer({ dest: 'uploads' });

app.post('/upload', photosMiddleware.array('photos', 100), (req, res) => {
  const uploadedFiles = [];
  for (let i = 0; i < req.files.length; i++) {
    const { path, originalname } = req.files[i];
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path + '.' + ext;
    fs.renameSync(path, newPath);
    uploadedFiles.push(newPath.replace('uploads\\', '').replace(/\\/g, '/'));
  }
  res.json(uploadedFiles);
});

app.post('/places', async (req, res) => {
  const { token } = req.cookies;
  const {
    title,
    address,
    addedPhotos,
    description,
    perks,
    extraInfo,
    checkIn,
    checkOut,
    maxGuests,
    price,
  } = req.body;

  jwt.verify(token, jwtSecret, {}, async (err, user) => {
    if (err) throw err;

    const placeDoc = await Place.create({
      owner: user.id,
      price,
      title,
      address,
      photos: addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
    });

    res.json(placeDoc);
  });
});

app.get('/user-places', (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, jwtSecret, {}, async (err, user) => {
    const { id } = user;
    res.json(await Place.find({ owner: id }));
  });
});

app.get('/places/:id', async (req, res) => {
  const { id } = req.params;
  res.json(await Place.findById(id));
});

app.put('/places', async (req, res) => {
  const { token } = req.cookies;
  const {
    id,
    title,
    address,
    addedPhotos,
    description,
    perks,
    extraInfo,
    checkIn,
    checkOut,
    maxGuests,
    price,
  } = req.body;

  jwt.verify(token, jwtSecret, {}, async (err, user) => {
    if (err) throw err;

    const placeDoc = await Place.findById(id);
    if (user.id === placeDoc.owner.toString()) {
      placeDoc.set({
        title,
        address,
        photos: addedPhotos,
        description,
        perks,
        extraInfo,
        checkIn,
        checkOut,
        maxGuests,
        price,
      });
      await placeDoc.save();
      res.json('ok');
    } else {
      res.status(403).json("You don't have permission to edit this place.");
    }
  });
});

app.get('/places', async (req, res) => {
  res.json(await Place.find());
});

app.post('/bookings', async (req, res) => {
  const { token } = req.cookies;
  const { place, checkIn, checkOut, numberOfGuests, name, phone, price } = req.body;

  jwt.verify(token, jwtSecret, {}, async (err, user) => {
    if (err) throw err;

    try {
      const booking = await Booking.create({
        place,
        checkIn,
        checkOut,
        numberOfGuests,
        name,
        phone,
        price,
        user: user.id, // Set the user field to the user id obtained from the token
      });

      res.json(booking);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while creating the booking.' });
    }
  });
});

app.get('/bookings', async (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, jwtSecret, {}, async (err, user) => {
    if (err) throw err;
    const bookings = await Booking.find({ user: user.id }).populate('place');
    res.json(bookings);
  });
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
