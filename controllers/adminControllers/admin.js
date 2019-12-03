const pool = require('../../connection')
const passport = require('passport');
const bcrypt = require('bcryptjs');
const adminService = require('../../models/adminModels/adminService')
module.exports.getAdmin =function(req,res,next){
    adminService.getAdmin(req,res,next);
}

module.exports.signIn = function(req,res,next){
    adminService.signIn(req,res,next);
}

module.exports.getSignUp = function(req,res,next){
    adminService.getSignUp(req,res,next);
}

module.exports.postSignUp =function(req,res,next){
    adminService.postSignUp(req,res,next);
}


module.exports.getAdInfo = function(req,res,next){
    
    adminService.getAdInfo(req,res,next);
}

module.exports.logOut = function(req,res,next){
    adminService.logOut(req,res,next);
}

module.exports.manageUser = function(req,res,next){
    adminService.getUsers(req,res,next);
}