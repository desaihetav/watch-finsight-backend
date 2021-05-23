// TODO
// 1. Add routing on backend
// 2. Middleware to validate email and password

const express = require('express');
const cors = require('cors')
const uuid = require('uuid')
const bodyParser = require('body-parser');

const { initializeDBConnection } = require('./config/db.connect.js');

const { users } = require('./data.js');
const { seedVideos } = require('./utils/seedVideos.js');

const login = require("./routes/login.router");
const signup = require("./routes/signup.router");
const videos = require("./routes/videos.router");
const playlists = require("./routes/playlists.router");

var corsOptions = {
  // origin: 'https://watch-finsight.vercel.app'
}

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());

// called before any route handler
initializeDBConnection();

// seedVideos();

app.use("/login", login);
app.use("/signup", signup);
app.use("/videos", videos);
app.use("/playlists", playlists);

const findUserByEmail = (email) => {
  return users.find(user => user.email === email);
}

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

// app.post('/login', (req, res) => {
//   const { email, password } = req.body;
//   const user = findUserByEmail(email);
//   if(user){
//     console.log("here");
//     user.password === password ? res.json({user, success: true, message: "Login Successful."}) : res.json({user: null, success: false, message: "Invalid Password. Please try again."});
//   }
//   res.json({user: null, status: false, message: "No account found with entered email id."});
// });

// app.post('/signup', (req, res) => {
//   const { name, email, password } = req.body;
//   const user = findUserByEmail(email);
//   // add validation for email and password too
//   if(user){
//     res.json({status: false, message: "Account with entered email id already exists. Try loggin in instead!"});
//   } else{
//     const newUser = {id: uuid.v4(), name, email, password, createdAt: Date(), updatedAt: Date(), deletedAt: null};
//     users.push(newUser);
//     res.json({user: newUser, success: true, message: 'Signed up successfully.'});
//   }
//   console.log(users);
// })

app.post('/account', (req, res) => {
  const updatedAccountDetails = req.body;
  const { id } = updatedAccountDetails;
  let updatedUser = null;

  users.forEach(user => {
    if (user.id === id) {
      Object.keys(updatedAccountDetails).forEach(key => {
      if (key in user) {
        user[key] = updatedAccountDetails[key]
      }
     })
     user['updatedAt'] = Date()
     updatedUser = user;
    }
  })

  res.json({user: updatedUser, success: true, message: 'Account Details Updated Successfully'})
})

// app.get('/videos', (req, res) => {
//   res.json(videos);
// });

// app.get('/videos/:id', (req, res) => {
//   const {id} = req.params;
//   const video = videos.find(video => video.id === id);
//   res.json(video);
// });

app.listen(3000, () => {
  console.log('server started');
});