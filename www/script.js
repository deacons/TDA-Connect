$(document).ready(function() {
	$('iframe').load(function() {
		// Get contents of iframe for use in this code
		myframe = $('iframe').contents();
		// Design
		$(myframe).find('body').css('background-color','transparent');
		$(myframe).find('#login div:first-child img').attr('src', 'https://georgegarside.com/thomasdeaconacademy/tdalogo.jpg').css('width', '100%');
		$(myframe).find('#downloadlink').parent().remove();
		$(myframe).find('#loginboxes').contents().filter(function(){return this.nodeType === 3;}).first().replaceWith('<p id="logintextintro" style="color: rgb(51, 51, 51); font-family: \'Open Sans\'; font-size: 16px;">Welcome to the TDA Connect app!</p>');
		$(myframe).find('#loginboxes br').remove();
		$(myframe).find('#login').css({'box-shadow': '0 0 2px #888888', 'margin-top': '100px'});
		$(myframe).find('#user').attr('placeholder', 'Username');
		$(myframe).find('#pwd').attr('placeholder', 'Password');
		$(myframe).find('#user, #pwd').css({'display': 'block', 'padding': '0 0 0 5px', 'margin': '0', 'width': '100%', 'height': '43px', 'color': '#000', 'font-size': '17px', 'outline': '0', 'box-sizing': 'border-box', 'border': 'none', 'background': '0 0', 'border-radius': '0', 'border-bottom': '1px solid rgb(124, 124, 124)'});
		$(myframe).find('#loginboxes').css({'padding-top': '0'});
		$(myframe).find('input').attr({'autocomplete': 'off', 'autocorrect': 'off', 'autocapitalize': 'off', 'spellcheck': 'false'});
		// Login Button Style from Framework7
		$(myframe).find('#conn').css({'font-size': '17px', 'height': '44px', 'line-height': '42px', 'border': '1px solid #007aff', 'color': '#007aff', 'text-decoration': 'none', 'text-align': 'center', 'display': 'block', 'border-radius': '5px', 'background': '0 0', 'padding': '0 10px', 'margin': '20px auto 0', 'position': 'relative'}).attr({'ontouchstart': '', 'ontouchend': 'exeRemoteApp();'});
		$(myframe).find('h2').remove();
		$(myframe).find('#login').append('<h2 style="padding-bottom: 20px; padding-top: 0;">Hold cursor to right-click<br/>Scroll with two fingers<br/><br/>Created by George Garside<br/>Endorsed by Thomas Deacon Academy<br/><br/>For more information, see<br/>georgegarside.com/apps/tda-connect/</h2>');
		// Remove file transfer and info page buttons
		$(myframe).find('#svToolbar img').remove();
		// Show keyboard button continuously
		function showKeyboardButton() {
			setTimeout(function () {
				$(myframe).find('#svToolbar').css({'display': 'block'});
				showKeyboardButton();
			}, 200);
		}
		showKeyboardButton();
		// Fade in iframe now that it's loaded
		setTimeout(function() {
			$('iframe').fadeIn('slow');
			$(myframe).find('#svToolbar').css({'display': 'none'}); // If I don't do this, the button doesn't show
		}, 500);
		// Connect button
		$(myframe).find('#conn').bind('touchstart', function() {
			if (iAd) iAd.removeBanner();
			$('iframe').hide();
			var paceload = window.setInterval(function(){
				Pace.restart();
			}, 1000);
			$('div.page > p').text('Connecting').show();
			setTimeout(function() {
				$('div.page > p').text('Optimising network connection').show();
				if (iAd) iAd.removeBanner();
			}, 2000);
			setTimeout(function() {
				clearInterval(paceload);
				$('div.page > p').hide();
				$('iframe').fadeIn('slow');
				if (iAd) iAd.removeBanner();
			}, 10000);
		});
		if (iAd) iAd.createBanner({
			overlap: true,
			position: iAd.AD_POSITION.BOTTOM_CENTER,
			autoShow: true
		});
	});
});
