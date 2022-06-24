// $(function(){
//    $(':submit').click(function(e) {
//       $('.text2').attr('disabled','disabled');
//       e.preventDefault();
//    });
//    $(':reset').click(function(e) {
//       $('.text2').removeAttr('disabled');
//       e.preventDefault();
//    });
// });

// $(document).ready(function () {
//     var tagP = $('.mainText p').hide(2000).show(2000);
// })

// $(function(){
//     $('.icons > div:last').hide(4000);
// });

// $(function(){
//     var w =  $('a.btn').width();
//     // alert(h);
//     var h = $('a.btn').height();
//     alert(h);
// })

// $(function () {
//     function widhtAndHeight(element) {
//         var className = "." + element;
//         var w = $(className).width();
//         var h = $(className).height();
//         $('.mainText p').text('Ширина:'+ w + '; Высота:' + h );
//     }
//     widhtAndHeight('arrowDown');

// })

// $(function(){

// });

// $(function () {
//     $('.mainText').html('<p>писька</p>');
// });

// $(function(){
//     function elementOut (element, time) {
//         if(time>5000||time<1000||isNaN(time)){
//             return false;
//         } else {
//             var className = '.' + element;
//             $(className).fadeOut(time);
//         }
//     }
//     elementOut('mainText',5000);
// });

// $(function(){
//     $('.mainText').fadeTo(4000,0.5);
// });

// $(function(){
//     function change (element,newAttr, newValue){
//         var className = '.' + element;
//         $(className).attr(newAttr, newValue);
//     }
//     change('logo','title','lorem lorem' );
// });

// $(function(){
//     $('nav menu' ).addClass('border');
// });

// $(function(){
//     $('nav menu li a').css({
//         'color': 'red',
//         'font-size': '50px'
//     });
// });

// $(function(){
//     $('nav menu li a').animate({
//         'color': 'green',
//         'font-size': '10px'
//     },3000, function(){
//         alert('успешная анимация')
//     });
// });
// /действует только на числовые параметры/

// $(function(){
//     $('.mainText').before('<span>gkjdhgskjdhjkg</span>')
// });



// $(function(){
//     $('.icons img').each(function(){
//         if ($(this).attr('src') == 'img/icon1.png') {
//             $(this).fadeOut(1000);
//         }
//     });
// });


// $(function(){
//     alert($('div').length);
// });



// $(function(){
//     var text = $('.mainText').clone();
//     $('body').append(text);
// });

// $(function () {
//     $('img[alt]').css('background', '#222');
// });

// $(function () {
//     $('.logo').mouseover(function(){
//         alert('событие')
//     });
// });



// традиционная модель событий в JS

// $(function(){
//     var myElement = document.getElementById('recive');
//     function elementClick() {
//         alert('модель событий');
//     }
//     myElement.onclick = elementClick;
// });

// модель событий в jq

// $(function(){
//     $('.arrowDown').click(function(){
//         var cloneArrow = $(this).clone();
//         $(this).after(cloneArrow);
//     });
// });

// $(function(){
//     var link = $('menu li a');
//     // link.mouseover(function(){
//     //     $(this).addClass('border');
//     // })
//     // link.mouseout(function () {
//     //     $(this).removeClass('border');
//     // })

//     link.hover(function () {
//         $(this).addClass('border');
//     }, function () {
//         $(this).removeClass('border');
//     } );
// });


// $(function(){
//     $('.mainText').click(function(e){
//         // alert(e.pageX + " " + e.pageY);
//         alert(e.altKey);
//     })
// });


// при клике задается вопрос. если согласие, то выполняяется функция. отказ, то выходим из функции
// $(function(){
//     $('.btn , .arrowDown').click(function(e){
//         var answer = confirm('уверены?');
//         if(!answer){
//             e.preventDefault();
//         }
//         // return false;

//     })
// });

// $(function () {
//     // $('.form1 :checkbox').fadeOut(1000);
// });

// $(function () {
//     $('.form1 :checkbox:checked ').fadeOut(1000);
// });

// $(function () {
//     $(':submit').click(function(){
//         var value = $('#select2 :selected').val();
//         alert(value);
//     });
// });

// $(function () {
//     $(':submit').click(function () {
//         var value = $(':checkbox:checked').each(function(){
//             var value = $(this).val();
//             alert(value);
//         });

//     });
// });


// $(function () {
//     var value = $('textarea').val();
//     alert(value);
// });


// $(function () {
    // $('.form1').submit(function(e){
    //     if($('.text1').val()== ""){
    //     e.preventDefault();
    //     alert('форма не заполнена');}
    // });

    // $('.text1').focus(function(){
    //     $(this).addClass('border');
    // });

    // $('.text1').blur(function () {
    //     $(this).removeClass('border');
    // });

//     $('#select1').change(function(){
//         var v = $('#select1 :selected').val();
//         if(v==1) {
//             $('#select2 ').html('<option value="1" selected>disabled 1</option> <option value="2" selected>disabled 2</option>');
//         } else if(v==2){
//             $('#select2 ').html('<option value="3" selected>disabled 3</option>');
//         } else if(v==3){
//             $('#select2 ').html('<option value="4" selected>disabled 4</option><option value="4" selected>disabled 4</option><option value="4" selected>disabled 4</option><option value="4" selected>disabled 4</option>');
//         } else {
//             $('#select2 ').html('<option value="6" selected>disabled 6</option>');
//         }
//     });
// });



$(function () {
    
});