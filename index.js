const express = require("express");
const app = express();

// Route for the about page
app.get("/about", (req, res) => {
  res.send("This is the about page");
});

// Route for the contact page
app.get("/contact", (req, res) => {
  res.send("This is the contact page");
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
