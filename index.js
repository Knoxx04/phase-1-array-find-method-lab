// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    { year: "2012", result: "l"},
    { year: "2011", result: "W"},
    { year: "2010", result: "N/A"},
    { year: "2009", result: "L"},
    { year: "2008", result: "l"},
    { year: "2007", result: "W"},
    { year: "2006", result: "N/A"},
    { year: "2005", result: "L"},
    { year: "2004", result: "l"},
    { year: "2003", result: "W"},
    { year: "2002", result: "N/A"},
    { year: "2001", result: "L"},
    { year: "1999", result: "l"},]
  
    

    //const superbowl = [{result:"N/A"},{result:"L"},{result:"L"},{result:"W"},{result:"W"},{result:"L"}];

    function superbowlWin(record){
        let returnedItem = record.find((item)=>{
            return item.result==="W"
        });
        if(returnedItem){
            return returnedItem.year
        } 
        
    }
    console.log(superbowlWin(record));

















