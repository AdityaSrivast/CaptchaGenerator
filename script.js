$(document).ready(function(){
	function gen_random_alpha(){
		return Math.floor(Math.random() * 26);
	}
	function gen_random_num()
	{
		return Math.floor(Math.random() * 10);
	}
	var s=['','','','',''];
	s[0]=String.fromCharCode(gen_random_alpha()+65);
	s[1]=String.fromCharCode(gen_random_num()+48);
	s[2]=String.fromCharCode(gen_random_alpha()+65);
	s[3]=String.fromCharCode(gen_random_alpha()+65);
	s[4]=String.fromCharCode(gen_random_num()+48);
	l=s.join('');

	$('#display').val(l);

	$("#btn").click(function(){
	s[0]=String.fromCharCode(gen_random_alpha()+65);
	s[1]=String.fromCharCode(gen_random_num()+48);
	s[2]=String.fromCharCode(gen_random_alpha()+65);
	s[3]=String.fromCharCode(gen_random_alpha()+65);
	s[4]=String.fromCharCode(gen_random_num()+48);
	l=s.join('');

	$('#display').val(l);
	});

	cap=$('#captcha');//$('#selectlist').val();

	$("#btn2").click(function(){
		// console.log(l);
		// console.log(cap.val());
		//console.log($('#captcha').val());
		if(cap.val()!=l){
			alert("Incorrect Captcha");
		}
		else{
			alert("Congratulations!!! You are Registered");
		}
	});
});