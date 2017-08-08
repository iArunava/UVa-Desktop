angular.module ('root', []).controller ('rootController',
function ($scope) {
    
    $scope.directories = [
        {   name: "Problem Set Volumes (100...1999)",
            link: "../html/problemSetVolumes.html"
        },
        {   name: "Contest Volumes (10000...)",
            link: "../html/contestVolumes.html"
        },
        {   name: "Interactive Problems",
            link: "https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=870"
        },
        {   name: "Programming Challenges (Skiena & Revilla)",
            link: "https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=28"
        },
        {   name: "ACM-ICPC World Finals",
            link: "https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=1"
        },
        {   name: "ACM-ICPC Dhaka Site Regional Contests",
            link: "https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=1"
        },
        {   name: "Western and Southwestern European Regionals",
            link: "https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=1"
        },
        {   name: "Prominent Problemsetters",
            link: "https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=1"
        },
        {   name: "Rujia Liu's Presents",
            link: "https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=1"
        },
        {   name: "AOAPC I: Beginning Algorithm Contests (Rujia Liu)",
            link: "https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=1"
        },
        {   name: "AOAPC I: Beginning Algorithm Contests -- Training Guide (Rujia Liu)",
            link: "https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=1"
        },
        {   name: "AOAPC II: Beginning Algorithm Contests (Second Edition) (Rujia Liu)",
            link: "https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=1"
        },
        {   name: "Competitive Programming: Increasing the Lower Bound of Programming Contests (Steven & Felix Halim)",
            link: "https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=1"
        },
        {   name: "Competitive Programming 2: This increases the lower bound of Programming Contests. Again (Steven & Felix Halim)",
            link: "https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=1"
        },
        {   name: "Competitive Programming 3: The New Lower Bound of Programming Contests (Steven & Felix Halim)",
            link: "https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=1"
        },
    ];
});
