/*
This is empty on purpose! Your code to build the resume will go here.
*/

 // var awesomeThoughts = "I am zen and I'm awesome";
 // var funThoughts = awesomeThoughts.replace("awesome","fun");
 // $("#main").append(funThoughts);

 var bio = {
 	"name":"Zen Sun",
 	"role":"Web Dev",
 	"welcomeMessage":"Welcome to Zen's resume",
 	"contacts" : {
    "email":"zennard [[at]] gmail.com",
    "github":"https://github.com/aerozen3",
    "location": "Mountain View, CA"
  },
  "skills" : ["Java","Javascript","Project Management","Product Management","People Lead"]
}

var education = {
  "schools" : [
  {
    "name":"Cornell University",
    "degree":"Masters of Engineering",
    "dates":"2004-2005",
    "location":"Ithaca, NY",
    "major":["CS"]
  },
  {
    "name":"Cornell University",
    "degree":"BS",
    "dates":"2000-2004",
    "location":"Ithaca, NY",
    "major":["CS","ECE"]
  }
  ]
}

var work = {
  "jobs": [
  {
    "employer": "Palantir Technologies",
    "title": "Engineering Team Lead",
    "location": "Palo Alto, CA",
    "dates": "January 2013 - Current",
    "description": "<ul><li>Currently managing 25 engineers across three multidisciplinary teams, composed of back-end & front-end developers, designers, product managers, quality assurance, and perf engineers across the country</li><li>Competed for and secured a critical multi-million dollar contract, creating a new business area for Palantir</li><li>Subsequently grew a new team from 0 to 20+ and promoted new leads from within to support the business area</li><li>Took over a struggling mobile product and overcame team morale issues to meet customer deadlines while also addressing technical debt within native Android and iOS clients</li><li>Researched, created, promoted, and supported our usage analytics platform which logs user driven events from our Java and web workspaces, which is now widely used across most of our customers and products </ul>"
  },
  {
    "employer": "Palantir Technologies",
    "title": "Software Engineer",
    "location": "Palo Alto, CA",
    "dates": "November 2006 - January 2013",
    "description": "<ul><li>Optimized Palantir's Java UI workspace by an order of magnitude, handling highly linked data, by reducing memory consumption and passing IDs over Java objects</li><li>Worked directly on-site with end-users to gather requirements and deliver customized plugins to ease and enhance user workflows</li><li>Used Java Swing, UX design, concurrency, unit tests, end-to-end testing, to build the early stages of Palantir's Government workspace platform</li><li>Mentored and converted multiple interns to full time, focusing on constant feedback to help grow the team</li></ul>"
  },
  {
    "employer": "Autodesk",
    "title": "Computer Programmer Intern",
    "location": "Waltham, MA",
    "dates": "June 2004 - August 2004",
    "description": "<ul><li>Added map annotations to Rivet (design and construction CAD) in C++</li></ul>"
  }
  ]
};

var project = {
  "project" : [
  {
    "title":"Patent US 8812960 B1: Cohort-based presentation of user interaction data",
    "dates":"August 19 2014",
    "description":"Abstract: An interactive, customizable, user interaction data analysis system is disclosed. The system may be configured to provide cohort-based analysis and/or graphical visualizations of user interaction data to a system operator. User interaction data may be obtained, for example, as users interact with one or more software applications. In various embodiments, interactive and customizable visualizations and analysis provided by the system may be based on user interaction data aggregated across groups of users (also referred to as cohorts of users), across particular time frames, and/or from particular software and/or computer-based applications. According to various embodiments, the system may enable insights into, for example, user interaction patterns, the frequency of software application features accessed, the performance of various aspects of software applications, and/or crashes of software applications, among others.",
    "images": [
    "images/cohort1.png"
    ]
  },
  {
    "title":"Patent US 20140282121 A1: Systems and methods for providing a tagging interface for external content",
    "dates":"September 18, 2014",
    "description":"Abstract: Computer-implemented systems and methods are disclosed for providing a tagging interface for tagging external content. In accordance with some embodiments, a method is provided for tagging content external to a database system. The method comprises accessing the external content via a web browser of an electronic device. The method also comprises enhancing the web browser by providing a tagging interface for tagging at least a portion of the external content. The method further comprises receiving created tag associated with a tagged portion of the external document content, and exporting the external content and the received tag to the database system. The tagging interface can also provide an option to export the created tag to an internal database system.",
    "images": [
    "images/tagging1.png",
    "images/tagging2.png"
    ]
  }
  ]

}
//bio
bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

  $("#header").append(formattedName);
  $("#header").append(formattedRole);

  for (var j in bio.contacts) {
    var formattedContact = HTMLcontactGeneric.replace("%contact%",j);
    formattedContact = formattedContact.replace("%data%",bio.contacts[j]);
    $("#header").append(formattedContact);
  }

  if (bio.skills.length > 0) {
  	$("#header").append(HTMLskillsStart);
  	var formattedSkill;
    var skillLen = bio.skills.length;
  	for (var i = 0; i < skillLen; i++) {
  		formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
  		$("#skills").append(formattedSkill);
  	}
  }
};
bio.display();

work.display = function() {
	var formattedWork;
  var len = work.jobs.length;
	for (var i = 0; i < len; i++) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

		var formattedJob = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;
		$(".work-entry:last").append(formattedJob);
	}
};
work.display();


$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

function locationizer(work_obj) {
  var locs = [];
  var len = work_obj.jobs.length;
  for (var i = 0; i < len; i++) {
    locs.push((work_obj.jobs[i]).location);
  }
  return locs;
}

$("#main").append(internationalizeButton);

function inName() {
  var finalName = bio.name;
  // Your code goes here!

  var firstLetter = finalName.slice(0,1);
  firstLetter = firstLetter.toUpperCase();

  var spaceIdx = finalName.indexOf(" ");
  var firstName = finalName.slice(1,spaceIdx);
  firstName = firstName.toLowerCase();
  firstName = firstLetter + firstName;
  var lastNameAndSpace = finalName.slice(spaceIdx,finalName.length);
  lastNameAndSpace = lastNameAndSpace.toUpperCase();

  finalName = firstName + lastNameAndSpace;
  // Don't delete this line!
  return finalName;
}


project.display = function() {
  var len = project.project.length;
  for (var i = 0; i < len; i++) {
    $("#projects").append(HTMLprojectStart);
    var p = project.project[i];
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", p.title);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", p.dates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", p.description);

    var formattedProject = formattedProjectTitle + formattedProjectDates + formattedProjectDescription;
    $(".project-entry:last").append(formattedProject);

    if (p.images.length > 0) {
      var imgLen = p.images.length;
      for (var j = 0; j < imgLen; j++) {
        var formattedImage = HTMLprojectImage.replace("%data%", p.images[j]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
};
project.display();

education.display = function() {
  var len = education.schools.length;
  for (var i = 0 ; i < len; i++) {
    var s = education.schools[i];
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%", s.name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", s.degree);
    $(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree);

    var formattedSchoolDates = HTMLschoolDates.replace("%data%", s.dates);
    $(".education-entry:last").append(formattedSchoolDates);

    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", s.location);
    $(".education-entry:last").append(formattedSchoolLocation);
    if (s.major.length > 0) {
      var majorLen = s.major.length;
      for (var j = 0; j < majorLen; j++) {
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", s.major[j]);
        $(".education-entry:last").append(formattedSchoolMajor);
      }
    }
  }
};
education.display();

$("#mapDiv").append(googleMap);