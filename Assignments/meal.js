let today = new Date();
module.exports.getMealTime = function() {
let time = today.getHours();
if (time > 16)
return "It's dinner time!";
else if (time > 12)
return "It's lunch time!";
else
return "It's breakfast time!";
}
