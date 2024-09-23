const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    taste: {
        type:String,
        enum: ['sweet', 'spicy', 'soup'],
        require:true
    },
    is_drink: {
        type:Boolean,
        default:false
    },
    ingradients: {
        type:[String],
        default:[]
    },
    num_sales: {
        type:Number,
        defualt:0
    }
});

const Menuitem = mongoose.model('Menuitem',itemSchema);

module.exports = Menuitem;