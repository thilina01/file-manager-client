
app.controller('menuController', function ($scope, menuService) {
    $scope.menusToAdd = [
        {name: 'DMS', target: '', href: '#/dms'},
        {name: 'Planning', target: '', href: '#/kpi', menuList: [
                {name: 'Planning', target: '#controlPointPlanModal', href: ''}
            ]},
        {name: 'Production', target: '', href: '#/kpi', menuList: [
                {name: 'Production', target: '#controlPointRunModal', href: ''},
                {name: 'Energy', target: '#energyModal', href: ''},
                {name: 'Delivery', target: '#deliveryModal', href: ''}
            ]},
        {name: 'Grids', target: '', href: '#/kpi', menuList: [
                {name: 'Control Point', target: '#controlPointGridModal', href: ''},
                {name: 'Customer', target: '#customerGridModal', href: ''},
                {name: 'Loss Type', target: '#lossTypeGridModal', href: ''},
                {name: 'Loss Reason', target: '#lossReasonGridModal', href: ''},
                {name: 'Machine', target: '#machineGridModal', href: ''},
                {name: 'Item', target: '#itemGridModal', href: ''},
                {name: 'Item Type', target: '#itemTypeGridModal', href: ''},
                {name: 'Manpower Type', target: '#manpowerTypeGridModal', href: ''},
                {name: 'Section', target: '#sectionGridModal', href: ''},
                {name: 'Work Center', target: '#workCenterGridModal', href: ''},
                {name: 'Shift', target: '#shiftGridModal', href: ''},
                {name: 'Currency', target: '#currencyGridModal', href: ''},
                {name: 'Incoterm', target: '#incotermGridModal', href: ''},
                {name: 'Country', target: '#countryGridModal', href: ''},
                {name: 'Cost Center', target: '#costCenterGridModal', href: ''},
                {name: 'Sale Type', target: '#saleTypeGridModal', href: ''},
                {name: 'Paint', target: '#paintGridModal', href: ''},
                {name: 'Job', target: '#jobGridModal', href: ''},
                {name: 'Sales Order', target: '#salesOrderGridModal', href: ''},
                {name: 'Sales Order Type', target: '#salesOrderTypeGridModal', href: ''},
                {name: 'Customer Item', target: '#customerItemGridModal', href: ''},
                {name: 'Sales Order Item', target: '#salesOrderItemGridModal', href: ''},
                {name: 'Delivery', target: '#deliveryGridModal', href: ''},
                {name: 'Energy', target: '#energyGridModal', href: ''},
                {name: 'Job Type', target: '#jobTypeGridModal', href: ''},
                {name: 'Item Machine', target: '#itemMachineGridModal', href: ''},
                {name: 'Control point Activity', target: '#controlPointRunGridModal', href: ''},
                {name: 'Control point Job', target: '#controlPointRunJobGridModal', href: ''},
                {name: 'Control point Loss', target: '#controlPointRunLossGridModal', href: ''},
                {name: 'Control point Run Manpower', target: '#controlPointRunManpowerGridModal', href: ''},
                {name: 'Control point Plan Manpower', target: '#controlPointPlanManpowerGridModal', href: ''},
                {name: 'Control point Plan Job', target: '#controlPointPlanJobGridModal', href: ''},
                {name: 'Customer Job', target: '#customerJobGridModal', href: ''},
                {name: 'Control Point Run Breakdown', target: '#controlPointRunBreakdownGridModal', href: ''},
                {name: 'Dispatch', target: '#jobDispatchGridModal', href: ''}
            ]},
        {name: 'Import', target: '', href: '#/kpi', menuList: [
                {name: 'Country', target: '#importCountryModal', href: ''},
                {name: 'Item', target: '#importItemModal', href: ''},
                {name: 'Paint', target: '#importPaintModal', href: ''},
                {name: 'Customer', target: '#importCustomerModal', href: ''},
                {name: 'Item Type', target: '#importItemTypeModal', href: ''},
                {name: 'Machine', target: '#importMachineModal', href: ''},
                {name: 'Section', target: '#importSectionModal', href: ''},
                {name: 'Cost Center', target: '#importCostCenterModal', href: ''},
                {name: 'Work Center', target: '#importWorkCenterModal', href: ''},
                {name: 'Control Point', target: '#importControlPointModal', href: ''},
                {name: 'Job', target: '#importJobModal', href: ''},
                {name: 'Control Point Run', target: '#importControlPointRunModal', href: ''},
                {name: 'Loss Reason', target: '#importLossReasonModal', href: ''},
                {name: 'Customer Item', target: '#importCustomerItemModal', href: ''},
                {name: 'Customer Job', target: '#importCustomerJobModal', href: ''}
            ]},
        {name: 'Admin', target: '', href: '#/kpi', menuList: [
                {name: 'user', target: '#userGridModal', href: ''},
                {name: 'Team Menu', target: '#teamMenuModal', href: ''},
                {name: 'Team Form', target: '#teamModal', href: ''},
                {name: 'Team Grid', target: '#teamGridModal', href: ''}
            ]}
    ];
    menuService.saveMany($scope.menusToAdd).then(
            function (response) {
                $scope.reloadApp();
            },
            function (response) {
            }
    );
});