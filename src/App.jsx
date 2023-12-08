
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react'
import Dashboard from './Dashboard'
import FSD from './FSD'
import DataScience from './DataScience'
import CyberSecurity from './CyberSecurity'
import Career from './Career'

function App() {
  let data = [
    {
      id: 'cs',
      title: 'The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications! ',
      description: 'There is something fascinating about a lone hacker in black hoodies using a single system '
    },
    {
      id: 'c',
      title: 'Top 5 IT Jobs for Economics Students ',
      description: 'In today’s digital age, the intersection of economics and technology offers exciting career opportunities for '
    },
    {
      id: 'ds',
      title: 'Top 10 High Paying Non-Coding Jobs in Data Science in 2023 ',
      description: 'Are you someone whos not interested in coding, but wants to get placed in tech '
    },
    {
      id: 'ds',
      title: 'Impact of Certification Programs on Hiring Data Scientists ',
      description: 'Data scientists are the creators behind transforming the raw data into edible data insights. These '
    },
    {
      id: 'c',
      title: 'Top IT Jobs for Commerce Students: A Lucrative Career Path ',
      description: 'With the rapid advancement of technology, the demand for IT professionals has soared in recent '
    },
    {
      id: 'c',
      title: 'Automation Test Engineer Resume: 10 Important Things To Consider ',
      description: 'The world is moving towards automating the testing of products in order to increase work '
    },
    {
      id: 'fsd',
      title: ' Top Ways to Assess Soft Skills in Full Stack Developers in 2023 ',
      description: 'When you hiring a full-stack developer, what are the most important things you look for?  '
  
    },
    {
      id: 'fsd',
      title: '  Top Differences: Full Stack Developer vs Software Engineer 2023',
      description: 'A Full Stack Developer is a tech all-rounder. They work on both the front and  '
  
    },
    {
      id: 'fsd',
      title: 'Horizontal vs Vertical Scaling for Efficient System Design  ',
      description: 'In the world of system design, envision a digital skyscraper  a multifaceted structure built  '
  
    },
    {
      id: 'fsd',
      title: 'Best Books to Learn Full-Stack Development  ',
      description: 'Are you interested in becoming a full-stack developer but not sure where to start? In  '
  
    },
    {
      id: 'fsd',
      title: 'Top 10 Product-Based Companies for Full-Stack Developers [2023]  ',
      description: '7 Best Full-Stack Development Online Courses [2023]  '
  
    },
    {
      id: 'fsd',
      title: 'The Top 10 Tools Every Full-Stack Developer Should Master in 2023  ',
      description: ' As a full-stack developer, having the right set of tools is crucial for your success.  '
  
    },
    {
      id: 'fsd',
      title: 'The Ultimate Guide to Real-World Full-Stack Development Applications  ',
      description: 'Full-stack development has become increasingly popular in recent years, with companies seeking professionals who can  '
  
    },
    {
      id: 'fsd',
      title: 'Best Ways to Learn Full Stack Development in 2023  ',
      description: 'Full stack development is and will be a promising and in-demand career in the upcoming  '
  
    },
    {
      id: 'fsd',
      title: 'Salary of a Full Stack Developer in India in 2023  ',
      description: 'Are you passionate about technology and fascinated by the world of software development? If so,  '
  
    },
    {
      id: 'ds',
      title: 'Top Product-Based Companies for Data Science Freshers ',
      description: 'In todays data-driven world, data science has emerged as a crucial field, with companies harnessing '
    },{
      id: 'ds',
      title: 'What is the Difference between Data Science and Data Engineering? ',
      description: 'India has been making some serious waves in the world of data. Just like the '
    },{
      id: 'ds',
      title: 'Top 10 Data Science Tools in 2023 ',
      description: 'Data Science is an in-demand profession and will continue growing in the coming years. From '
    },{
      id: 'ds',
      title: 'Best Data Science Books to Learn 2023 ',
      description: 'Today, were going to talk about something really cool: data science. It’s all about using '
    },{
      id: 'ds',
      title: 'Top Product-Based Companies for Data Scientists in 2023 ',
      description: 'We all know about the kind of buzz surrounding data science right now, it is '
    },{
      id: 'ds',
      title: 'Useful Python Libraries & Tools for Data Science Beginners ',
      description: 'In a world filled with information, knowing how to understand and use data is super '
    },{
      id: 'ds',
      title: 'Extraordinary Data Science Projects for Beginners As Well as Veterans ',
      description: 'As the demand for data and the people that can conquer it, i.e. Data Scientists '
    },
    {
      id: 'cs',
      title: ' Non-Coding Jobs in Cybersecurity: A Comprehensive Guide',
      description: 'In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills '
    }, {
      id: 'cs',
      title: 'What Is Hacking? Types of Hacking & More ',
      description: 'Have you ever wondered what hacking is all about? It’s a big deal in today’s '
    },
    {
      id: 'cs',
      title: 'Cybersecurity Vs Ethical Hacking: Top 10 Differences ',
      description: 'Cybersecurity & Ethical hacking and have been key in making sure that your data online '
    },
    {
      id: 'cs',
      title: 'What is Cybersecurity? Importance and its uses & the growing challenges in 2023! ',
      description: 'Look around today, you will witness that we are more reliant on technology and devices '
    },
    {
      id: 'cs',
      title: '8 Different Types of Cybersecurity and Threats Involved ',
      description: 'Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from '
    },
    {
      id: 'cs',
      title: 'Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity? ',
      description: 'Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well, '
    },
    {
      id: 'cs',
      title: 'Top 7 Cyber Security Attacks in Real Life ',
      description: 'Cyber security attacks are the type of actions that are designed to destroy, steal, modify, '
    },
    {
      id: 'cs',
      title: 'Cybersecurity vs Artificial Intelligence | Better Career ',
      description: 'Cybersecurity is an exponentially growing industry that is evolving to protect individuals & organizations from '
    },
    
    {
      id: 'c',
      title: 'Professional Civil Engineer Resume: A Guide To Attract Employers in 2023 ',
      description: 'The world is moving towards modernization leading to an increase in the popularity of civil '
    },
    {
      id: 'c',
      title: '9 Best Product-Based Companies for Project Management ',
      description: 'In today’s tech-driven world, the demand for project managers is higher than before. The workload '
    },
    {
      id: 'c',
      title: 'Top 5 Product-Based Companies That Don’t Require Coding ',
      description: 'Every one of us wants to work in top product-based companies, Right? But, Not everyone '
    },
    {
      id: 'c',
      title: 'Machine Learning Engineer Resume Guide: 11 Important Things To Include! ',
      description: 'The current technological era is full of competition and those who have profound skillset are '
    },
    {
      id: 'c',
      title: 'Mechanical Engineering Resume: 9 Important Things To Look Out For ',
      description: 'With the development of technology, most of us started forgetting about mechanical engineering which pioneered '
    },
    {
      id: 'c',
      title: 'Blockchain Developer Resume Guide: 11 Hot Tips to Make It Professional ',
      description: 'What if I say that blockchain is going to be the next big thing? And '
    },
   

  ]

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element= {<Dashboard data = {data} />} />
          <Route exact path='/FSD' element= {<FSD data = {data}/>}></Route>
          <Route exact path='/DataScience' element= {<DataScience data = {data}/>} />
          <Route exact path='/CyberSecurity' element= {<CyberSecurity data = {data}/>} />
          <Route exact path='/Career' element= {<Career data = {data}/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
