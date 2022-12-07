const rwclient=require('./twitterClient')
const CronJob=require("cron").CronJob;

const tweet=async()=>{
    try{
        await rwclient.v2.tweet("Hello")
        

        }catch(e){
            console.error(e);
        }
    }
const job=new CronJob("* * * * *",()=>{
    console.log("running");
    tweet()
})
job.start();