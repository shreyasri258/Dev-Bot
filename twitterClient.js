const {TwitterApi}=require("twitter-api-v2");
const client =new TwitterApi({
    appKey:"J22IdGa5ba6ohF8xcCWmVbKeA",
    appSecret:"kvQan3rHITn07HIPu39IMR6tqk0JSzEutWqgq5Un70iF6f1pLV",
    accessToken:"1546135276963041281-V1zbSV4eo7AkU1CO3fzUy7y18rTaFo",
    accessSecret:"CA5bwFeZ6xvPSDlmeumsflqRtSGb5ejaMGxR2IMwoqDIy"
})
const rwclient=client.readWrite

module.exports=rwclient