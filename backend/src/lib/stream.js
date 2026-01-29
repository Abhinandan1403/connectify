import {StreamChat} from "stream-chat"
import "dotenv/config"

const apikey = process.env.STREAM_API_KEY ;
const apisecret = process.env.STREAM_API_SECRET;

if(!apikey || !apisecret){
    console.error("Stream api key or Secret key is missing");
}

const streamClient = StreamChat.getInstance(apikey, apisecret);

export const upsertStreamUser = async (userData) =>{
    try {
        await streamClient.upsertUsers([userData]);
        return userData
    } catch (error) {
        console.error("Error upserting Stream user", error);
    }
};

export const generateStreamToken = (userId) => {
    try {
        const userIdStr = userId.toString();
        return streamClient.createToken(userIdStr);
    } catch (error) {
        console.log("Error generating Stream Token", error);
    }
};