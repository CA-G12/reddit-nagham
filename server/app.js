const compression = require("compression");
var multipart = require('connect-multiparty');
const cookieParser = require("cookie-parser");
const router = require("./routers");
const express = require("express");
const { join, dirname } = require('path');
const multipartMiddleware = multipart();
const fs = require('fs');


const app = express();
app.set("port", process.env.PORT || 9000);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());
app.use(cookieParser());
app.use(express.static(join(__dirname,"..","public")));

app.set("view engine", "ejs"); 
app.post('/upload',multipartMiddleware,(req,res)=>{
    // try {
    //     fs.readFile(req.files.upload.path, function (err, data) {
    //         var newPath = __dirname + '/public/images/' + req.files.upload.name;
    //         fs.writeFile(newPath, data, function (err) {
    //             if (err) console.log({err: err});
    //             else {
    //                 console.log(req.files.upload.originalFilename);
    //             //     imgl = '/images/req.files.upload.originalFilename';
    //             //     let img = "<script>window.parent.CKEDITOR.tools.callFunction('','"+imgl+"','ok');</script>";
    //             //    res.status(201).send(img);
                 
    //                 let fileName = req.files.upload.name;
    //                 let url = '/images/'+fileName;                    
    //                 let msg = 'Upload successfully';
    //                 let funcNum = req.query.CKEditorFuncNum;
    //                 console.log({url,msg,funcNum});
                   
    //                 res.status(201).send("<script>window.parent.CKEDITOR.tools.callFunction('"+funcNum+"','"+url+"','"+msg+"');</script>");
    //             }
    //         });
    //     });
    //    } catch (error) {
    //        console.log(error.message);
    //    }
    console.log(req.body, req.files);
})

app.use(router);

module.exports = app;

