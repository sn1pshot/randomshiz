const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const cloudinary = require("cloudinary").v2;

async function create_post(req,res){
    const{title,filename,fileURL,body,caption} = req.body;
    const newPost = await prisma.post.create({
        data:{
            title:title,
            filename:filename,
            fileURL:fileURL,
            body:body,
            caption:caption
        }
    })
    return res.status(200).json(newPost)
}