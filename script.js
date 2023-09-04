function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


// function startAutoType() {
//   const textElements = document.querySelectorAll('.section__text__p1, .section__text__p2');

//   textElements.forEach(textElement => {
//       const originalTextContent = textElement.getAttribute('data-original-text'); // Store the original text content
//       const textContent = originalTextContent || textElement.textContent;
//       textElement.textContent = '';

//       let i = 0;
//       function typeText() {
//           if (i < textContent.length) {
//               textElement.textContent += textContent.charAt(i);
//               i++;
//               setTimeout(typeText, 110); // Adjust typing speed here
//           }
//       }

//       typeText();
//   });
// }

// // Call the startAutoType function initially
// startAutoType();

// // Set up auto-repeating every 10 seconds
// setInterval(startAutoType, 6000); // 10000 milliseconds = 10 seconds





// function startAutoType() {
//   const textElements = document.querySelectorAll('.section__text__p1, .section__text__p2');

//   textElements.forEach(textElement => {
//     const originalTextContent = textElement.textContent; // Store the original text content
//     textElement.textContent = '';

//     let i = 0;

//     function typeText() {
//       if (i < originalTextContent.length) {
//         textElement.textContent += originalTextContent.charAt(i);
//         i++;
//         setTimeout(typeText, 110); // Adjust typing speed here
//       }
//     }

//     typeText();
//   });
// }

// // Call the startAutoType function initially
// startAutoType();

// // Set up auto-repeating every 10 seconds
// setInterval(startAutoType, 4500); // 10000 milliseconds = 10 seconds



// function startAutoType(textElement, textContent) {
//   textElement.textContent = '';
//   let i = 0;

//   function typeText() {
//     if (i < textContent.length) {
//       textElement.textContent += textContent.charAt(i);
//       i++;
//       setTimeout(typeText, 110); // Adjust typing speed here
//     }
//   }

//   typeText();
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const textElements = document.querySelectorAll('.section__text__p1, .section__text__p2');

//   textElements.forEach(textElement => {
//     const originalTextContent = textElement.getAttribute('data-original-text');
//     const textContent = originalTextContent || textElement.textContent;

//     // Call the startAutoType function initially
//     startAutoType(textElement, textContent);

//     // Set up auto-repeating every 10 seconds
//     setInterval(() => {
//       startAutoType(textElement, textContent); // Start typing again
//     }, 4500); // 10000 milliseconds = 10 seconds
//   });
// });



function startAutoType(textElement, textContent) {
  textElement.textContent = '';
  let i = 0;
  let typingInProgress = false;
  let typingTimeout;

  function typeText() {
    if (i < textContent.length) {
      textElement.textContent += textContent.charAt(i);
      i++;
      typingTimeout = setTimeout(typeText, 110); // Adjust typing speed here
    } else {
      typingInProgress = false;
    }
  }

  if (!typingInProgress) {
    typingInProgress = true;
    typeText();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const textElements = document.querySelectorAll('.section__text__p1, .section__text__p2');

  textElements.forEach(textElement => {
    const originalTextContent = textElement.getAttribute('data-original-text');
    const textContent = originalTextContent || textElement.textContent;

    // Call the startAutoType function initially
    startAutoType(textElement, textContent);

    // Set up auto-repeating every 10 seconds
    setInterval(() => {
      startAutoType(textElement, textContent); // Start typing again
      i = 0; // Reset typing index
    }, 4500); // 10000 milliseconds = 10 seconds
  });
});






  







// Contact Us 

    // function Send() {
    //     var name = document.getElementById("name").value;
    //     var email = document.getElementById("email").value;
    //     var phone = document.getElementById("phone").value;
    //     var message = document.getElementById("message").value;
    
    //     var body = "Name: " + name + "<br/> Email: " + email + "<br/> Contact Number: " +
    //                phone +  "<br/> Message: " + message;
    
    //     console.log(body);
    
    //     Email.send({
    //         SecureToken: "71ec2f6d-f0ba-483e-a60b-50acfedbbd76",
    //         To: 'shivamwallu72594@gmail.com',
    //         From: "shivamwallu72594@gmail.com",
    //         Subject: "This is the subject",
    //         Body: body
    //     }).then(
    //         message => {
    //             if (message === 'OK') {
    //                 swal("Successfull", "You Message Successfully Received", "success");
    //                 // Clear the input fields
    //                 document.getElementById("name").value = "";
    //                 document.getElementById("email").value = "";
    //                 document.getElementById("phone").value = "";
    //                 document.getElementById("message").value = "";
    //             } else {
    //                 swal("Something Wrong", "You Message is Not Received", "error");
    //             }
    //         }
    //     );
    // }




function Send() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  var body1 = "<b>Name -- " + name + "<br/> Email -- " + email + "<br/> Contact Number -- " +
    phone + "<br/> Message -- " + message;

  var body = "<b>Name -- " + name + "<br/> Email -- " + email + "<br/> Contact Number -- " +
    phone + "<br/> Message -- " + message + "<br/> <br/> <br/> Your Form is Submited Successfully." +
    "<br/>Thanks For Visiting..." + "<h3>&#128516;</h3>";

  console.log(body);

  Email.send({
    SecureToken: "71ec2f6d-f0ba-483e-a60b-50acfedbbd76",
    To: 'shivamwallu72594@gmail.com',
    From: "shivamwallu72594@gmail.com",
    Subject: "Contact Us",
    Body: body1
  })
  Email.send({
    SecureToken: "71ec2f6d-f0ba-483e-a60b-50acfedbbd76",
    To: email,
    From: "shivamwallu72594@gmail.com",
    Subject: "Shivam Contact Us Form",
    Body: body
  }).then(
    message => {
      if (message === 'OK') {
        swal("Successfull", "You Message Successfully Received", "success");
        // Clear the input fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
      } else {
        swal("Something Wrong", "You Message is Not Received", "error");
      }
    }
  );
}
    
