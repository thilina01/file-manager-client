app.controller('sectionGridController', function ($http, $scope, $cookies, sectionService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            sectionService.toEdit = $scope.dataTable.row('.selected').data();
            $('#sectionGridModal').modal('hide');
            $('#sectionModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            sectionService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.sections = '';
    $scope.table = $('#sectionTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'code'},
            {data: 'name'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadSections = function () {
        $scope.dataTable.clear();
        sectionService.getAll().then(function (response) {
            $scope.sections = response.data;
            $scope.dataTable.rows.add($scope.sections).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#sectionGridModal').on('shown.bs.modal', function () {
        $scope.loadSections();
    })
    $('#sectionGridModal').on('hidden.bs.modal', function () {

    })

});
