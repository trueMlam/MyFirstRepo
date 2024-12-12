function validateData(req,res,next){
  const {title,date}=req.body;
  if(!title||!date){
 return res.status(400).send('title and date required')
}
next();
}

function errorHandler(err,req,res,next){
  console.error(err.stack);
  res.status(500).send('unable to load data.');
}

module.exports={validateData,errorHandler}