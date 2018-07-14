var app = angular.module('seansApp', ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/cats", {
            templateUrl: "views/catsView.html"
        })
        .when("/dogs", {
            templateUrl: "views/dogsView.html"
        })
        .when("/birds", {
            templateUrl: "views/birdsView.html"
        })
        .otherwise({
            templateUrl: "views/homeView.html"
        });

});

app.controller('birdsCtrl', function ($scope) {
    $scope.title = "Birds";
    $scope.description = "Nothing to see here for birds, go back to cats instead.";
});
app.controller('catsCtrl', function ($scope, $http) {
    $scope.title = "Cats";
    $scope.description = "Managing Cat Data";
    $scope.error = "";
    $scope.catName = "";
    $scope.editing = [];

    $scope.getCats = function () {
        $http.get("api/cats")
            .then(function (response) {
                $scope.items = response.data;
            }, function myError(response) {
                $scope.error = "problem";//response.statusText;
            });

        $scope.numberOfPages = function () {
            return Math.ceil($scope.items.length / $scope.pageSize);
        };
    }
    $scope.addCat = function () {
        var data = $.param({
            name: $scope.catName
        });
        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }
        $http.post("api/cats", data, config)
            .then(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
                $scope.getCats();
                $scope.catName = "";
            }, function myError(response) {
                $scope.error = "problem";//response.statusText;
            });
    };
    $scope.delete = function (_id) {
        $http.delete("api/cats/" + _id, null)
            .then(function () {
                $scope.getCats();
            }, function myError(response) {
                $scope.error = "problem";//response.statusText;
            });
    }
    $scope.edit = function (_id) {
        $scope.editing[_id] = true;
    }
    $scope.update = function (_id, item) {
        $http.put("api/cats/" + _id, item)
            .then(function () {
                $scope.editing[_id] = false;
            }, function myError(response) {
                $scope.error = "problem";//response.statusText;
            });
    }

    $scope.itemsPerPage = 5;
    $scope.currentPage = 0;
    $scope.items = [];
    $scope.getCats(); //fills the items array

    $scope.range = function () {

        var rangeSize = 5;
        var ret = [];
        var start;

        start = $scope.currentPage;
        if (start > $scope.pageCount() - rangeSize) {
            start = $scope.pageCount() - rangeSize + 1;
        }

        for (var i = start; i < start + rangeSize; i++) {
            if (i >= 0) {
                ret.push(i);
            }
        }
        return ret;
    };

    $scope.prevPage = function () {
        if ($scope.currentPage > 0) {
            $scope.currentPage--;
        }
    };

    $scope.prevPageDisabled = function () {
        return $scope.currentPage === 0 ? "disabled" : "";
    };

    $scope.pageCount = function () {
        return Math.ceil($scope.items.length / $scope.itemsPerPage) - 1;
    };

    $scope.nextPage = function () {
        if ($scope.currentPage < $scope.pageCount()) {
            $scope.currentPage++;
        }
    };

    $scope.nextPageDisabled = function () {
        return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
    };

    $scope.setPage = function (n) {
        $scope.currentPage = n;
    };

});
app.controller('clockCtrl', function ($scope, $interval) {
    $scope.theTime = new Date().toLocaleTimeString();
    $interval(function () {
        $scope.theTime = new Date().toLocaleTimeString();
    }, 1000);
});
app.controller('dogsCtrl', function ($scope) {
    $scope.title = "Dogs";
    $scope.description = "Nothing to see here for dogs, go back to cats instead.";
});
app.controller('homeCtrl', function ($scope) {
    // $scope.title = "Home";
    $scope.description = "Nothing to see here, go and see cats instead.";
});
app.controller('navbarCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
});
app.directive('seansFooter', function () {
    return {
        template: "<footer class='footer'><div class='container'><span class='text-muted'>This is the footer. You can download this project from github.</span></div></footer>"
    };
});
app.filter('offset', function() {
    return function(input, start) {
      start = parseInt(start, 10);
      return input.slice(start);
    };
  });