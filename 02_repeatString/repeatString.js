const repeatString = function (str, n) {
    
    let newStr = ""
    if (n < 0) {
        return error;
        
    } else {
         for (let i = 0; i < n; i++) {
           newStr = newStr + str;
         }
         return newStr;
        
    }
   
    console.log(newStr);
};

// Do not edit below this line
module.exports = repeatString;
