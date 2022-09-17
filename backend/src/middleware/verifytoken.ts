const jwt=require("jsonwebtoken");
const jwt_decode=require("jwt-decode");

const verifyToken= async (req:any,res:any,next:any)=>{
    if(!req.headers["authorization"])
  return res.status(403).send("A token is required for authentication");
  const authorization:any =req.headers['authorization'];
  const accessToken:any =authorization.split(" ")[1];
  console.log(jwt_decode(accessToken))
  const {exp} :any=jwt_decode(accessToken);
  if(Date.now() >=exp*1000){
    return res.status(400).send("your token is expired !!");
  }
  try {
    const decode =jwt.verify(accessToken,process.env.JWT_SECRET_KEY);
    req.user=decode
  } catch (error) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

export default verifyToken;