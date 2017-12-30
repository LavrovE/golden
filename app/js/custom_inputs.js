$(document).on('click', '.check', function () {
    if ($(this).find('input').is(':checked')) {
        // то снимаем активность с дива
        $(this).removeClass('active');
        // и удаляем атрибут checked (делаем чекбокс не отмеченным)
        $(this).find('input').removeAttr('checked');

        // если же чекбокс не отмечен, то
    } else {
        // добавляем класс активности диву
        $(this).addClass('active');
        // добавляем атрибут checked чекбоксу
        $(this).find('input').attr('checked', true);
    }
});
// function checkboxesFunc(){
//     $('.checkboxes').find('.check').click(function () {
//         // Пишем условие: если вложенный в див чекбокс отмечен
//         if ($(this).find('input').is(':checked')) {
//             // то снимаем активность с дива
//             $(this).removeClass('active');
//             // и удаляем атрибут checked (делаем чекбокс не отмеченным)
//             $(this).find('input').removeAttr('checked');
//
//             // если же чекбокс не отмечен, то
//         } else {
//             // добавляем класс активности диву
//             $(this).addClass('active');
//             // добавляем атрибут checked чекбоксу
//             $(this).find('input').attr('checked', true);
//         }
//     });
//
// };
    //Reset form
    // Вешаем событие клика по кнопке сброса
    $('.reset-form').click(function () {
        // Устанавливаем пустое значение в атрибут value для всех инпутов
        $('.customForm').find('input').val('');

        // Убираем атрибут checked и класс активности у чекбоксов
        $('.customForm').find('input:checked').removeAttr('checked');
        $('.customForm').find('.check').removeClass('active');

        // Убираем класс активности у радио переключателей
        $('.customForm').find('.radio').removeClass('active');

        // Устанавливаем пустое значение в атрибут value для всех textarea
        $('.customForm').find('textarea').val('');

        // И для открывалки селекта возвращаем начальное значение
        $('.customForm').find('.slct').html('Выберите Ваше лучшее качество:');
    });

    // = Load
    // отслеживаем изменение инпута file

    $('.upload__input-hidden').change(function () {

        // Если файл прикрепили то заносим значение value в переменную
        var noResult = $(this).parent().find('.fileLoad').find('input').val();
        var fileResult = $(this).val();
        // И дальше передаем значение в инпут который под загрузчиком
        var deleteLink = $(this).parent().find('.fileLoad').children('.removefile');
        deleteLink.addClass('active');
        $(this).parent().find('.fileLoad').append(deleteLink);
        $(this).parent().find('.fileLoad').find('input').val(fileResult);
        console.log(noResult);
        $('.removefile').on('click', function () {
            var refreshinpt = $(this).closest('.fileLoad').siblings('input');
            $(this).siblings('input').val(noResult);
            // console.log(noFileSelected);
            refreshinpt.val('');
            $(this).removeClass('active');
        });
    });

    /* Добавляем новый класс кнопке если инпут файл получил фокус */
    $('.upload__input-hidden').hover(function () {
        $(this).parent().find('button').addClass('button-hover');
    }, function () {
        $(this).parent().find('button').removeClass('button-hover');
    });

    // Checkbox
    // Отслеживаем событие клика по диву с классом check

    // checkboxesFunc();
    // Select

    $('.slct').click(function () {
        $(document).on("click", function () {
            $('.slct').removeClass('active');
            $('.drop').slideUp();
            $(document).off("click");
        });
        $('.drop').on("click", function (event) {
            event.stopPropagation();
        });

        /* Заносим выпадающий список в переменную */
        var dropBlock = $(this).parent().find('.drop');

        /* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
        if (dropBlock.is(':hidden')) {
            dropBlock.slideDown();

            /* Выделяем ссылку открывающую select */
            $(this).addClass('active');

            /* Работаем с событием клика по элементам выпадающего списка */
            $('.drop').find('li').click(function () {
                $('.drop').find('li').removeClass('active');
                $(this).addClass('active');
                /* Заносим в переменную HTML код элемента
                списка по которому кликнули */
                var selectResult = $(this).data('value');
                var selectResult2 = $(this).html();
                /* Находим наш скрытый инпут и передаем в него
                значение из переменной selectResult */
                $(this).parent().parent().find('input').val(selectResult);

                /* Передаем значение переменной selectResult в ссылку которая
                открывает наш выпадающий список и удаляем активность */
                $(this).parent().siblings('.slct').removeClass('active').html(selectResult2);

                /* Скрываем выпадающий блок */
                dropBlock.slideUp();
            });

            /* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
        } else {
            $(this).removeClass('active');
            dropBlock.slideUp();

        }

        /* Предотвращаем обычное поведение ссылки при клике */
        return false;
    });

    $('.drop').children('li').each(function () {

        if ($(this).data('value') == $(this).parent().siblings('input').val()) {
            $(this).addClass('active');
            var defalutData = $(this).html();
            $(this).parent().siblings('.slct').html(defalutData);
            // alert('test');
        }
    });

    $('.radioblock').children('.radio').each(function () {
        if ($(this).data('value') == $(this).siblings('input').val()) {
            var defalutData = $(this).html();
            $(this).addClass('active');
            // console.log('test');

        }
    });

    $('.checkboxes').children('.check').each(function () {
        if ($(this).children('input').attr('checked')) {
            $(this).addClass('active');
        }
    });

    // RadioButton
    $('.radioblock').find('.radio').click(function () {
        var valueRadio = $(this).data('value');
        $(this).parent().find('.radio').removeClass('active');
        $(this).addClass('active');
        $(this).parent().find('input').val(valueRadio);
    });

    //language select

    // Select
    $('.language__selected').click(function () {
        /* Заносим выпадающий список в переменную */
        var dropBlock = $(this).parent().find('.language__items');

        /* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
        if (dropBlock.is(':hidden')) {
            dropBlock.slideDown();

            /* Выделяем ссылку открывающую select */
            $(this).addClass('active');

            /* Работаем с событием клика по элементам выпадающего списка */
            $('.language__items').find('li').click(function () {

                /* Заносим в переменную HTML код элемента
                списка по которому кликнули */
                var selectResult = $(this).html();

                /* Находим наш скрытый инпут и передаем в него
                значение из переменной selectResult */
                $(this).parent().parent().find('input').val(selectResult);

                /* Передаем значение переменной selectResult в ссылку которая
                открывает наш выпадающий список и удаляем активность */
                $('.language__selected').removeClass('active').html(selectResult);

                /* Скрываем выпадающий блок */
                dropBlock.slideUp();
            });

            /* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
        } else {
            $(this).removeClass('active');
            dropBlock.slideUp();
        }

        /* Предотвращаем обычное поведение ссылки при клике */
        return false;
    });



    //value attr and some fixes

    $('.language__selected').on('click', function (event) {
        $(document).on("click", function () {
            $('.language__selected').removeClass('active');
            $('.language__items').hide();
            $(document).off("click");
        });
        $('.language__items li a ').on("click", function (event) {
            // event.stopPropagation();
        });
    });

    $('.slct').on('click', function (event) {
        event.stopPropagation();
        $(document).on("click", function () {
            $('.slct').removeClass('active');
            $('.custom-select').slideUp();
            $(document).off("click");
        });
    });