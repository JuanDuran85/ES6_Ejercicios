var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var Schema = mongoose.Schema;

var userSchema = Schema(
  {
    name: { type: String, default: "", required: true },
    lastname: { type: String, default: "", required: true },
    email: { type: String, default: "", required: true },
    password: { type: String, default: "", required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    deleted: { type: Boolean, default: false }
  },
  { collection: "user", usePushEach: true }
);

userSchema.pre('save', function(next){
    var user = this;
    if (!user.isModified('password')) 
    returnnext();
    if (typeofuser.password!='undefined'){
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                user.password=hash;
                next();            
            });        
        });    
    }});

    module.exports = mongoose.model('User', userSchema);