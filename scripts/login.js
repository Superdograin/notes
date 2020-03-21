$('span.login').click(function () {
    $('.switch span').removeClass('active');
    $(this).addClass('active');

    $(this).parents('.content').removeClass('Signup');
    $(this).parents('.content').addClass('Login');

    $('form button').text('LOGIN');

})

$('span.signup').click(function () {
    $('.switch span').removeClass('active');
    $(this).addClass('active');

    $(this).parents('.content').removeClass('Login');
    $(this).parents('.content').addClass('Signup');

    $('form button').text('SIGNUP');
})

$('.input').on('click', function () {
    $(this).addClass('focus');
    $(this).children('input').focus();
})

$('.input input').on('focus', function () {
    $(this).parent().addClass('focus');
})

$('.input input').on('blur', function () {
    if ($(this).val() === '')
        $(this).parent().removeClass('focus');
})

