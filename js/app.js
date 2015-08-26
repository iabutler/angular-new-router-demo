var app = angular.module('routeTest', ['ngNewRouter']);

app.config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true
        });
    }]);

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
    $router.default

    this.user = {
        name: "Johnny",
        pass: "PaSsWoRd",
        type: "school"
    };
}]);

app.controller('Route1Controller', function(){
    console.log("Loaded Controller 1");
    this.dataSet = {
        string: 'some data here',
        string2: 'smore more data'
    };
});

app.controller('Route2Controller', function(){
    this.dataSet = {
        string: 'different data',
        string2: 'more different data'
    };
});

app.controller('Route3Controller', function(){
    this.dataSet = {
        string: 'afbweukbhfaskjbfa',
        string2: 'SLKJDFNHE'
    };
});
