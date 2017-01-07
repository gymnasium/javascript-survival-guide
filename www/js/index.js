



$(document).ready(function () {

	//CHAPTER 2 - hide / show image container example
    $('.imageContainer').dblclick(function () {
        $(this).toggle();
      $('#restoreImage').toggle();
    });


    $('#restoreImage').click(function () {
        $(this).toggle();
        $('.imageContainer').toggle();
    });

	//CHAPTER 3 - main image animation
    $('.changeSize.decrease').click(function () {
        $('.hideImageMessage').addClass('isVisible');

        $('.imageContainer').animate({
            'width' : '-=30px',
            'overflow' : 'visible'
        }, 800, function(){
            $('.hideImageMessage').removeClass('isVisible');
        });
    });

    $('.changeSize.increase').click(function () {
        $('.hideImageMessage').addClass('isVisible');

        $('.imageContainer').animate({
            'width' : '+=30px',
            'overflow' : 'visible'
        }, 800, function(){
            $('.hideImageMessage').removeClass('isVisible');
        });
    });

   //CHAPTER 3 - allow the user to add a new ingredient or preparation step

	//create the CSS needed
	var cssProperties = {
		'position' : 'absolute',
		'top' : '0',
		'right' : '0',
		'font-size' : '14px',
		'height' : '25px',
		'width' : '250px'
	}

	//create the add new ingredient button
	$('<button>Add new ingredient</button>')
	    //add the css we created earlier
		.css(cssProperties)
	    //add a click event handler
		.click(function () {
	        //prompt the user to create a new ingredient
			var newIngredientText = prompt('Add a new ingredient');

	        //if the user created a new ingredient
	        if (newIngredientText) {
	            //add that new ingredient to the list of ingredients
	            $('.tasks.ingredients').append($('<li>' + newIngredientText +  '</li>'));
	        }
		})
	    //inject the new add new ingredient button into the page
		.appendTo('.tasksContainer');

	//create the add new preparation step button
	$('<button>Add new preparation step</button>')
		.css(cssProperties)
		.css({
			'top' : '30px'
		})
		.click(function () {
	        //prompt the user to create a new preparation step
			var newPreparationStepText = prompt('Add a new preparation step');

	        //if the user created a new preparation step
	        if (newPreparationStepText) {
	            //add that new preparation step to the list of preparation steps
	            $('.tasks.preparation').append($('<li>' + newPreparationStepText +  '</li>'));
	        }
		})
	    //inject the new add new preparation step button into the page
		.appendTo('.tasksContainer');

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

	//CHAPTER 2 - enable show/hide iinfo for hyperlinks
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


	//CHAPTER 2 - mark tasks as completed on click
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

	//CHAPTER 2 - //mimic an AJAX form submission

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
});