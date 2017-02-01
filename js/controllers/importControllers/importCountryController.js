app.controller('importCountryController', function ($scope, $timeout, $cookies, dataTableService, accountService, appService, countryService) {
    $scope.clear = function () {
        $scope.countries = [];
        $scope.dataTable.clear();
        $scope.dataTable.rows.add($scope.countries).draw();
    }
    $scope.save = function () {

        countryService.saveMany($scope.countries).then(
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
                $scope.countries = oJS;
                console.log(oJS)
            });

            for (var i = 0; i < $scope.countries.length; i++) {
                console.log($scope.countries[i].x_code);
            }
            $scope.dataTable.rows.add($scope.countries).draw();
        };

        reader.readAsBinaryString($file);
    }

    $scope.countries = [];
    $scope.table = $('#importCountryTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'code'},
            {data: 'name'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });


    $('#importCountryModal').on('show.bs.modal', function () {
    })
});
