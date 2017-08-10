var app = angular.module ('uvaMain', []);
app.controller ("uvaMainCtrlr", function ($scope) {
    
    $scope.programid = 100;
    $scope.quickShow = function () {
        window.location = "../../PDFs/" + $scope.programid + ".html";
    };
});
