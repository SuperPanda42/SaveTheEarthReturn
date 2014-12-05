(function ($) {

    // Executed when DOM is loaded
    $(function () {

        var right_answer;

        $('.tile[data-action="get-random"]').click( function() {

            $.ajax({
                type: 'GET',
                dataType: 'json',
                url: '/random',
                success: function (question) {

                    console.log(question);

                    var $content = $('<div class="content" id="question-content"></div>');

                    $content.append('<div>' + question.question + '</div>');

                    var $list = $('<ul></ul>');

                    $.each(question.answers, function(key, value) {
                        $list.append('<li class="input-control radio"><label><input type="radio" name="answer" /><span class="check"></span>' + value + '</label></li>')

                    });

                    $content.append($list);
                    $content.append('<button class="info large" data-action="submit-answer">Submit</button>');

                    $('#mainPage').html($content);

                    right_answer = question.right_answer;

                }
            });

        });

//        $('button[data-action="submit-answer"]').click( function() {
//
//            var answer = $('input[type="radio"]');
//
//        })

    });

})(jQuery);