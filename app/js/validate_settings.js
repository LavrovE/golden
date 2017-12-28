// var locErrors = {
//     ru: {
//         nameMinLength: 'минимальное количество символов -  '+DEFAULT_INPUT_MIN_LENGTH+'',
//         nameMaxLength: 'максимум '+DEFAULT_INPUT_MAX_LENGTH+' букв',
//         onlyNumber: 'введите число',
//         required: 'поле обязательное',
//         email: 'Пожалуйста, введите действительный email ',
//         date: 'Неверный формат'
//     },
//     ua: {
//         nameMinLength: 'мінімальна кількість символів -  '+DEFAULT_INPUT_MIN_LENGTH+'',
//         nameMaxLength: 'максимум '+DEFAULT_INPUT_MAX_LENGTH+' лiтер',
//         onlyNumber: 'введіть число',
//         required: "поле обов'язкове",
//         email: 'Будь ласка, введіть дійсний email',
//         date: 'Невірний формат'
//     },
//     en: {
//         nameMinLength: 'minimum number of characters -  '+DEFAULT_INPUT_MIN_LENGTH+'',
//         nameMaxLength: 'maximum '+DEFAULT_INPUT_MAX_LENGTH+' characters',
//         onlyNumber: 'enter the number',
//         required: 'mandatory field',
//         email: 'Please enter a valid email address ',
//         date: 'Wrong format'
//     }
// };
// function languageErrors(key) {
//     var currentLanguage = $('html').attr('lang');
//     return (locErrors[currentLanguage][key]);
// }
// $('form').each(function () {
//     $(this).validate({
//         validClass: "input__success",
//         errorClass: 'input__error'
//     });
//     $.validator.setDefaults({
//         ignore: "textarea"
//         // any other default options and/or rules
//     });
//
// });
// $('input[type="text"]').each(function () {
//     $(this).rules('add', {
//         minlength: DEFAULT_INPUT_MIN_LENGTH,
//         maxlength: DEFAULT_INPUT_MAX_LENGTH,
//         messages: {
//             minlength: jQuery.validator.format(languageErrors('nameMinLength')),
//             maxlength: jQuery.validator.format(languageErrors('nameMaxLength'))
//         }
//     });
//     if ( $(this).attr('required') ) {
//         $(this).rules('add', {
//             required: true,
//             messages: {
//                 required:  jQuery.validator.format(languageErrors('required')),
//                 minlength: jQuery.validator.format(languageErrors('nameMinLength')),
//                 maxlength: jQuery.validator.format(languageErrors('nameMaxLength'))
//             }
//         });
//     }
//     if ( $(this).hasClass('input-date') ){
//         $(this).rules('add', {
//             minlength:false,
//             maxlength:false,
//             dateUA: true,
//             messages: {
//                 dateUA: jQuery.validator.format(languageErrors('date'))
//             }
//         });
//     }
// });
// $('.select').find('input').each(function () {
//     $(this).rules('add', {
//         required: true
//     });
// });
// $('input[type="password"]').each(function () {
//     $(this).rules('add', {
//         minlength: DEFAULT_INPUT_MIN_LENGTH,
//         maxlength: DEFAULT_INPUT_MAX_LENGTH,
//         messages: {
//             minlength: jQuery.validator.format(languageErrors('nameMinLength')),
//             maxlength: jQuery.validator.format(languageErrors('nameMaxLength'))
//         }
//     });
// });
// $('input[type="email"]').each(function () {
//     $(this).rules('add', {
//         messages: {
//             required:  jQuery.validator.format(languageErrors('required')),
//             email:     jQuery.validator.format(languageErrors('email'))
//         }
//     });
//     if ( $(this).attr('required') ) {
//         $(this).rules('add', {
//             required: true,
//             messages: {
//                 required:  jQuery.validator.format(languageErrors('required'))
//             }
//         });
//     }
//
// });
// $('.select input[type="hidden"]').each(function () {
//     $(this).rules('add', {
//         required: false
//     });
//
//     if ( $(this).attr('required') ) {
//         $(this).rules('add', {
//             required: true,
//             messages: {
//                 required:  jQuery.validator.format(languageErrors('required'))
//             }
//         });
//     }
// });
// $('.decimal').each(function () {
//     $(this).rules('add', {
//         number: true,
//         minlength: false,
//         maxlength: false,
//         messages: {
//             number: jQuery.validator.format(languageErrors('onlyNumber'))
//         }
//     });
// });