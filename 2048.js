var num=0;
var x=4;
window.onload=function(){
	$('.sure').click(function(){
		window.location.reload();
	})
	$('.refuse').click(function(){
		$('.all').addClass('en');
	})
	for(let i=1;i<=x*x;i++)
		$('.body').append('<div class="box"><div class="key"><span></span></div></div> ');
	$('.body').css({
		'width':x*125+'px',
		'height':x*125+'px'
	})
	$('.box').css({
		'width':86/x+'%',
		'height':86/x+'%'
		//'margin-top':10/(x+1)+'%'
	})
	rand1();
	rand1();
	$('.ch').click(function(){
		let a=Number($('.input>input').val());
		x=a;
		if(a>1&&a<7)
		{
			x=a;
			num=0;
			change(num);
			$('.body').html('');
			for(let i=1;i<=a*a;i++)
				$('.body').append('<div class="box"><div class="key"><span></span></div></div> ');
			$('.body').css({
				'width':a*125+'px',
				'height':a*125+'px'
			})
			$('.box').css({
				'width':86/a+'%',
				'height':86/a+'%',
				'margin-top':10/(a+1)+'%'
			})
		rand1();
		rand1();
		}
		
	})
	$('.ui').eq(0).animate({
		'left':'30px'
	},1000);

}


$(window).keydown(function(e){
	let key=Number(e.originalEvent.keyCode);
	let a=2;
	switch (key) {
		case 38:
			a=up();
			break;
		case 39:
			a=right();
			break;
		case 40:
			a=down();
			break;
		case 37:
			a=left();
			break;
		default:
			console.log('check your input');
			a=1;
			break;
	}
	if(a!=1)
	rand1(a);
})

function up(){
	var a=2;
	for(let i = 0; i<x;i++)
	{
		for(let j=0;j<x-1;j++)
		{
			var va=$('.key').eq(i+j*x).children().text();
			for(let z=j+1;z<x;z++)
			{
				var te=$('.key').eq(i+z*x).children().text();
				if(te=='') continue;
				if(va=='')
				{
					if(te!=''){
						va=te;
						$('.key').eq(i+j*x).children().text(Number(te));
						$('.key').eq(i+z*x).children().text('');
						a=0;
					}
				}
				else
				{
					if(va==te)
					{
						num+=Number(va);
						change(num);
						va=Number(va)*2;
						$('.key').eq(i+j*x).children().text(va);
						donghua($('.key').eq(i+j*x));
						$('.key').eq(i+z*x).children().text('');
						a=0;
					}
					else(va!=te)
						break;
				}
			}
		}		
	}
	return a;
}
function right(){
	var a=2;
	for(let i=x-1;i<=x*x-1;i=i+x)
	{
		for(let j=0;j<x;j++)
		{
			var va=$('.key').eq(i-j).children().text();
			for(let z=j+1;z<x;z++)
			{
				var te=$('.key').eq(i-z).children().text();
				if(te=='') continue;
				if(va=='')
				{
					if(te!=''){
						va=te;
						/*//移动动画
						
						$('.key').eq(i-z).animate({
							'left':107*(z-j)+'px'
							},300,function(){
								console.log(z-j);
								$(this).animate({
									'left':0
								},0,function(){
									console.log(i,j);
									$('.key').eq(i-j).children().text(Number(te));
									$('.key').eq(i-z).children().text('');
								})
							});
						
						//移动动画*/

						$('.key').eq(i-j).children().text(Number(te));
						$('.key').eq(i-z).children().text('');
						a=0;
					}
				}
				else
				{
					if(va==te)
					{
						num+=Number(va);
						change(num);
						va=Number(va)*2;
						$('.key').eq(i-j).children().text(va);
						donghua($('.key').eq(i-j));
						$('.key').eq(i-z).children().text('');
						a=0;
					}
					else(va!=te)
						break;
				}
			}	
			
		}
	}
	return a;
}
function down(){
	var a=2;
	for(let i = 0; i<x;i++)
	{
		for(let j=0;j<x;j++)
		{
			var va=$('.key').eq(i+(x-1-j)*x).children().text();
			for(let z=j+1;z<x;z++)
			{
				var te=$('.key').eq(i+(x-1-z)*x).children().text();
				if(te=='') continue;
				if(va=='')
				{
					if(te!=''){
						va=te;
						$('.key').eq(i+(x-1-j)*x).children().text(Number(te));
						$('.key').eq(i+(x-1-z)*x).children().text('');
						a=0;
					}
				}
				else
				{
					if(va==te)
					{
						num+=Number(va);
						change(num);
						va=Number(va)*2;
						$('.key').eq(i+(x-1-j)*x).children().text(va);
						donghua($('.key').eq(i+(x-1-j)*x));
						$('.key').eq(i+(x-1-z)*x).children().text('');
						a=0;
					}
					else(va!=te)
						break;
				}
			}
		}		
	}
	return a;
}
function left(){
	var a=2;
	for(let i=0;i<=x*(x-1);i=i+x)
	{
		for(let j=0;j<x;j++)
		{
			var va=$('.key').eq(i+j).children().text();
			for(let z=j+1;z<x;z++)
			{
				var te=$('.key').eq(i+z).children().text();
				if(te=='') continue;
				if(va=='')
				{
					if(te!=''){
						va=te;
						$('.key').eq(i+j).children().text(Number(te));
						$('.key').eq(i+z).children().text('');
						a=0;
					}
				}
				else
				{
					if(va==te)
					{
						num+=Number(va);
						change(num);
						va=Number(va)*2;
						$('.key').eq(i+j).children().text(va);
						donghua($('.key').eq(i+j));
						$('.key').eq(i+z).children().text('');
						a=0;
					}
					else(va!=te)
						break;
				}
			}	
			
		}
	}
	return a;
}

function rand1(u){
	var src=[],len,judge=0;
	for(var i=0;i<x*x;i++)
	{
		let a=$('.key').eq(i).children().text(),j=i;
		$('.key').eq(i).css('background',color(Number(a)));
		if($('.key').eq(i).children().text()=='')
			src.push(i);
		if((i-x)/x>0)
			if(judge1(a,i-x)) judge=1;
		if((i+x)/x<x)
			if(judge1(a,i+x)) judge=1;
		if(Math.floor((j+1)/x)==Math.floor(i/x))
			if(judge1(a,i+1)) judge=1;
		if(Math.floor((j-1)/x)==Math.floor(i/x))
			if(judge1(a,i-1)) judge=1;
	}
	len=src.length;
	console.log(u,len,judge,src);
	if(!len&&!judge)
		end();
	if(u!=2)
	{
		let a=Math.floor(len*Math.random());
		setTimeout(donghua1(a,src),0);
	}	
}

function donghua1(a,src){
	$('.key').eq(src[a]).animate({
			'top':'50%',
			'left':'50%',
			'width':0,
			'height':0
		},0,function(){
			$(this).children().text(2);
			$(this).css('background',color(2));
			$(this).animate({
				'top':0,
				'left':0,
				'width':'100%',
				'height':'100%'
			},200)
		});
}

function judge1(tar,judge){
	if(tar==$('.key').eq(judge).children().text())
		return true;
	else 
		return false;
}


function color(num){
	switch (num) {
		case 2:
		case 512:
			return '#F6F0D5';
			break;
		case 4:
		case 1024:
			return '#E7CD94';
			break;
		case 8:
		case 2048:
			return '#F9D56B';
			break;
		case 16:
		case 4096:
			return '#F9D43A';
			break;
		case 32:
		case 8192:
			return '#FCA769';
			break;
		case 64:
		case 16384:
			return '#F2860E';
			break;
		case 128:
		case 32768:
			return '#F9D43A';
			break;
		case 256:
		case 65536:
			return '#F96F60';
			break;
		default:
			return '#989898';
			break;
	}
}

function donghua(ele){
	ele.animate({
		width:'80%',
		height:'80%',
		left:'10%',
		top:'10%'
	},0,function(){
		ele.animate({
			width:'100%',
			height:'100%',
			left:0,
			top:0
		},300);
	});
}

function change(data){
	let cha='你的分数：'+data;
	$('.num').text(cha);
}

function end(){
	$('.all').removeClass('en')
	$('#count').text(num);
}


