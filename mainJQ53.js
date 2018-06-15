Revealator.scroll_padding = '200';
Revealator.effects_padding = '-200';

$('a').smoothScroll();

$(document).ready(function (){
    formFilmHght();
    mobileMenu();
    addNewFilm();
});

$(window).resize(formFilmHght); // обновляем высоту при изменении размеров окна

function formFilmHght() {
    $('#form_add_film').css({
        height: $(window).height() + 'px'
    });
}

function mobileMenu(){
    $('.burger-trigger').click(function(e){
        $(this).toggleClass('active');
        e.preventDefault();
        $(".menu-toggle-switch__x").toggleClass('active');
        $('.menu_burger_form').toggleClass('active');

    });

    $('.menu_top_about_me').click(function(){
        $(".menu-toggle-switch__x").toggleClass('active');
        $('.menu_burger_form').toggleClass('active');
        $('.burger-trigger').toggleClass('active');
    });

    $('.menu_top_film').click(function(){
        $(".menu-toggle-switch__x").toggleClass('active');
        $('.menu_burger_form').toggleClass('active');
        $('.burger-trigger').toggleClass('active');
    });

    $('.menu_top_add_film').click(function(){
        $(".menu-toggle-switch__x").toggleClass('active');
        $('.menu_burger_form').toggleClass('active');
        $('.burger-trigger').toggleClass('active');
    });

    $('.menu_top_hobby').click(function(){
        $(".menu-toggle-switch__x").toggleClass('active');
        $('.menu_burger_form').toggleClass('active');
        $('.burger-trigger').toggleClass('active');
    });
};


function addNewFilm() {
    $("#add_film").click(function(){
        $("#form_add_film").show(1000);
        $("#form_add_film_background").show();
        formFilmHght();
        $('.page_body').addClass('all-page_body');
    });
    $("#close_add_film").click(function(){
        $("#form_add_film_background").hide();
        $("#form_add_film").hide();
        $('.page_body').removeClass('all-page_body');
    });
    $("#form_add_film_background").click(function(){
        $("#form_add_film_background").hide();
        $("#form_add_film").hide();
        $('.page_body').removeClass('all-page_body');
    });

    $("#all_form_add_film").submit(function(event){
        var div = $('<div/>', {
            'class': 'each-film'
        });
        var urlImage = $("#URL_image").val();
        var img = $('<img/>', {
            'src': urlImage,
            'class': 'film_image',
            'float': 'left'
        });
        div.append(img);

        var Title = $("#film_title").val();
        var filmTitle = $('<h3>' + Title + '<h3/>', {
            'class': 'bottom_film_title'
        });
        div.append(filmTitle);

        var Description = $("#film_Description").val();
        var filmDescription = $('<p>' + Description + '<p/>', {
            'class': 'bottom_film_text'
        });
        div.append(filmDescription);

        event.preventDefault();
        $("#first_films").append(div);
        $("#form_add_film").hide();
        $("#form_add_film_background").hide();
        $('.page_body').removeClass('all-page_body');
    });

    // Объявляем переменные (форма и кнопка отправки)
    var form =  $("#all_form_add_film");
    var btn = $("#button_add_film");

    // Функция подсветки незаполненных полей
    function lightEmpty(){
        form.find('.empty_field').addClass('error');
    }

    // Событие клика по кнопке отправить
    btn.click(function(e){
        if($(this).hasClass('disabled')){
        // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
        lightEmpty();
        e.preventDefault();
        }
    });

    form.submit(function mandatoryField(){

        // Добавляем каждому проверяемому полю, указание что поле пустое
        form.find('.obligatory_field').addClass('empty_field');

        // Функция проверки полей формы
        function checkInput(){
            form.find('.obligatory_field').each(function(){
            if($(this).val() != ''){
                // Если поле не пустое удаляем класс-указание
                $(this).removeClass('empty_field');
            }
            else {
                // Если поле пустое добавляем класс-указание
                $(this).addClass('empty_field');
            }
          });
        };

        // Запускаем функцию проверки полей на заполненность
        checkInput();
        // Считаем к-во незаполненных полей
        var sizeEmpty = form.find('.empty_field').size();
        // Вешаем условие-тригер на кнопку отправки формы
        if(sizeEmpty > 0){
            if(btn.hasClass('disabled')){
            return false
            }
            else {
                btn.addClass('disabled')
            }
        }
        else {
            btn.removeClass('disabled')
        }
    });

    function showValues() {
        var str = $('.form_add_film').serialize();
    }
    $("input[type='checkbox'], input[type='radio']").on( "click", showValues );
    $("select").on( "change", showValues );
    showValues();
};