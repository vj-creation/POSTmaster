const { uploadPhotoToInstagram } = require("./instagram/instagram.service");
const { sendMessage } = require("./telegram.service");
const {optimizeImage} = require("./optimization.service");

const handleRequest = async (request) => {
    console.log("A new request arrived");
    if(!request.message.reply_to_message) return;
    const imageToBePosted = request.message.reply_to_message.text;
    let imageCaption ="";
    if(request.message.text.split(":").length > 1 && request.message.text.split(":")[0].trim().toLowerCase() == "caption"){
        imageCaption = request.message.text.split(":")[1].trim();
         console.log({
        imageURL: imageToBePosted,
        Caption: imageCaption
    })
   await optimizeImage(imageToBePosted);
        uploadPhotoToInstagram({
            caption: imageCaption,
            path: 'file.jpg'
        })
    
    }
    else{
        sendMessage("WRONGLY FORMATTED MESSGAE, PROPER FORMAT Caption: your_caption");
        return;
    }
 
}

module.exports = {
    handleRequest
}