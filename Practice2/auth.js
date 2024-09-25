const Employee = require('./module/employeers');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


passport.use(new LocalStrategy (async (USERNAME, password ,done) => {
    //Authentication logic here
    try {
        console.log(`Recived credentail: `, USERNAME, password);
        const user = await Employee.findOne({username: USERNAME});

        if(!user) {
            return done(null, false, {message: "Incorrect username"})
        }

        const isPasswordMatch = user.password == password ? true : false;

        if(isPasswordMatch){
            return done(null, user);
        }
        else{
            return done(null, false, {message: "Incorrect password"})
        }

    } catch (error) {
        return done(error);
    }
}));

module.exports = passport;