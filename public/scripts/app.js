
/* CLIENT-SIDE JS
  people can see this, be careful!
*/

$(document).ready(function() {

  $('#meow').on("mousedown", handleMeowClick);

  $("#target").on("click",".deleteButton", handleDeleteBag);

  $("#target").on("click",".editButton", handleEditBag);

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
    var packedBag = $('#bagPacked').is(':checked');


    var item1packed = $('#packed1').is(':checked');
    var item1important = $('#important1').is(':checked');
    var item2packed = $('#packed2').is(':checked');
      if ($('#packed2').is(':checked') === false){
        item2packed = "";
      }
    var item2important = $('#important2').is(':checked');
      if($('#important2').is(':checked') === false){
        item2important = "";
      }
    var item3packed = $('#packed3').is(':checked');
      if ($('#packed3').is(':checked') === false){
        item3packed = "";
      }
    var item3important = $('#important3').is(':checked');
      if($('#important3').is(':checked') === false){
        item3important = "";
      }
    var item4packed = $('#packed4').is(':checked');
      if ($('#packed4').is(':checked') === false){
        item4packed = "";
      }
    var item4important = $('#important4').is(':checked');
      if($('#important4').is(':checked') === false){
        item4important = "";
      }

    console.log("i've got these values for my items packed and important ", item0important, item0packed);






    var nameOfItem0 = {item: $('#itemName0').val(), packed: item0packed, important: item0important};
      if ($('#packed0').is(':checked') === false && $('#important0').is(':checked') === false){
        nameOfItem0 = null;
      }
    var nameOfItem1 = {item: $('#itemName1').val(), packed: item1packed, important: item1important};
      if ($('#packed1').is(':checked') === false && $('#important1').is(':checked') === false){
        nameOfItem1 = null;
      }

    var nameOfItem2 = {item: $('#itemName2').val(), packed: item2packed, important: item2important};
    var nameOfItem3 = {item: $('#itemName3').val(), packed: item3packed, important: item3important};
    var nameOfItem4 = {item: $('#itemName4').val(), packed: item4packed, important: item4important};

    var contentsList = [nameOfItem0, nameOfItem1, nameOfItem2, nameOfItem3, nameOfItem4];
    console.log(contentsList);
    // var bagConts = $('.itemName').val();
    console.log("look ma! i've got a " + nameBag + " that's " + fullBag + " and "+ packedBag);
    console.log("what have i here", contentsList);
    $("input").val("");
    $('input:checkbox').removeAttr('checked');


    $.ajax({
      method: "POST",
      url: "api/bag",
      data: {type: nameBag, full: fullBag, packed: packedBag, contents: contentsList},
      success: newBagSuccess,
      error: newBagFailure
    });
    function newBagSuccess(json){
      console.log("lookie here, we got some json:", json);
      renderBag(json);
    }
    function newBagFailure(err) {
      console.log('we done fucked up', err);
    }



    return false;
  }

  function handleDeleteBag(e){
    e.preventDefault();
    var bagId = $(this).parents('.row.bag').data("bag-id");
    console.log("deleting this thing hurr", bagId);
    $(this).parents('.row.bag0').remove();
    $.ajax({
      method: 'DELETE',
      url: 'api/bag/' + bagId,

      success: deleteSuccessFunction
    });

  }

  function deleteSuccessFunction(deleteSuccess){
    console.log("This is where the deleting magic happens!", deleteSuccess);
  }




  function handleEditBag(e){
    e.preventDefault();
    var bagId = $(this).parents('.row.bag').data("bag-id");
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
    var nameOfItem0 = {item: $('#itemName0').val(), packed: $('#packed0').is(':checked'), important: $('#important0').is(':checked')};
    var nameOfItem1 = {item: $('#itemName1').val(), packed: $('#packed1').is(':checked'), important: $('#important1').is(':checked')};
    var nameOfItem2 = {item: $('#itemName2').val(), packed: $('#packed2').is(':checked'), important: $('#important2').is(':checked')};
    var nameOfItem3 = {item: $('#itemName3').val(), packed: $('#packed3').is(':checked'), important: $('#important3').is(':checked')};
    var nameOfItem4 = {item: $('#itemName4').val(), packed: $('#packed4').is(':checked'), important: $('#important4').is(':checked')};

    var contentsList = [nameOfItem0, nameOfItem1, nameOfItem2, nameOfItem3, nameOfItem4];

    $.ajax({
      method: 'PUT',
      url: '/api/bag/' + bagId,
      data: {type: nameBag, full: fullBag, packed: packedBag, contents: contentsList},
      success: editBagSuccess
    });

  }

  function editBagSuccess(editSuccess){
    console.log("what have we here? oh! it's some edits", editSuccess);
  }
