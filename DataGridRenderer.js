

var DataGridRenderer = {
  
  
  //---------------------------------------
  // XML - Tally
  //---------------------------------------
  xml: function (dataGrid, headerNames, headerTypes, indent, newLine) {
    //inits...
    var commentLine = "<!--";
    var commentLineEnd = "-->";
    var outputText = "";
    var numRows = dataGrid.length;
    var numColumns = headerNames.length;
    
    //begin render loop
    outputText = '<?xml version="1.0" encoding="UTF-8"?>' + newLine;
	outputText += "<ENVELOPE>"+newLine;
	outputText += "<HEADER>"+newLine;
	outputText += "<TALLYREQUEST>Import Data</TALLYREQUEST>"+newLine;
	outputText += "</HEADER>"+newLine;
	outputText += "<BODY>"+newLine;
	outputText += "<IMPORTDATA>"+newLine;
	outputText += "<REQUESTDESC>"+newLine;
	outputText += "<REPORTNAME>Vouchers</REPORTNAME>"+newLine;
	outputText += "<STATICVARIABLES>"+newLine;
    outputText += "<SVCURRENTCOMPANY>LearnWell</SVCURRENTCOMPANY>"+newLine;
	outputText += "</STATICVARIABLES>"+newLine;
	outputText += "</REQUESTDESC>"+newLine;
	outputText += "<REQUESTDATA>"+newLine;
    for (var i=0; i < numRows;i++) {
      var row = dataGrid[i];
	  outputText += indent+'<TALLYMESSAGE xmlns:UDF="TallyUDF">'+newLine;
	  outputText += indent+'<VOUCHER REMOTEID="" VCHTYPE="Sales" ACTION="Create">'+newLine;
	  outputText += indent+"<VOUCHERTYPENAME>Sales</VOUCHERTYPENAME>"+newLine;
	  outputText += indent+"<GUID></GUID>"+newLine;
	  outputText += indent+"<ALTERID></ALTERID>"+newLine;
		outputText += indent+"<DATE>";          
        outputText += row[i] || ""
        outputText += "</DATE>"+newLine;
		outputText += indent+"<EFFECTIVEDATE>";          
        outputText += row[i] || ""
        outputText += "</EFFECTIVEDATE>"+newLine;
		outputText += indent+"<NARRATION>";          
        outputText += row[i+1] || ""
        outputText += "</NARRATION>"+newLine;
        outputText += indent+"<ALLLEDGERENTRIES.LIST>"+newLine;
      for (var j=0; j < numColumns; j++) {
        outputText += indent+indent+'<'+headerNames[j]+'>';          
        outputText += row[j] || ""
        outputText += '</'+headerNames[j]+'>'+newLine
      };
      outputText += indent+"</ALLLEDGERENTRIES.LIST>"+newLine;
    };
    outputText += "</rows>";
    
    return outputText;
    
  },
  
  
  
 
  
  //---------------------------------------
  // XML Illustrator
  //---------------------------------------
  xml: function (dataGrid, headerNames, headerTypes, indent, newLine) {
    //inits...
    var commentLine = "<!--";
    var commentLineEnd = "-->";
    var outputText = "";
    var numRows = dataGrid.length;
    var numColumns = headerNames.length;
    
    //begin render loop
    outputText = '<?xml version="1.0" encoding="UTF-8"?>' + newLine;
	outputText += "<ENVELOPE>"+newLine;
	outputText += "<HEADER>"+newLine;
	outputText += "<TALLYREQUEST>Import Data</TALLYREQUEST>"+newLine;
	outputText += "</HEADER>"+newLine;
	outputText += "<BODY>"+newLine;
	outputText += "<IMPORTDATA>"+newLine;
	outputText += "<REQUESTDESC>"+newLine;
	outputText += "<REPORTNAME>Vouchers</REPORTNAME>"+newLine;
	outputText += "<STATICVARIABLES>"+newLine;
    outputText += "<SVCURRENTCOMPANY>LearnWell</SVCURRENTCOMPANY>"+newLine;
	outputText += "</STATICVARIABLES>"+newLine;
	outputText += "</REQUESTDESC>"+newLine;
	outputText += "<REQUESTDATA>"+newLine;
    for (var i=0; i < numRows;i++) {
      var row = dataGrid[i];
	  outputText += indent+'<TALLYMESSAGE xmlns:UDF="TallyUDF">'+newLine;
	  outputText += indent+'<VOUCHER REMOTEID="" VCHTYPE="Sales" ACTION="Create">'+newLine;
	  outputText += indent+"<VOUCHERTYPENAME>Sales</VOUCHERTYPENAME>"+newLine;
	  outputText += indent+"<GUID></GUID>"+newLine;
	  outputText += indent+"<ALTERID></ALTERID>"+newLine;
		outputText += indent+"<DATE>";          
        outputText += row[i] || ""
        outputText += "</DATE>"+newLine;
		outputText += indent+"<EFFECTIVEDATE>";          
        outputText += row[i] || ""
        outputText += "</EFFECTIVEDATE>"+newLine;
		outputText += indent+"<NARRATION>";          
        outputText += row[i+1] || ""
        outputText += "</NARRATION>"+newLine;
        outputText += indent+"<ALLLEDGERENTRIES.LIST>"+newLine;
      for (var j=0; j < numColumns; j++) {
        outputText += indent+indent+'<'+headerNames[j]+'>';          
        outputText += row[j] || ""
        outputText += '</'+headerNames[j]+'>'+newLine
      };
      outputText += indent+"</ALLLEDGERENTRIES.LIST>"+newLine;
    };
    outputText += "</rows>";
    
    return outputText;
    
  },
