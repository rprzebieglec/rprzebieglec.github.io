
$(document).ready(function() {
    var url = $('#contact-form').attr('action');
    //$("#contact-form").ajaxForm({url: url, type: 'post'});
    $("#submit-btn").click(function(e) {
        $('#submit-btn').addClass('hidden');
        $('#progress-bar').removeClass('hidden');
        $.ajax({
            type: "POST",
            url: url,
            data: $("#contact-form").serialize(), // serializes the form's elements.
            success: function(data)
            {
                $('#progress-bar').addClass('hidden');
                $('#submit-btn').removeClass('hidden');

                if (data.result) {
                    $('#success-alert').removeClass('hidden');
                }
                else {
                    $('#error-alert').removeClass('hidden');
                }
            }
        });

        e.preventDefault(); // avoid to execute the actual submit of the form.
    });

    $('.fancybox').fancybox({padding:3});
});