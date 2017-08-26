var app = angular.module ("volume", ["ngRoute"]);

app.config (function ($routeProvider) {
    
    $routeProvider

    .when ("/", {
        template: '<li ng-repeat="folder in directories">' +
                         '<h4><a href="{{ folder.link }}">' + 
                             ' {{ folder.name }} ' +
                         '</a></h4>' +
                         '<hr />' +
                   '</li>'
    })

    .when ("/problemSetVol", {
        template: '<li ng-repeat="folder in range (1, 18)">' +
                         '<h4><a href="{{ folder.link }}">' + 
                             'Volume {{ folder }}' + '({{ folder + "00" }} - {{ folder + "99" }})' + '</a></h4>' + '<hr />' + '</li>' })

    .when ("/contestVol", {
        template: '<li ng-repeat="folder in range (100, 133)">' +
                         '<h4><a href="{{ folder.link }}">' + 
                             'Volume {{ folder }}' +
                             '({{ folder + "00" }} - {{ folder + "99" }})' +
                         '</a></h4>' +
                         '<hr />' +
                   '</li>'
    })

    .when ("/progChalSkienaRevilla", {
        template: '<li ng-repeat="folder in range (1, 15)">' +
                         '<h4><a href="{{ folder.link }}">' + 
                             'Chapter {{ folder }}' +
                         '</a></h4>' +
                         '<hr />' +
                   '</li>'
    })

    .when ("/acmicpcWorldFinals", {
        template: '<li ng-repeat="folder in decRange (2018, 1989)">' +
                         '<h4><a href="{{ folder.link }}">' + 
                             '{{ folder }} - {{ acmFinals [folder] }}' +
                         '</a></h4>' +
                         '<hr />' +
                   '</li>'
    })

    .when ("/acmicpcDhakaRegional", {
        template: '<li ng-repeat="folder in decRange (2016, 2000)">' +
                         '<h4><a href="{{ folder.link }}">' + 
                             '{{ folder }} - Dhaka' +
                         '</a></h4>' +
                         '<hr />' +
                   '</li>'
    })

    .when ("/wswEuroReg", {
        template: '<li ng-repeat="folder in decRange (2016, 1992)">' +
                         '<h4><a href="{{ folder.link }}">' + 
                             '{{ folder }} - {{ wswEuroRegCities[folder] }}' +
                         '</a></h4>' +
                         '<hr />' +
                   '</li>'
    })

    .when ("/rujiaLiu", {
        template: '<li ng-repeat="folder in range (1, 8)">' +
                         '<h4><a href="{{ folder.link }}">' + 
                             'Present {{ folder }}: {{rujiaLiuDir[folder]}}' +
                         '</a></h4>' +
                         '<hr />' +
                   '</li>'
    })

    .when ("/aoapc1", {
        template: '<li ng-repeat="folder in range (0, 8)">' +
                         '<h4><a href="{{ folder.link }}">' + 
                             'Volume {{ folder }}. {{aoapc1dir[folder]}}' +
                         '</a></h4>' +
                         '<hr />' +
                   '</li>'
    })

    .when ("/aoapc1bgc", {
        template: '<li ng-repeat="folder in range (1, 7)">' +
                         '<h4><a href="{{ folder.link }}">' + 
                             'Chapter {{ folder }}. {{aoapc1dir2[folder]}}' +
                         '</a></h4>' +
                         '<hr />' +
                   '</li>'
    })

    .when ("/aoapc2", {
        template: '<li ng-repeat="folder in range (3, 13)">' +
                         '<h4><a href="{{ folder.link }}">' + 
                             'Chapter {{ folder }}. {{aoapc2dir[folder]}}' +
                         '</a></h4>' +
                         '<hr />' +
                   '</li>'
    })

    .when ("/cp1", {
        template: '<li ng-repeat="folder in range (1, 8)">' +
                         '<h4><a href="{{ folder.link }}">' + 
                             'Chapter {{ folder }}. {{cp1dir[folder]}}' +
                         '</a></h4>' +
                         '<hr />' +
                   '</li>'
    })

    .when ("/cp2", {
        template: '<li ng-repeat="folder in range (0, 8)">' +
                         '<h4><a href="{{ folder.link }}">' + 
                             '{{cp2dir[folder]}}' +
                         '</a></h4>' +
                         '<hr />' +
                   '</li>'
    })

    .when ("/cp3", {
        template: '<li ng-repeat="folder in range (0, 9)">' +
                         '<h4><a href="{{ folder.link }}">' + 
                             '{{ cp3dir[folder] }}' +
                         '</a></h4>' +
                         '<hr />' +
                   '</li>'
    })

});

app.controller ("volumeCtrlr", function ($scope) {
    $scope.range = function (start, end) {
        var arr = [];
        for (var i = start; i < end; ++i) {
            arr.push (i);
        }
        return arr;
    };

    $scope.decRange = function (start, end) {
        var arr = [];
        for (var i = start; i > end; --i) {
            arr.push (i);
        }
        return arr;
    };

    $scope.acmFinals = {};
    $scope.acmFinals[2018] = "Beijing";
    $scope.acmFinals[2017] = "Rapid City";
    $scope.acmFinals[2016] = "Phuket";
    $scope.acmFinals[2015] = "Marrakech";
    $scope.acmFinals[2014] = "Ekateinburg";
    $scope.acmFinals[2013] = "Saint Petersburg";
    $scope.acmFinals[2012] = "Warsaw";
    $scope.acmFinals[2011] = "Orlando";
    $scope.acmFinals[2010] = "Harbin";
    $scope.acmFinals[2009] = "Stockholm";
    $scope.acmFinals[2008] = "Banff";
    $scope.acmFinals[2007] = "Tokyo";
    $scope.acmFinals[2006] = "San Antonio";
    $scope.acmFinals[2005] = "Shanghai";
    $scope.acmFinals[2004] = "Prague";
    $scope.acmFinals[2003] = "Beverly Hills";
    $scope.acmFinals[2002] = "Honolulu";
    $scope.acmFinals[2001] = "Vancouver";
    $scope.acmFinals[2000] = "Orlando";
    $scope.acmFinals[1999] = "Eindhoven";
    $scope.acmFinals[1998] = "Atlanta";
    $scope.acmFinals[1997] = "San Jose";
    $scope.acmFinals[1996] = "Philadelphia";
    $scope.acmFinals[1995] = "Nashville";
    $scope.acmFinals[1994] = "Phoenix";
    $scope.acmFinals[1993] = "Indianapolis";
    $scope.acmFinals[1992] = "Kansas City";
    $scope.acmFinals[1991] = "San Antonio";
    $scope.acmFinals[1990] = "Washington";

    $scope.wswEuroRegCities = {};
    $scope.wswEuroRegCities[2016] = 
    $scope.wswEuroRegCities[2015] = 
    $scope.wswEuroRegCities[2014] = 
    $scope.wswEuroRegCities[2002] = 
    $scope.wswEuroRegCities[2001] = "Porto";

    $scope.wswEuroRegCities[2013] = 
    $scope.wswEuroRegCities[2012] = "Valencia";

    $scope.wswEuroRegCities[2011] = 
    $scope.wswEuroRegCities[2010] = 
    $scope.wswEuroRegCities[2009] = "Madrid";

    $scope.wswEuroRegCities[2008] = "Nuremberg";

    $scope.wswEuroRegCities[2007] = 
    $scope.wswEuroRegCities[2006] = "Lisbon";

    $scope.wswEuroRegCities[2005] = 
    $scope.wswEuroRegCities[2004] = 
    $scope.wswEuroRegCities[2003] = "Paris";
    
    $scope.wswEuroRegCities[2000] = 
    $scope.wswEuroRegCities[1999] = "Valladolid";

    $scope.wswEuroRegCities[1998] = 
    $scope.wswEuroRegCities[1997] = "Ulm";

    $scope.wswEuroRegCities[1996] = 
    $scope.wswEuroRegCities[1995] = 
    $scope.wswEuroRegCities[1994] = "Zurich";

    $scope.wswEuroRegCities[1993] = "Swansea";
    
    $scope.rujiaLiuDir = {};
    $scope.rujiaLiuDir [1] = "A Tiny Contest of Brute Force";
    $scope.rujiaLiuDir [2] = "A Big Contest of Brute Force";
    $scope.rujiaLiuDir [3] = "A Data Structure Contest";
    $scope.rujiaLiuDir [4] = "Dedicated to Geometry and CG Lovers";
    $scope.rujiaLiuDir [5] = "Developing Simplified Softwares";
    $scope.rujiaLiuDir [6] = "Happy 30th Birthday to Myself";
    $scope.rujiaLiuDir [7] = "Hello, interactive problems!";
    
    $scope.aoapc1dir = {};
    $scope.aoapc1dir [0] = "Getting Started";
    $scope.aoapc1dir [1] = "Elementary Problem Solving";
    $scope.aoapc1dir [2] = "Data Structures";
    $scope.aoapc1dir [3] = "Brute Force";
    $scope.aoapc1dir [4] = "Algorithm Design";
    $scope.aoapc1dir [5] = "Dynamic Programming";
    $scope.aoapc1dir [6] = "Mathematical Concepts and Methods";
    $scope.aoapc1dir [7] = "Graph Algorithms and Implementation Techniques";
    
    $scope.aoapc1dir2 = {};
    $scope.aoapc1dir2 [1] = "Algorithm Design";
    $scope.aoapc1dir2 [2] = "Mathematics";
    $scope.aoapc1dir2 [3] = "Data Structures";
    $scope.aoapc1dir2 [4] = "Geometry";
    $scope.aoapc1dir2 [5] = "Graph Theory";
    $scope.aoapc1dir2 [6] = "Selected Topics";
    
    $scope.aoapc2dir = {};
    $scope.aoapc2dir [3]  = "Arrays and Strings";
    $scope.aoapc2dir [4]  = "Functions and Recursion";
    $scope.aoapc2dir [5]  = "C++ and STL";
    $scope.aoapc2dir [6]  = "Data Structures";
    $scope.aoapc2dir [7]  = "Brute Force";
    $scope.aoapc2dir [8]  = "Algorithm Design";
    $scope.aoapc2dir [9]  = "Dynamic Programming";
    $scope.aoapc2dir [10] = "Maths";
    $scope.aoapc2dir [11] = "Graph Theory";
    $scope.aoapc2dir [12] = "Advanced Topics";
    
    $scope.cp1dir = {};
    $scope.cp1dir [1] = "Introduction";
    $scope.cp1dir [2] = "Data Structures and Libraries";
    $scope.cp1dir [3] = "Problem Solving Paradigms";
    $scope.cp1dir [4] = "Graph";
    $scope.cp1dir [5] = "Mathematics";
    $scope.cp1dir [6] = "String Processing";
    $scope.cp1dir [7] = "(Computational) Geometry";
    
    $scope.cp2dir = {};
    $scope.cp2dir [0] = "Introduction";
    $scope.cp2dir [1] = "Data Structures and Libraries";
    $scope.cp2dir [2] = "Problem Solving Paradigms";
    $scope.cp2dir [3] = "Graph";
    $scope.cp2dir [4] = "Mathematics";
    $scope.cp2dir [5] = "String Processing";
    $scope.cp2dir [6] = "(Computational) Geometry";
    $scope.cp2dir [7] = "More Advanced Topics";

    $scope.cp3dir = {};
    $scope.cp3dir [0] = "Introduction";
    $scope.cp3dir [1] = "Data Structures and Libraries";
    $scope.cp3dir [2] = "Problem Solving Paradigms";
    $scope.cp3dir [3] = "Graph";
    $scope.cp3dir [4] = "Mathematics";
    $scope.cp3dir [6] = "String Processing";
    $scope.cp3dir [7] = "(Computational) Geometry";
    $scope.cp3dir [8] = "More Advanced Topics";
    $scope.cp3dir [9] = "Introduction";

    $scope.directories = [
    {   name: "Problem Set Volumes (100...1999)",
        link: "#!problemSetVol"
    },
    {   name: "Contest Volumes (10000...)",
        link: "#!contestVol"
    },
    {   name: "Interactive Problems",
        link: "https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=870"
    },
    {   name: "Programming Challenges (Skiena & Revilla)",
        link: "#!progChalSkienaRevilla"
    },
    {   name: "ACM-ICPC World Finals",
        link: "#!acmicpcWorldFinals"
    },
    {   name: "ACM-ICPC Dhaka Site Regional Contests",
        link: "#!acmicpcDhakaRegional"
    },
    {   name: "Western and Southwestern European Regionals",
        link: "#!wswEuroReg"
    },
    {   name: "Prominent Problemsetters",
        link: "https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=1"
    },
    {   name: "Rujia Liu's Presents",
        link: "#!rujiaLiu"
    },
    {   name: "AOAPC I: Beginning Algorithm Contests (Rujia Liu)",
        link: "#!aoapc1"
    },
    {   name: "AOAPC I: Beginning Algorithm Contests -- Training Guide (Rujia Liu)",
        link: "#!aoapc1bgc"
    },
    {   name: "AOAPC II: Beginning Algorithm Contests (Second Edition) (Rujia Liu)",
        link: "#!aoapc2"
    },
    {   name: "Competitive Programming: Increasing the Lower Bound of Programming Contests (Steven & Felix Halim)",
        link: "#!cp1"
    },
    {   name: "Competitive Programming 2: This increases the lower bound of Programming Contests. Again (Steven & Felix Halim)",
        link: "#!cp2"
    },
    {   name: "Competitive Programming 3: The New Lower Bound of Programming Contests (Steven & Felix Halim)",
        link: "#!cp3"
    },
];
});
