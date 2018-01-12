const app = require('express')();
const authRoutes = require('./routes/auth-routes');
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
  res.render('home');
});

app.use('/auth', authRoutes);
  
app.listen(3000,()=>{
  console.log("running 3000");
})
