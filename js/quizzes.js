// We learned about relational operators and how they can classify the relationship between two values.
//Your job is to write the function getRelationship(x,y) function, which should return a string representing
// whether x is >, < or = y. For example:

// var rel = getRelationship(2, 3);
// console.log(rel); // <
// If one or both of the values aren't numbers, your function should output:

// "Can't compare relationships because [this value] and [that value] [is]/[are] not [a] number[s]."
// where [this value] and [that value] are replaced with the non-numerical values. The sentence should be
//grammatically correct by outputting either is or are and pluralizing number if necessary.

// For example:

// var rel1 = getRelationship("this", 2);
// console.log(rel1); // "Can't compare relationships because this is not a number"

// var rel2 = getRelationship("that");
// console.log(rel2) // "Can't compare relationships because that and undefined are not numbers"
// Notice in the second example, because the y value was missing, the output said that undefined was not a number.

// function getRelationship(x, y) {
//   var error1 = "Can't compare relationships because %data% is not a number";
//   var error2 = "Can't compare relationships because %data1% and %data2% are not numbers";
//   if (isNaN(x) && isNaN(y)) {
//     error2 = error2.replace("%data1%", x);
//     error2 = error2.replace("%data2%", y);
//     return error2;
//   }
//   if (isNaN(x)) {
//     error1 = error1.replace("%data%", x);
//     return error1;
//   }
//   if (isNaN(y)) {
//     error1 = error1.replace("%data%", y);
//     return error1;
//   }
//   if (x < y) {
//     return "<";
//   }
//   if (x > y) {
//     return ">";
//   }
//   return "=";
// };

// var moonWalkers = [
//   "Neil Armstrong",
//   "Buzz Aldrin",
//   "Pete Conrad",
//   "Alan Bean",
//   "Alan Shepard",
//   "Edgar Mitchell",
//   "David Scott",
//   "James Irwin",
//   "John Young",
//   "Charles Duke",
//   "Eugene Cernan",
//   "Harrison Schmitt"
// ];

// function alphabetizer(names) {
//     var nameArr = [];
//     for (nIdx in names) {
//       var name = names[nIdx];
//       var sArr = name.split(" ");
//       nameArr.push(sArr[1]+", "+sArr[0]);
//     }
//     nameArr.sort();
//     return nameArr;
// }


// Google's PageSpeed Insights (PSI) scores websites on their speed. A perfect score is 100 and the worst score is 0.
// Alongside the score, PSI provides relevant advice for improvements.

// By integrating an automated PSI score into a suite of front-end unit tests, you can periodically check a website's overall speed.

// Let's assume you're building the front-end testing framework and you make a call to the PSI API. You receive the JSON below as
// a response.

// Create a totalBytes(psiResults) function that iterates through pageStats in the psiResults object and returns the total
// number of bytes to load the website.

// Then, create a ruleList(psiResults) function that iterates through the localizedRuleNames in ruleResults and returns an
// array of their strings.

// Iterate through the localizedRuleNames in ruleResults and
// return an array of their strings.
// function ruleList(results) {
//     var ret = [];
//     for (rIdx in results.formattedResults.ruleResults) {
//       var rule = results.formattedResults.ruleResults[rIdx];
//       ret.push(rule.localizedRuleName);
//     }
//     return ret;
// }

// // Iterate through pageStats in the psiResults object and
// // return the total number of bytes to load the website.
// function totalBytes(results) {
//     var stats = results.pageStats;
//     return Number(stats.htmlResponseBytes) + Number(stats.cssResponseBytes) + Number(stats.imageResponseBytes) +
//     Number(stats.javascriptResponseBytes) + Number(stats.otherResponseBytes) + Number(stats.totalRequestBytes);
// }

// // Below, you'll find a sample PS Insights JSON
// // and two console.log statements to help you test your code!

// //402397

// var psiResults;

// psinsights = {
//  "kind": "pagespeedonline#result",
//  "id": "/speed/pagespeed",
//  "responseCode": 200,
//  "title": "PageSpeed Home",
//  "score": 90,
//  "pageStats": {
//   "numberResources": 22,
//   "numberHosts": 7,
//   "totalRequestBytes": "2761",
//   "numberStaticResources": 16,
//   "htmlResponseBytes": "91981",
//   "cssResponseBytes": "37728",
//   "imageResponseBytes": "13909",
//   "javascriptResponseBytes": "247214",
//   "otherResponseBytes": "8804",
//   "numberJsResources": 6,
//   "numberCssResources": 2
//  },
//  "formattedResults": {
//   "locale": "en_US",
//   "ruleResults": {
//     "AvoidBadRequests": {
//       "localizedRuleName": "Avoid bad requests",
//       "ruleImpact": 0.0
//     },
//     "MinifyJavaScript": {
//       "localizedRuleName": "Minify JavaScript",
//       "ruleImpact": 0.1417,
//       "urlBlocks": [
//       {
//         "header": {
//        "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
//        "args": [
//         {
//          "type": "BYTES",
//          "value": "1.3KiB"
//         },
//         {
//          "type": "INT_LITERAL",
//          "value": "0"
//         }
//        ]
//         },
//         "urls": [
//         {
//           "result": {
//          "format": "Minifying $1 could save $2 ($3% reduction).",
//          "args": [
//           {
//            "type": "URL",
//            "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
//           },
//           {
//            "type": "BYTES",
//            "value": "717B"
//           },
//           {
//            "type": "INT_LITERAL",
//            "value": "1"
//           }
//          ]
//         }
//        },
//        {
//         "result": {
//          "format": "Minifying $1 could save $2 ($3% reduction).",
//          "args": [
//           {
//            "type": "URL",
//            "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
//           },
//           {
//            "type": "BYTES",
//            "value": "258B"
//           },
//           {
//            "type": "INT_LITERAL",
//            "value": "0"
//           }
//          ]
//         }
//        }
//       ]
//      }
//     ]
//    },
//    "SpriteImages": {
//     "localizedRuleName": "Combine images into CSS sprites",
//     "ruleImpact": 0.0
//    }
//   }
//  },
//  "version": {
//   "major": 1,
//   "minor": 11
//  }
// };

// // Try logging the outputs below to test your code!
// console.log(ruleList(psinsights));
// console.log(totalBytes(psinsights));