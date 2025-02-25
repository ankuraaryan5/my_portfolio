document.getElementById("btn1").addEventListener("click", function () {
    window.open("https://drive.google.com/file/d/1G11kZraXYOtEDFKbkMnhfzV_5DYJ-2Un/view?usp=sharing", "_blank");
  });
  
  document.getElementById("btn2").addEventListener("click", function () {
    window.location.href = "mailto:ankuraaryan5@gmail.com?subject=Let's%20Connect";
  });
  
  const experiences = [
    {
      title: "Web Developer Intern",
      company: "SuccessLine Media",
      duration: "June 2023 - August 2023",
      description: "Worked on a web application, enhancing user experience and implementing responsive design.",
    },
    {
      title: "Software Developer Trainee",
      company: "Netfotech Solutions",
      duration: "March 2024 - June 2024",
      description: "Worked on full-stack projects using MERN stack, optimized React components, and improved API performance.",
    },
    {
      title: "Freelance Developer",
      company: "",
      duration: "June 2024 - February 2025",
      description: "Developed and deployed multiple projects, including CricMate and Janjagran Manch (a client project), focusing on real-time data and UI/UX improvements.",
    },
    {
      title: "Full Stack Developer",
      company: "Adonomics Technologies Pvt Ltd",
      duration: "February 2025 - Present",
      description: "Joined as Full Stack Developer working on MERN Stack Projects",
    },
  ];
  const reversedExperiences = [...experiences].reverse();
  
  const experienceList = document.getElementById("experience-list");
  
  reversedExperiences.forEach((exp, index) => {
    const isLeft = index % 2 === 0; // Alternate left and right
  
    const experienceItem = `
      <div class="relative flex flex-col md:flex-row items-center md:justify-between mb-8">
        <div class="bg-white w-full md:w-5/12 p-4 shadow-lg rounded-lg ${
          isLeft ? "md:mr-auto md:text-right" : "md:ml-auto"
        } transition hover:scale-105 duration-300 shadow-gray-400">
          <h2 class="text-lg font-bold">${exp.title}</h2>
          <p class="text-blue-500 font-semibold">${exp.company}</p>
          <p class="text-gray-500 text-sm">${exp.duration}</p>
          <p class="text-gray-700 mt-2">${exp.description}</p>
        </div>
  
        <!-- Circle Indicator -->
        <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
      </div>
    `;
  
    experienceList.innerHTML += experienceItem;
  });
  
  const jokeButton = document.getElementById("jokeButton");
  const jokeText = document.getElementById("jokeText");
  async function fetchJoke() {
    try {
      const response = await fetch("https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun?blacklistFlags=religious&type=twopart");
      const data = await response.json();
      
      if (data.setup && data.delivery) {
        jokeText.textContent = `${data.setup} ${data.delivery}`;
        jokeButton.disabled = true;
        jokeButton.textContent = "Hope you haha'd! 😉";
      } else {
        jokeText.textContent = "Oops! Couldn't fetch a joke right now. Please try again!";
      }
    } catch (error) {
      jokeText.textContent = "Something went wrong. Please try again!";
    }
  }
  jokeButton.addEventListener("click", fetchJoke);
