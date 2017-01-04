app.controller('menuGridController', function ($http, $scope, $cookies, menuService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            menuService.toEdit = $scope.dataTable.row('.selected').data();
            $('#menuGridModal').modal('hide');
            $('#menuModal').modal('show');
        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            menuService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.menus = '';
    $scope.table = $('#menuTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'name'},
            {data: 'menu.name'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });

    $scope.loadMenus = function () {
        $scope.dataTable.clear();
        menuService.getMenusWithParent().then(function (response) {
            $scope.menus = response.data;
            $scope.dataTable.rows.add($scope.menus).draw();
        });
    }

    $scope.table.on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            $scope.dataTable.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
        var rowData = $scope.dataTable.row('.selected').data();
        if (rowData != undefined) {
            if (rowData.target != '') {
                $('#menuGridModal').modal('hide');
                $(rowData.target).modal('show');
            }
        }/**/
    });

    $('#menuGridModal').on('show.bs.modal', function () {
        $scope.loadMenus();
    });
    $('#menuGridModal').on('shown.bs.modal', function () {
        $('div.dataTables_filter input').focus();
    });
    $('#menuGridModal').on('hidden.bs.modal', function () {
    });

});