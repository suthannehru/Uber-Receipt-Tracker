function GetHrefURLsFromString(string){
  var href = string.split("Download PDF")[1].match(/<([^>]*)/)[1];      
  if(href){
    return href;
  } else {
    throw "No URL Found"
  }
} 
function getFile(fileURL,date){
  var fol = DriveApp.getRootFolder().getFoldersByName("Invoice").next().getFoldersByName("Uber Receipts").next();
  var response = UrlFetchApp.fetch(fileURL);
  var fileBlob = response.getBlob();
  fol.addFile(DriveApp.createFile(fileBlob));
  fol.getFilesByName("click.bin").next().setName(date+".pdf");
  //DriveApp.addFile(DriveApp.createFile(fileBlob));
  //DriveApp.getRootFolder().getFilesByName("click.bin").next().setName(date+".pdf");
  
}
function getTotalVal(string){
  var total = string.split("Total: CA$",2)[1];    
  if(total){
    return total.match(/\d.*\s/);
  }else{
    total = string.split("$")[1].match(/.*\s/);
    if(total){return total;}
    else{throw "No Value Found"}
  }
}

function getUberReceipt() {
  var label = GmailApp.getUserLabelByName("Work");
  var invoice = SpreadsheetApp.openByUrl("ENTER GOOGLE SHEET URL").getActiveSheet();
  invoice.clear();
  invoice.getRange("B"+parseInt(1)).setValue("Date");
  invoice.getRange("C"+parseInt(1)).setValue("Time");
  invoice.getRange("D"+parseInt(1)).setValue("Amount ($CAD)");
  var threads = label.getThreads(0,83);
  var amount = 0;  
  Logger.log(threads.length);  
  
  for (var i = 0; i < threads.length; i++)
  {      
    var href = threads[i].getMessages()[0].getPlainBody();
    //var h = GetHrefURLsFromString(href);    
    //Logger.log(href);
    var dandt = threads[i].getMessages()[0].getDate();            
    var date = dandt.toLocaleDateString();
    var time = dandt.toLocaleTimeString()            
    var total = getTotalVal(href);
    amount += parseFloat(total);
    //Logger.log(date+"  Amount:$"+parseFloat(total).toFixed(2)+" CAD");    
    invoice.getRange("B"+parseInt(i+2)).setValue(date);
    invoice.getRange("C"+parseInt(i+2)).setValue(time);
    invoice.getRange("D"+parseInt(i+2)).setValue(total);
    
    
  }
  invoice.getRange("A"+parseInt(i+2)).setValue("Total ($CAD)");
  invoice.getRange("D"+parseInt(i+2)).setValue(amount);      
    
}
