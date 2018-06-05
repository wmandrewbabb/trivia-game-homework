$(document).ready(function() {

    var questions = [
        {
            question:'Gertie, star of one of the first cartoon shorts, was what sort of animal?',
            a:'Cow',
            b:'Giraffe',
            c:'Dinosaur',
            d:'Woodpecker', 
            correctAnswer:'c',
            isAnswered: false,
            answerExplanation: 'Gertie the Dinosaur was part of a vaudeville act with her original animator, Winsor McCay.'
        },
        {
            question:'Merrie Melodies usually starred which cartoon group?',
            a:'Mickey Mouse and Pals',
            b:'Bugs Bunny and Friends',
            c:'Heathcliff and the Junkyard Jazz Cats',
            d:'He-man and the Masters of the Universe', 
            correctAnswer:'b',
            isAnswered: false,
            answerExplanation: 'Merrie Melodies was originally meant to more musical shorts, but eventually became indistingushable from Looney Tunes, featuring many of the same characters.'
        },
        {
            question:'Prior to Mickey Mouse, what other cartoon mascot did Walt Disney create?',
            a:'Oswald the Rabbit',
            b:'Harvey the Rabbit',
            c:'Wrigley the Wombat',
            d:'Sonic the Hedgehog',
            correctAnswer:'a',
            isAnswered: false,
            answerExplanation: 'Oswald the Rabbit was eventually revived by Disney and was deuteragonist of the video game Epic Mickey in 2010.'
        },
        {
            question:'This method of transfering a live action image to animation was used throughout classic Disney animation.',
            a:'Telescoping',
            b:'Rotoscoping',
            c:'Kinetoscoping',
            d:'Fluoroscopy',
            correctAnswer:'b',
            isAnswered: false,
            answerExplanation: 'Many of the singing and dancing sequences in Cinderella, Snow White, and Sleeping Beauty were rotoscoped from real actors.'
        },
        {
            question:'In addition to Optimus Prime, Peter Cullen also voiced this famous character:',
            a:'Batman',
            b:'Mickey Mouse',
            c:'Megatron',
            d:'Eeyore',
            correctAnswer:'d',
            isAnswered: false,
            answerExplanation: 'Cullen voiced Eeyore, in addition to many other classic 80s characters like Murky Dismal, Zandar, and Venger.'
        },
        {
            question:'Mickey Mouse was almost named this d(r)eadful name:',
            a:'Maleficent',
            b:'Mortimer',
            c:'Maxwell',
            d:'Rockso',
            correctAnswer:'b',
            isAnswered: false,
            answerExplanation: "Could you imagine what the mascot Mortimer Mouse would look like? Walt Disney's wife Lillian Marie Bounds couldn't."
        },
        {
            question:'This cartoon duck was a favorite of dictator Benito Mussolini:',
            a:'Donald',
            b:'Daffy',
            c:'Scrooge',
            d:'il Ducke',
            correctAnswer:'a',
            isAnswered: false,
            answerExplanation: 'The bellicose dictator was fond of the difficult to understand but always verbose Donald Duck, despite Donald being a very visible part of American propaganda in WW2.'
        },
        {
            question:'In addition to Bugs, Daffy, and Porky, this creator also contributed to the creation of Droopy Dog and Screwy Squirrel:',
            a:'Walt Disney',
            b:'Hayao Miyazaki',
            c:'Tex Avery',
            d:'William Hanna',
            correctAnswer:'c',
            isAnswered: false,
            answerExplanation: "Tex Avery was involved in the creation of important characters for both Disney and Warner Brothers before working for MGM."
        },
        {
            question:'Prior to forming their own production company, William Hanna and Joseph Barbera created this cartoon duo for MGM:',
            a:'Fred and Barney',
            b:'Tom and Jerry',
            c:'Popeye and Olive Oyl',
            d:'Chip and Dale',
            correctAnswer:'b',
            isAnswered: false,
            answerExplanation: "Tom and Jerry passed through the hands of many other creators afterwards, including Chuck Jones."
        },
        {
            question:'In addition to the title characters, this show also contained shorts starring Dudley Do-Right and Mr. Peabody, a time-traveling dog.',
            a:'The Adventures of Rocky and Bullwinkle',
            b:'Looney Tunes',
            c:'The Animaniacs',
            d:'Mr. Magoo and his Friends',
            correctAnswer:'a',
            isAnswered: false,
            answerExplanation: 'Rocky and Bullwinkle was also one of the first cartoons to outsource their animation.'
        },
        {
            question:'Fantasmagorie, commonly considered the first traditionally animated film, was released in the year:',
            a:'1921',
            b:'1912',
            c:'1899',
            d:'1908',
            correctAnswer:'d',
            isAnswered: false,
            answerExplanation: 'Fantasmagorie was released in 1908 by Emile Cohl, and is one of the earliest examples of hand-drawn animation.'
        },
        {
            question:'Walt Disney originally owned this corporation, which went brankrupt in 1923:',
            a:'Inkwell Studios',
            b:'Laugh-O-Gram Studios',
            c:'Phonofilm',
            d:'Warner Brothers',
            correctAnswer:'b',
            isAnswered: false,
            answerExplanation: 'Laugh-O-Gram films was originally created by Disney to complete a contract for 12 shorts, and was the starting point for many of the early Disney animators.'
        },
        {
            question:'This show was the first animated prime-time sitcom:',
            a:'Sabrina and the Groovy Goolies',
            b:'The Flintstones',
            c:'The Simpsons',
            d:'Crusader Rabbit',
            correctAnswer:'b',
            isAnswered: false,
            answerExplanation: 'The Flintstones would go on to inspire many other prime-time animated shows.'
        },
        {
            question:'In 2003 this groundbreaking Soviet cartoon was ranked No. 1 in a poll of the best animated films of all time by animators from around the world:',
            a:'The Owl and the White Horse',
            b:'Baba Yaga',
            c:'Hedgehog in the Fog',
            d:'Joeseph Stalin and the Leningrad Kids',
            correctAnswer:'c',
            isAnswered: false,
            answerExplanation: 'The Hedgehog in the Fog was based on a Russian folktale in order to avoid the harsh artistic restrictions on Soviet creators at the time.'
        },
        {
            question:'This controversial Disney film is the origin of the song "Zip-a-Dee-Doo-Dah" and based on the Uncle Remus stories.',
            a:'The Song of the South',
            b:"Br'er Rabbit and the Briar Patch",
            c:'Zootopia',
            d:'Splash Mountain',
            correctAnswer:'a',
            isAnswered: false,
            answerExplanation: "The film's pre-civil rights era depiction of black stereotypes and idyllic plantation life have led to Disney never releasing it on any home format in the United States."
        },
        {
            question:'This man was the voice of Bugs Bunny, Daffy Duck, Porky Pig, Tweety Bird, Sylvester, Yosemite Sam, Foghorn Leghorn, Marvin the Martian, Pepe Le Pew, Speedy Gonzales, and many others.',
            a:'Frank Welker',
            b:'Chuck Jones',
            c:'Tim Allen',
            d:'Mel Blanc',
            correctAnswer:'d',
            isAnswered: false,
            answerExplanation: "Mel Blanc spent over sixty years voicing practically all of the Warner Bros. cartoon characters."
        },
        {
            question:'This voice actor is as of 2018 on the box office earnings all-time chart as #3, yet no one is likely to recognize his face.',
            a:'Stan Lee',
            b:'Hugo Weaving',
            c:'Frank Welker',
            d:'Mel Blanc',
            correctAnswer:'c',
            isAnswered: false,
            answerExplanation: "Frank Welker is a legendary voice actor, capable of sounding like hundreds of different distinct characters and animals."
        },
        {
            question:'The director of King Kong, Merian C. Cooper, watched one of these short films and declared that he never wanted to make a black-and-white picture again:',
            a:"Disney's Silly Symphonies",
            b:"Warner Bros.' Merrie Melodies",
            c:"MGM's Jaunty Jokers",
            d:"RKO's Fractured Fairytales",
            correctAnswer:'a',
            isAnswered: false,
            answerExplanation: "'Silly Symphonies' was Disney's initial line of color shorts and introdced Disney renditions of characters like the Three Little Pigs."
        },
        // {
        //     question:'',
        //     a:'',
        //     b:'',
        //     c:'',
        //     d:'',
        //     correctAnswer:'a',
        //     isAnswered: false,
        //     answerExplanation: ""
        // },
        // {
        //     question:'',
        //     a:'',
        //     b:'',
        //     c:'',
        //     d:'',
        //     correctAnswer:'a',
        //     isAnswered: false,
        //     answerExplanation: ""
        // },
    ];

    var questionsEasy = [
        {
            question:'Wile E. Coyote usually chases this blue and purple avian:',
            a:'Tweety Bird',
            b:'Donald Duck',
            c:'The Road Runner',
            d:'Count Duckula',
            correctAnswer:'c',
            isAnswered: false,
            answerExplanation: 'The Coyote first chased the Road Runner in the 1949 short "Fast and Furry-ous."'
        },
        {
            question:'Porky Pig has this form of speech impediment:',
            a:'Habromania',
            b:'A severe stutter',
            c:"Tourette's Syndrome",
            d:'An unintelligible mumble',
            correctAnswer:'b',
            isAnswered: false,
            answerExplanation: "Porky's stutter was so defining of early Warner Brothers that the phrase 'Th-th-th-that's all folks!' became the signature line at the end the company's shorts."
        },
        {
            question:'Donald Duck has three nephews that are named:',
            a:'Huey, Dewie, and Louie',
            b:'Larry, Curly, and Mo',
            c:'The 3 Cabelleros',
            d:'Launchpad, Scrooge, and Darkwing',
            correctAnswer:'a',
            isAnswered: false,
            answerExplanation: 'Huey, Dewie, and Louie first appeared in the Donald Duck newspaper strip.'
        },
        {
            question:"Walt Disney's 'Sword in the Stone' is based off of the book:",
            a:'"The Once and Future King" by T.H. White',
            b:'"The Book of Three" by Lloyd Alexander',
            c:'"The Hobbit" by J.R.R. Tolkien',
            d:'"Merlin Takes a Student" by Sue D. Nim',
            correctAnswer:'a',
            isAnswered: false,
            answerExplanation: "T.H. White's 'The Once and Future King' is split into four parts, of which 'The Sword in the Stone' is the first."
        },
        {
            question:'Rocky and Bullwinkle were usually menaced by Russian agents named: ',
            a:'Vlad and Katrina',
            b:'Yeltsin and Gorbachev',
            c:'Scarlet and Commander Corb',
            d:'Boris Badenov and Natasha Fatale',
            correctAnswer:'d',
            isAnswered: false,
            answerExplanation: 'Boris and Natasha were spies for a fictional country named "Pottsylvania" led by a dictator named "Fearless Leader." '
        },
        {
            question:"The Jetson's robot maid is named:",
            a:'Astro',
            b:'Rosie',
            c:'Cogswell',
            d:'Rudy',
            correctAnswer:'b',
            isAnswered: false,
            answerExplanation: 'Rosie the robot was originally spelled R-O-S-E-Y in the first episode of the series.'
        },
        {
            question:'"An American Tale" stars a mouse named Fievel who gets separated from his family in the city of:',
            a:'Los Angeles',
            b:'Mew Mew York',
            c:'New York',
            d:'Kiev',
            correctAnswer:'c',
            isAnswered: false,
            answerExplanation: "Don Bluth's 'American Tale' takes place in New York circa 1885 an uses the mice as stand-ins for immigrants to America."
        },
        {
            question:'This Pixar film was the first full-length computer animated feature film:',
            a:'Toy Story',
            b:'Shrek',
            c:'Tarzan',
            d:'Aladdin',
            correctAnswer:'a',
            isAnswered: false,
            answerExplanation: '"Toy Story" was the first fully computer animated feature film, but many others quickly followed after it.'
        },
        {
            question:"Bugs Bunny's most famous antagonist is usually this dim-witted hunter:",
            a:'Yosemite Sam',
            b:'Hiawatha',
            c:'Kraven',
            d:'Elmer Fudd',
            correctAnswer:'d',
            isAnswered: false,
            answerExplanation: 'Elmer Fudd was originally called "Egghead" in shorts directed by Tex Avery, but became Fudd in the Chuck Jones era.'
        },
        {
            question:'This Rooster was based off another character, Senator Claghorn, who was a popular radio show character.',
            a:'Foghorn Leghorn',
            b:'Pacito',
            c:'Mel Blanc',
            d:'Rowdy Roddy Rooster',
            correctAnswer:'a',
            isAnswered: false,
            answerExplanation: 'Foghorn Leghorn was originally voiced by Mel Blanc from 1946 to 1983.'
        },
        {
            question:"Which was of these was not one of the Dwarves in Disney's 'Snow White and Seven Dwarves?'",
            a:'Grumpy',
            b:'Dopey',
            c:'Tyrion',
            d:'Doc',
            correctAnswer:'c',
            isAnswered: false,
            answerExplanation:"Disney's dwarves were named Doc, Bashful, Grumpy, Happy, Dopey, Sneezy, and Sleepy."
        },
        {
            question:'Woody Woodpecker is a type of toon archetype called a:',
            a:'Weirdo',
            b:'Dramatis Personae',
            c:'Genre-savvy',
            d:'Screwball',
            correctAnswer:'d',
            isAnswered: false,
            answerExplanation: 'Other "Screwball" characters include Bugs, Daffy, and Screwy Squirrel.'
        },
        {
            question:'Rankin/Bass productions adapted this Tolkien novel in 1980 after completing their animated version of "The Hobbit" in 1977:',
            a:'"The Two Towers"',
            b:'"The Return of the King"',
            c:'"A Game of Thrones"',
            d:'"Watership Down"',
            correctAnswer:'b',
            isAnswered: false,
            answerExplanation: 'While Rankin/Bass could animate "The Return of the King", the rights to the first two volumes of "The Lord of the Rings" were owned by another company.'
        },
        {
            question:"Mickey Mouse's antagonist is named:",
            a:'Bluto',
            b:'Pluto',
            c:'Pete',
            d:'Bugs Bunny',
            correctAnswer:'c',
            isAnswered: false,
            answerExplanation: "Pete later got a role as Goofy's neighbor in the show 'Goof Troop.'"
        },
        {
            question:'This is the longest running prime-time cartoon series of all time, still going after all these years:',
            a:'The Flintstones',
            b:'The Simpsons',
            c:'Family Guy',
            d:'South Park',
            correctAnswer:'b',
            isAnswered: false,
            answerExplanation: 'The Simpsons is also the longest running scripted prime time television series, period. 29 seasons and still in production.'
        },
        {
            question:'What celestial body is Marvin the Martian usually trying to blow up?',
            a:'The Moon',
            b:'Mars',
            c:'Toontown',
            d:'Earth',
            correctAnswer:'d',
            isAnswered: false,
            answerExplanation: "Marvin tries to blow up the Earth, which generally is seen as a bad thing to happen for the people living there."
        },
        {
            question:"Disney's first full length color animated feature was this film:",
            a:'Robin Hood',
            b:'A Troll in Central Park',
            c:'Snow White',
            d:'Cinderella',
            correctAnswer:'c',
            isAnswered: false,
            answerExplanation: "Snow White was originally released in 1937, and was so popular it was re-released regularly in theatres until the advent of home video."
        },
        // {
        //     question:'',
        //     a:'',
        //     b:'',
        //     c:'',
        //     d:'',
        //     correctAnswer:'a',
        //     isAnswered: false,
        //     answerExplanation: ""
        // },
        // {
        //     question:'',
        //     a:'',
        //     b:'',
        //     c:'',
        //     d:'',
        //     correctAnswer:'a',
        //     isAnswered: false,
        //     answerExplanation: ""
        // },
        // {
        //     question:'',
        //     a:'',
        //     b:'',
        //     c:'',
        //     d:'',
        //     correctAnswer:'a',
        //     isAnswered: false,
        //     answerExplanation: ""
        // },
    ];

        var questionNumber = 0;                                 //which part of the question arrary are we on
        var gameIsTakingInput = false;                          //are we accepting input currently
        var gameIsFinished = false;                             //is the game done running
        var answersCorrect = 0;                                 //number of correct answers
        var gameIntro = true;                                   //game intro needs to be played
        var currentTriviaQuestion = questions[0];               //this is a holder variable for objects retrieved from the main question variables
        var numberOfQuestions = 10;                             //number of questions in one game
        var pauseInterval = 5000;                               //using this for pause timers so i don't have to edit them all
        var difficultyMeasure = 2;                              //Ideally, this will be adjusted based on how well the player is doing and should result in easier questions if they're doing poorly

        //All of these are for the music playing

        var isMusicMuted = false;
        var titleCardShowing = false;
        var answersCardShowing = false;
        var questionCardShowing = false;
        var intervalId;
        var openingMusic = document.getElementById("titleAudio");
        var questionMusic = document.getElementById("gameAudio");
        var closingMusic = document.getElementById("finishAudio");

        $('.gamePlay').css('display','none');
        $('.gameScore').css('display','none');
        $('.gameFinalScore').css('display','none');

        function gameIntroCard() {
      
            if (gameIntro == false) { 

                newgame(); 

            } else {

                $('.loadingCard').on('click', function() {

                    $('.loadingCard').css('display','none');
                    if (gameIntro == true) {

                    newgame();

                    }
                });
            }
        }
    

        function newgame () {

            gameIntro = false;
            titleCardShowing = true;
            answersCorrect = 0;
            questionNumber = 0;
            gameIsFinished = false; 
            gameIsTakingInput = false;
            currentTriviaQuestion = questions[0];
            difficultyMeasure = 2;

            for (var clearLength = 0; clearLength < questions.length; clearLength++)  {questions[clearLength].isAnswered = false;}
            for (var clearLength = 0; clearLength < questionsEasy.length; clearLength++)  {questionsEasy[clearLength].isAnswered = false;}

            if (isMusicMuted==false) {
                openingMusic.load();
                openingMusic.volume = 0.3;
                setTimeout(function(){openingMusic.play();}, 1000);
            }

            $('.titleImage').css('display','block');
            popFaceInterval = setInterval(function(){ $('#facePopper').css('display', 'block').addClass('bounceIn'); }, pauseInterval);
            $('.gameFinalScore').css('display','none');

        }

        function askQuestions() {
            questionCardShowing = true;
            if (isMusicMuted==false) {
                questionMusic.load();
                questionMusic.volume = 0.3; //waaaay more irritating then I thought it'd be -- maybe do a toggle?
                questionMusic.play();
            }
                //DEEP BREATH THIS MAY GET TRICKY

            if(difficultyMeasure > 0) {

                var aNum = Math.floor(Math.random()*questions.length)
                
                while (questions[aNum].isAnswered == true) {
                    aNum = Math.floor(Math.random()*questions.length)
                }

                questions[aNum].isAnswered = true;
                currentTriviaQuestion = questions[aNum];

            } else {

                var aNum = Math.floor(Math.random()*questionsEasy.length)
                
                while (questionsEasy[aNum].isAnswered == true) {
                    aNum = Math.floor(Math.random()*questionsEasy.length)
                }

                questionsEasy[aNum].isAnswered = true;
                currentTriviaQuestion = questionsEasy[aNum];

            }

                //SPOILER: THAT WAS WAY LESS TRICKY THAN I THOUGHT I WOULD BE

            $('.titleImage').css('display', 'none');
            $('.gamePlay').css('display','block');
            $('.questionText').html(currentTriviaQuestion.question);
            $('.aValue').html(currentTriviaQuestion.a);
            $('.bValue').html(currentTriviaQuestion.b);
            $('.cValue').html(currentTriviaQuestion.c);
            $('.dValue').html(currentTriviaQuestion.d);
            gameIsTakingInput = true;
            $('#extendingTimeBar').stop(true, true);
            $('#extendingTimeBar').css('width','0%');
            $('#extendingTimeBar').animate({width: "100%"}, 20000, 'linear');
            intervalId = setInterval(function(){answerSheet('timeup');}, 20000);
        }

        function answerSheet(answer) {     //the only valid inputs for this should be 'right', 'wrong', and 'timeup'
            questionCardShowing = false;
            questionMusic.pause();
            console.log(intervalId);
            clearInterval(intervalId);
            $('.aValue, .bValue, .cValue, .dValue').css('display','none');
            $('.gameSolution').css('display','block');
            $('#extendingTimeBar').stop(true, true);
            $('#extendingTimeBar').css('width','100%');
            $('#extendingTimeBar').animate({width: "0%"}, 5000, 'linear');
            $('.questionText').html(currentTriviaQuestion.answerExplanation);

            if (answer === 'right') {
                $('.theCorrectAnswer').html('<img id="answerImage" src="assets/images/correct.png">');
                answersCorrect++;
                difficultyMeasure++;
            }
            if (answer === 'wrong') {
                $('.theCorrectAnswer').html('<img id="answerImage" src="assets/images/wrong.png">');
                difficultyMeasure = difficultyMeasure - 2;
            }
            if (answer === 'timeup'){
                $('.theCorrectAnswer').html('<img id="answerImage" src="assets/images/timesup.png">');
                difficultyMeasure--;
            }

            questionNumber++;
            if (questionNumber < numberOfQuestions) {
                setTimeout(function(){
                    askQuestions(); 
                    $('.gameSolution').css('display','none'); 
                    setTimeout(function(){$('.aValue, .bValue, .cValue, .dValue').css('display', 'block');}, 10);
                }, pauseInterval); 
            } else {

                setTimeout(function(){outroCard();}, pauseInterval);
            }
        }

        function outroCard() {

            answersCardShowing = true;
            if (isMusicMuted==false) {
                closingMusic.load();
                closingMusic.play();
                closingMusic.volume = 0.3;
            }

            $('.gameSolution, .titleImage, .gamePlay').css('display','none');
            $('.aValue, .bValue, .cValue, .dValue').css('display', 'block');
            $('.gameFinalScore').css('display','block');
            $('.finalScore').text('You Answered ' + answersCorrect + ' out of ' + numberOfQuestions + ' correctly!');
        }

        //registers the click to start the game

        $('#clickThru').on('click', function() {
            $('.titleImage').css('display','none');
            $('#facePopper').css('display','none').removeClass('bounceIn');
            askQuestions();
            openingMusic.pause();
            titleCardShowing = false;
            clearInterval(popFaceInterval);
        });

        //registers the input from a buttonclick on an answer
        $('.answerTextButton').on('click', function() {
            
            if (gameIsTakingInput = true){

                var buttonClick = $(this).attr("value");
                console.log(buttonClick);
                console.log(currentTriviaQuestion.correctAnswer);
                if (buttonClick == currentTriviaQuestion.correctAnswer) {
                    answerSheet('right');
                } else {
                    answerSheet('wrong');
                }


            }
        });

        $('.playAgainButton').on('click', function() {

            answersCardShowing = false;
            closingMusic.pause();
            newgame();

        });

        //TOGGLE SOUND ON AND OFF -- HOLY GOD WAS THIS REQUIRED

        $('.muteButtonImage').on('click', function() {

            if (isMusicMuted == false) {

                $('.muteButtonImage').attr('src', 'assets/images/mute-3-xxl.png');
                isMusicMuted = true;
                closingMusic.pause();
                openingMusic.pause();
                questionMusic.pause();

            } else {

                $('.muteButtonImage').attr('src', 'assets/images/volume-up-4-xxl.png');
                isMusicMuted = false;
                if (answersCardShowing == true) {closingMusic.play();}
                if (titleCardShowing == true) {openingMusic.play();}
                if (questionCardShowing == true) {questionMusic.play(); questionMusic.volume = 0.3;}

            }

        });

    gameIntroCard();


});