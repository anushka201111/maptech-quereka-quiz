function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What is the name of the new covid-vaccine in india?", ["COVAXIN", "COVARAXIN","RUBELLA VACCINE", "MEASELS VACCINE"], "COVAXIN"),

    new Question("Who is the current chief minister of Kashmir?", ["mehbooba mufti", "farooq abdullah","B.V.R Subramanium", "no one"], "no one"),
    

    new Question("Which city's farmers are currently protesting?", ["New Delhi", "Chandigarh","Hydrabad", "Lucknow"], "New Delhi"),
    

    new Question("Which Campus is landed by the petroleum ministry of India?", ["UNIVERSITY OF CHANDIGARH", "AYUSH","AAYUSH", "SAKSHAM"], "SAKSHAM"),
	
	new Question("When did the first drive of covid-vaccine occurr?", ["January 12", "January 16","January 22", "January 1"], "January 16"),
    
	new Question("What is the full form of GSI?", ["Goelogy survey by India", "Geography surveryors of India","Geological survey of India", "Geographical survey of India"], "Geological survey of India"),
    
	new Question("Which bank was penaltied for rupees 2 crore by RBI?", ["Bank Of India", "Chandigarh Bank","Chartered bank", "Bank of Maharashtra"], "Chartered bank"),
    
	new Question("Andaman and Nicobar islands command which joint military?", ["KAVACH", "SHAKTI","SHEILD", "BHALA"], "KAVACH"),
	
    new Question("What is the name of the new 'yojna' released on january 15", ["PRADHAN MANTRI KAUSHAL VIKAS YOJNA 3.0", "PRADHAN MANTRI KAUSHAL VIKAS YOJNA","PRADHAN MANTRI KAUSHAL VIKAS YOJNA 1.0", "PRADHAN MANTRI KAUSHAL VIKAS YOJNA 2.0"], "PRADHAN MANTRI KAUSHAL VIKAS YOJNA 3.0"),
	
    new Question("What is the full form of GDP?", ["Goods dominant product", "Goods domestic product","Goods depart produce", "Grand duplex produce"], "Goods domestic product"),
	
    new Question("Which comapny owns the mobile product named as VIVO?", ["Bbk enterprises", "Xiaomi corp.","Samsung electronics", "Huwaei enterprises"], "Bbk enterprises"),
	
    new Question("Inaugration of Ram Mandir?", ["23 august ", "21 march","31 auagust", "5 auagust"], "5 auagust"),
	
	
    new Question("which state is likely to be prime vandinum producer of india ?", ["Arunachal pradesh", "Gujrat","Rajasthan", "Haryana"], "Arunachal pradesh"),
	
    new Question("Who devoloped the Bharat Covid vaccine?", ["Bharat Biotech", "Bharat industries","India bio tech", "Bharat bio sabha"], "Bharat Biotech"),
    
        

];


var quiz = new Quiz(questions);


populate();


