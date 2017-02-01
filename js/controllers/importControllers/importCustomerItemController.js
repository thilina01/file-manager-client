app.controller('importCustomerItemController', function ($scope, $timeout, $cookies, dataTableService, accountService, appService, customerItemService) {
    $scope.clear = function () {
        $scope.customerItems = [];
        $scope.dataTable.clear();
        $scope.dataTable.rows.add($scope.customerItems).draw();
    }
    $scope.save = function () {

        customerItemService.saveMany($scope.customerItems).then(
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
                $scope.customerItems = oJS;
                console.log(oJS)
            });

            for (var i = 0; i < $scope.customerItems.length; i++) {
                
                var customer_code = $scope.customerItems[i].customer_code;
                var item_code = $scope.customerItems[i].item_code;
                 $scope.customerItems[i].customer = {code: customer_code};
                $scope.customerItems[i].item = {code: item_code};
            }
            $scope.dataTable.rows.add($scope.customerItems).draw();
        };

        reader.readAsBinaryString($file);
    }

    $scope.customerItems = [];
    $scope.table = $('#importCustomerItemTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
             {data: 'customer.code'},
            {data: 'customerPartNo'},
            {data: 'item.code'}

        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });


    $('#importCustomerItemModal').on('show.bs.modal', function () {
    })
});
