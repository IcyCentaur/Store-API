const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating:{
        type: Number,
        default: 3
    },
    dateOfOrigin:{
        type: Date,
        default: Date.now()
    },
    company:{
        type: String,
        enum:{
            values:   ['ikea', 'liddy', 'caressa', 'marcos'],
            message: `Not supported`            
        }
        //enum: ['ikea', 'liddy', 'caressa', 'marcos']
    }
})

module.exports = mongoose.model('Product', productSchema)

