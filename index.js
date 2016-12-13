
// import $ from 'jquery.js';



function popitup() {
	newwindow=window.open('','name','height=200,width=150');
	var tempWindow = newwindow.document;
	tempWindow.write('<html><head><title>popup</title>');
	tempWindow.write('<link rel="stylesheet" href="js.css">');
	tempWindow.write('</head><body><p>Are you sure you want to go to another site?</p>');
	tempWindow.write('<p><button onClick="javascript:self.close()"><a href="http://www.tinyurl.com/heatherconley" target="_blank">Yes</a></button>.</p>');
	tempWindow.write('<p><a href="javascript:self.close()">No</a> </p>');
	tempWindow.write('</body></html>');
	tempWindow.close();
}


console.log("Hello there!");