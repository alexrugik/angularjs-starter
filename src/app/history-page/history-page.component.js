import HistoryPageTemplate from './history-page.template.html';

/* @ngInject */
class HistoryPageController {
    constructor() {
    }

    $onInit() {

    }

    $onDestroy() {
    }
}

export default angular.module('app.history-page', [])
    .component('appHistoryPage', {
        template: HistoryPageTemplate,
        controller: HistoryPageController,
        controllerAs: '$ctrl',
        bindings: {}
    })
    .name;