const cron = require('node-cron');
/**
 * every 5 minutes
 * we will just check is there any email which is to be sent 
 * by now and is PENDING
 */


const fetchdriverlocation = async () => {
    cron.schedule('*/2 * * * *', async () => {

    });
}

module.exports = setupJobs;