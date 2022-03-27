const myModel = require("../models/model");

// registration controller
const registerController = async (req, res) => {
    const {name, email, password, confirmPassword} = req.body;

    // matching email
    const findEmail = await myModel.findOne({email:email});
    if(findEmail){
      res.send({status:"failed", message : 'Email already exists'});
    }
    else{

        if(name && email && password && confirmPassword){
            if(password === confirmPassword){
                try{
                  const user = new myModel({
                    name : name,
                    email : email,
                    password : password,
                  })
                  await user.save()
                  res.send({status:"true", message : 'Data send seuccessfully'});

                }
                catch(error){error, res.send({status:'failed',message:'failed to register'})}
            }else{
              res.send({status:"failed", message : 'password & confirmpassword does not match'});
            }
        }
        else{
          res.send({status:"failed", message : 'fill all the fields'});
        }


    }
}

// login controller
const loginController = async (req,res) => {
    const {email, password} = req.body;
    const findUser = await myModel.findOne({email:email,password:password});
    if(findUser){
      res.send({message:'User found', Data:req.body})
    }
    else{
      res.send({message:'User not found', Data:req.body})
    }
}

module.exports = { registerController, loginController };
