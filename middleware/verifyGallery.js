const fs = require("fs")
const uuid = require('uuid')

const verifyGallery = (req, _, next) => {
    const {gallery} = req.body
    const arrImgLink = gallery.map((images) => {
        if(~images.indexOf("http://") || 
           ~images.indexOf("https://")){
            return images
        }else{
            let base64 =  images.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
            let format = images.substring("data:image/".length, images.indexOf(";base64"))
            
            var buffer = new Buffer.from(base64[2],'base64');
            try{
                const randomNum = uuid.v4()
                const linkImg = `mediafile/course/${randomNum}.${format}`   
                fs.writeFileSync("./"+linkImg, buffer, 'base64');
                return linkImg
            }catch(e){
                console.error(e)
                throw new Error(JSON.stringify({ status: 401, message: "Incorrect reading file" }))
            }
        }
        })
        req.arrImgLink = arrImgLink
        next()
}


module.exports = verifyGallery