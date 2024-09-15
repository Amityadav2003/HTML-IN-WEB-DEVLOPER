const colors = ['blue','green','red','purple','orange','pink','yellow'];
let colorIndex = 0;

function changeColor(){
    const button = document.querySelector('.color-button');
    button.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

function displayGreeting(){
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 12){
        greeting = "Good Moring!";
    } else if (hours < 18){
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening";
    }

    document.getElementById('greetingMessage').innerText = greeting;
    document.getElementById('greetingModal').style.display = 'flex';
}

function closeModal(){
    document.getElementById('greetingModal').style.display = 'none';
}

function calculateSum(){
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)){
      alert("Please fill out both fields.");
      return;
    }

    const sum = num1 + num2;
    document.getElementById('result').innerText = sum ? sum : '';
}
