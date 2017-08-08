var app = angular.module ("volume", []);
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

    $scope.wSWEuropeanRegionals = {};
    $scope.wSWEuropeanRegionals[2016] = 
    $scope.wSWEuropeanRegionals[2015] = 
    $scope.wSWEuropeanRegionals[2014] = 
    $scope.wSWEuropeanRegionals[2002] = 
    $scope.wSWEuropeanRegionals[2001] = "Porto";

    $scope.wSWEuropeanRegionals[2013] = 
    $scope.wSWEuropeanRegionals[2012] = "Valencia";

    $scope.wSWEuropeanRegionals[2011] = 
    $scope.wSWEuropeanRegionals[2010] = 
    $scope.wSWEuropeanRegionals[2009] = "Madrid";

    $scope.wSWEuropeanRegionals[2008] = "Nuremberg";

    $scope.wSWEuropeanRegionals[2007] = 
    $scope.wSWEuropeanRegionals[2006] = "Lisbon";

    $scope.wSWEuropeanRegionals[2005] = 
    $scope.wSWEuropeanRegionals[2004] = 
    $scope.wSWEuropeanRegionals[2003] = "Paris";
    
    $scope.wSWEuropeanRegionals[2000] = 
    $scope.wSWEuropeanRegionals[1999] = "Valladolid";

    $scope.wSWEuropeanRegionals[1998] = 
    $scope.wSWEuropeanRegionals[1997] = "Ulm";

    $scope.wSWEuropeanRegionals[1996] = 
    $scope.wSWEuropeanRegionals[1995] = 
    $scope.wSWEuropeanRegionals[1994] = "Zurich";

    $scope.wSWEuropeanRegionals[1993] = "Swansea";
});
