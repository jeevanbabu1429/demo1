const mongoose = require("mongoose");
// Middleware
const db = 'mongodb+srv://pavithrabindu2003:iPqE7R6Yyv6Wslp6@cluster0.mm1hj.mongodb.net/'

// Connect to MongoDB using the connection string
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {
  console.log(`No connection: ${e}`);
});

// mongodb://localhost:27017