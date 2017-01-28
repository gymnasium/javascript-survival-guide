//CODE EXAMPLES: Making changes to a web page with jquery

//--------------------------------------------------------------------------------

//make all list items red

$('li').css('color', 'red');

//--------------------------------------------------------------------------------

//make all list items 50px font size

$('li').css('font-size', '50px');


//--------------------------------------------------------------------------------

//decrease font size by 5px

$('li').css('font-size', '-=5px');

//--------------------------------------------------------------------------------

//change two CSS properties

$('li').css('color', 'red');
$('li').css('font-size', '50px');

//--------------------------------------------------------------------------------

//use an object to change multiple CSS properties

//change multiple CSS properties by passing an object
$('li').css({
	'color' : 'red',
	'font-size' : '50px'
});

//--------------------------------------------------------------------------------

//change several CSS properties

//change several CSS properties at once
$('li').css({
	'color' : '#fff',
	'font-size' : '25px',
	'font-family' : 'Times',
	'background-color' : '#ef8200',
	'padding' : '10px',
	'border': '2px solid #333',
	'border-radius' : '5px',
	'list-style-type' : 'none'
});

//--------------------------------------------------------------------------------

//define an object, and then pass it to the css method

//create the properties object first
var cssProperties = {
	'color' : '#fff',
	'font-size' : '25px',
	'font-family' : 'Times',
	'background-color' : '#ef8200',
	'padding' : '10px',
	'border-radius' : '5px',
	'list-style-type' : 'none'
}

//and then pass that object to the jQuery css method
$('li').css(cssProperties);

//--------------------------------------------------------------------------------

//create a stylesheet dynamically

jQuery('<link rel="stylesheet" href="css/change-tasks-to-buttons.css"/>').appendTo('body');

//--------------------------------------------------------------------------------

//add attributes one at a time

jQuery('<link />')
	.attr('rel', 'stylesheet')
	.attr('href', 'css/change-tasks-to-buttons.css')
	.appendTo('body');


//--------------------------------------------------------------------------------

//add an embedded stylesheet dynamically

var cssText = '.tasks li{color:#fff;font-size:25px;font-family:Times;background-color:#ef8200;padding:10px;border-radius:5px;list-style-type:none}';

jQuery('<style>' + cssText + '</style>').appendTo('body');

//--------------------------------------------------------------------------------

//make embedded stylesheet code more expressive

var cssText = '.tasks li{color:#fff;font-size:25px;font-family:Times;background-color:#ef8200;padding:10px;border-radius:5px;list-style-type:none}';

jQuery('<style />').text(cssText).appendTo('body');

//--------------------------------------------------------------------------------

//create a new header element

var $newHeader = $('<h1>This is a new header</h1>');

//--------------------------------------------------------------------------------

//inject the new header into the body

var $newHeader = $('<h1>This is a new header</h1>');

$newHeader.prependTo('body');
//--------------------------------------------------------------------------------

//make new header injecttion code more expressive

$('<h1>This is a new header</h1>').prependTo('body');

//--------------------------------------------------------------------------------

//inject a new image into the page

$('<img src="images/energy-bars.jpg">').prependTo('body');

//--------------------------------------------------------------------------------

//add a buttton

$('<button id="changeTasks ">Change Tasks to Buttons</button>')
	.appendTo('.tasksContainer');

//--------------------------------------------------------------------------------

//add a buttton with custom styling

$('<button id="changeTasks ">Change Tasks to Buttons</button>')
	.css({
		'position' : 'absolute',
		'top' : '0',
		'right' : '0',
		'font-size' : '14px',
		'height' : '25px',
		'width' : '200px'
	})
	.appendTo('.tasksContainer');

//--------------------------------------------------------------------------------

//allow the user to add a new ingredient

//create the CSS needed
var cssProperties = {
	'position' : 'absolute',
	'top' : '0',
	'right' : '0',
	'font-size' : '14px',
	'height' : '25px',
	'width' : '200px'
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

//--------------------------------------------------------------------------------

//allow the user to add a new ingredient or preparation step

//create the CSS needed
var cssProperties = {
	'position' : 'absolute',
	'top' : '0',
	'right' : '0',
	'font-size' : '14px',
	'height' : '25px',
	'width' : '200px'
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
//--------------------------------------------------------------------------------

//create a large block of HTML

//create the HTML string
var nutritionInfoHtml = ''
	+ '<h3>Nutritional Information</h3>'
	+ '<div>'
		+ '<ul>'
			+ '<li><b>Protein: </b>100g</li>'
			+ '<li><b>Sodium: </b>110g</li>'
			+ '<li><b>Trans Fat: </b>0g</li>'
			+ '<li><b>Total Carbs: </b>22g</li>'
			+ '<li><b>Sugars: </b>1g</li>'
		+ '</ul>'
	+ '</div>';

//inject the new HTML
$('.tasks.left').append(nutritionInfoHtml);

//--------------------------------------------------------------------------------

//remove an element

$('li').remove();

//--------------------------------------------------------------------------------

//remove list items one-by-one

$('li')[0].remove();

//--------------------------------------------------------------------------------

//remove list item on click

//when a list item is clicked
$('li').click(function () {
    //remove the clicked item
	$(this).remove();
});

//--------------------------------------------------------------------------------

//slide the image container down 500px

//modify the CSS of the image container
$('.imageContainer').css({
  'position' : 'relative',
  'top' : '0',
  'transition' : 'all 0.9s ease-in-out 0s'
});

//wait 1/4 scond so that the CSS changes are complete
setTimeout(function () {
    //change the CSS so that the animation kicks-in
    $('.imageContainer').css({
        'top' : '500px'
    });
}, 250);

//--------------------------------------------------------------------------------

//change the image container width

//set the CSS transition property
$('.imageContainer').css({
  'transition' : 'all 0.9s ease-in-out 0s'
});

//change the CSS so that the animation kicks-in
$('.imageContainer').css({
  'width' : '100px'
});

//--------------------------------------------------------------------------------

//animation with jQuery's animate method

$('.imageContainer').animate({
    'right' : '-=300px'
});

//--------------------------------------------------------------------------------

//multiple animations

$('.imageContainer').animate({
    'left' : '+=300px',
    'top' : '+=300px'
});

//--------------------------------------------------------------------------------

//set the animation duration

$('.imageContainer').animate({
    'left' : '+=300px',
    'top' : '+=500px'
}, 1000);

//--------------------------------------------------------------------------------

//add a completion callback

$('.imageContainer').animate({
    'left' : '+=300px',
    'top' : '+=500px'
}, 3000, function () {
    //this alert should only happen after the animation has completed
	alert('Done!');
});

//--------------------------------------------------------------------------------

//add a visual queue in the completion callback

var $imageContainer = $('.imageContainer');

$imageContainer.animate({
    'left' : '+=300px',
    'top' : '+=300px'
}, 3000, function () {
    //this visual cue should only happen after the animation has completed
	$imageContainer.css({
		'outline' : '10px solid red'
	});
});

//--------------------------------------------------------------------------------


//decrease the image container size on click

//when the decrease button is clicked
$('.changeSize.decrease').click(function () {

    //animate the mage container, decreasing size
    $('.imageContainer').animate({
        'width' : '-=30px',
        'overflow' : 'visible'
    }, 800);
});

//--------------------------------------------------------------------------------

//add a hide image message

//when the decrease button is clicked
$('.changeSize.decrease').click(function () {
    //show the hide image message
    $('.hideImageMessage').addClass('isVisible');

    //animate the mage container, decreasing size
    $('.imageContainer').animate({
        'width' : '-=30px',
        'overflow' : 'visible'
    }, 800);
});

//--------------------------------------------------------------------------------

//hide the hide image message after the animation completes

//when the decrease button is clicked
$('.changeSize.decrease').click(function () {
    //show the hide image message
    $('.hideImageMessage').addClass('isVisible');

    //animate the mage container, decreasing size
    $('.imageContainer').animate({
        'width' : '-=30px',
        'overflow' : 'visible'
    }, 800, function () {
        //fade-out the hide image message after 800ms
        $('.hideImageMessage').removeClass('isVisible');
    })
});

//--------------------------------------------------------------------------------

//increase the image container size on click

//when the increase button is clicked
$('.changeSize.increase').click(function () {
    //fade-in the hide image message 
    $('.hideImageMessage').addClass('isVisible');

    //animate the mage container, decreasing size
    $('.imageContainer').animate({
        'width' : '+=30px',
        'overflow' : 'visible'
    }, 800, function () {
        //fade-out the hide image message after 800ms
        $('.hideImageMessage').removeClass('isVisible');
    });
});

//--------------------------------------------------------------------------------

//add the ability to show/hide the main image

//when the image container is bouble-clicked
$('.imageContainer').dblclick(function () {
    //hide the image container 
    $(this).toggle();

    //show the restore image link
    $('#restoreImage').toggle();
});

//when the restore image link is clicked
$('#restoreImage').click(function () {
    //hide the restore image link
    $(this).toggle();

    //show the image container
    $('.imageContainer').toggle();
});
//--------------------------------------------------------------------------------

//full working example for main image animation

//when the decrease button is clicked
$('.changeSize.decrease').click(function () {
    //fade-in the hide image message 
    $('.hideImageMessage').addClass('isVisible');

    //animate the mage container, decreasing size
    $('.imageContainer').animate({
        'width' : '-=30px',
        'overflow' : 'visible'
    }, 800, function () {
        //fade-out the hide image message after 800ms
        $('.hideImageMessage').removeClass('isVisible');
    });
});

//when the increase button is clicked
$('.changeSize.increase').click(function () {
    //fade-in the hide image message 
    $('.hideImageMessage').addClass('isVisible');

    //animate the mage container, increasing size
    $('.imageContainer').animate({
        'width' : '+=30px',
        'overflow' : 'visible'
    }, 800, function(){
        //fade-out the hide image message after 800ms
        $('.hideImageMessage').removeClass('isVisible');
    });
});

//when the image container is bouble-clicked
$('.imageContainer').dblclick(function () {
    //hide the image container
    $(this).toggle();

    //show the restore image link
  $('#restoreImage').toggle();
});

//when the restore image link is clicked
$('#restoreImage').click(function () {
    //hide the restore image link
    $(this).toggle();

    //show the image container
    $('.imageContainer').toggle();
});

//--------------------------------------------------------------------------------

//change the background color to yellow

<script>
    //make the entire page background yellow
    $('body').css({
        'background-color' : 'yellow'
    });
</script>

//--------------------------------------------------------------------------------

//wait until the document is ready

<script>
    //wait until the document is ready
    $(document).ready(function () {
        $('body').css({
            'background-color' : 'yellow'
        });
    });
</script>

//--------------------------------------------------------------------------------

//use document is ready for the main image animation

$(document).ready(function () {
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

    $('.imageContainer').dblclick(function () {
        $(this).toggle();
      $('#restoreImage').toggle();
    });


    $('#restoreImage').click(function () {
        $(this).toggle();
        $('.imageContainer').toggle();
    });
});

//--------------------------------------------------------------------------------

