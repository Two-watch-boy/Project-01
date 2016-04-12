
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
  console.log("hey look at these things i found:", bag);
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
    e.preventDefault();
    console.log("I was clicked");
    var nameBag = $('#bagName').val();
    var fullBag = $('#bagFull').is(':checked');
      // if (fullBag === true){
      //   fullBag = "deadly";
      // }else{
      //   fullBag = "benign";
      // }
    var packedBag = $('#bagPacked').is(':checked');
      // if (packedBag === true){
      //   packedBag = "hopeless";
      // }else{
      //   packedBag = "hopefull";
      // }
    var nameOfItem0 = {item: $('#itemName0').val(), packed: false, inportant: true};
    var nameOfItem1 = {item: $('#itemName1').val(), packed: false, inportant: true};
    var nameOfItem2 = {item: $('#itemName2').val(), packed: false, inportant: true};
    var nameOfItem3 = {item: $('#itemName3').val(), packed: false, inportant: true};
    var nameOfItem4 = {item: $('#itemName4').val(), packed: false, inportant: true};

    var contentsList = [nameOfItem0, nameOfItem1, nameOfItem2, nameOfItem3, nameOfItem4];
    // var bagConts = $('.itemName').val();
    console.log("look ma! i've got a " + nameBag + " that's " + fullBag + " and "+ packedBag);
    console.log("what have i here", contentsVar);
    $("input").val("");
    $('input:checkbox').removeAttr('checked');


    $.ajax({
      method: "POST",
      url: "api/bag",
      data: {type: nameBag, full: fullBag, packed: packedBag, contents: contentsVar},
      success: newBagSuccess,
      error: newBagFailure
    });
    function newBagSuccess(json){
      console.log("lookie here", json);
      renderBag(json);
    }
    function newBagFailure(err) {
      console.log('we done fucked up', err);
    }
    return false;
  }
