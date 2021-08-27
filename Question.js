class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
   this.input2= createInput("Enter Your Option No Here....");
    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question=createQuestion("Question:- I am your friend and I am your enemy.Who am I?");
    this.option1=createOption("1.Tree");
    this.option2=createOption("2.Wind");
    this.option3.createOption("3.Sky");
    this.option4.createOption("4.Time");
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.message.hide();
    //Add hide() for questions, options & input box
    this.input2.hide();
    this.question.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();

  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350,0);
    //Create html() and position() for each question, input and answers.
    this.input1.html("input1");
    this.input1.position(150,230);
    
    this.input2.html("input2");
    this.input2.position(350,430);
    
    this.question.html("question");
    this.question.position(50,30);
    
    this.option1.html("option1");
    this.option1.position(60,30);
    
    this.option2.html("option2");
    this.option2.position(70,30);
    
    this.option3.html("option3");
    this.option3.position(80,30);
    
    this.option4.html("option4");
    this.option4.position(90,30);
    
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
    this.input1.hide();
    this.input2.hide();
    var message=
    `ThankYou, Your Answer Has Been Submitted`;
    this.greeting.html(message);
    })


  }
}
