#WeForgotToFindAName#
http://4526c83d74.url-de-test.ws/

The project is composed of 2 websites : 

## An API get OpenData ##

Details can be found here : https://github.com/SuperPanda42/OpenLinkedDataWS

## The main website ##

This repo contains the django code.
To launch a localhost version, open a command prompt, go to the "default" folder, and type "python manage.py runserver".
The website should be accessed at 127.0.0.1:8000

/!\ Python 2.7 and Django 1.6 is required

You can download it with pip :
pip install django==1.6

For the animation challenge, the file is default/static/js/master.js
For the gamification challenge, the files are default/static/js/achievements.js and default/static/js/player.js. They're used in default/static/js/master.js

More details can be found on the homepage of the website : http://4526c83d74.url-de-test.ws/

NB : At the moment, we are experiencing some hostings problems and the links with the OpenData API may not work properly, causing random questions to not change.
Anyway, the website works when launched in localhost.

## Animation ##

Four animations are implemented :

- The first one is when you click on one of the two buttons, the icon's size grow and reduce.
- The second occurs when a player answer a question. The size of the main area reduces and grows while the next question is loading.
- When a question is answered, the background image is replaced by an other one chosen randomly.
- The last one occurs when a player get the right answer for a question. The profile tile goes down and goes back up while the score (and possibly level) is updated.

To perform these animations we mainly use jQuery and the animate method.
