/**
 * Created by irahavoi on 6/11/2015.
 */
function replyText(text){
    return function(req,res){
        res.end(text);
    }
}

module.exports = replyText;
