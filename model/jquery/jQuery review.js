window.onload(function () {

});

$(document).ready(function () {

});

$(function () {
    $('#foo').html();
    document.getElementById('foo').innerHTML;

    $cr.is(':checked');
    $cr.attr('checked');
    cr.checked;

    if($('tt')) {
    	// error
    }

    if($('tt').length) {

    }

    if($('tt')[0]) {

    }

    var cr = document.getElementById('dom');
    var $cr = $(cr);

    var $cr = $('#dom');
    var cr = $cr[0];
    var cr = $cr.get(0);

    $('#id')
    $('.class')
    $('element')
    $('*')
    $('.class1','.class2', '.class3')

    $('#pa .ch')
    $('#fa>ch')
    $('#prev+div')  $('#prev').next('div')
    $('#prev~div')  $('#prev').nextAll('div')   $('#prev').siblings('div')

    $('ul li:nth-child(2)')
    $('ul li:nth-child(odd)')
    $('ul li:nth-child(even)')
    $('ul li:nth-child(equation)')
    $('.one :last-child')

    $('p:first')
    $('p:last')
    $('p:not("sel")')
    $('p:even')
    $('p:odd')
    $('p:eq(1)')  $('p').eq('1')
    $('p:gt(2)')
    $('p:lt(3)')
    $('p:header')
    $('p:animated')
    $('p:focus')

    $('div:contains("content")')
    $('div:empty')
    $('div:has(".sel")')
    $('div:parent')

    $('div:hidden')
    $('div:visible')

    $('#form1:enabled')

    $('#form2:disabled')

    $('input:checked')
    $('select :selected') 

    $(':input')
    $(':checkbox')
    $(':radio')
    $(':image')
    $(':text')
    $(':password')
    $(':submit')
    $(':reset')
    $(':button')
    $(":file")
    $(':hidden')

    .children() .next() .pre() .eq(1)  .siblings()  .parent()  .parents()  .closet()
    var listItem = document.getElementById('list2');
    $('.item-a').closet('ul',listItem);

    $('.text:hidden');
    $('.text :hidden');

    $category.is(':visible');
    $('ul li').filter(':contains("佳能"),:contains("尼康")');

    var $li = $('ul li:eq(1)'); 
    var $li_text = $li.text();

    var $para = $('p');  
    var p_text = $para.attr('title');

    $('<li title="xj">banana</li>').appendTo('ul')
    .append()  .prepend()  .prependTo()  after()  insertAfter()   before()  insertBefore()

    var $del = $('del').remove();
    var $ev = $('del').detach();
    $('ul li:eq(1)').empty();

    $('.list1').clone(true).appendTo('ul');

    $('#old').replaceWith(listItem);
    $(listItem).replaceAll('#old');

    .wrap()  .wrapAll()  .wrapInner()  .unwrap()

    $('li').attr('name'); // 获取集合第一个的属性

    $('ul li:first-child').attr('title','apple');
    $('ul li:eq(0)').attr({'title': 'apple1', 'name': '苹果'});
    
    .addClass('high')  .removeClass('high,fat')

    $('#btn').click(function () {
        $('ul li').toggleClass('another');
    })

    $('p').is('.someClass')
    $('p').hasClass('someClass')

    var p_html = $para.html();
    $('p').html('<strong>hehe</strong>');
    document.getElementById('#para').innerHTML = '<strong>hehe</strong>';

    var p_text = $para.text();

    $(':input').val()
    $('input:checked').val()
    $(this).val() === this.value;
    $(this).val(this.defaultValue);
    
    $('#single').val('选择2号');
    $('#multiple').val(["No.2","No.3"]);

    $('#single option:eq(1)').prop('selected', true);
    $('[value=radio2]:radio').prop('checked', true);


    $('p').css('opacity', '0.5');
    $('p').css('height') === '16px';
    $('p').height() === 16;

    var offset = $(this).offset();
    var left = offset.left;
    var pos = $('.relative').poosition();
    $(this).scrollTop('300');
    
    $('window').load(function () {

    });

    $('.selector').bind('click', function () {

    });

    .hover(function () {})
    .mouseenter(function () {}).mouseleave(function () {})

    event.stopPropagation();
    event.preventDefault();
    return false;
});

$(document).redady(function () {
    //  获得索引值大于5的品牌集合对象(除最后一条) 
    var $category = $('ul li:gt(5):not(:last)');
    // 如果子元素是img元素
    if($(this).children().is("img")) {};
    // 幻灯动画
    $v_content_list.animate({left: "-=" + v_width + "px"}, "normal");

})