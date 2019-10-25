/* your javascript goes here */

$(document).ready(initiateApp);

var pictures = [
	'images/landscape-1.jpg',
	'images/landscape-10.jpg',
	'images/landscape-11.jpg',
	'images/landscape-13.jpg',
	'images/landscape-15.jpg',
	'images/landscape-17.jpg',
	'images/landscape-18.jpg',
	'images/landscape-19.jpg',
	'images/landscape-2.jpg',
	'images/landscape-3.jpg',
	'images/landscape-8.jpg',
	'images/landscape-9.jpg',
	'images/pexels-photo-132037.jpeg',
	'images/pretty.jpg',
];


function initiateApp(){
	/*advanced: add jquery sortable call here to make the gallery able to be sorted
		//on change, rebuild the images array into the new order
	*/
		// function resort() {
		// pictures.sort(function (a, b) { return a - b });
		// 	$('#gallery').append('<button></button>').id('resortbutton').class('btn btn-info btn-lg').text('sort');
		// }
		// $('#resortbutton').click(resort());

	makeGallery(pictures);
	addModalCloseHandler();
}

function makeGallery(imageArray){
	//use loops and jquery dom creation to make the html structure inside the #gallery section
	// console.log('makeGallery', imageArray);
	//create a loop to go through the images in the imageArray
	for (i = 0; i < imageArray.length; i++) {
		var images = imageArray[i];

		//create the elements needed for each picture, store the elements in variable
		var imagesFigure = $('<figure></figure>');
		var output = "background-image:url(" + images + ");";
		imagesFigure.addClass('imageGallery col-xs-12 col-sm-6 col-md-4').attr('style', output);
		var imagesFigcation = $('<figcaption></figcaption>');
		var imagesNameCorrect = images.replace('images/','').replace('.jpg','').replace('.jpeg','');
		imagesFigcation.text(imagesNameCorrect);
		imagesFigure.append(imagesFigcation);

		//append the element to the #gallery section
		$('section').append(imagesFigure);
	}

	//attach a click handler to the figure you create.  call the "displayImage" function.
	$('figure').on('click', function () {
		displayImage($(this));
		//console.log(this);
	})

	// side note: make sure to remove the hard coded html in the index.html when you are done!
}


function addModalCloseHandler() {
	//add a click handler to the img element in the image modal.  When the element is clicked, close the modal
	$('.modal-content').on('click', function () {
		$('#galleryModal').modal('hide');
	})
	//for more info, check here: https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
}


function displayImage(test){
	//find the url of the image by grabbing the background-image source, store it in a variable
	var imagesUrl = test.attr('style')

	//grab the direct url of the image by getting rid of the other pieces you don't need
	var newUrl = imagesUrl.replace(/^url|[\(\)]/g, '').replace('background-image:url', '').replace(';','');

	//grab the name from the file url, ie the part without the path.  so "images/pexels-photo-132037.jpeg" would become
		// pexels-photo-132037
		//take a look at the lastIndexOf method
	var imageName = newUrl.replace('background-image:url', '').replace('images/', '').replace('.jpg', '').replace('.jpeg', '');
	// console.log(imageName);

	//change the modal-title text to the name you found above
	$('.modal-title').text(imageName);

	//change the src of the image in the modal to the url of the image that was clicked on
	$('img').attr('src', newUrl);

	//show the modal with JS.  Check for more info here:
	//https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
}
