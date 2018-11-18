$('.owl-carousel.banner').owlCarousel({
    loop:true,
	items:1,
	dots: false,
	autoplay: true,
	autoplayTimeout: 4000,
    responsive:{
        786:{
			nav:true
        }
    }
})
$('.owl-carousel.kh').owlCarousel({
    loop: true,
	items: 1,
	dots: true,
	autoplay: true,
	autoplayTimeout: 5000,
})
$('.owl-carousel.thsilder').owlCarousel({
    loop: true,
	nav: true,
	dots: false,
	autoplay: true,
	autoplayTimeout: 3000,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})
$('.box').hover(function(){
	$(this).find('figure img').css({
		'outline': '#00c4c9 solid 5px',
		'filter': 'none'})
	$(this).find('h4').css({'color' : '#00c4c9',})
	$(this).find('p.text').css({'color' : 'black',})
},function(){
	$(this).find('figure img').removeAttr('style')
	$(this).find('h4').removeAttr('style')
	$(this).find('p').removeAttr('style')
} )

$('.dinhhuong .hover').hover(function(){
	$(this).find('i').css({	'color' : '#00c4c9'})
	$(this).find('p:first').css({'color' : '#00c4c9'})
},function(){
	$(this).find('i').removeAttr('style')
	$(this).find('p:first').removeAttr('style')
} )

$('.dinhhuongtwo .tab #tab0 img').hover(function(){
	$(this).css({
		'outline': '#00c4c9 solid 5px',
		'filter': 'none'
	})
},function(){
	$(this).removeAttr('style')
	
} )
$('.dinhhuongtwo .tabchon a').on('click',function(){
	$(this).addClass('showaz').siblings().removeClass('showaz')
	var data_tab = $(this).attr('data-tab')
	$(this).parents('.tab').find('#tab0 .item').hide()
	$(this).parents('.tab').find('#tab0 .item#'+data_tab).each(function(){$(this).show()})
	if(data_tab=='tab0')
	$(this).parents('.tab').find('#tab0 .item').show()
})
