app.controller('importOperationController', function ($scope, $timeout, $cookies, dataTableService, accountService, appService, operationService) {
    $scope.clear = function () {
        $scope.operations = [];
        $scope.dataTable.clear();
        $scope.dataTable.rows.add($scope.operations).draw();
    }
    $scope.save = function () {

        operationService.saveMany($scope.operations).then(
                function (response) {
                    if (response.data) {
                        $scope.showSuccess("saved");
                    }
                    $scope.clear();
                    $scope.reloadApp();
                    return response;
                },
                function (response) {
                    if (response.data) {
                        //alert(response.data);
                    }

                    $scope.showError("Unable to save");
                    return response;
                }
        );
    }
    $scope.setFile = function ($file) {
        //alert($file.name);
        $scope.aFile = $file;
        $scope.fileName = $file.name;
        //$log.info($file);

        // Get The File From The Input
        //var oFile = $file;
        var sFilename = $file.name;
        // Create A File Reader HTML5
        var reader = new FileReader();
        // Ready The Event For When A File Gets Selected
        reader.onload = function (e) {
            var data = e.target.result;


            /* if binary string, read with type 'binary' 
             var wb = XLSX.read(data, {type: 'binary'});*/

            var cfb = XLS.CFB.read(data, {type: 'binary'});
            var wb = XLS.parse_xlscfb(cfb);
            // Loop Over Each Sheet
            wb.SheetNames.forEach(function (sheetName) {
                // Obtain The Current Row As CSV
                //var sCSV = XLS.utils.make_csv(wb.Sheets[sheetName]);
                var oJS = XLS.utils.sheet_to_row_object_array(wb.Sheets[sheetName]);

                //$("#my_file_output").html(sCSV);
                $scope.operations = oJS;
                console.log(oJS)
            });

            for (var i = 0; i < $scope.operations.length; i++) {
                console.log($scope.operations[i].x_code);
            }
            $scope.dataTable.rows.add($scope.operations).draw();
        };

        reader.readAsBinaryString($file);
    }

    $scope.operations = [];
    $scope.table = $('#importOperationTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'code'},
            {data: 'description'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });


    $('#importOperationModal').on('show.bs.modal', function () {
    })
});
