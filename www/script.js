$(document).ready(function() {
	$('iframe').load(function() {
		myframe = $('iframe').contents();
		$(myframe).find('body').css('background-color','transparent');
		$(myframe).find('#login div:first-child img').attr('src', 'https://georgegarside.com/thomasdeaconacademy/tdalogo.jpg').css('width', '100%');
		$(myframe).find('#downloadlink').parent().remove();
		$(myframe).find('#loginboxes').contents().filter(function(){return this.nodeType === 3;}).first().replaceWith('<p id="logintextintro" style="color: rgb(51, 51, 51); font-family: \'Open Sans\'; font-size: 16px;">Welcome</p>');
		$(myframe).find('#loginboxes br').first().remove();
		$(myframe).find('#loginboxes br').first().replaceWith('<span id="logintextusername">Username</span>');
		$(myframe).find('#loginboxes br').first().replaceWith('<span id="logintextpassword">Password</span>');
		$(myframe).find('#login').css({'box-shadow': '0 0 2px #888888', 'margin-top': '100px'});
		$(myframe).find('#loginboxes').css({'padding-top': '0'});
		// Login Button Style from Framework7
		$(myframe).find('#conn').css({'font-size': '17px', 'height': '44px', 'line-height': '42px', 'border': '1px solid #007aff', 'color': '#007aff', 'text-decoration': 'none', 'text-align': 'center', 'display': 'block', 'border-radius': '5px', 'background': '0 0', 'padding': '0 10px', 'margin': '0 auto', 'position': 'relative'}).attr({'ontouchstart': '', 'ontouchend': 'exeRemoteApp();'});
		$(myframe).find('h2').text('Created by George Garside');
	});
});
