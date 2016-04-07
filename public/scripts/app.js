
/* CLIENT-SIDE JS
  people can see this, be careful!

*/

$(document).ready(function() {
  // make an ajax call to my server
  $('#colorQuery').on('click', function clickHandler(){
    $.ajax({
      method: "GET",
      url: "api/primary",
      success: sanitySuccess,
      error: sanityError
    });

  });



});

// these are being loaded when this app.js is executed
function sanitySuccess(success) {
  console.log("YOU DID IT! SUCCESS!");
  console.log(success);
  var allPrimaries = success;
  // traverse all of my db entries and append each entry's favorite color to my #colorAnswer div
  allPrimaries.forEach( function appendToHtml(onePrimary) {
    var faveColor = onePrimary.contents
    $('#colorAnswer').append('<h1>' + faveColor + '</h1>')
  })
}


function sanityError(error) {
  console.log("DAMNIT! ERROR!!!");
  console.log(error);
}
