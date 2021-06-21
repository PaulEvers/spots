import { AzureFunction, Context } from "@azure/functions"
import * as axios from "axios"
import { UserCreatedInfo } from "./UserCreatedInfo";

const timerTrigger: AzureFunction = async function (context: Context, myTimer: any): Promise<void> {
    var timeStamp = new Date();
    context.log(`Started AVG check at: ${timeStamp.toISOString()}`);
    axios.default.get<UserCreatedInfo[]>("http://20.54.163.113:80/user/created").then(res => {
        var infos = res.data;
        infos.forEach(info => {
            context.log(info);
            const difference = timeStamp.getMilliseconds() - info.userCreated;
            if (difference > 157784760000) { // 5 years
                context.log(`User ${info.id} account is older than 5 year. Consider deleting personal information.`);
            }
        });
    }).catch(err => {
        context.log('Failed fetching users.');
        context.log(err)
    });
};

export default timerTrigger;
