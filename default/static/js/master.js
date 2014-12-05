(function ($) {

    var right_answer,
        name = window.prompt('Name :'),
        player = new Player(name),
        $home;

    // Executed when DOM is loaded
    $(function () {

        // Display player's name
        $('#topLeft').find('span.name').text(name);

        /* Events */
        $('.tile[data-action="get-random"]').click( function() {
            $home =  $('#mainPage').html();
            randomizeQuestion();
            emphasizeButton($(this));
        });

        $('.tile[data-action="get-home"]').click( function() {
            $('#mainPage').html($home);
            emphasizeButton($(this));
        });

    });

    // Animation on button icon
    function emphasizeButton($button) {

        $button.find('i').animate({
            fontSize: '65px'
        }, 1000, function() {
            $(this).animate({
                fontSize: '48px'
            })
        });

    }

    // Add event to the submit button of the quizz
    function addSubmitEvent() {

        $('button[data-action="submit-answer"]').click( function() {

            var answer = $('input:radio[name="answer"]:checked').parent().text();

            if (answer == right_answer) {
                // The answer is the right one
                alert('You\'re right !');

                // Profile tile animation
                $('#profile-tile').animate({
                    position: 'relative',
                    top: '60px'
                }, 1200, function() {
                    $(this).animate({
                        top: 0
                    })
                });

                // Update of player's score
                player.addPoint();
                $('#points').text(player.getScore());

                var points = player.getScore();

                if (points % 3 == 0 && points != 0) {
                    // Score is divisible by 3, player gain a level
                    player.addLevel();
                    $('#level').text(player.getLevel());
                }

            }
            else {
                alert('You\'re wrong !');
            }

            var $main_page = $('#mainPage'),
                height = $main_page.height();
            $main_page.animate({
                height: 0
            }, 500, function() {
                randomizeQuestion();
                $(this).animate({
                    height: height
                })
            });

        });

    }

    // Get a new random question using Ajax
    function randomizeQuestion() {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/random',
            success: function (question) {

                // Success : a question has been returned by server

                // Content construction
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

                // Add an event to the submit button
                addSubmitEvent();

            }
        });
        // Change the background picture
        changePicture();
    }

    // Change the background image by a randomly chosen one
    function changePicture() {

        var number = Math.floor((Math.random() * 4) + 1);
        $('body').css('background-image', 'url("/static/images/' + number + '.jpg")');

    }

})(jQuery);