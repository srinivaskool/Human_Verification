var n1;
var n2;
var n3;

function nextQuestion() {

    n1 = Math.floor(Math.random() * 5);
    document.getElementById('n1').innerHTML = n1;

    n2 = Math.floor(Math.random() * 6);
    document.getElementById('n2').innerHTML = n2;
    
    n3 = Math.floor(Math.random() * 7);
    document.getElementById('n3').innerHTML = n3;
}

var total_correct = 0;

function checkAnswer()
{
    total_correct = 0;
    
    const prediction1 = predictImage1();
    if (prediction1 == n1) {
        total_correct = total_correct +1;
    }
    
    const prediction2 = predictImage2();
    if (prediction2 == n2) {
        total_correct = total_correct +1;
    }
    
    const prediction3 = predictImage3();
    if (prediction3 == n3) {
        total_correct = total_correct +1;
    }
    
    if (total_correct == 3) {
        total_correct = total_correct +1;
        alert('Verified Succesfully!');
    }
    else if(total_correct != 3)
    {
        alert('NOT MATCHED. Please try again. You wrote ' + prediction1 + prediction2 + prediction3);
    }
}
