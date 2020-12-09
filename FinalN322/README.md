# N322 Final Project

WEB4 LINK: https://in-info-web4.informatics.iupui.edu/~kylperry/n322/final/www/

---

APP INFORMATION:
This app is aimed to be an open access CRUD app, which as of submission only has the Read working. The goal was for the users to login and be able to update their personal dex with pokemon and to be able to create teams for their runs through different gens. The ionic framework is the backbone of this app. The app is finalized with PWA and hosted on web4.

---

LANGUAGES:
Angular, Ionic, HTML, SCSS.

---

CRUD INFORMATION:  
Currently, the app only features the Read functionality. I was struggling with some of the aspects of the app I was tring to get working, and ended up losing out on functionality as I spent time trying to resolve those issues.  
========Var========  
I did update some of the variables to try and have my own color sheme unique from what is used natively with ionic.  
==Background images and splashscreen images==  
I used the provided link to include my own splash screen and applied a background for the home page, however I noticed that when I open the app on my iOS devise that it doesn't acknowledge the background or the splash screen.  
========Login========  
By logging in users are able to see a change in the pages format to display the tabs at the bottom which act as the main navigation allowing users to travel between the home, National Dex, Your Dex, and Teams. The app routes through an anonomous login function.  
========Login Alert========  
The login button, initially and throughout early development was intended to create an alert which would provide users a place to login. I spent too much time trying to find the way you're able to get back the input of the user, and although I did finally resolve that problem, I halted my work on the login feature to work on other aspects of the app. In the end I had to disable the alert aspect of the app because when I ran the PWA and build, the alert-controller kept erroring out, and I couldn't find a solution as I was attempting to trouble shoot. I did leave the code I was tryin to make work in, so you can see what I was attempting to work into the application.  
========National Dex========  
The national dex loads using the pokeapi. I run a call to the api and then loop over the results building out a list of the first 150 pokemon to limit download times.  
=====Personal Dex & Teams=====  
The personal Dex and teams pages are unfinished because I was unable to get the create, update, and destroy aspects of the site fully opperational.
