/**
 * Created by Administrator on 2017/4/12.
 */
angular.module("app")
    .controller("click",function($scope){
        $scope.txt = 1;
        $scope.del = function () {
            console.log(1)
        }
    })
