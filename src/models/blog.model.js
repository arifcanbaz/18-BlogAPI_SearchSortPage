"use strict"
/*
    BLOG API MODELS
*/

const mongoose = require("mongoose")

// BLOG CATEGORY:
const blogCategorySchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true
    },

}, {
    collection: 'blogCategory',
    timestamps: true
})


// BLOG POST:
const blogPostSchema = new mongoose.Schema({
    
    blogCategoryId: {
        type: mongoose.Schema.Types.ObjectId, // ForeignKey, RelationalID
        ref: 'BlogCategory', // Model Name
        required: true,
    },

    title: {
        type: String,
        trim: true,
        required: true
    },

    content: {
        type: String,
        trim: true,
        required: true
    },

    published: {
        type: Boolean,
        default: true
    }

    //  createdAt //  updatedAt

}, {
    collection: "blogPost",
    timestamps: true
})
// mongoose.model('model ismi','hangi şemadan')

// const BlogPostModel= mongoose.model('BlogPost',blogPostSchema)
// module.exports={
//     BlogPost: BlogPostModel,

// }

module.exports = {
    BlogCategory: mongoose.model('BlogCategory', blogCategorySchema),
    BlogPost: mongoose.model('BlogPost', blogPostSchema),
}



// const nameSchema= new mongoose.Schema({fields},{tablo adı})
/*
const nameSchema= new mongoose.Schema(
    {
        //    _id: // auto created and increment

        // fieldName: Type // short form
        // fieldName: String,
        // fieldName2: BigInt

        fieldName: {
            type: String,
            default: null,
            trim: true,  
            unique: true, // benzersiz kayıt
            select: false, //model çağrıldığında gelsinmi
            index: false, // aramalarda erişimi hızlandırır
            required: true, // veri girişi gerklimi
            required: [true, 'error message'], // gereklimi değilmi , hata mesajı
            enum:[[1,2,3],'error message'], // belirli bir pattern e göre veri girişi
            validate: [function(data){ return true},'error message'],// veri fonksiyon ile doğrulama
            get: function(data){ return data} ,      // veriyi çağırırken çalışacak fonksiyon
            set: function(data){ return data}       // veriyi kaydederken çalışacak fonksiyon
        }
    },
    {
        collection:'collectionName', // tablo ismi
        timestamps: true // createdate, updateDate
    }
)*/
