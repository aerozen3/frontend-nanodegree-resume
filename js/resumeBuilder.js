/*
This is empty on purpose! Your code to build the resume will go here.
*/

var bio = {
  'name':'Zennard Sun',
  'role':'Web Dev',
  'contacts':
  {
    'email':'zennard [[at]] gmail.com',
    'github':'https://github.com/aerozen3',
    'twitter':'@zennard',
    'location':'Mountain View, CA'
  },
  'welcomeMessage':'Experienced software engineer now in a management role that strongly focuses on ownership, mentoring, and people growth',
  'skills':['Java','HTML & CSS','Javascript'],
  'lead':['People Lead','Product Management','Project Management'],
  'biopic':'images/zen.jpg'
};

var education = {
  'schools':[
  {
    'name':'Cornell University',
    'degree':'Masters of Engineering',
    'dates':2005,
    'location':'Ithaca, NY',
    'major':['Computer Science'],
    'url':'http://www.cornell.edu/'
  },
  {
    'name':'Cornell University',
    'degree':'BS',
    'dates':2004,
    'location':'Ithaca, NY',
    'major':['Computer Science','Electrical & Computer Engineering'],
    'url':'http://www.cornell.edu/'
  }
  ],
  'onlineCourses':[
    {
      'title':'Intro to HTML and CSS',
      'school':'Udacity',
      'date':2015,
      'url':'https://www.udacity.com/course/intro-to-html-and-css--ud304'
    },
    {
      'title':'Responsive Web Design Fundamentals',
      'school':'Udacity',
      'date':2015,
      'url':'https://www.udacity.com/course/responsive-web-design-fundamentals--ud893'
    },
    {
      'title':'Responsive Images',
      'school':'Udacity',
      'date':2015,
      'url':'https://www.udacity.com/course/responsive-images--ud882'
    },
    {
      'title':'JavaScript Basics',
      'school':'Udacity',
      'date':2015,
      'url':'https://www.udacity.com/course/javascript-basics--ud804'
    },
    {
      'title':'Intro to jQuery',
      'school':'Udacity',
      'date':2015,
      'url':'https://www.udacity.com/course/intro-to-jquery--ud245'
    }
  ]
};

var work = {
  'jobs':[
  {
    'employer':'Palantir Technologies',
    'title':'Engineering Team Lead',
    'location':'Palo Alto, CA',
    'dates':'January 2013 - Current',
    'description':'<ul><li>Currently managing 25 engineers across three multidisciplinary teams, composed of back-end & front-end developers, designers, product managers, quality assurance, and perf engineers across the country</li><li>Competed for and secured a critical multi-million dollar contract, creating a new business area for Palantir</li><li>Subsequently grew a new team from 0 to 20+ and promoted new leads from within to support the business area</li><li>Took over a struggling mobile product and overcame team morale issues to meet customer deadlines while also addressing technical debt within native Android and iOS clients</li><li>Researched, created, promoted, and supported our usage analytics platform which logs user driven events from our Java and web workspaces, which is now widely used across most of our customers and products </ul>',
    'url':'https://www.palantir.com/'
  },
  {
    'employer':'Palantir Technologies',
    'title':'Software Engineer',
    'location':'Palo Alto, CA',
    'dates':'November 2006 - January 2013',
    'description':'<ul><li>Optimized Palantir\'s Java UI workspace by an order of magnitude, handling highly linked data, by reducing memory consumption and passing IDs over Java objects</li><li>Worked directly on-site with end-users to gather requirements and deliver customized plugins to ease and enhance user workflows</li><li>Used Java Swing, UX design, concurrency, unit tests, end-to-end testing, to build the early stages of Palantir\'s Government workspace platform</li><li>Mentored and converted multiple interns to full time, focusing on constant feedback to help grow the team</li></ul>',
    'url':'https://www.palantir.com/'
  },
  {
    'employer':'Autodesk',
    'title':'Computer Programmer Intern',
    'location':'Waltham, MA',
    'dates':'June 2004 - August 2004',
    'description':'<ul><li>Added map annotations to Rivet (design and construction CAD) in C++</li></ul>',
    'url':'http://www.autodesk.com/products/revit-family/overview'
  }
  ]
};

var project = {
  'project':[
  {
    'title':'Patent US 8812960 B1: Cohort-based presentation of user interaction data',
    'dates':'Publication: August 19, 2014 - Filing: December 3, 2013',
    'description':'<i>Abstract</i>: An interactive, customizable, user interaction data analysis system is disclosed. The system may be configured to provide cohort-based analysis and/or graphical visualizations of user interaction data to a system operator. User interaction data may be obtained, for example, as users interact with one or more software applications. In various embodiments, interactive and customizable visualizations and analysis provided by the system may be based on user interaction data aggregated across groups of users (also referred to as cohorts of users), across particular time frames, and/or from particular software and/or computer-based applications. According to various embodiments, the system may enable insights into, for example, user interaction patterns, the frequency of software application features accessed, the performance of various aspects of software applications, and/or crashes of software applications, among others.',
    'url':'https://www.google.com/patents/US8812960',
    'images':[
    {
      'url':'images/cohort1.png',
      'linkUrl':'https://www.google.com/patents/US8812960'
    }
    ]
  },
  {
    'title':'Patent US 20140282121 A1: Systems and methods for providing a tagging interface for external content',
    'dates':'Publication: September 18, 2014 - Filing: December 19, 2013',
    'description':'<i>Abstract</i>: Computer-implemented systems and methods are disclosed for providing a tagging interface for tagging external content. In accordance with some embodiments, a method is provided for tagging content external to a database system. The method comprises accessing the external content via a web browser of an electronic device. The method also comprises enhancing the web browser by providing a tagging interface for tagging at least a portion of the external content. The method further comprises receiving created tag associated with a tagged portion of the external document content, and exporting the external content and the received tag to the database system. The tagging interface can also provide an option to export the created tag to an internal database system.',
    'url':'https://www.google.com/patents/US20140282121',
    'images':[
    {
      'url':'images/tagging1.png',
      'linkUrl':'https://www.google.com/patents/US20140282121'
    },
    {
      'url':'images/tagging2.png',
      'linkUrl':'https://www.google.com/patents/US20140282121'
    }
    ]
  }
  ]
};

var $header = $('#header');
var data = '%data%';
bio.display = function() {

  var formattedName = HTMLheaderName.replace(data,this.name);
  var formattedRole = HTMLheaderRole.replace(data,this.role);
  var formattedWelcome = HTMLwelcomeMsg.replace(data,this.welcomeMessage);
  var formattedPic = HTMLbioPic.replace(data,this.biopic);
  $header.prepend(formattedRole);
  $header.prepend(formattedName);
  $header.append(formattedPic);
  $header.append(formattedWelcome);

  for (var j in this.contacts) {
    var formattedContact = HTMLcontactGeneric.replace('%contact%',j);
    formattedContact = formattedContact.replace(data,this.contacts[j]);
    $('#topContacts').append(formattedContact);
    $('#footerContacts').append(formattedContact);
  }

  $("#header").append(HTMLskillsAndLeadStart);
  if (this.skills && this.skills.length > 0) {
    $('#skillsAndLead').append(HTMLskillsStart);
    var formattedSkill;
    var skillLen = this.skills.length;
    for (var i = 0; i < skillLen; i++) {
      formattedSkill = HTMLskills.replace(data,this.skills[i]);
      $('#skills').append(formattedSkill);
    }
  }
  if (this.lead && this.lead.length > 0) {
    $('#skillsAndLead').append(HTMLleadStart);
    var formattedLead;
    var leadLen = this.lead.length;
    for (var i = 0; i < leadLen; i++) {
      formattedLead = HTMLlead.replace(data,this.lead[i]);
      $('#lead').append(formattedLead);
    }
  }
};
bio.display();

work.display = function() {
  var formattedWork;
  var len = this.jobs.length;
  for (var i = 0; i < len; i++) {
    $('#workExperience').append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace(data, this.jobs[i].employer).replace('%url%', this.jobs[i].url);
    var formattedTitle = HTMLworkTitle.replace(data, this.jobs[i].title);
    var formattedLocation = HTMLworkLocation.replace(data, this.jobs[i].location);
    var formattedDates = HTMLworkDates.replace(data, this.jobs[i].dates);
    var formattedDescription = HTMLworkDescription.replace(data, this.jobs[i].description);

    var formattedJob = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;
    $('.work-entry:last').append(formattedJob);
  }
};
work.display();




project.display = function() {
  var len = project.project.length;
  for (var i = 0; i < len; i++) {
    $('#projects').append(HTMLprojectStart);
    var p = this.project[i];
    if (p.images.length > 0) {
      var imgLen = p.images.length;
      for (var j = (imgLen-1); j >= 0; j--) {
        var img = p.images[j];
        var formattedImage = HTMLprojectImage.replace('%imgsrc%', img.url).replace('%name%', 'Fig '+ (j+1)).replace('%url%', img.linkUrl);
        $('.project-entry:last').append(formattedImage);
      }
    }
    var formattedProjectTitle = HTMLprojectTitle.replace(data, p.title).replace('%url%', p.url);
    var formattedProjectDates = HTMLprojectDates.replace(data, p.dates);

    var formattedProject = formattedProjectTitle + formattedProjectDates;
    $('.project-entry:last').append(formattedProject);

    var formattedProjectDescription = HTMLprojectDescription.replace(data, p.description);
  $('.project-entry:last').append(formattedProjectDescription);
  }
};
project.display();

education.display = function() {
  var elen = this.schools.length;
  for (var i = 0 ; i < elen; i++) {
    var s = this.schools[i];
    $('#education').append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace(data, s.name).replace('%url%', s.url);
    var formattedSchoolDegree = HTMLschoolDegree.replace(data, s.degree);
    $('.education-entry:last').append(formattedSchoolName+formattedSchoolDegree);

    var formattedSchoolDates = HTMLschoolDates.replace(data, s.dates);
    $('.education-entry:last').append(formattedSchoolDates);

    var formattedSchoolLocation = HTMLschoolLocation.replace(data, s.location);
    $('.education-entry:last').append(formattedSchoolLocation);
    if (s.major.length > 0) {
      var majorLen = s.major.length;
      for (var j = 0; j < majorLen; j++) {
        var formattedSchoolMajor = HTMLschoolMajor.replace(data, s.major[j]);
        $('.education-entry:last').append(formattedSchoolMajor);
      }
    }
  }

  if (education.onlineCourses && education.onlineCourses.length > 0) {
    $('#education').append(HTMLonlineClasses);
    var olen = education.onlineCourses.length;
    for (var i = 0; i < olen; i++) {
      $('#education').append(HTMLschoolStart);
      var o = education.onlineCourses[i];
      var formattedOnlineTitle = HTMLonlineTitle.replace(data, o.title).replace('%url%', o.url);
      var formattedOnlineSchool = HTMLonlineSchool.replace(data, o.school);
      $('.education-entry:last').append(formattedOnlineTitle+formattedOnlineSchool);

      var formattedOnlineDates = HTMLonlineDates.replace(data, o.date);
      $('.education-entry:last').append(formattedOnlineDates);
      // This isn't pretty or useful
      // var formattedOnlineUrl = HTMLonlineURL.replace(data, o.url);
      // $('.education-entry:last').append(formattedOnlineUrl);
    }
  }


};
education.display();

$('#mapDiv').append(googleMap);


//Utility functions

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

$('#main').append(internationalizeButton);

function inName() {
  var finalName = bio.name;
  // Your code goes here!

  var firstLetter = finalName.slice(0,1);
  firstLetter = firstLetter.toUpperCase();

  var spaceIdx = finalName.indexOf(' ');
  var firstName = finalName.slice(1,spaceIdx).toLowerCase();
  firstName = firstLetter + firstName;
  var lastNameAndSpace = finalName.slice(spaceIdx,finalName.length);
  lastNameAndSpace = lastNameAndSpace.toUpperCase();

  finalName = firstName + lastNameAndSpace;
  // Don't delete this line!
  return finalName;
}