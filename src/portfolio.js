import emoji from "react-easy-emoji";

import googlelogo from "./assets/img/icons/common/google.svg";
import northroplogo from "./assets/img/icons/common/Northrop_Grumman.png";
import github from "./assets/img/icons/common/github.svg";
import airbnb from "./assets/img/icons/common/airbnbLogo.png";
import catlogo from "./assets/img/icons/common/CAT.png";
import macnicalogo from "./assets/img/icons/common/macnica.png";

export const greetings = {
	name: "Koki Narimoto",
	title: "Hi everyone! I'm Koki",
	description:
		"A rising fourth-year Computer Engineering student at UC Santa Barbara having experience with implementing AI/ML algorithms utilizing tensorflow / scikit learn / python and building Web applications with JavaScript / ReactJS / Nodejs.",
	description2:
		"I am also a huge basketball person, love to travel, and most of the time, you can see me working on various ways to improve myself or spending quality time with friends and family!",
	resumeLink: "https://cv.hanzla.ga",
};

export const openSource = {
	githubUserName: "koki-narimoto",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/1hanzla100",
	instagram: "https://www.instagram.com/1hanzla100",
	twitter: "https://twitter.com/1hanzla100",
	github: "https://github.com/koki-narimoto",
	linkedin: "https://www.linkedin.com/in/koki-narimoto",
};

export const skillsSection = {
	title: "My Skills!",
	subTitle:
		"Software Developing Skills",
	sub_prog_title1:
		"Programming Languages",
	sub_prog_title2:
		"Full Stack",
	sub_prog_title3:
		"Software",
	sub_prog_title4:
		"Languages",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		),
		emoji(
			"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
		),
		emoji(
			"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
		),
	],
	programmingLanguages: [
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "CPP",
			fontAwesomeClassname: "logos:c-plusplus",
		},
		{
			skillName: "C",
			fontAwesomeClassname: "logos:c",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "Java",
			fontAwesomeClassname: "logos:java",
		},
	],
	fullStackRelated: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "postgresql",
			fontAwesomeClassname: "logos:postgresql",
		},
		{
			skillName: "heroku",
			fontAwesomeClassname: "logos:heroku-icon",
		},
	],
	software: [
		{
			skillName: "tensorflow",
			fontAwesomeClassname: "logos:tensorflow",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "sourcetree",
			fontAwesomeClassname: "logos:sourcetree",
		},
		{
			skillName: "confluence",
			fontAwesomeClassname: "logos:confluence",
		},
	],
	languages: [
		{
			skillName: "fluent_japanaese",
			fontAwesomeClassname: "twemoji:flag-for-flag-japan",
		},
		{
			skillName: "fluent_english",
			fontAwesomeClassname: "emojione-v1:flag-for-united-states",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "University of California Santa Barbara",
		subHeader: "Master of Science in Computer Science",
		duration: "September 2021 - June 2023",
		desc: "Major Area in Applications with an emphasis on AI/ML",
		descBullets: [
			"Canidate for the BS/MS program",
		],
		extracurriculars: "Extracurriculars",
		extraBullets: [
			"UCSB Theta Tau : Professional Engineering Fraternity",
		],
	},
	{
		schoolName: "University of California Santa Barbara",
		subHeader: "Bachelor of Science in Computer Engineering",
		duration: "September 2018 - June 2022",
		desc: "GPA : 3.82 , Major GPA : 3.81 , Upper Division GPA : 3.85",
		awards: "Awards",
		descBullets: [
			"UCSB College Of Engineering Honors Program : September 2019 - Present",
			"UCSB Dean's Honor Roll x7 times",
		],
		extracurriculars: "Extracurriculars",
		extraBullets: [
			"UCSB Theta Tau : Professional Engineering Fraternity",
			"CodersSB",
			"UCSB Robotics",
			"IEEE : Institude of Electrical and Electronics Engineers",
			"UCSB NSU : Nikkei Student Union",
			"UCSB JSA : Japanese Student Association",
		],
		relevantCoursework : "Relevant Coursework",
		courses: [
			"Data Structures and Algorithms I",
			"Data Structures and Algorithms II",
			"Advanced Applications Programming",
			"Artificial Intelligence",
			"Artificial Intelligence in Design and Test Automation",
			"Machine Learning",
			"Machine Learning in Design and Test Automation",
		]
	},
	{
		schoolName: "Tokyo Institute of Technology",
		subHeader: "TKT Campus Asia Study Abroad Program",
		duration: "June 2019 - July 2019",
		desc: "Selected as one of 25 participants",
		descBullets: [
			"Recipient of the Tokyo Tech Scholarship",
			"Interacted with undergrad and grad students from Korea, China, and Germany",
			"Learned about how engineering is applied to Japanese society through various disciplines"
		],
	},
	{
		schoolName: "Udemy",
		subHeader: "Online Course Provider",
		relevantCoursework : "Relevant Coursework",
		courses: [
			"The Complete Web Developer in 2021 Zero to Mastery",
			"Master the Coding Interview : Data Structures and Algorithms",
		]
	},
];

export const experience = [
	{
		role: "AI/ML Intern",
		company: "Northrop Grumman",
		companylogo: northroplogo,
		date: "March 2021 – Present",
		desc: "El Segundo, California, USA",
		descBullets: [
			"Obtaining a Top-Secret Level Security Clearance",
			"Implementing a Reinforcement Learning algorithm in Python using TensorFlow's convolutional neural network for multi vehicle air surveillance",
			"Implementing passive and bistatic sensors to provide data for the autonomous vehicle in C++/JS",
			"Presenting in a company panel called Gen2Gen where I offered both career and academic advice towards interns and suggestions for improving an intern’s experience to employees"
		],
	},
	{
		role: "Software Engineering Intern",
		company: "Northrop Grumman",
		companylogo: northroplogo,
		date: "June 2020 - October 2020",
		desc: "El Segundo, California, USA",
		descBullets: [
			"Obtained a Secret Level Security Clearance",
			"Implemented a Doxygen handler and a logical SLOC counter for the DevOps Dashboard in Javascript/HTML/CSS which results in an increased accessibility of information during meetings",
			"Made improvements to a timeline application’s GUI by creating a new GUI application in Qt Widgets which will potentially result in the revamping of all other GUIs implemented in Java",
		],
	},
	{
		role: "IT Intern",
		company: "Caterpillar Japan",
		companylogo: catlogo,
		date: "September 2019",
		desc: "Uozumichou, Akashi, Japan",
		descBullets: [
			"Handled customer issues by debugging algorithms through the Oracle SQL Developer and provided a detailed explanation in Japanese",
		],
	},
	{
		role: "Cyber Security and AI/ML Intern",
		company: "Macnica Networks Japan",
		companylogo: macnicalogo,
		date: "August 2019",
		desc: "Shinyokohama, Yokohama, Japan	",
		descBullets: [
			"Dealt with customers by relaying the necessary procedures for navigating the Splunk interface",
			"Taught AI in the H2O Driverless interface through data sets imported from Kaggle"
		],
	},
];

export const projects = [
	{
		name: "Face Detection Web App",
		desc: "August 2021",
		descBullets: [
			"Implemented a full stack web app, using a React (JavaScript) front end and a Node (JavaScript) back end, where users can input image urls to detect a face within the image via the Clarifai API.",
			"Added a user log in and register functionality to keep track of the number of detected faces each user has detected with the web app.",
			"Stored user information securely by hashing the passwords with Bcrypt and by having a login and user PostgreSQL database.",
		],
		link: "https://facial-recognition-api-0.herokuapp.com/",
		github: "https://github.com/koki-narimoto/face_detect_backEnd",
		github2: "https://github.com/koki-narimoto/face_detect_frontEnd",
	},
	{
		name: "SlackBot Web App",
		desc: "December 2020",
		descBullets: [
			"Implemented a slack user database manager by utilizing a React ( JavaScript ) front end and a SpringBoot ( Java ) backend where each slack user can be created, deleted, and edited provided that an admin, which is determined from Google Auth-0, is logged into the website.",
			"Implemented an upload csv functionality which parses the inputted csv file of slack users and stores every slack user’s information on the SQL database of slack users and displays the information on the website.",
			"Led a team of 5 members on a legacy code project by utilizing Git to resolve merge conflicts between both each other and other teams, to review pull requests before merging, and to manage and delegate tasks based on the Kanban Board.",
			"Debugged all the edge cases of the project such that the code coverage was 100% for both the backend and frontend.",
			"Presented a live-demo of the project, which was hosted on Heroku, in front of the class and earned extra credit for our contributions.",

		],
		link: "https://mapache-search-f20-7pm-b.herokuapp.com/",
		github: "https://github.com/ucsb-cs156-s21/proj-mapache-search",
	},
	{
		name: "Arcade System",
		desc: "March 2021",
		descBullets:[
			"Created an arcade system which utilizes two ultrasonic sensors to detect if there are one or two players present in front of the arcade system via PWM, a temperature sensor to detect the user’s temperature via I2C, an on-board joystick to move around the tic-tac-toe board via EXTI interrupts, and all of this information is communicated to the computer via UART communication.",
			"Programmed the arcade system games in C, which includes the games Tic Tac Toe, Blackjack, and Trivia, and includes the option of playing against AI if one player is present and allows player vs player if two players are detected.",

		],
		link: "https://sites.google.com/view/153b-proj-a-k/home",
		github: "https://github.com/koki-narimoto/arcade_system",
	},
	{
		name: "Reinforcement Learning Pacman",
		desc: "March 2021",
		descBullets:[
			"Programmed expectimax, minimax, and alpha-beta pruning reinforcement learning algorithms in Python with various reward factors to improve the Pacman's chances of successfully navigating the maze while avoiding the ghosts.",
		],
		github: "https://github.com/koki-narimoto/pacman",
	},
	{
		name: "Anatano Kakehashi",
		desc: "June 2020 - Present",
		descBullets:[
			"Founded Anatano Kakehashi, a remote 1:1 tutoring service primarily for people in Japan, to provide students the opportunity to receive tutoring at an affordable price.",
			"Managing seven bilingual tutors to teach over 20 people of all ages via zoom.",
			"Implementing a website in Japanese using HTML/CSS/JavaScript and hosting the website through GitHub pages.",
			"Utilizing Line for Business to communicate with our students and allows students to easily schedule lessons through Calendly.",
		],
		github: "https://anatanokakehashi.github.io",
	},
	{
		name: "T-Bas",
		desc: "March 2021",
		descBullets:[
			"Implemented and hosted a website in Japanese using HTML / CSS / JavaScript / Git for a tutoring service in Japan.",
		],
		github: "https://t-bas.github.io/",
	},
];

export const interests = [
	{
		name: "Basketball",
		desc: "First dribbling at the age of 7, the sport of basketball has played a huge role in my life. Not only has basketball taught me various important lessons, such as learning how to work in a team, but the sport has also served as a way to build relationships with people. Pre-Covid, you can often find my friends and I playing 5 on 5 at the UCSB basketball courts.",
	},
	{
		name: "Traveling",
		desc: "During the summer following my first year at UCSB, I had the opportunity to study abroad in Japan. This experience exposed me to different cultures and sights I have never seen before. Since then, I have fallen in love with traveling and have travelled to various locations with family and friends.",
	},
	// {
	// 	name: "Anime",
	// 	desc: "",
	// },
	// {
	// 	name: "Basketball",
	// 	desc: "",
	// },
];

export const feedbacks = [
	{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];
