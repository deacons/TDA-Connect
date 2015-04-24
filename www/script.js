$(document).ready(function() {
	$('iframe').load(function() {
		// Get contents of iframe for use in this code
		myframe = $('iframe').contents();
		// Design
		$(myframe).find('body').css('background-color','transparent');
		$(myframe).find('#login div:first-child img').attr('src', 'https://georgegarside.com/thomasdeaconacademy/tdalogo.jpg').css('width', '100%');
		$(myframe).find('#downloadlink').parent().remove();
		$(myframe).find('#loginboxes').contents().filter(function(){return this.nodeType === 3;}).first().replaceWith('<p id="logintextintro" style="color: rgb(51, 51, 51); font-family: \'Open Sans\'; font-size: 16px;">Welcome</p>');
		$(myframe).find('#loginboxes br').remove();
		$(myframe).find('#login').css({'box-shadow': '0 0 2px #888888', 'margin-top': '100px'});
		$(myframe).find('#user').attr('placeholder', 'Username');
		$(myframe).find('#pwd').attr('placeholder', 'Password');
		$(myframe).find('#user, #pwd').css({'display': 'block', 'padding': '0 0 0 5px', 'margin': '0', 'width': '100%', 'height': '43px', 'color': '#000', 'font-size': '17px', 'outline': '0', 'box-sizing': 'border-box', 'border': 'none', 'background': '0 0', 'border-radius': '0', 'border-bottom': '0.5px solid rgb(51, 51, 51)'});
		$(myframe).find('#loginboxes').css({'padding-top': '0'});
		// Login Button Style from Framework7
		$(myframe).find('#conn').css({'font-size': '17px', 'height': '44px', 'line-height': '42px', 'border': '1px solid #007aff', 'color': '#007aff', 'text-decoration': 'none', 'text-align': 'center', 'display': 'block', 'border-radius': '5px', 'background': '0 0', 'padding': '0 10px', 'margin': '20px auto 0', 'position': 'relative'}).attr({'ontouchstart': '', 'ontouchend': 'exeRemoteApp();'});
		// Add brief controls information
		$(myframe).find('h2').html('Hold cursor to right-click<br/>Scroll with two fingers<br/><br/>Created by George Garside');
		// Remove file transfer and info page buttons
		$(myframe).find('#svToolbar img').remove();
		// Show keyboard button continuously
		function showKeyboardButton() {
			setTimeout(function () {
				$(myframe).find('#svToolbar').css({'top': 'auto', 'bottom': '0', 'margin-left': '200px'});
				showKeyboardButton();
			}, 200);
		}
		showKeyboardButton();
		$('iframe').fadeIn('slow');
	});
});
