
/* CLIENT-SIDE JS
  people can see this, be careful!

*/

$(document).ready(function() {
  // make an ajax call to my server
  // $('#bagquery').on('click', function clickHandler(){
    $.ajax({
      method: "GET",
      url: "api/bag",
      success: bagsSuccess,
      error: bagsError
    });
  // });


  var i = 0;
  var o = 0;
  function bagsSuccess(json) {
    $('.addBag').on('mousedown', function(){
      console.log("clicked for bag", json,i, o);
      $('.bag0').append('<div class="col-sm-offset-3 col-sm-6 box">' +
        '<img class="glyph"src="/images/glyphicons-342-briefcase.png">' +
        '<p>' +
        json[i].type +
        '</p>' +
        '<img class="addItem button" src="/images/glyphicons-191-plus-sign.png">' +
        '</div>'
      );
      addItemListener(json);
      i++;
    }); //closes addBag mousedown
  }

  function addItemListener(json){
    $('.addItem').on('mousedown', function(){
      console.log("clicked for item");
      $('.bag0').append('<div class="col-xs-offset-4 col-sm-5 space">' +
      json[i].contents[o].item +
      ' </div>');
      o++;
    }); //closes addItem mousedown
  }
  function bagsError(err){
    console.log(err);
  }

  function sanityError(error) {
    console.log("DAMNIT! ERROR!!!");
    console.log(error);
  }


  $('#meow').on("click", function(e){
    console.log("I was clicked");
    var test = $('#bagName').val();
    console.log(test);


    $.ajax({
      method: "POST",
      url: "api/bag",
      data: test
    });

    return false;
  });


}); //end document.onready
