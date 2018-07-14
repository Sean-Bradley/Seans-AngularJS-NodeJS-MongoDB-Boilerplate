app.controller('catsCtrl', function ($scope, $http) {
    $scope.title = "Cats";
    $scope.description = "Managing Cat Data";
    $scope.error = "";
    $scope.catName = "";
    $scope.editing = [];

    $scope.getCats = function () {
        try {
            $http.get("api/cats")
                .then(function (response) {
                    $scope.items = response.data;
                }, function myError(response) {
                    $scope.debugPanel = "Error\n" + prettyPrint(response);
                });

            $scope.numberOfPages = function () {
                return Math.ceil($scope.items.length / $scope.pageSize);
            };
        } catch (e) {
            $scope.debugPanel = "Error\n" + prettyPrint(e);
        }
    }
    $scope.addCat = function () {
        try {
            var config = {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Cache-Control": "no-cache"
                }
            }
            $http.post("api/cats", "name=" + $scope.catName, config)
                .then(function (data, status, headers, config) {
                    $scope.debugPanel = data;
                    $scope.getCats();
                    $scope.catName = "";
                    $scope.addCatForm.$setPristine();
                }, function myError(response) {
                    $scope.debugPanel = "Error\n" + prettyPrint(response);
                });
        } catch (e) {
            $scope.debugPanel = "Error\n" + prettyPrint(e);
        }
    };
    $scope.delete = function (_id) {
        try {
            $http.delete("api/cats/" + _id, null)
                .then(function () {
                    $scope.getCats();
                }, function myError(response) {
                    $scope.debugPanel = "Error\n" + prettyPrint(response);
                });
        } catch (e) {
            $scope.debugPanel = "Error\n" + prettyPrint(e);
        }
    }
    $scope.edit = function (_id) {
        try {
            $scope.editing[_id] = true;
        } catch (e) {
            $scope.debugPanel = "Error\n" + prettyPrint(e);
        }
    }
    $scope.update = function (_id, item) {
        try {
            $http.put("api/cats/" + _id, item)
                .then(function (data) {
                    $scope.debugPanel = data;
                    $scope.editing[_id] = false;
                }, function myError(response) {
                    $scope.debugPanel = "Error\n" + prettyPrint(response);
                });
        } catch (e) {
            $scope.debugPanel = "Error\n" + prettyPrint(e);
        }
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

    var prettyPrint = function (o) {
        var r = "";
        for (var p in o) {
            r += p + " : " + o[p] + "\n";
        }
        return r;
    }
});