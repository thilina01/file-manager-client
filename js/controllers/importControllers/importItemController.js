app.controller('importItemController', function ($scope, $timeout, $cookies, dataTableService, accountService, appService, itemService) {
    $scope.clear = function () {
        $scope.items = [];
        $scope.dataTable.clear();
        $scope.dataTable.rows.add($scope.items).draw();
    }
    $scope.save = function () {

        itemService.saveMany($scope.items).then(
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
                        alert(response.data);
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
                $scope.items = oJS;
                console.log(oJS)
            });

            for (var i = 0; i < $scope.items.length; i++) {
                var itemType_type = $scope.items[i].itemType_type;
                var paint_code = $scope.items[i].paint_code;
                var paint_description = $scope.items[i].paint_description;
                /*console.log(itemType_type);
                 console.log(paint_code);
                 console.log(paint_description);*/
                $scope.items[i].itemType = {type: itemType_type};
                $scope.items[i].paint = {code: paint_code, description: paint_description};
            }
            $scope.dataTable.rows.add($scope.items).draw();
        };

        reader.readAsBinaryString($file);
    }

    $scope.items = [];
    $scope.table = $('#importItemTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'code'},
            {data: 'description'},
            {data: 'drawingVersion'},
            {data: 'size'},
            {data: 'volume'},
            {data: 'weight'},
            {data: 'itemType.type'},
            {data: 'paint.code'},
            {data: 'paint.description'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });


    $('#importCountryModal').on('show.bs.modal', function () {
    })
});
