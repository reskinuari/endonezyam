$(document).ready(function(){

	$('div.box').wrap("<div class=\"box-cont\"></div>");

	$('.gi-bor.orn').before("<span class=\"orn-text\"><i class=\"gi-orn-text\">Örnek</i></span>");

	$('.gi-bor.not').before("<span class=\"not-text\"><i class=\"gi-not-text\">Not</i></span>");

	$('.a1-bor.orn').before("<span class=\"orn-text\"><i class=\"a1-orn-text\">Örnek</i></span>");

	$('.a1-bor.not').before("<span class=\"not-text\"><i class=\"a1-not-text\">Not</i></span>");

	$('.a2-bor.orn').before("<span class=\"orn-text\"><i class=\"a2-orn-text\">Örnek</i></span>");

	$('.a2-bor.not').before("<span class=\"not-text\"><i class=\"a2-not-text\">Not</i></span>");

	$('.b1-bor.orn').before("<span class=\"orn-text\"><i class=\"b1-orn-text\">Örnek</i></span>");

	$('.b1-bor.not').before("<span class=\"not-text\"><i class=\"b1-not-text\">Not</i></span>");

	$('.b2-bor.orn').before("<span class=\"orn-text\"><i class=\"b2-orn-text\">Örnek</i></span>");

	$('.b2-bor.not').before("<span class=\"not-text\"><i class=\"b2-not-text\">Not</i></span>");

	$('table').wrap("<div style=\"overflow-x: auto;\"></div>");

	$('.alfabet tr td:nth-child(6)').addClass('kelime');

	var ses = $('#audio');
	var kelime;

	$('.dinle').click(function(){
		kelime = $(this).attr('id');

		switch (kelime) {
			case 'al01':
			    ses.attr("src", "../audio/01.mp3");
				break;
			case 'al02':
				ses.attr("src", "../audio/02.mp3");
				break;
			case 'al03':
			    ses.attr("src", "../audio/03.mp3");
				break;
			case 'al04':
				ses.attr("src", "../audio/04.mp3");
				break;
			case 'al05':
			    ses.attr("src", "../audio/05.mp3");
				break;
			case 'al06':
				ses.attr("src", "../audio/06.mp3");
				break;
			case 'al07':
			    ses.attr("src", "../audio/07.mp3");
				break;
			case 'al08':
				ses.attr("src", "../audio/08.mp3");
				break;
			case 'al09':
			    ses.attr("src", "../audio/09.mp3");
				break;
			case 'al10':
				ses.attr("src", "../audio/10.mp3");
				break;
			case 'al11':
			    ses.attr("src", "../audio/11.mp3");
				break;
			case 'al12':
				ses.attr("src", "../audio/12.mp3");
				break;
			case 'al13':
			    ses.attr("src", "../audio/13.mp3");
				break;
			case 'al14':
				ses.attr("src", "../audio/14.mp3");
				break;
			case 'al15':
			    ses.attr("src", "../audio/15.mp3");
				break;
			case 'al16':
				ses.attr("src", "../audio/16.mp3");
				break;
			case 'al17':
			    ses.attr("src", "../audio/17.mp3");
				break;
			case 'al18':
				ses.attr("src", "../audio/18.mp3");
				break;
			case 'al19':
				ses.attr("src", "../audio/19.mp3");
				break;
			case 'al20':
				ses.attr("src", "../audio/20.mp3");
				break;
			case 'al21':
			    ses.attr("src", "../audio/21.mp3");
				break;
			case 'al22':
				ses.attr("src", "../audio/22.mp3");
				break;
			case 'al23':
			    ses.attr("src", "../audio/23.mp3");
				break;
			case 'al24':
				ses.attr("src", "../audio/24.mp3");
				break;
			case 'al25':
			    ses.attr("src", "../audio/25.mp3");
				break;
			case 'al26':
				ses.attr("src", "../audio/26.mp3");
				break;
			case 'al27':
			    ses.attr("src", "../audio/27.mp3");
				break;
			case 'al28':
				ses.attr("src", "../audio/28.mp3");
				break;
			case 'al29':
				ses.attr("src", "../audio/29.mp3");
				break;
		}

		ses.trigger('play');
	});

});