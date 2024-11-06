const express = require("express");
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 80;

app.get("/version",(req,res)=>{
res.send("v1")

})

app.use(express.static("dist"));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
