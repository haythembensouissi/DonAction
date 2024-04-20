import { v2 as cloudinary } from 'cloudinary';
// const cloudinary = require('cloudinary').v2;
 
export async function POST(request:Request,response:Response){
    const body=(await request.json()) as {paramsToSign:Record<string,string>}
    const {paramsToSign}=body
    const signature=cloudinary.utils.api_sign_request(paramsToSign,process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY as string)
    return Response.json({signature})
}