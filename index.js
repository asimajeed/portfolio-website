// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
const html = document.documentElement;

let theme = localStorage.getItem("theme");

if (!theme && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)
  localStorage.setItem("theme", "dark");

darkModeToggle.addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  root.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const closeMobileMenuBtn = document.getElementById("closeMobileMenu");
let mobileMenuShown = false;

const openMobileMenu = () => {
  mobileMenu.classList.remove("translate-x-full");
  // wait 300ms before setting this to true. Waiting for the transition
  setTimeout(() => {
    mobileMenuShown = true;
  }, 305);
};

const closeMobileMenu = () => {
  mobileMenu.classList.add("translate-x-full");
  // wait 300ms before setting this to false. Waiting for the transition
  setTimeout(() => {
    mobileMenuShown = false;
  }, 305);
};

mobileMenuToggle.addEventListener("click", openMobileMenu);

closeMobileMenuBtn.addEventListener("click", closeMobileMenu);

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll("a");
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
  });
});

// Close mobile menu when clicking outside it
document.addEventListener("click", (ev) => {
  if (mobileMenuShown && ev.target !== mobileMenu && !mobileMenu.contains(ev.target)) {
    closeMobileMenu();
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Scroll progress indicator
const scrollIndicator = document.getElementById("scrollIndicator");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset;
  const docHeight = document.body.offsetHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollIndicator.style.width = scrollPercent + "%";
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = `${Math.random() * 0.3}s`;
      entry.target.classList.add("fade-in");
    }
  });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Form validation and submission
const contactForm = document.getElementById("contactForm");
const formFields = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  subject: document.getElementById("subject"),
  message: document.getElementById("message"),
};

const errorElements = {
  name: document.getElementById("nameError"),
  email: document.getElementById("emailError"),
  subject: document.getElementById("subjectError"),
  message: document.getElementById("messageError"),
};

const successElement = document.getElementById("formSuccess");

// Validation functions
function validateName(name) {
  if (name.length < 2) {
    return "Name must be at least 2 characters long";
  }
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    return "Name can only contain letters and spaces";
  }
  return "";
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Please enter a valid email address";
  }
  return "";
}

function validateSubject(subject) {
  if (subject.length < 5) {
    return "Subject must be at least 5 characters long";
  }
  return "";
}

function validateMessage(message) {
  if (message.length < 10) {
    return "Message must be at least 10 characters long";
  }
  return "";
}

// Real-time validation
formFields.name.addEventListener("input", () => {
  const error = validateName(formFields.name.value);
  errorElements.name.textContent = error;
  formFields.name.classList.toggle("border-red-500", error !== "");
  formFields.name.classList.toggle("border-green-500", error === "" && formFields.name.value !== "");
});

formFields.email.addEventListener("input", () => {
  const error = validateEmail(formFields.email.value);
  errorElements.email.textContent = error;
  formFields.email.classList.toggle("border-red-500", error !== "");
  formFields.email.classList.toggle("border-green-500", error === "" && formFields.email.value !== "");
});

formFields.subject.addEventListener("input", () => {
  const error = validateSubject(formFields.subject.value);
  errorElements.subject.textContent = error;
  formFields.subject.classList.toggle("border-red-500", error !== "");
  formFields.subject.classList.toggle("border-green-500", error === "" && formFields.subject.value !== "");
});

formFields.message.addEventListener("input", () => {
  const error = validateMessage(formFields.message.value);
  errorElements.message.textContent = error;
  formFields.message.classList.toggle("border-red-500", error !== "");
  formFields.message.classList.toggle("border-green-500", error === "" && formFields.message.value !== "");
});

// Form submission
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Clear previous messages
  Object.values(errorElements).forEach((el) => (el.textContent = ""));
  successElement.textContent = "";

  // Validate all fields
  const errors = {
    name: validateName(formFields.name.value),
    email: validateEmail(formFields.email.value),
    subject: validateSubject(formFields.subject.value),
    message: validateMessage(formFields.message.value),
  };

  // Display errors
  let hasErrors = false;
  Object.keys(errors).forEach((field) => {
    if (errors[field]) {
      errorElements[field].textContent = errors[field];
      formFields[field].classList.add("border-red-500");
      hasErrors = true;
    } else {
      formFields[field].classList.remove("border-red-500");
      formFields[field].classList.add("border-green-500");
    }
  });

  if (!hasErrors) {
    // Simulate form submission
    const submitButton = contactForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    setTimeout(() => {
      successElement.textContent = "Thank you for your message! I'll get back to you soon.";
      contactForm.reset();
      Object.values(formFields).forEach((field) => {
        field.classList.remove("border-green-500", "border-red-500");
      });
      submitButton.disabled = false;
      submitButton.textContent = "Send Message";
    }, 2000);
  }
});

// Typing animation for hero section
const typingText = document.querySelector(".typing-animation");
const texts = [
  "Software Developer (AI & Web)",
  "Full-Stack Developer",
  "AI / Deep Learning Enthusiast",
  "IoT Solutions",
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    typeSpeed = 500;
  }

  setTimeout(typeText, typeSpeed);
}

// Start typing animation after page load
window.addEventListener("load", () => {
  setTimeout(typeText, 1000);
});

// Add active nav link highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.offsetHeight;
    if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-blue-600", "dark:text-blue-400");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("text-blue-600", "dark:text-blue-400");
    }
  });
});
