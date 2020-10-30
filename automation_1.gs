function automate_data() 
{
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var myURL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSd--_s0bw46MaOCv2sDAT0iHLaR0bnwJsFQMClB4-qXJKBs-A/formResponse';
    var workbench = SpreadsheetApp.getActiveSpreadsheet();
    var mysheet = workbench.getSheetByName("Sheet1");
    const range = SpreadsheetApp.getActiveSheet().getActiveRange();  
    const numRows = range.getLastRow();
    const numCols = range.getLastColumn();
    for(var i=2;i<=numRows;i++)
    {
        var myform = new Array(1,2,3,4,5,6,7,8);
        for(var j=1;j<=numCols;j++)
        {
            var temp = alphabet[j-1].toUpperCase();
            temp = temp + i;
            myform[j-1] = mysheet.getRange(temp).getValue();
        }
      var hashmap = {
        "first name": myform[0],
        "age":myform[1],
        "contacts":myform[2],
        "belong":myform[3],
        "proffesion":myform[4],
        "daddy":myform[5],
        "nigga":myform[6],
        "bruh":myform[7]        
      };
       var options = {
          "method": "post",
          "payload": hashmap
       };
      UrlFetchApp.fetch(myURL,options);
    }  
      
}

