const {TwitterApi}=require("twitter-api-v2");
const client =new TwitterApi({
    appKey:,
    appSecret:,
    accessToken:,
    accessSecret:
})
const rwclient=client.readWrite

module.exports=rwclient
