var User = require('../model/user');

// home page
exports.home = (req,res)=>{
    res.render('home');
};

// list of all users
exports.listAllUsers = (req,res) => {    
    User.find({},(err,data)=>{
        if(err){throw err;}
        else{
            console.log(data);
            res.render('all_users',{users:data});
        }
    })   
};

// user profile 
exports.userProfile = (req,res) =>{    
    User.findById({"_id":req.params.id},(err,data)=>{
        if(err){throw err;}
        else{
            console.log(data);
            res.render('profile',{profileData:data});
        }
    });
};

// reg to database
exports.regToDatabase = (req,res)=>{
    var newUser = new User({
        name : req.body.name,
        email : req.body.email,
        address : req.body.address,
        mobile : req.body.mobile,
        feedback : req.body.feedback            
    });
    User.create(newUser,(err,data)=>{
        if(err){
            throw err;
        }else{
            res.render('profile',{profileData:data}); 
        }        
    });
};

// edit profile
exports.editProfile = (req,res)=>{
    var newUser = {
        name : req.body.name,
        email : req.body.email,
        address : req.body.address,
        mobile : req.body.mobile,
        feedback : req.body.feedback                 
    };   
    

    User.update({_id:req.body.id},newUser,(err,data)=>{
        if(err){
            throw err;
        }else{
            return res.redirect('/user/'+req.body.id);            
        }        
    });
};

// delete user
exports.userDelete = (req,res)=>{

  User.deleteOne({_id:req.params.id}, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    return res.redirect('/all_users');      
  });
};

