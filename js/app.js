var app = angular.module('routeTest', ['ngNewRouter']);

app.config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true
        });
}]);

app.factory('apiCalls', function() {

    return{
        login: function(user){
            //this is super basic and is juts a placeholder for logic you would actually use
            console.log();
            return user.pass === 'testPass';
        }
    };

});

app.factory('UserInfo', function() {
    var user = {
        email: '',
        name: '',
        pass: '',
        type: ''
    };

    return{
        update: function(newUser) {
            user.email = newUser.email;
            user.name = newUser.name;
            user.pass = newUser.pass;
            user.type = newUser.type;
            return true;
        },
        getUser: function() {
            return user;
        }
    };
});

app.controller('SiteCtrl',['$router', function($router){

    $router.config([
        {
            path:'/index.html',
            redirectTo: '/route1'
        },
        {
            path: '/',
            redirectTo: '/route1'
        },
        {
            path: '/route1',
            component: 'route1'

        },
        {
            path: '/route2',
            component: 'route2'
        },
        {
            path: '/route3',
            component: 'route3'
        }
        ]);





    this.user = {
        email: "test@test.com",
        name: "Johnny",
        pass: "PaSsWoRd",
        type: '',
    };

}]);

app.controller('Route1Controller',['UserInfo', function(UserInfo){

    this.user = {
        name: '',
        email: '',
        pass: '',
        type: ''
    };

    this.canDeactivate = function(){
        return UserInfo.update(this.user);
    };

    this.dataSet = {
        string: 'some data here',
        string2: 'smore more data'
    };
}]);

app.controller('Route2Controller', ['apiCalls', 'UserInfo', function(apiCalls, UserInfo){

    this.canActivate = function(){
        console.log(UserInfo.getUser());
        return apiCalls.login(UserInfo.getUser());
    };

    this.dataSet = {
        string: 'different data',
        string2: 'more different data'
    };
}]);

app.controller('Route3Controller', function(){
    this.dataSet = {
        string: 'afbweukbhfaskjbfa',
        string2: 'SLKJDFNHE'
    };
});
