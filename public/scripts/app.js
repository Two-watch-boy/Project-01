
/* CLIENT-SIDE JS
  people can see this, be careful!
*/

$(document).ready(function() {

  $('#meow').on("mousedown", handleMeowClick);

  $.ajax({
    method: "GET",
    url: "api/bag",
    success: bagsSuccess,
    error: bagsError
  });

});
  // make an ajax call to my server
  // $('#bagquery').on('click', function clickHandler(){
  // });

function renderBag(bag){
  var bagHtml = $("#bag-template").html();
  var bagTemplate = Handlebars.compile(bagHtml);
  var html = bagTemplate(bag);
  $('#target').prepend(html);
  console.log("hey look at these bags i found:", bag);
}

  function bagsSuccess(json) {
    json.forEach(function(bag){
      renderBag(bag);
    });
    // renderBag(json[0]);
    // $('#meow').on('mouseup', function(){

      addItemListener(json);
    // }); //closes addBag mousedown
  }
  function addItemListener(json){
  }
  function bagsError(err){
    console.log(err);
  }

  function sanityError(error) {
    console.log("DAMNIT! ERROR!!!");
    console.log(error);
  }



  function handleMeowClick(e){
    console.log("I was clicked");
    var nameBag = $('#bagName').val();
    var fullBag = $('#bagFull').is(':checked');
      if (fullBag === true){
        fullBag = "deadly";
      }else{
        fullBag = "benign";
      }
    var packedBag = $('#bagPacked').is(':checked');
      if (packedBag === true){
        packedBag = "hopeless";
      }else{
        packedBag = "hopefull";
      }
    // var bagConts = $('.itemName').val();
    console.log("look ma! i've got a " + nameBag + " thats " + fullBag + " and "+ packedBag);
    $("input").val("");
    $('input:checkbox').removeAttr('checked');

    $.ajax({
      method: "POST",
      url: "api/bag",
      data: {type: nameBag, full: fullBag, packed: packedBag},
      success: newBagSuccess,
      error: newBagFailure
    });


    function newBagSuccess(json){
      console.log("lookie here", json);
      renderBag(json[0]);
    }
    function newBagFailure(err) {
      console.log('we done fucked up', err);
    }
    return false;
  }
