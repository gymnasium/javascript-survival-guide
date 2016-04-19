
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

$('#feedbackForm button[type="submit"]').click(function (event) {
    event.preventDefault();

    $(this).hide();

    $('#ajaxSpinner').show();
});
//--------------------------------------------------------------------------------

//Example # XX

$('#feedbackForm button[type="submit"]').click(function (event) {
    var $me = $(this);
    
     event.preventDefault();

    $(this).hide();

    $('#ajaxSpinner').show();
  
  setTimeout(function (){
    
    $('#ajaxSpinner').hide();
    
    $me.show();

  }, 1000);
});

//--------------------------------------------------------------------------------


//--------------------------------------------------------------------------------


//--------------------------------------------------------------------------------


//--------------------------------------------------------------------------------


//--------------------------------------------------------------------------------