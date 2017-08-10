const {ipcRenderer} = require ('electron');

var app = angular.module ('uvaMain', []);
app.controller ("uvaMainCtrlr", function ($scope) {
    
    $scope.programid = 100;
    $scope.quickShow = function () {
        ipcRenderer.send ('show-program', $scope.programid);
        //window.location = "../../PDFs/" + $scope.programid + ".html";
    };
});
