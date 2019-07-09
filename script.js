$(document).ready(function () {
	
	const insert = (num) => {
		$(".myChampsCalc").val($(".myChampsCalc").val() + num);
	}
	const total = () => {
		let exp = $(".myChampsCalc").val();
		$(".myChampsCalc").val(eval(exp));
	}


	const clear = () => {
		$(".myChampsCalc").val('');
	}

	$('.button-addon2').click(function () 
	{
		let val = $(this).parent().parent().children('.oldVal').val();
		
		let numModif = val.replace("," , ".");
		let numModif2 = numModif.replace(" ", "");
		$(this).parent().parent().children('.oldVal').addClass('calculetteOn');
		$(".myChampsCalc").val(numModif2);
		
		
		
	});
	$('.replace').click(function () { 
		let exp = $(".myChampsCalc").val();
		let val = eval(exp);
		$('#coulcoulette').modal('hide');		
		
		$('.calculetteOn').val(val);

		$('.calculetteOn').removeClass('calculetteOn');
	});
	
	$('.val').off().on('click', function () { 
		let num = $(this).val();
		console.log($(this).val());
		insert(num);

		if ($(this).val() === 'C') {
			clear();
		}
	});

	$('.totaux').click(function () {
		total();
	});

});