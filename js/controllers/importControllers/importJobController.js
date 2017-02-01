app.controller('importJobController', function ($scope, $timeout, $cookies, dataTableService, accountService, appService, jobService) {
    $scope.clear = function () {
        $scope.jobs = [];
        $scope.dataTable.clear();
        $scope.dataTable.rows.add($scope.jobs).draw();
    }
    $scope.save = function () {

        jobService.saveMany($scope.jobs).then(
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
                $scope.jobs = oJS;
                console.log(oJS)
            });

            for (var i = 0; i < $scope.jobs.length; i++) {
                var item_code = $scope.jobs[i].item_code;
                var jobType_code = $scope.jobs[i].jobType_code;
                /*console.log(jobType_type);
                 console.log(paint_code);
                 console.log(paint_description);*/
                $scope.jobs[i].item = {code: item_code};
                $scope.jobs[i].jobType = {code: jobType_code};
            }
            $scope.dataTable.rows.add($scope.jobs).draw();
        };

        reader.readAsBinaryString($file);
    }

    $scope.jobs = [];
    $scope.table = $('#importJobTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'jobNo'},
            {data: 'jobDate'},
            {data: 'quantity'},
            {data: 'item.code'},
            {data: 'jobType.code'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });


    $('#importJobModal').on('show.bs.modal', function () {
    })
});
