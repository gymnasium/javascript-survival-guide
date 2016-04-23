
//--------------------------------------------------------------------------------

//Example # XX


$('li');

//--------------------------------------------------------------------------------

//Example # XX


$('li').click();


//Example # XX B


$('li').click(function () {
  alert("hello");
});


//Example # XX C

function sayHello () {
  alert("hello");
}

$('li').click(sayHello);

//--------------------------------------------------------------------------------

//Example # XX

$('li').click(function () {
  console.dir(this);
});

//--------------------------------------------------------------------------------

//Example # XX

$('li').click(function () {
  console.log(this.innerHTML);
});


//--------------------------------------------------------------------------------

//Example # XX

$('li').click(function () {
  console.log($(this).text());
});

//--------------------------------------------------------------------------------

//Example # XX

$('.imageContainter').dblclick(function(){
    $(this).toggle();
});

//--------------------------------------------------------------------------------

//Example # XX

$('.imageContainter').dblclick();

//--------------------------------------------------------------------------------

//Example # XX

$('.imageContainter').dblclick(function(){
    $(this).toggle();
    $('#restoreImage').show();
});

$('#restoreImage').click(function(){
    $(this).hide();
    $('.imageContainter').dblclick();
});

//--------------------------------------------------------------------------------

//Example # XX

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
//Example # XX

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

//Example # XX

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

//Example # XX

$('.description a').unbind();


//--------------------------------------------------------------------------------

//Example # XX

$('.description a').click(function (event) {
    event.preventDefault();
});
//--------------------------------------------------------------------------------

//Example # XX

$('.description a').click(function (event) {
    event.preventDefault();

    alert('Did you know that ' + $(this).attr('data-info') + '?');
});
//--------------------------------------------------------------------------------
//Example # XX

function overrideHyperlinkClicks () {
  $('.description a').click(function (event) {
      event.preventDefault();

      alert('Did you know that ' + $(this).attr('data-info') + '?');

      $('#hideInfoHyperlinks').show();
  });
}

$('#hideInfoHyperlinks').click(function () {
    $(this).hide();

    $('#showInfoHyperlinks').show();

    $('.description a').unbind();
});

$('#showInfoHyperlinks').click(function () {
    $(this).hide();

    $('#hideInfoHyperlinks').show();

    overrideHyperlinkClicks();
});

overrideHyperlinkClicks();
//--------------------------------------------------------------------------------

//Example # XX

//click handler for the submit button
$('#feedbackForm button[type="submit"]').click(function (event) {
    //prevent default behavior
    event.preventDefault();

    //hide the submit button
    $(this).hide();

    //show the ajax spinner
    $('#ajaxSpinner').show();
});
//--------------------------------------------------------------------------------

//Example # XX

//click handler for the submit button
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


//Example # XX

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

//click handler for the submit button
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
    alert('Your comments have been submitted. Thank you!');
  }, 1000);
});

//ensure that all fields are empty on page load
clearForm();
//--------------------------------------------------------------------------------


//--------------------------------------------------------------------------------


//--------------------------------------------------------------------------------


//--------------------------------------------------------------------------------