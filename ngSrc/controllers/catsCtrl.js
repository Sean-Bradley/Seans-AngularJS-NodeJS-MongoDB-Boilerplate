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