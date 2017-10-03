export default angular.module('app.vendor.config', [])
    .config(vendorConfig)
    .name;

function vendorConfig($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/vendor/home-page');
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}