(function() {
    'use strict';

    angular
        .module('doleticApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$scope', 'ModalService'];

    function NavbarController($scope, ModalService) {

        $scope.showAbout = function() {
            ModalService.showModal({
                templateUrl: "app/components/navbar/about-modal/about-modal.template.html",
                controller: "AboutModalController"
            }).then(function(modal) {
                console.log(modal);
                $('#about_doletic_modal').modal('show');
            }).catch(function(error) {
                // error contains a detailed error message.
                console.log(error);
            });
        };

        $scope.showSettingsModal = function() {
            ModalService.showModal({
                templateUrl: "app/components/navbar/settings-modal/settings-modal.template.html",
                controller: "SettingsModalController"
            }).then(function(modal) {
                console.log(modal);
                $('#settings_modal').modal('show');
            }).catch(function(error) {
                // error contains a detailed error message.
                console.log(error);
            });
        };
    }
})();
