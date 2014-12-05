(function ($) {

    // Executed when DOM is loaded
    $(function () {

        alert('huhih');

        $('.tile[data-action="get-random"]').click( function() {

            alert('ok');

            var question = {
                    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ?',
                    answers: [
                        {
                            name:'Ut enim ad minim veniam'
                        },
                        {
                            name:'quis nostrud exercitation ullamco'
                        },
                        {
                            name:'laboris nisi ut aliquip ex ea commodo consequat'
                        }
                    ]
                },
                $content = $('<div class="content" id="question-content"></div>');

            $content.add('<div>' + question.question + '</div>');

//            <div class="content" id="question-content">
//
//                <div>{{question}}</div>
//
//                <ul>
//                {{#each answers}}
//                    <li class="input-control radio">
//                        <label>
//                            <input type="radio" name="answer" />
//                            <span class="check"></span>
//                        {{name}}
//                        </label>
//                    </li>
//                {{/each}}
//                </ul>
//
//                <button class="info large" data-action="submit-answer">Submit</button>
//
//            </div>

//            var question = {
//                    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ?',
//                    answers: [
//                        {
//                            name:'Ut enim ad minim veniam'
//                        },
//                        {
//                            name:'quis nostrud exercitation ullamco'
//                        },
//                        {
//                            name:'laboris nisi ut aliquip ex ea commodo consequat'
//                        }
//                    ]
//                },
//                source = $('#question-template').html(),
//                template = Handlebars.compile(source),
//                html = template(question),
//                $html = $(html);

            $('#mainPage').html($content);

        });

        $('button[data-action="submit-answer"]').click( function() {



        })

    });

})(jQuery);