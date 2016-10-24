
app.service('dataTableService', function ($http, appService) {
    this.getRowSelector = function (dataTable) {
        return function () {
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
            } else {
                dataTable.$('tr.selected').removeClass('selected');
                $(this).addClass('selected');
            }
        }
    }

    this.getButtons = function (editFunction, deleteFunction) {
        return [{
                extend: 'pageLength',
                text: '<i class="fa fa-arrows-v"></i>',
                titleAttr: 'Page Length',
                className: 'btn-info'
            }, {
                extend: 'colvis',
                text: '<i class="fa fa-eye-slash"></i>',
                titleAttr: 'Columns',
                className: 'btn-info'
            }, {
                extend: 'copyHtml5',
                text: '<i class="fa fa-files-o"></i>',
                titleAttr: 'Copy',
                exportOptions: {
                    columns: ':visible'
                },
                className: 'btn-info'
            },
            {
                extend: 'excelHtml5',
                text: '<i class="fa fa-file-excel-o"></i>',
                titleAttr: 'Excel',
                exportOptions: {
                    columns: ':visible'
                },
                className: 'btn-info'
            },
            {
                extend: 'csvHtml5',
                text: '<i class="fa fa-file-text-o"></i>',
                titleAttr: 'CSV',
                exportOptions: {
                    columns: ':visible'
                },
                className: 'btn-info'
            },
            {
                extend: 'pdfHtml5',
                text: '<i class="fa fa-file-pdf-o"></i>',
                titleAttr: 'PDF',
                exportOptions: {
                    columns: ':visible'
                },
                className: 'btn-info'
            },
            {
                extend: 'print',
                text: '<i class="fa fa-print"></i>',
                titleAttr: 'Print',
                exportOptions: {
                    columns: ':visible'
                },
                className: 'btn-info'
            }, {
                text: '<i class="fa fa-pencil-square-o"></i>',
                action: function (e, dt, node, conf) {
                    editFunction();
                },
                titleAttr: 'Edit',
                className: 'btn-info'
            }, {
                text: '<i class="fa fa-trash-o"></i>',
                action: function (e, dt, node, conf) {
                    deleteFunction();
                },
                titleAttr: 'Delete',
                className: 'btn-info'
            }];
    }
});