app.controller('jobGridController', function ($http, $scope, $cookies, jobService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            jobService.toEdit = $scope.dataTable.row('.selected').data();
            $('#jobGridModal').modal('hide');
            $('#jobModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            jobService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.jobs = '';
    $scope.table = $('#jobTable');
    $scope.dataTable = $scope.table.DataTable({

        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadJobs = function () {
        $scope.dataTable.clear();
        jobService.getAll().then(function (response) {
            $scope.jobs = response.data;
            $scope.dataTable.rows.add($scope.jobs).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#jobGridModal').on('show.bs.modal', function () {
        $scope.loadJobs();
    })
    $('#jobGridModal').on('hidden.bs.modal', function () {
       
    })

});
