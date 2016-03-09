
var bio = {
    "name": "YOUR NAME",
    "role": "YOUR OCCUPATION",
    // Fill in the skills section with the skills you currently have.
    // I've included some place holders.
    "skills": [{
        "value": 40,
        "color": "#A3A3CC",
        "highlight": "#FF5A5E",
        "label": "SKILL 1"
    }, {
        "value": 30,
        "color": "#33CCFF",
        "highlight": "#FF5A5E",
        "label": "SKILL 2"
    }, {
        "value": 30,
        "color": "#FF6600",
        "highlight": "#FF5A5E",
        "label": "SKILL 3"
    },{
        "value": 30,
        "color": "#FF6600",
        "highlight": "#FF5A5E",
        "label": "SKILL 4"
    }, {
        "value": 30,
        "color": "#FF6600",
        "highlight": "#FF5A5E",
        "label": "SKILL 5"
    },],
    "contacts": {
        "mobile": "YOUR NUMBER",
        "email": "YOU@YOUREMAIL.COM",
        "github": "www.github.com/YOUR-USERNAME",
        "location": "YOUR LOCATION"
    },
    "bioPic": "http://www.quotespinky.com/wp-content/uploads/2016/01/mr-bean-funny-whatsapp-profile-photo-cartoon.png",
    // change this welcome message to say anything you'd like
    "welcomeMsg": "WELCOME MESSAGE"
};

var education = {
    "schools": [{
        "name": "YOUR FIRST SCHOOL",
        "degree": "YOUR DEGREE",
        "location": "New York, NY",
        "dates": "GRAD DATE"
    }, {
        "name": "ANOTHER SCHOOL",
        "degree": "YOUR DEGREE",
        "location": "Mountain View, CA",
        "dates": "GRAD DATE"
    }],
    "onlineCourses": [{
        "name": "Udacity",
        "title": "Javascript Basics",
        "dates": "November 2014",
        "url": "https://www.udacity.com/course/ud804",
        "class": "udacity"
    }, {
        "name": "Udacity",
        "title": "Intro to Computer Science",
        "dates": "November 2014",
        "url": "https://www.udacity.com/course/cs101",
        "class": "udacity"

    }, {
        "name": "Codecademy",
        "title": "Python",
        "dates": "September 2014",
        "url": "http://www.codecademy.com/en/tracks/python",
        "class": "codecademy"
    }]
};


// You can add more work experience JSON objects, I would recommend alternating the class attribute from left to right

var work = {
    "jobs": [{
        "employer": "EMPLOYER 1",
        "title": "JOB TITLE",
        "dates": "January 2014 - Present",
        "description": "JOB DESCRIPTION",
        "url": "COMPANY URL",
        "class": "left"
    }, {
        "employer": "EMPLOYER 2",
        "title": "JOB TITLE",
        "dates": "November 2014 - Present",
        "description": "JOB DESCRIPTION",
        "url": "COMPANY URL",
        "class": "right"
    }]
};

var myProjects = {
    "projects": [{
        "title": "Interactive Resume",
        "dates": "DATE COMPLETED",
        "description": "PROJECT DESCRIPTION",
        "class": "left",
        "pic": "https://media.licdn.com/mpr/mpr/p/4/005/05b/0ad/17ef3d8.jpg"
    }, {
        "title": "PROJECT 2",
        "dates": "DATE COMPLETED",
        "description": "PROJECT DESCRIPTION",
        "url": "LINK TO PROJECT",
        "class": "right",
        "pic": "https://pbs.twimg.com/profile_images/562466745340817408/_nIu8KHX.jpeg"
    }]
};


/*
 * The following functions take the information in this file and populate the html document.
*/

work.display = function() {

    var name = bio.name;
    var formattedName = HTMLheaderName.replace("%data%", name);
    var role = bio.role;
    var formattedRole = HTMLheaderRole.replace("%data%", role);
    var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
    $("#header").prepend(formattedName + formattedRole + formattedWelcomeMsg);
    $("#letsConnect").prepend(formattedPic);

    var mobile = bio.contacts.mobile;
    var formattedMobile = HTMLmobile.replace("%data%", mobile);
    $("#footerContacts").append(formattedMobile);

    var email = bio.contacts.email;
    var formattedEmail = HTMLemail.replace("%data%", email);
    $("#footerContacts").append(formattedEmail);

    var github = bio.contacts.github;
    var formattedGithub = HTMLgithub.replace("%data%", github);
    $("#footerContacts").append(formattedGithub);

    var _location = bio.contacts.location;
    var formattedLocation = HTMLlocation.replace("%data%", _location);
    $("#footerContacts").append(formattedLocation);


    var skills;
    $("#skillsChart").append(HTMLskillsStart);
    for (skill in bio.skills) {

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill].label);
        $(".skills-entry:last").append(formattedSkill);
    };

    var jobs;
    for (jobs in work.jobs) {
        var formattedWorkClass = HTMLworkStart.replace('%data%', work.jobs[jobs].class)
        $("#workExperience").append(formattedWorkClass);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", "<a href=" + work.jobs[jobs].url + " target='_blank'>" + work.jobs[jobs].employer + "</a>");

        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jobs].title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[jobs].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[jobs].description);
        $(".work-entry:last").append(formattedDescription);
    };
};

work.display();

myProjects.display = function() {
    for (project in myProjects.projects) {
        var formattedProjectClass = HTMLprojectStart.replace("%data%", myProjects.projects[project].class);
        var formattedPic = HTMLprojectPic.replace("%data%", myProjects.projects[project].pic);
        $("#projects").append(formattedProjectClass);

        var formattedTitle = HTMLprojectTitle.replace("%data%", myProjects.projects[project].title);
        //$(".project-entry:last").append(formattedPic + formattedTitle + formattedDates + formattedDescription);

        var formattedDates = HTMLprojectDates.replace("%data%", myProjects.projects[project].dates);
        //$(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", myProjects.projects[project].description);
        //$(".project-entry:last").append(formattedDescription);
        $(".project-entry:last").append(formattedPic + formattedTitle + formattedDates + formattedDescription);
    }
};

myProjects.display();

education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedName + formattedDegree + formattedDates);
    }
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLonlineStart);
    for (course in education.onlineCourses) {

        var formattedName = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].name);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var formattedTitle = HTMLonlineTitle.replace("%data%", "<a href=" + education.onlineCourses[course].url + ">" + education.onlineCourses[course].title + "</a>");
        $(".online-entry:last").append(formattedName + formattedDates + formattedTitle);
    }
};

education.display();


$("#mapDiv").append(googleMap);

//Logs where you have clicked on the page and displays in the console.
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

// Displays the location of your jobs on Google Maps.
function locationizer(work_obj) {
    var locationArray = [];

    for (job in work_obj.jobs) {
        var newlocation = work_obj.jobs[job].location;
        locationArray.push(newlocation);
    }
    return locationArray;
}