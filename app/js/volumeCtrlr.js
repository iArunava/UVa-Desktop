var app = angular.module ("volume", []);
app.controller ("volumeCtrlr", function ($scope) {
    $scope.range = function (start, end) {
        var arr = [];
        for (var i = start; i < end; ++i) {
            arr.push (i);
        }

        return arr;
    };
});
