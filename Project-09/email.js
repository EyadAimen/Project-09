// var form = document.getElementById('form');
// var errorMessage = document.getElementById('error_message');
// var email = document.getElementById('email');
// form.addEventListener('submit',function(e){
//     var re = /\S+@\S+\.\S+/;
//     if(!email.value){
//         errorMessage.innerText = 'Please insert an email.';
//         url.style.outline ='3px solid hsl(0, 87%, 67%)';
//         email.id = 'email1';
//         e.preventDefault();
//     }
//     else if(!re.test(email.value)){
//         errorMsg.innerText = 'Please enter a valid email.';
//         email.id = 'email1';
//         e.preventDefault();
//     }
//     // else{
//     //     errorMessage.innerText = 'Thanks for your application.'
//     //     errorMessage.style.color = 'green'
//     //     e.preventDefault();
//     // }
// });


var errorMsg = document.getElementById('error_message');
var form = document.getElementById('form'); 
var email = document.getElementById('email');
form.addEventListener('submit',function(event){
    var re = /\S+@\S+\.\S+/;
if(!email.value){
    errorMsg.id='error_message'
    errorMsg.innerText = 'The email field is empty!';
    email.style.outline ='1px solid hsl(0, 87%, 67%)';
    email.id = 'email1'
    event.preventDefault();
}
else if(!re.test(email.value)){
    errorMsg.id='error_message'
    errorMsg.innerText = 'Please enter a valid email address';
    email.id = 'email1'
    email.style.outline ='1px solid hsl(0, 87%, 67%)';
    event.preventDefault();
}
else{
    errorMsg.innerText = 'Thanks for your application! ';
    errorMsg.id='confirm_messge';
    email.id = 'email'
    email.style.outline ='none';
    event.preventDefault();
}
});
