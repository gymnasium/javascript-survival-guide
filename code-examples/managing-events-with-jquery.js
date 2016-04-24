//CODE EXAMPLES: Managing events with jquery


//--------------------------------------------------------------------------------

//query all list items


$('li');

//--------------------------------------------------------------------------------

//query all list items, show click method

$('li').click;

//--------------------------------------------------------------------------------

//alert hello on click

$('li').click(function () {
  alert("hello");
});

//--------------------------------------------------------------------------------

//pass named function to cick callback

function sayHello () {
  alert("hello");
}

$('li').click(sayHello);

//--------------------------------------------------------------------------------

//inspect clicked element

$('li').click(function () {
  console.dir(this);
});

//--------------------------------------------------------------------------------

//view innerHTML of clicked element

$('li').click(function () {
  console.log(this.innerHTML);
});

//--------------------------------------------------------------------------------

//execute text method on clicked element

$('li').click(function () {
  console.log($(this).text());
});

//--------------------------------------------------------------------------------

//toggle image container on double click

$('.imageContainter').dblclick(function(){
    $(this).toggle();
});

//--------------------------------------------------------------------------------

//manually trigger double click on image container

$('.imageContainter').dblclick();

//--------------------------------------------------------------------------------

//hide / show image container example

$('.imageContainter').dblclick(function(){
    //show/hide this
    $(this).toggle();

    //show the restorm image link
    $('#restoreImage').toggle();
});

$('#restoreImage').click(function(){
    //show the image containter
    $('.imageContainter').dblclick();
});

//--------------------------------------------------------------------------------

//mark tasks as completed on click

function bindTasks() {
  //for each task, when clicked...
  $('.tasks li').click(function () {

      //add the CSS class that gives it a "completed" appearance
      $(this).addClass('strikeout');

      //add an event handler that reminds tha user that this task is already compoleted
      $(this).click(function () {
        alert('You have already completed the task: ' + $(this).text());
      });
  });
}

//add event handlers for each task
bindTasks();

//--------------------------------------------------------------------------------

//mark tasks as completed on click, with unbind

function bindTasks() {
  //for each task, when clicked...
  $('.tasks li').click(function () {

      //add the CSS class that gives it a "completed" appearance
      $(this).addClass('strikeout');

      //un-bind any exising event handlers
      $(this).unbind();

      //add an event handler that reminds tha user that this task is already compoleted
      $(this).click(function () {
        alert('You have already completed the task: ' + $(this).text());
      });
  });
}

//add event handlers for each task
bindTasks();

//--------------------------------------------------------------------------------

//add reset-tasks link

function bindTasks() {
  //for each task, when clicked...
  $('.tasks li').click(function () {

      //add the CSS class that gives it a "completed" appearance
      $(this).addClass('strikeout');

      //un-bind any exising event handlers
      $(this).unbind();

      //show the reset tasks link
      $('#resetTasks').show();

      //add an event handler that reminds tha user that this task is already compoleted
      $(this).click(function () {
        alert('You have already completed the task: ' + $(this).text());
      });
  });
}

//when the user clicks the "Reset Tasks" link
$('#resetTasks').click(function () {
    //hide this element
    $(this).hide();

    //remove the CSS class that gives each task a "completed" appearance
    $('.tasks .strikeout').removeClass('strikeout');

    //un-bind any exising event handlers for each task
    $('.tasks li').unbind();

    //add new event handlers for each task
    bindTasks();
});

//add event handlers for each task
bindTasks();

//--------------------------------------------------------------------------------

//attempt to un-bind anchor tags

$('.description a').unbind();


//--------------------------------------------------------------------------------

//prevent default behavior of anchor tags

//when any of the description hyperlinks are clicked
$('.description a').click(function (event) {
    //prevent the anchor link's default behavior
    event.preventDefault();
});

//--------------------------------------------------------------------------------

//view href attribute

//when any of the description hyperlinks are clicked
$('.description a').click(function (event) {
    //prevent the anchor link's default behavior
    event.preventDefault();

    //show that we have access to information about this hyerlink
    console.log('The link to: ' +  $(this).attr('href') + ' was disabled!');
});

//--------------------------------------------------------------------------------

//show link info in alert

  //when any of the description hyperlinks are clicked
$('.description a').click(function (event) {
    //prevent the anchor link's default behavior
    event.preventDefault();

    //show the user this link's info
    alert('Did you know that ' + $(this).attr('data-info') + '?');
});

//--------------------------------------------------------------------------------
//enable show/hide iinfo for hyperlinks

function overrideHyperlinkClicks () {
  //when any of the description hyperlinks are clicked
  $('.description a').click(function (event) {
      //prevent the anchor link's default behavior
      event.preventDefault();

      //alert the link info
      alert('Did you know that ' + $(this).attr('data-info') + '?');

      //show the hide info for hyperlinks link
      $('#hideInfoHyperlinks').show();
  });
}

//when the hide info for hyperlinks link is clicked
$('#hideInfoHyperlinks').click(function () {
    //hide the hide info for hyperlinks link
    $(this).hide();

    //show the show info for hyperlinks link
    $('#showInfoHyperlinks').show();

    //un-bind all of our event handlers for the hyoerlinks
    $('.description a').unbind();
});

//when the show info for hyperlinks link is clicked
$('#showInfoHyperlinks').click(function () {
    //hide the show info for hyperlinks link
    $(this).hide();

    //show the hide info for hyperlinks link
    $('#hideInfoHyperlinks').show();

    //add event handlers that prevent the anchor link's default behavior
    overrideHyperlinkClicks();
});

//add event handlers that prevent the anchor link's default behavior
overrideHyperlinkClicks();

//--------------------------------------------------------------------------------

//allow the user to follow the hyperkink if desired

function overrideHyperlinkClicks () {
  //when any of the description hyperlinks are clicked
  $('.description a').click(function (event) {
      //prevent the anchor link's default behavior
      event.preventDefault();

      //build the text for the confirm pop-up
      var messageInfo = 'Did you know that ' + $(this).attr('data-info') + '?',
        messageQuestion = ' \n\nClick "OK" to search Google for: ' + $(this).text() +  '.',
        //execute the confirm pop-up, using the text we put together
        moreInfo = confirm(messageInfo + messageQuestion);

      //if the user clicked "ok"
      if (moreInfo) {
        //open a new window, using the anchor link's href attribute for the URL
        window.open($(this).attr('href'));
      }

      //show the hide info for hyperlinks link
      $('#hideInfoHyperlinks').show();
  });
}

//when the hide info for hyperlinks link is clicked
$('#hideInfoHyperlinks').click(function () {
    //hide the hide info for hyperlinks link
    $(this).hide();

    //show the show info for hyperlinks link
    $('#showInfoHyperlinks').show();

    //un-bind all of our event handlers for the hyoerlinks
    $('.description a').unbind();
});

//when the show info for hyperlinks link is clicked
$('#showInfoHyperlinks').click(function () {
    //hide the show info for hyperlinks link
    $(this).hide();

    //show the hide info for hyperlinks link
    $('#hideInfoHyperlinks').show();

    //add event handlers that prevent the anchor link's default behavior
    overrideHyperlinkClicks();
});

//add event handlers that prevent the anchor link's default behavior
overrideHyperlinkClicks();


//--------------------------------------------------------------------------------

//prevent the form's default submit behavior

//when the submit button is clicked
$('#feedbackForm button[type="submit"]').click(function (event) {
    //prevent default behavior
    event.preventDefault();
});

//--------------------------------------------------------------------------------


//hide submit button, show ajax spinner

//when the submit button is clicked
$('#feedbackForm button[type="submit"]').click(function (event) {
    //prevent default behavior
    event.preventDefault();

    //hide the submit button
    $(this).hide();

    //show the ajax spinner
    $('#ajaxSpinner').show();
});

//--------------------------------------------------------------------------------

//add controls reset

//when the submit button is clicked
$('#feedbackForm button[type="submit"]').click(function (event) {
    //cache a reference to the element that was clicked
    var $me = $(this);

    //prevent default behavior
    event.preventDefault();

    //hide the submit button
    $(this).hide();

    //show the ajax spinner
    $('#ajaxSpinner').show();
  
  //wait one second (mimic an ajax call)
  setTimeout(function (){
    //hide the ajax spinner
    $('#ajaxSpinner').hide();

    //show the submit button
    $me.show();

  }, 1000);
});

//--------------------------------------------------------------------------------


//mimic an AJAX form submission

//empties all form fields
function clearForm() {
  //empty the name field
  $('#name').val('');

  //empty the comments field
  $('#comments').val('');
}

//validates the form
function formValid() {
  var errorClassName = 'error',
    errorFound = false,
    $nameInput = $('#name'),
    $commentsInput = $('#comments');

  //if the name field is empty
  if (!$nameInput.val()) {
    //add the error class
    $nameInput.addClass(errorClassName);

    //set the flag that an error was found
    errorFound = true;
  }

  //if the name field is empty
  if (!$commentsInput.val()) {
    //add the error class
    $commentsInput.addClass(errorClassName);

    //set the flag that an error was found
    errorFound = true;
  }

  //if there was an error
  if (errorFound) {
    //return false
    return false;
  }

  return true;
}

//when the submit button is clicked
$('#feedbackForm button[type="submit"]').click(function (event) {
  //cache a reference to the element that was clicked
  var $me = $(this);

  //prevent default behavior
  event.preventDefault();

  //remove any previous error indicators
  $('.error').removeClass('error');

  //if the form has been completed
  if (!formValid()) {
    //inform the user that both form fields are reqeuired
    alert('Please be sure to complete both the name and and comments fields.');

    //stop here
    return;
  }

  //hide the submit button
  $(this).hide();

  //show the ajax spinner
  $('#ajaxSpinner').show();

  //wait one second (mimic an ajax call)
  setTimeout(function (){

    //hide the ajax spinner
    $('#ajaxSpinner').hide();

    //show the submit button
    $me.show();

    //clear the form
    clearForm();

    //inform the user that thier comments have been submitted
    alert('Your comments have been submitted. \n\nThank you!');
  }, 1000);
});

//ensure that all fields are empty on page load
clearForm();

//--------------------------------------------------------------------------------
