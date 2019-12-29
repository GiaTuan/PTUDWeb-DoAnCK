const pool = require('../../connection')
const passport = require('passport');
const bcrypt = require('bcryptjs');
const adminService = require('../../models/adminModels/adminService')
module.exports.getAdmin = async (req,res,next)=>{
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

module.exports.updateAdInfo = (req,res,next)=>{
    adminService.updateAdInfo(req,res,next);
}

module.exports.logOut = function(req,res,next){
    adminService.logOut(req,res,next);
}

module.exports.manageUser = function(req,res,next){
    adminService.getUsers(req,res,next);
}


module.exports.getUserDetail = (req,res,next)=>{
    adminService.getUserDetail(req,res,next);
}

module.exports.activateUser = (req,res,next) =>{
    adminService.activateUser(req,res,next);
}

module.exports.getOrders = (req,res,next) =>{
    adminService.getOrders(req,res,next);
}

module.exports.getOrderDetail = (req,res,next)=>{
    adminService.getOrderDetail(req,res,next);
}

module.exports.changeOrderState = (req,res,next)=>{
    adminService.changeOrderState(req,res,next);
}

module.exports.manageShop = (req,res,next)=>{
    adminService.manageShop(req,res,next);
}