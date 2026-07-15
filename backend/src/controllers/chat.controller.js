import { generateStreamToken } from "../lib/stream.js";


export async function getStreamToken(req, res){
    try {
        const token = generateStreamToken(req.user.id); //chat sdk wanted id as string hence .id .. if wanted as object ._id

        res.status(200).json({token});
    } catch (error) {
        console.log("error in getStreamToken", error.message);
        res.status(500).json({message: "Internal Service Error"});
    }
}