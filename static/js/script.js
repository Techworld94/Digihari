/*---------menu icon navbar----------------*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



/*----------scroll sections active links ----------------*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

/* -----------sticky navbar--------------*/
let header = document.querySelector('.header');
header.classList.toggle('sticky',window.scrollY > 100);

/*----------remove menu icon navbar when click navbar link---------------*/

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

/*----------Dark light mode---------------*/

let darkModeIcon = document.querySelector('#darkMode-icon');

if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeIcon.classList.add('bx-sun');
}

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

/*----------scroll reveal---------------*/

document.querySelector('.home').classList.add('active');

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const homeSection = document.querySelector('.home');

    sections.forEach((section, index) => {
        if (index !== 0) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollTop >= sectionTop - windowHeight / 2 && scrollTop < sectionTop + sectionHeight - windowHeight / 2) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        } else {
            const sectionTop = homeSection.offsetTop;
            if (scrollTop < sectionTop + windowHeight / 2) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        }
    });
});

// /*----Chatbot----*/

// var isFirstTime = true;

// function toggleChatbox() {
//     var chatbox = document.querySelector('.chat-container');
    
//     if (chatbox.style.display === 'none' || chatbox.style.display === '') {
//         chatbox.classList.add('open');
//         chatbox.classList.remove('close');
//         if (isFirstTime) {
//             sendWelcomeMessage();
//             isFirstTime = false;
//         }
//     } else {
//         chatbox.classList.add('close');
//         chatbox.classList.remove('open');
//     }
//     setTimeout(function() {
//         chatbox.style.display = (chatbox.style.display === 'none' || chatbox.style.display === '') ? 'block' : 'none';
//     }, 300);
// }

// // Function to send a welcome message from the bot
// function sendWelcomeMessage() {
//     var chatDisplay = document.getElementById('chat-display');
//     var welcomeMessage = "Hello! 😊 I am Here to guide you in understanding Hari better, personally and professionally. Discover his array of skills, rich experiences, and multicultural contributions. Unveil Hari's strengths, innovative ideas, and why he's your ideal partner.";
//     chatDisplay.innerHTML += '<div class="message bot">' + welcomeMessage + '</div>';
//     chatDisplay.scrollTop = chatDisplay.scrollHeight; // Auto-scroll to the latest message
// }

// function sendMessage() {
//     var userInput = document.getElementById('user-input').value;
//     if (userInput.trim() === '') return;

//     var chatDisplay = document.getElementById('chat-display');
//     chatDisplay.innerHTML += '<div class="message user"><span class="message-content">' + userInput + '</span></div>';
//     document.getElementById('user-input').value = '';

//     chatDisplay.innerHTML += '<div class="message bot typing"><span class="message-content">Typing...</span></div>';
//     chatDisplay.scrollTop = chatDisplay.scrollHeight;

//     // Send user input to the server
//     fetch('/chat', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             user_input: userInput,
//         }),
//     })
//     .then(response => response.json())
//     .then(data => {
//         var botResponse = data.bot_response;
//         setTimeout(function() {
//             var typingIndicator = document.querySelector('.message.bot.typing');
//             if (typingIndicator) {
//                 typingIndicator.innerHTML = '<span class="message-content">' + botResponse + '</span>';
//                 typingIndicator.classList.remove('typing');
//             }
//             else {
//                 chatDisplay.innerHTML += '<div class="message bot"><span class="message-content">' + botResponse + '</span></div>';
//             }
//             chatDisplay.scrollTop = chatDisplay.scrollHeight;
//         }, 1000); // Adjust the delay time as needed
//     })
//     .catch(error => {
//         console.error('Error sending message:', error);
//     });
// }

// // Event listener for Enter key
// document.getElementById('user-input').addEventListener('keyup', function(event) {
//     if (event.key === 'Enter') {
//         event.preventDefault();
//         sendMessage();
//     }
// });

// // Event listener for Esc key
// document.addEventListener('keyup', function(event) {
//     if (event.key === 'Escape') {
//         var chatbox = document.querySelector('.chat-container');
//         chatbox.style.display = 'none';
//     }
// });

/*----Experienced years-----*/

var startDate = new Date('2015-09-16');
var currentDate = new Date();
var yearsExperience = currentDate.getFullYear() - startDate.getFullYear();
document.getElementById('experience-years').textContent = yearsExperience;

/*---Download CV -----*/

function downloadCV(event) {
    event.preventDefault();

    var link = document.getElementById('download-link');
    if (link) {
        document.body.removeChild(link);
    }
    link = document.createElement('a');
    link.href = '/static/Resume/Harihara_Ganesh.pdf';
    link.download = 'Harihara_Ganesh.pdf';
    link.id = 'download-link';

    document.body.appendChild(link);
    link.click();
}

/*--Read me ----*/

function toggleContent() {
    event.preventDefault();
    var content = document.getElementById('expand-content');
    content.classList.toggle('hidden');
    content.classList.toggle('expanded');
}


/*-----Education & Experiences ----------*/

function toggleAll() {
    var extraEducation = document.querySelector('.extra-education');
    var extraExperiences = document.querySelector('.extra-experiences');
    var btn = document.getElementById('toggle-all-btn');

    var isHidden = extraEducation.style.display === "none" && extraExperiences.style.display === "none";

    if (isHidden) {
        extraEducation.style.display = "block";
        extraExperiences.style.display = "block";
        btn.textContent = "Find Less";
    } else {
        extraEducation.style.display = "none";
        extraExperiences.style.display = "none";
        btn.textContent = "Find More";
    }
}

/***---- Project section--- */
document.addEventListener("DOMContentLoaded", function () {
    function adjustProjectLayout() {
        let projectCards = document.querySelectorAll(".project-card");
        let projectText = document.querySelectorAll(".project-right p");
        let techStackLists = document.querySelectorAll(".project-right ul");
        let techStackHeadings = document.querySelectorAll(".project-right p strong");

        let fullText = "Interact with PDFs like never before! This AI-driven chatbot allows users to upload PDFs and ask questions, get summaries, and explore content in any language, with real-time context-aware responses.";
        let shortText = "Interact with PDFs like never before! This AI-driven chatbot helps you summarize and explore content effortlessly.";

        projectText.forEach(text => {
            if (window.innerWidth < 768) {
                    fullText = text.textContent; // Set the short summary
                } else {
                    shortText = text.textContent; // Set the full content
                }
            });

        // Adjust card layout based on screen width
        projectCards.forEach(card => {
            if (window.innerWidth < 768) {
                card.classList.add("mobile-layout");
            } else {
                card.classList.remove("mobile-layout");
            }
        });

        // Hide/Show tech stack list based on screen width
        techStackLists.forEach(ul => {
            if (window.innerWidth < 768) {
                ul.style.display = "none"; // Hide Tech Stack list
            } else {
                ul.style.display = "block"; // Show Tech Stack list
            }
        });

        // Hide/Show tech stack heading based on screen width
        techStackHeadings.forEach(heading => {
            if (window.innerWidth < 768) {
                heading.style.display = "none"; // Hide "Tech Stack" heading
            } else {
                heading.style.display = "block"; // Show "Tech Stack" heading
            }
        });
    }

    // Run the function on page load
    adjustProjectLayout(); 

    // Run on resize event
    window.addEventListener("resize", adjustProjectLayout);
});


/*----Send Message----*/

function initializeContactForm() {
    document.addEventListener('DOMContentLoaded', function () {
        const contactForm = document.querySelector('#contact-form');

        contactForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            try {
                const formData = new FormData(contactForm);
                await fetch('/send_message', {
                    method: 'POST',
                    body: formData,
                });
                Swal.fire({
                    icon: 'success',
                    title: 'Message sent successfully!',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    contactForm.reset();
                });
            } catch (error) {
                console.error('Error:', error);
            }
        });
    });
}

initializeContactForm();

/*---Service Modal

function openModal(serviceName, event) {
    event.preventDefault();

    var modal = document.getElementById("myModal");
    var modalTitle = document.getElementById("modal-title");
    var modalContent = document.getElementById("modal-content");

    switch (serviceName) {
        case 'Web Development':
            modalTitle.innerHTML = "Web Development Services";
            modalContent.innerHTML = "1. How we can build your web.<br>2. What tech stacks we can use.<br>3. How the process begins from start till deployment.<br>4. How we can modify based on your requirements.";
            break;
        default:
            break;
    }

    modal.style.display = "block";

    window.addEventListener("keydown", function (event) {
        if (event.key === "Escape" || event.key === "Esc") {
            closeModal();
        }
    });
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    window.removeEventListener("keydown", function () {});
}

window.onclick = function (event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}*/