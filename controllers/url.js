import { nanoid } from 'nanoid';
import { UrlsModel } from "../connection.js";

export async function handleGenerateNewShortURL(req, res){
    const body = req.body;

    console.log("body", body);

    if(!body.url) return res.status(400).json({error: "url is required"})
    
    const shortId = nanoid(8);

    await UrlsModel.create({
        shortId: shortId,
        redirectURL: body.url,
        visitedHistory: []
    });

    return res.status(200).json({id: shortId});
}

export default handleGenerateNewShortURL