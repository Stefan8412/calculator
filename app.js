const defaultResult=0;
let currentResult = defaultResult;
let logEntries=[];

function getuserNumberInput(){
    return parseInt(userInput.value);
}
function writeToLog(operationIdentifier,operationNumber,newResult){
    const logEntry ={
        operation:operationIdentifier,
        number:operationNumber,
        result:newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
    console.log(logEntry.operation);
}

function add(){
    const enteredNumber=getuserNumberInput();
    const calcDescription=`${currentResult}+${enteredNumber}`;
   currentResult += enteredNumber;
   
   
    writeToLog("ADD",enteredNumber,currentResult);
    outputResult(currentResult,calcDescription); 
}
function substract(){
    const enteredNumber=getuserNumberInput();
    const calcDescription=`${currentResult}-${enteredNumber}`;
   currentResult -= enteredNumber;
   writeToLog("Substract",enteredNumber,currentResult);
    outputResult(currentResult,calcDescription); 
}
function multiply(){
    const enteredNumber=getuserNumberInput();
    const calcDescription=`${currentResult}*${enteredNumber}`;
   currentResult *= enteredNumber;
   writeToLog("multipy",enteredNumber,currentResult);
    outputResult(currentResult,calcDescription); 

}
function divide(){
    const enteredNumber=getuserNumberInput();
    const calcDescription=`${currentResult}/${enteredNumber}`;
   currentResult /= enteredNumber;
   writeToLog("divide",enteredNumber,currentResult);
    outputResult(currentResult,calcDescription); 
}
addBtn.addEventListener("click",add);
subtractBtn.addEventListener("click",substract);
multiplyBtn.addEventListener("click",multiply);
divideBtn.addEventListener("click",divide);










