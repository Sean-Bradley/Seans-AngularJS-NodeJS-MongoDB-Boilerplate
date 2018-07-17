app.service('catsService', ['$http', function ($http) {
    this.get = function () {
        return $http.get("api/cats")
            .then(function (response) {
                return { "code": 1, "data": response.data };
            }, function (e) {
                return { "code": -1, "data": e };
            });
    }
    this.add = function (catName) {
        var config = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Cache-Control": "no-cache"
            }
        }
        return $http.post("api/cats", "name=" + catName, config)
            .then(function (response, status, headers, config) {
                return { "code": 1, "data": response };
            }, function (e) {
                return { "code": -1, "data": e };
            });
    }
    this.delete = function (_id) {
        return $http.delete("api/cats/" + _id, null)
            .then(function () {
                return { "code": 1 };
            }, function (e) {
                return { "code": -1, "data": e };
            });
    }
    this.update = function (_id, item) {
        return $http.put("api/cats/" + _id, item)
            .then(function (response) {
                return { "code": 1, "data": response };
            }, function (e) {
                return { "code": -1, "data": e };
            });
    }
}]);