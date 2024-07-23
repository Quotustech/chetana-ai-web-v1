// const form = document.querySelector('form');
// const fullName= document.getElementById('name');
// const email= document.getElementById('email');
// const subject= document.getElementById('subject');
// const mess = document.getElementById('message');

// function sendMail(){
//     const bodyMessage = `Name: ${fullName.value}<br>Email: ${email.value}<br>Subject: ${subject.value}<br>Message: ${mess.value}`;


//     email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "samikshyaaruk@gmail.com",
//     Password : "58ADFA49432613D2393B70EEA575AB8D8FDB",
//     To : 'samikshyaaruk@gmail.com',
//     From : "samikshyaaruk@gmail.com",
//     Subject : subject.value,
//     Body : bodyMessage
// }).then(
//   message => {
//     if(message == "OK")
//         Swal.fire({
//             title: "Success!",
//             text: "Message sent successfully!",
//             icon: "success"
//           });
//     }
// );
// }


// function checkInputs(){
//     const formcontrol= document.querySelectorAll(".form-control");

//     for(const i of formcontrol)
//     {
//         if(i.value =="" )
//         {
//             i.classList.add("ERROR");
//             i.parentElement.classList.add("error");
//         }
//         if (i[1].value != "")
//         {
//             checkEmail();
//         }
//         i[1].addEventListener("keyup",()=>{
//             checkEmail();
//         })
//         i.addEventListener("keyup",()=>{
//             if(i.value != ""){
//                 i.classList.remove("ERROR");
//                 i.parentElement.classList.remove("error");
//             }
//             else{
//                 i.classList.add("ERROR");
//             i.parentElement.classList.add("error");
//             }
//         })
//     }
    
// }

// function checkEmail(){
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//     if(!email.value.match(emailRegex))
//     {
//         email.classList.add("ERROR");
//         email.parentElement.classList.add("ERROR");

//         // if(email.value !="")
//         // {

//         // }
//     }
//     else{
//         email.classList.remove("ERROR");
//         email.parentElement.classList.remove("ERROR");
//     }
// }

// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     checkInputs();

//     if(!fullName.classList.contains("ERROR") && !email.classList.contains("ERROR")&& !subject.classList.contains("ERROR")&& !mess.classList.contains("ERROR")){

//     console.log("OKK")
//      sendMail()

//      form.reset();
//      return false;
//     }
// })



//new script

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const fullName = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const mess = document.getElementById('message');

    function sendMail() {
        const bodyMessage = `Name: ${fullName.value}<br>Email: ${email.value}<br>Subject: ${subject.value}<br>Message: ${mess.value}`;

        Email.send({
            SecureToken :"53a897ec-cb0d-487a-82c1-48dc13ae43e7",
            // Host: "smtp.elasticemail.com",
            // Username: "samikshyaaruk@gmail.com",
            // Password: "58ADFA49432613D2393B70EEA575AB8D8FDB",
            To: 'samikshyaaruk@gmail.com',
            From: "samikshyaaruk@gmail.com",
            Subject: subject.value,
            Body: bodyMessage
        }).then(
            message => {
                if (message === "OK") {
                    Swal.fire({
                        title: "Success!",
                        text: "Message sent successfully!",
                        icon: "success"
                    });
                } else {
                    console.error("Email sending error:", message);
                    Swal.fire({
                        title: "Error!",
                        text: "Message could not be sent. Please try again later.",
                        icon: "error"
                    });
                }
            }
        ).catch(error => {
            console.error("Email sending exception:", error);
            Swal.fire({
                title: "Error!",
                text: "Message could not be sent. Please try again later.",
                icon: "error"
            });
        });
    }

    function checkInputs() {
        const formControls = document.querySelectorAll(".form-control");

        formControls.forEach(control => {
            if (control.value === "") {
                control.classList.add("ERROR");
                control.parentElement.classList.add("error");
            } else {
                control.classList.remove("ERROR");
                control.parentElement.classList.remove("error");
            }
        });

        checkEmail();
    }

    function checkEmail() {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!email.value.match(emailRegex)) {
            email.classList.add("ERROR");
            email.parentElement.classList.add("ERROR");
        } else {
            email.classList.remove("ERROR");
            email.parentElement.classList.remove("ERROR");
        }
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        checkInputs();

        if (!fullName.classList.contains("ERROR") && !email.classList.contains("ERROR") && !subject.classList.contains("ERROR") && !mess.classList.contains("ERROR")) {
            console.log("Form is valid. Sending email...");
            sendMail();
            form.reset();
        } else {
            console.log("Form is invalid. Please correct the errors and try again.");
        }
    });
});
