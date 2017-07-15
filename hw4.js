// declare a var named txt that gets the text input field
var txt = document.getElementById("txtFilePath");
// test txt

alert(txt);

// Declare regex pattern

var pattern = /(jpg|jpeg|png|bmp)$/i; // search at the end of the filename (^), for any of the extensions, ignore case (i)

// fFileValidate Function

function fFileValidate() {
  alert("working"); // test fx calling
  txtString = txt.value; // Store txt value to txtString
  if ( txtString.match(pattern) ){ // if text in textFilePath element matches the pattern
    return true
    alert("File Validation succesful"); // all is good
  } else {
      alert("File Name = " + txtString + " is invalid.") ; // otherwise, fuggeddaboutit if it fails Validation
    }
  }



fQueryString() Function - scrapes url of upload.html page

function fQueryString() {
  var strQueryString = location.search // queries part of the url
  alert("Location =" + decodeURIComponent(strQueryString) );
  console.log(location.search);
  // display the string strQueryString preceded by ‘Location = '
}

fQueryString();
