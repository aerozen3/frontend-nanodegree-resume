/*
This is empty on purpose! Your code to build the resume will go here.
 */

 // var awesomeThoughts = "I am zen and I'm awesome";
 // var funThoughts = awesomeThoughts.replace("awesome","fun");
 // $("#main").append(funThoughts);

 var bio = {
 	"name":"Zennard Sun",
 	"role":"Web Dev",
 	"welcomeMessage":"Welcome to Zen's resume",
 	"contacts" : {
    "email":"zennard@gmail.com",
    "github":"aerozen3",
    "location": "Mountain View, CA"
  },
  "skills" : ["Java","Javascript"]
}

var education = {
  "schools" : [
  {
    "name":"Cornell University",
    "degree":"Masters of Engineering",
    "location":"Ithaca, NY",
 			"major":["CS"]
 		},
 		{
 			"name":"Cornell University",
 			"degree":"BS",
      "location":"Ithaca, NY",
 			"major":["CS","ECE"]
 		}
 	]
 }

 // var work = {
 // 	"jobs" : [
	//  	{
	//  		"employer":"Palantir Technologies",
	//  		"title":"Engineering Team Lead",
	//  		"location":"Palo Alto, CA",
	//  		"dates":"2012-2015",
	//  		"description":"Lead two large teams"
	//  	},
	//  	{
	//  		"employer":"Palantir Technologies",
	//  		"title":"Software Engineering",
	//  		"location":"Palo Alto, CA",
	//  		"dates":"2006-2009",
	//  		"description":"Java"
	//  	}
 // 	]
 // }
var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};
 var project = {
 	"project" : [
 		{
 			"title":"Intro to JS",
 			"dates":"9/2015",
 			"description":"Learning JS"
 		},
 		{
 			"title":"Intro to HTML & CSS",
 			"dates":"10/2015",
 			"description":"Learning HTML & CSS"
 		}
 	]

 }

  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

  $("#header").append(formattedName);
  $("#header").append(formattedRole);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill;
	for (skillIdx in bio.skills) {
		formattedSkill = HTMLskills.replace("%data%",bio.skills[skillIdx]);
		$("#skills").append(formattedSkill);
	}
}

function displayWork() {
	var formattedWork;
	for (jobIdx in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobIdx].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jobIdx].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[jobIdx].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[jobIdx].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[jobIdx].description);

		var formattedJob = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;
		$(".work-entry:last").append(formattedJob);
	}
}

displayWork();


$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

function locationizer(work_obj) {
    var locs = [];
    for (jobIdx in work_obj.jobs) {
        locs.push((work_obj.jobs[jobIdx]).location);
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
	for (pIdx in project.project) {
    $("#projects").append(HTMLprojectStart);
    console.log("zz "+project.project[pIdx].title);
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.project[pIdx].title);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", project.project[pIdx].dates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.project[pIdx].description);

    var formattedProject = formattedProjectTitle + formattedProjectDates + formattedProjectDescription;
    $(".project-entry:last").append(formattedProject);
    // if (project.project[pIdx].images.length > 0) {
    //   for (imgIdx in project.project[imgIdx].images) {
    //     var formattedImage = HTMLprojectImage.replace("%data%", project.project[pIdx].images[imgIdx]);
    //     $(".project-entry:last").append(formattedImage);
    //   }
    // }

	}
}

project.display();

$("#mapDiv").append(googleMap);