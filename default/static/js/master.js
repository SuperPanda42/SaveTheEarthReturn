(function ($) {

    var right_answer,
        name = window.prompt('Name :'),
        player = new Player(name),
        $home;

    // Executed when DOM is loaded
    $(function () {

        $('#topLeft').find('span.name').text(name);

        $('.tile[data-action="get-random"]').click( function() {
            $home =  $('#mainPage').html();

            randomizeQuestion();
        });

        $('.tile[data-action="get-home"]').click( function() {
            $('#mainPage').html($home);
        });

    });

    function addSubmitEvent() {

        $('button[data-action="submit-answer"]').click( function() {

            var answer = $('input:radio[name="answer"]:checked').parent().text();

            if (answer == right_answer) {

                alert('You\'re right !');

                player.addPoint();
                $('#points').text(player.getScore());

                var points = player.getScore();

                if (points % 3 == 0 && points != 0) {
                    player.addLevel();
                    $('#level').text(player.getLevel());
                }

            }
            else {
                alert('You\'re wrong !');
            }

            randomizeQuestion();

        });

    }

    function randomizeQuestion() {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/random',
            success: function (question) {

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

                addSubmitEvent();

            }
        });
        changePicture();
    }

    function changePicture() {

        var number = Math.floor((Math.random() * 4) + 1);

        console.log(number);
        $('body').css('background-image', 'url("/static/images/' + number + '.jpg")');

    }

})(jQuery);