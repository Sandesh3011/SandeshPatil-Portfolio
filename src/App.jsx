import { useState, useRef, useEffect } from 'react';

import './App.css'

function Background(){
  return(
    <>
    <section className='section background' id='B'>
      <div className='section_title'>BACKGROUND</div>
      <div className="section_content">
			<p>
				I'm currently pursuing Bachelor's degree[B.Tech] in Information Technology stream from 
				<span><a className="study-link" href="https://www.msbecl.ac.in/" target="_blank" > M S Bidve Engineering, Latur</a></span>, affiliated with  
				 <span><a className="study-link" href="https://www.msbecl.ac.in/" target="_blank">Dr. Babasaheb Ambedkar Technological University</a></span>. 
				While earning my degree, I am gaining extensive knowledge in software development, data structures, algorithms, and various programming languages. 
				Additionally, I am involved in several technical projects and internships to enhance my practical skills and industry experience.
			</p>
			<p>
				As a developer, I enjoy bridging the gap between functionality and design. My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences. In addition, I am highly responsive to client needs and also committed to helping people realize their vision.
			</p>

			<a className="status" href="/images/SandeshPatilResume.pdf" target="_blank"> 
				<div className="status_light"> 
					<div className="status_light_ring"></div> 
					<div className="status_light_led"></div> 
				</div> 
				<div className="status_message">
					Interested in working together? Reach out!
				</div> 
			</a>
		</div>
    </section>
    </>
  )
}
function Skills(){
  return(
    <>
    <section className='section skills' id='s'>
      <div className="section_title">skills</div>
      <div className="section_content">
        <div className="skills_type">
        <div className="skills_category">
        <div className="skills_category_lable" style={{ whiteSpace: 'nowrap' }}>
       Core Competencies
        </div>
        <ul className="skills_category_item">Technical Skills</ul>
        <ul className="skills_category_item">problen solving</ul>
		<ul className="skills_category_item">Critical Thinking</ul>
        <ul className="skills_category_item">Collaboration</ul>
        <ul className="skills_category_item">Adaptability & Continuous Learning</ul>
        </div>
        <div className="skills_category">
          <div className="skills_category_lable">Language</div>
          <ul className="skills_category_item">java</ul>
		  <ul className="skills_category_item">C and C++</ul>
          <ul className="skills_category_item">javascript</ul>
          <ul className="skills_category_item">html5</ul>
          <ul className="skills_category_item">css</ul>
		  <ul className="skills_category_item">React Js</ul>
          <ul className="skills_category_item">sql</ul>
        </div>
      <div className="skills_category">
        <div className="skills_category_lable">
          framework
        </div>
        <ul className="skills_category_item">Tailwand</ul>
        <ul className="skills_category_item">bootstrap</ul>
        <ul className="skills_category_item">Jquery</ul>
        <ul className="skills_category_item">api</ul>
      </div>
      <div className="skills_category">
        <div className="skills_category_lable">
          Tools
        </div>
		<ul className="skills_category_item">DBMS</ul>
		<ul className="skills_category_item">Visual Studio Code</ul>
        <ul className="skills_category_item">MYSQL</ul>
        <ul className="skills_category_item">GIT & GITHUB</ul>
        <ul className="skills_category_item">API</ul>
        </div>
        
      </div>
      </div>
    </section>
  
    </>
  )
}
function Projects()
{
		// Create a ref to hold both video elements
		const videoRefs = useRef([]);
	
		useEffect(() => {
			// Loop through each video reference to set autoplay and playback rate
			videoRefs.current.forEach((video) => 
				{
				if (video) 
					{
					video.play().catch(error => {
						console.log("Autoplay was prevented:", error);
					});
					video.playbackRate = 2.5; // Set playback speed to 2x
				}
			});
		}, []);
	
  return(
    <>
    	<section className="section featured-projects" id='p'> 
		<div className="section_title">Recent Projects</div> 
			<div className="section_content"> 
				<div className="project">
					<figure className="project_pic"> 
						 <a href="https://portfolio-generator-41a5a.firebaseapp.com/" target="_blank"> 
							{/* <img src="./images/lets_code.png" alt="image" /> */}
							<video 
							ref={(el) => (videoRefs.current[0] = el)}
							src="/images/PortfolioGenerator.mp4" autoplay loop muted playsInline preload="auto" controls >		
							</video>
							
						</a> 
						
					</figure> 
				</div><br />
				<details open>
					<summary>Portfolio Generator</summary>
					<div className="project_name">
							<a href="https://portfolio-generator-41a5a.firebaseapp.com/" target="_blank">  </a>
					</div>
					<br/>
					<div className = "featured-projects-content"> 
						
						<p>"Developed a React.js web app that generates personalized portfolios based on user input. Integrated Firebase to store user data, assign unique IDs, and provide shareable portfolio URLs."</p>
						
					</div>
					<div className="project_used">
							{/* <span className="project_used_item">C#.net</span> */}
							{/* <span className="project_used_item">Sql</span> */}
							{/* <span className="project_used_item">SSMS</span> */}
							<span className="project_used_item">REACT JS</span>
							<span className="project_used_item">CSS</span>  
							<span className="project_used_item">TAILWAND CSS</span>
							<span className="project_used_item">FIREBASE</span>
					</div> 
					<div className="project_links"> 
							<a href="https://portfolio-generator-41a5a.firebaseapp.com/" target="_blank" className='project_used_item'>
								{/* <img src="images/" alt="image" /> */}
								Visit Site
							</a>
							{/* <a href="#link" target="_blank">
								<img src="images/" alt="image" />
							</a> */}
					</div>
				</details>
			</div>
	</section>
  <section class="section other-projects">
		<div class="section_title">Other Projects</div>
			<div class="section_content">
			<div className="project">
					<figure className="project_pic"> 
					{/* <figcaption>Snake Game Project</figcaption> */}
						 <a href="https://sandesh3011.github.io/Snake-Game-Project/" target="_blank"> 
							{/* <img src="./images/lets_code.png" alt="image" /> */}
							<video 
							ref={(el) => (videoRefs.current[1] = el)}
							src="/images/snakeGameVid.mp4" autoplay loop muted playsInline preload="auto" controls >
								
							</video>
							
						</a> 
						
					</figure> 
				</div><br />
				<details open>
					<summary>Snake Game</summary>
					<div className="project_name">
							<a href="https://sandesh3011.github.io/Snake-Game-Project/" target="_blank">  </a>
					</div>
					<br/>
					<div className = "featured-projects-content"> 
						
						<p>"Developed a responsive Snake Game using HTML, CSS, and JavaScript. The project features smooth animations, score tracking, and optimized performance for an engaging user experience across all devices."</p>
						
					</div>
					<div className="project_used">
							<span className="project_used_item">HTML</span>
							<span className="project_used_item">CSS</span>  
							<span className="project_used_item">Javascript</span>
					</div> 
					<div className="project_links"> 
							<a href="https://sandesh3011.github.io/Snake-Game-Project/" target="_blank" className='project_used_item'>
								{/* <img src="images/" alt="image" /> */}
								Visit Site
							</a>
					</div>
				</details>
				<br />
			<div className="project">
					<figure className="project_pic"> 
					
						 <a href="https://github.com/Sandesh3011/Virtual-Document-Locked" target="_blank"> 
							
							<video 
							ref={(el) => (videoRefs.current[2] = el)}
							src="/images/vdocs.mp4" autoplay loop muted playsInline preload="auto" controls>
								
							</video>
							
						</a> 
						
					</figure> 
				</div>
				<details open>
					<summary>Virtual Document Locker</summary>
					<div class="project"> 
						<br />
						<p>"Developed a web application for uploading and managing secure and unsecured PDF files. Users can set profile-specific passwords during registration to protect access to secure files, which are only viewable, downloadable, or deletable with this password. Unsecured files can be accessed freely. Additionally, users can change both account and profile passwords for enhanced security control."</p> 
						<div class="project_used"> 
							<span class="project_used_item">ASP.NET (C#)</span> 
							<span class="project_used_item">SQl</span>
							<span class="project_used_item">SSMS</span>
							<span class="project_used_item">Java (backend connectivity)</span> 
							<span class="project_used_item">Visual Studio</span>

						</div> 
					
						<div className="project_links"> 
							<a href="https://github.com/Sandesh3011/Virtual-Document-Locked" target="_blank" className='project_used_item'>
								{/* <img src="images/" alt="image" /> */}
								Visit Site
							</a>
					</div>
					</div>
					
				</details>
			</div>
	</section>
    </>
  )
}
function Certificates() {
	const certificates = [
		{
			src: '/images/infosys-java-foundation-Certification.jpg',
			text: 'Infosys Java Foundation Certification',
			link: '#link1',
		},
		{
			src: '/images/Infosys-java-certificate.jpg',
			text: 'Infosys Java-Course Certification',
			link: '#link2',
		},
		{
			src: '/images/Infosys-Data Structures and Algorithms using Java-certificate.jpg',
			text: 'Infosys-Data Structures & Algorithms using Java-certificate',
			link: '#link3',
		},
		{
			src: '/images/J.P. Morgan__completion_certificate.jpg',
			text: '"JPMorgan Software Engineering Simulation -Forage-Certificate',
			link: '#link3',
		},

		
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
			);
		}, 3000); // Change every 3 seconds
		return () => clearInterval(interval);
	}, [certificates.length]);

	return (
		<section className="section featured-projects" id="C">
			<div className="section_title">Certificates</div>
			<div className="section_content">
			<div className="project salzakshipment">
				<div className="certificate_wrapper fade-in">
					<a href={certificates[currentIndex].link} target="_blank" rel="noopener noreferrer">
						<img
							src={certificates[currentIndex].src}
							alt="certificate"
							className="certificate_image"
						/>
					</a>
					<div className="certificate_text">
						{certificates[currentIndex].text}
					</div>
					</div>
				</div>
			</div>
		</section>
	);
}
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling effect
    });
  }
  return(
    <>
    <footer className="footer">
	 	<div className="footer_copyright"> 
	 		<div className="top"> 
	 			<span style={{ whiteSpace: 'nowrap' }}>
	 				Designed &amp; Developed by
				</span>
			</div> 
			<div className="bottom"> 
				<span>
					Sandesh Patil
				</span> 
				<img className="emoji" src="/images/rockon.png" alt="emoji" /> 
				<span>
					01/01/2024
				</span>
			</div> 
		</div> 
		<div className="footer_links"> 
			<a href="mailto:sandeshp9011@gmail.com" target="_blank" title="email"> 
				{/* <span className="text">
					email
				</span>  */}
				<img src="/images/email.svg" alt="email" />
			</a>
			<a href="https://www.linkedin.com/in/sandesh-patil-83691a294/" target="_blank" title="linkedin"> 
				{/* <span className="text">
					linkedin
				</span> */}
				<img src="/images/linkedin.svg" alt="linkedin" id='lin'/>
			</a>
			<a href="https://github.com/Sandesh3011" target="_blank" title="GitHub"> 
				{/* <span className="text">
					instagram
				</span>  */}
				<img src="/images/github-mark.svg" alt="GitHub"  id='git'/>
			</a>
		</div>
 	</footer>
	<button id="top-button" style={{ display: 'inline-block' }} onClick={scrollToTop}>  
		<img src="/images/finger-up-emoji-clipart-21.png" alt="" /> 
	</button>
    </>
  )
}
function App() {
  // const [isnight,setNight] = useState(false);
  // const [isDay,setDay]=useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isnight, setNight] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);


 
   useEffect(() => {
  
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    
  }, []);
   // Toggle visibility on clicking project name
   const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const handleToggle = () => {
    setNight(prev => !prev); // Toggle the night state
};
 
  return (
    <div  className={isnight ? 'night-mode' : 'day-mode'} id="main">

<nav className="bg-white border-gray-200 dark:bg-gray-900 " >
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://www.linkedin.com/in/sandesh-patil-83691a294/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/images/SSP.jpg" className="h-10  rounded-md" alt="photo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sandesh Patil</span>
    </a>
    <button   ref={buttonRef} onClick={() => setIsMenuOpen(!isMenuOpen)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div ref={menuRef}  className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">

      <ul className="font-medium text-lg flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded md:bg-transparent  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#s" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Skills</a>
        </li>
        <li>
          <a href="#p" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
        </li>
        <li>
          <a href="#C" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Certificates</a>
        </li>
        <li>
          <a href="mailto:sandeshp9011@gmail.com" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
        <li>
          <a href="#B" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
   
        <div className="switch-wrapper flex items-center ">
      <div className="sun"></div>
      <div className="toggle-wrapper">
        <input type="checkbox" id="switch" onChange={handleToggle}/>
        <label htmlFor="switch" id="switch1">Toggle</label>
      </div>
      <div className="moon"></div>
    </div>
  </li>
      </ul>
     
    </div>
  </div>
</nav>
   <header className='intro'>
   <h1 className="intro_hello">
			Hello!
			<span  id="wave" className="emoji wave-hand animated "></span>
		</h1>
    <h2 className="intro_tagline">
      I'm <div className='myname'>sandesh patil</div> a design-minded<br /><br /><br />
       <div className="mytext">
				<div className="content">
					<div className=" container">
						<ul className="list">
							{/* <li className="item"> Front End Developer.</li>
							<li className="item">Back End Developer. </li> */}
							<li className="item">Full Stack Developer. </li>
              <li className="item">Android Developer. </li>
              <li className='item'>Java Developer.</li>
						</ul>
					</div><br/>
				</div>
			</div>
      <span>I focused on  developing and designing products for the web, from simple landing pages to full-fledged web apps.</span>
			<span id="emojiwavehand" className="emoji technologist"></span>
       
       </h2>


   <h3 className="intro_contact">
			<span>Get in touch : </span>
			<span className="emoji pointer"></span>
			<span id="emailme">
				<a href="mailto:sandeshp9011@gmail.com" target="_blank" className="highlight-link">sandeshp9011@gmail.com</a>
			</span>
		</h3>
	</header>
 
  <Background />
  <Skills />
  <Projects />
  <Certificates />
    <Footer />
	
    </div>
  )
}
export default App



