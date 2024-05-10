import {v2 as cloudinary} from "cloudinary";
import fs from "fs";

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View Credentials' below to copy your API secret
});


const uploadOnCloudinary = async (localFIlePath) => {
    try{
        if(!localFIlePath) return null
        const response = await cloudinary.uploader.upload(
            localFIlePath, {
                resource_type: "auto"
            }
        )
        console.log("file is uploaded on cloudinary",response.url);
        return response;
    }catch(error){
        false.unlinkSync(localFIlePath)
        return null;
    }

}

export {uploadOnCloudinary}