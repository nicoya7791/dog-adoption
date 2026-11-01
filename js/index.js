//ANIMATEjs Libray for scramble the content of 'h2' element
//____________________________________________________________
import { animate, stagger, splitText } from "https://esm.sh/animejs"; // CDN
//Get element to scramble
const h2 = document.getElementById("scramble");

const { chars } = splitText(h2, { words: false, chars: true });

//***************************** */
//Code block given by the library
//********************************* */
animate(chars, {
  y: [
    { to: "-2.75rem", ease: "outExpo", duration: 600 },
    { to: 0, ease: "outBounce", duration: 800, delay: 100 },
  ],
  // Property specific parameters
  rotate: {
    from: "-1turn",
    delay: 0,
  },
  delay: stagger(50),
  ease: "inOutCirc",
  loopDelay: 9000,
  loop: true,
});

//****************************************** */
//begin: event listener to read form values
//************************************** */

//check if the if contact page is loaded then run event listener
// the readon is the file is shared with other html pages and it will attempt to
// fetch the form and display error in the console.
var pageTitle = document.title;

if (pageTitle === "contact") {
  // add event listener to the submit button
  const form = document.querySelector("#contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop the page from reloading
    const form = document.querySelector("#contactForm");

    // get the form input values in object format
    const formData = new FormData(form);

    // //get the hidden paragrah.
    let msg = document.getElementById("success-message");

    // gets the name from form to dynamically display message

    const name = document.getElementById("inputName4").value;

    // //this message orignally is hidden, it will display after sending the message
    msg.innerHTML = `Hi ${name} your message was sent <span class="text-primary">Click to Hide<span>`; // this message get added to html paragraph

    // // for screen reader to not read message when is hidden.
    $(msg).show().attr("aria-hidden", "false");

    //JQUERY is used to clear the form after submition
    // // Clear the form after submition
    // 1. Clear text inputs, textareas, and dropdown selections
    $(form)
      .find("input:text, input:password, input[type=email], textarea, select")
      .val("");
    //clearFormManually(form);
    // // hide the paragraph
    handleHide(msg);
  });
} // END IF STATEMENT

// JQuery is used to hide the message with animation
//Hides the paragram success message when clicked
function handleHide(element) {
  $("#success-message").on("click", function () {
    $(this).hide(1000).attr("aria-hidden", "true");
  });
  element.removeAttribute("style");
}

//CLEAR FORM
// The form.reset() does not work on chrome brower
// To demostrate looping im using foreach in an array of input elements
//****************************************************** */
// function clearFormManually(form) {
//   const inputs = form.querySelectorAll("input");
//   const textArea = form.querySelector("textarea");

//   //array fo input plus text area message
//   const AllInputs = Array.from(inputs);
//   AllInputs.push(textArea);
//   // assign an empty string to each input value
//   AllInputs.forEach((element) => {
//     element.value = "";
//   });
// }
