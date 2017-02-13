(function () {
    'use strict';

    angular
        .module('doleticApp')
        .controller('grcFirmTabController', grcFirmTabController);

    grcFirmTabController.$inject = ['$scope', 'ModalService', 'FirmService'];

    function grcFirmTabController($scope, ModalService, FirmService) {

        $scope.firmService = FirmService;

        $scope.showFirmForm = function () {
            ModalService.showModal({
                templateUrl: "app/components/grc/firmTab/firm-form/firm-form.template.html",
                controller: "grcFirmFormController"
            }).then(function (modal) {
                console.log(modal);
                $('#firm_form_modal').modal('show');
            }).catch(function (error) {
                // error contains a detailed error message.
                console.log(error);
            });
        };

    }
})();