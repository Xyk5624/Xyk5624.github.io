import imgURL1 from '../images/project1.png'
import imgURL2 from '../images/project2.png'
import imgURL3 from '../images/project3.jpg'
import imgURL4 from '../images/project4.png'
import imgURL5 from '../images/project5.gif'

export const projects = [
    {
        "image_url": imgURL1,
        "title": "Course Teammate Matching Website",
        "github": "https://github.com/Xyk5624/6998-final",
        "course": "Cloud Computing and Big Data",
        "details": [
            "Built a full-stack web application based on Amazon Web Service in a group of four.",
            "Developed front-end web pages with NodeJS and Vue and deployed it on an AWS S3 bucket.",
            "Established back-end APIs using AWS API Gateway and Lambda functions as well as implemented data storage with DynamoDB and Elasticsearch.",
            "Mocked two thousand fake students’ information including avatars and skills using Python and AI face."
        ]
    },
    {
        "image_url": imgURL2,
        "title": "University Message Center System",
        "github": "https://github.com/Xyk5624/lion-message",
        "course": "Advanced Software Engineering",
        "details": [
            "Created a full-stack web application with Ruby on Rails in a group of four and deployed it on Heroku.",
            "Made front-end web pages using HTML, JavaScript and polished them with CSS and Bootstrap.",
            "Developed Restful APIs on base of Rails Model-View-Controller mode and Convention Over Configuration principle.",
            "Wrote unit tests with Rails Rspec and user story tests with Cucumber, covering 100% codes."
        ]
    },
    {
        "image_url": imgURL3,
        "title": "Employee Communication System",
        "github": "https://github.com/Xyk5624/chatroom-fileshare",
        "course": "Intern project",
        "details": [
            "Built PC and mobile front-end with NodeJS and Vue, server back-end with Express based on NodeJS and databases with Microsoft SQL Server.",
            "Implemented instant chatting with socket which enables the server actively to inform the browser of changes.",
            "Used lazy loading to fetch chats in order to guarantee the page loading speed.",
            "Established function of creating group that allows users to share files only visible to group members and to chat in group."
        ]
    },
    {
        "image_url": imgURL4,
        "title": "Second Hand Goods Trading Platform",
        "github": "https://github.com/Xyk5624/4111_project",
        "course": "Introduction to Databases",
        "details": [
            "Built a full-stack web application based on Vue and Python Flask in a group of two.",
            "Used PostgreSQL as database.",
            "Won the 'project contest' in the course.(Four winners in total)"
        ]
    },
    {
        "image_url": imgURL5,
        "title": "Covid-19 Twitter Stream Processing",
        "github": "",
        "course": "Large-Scale Stream Processing",
        "details": [
            "Pulled current Covid-19 related tweets from Twitter Stream API and Used Spark to get hot hashtags and emotion classification.",
            "Downloaded JHU daily Covid-19 report dataset to support US state Covid-19 confirmed case heat map.",
            "Created a web app with Vue and Python Flask to demostrate the processed data.",
            "Used JS packages D3, leaflet, vue3-chart to generate word cloud, bar chart, pie chart and heat map."
        ]
    }
]