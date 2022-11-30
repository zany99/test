const burger = document.getElementById('burger');
const navLinks = document.querySelector('.header__links');

window.onload=function(){
    burger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        document.querySelector('body').classList.toggle('active');
    })
}

moveValuta=function(){
	var valuta1=document.getElementById('valuta1'), valuta2=document.getElementById('valuta2'), tmp= valuta1.selectedIndex;
	valuta1.selectedIndex=valuta2.selectedIndex;
	valuta2.selectedIndex=tmp;
	convertNBU();
}

convertNBU=function(){
	var valuta1=document.getElementById('valuta1'), valuta2=document.getElementById('valuta2'), input1=document.getElementById('res_valuta1'), input2=document.getElementById('res_valuta2');
	var res, k1=window.kurs[valuta1.value], k2=window.kurs[valuta2.value];
	res=(k1*res_valuta1.value)/k2;
	input2.value=res.toFixed(2);
}

showConvert=function(cc){
	if(cc==undefined)cc=['USD','EUR','PLN'];
	cc.push('UAN');
	var ajax=new XMLHttpRequest();
	ajax.open('GET', 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
	ajax.responseType='json';
	ajax.onload=function(){
		window.kurs={'UAN':1};
		for(var i=0; i<this.response.length;i++){
		kurs[this.response[i].cc]=this.response[i].rate;
		}
		var s='';
		for(var i=0;i<cc.length;i++)
		s+='<option value="'+cc[i]+'">'+cc[i]+'</option>';
		document.getElementById('valuta1').innerHTML=s;
		document.getElementById('valuta2').innerHTML=s;
		
	}
	ajax.send(null);
}

showConvert(['USD','EUR', 'PLN', 'CAD']);