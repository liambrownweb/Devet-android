//Additions by Liam Brown
if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
			FastClick.attach(document.body);
			}, false);
}


// DEVET (C) 2002 Jordan Tuzsuzov 
// DEVET was created on 25.09-26.09 2002;
// www.tuzsuzov.com

function MakeArray(n)
{
	for (var i = 0; i <= n-1; i++)
	{
		this[i] = 0;
	}
	return this
}

function InitArray()
{
	this.length = InitArray.arguments.length
		for (var i = 0; i < this.length; i++)
			this[i] = InitArray.arguments[i]
}


var c_image = new MakeArray( 13 );
var f_field = new MakeArray( 25 );
var c_current;
var c_next;
var n_score;
var b_gameover;
var n_up 		= new InitArray( 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0 );
var n_down 	= new InitArray( 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1 );
var n_left		= new InitArray( 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1 );
var n_right	= new InitArray( 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1 );

function preload ()
{
	for ( var i = 0; i < 13; i++ )
	{
		c_image[i] = new Image (48, 48);
	}
	c_image[0].src = "graphics/element_00.gif";
	c_image[1].src = "graphics/element_01.gif";
	c_image[2].src = "graphics/element_02.gif";
	c_image[3].src = "graphics/element_03.gif";
	c_image[4].src = "graphics/element_04.gif";
	c_image[5].src = "graphics/element_05.gif";
	c_image[6].src = "graphics/element_06.gif";
	c_image[7].src = "graphics/element_07.gif";
	c_image[8].src = "graphics/element_08.gif";
	c_image[9].src = "graphics/element_09.gif";
	c_image[10].src = "graphics/element_10.gif";
	c_image[11].src = "graphics/element_11.gif";
	c_image[12].src = "graphics/element_no.gif";
}

function init_game ()
{
	dismiss_window();
	for ( var i = 0; i < 25; i ++ )
	{
		f_field[ i ] = 0;
	}
	f_field[ 12 ] = 1;

	c_current = Math.floor( Math.random() * 11 ) + 1;
	c_next = Math.floor( Math.random() * 11 ) + 1;

	n_score = 0;
	b_gameover = 0;

	show_screen();
}

function show_screen(num)
{
	flash_square(num);
	document.cl00.src = c_image[ f_field[ 0 ] ].src;
	document.cl01.src = c_image[ f_field[ 1 ] ].src;
	document.cl02.src = c_image[ f_field[ 2 ] ].src;
	document.cl03.src = c_image[ f_field[ 3 ] ].src;
	document.cl04.src = c_image[ f_field[ 4 ] ].src;
	document.cl05.src = c_image[ f_field[ 5 ] ].src;
	document.cl06.src = c_image[ f_field[ 6 ] ].src;
	document.cl07.src = c_image[ f_field[ 7 ] ].src;
	document.cl08.src = c_image[ f_field[ 8 ] ].src;
	document.cl09.src = c_image[ f_field[ 9 ] ].src;
	document.cl10.src = c_image[ f_field[ 10 ] ].src;
	document.cl11.src = c_image[ f_field[ 11 ] ].src;
	document.cl12.src = c_image[ f_field[ 12 ] ].src;
	document.cl13.src = c_image[ f_field[ 13 ] ].src;
	document.cl14.src = c_image[ f_field[ 14 ] ].src;
	document.cl15.src = c_image[ f_field[ 15 ] ].src;
	document.cl16.src = c_image[ f_field[ 16 ] ].src;
	document.cl17.src = c_image[ f_field[ 17 ] ].src;
	document.cl18.src = c_image[ f_field[ 18 ] ].src;
	document.cl19.src = c_image[ f_field[ 19 ] ].src;
	document.cl20.src = c_image[ f_field[ 20 ] ].src;
	document.cl21.src = c_image[ f_field[ 21 ] ].src;
	document.cl22.src = c_image[ f_field[ 22 ] ].src;
	document.cl23.src = c_image[ f_field[ 23 ] ].src;
	document.cl24.src = c_image[ f_field[ 24 ] ].src;

	document.ccur.src = c_image[ c_current ].src;
	document.cnext.src = c_image[ c_next ].src;

	message("<font size=\"4\"><b>SCORE : "+n_score+"</b></font>");
	if ( b_gameover )
		message_window("<div style='text-align: center'><font size=\"4\"><b>GAME OVER !</b><br/> SCORE : "+n_score+"</font></div>");
}

function scroll_left()
{
	for ( var j = 0; j < 5; j++ )
	{
		for ( var i = 0; i < 4; i++ )
		{
			f_field[ j * 5 + i ] = f_field[ j * 5 + i + 1 ];
		}
	}
	for ( var k = 4; k < 25; k += 5 )
		f_field[ k ] = 0;
}

function scroll_right()
{
	for ( var j = 0; j < 5; j++ )
	{
		for ( var i = 4; i > 0; i-- )
		{
			f_field[ j * 5 + i] = f_field[ j * 5 + i - 1 ];
		}
	}
	for ( var k = 0; k < 21; k += 5 )
		f_field[ k ] = 0;
}

function scroll_up()
{
	for ( var j = 0; j < 4; j++ )
	{
		for ( var i = 0; i < 5; i++ )
		{
			f_field[ j * 5 + i ] = f_field[ (j + 1) * 5 + i ];
		}
	}
	for ( var k = 20; k < 25; k ++ )
		f_field[ k ] = 0;
}

function scroll_down()
{
	for ( var j = 4; j > 0; j-- )
	{
		for ( var i = 0; i < 5; i++ )
		{
			f_field[ j * 5 + i ] = f_field[ (j - 1) * 5 + i ];
		}
	}
	for ( var k = 0; k < 5; k ++ )
		f_field[ k ] = 0;
}

function get_up_element(num)
{
	return num - 5;
}

function get_down_element(num)
{
	var res = num + 5;
	if ( res > 24 )
		return -1
	else
		return res;
}

function get_left_element(num)
{
	var res = num - 1;
	if ( res < 0 || res == 4 || res == 9 || res == 14 || res == 19 )
		return -1
	else
		return res;
}

function get_right_element(num)
{
	var res = num + 1;
	if ( res > 24 || res == 5 || res == 10 || res == 15 || res == 20 )
		return -1
	else
		return res;
}

function help(message)
{
	window.status = message;
	return true;
}

function message( mes )
{
	if ( document.all )
		document.all.game.innerHTML=mes;
	else if ( document.getElementById )
		document.getElementById("game").innerHTML=mes;
	else
		document.write(mes);
}

function move_possible(num)
{
	var nl, nr, nu, nd;

	if ( f_field[num] == 0 )
	{
		nl = get_left_element(num);
		nr = get_right_element(num);
		nu = get_up_element(num);
		nd = get_down_element(num);

		if ( 	(nl >= 0 && n_left[c_current] && n_right[f_field[nl]]) ||
				(nr >= 0 && n_right[c_current] && n_left[f_field[nr]]) ||
				(nu >= 0 && n_up[c_current] && n_down[f_field[nu]]) ||
				(nd >= 0 && n_down[c_current] && n_up[f_field[nd]]) )
		{
			return 1;
		}
	}
	return 0;
}

function check_endgame()
{
	b_gameover = 1;
	for ( var j = 0; j < 25; j ++ )
		if ( move_possible( j ) )
			b_gameover = 0;
}

function check_pos(num)
{
	if ( f_field[num] == 0 )
		if ( move_possible(num) )
			f_field[ num ] = 0;
		else
			f_field[ num ] = 12;

	show_screen(num);
}

function uncheck_pos(num)
{
	if ( f_field[ num ] == 12 )
		f_field[ num ] = 0;

	show_screen(num);
}

function flash_square(num) {
	if (typeof num === "undefined") return;
	var number = (num < 10) ? "0" + num : num,
		target_square = $(document['cl'+number].parentNode);
	console.log(target_square);
	target_square.css("-webkit-filter", "blur(5px)");
	target_square.css("filter", "blur(5px)");
	setTimeout(function(){
		target_square.css("filter", "");
		target_square.css("-webkit-filter", "");
		}, 150);
}

function make_move(num)
{
	if ( f_field[num] == 0 && move_possible(num) )
	{
		f_field[num] = c_current;

		if ( get_left_element(num) < 0 && n_left[c_current] ) {
			scroll_right();
			num++;
		}
		if ( get_right_element(num) < 0 && n_right[c_current] ) {
			scroll_left();
			num--;
		}
		if ( get_up_element(num) < 0 && n_up[c_current] ) {
			scroll_down();
			num += 5;
		}
		if ( get_down_element(num) < 0 && n_down[c_current] ) {
			scroll_up();
			num -= 5;
		}

		c_current = c_next
			c_next = Math.floor( Math.random() * 11 ) + 1;
		n_score ++;
	}

	check_endgame();

	help("SCORE : "+n_score);
	show_screen(num);
}

function message_window(html_text) {
	var msg_window = $("#announce");
	$(msg_window.children()[0]).html(html_text);
	$("#game_window").css("-webkit-filter", "blur(5px)");
	$("#game_window").css("filter", "blur(5px)");
	msg_window.fadeIn(250);
}

function dismiss_window(){
	$("#announce").fadeOut(500);
	$("#game_window").css("-webkit-filter", "");
	$("#game_window").css("filter", "");
}

preload();
init_game();