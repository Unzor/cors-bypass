var express=require('express');
var app=express();
var bodyParser=require('body-parser');
app.use(express.json());
app.use(require('express-all-allow')());
var axios=require('axios');

function method(a){
  eval(`app.${a}('/${a}', async function(req, res){
  var response = await axios.${a}(req.query.url, req.body);
  res.send(response.data);
  })`);
};

method('get');

method('post');

method('put');

method('delete')

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
