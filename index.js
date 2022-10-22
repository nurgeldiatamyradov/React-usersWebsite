let express=require("express")
let app=express();

let cors = require('cors');
app.use(cors());

let router = express.Router();

router.get('/',function(req,resp,next){
    const data= [
        {
            name: 'joan',
            age: 25
          },
          {
            name: 'gage',
            age: 45
          },
          {
            name:'herde',
            age: 7
          }
    ]
    resp.send(data)
})

app.use('/api/',router)

app.listen(5000,function(){
    console.log("app is running")
})