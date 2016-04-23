//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------

//Example # XX

$('li').css('color', 'red');

//--------------------------------------------------------------------------------

//Example # XX

$('li').css('font-size', '50px');


//--------------------------------------------------------------------------------

//Example # XX

$('li').css('font-size', '-=5px');

//--------------------------------------------------------------------------------

//Example # XX

$('li').css('color', 'red');
$('li').css('font-size', '50px');

//--------------------------------------------------------------------------------

//Example # XX

$('li').css({
	'color' : 'red',
	'font-size' : '50px'
});
//--------------------------------------------------------------------------------

//Example # XX

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
//Example # XX

var cssProperties = {
	'color' : '#fff',
	'font-size' : '25px',
	'font-family' : 'Times',
	'background-color' : '#ef8200',
	'padding' : '10px',
	'border-radius' : '5px',
	'list-style-type' : 'none'
}

$('li').css(cssProperties);
//--------------------------------------------------------------------------------

//Example # XX

jQuery('<link rel="stylesheet" href="css/change-tasks-to-buttons.css"/>').appendTo('body');

//--------------------------------------------------------------------------------

//Example # XX

jQuery('<link />')
	.attr('rel', 'stylesheet')
	.attr('href', 'css/change-tasks-to-buttons.css')
	.appendTo('body');


//--------------------------------------------------------------------------------

//Example # XX

var cssText = '.tasks li{color:#fff;font-size:25px;font-family:Times;background-color:#ef8200;padding:10px;border-radius:5px;list-style-type:none}';

jQuery('<style>' + cssText + '</style>').appendTo('body');

//--------------------------------------------------------------------------------

//Example # XX

var cssText = '.tasks li{color:#fff;font-size:25px;font-family:Times;background-color:#ef8200;padding:10px;border-radius:5px;list-style-type:none}';

jQuery('<style />').text(cssText).appendTo('body');

//--------------------------------------------------------------------------------

//Example # XX

var $newHeader = $('<h1>This is a new header</h1>');

//--------------------------------------------------------------------------------

//Example # XX

var $newHeader = $('<h1>This is a new header</h1>');

$newHeader.prependTo('body');
//--------------------------------------------------------------------------------

//Example # XX

$('<h1>This is a new header</h1>').prependTo('body');

//--------------------------------------------------------------------------------

//Example # XX

$('<img src="images/energy-bars.jpg">').prependTo('body');

//--------------------------------------------------------------------------------

//Example # XX

$('<button id="changeTasks ">Change Tasks to Buttons</button>')
	.appendTo('.tasksContainer');

//--------------------------------------------------------------------------------
//Example # XX

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
//Example # XX

var cssProperties = {
	'position' : 'absolute',
	'top' : '0',
	'right' : '0',
	'font-size' : '14px',
	'height' : '25px',
	'width' : '200px'
}

$('<button>Add new ingredient</button>')
	.css(cssProperties)
	.click(function () {
		var newIngredientText = prompt('Add a new ingredient');

		$('.tasks.ingredients').append($('<li>' + newIngredientText +  '</li>'))
	})
	.appendTo('.tasksContainer');

//--------------------------------------------------------------------------------

//Example # XX

var cssProperties = {
	'position' : 'absolute',
	'top' : '0',
	'right' : '0',
	'font-size' : '14px',
	'height' : '25px',
	'width' : '200px'
}

$('<button>Add new ingredient</button>')
	.css(cssProperties)
	.click(function () {
		var newIngredientText = prompt('Add a new ingredient');

		$('.tasks.ingredients').append($('<li>' + newIngredientText +  '</li>'))
	})
	.appendTo('.tasksContainer');

$('<button>Add new preparation step</button>')
	.css(cssProperties)
	.css({
		'top' : '30px'
	})
	.click(function () {
		var newPreparationStepText = prompt('Add a new preparation step');

		$('.tasks.preparation').append($('<li>' + newPreparationStepText +  '</li>'))
	})
	.appendTo('.tasksContainer');
//--------------------------------------------------------------------------------

//Example # XX

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


$('.tasks.left').append(nutritionInfoHtml);

//--------------------------------------------------------------------------------

//Example # XX

$('li').remove();

//--------------------------------------------------------------------------------
//Example # XX

$('li')[0].remove();

//--------------------------------------------------------------------------------

//Example # XX

$('li').click(function () {
	$(this).remove();
});

//--------------------------------------------------------------------------------

//Example # XX

$('.imageContainter').css({
  'position' : 'relative',
  'top' : '0',
  'transition' : 'all 0.9s ease-in-out 0s'
});

setTimeout(function () {
  $('.imageContainter').css({
      'top' : '500px'
  });
}, 250);

//--------------------------------------------------------------------------------

//Example # XX

$('.imageContainter').css({
  'transition' : 'all 0.9s ease-in-out 0s'
});

$('.imageContainter').css({
  'width' : '100px'
});

//--------------------------------------------------------------------------------

//Example # XX

$('.imageContainter').animate({
    'right' : '-=300px'
});

//--------------------------------------------------------------------------------

//Example # XX

$('.imageContainter').animate({
    'left' : '+=300px',
    'top' : '+=300px'
});

//--------------------------------------------------------------------------------

//Example # XX

$('.imageContainter').animate({
    'left' : '+=300px',
    'top' : '+=500px'
}, 1000);


//Example # XX

$('.imageContainter').animate({
    'left' : '+=300px',
    'top' : '+=500px'
}, 3000);


//--------------------------------------------------------------------------------
//Example # XX

$('.imageContainter').animate({
    'left' : '+=300px',
    'top' : '+=500px'
}, 3000, function () {
	alert('Done!');
});

//--------------------------------------------------------------------------------

var $imageContainter = $('.imageContainter');

$imageContainter.animate({
    'left' : '+=300px',
    'top' : '+=300px'
}, 3000, function () {
	$imageContainter.css({
		'outline' : '10px solid red'
	});
});

//--------------------------------------------------------------------------------


//Example # XX

$('.changeSize.decrease').click(function(){
    $('.hideImageMessage').addClass('isVisible');

    $('.imageContainter').animate({
        'width' : '-=30px',
        'overflow' : 'visible'
    }, 800, function(){
        $('.hideImageMessage').removeClass('isVisible');
    });
});

//--------------------------------------------------------------------------------

//Example # XX

$('.changeSize.increase').click(function(){
    $('.hideImageMessage').addClass('isVisible');

    $('.imageContainter').animate({
        'width' : '+=30px',
        'overflow' : 'visible'
    }, 800, function(){
        $('.hideImageMessage').removeClass('isVisible');
    });
});


//--------------------------------------------------------------------------------

//Example # XX

$('.imageContainter').dblclick(function(){
    $(this).toggle();
  $('#restoreImage').toggle();
});

$('#restoreImage').click(function(){
    $(this).toggle();
    $('.imageContainter').toggle();
});
//--------------------------------------------------------------------------------

//Example # XX

$('.changeSize.decrease').click(function(){
    $('.hideImageMessage').addClass('isVisible');

    $('.imageContainter').animate({
        'width' : '-=30px',
        'overflow' : 'visible'
    }, 800, function(){
        $('.hideImageMessage').removeClass('isVisible');
    });
});

$('.changeSize.increase').click(function(){
    $('.hideImageMessage').addClass('isVisible');

    $('.imageContainter').animate({
        'width' : '+=30px',
        'overflow' : 'visible'
    }, 800, function(){
        $('.hideImageMessage').removeClass('isVisible');
    });
});

$('.imageContainter').dblclick(function(){
    $(this).toggle();
  $('#restoreImage').toggle();
});


$('#restoreImage').click(function(){
    $(this).toggle();
    $('.imageContainter').toggle();
});

//--------------------------------------------------------------------------------

//Example # XX

$(document).ready(function(){
    $('.changeSize.decrease').click(function(){
        $('.hideImageMessage').addClass('isVisible');

        $('.imageContainter').animate({
            'width' : '-=30px',
            'overflow' : 'visible'
        }, 800, function(){
            $('.hideImageMessage').removeClass('isVisible');
        });
    });

    $('.changeSize.increase').click(function(){
        $('.hideImageMessage').addClass('isVisible');

        $('.imageContainter').animate({
            'width' : '+=30px',
            'overflow' : 'visible'
        }, 800, function(){
            $('.hideImageMessage').removeClass('isVisible');
        });
    });

    $('.imageContainter').dblclick(function(){
        $(this).toggle();
      $('#restoreImage').toggle();
    });


    $('#restoreImage').click(function(){
        $(this).toggle();
        $('.imageContainter').toggle();
    });
});
//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------

