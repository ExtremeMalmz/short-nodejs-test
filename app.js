//use node.js to run files like this NODE APP.JS but in lowercase
const fs = require("fs");

function writeToFile(oldFileData){
    console.log("b");
    console.log(oldFileData);
    
    var content = oldFileData + "\nlol what you say" 
    fs.writeFile("text.txt", content, err => {
        if (err) {
          console.error(err);
        }
        // file written successfully
        console.log("success!")
    });
}

function readFile(){
    fs.readFile("text.txt", "utf8", (err,data) => {
        if(err){
            console.error(err);
            return;
        }
        
        writeToFile(data);
    })
}

readFile();