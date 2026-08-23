import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'
// 237772721151184
// 5OHf_-scNvB7XX0RT_XOx4AbApw
//brmqzg4c
cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type:"auto"
        })
        console.log("File is Uploaded", response.url)
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath)       // remove locally saved temporary file has as the upload operation got failed
        return null;
    }
}

// cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/0lympic_flag.jpg",
//   { public_id: "olympic_flag" },
//   function(error, result) {console.log(result); });

export {uploadOnCloudinary}