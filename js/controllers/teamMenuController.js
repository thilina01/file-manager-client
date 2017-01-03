app.controller('teamMenuController', function ($scope, $timeout, $cookies, menuService, teamService, teamMenuService) {

    var defaultData = [
        {
            text: 'Parent 1',
            href: '#parent1',
            tags: ['4'],
            nodes: [
                {
                    text: 'Child 1',
                    href: '#child1',
                    tags: ['2'],
                    nodes: [
                        {
                            text: 'Grandchild 1',
                            href: '#grandchild1',
                            tags: ['0']
                        },
                        {
                            text: 'Grandchild 2',
                            href: '#grandchild2',
                            tags: ['0']
                        }
                    ]
                },
                {
                    text: 'Child 2',
                    href: '#child2',
                    tags: ['0']
                }
            ]
        },
        {
            text: 'Parent 2',
            href: '#parent2',
            tags: ['0']
        },
        {
            text: 'Parent 3',
            href: '#parent3',
            tags: ['0'],
            state: {
                selected: true
            }
        },
        {
            text: 'Parent 4',
            href: '#parent4',
            tags: ['0'],
            state: {
                selected: true
            }
        },
        {
            text: 'Parent 5',
            href: '#parent5',
            tags: ['0']
        }
    ];

    $scope.saveButtonText = 'Save';
    $scope.save = function () {
        var selectedNodes = [];
        var teamMenuList = [];
        selectedNodes = $('#treeview1').treeview('getSelected');
        selectedNodes.forEach(function (item, index) {
            teamMenuList.push({team: $scope.team, menu: item.item});
        });
        teamMenuService.editMany(teamMenuList);
        $scope.team = {};
        $scope.menus = [];
        $scope.treeData = [];
        $scope.loadTeams();
    }
    $scope.menus = [];
    $scope.team = {};
    $scope.treeData = [];
    $scope.onTeamChanged = function () {
        $scope.loadMenus();
    }
    $scope.loadMenus = function () {
        menuService.getTopMenus().then(function (response) {
            $scope.treeData = [];
            $scope.menus = response.data;
            $scope.menus.forEach(function (item, index) {
                //console.log(item.name);
                var nodes = []
                if (item.menuList != null) {
                    item.menuList.forEach(function (item, index) {
                        var subNodes = []
                        if (item.menuList != null) {
                            item.menuList.forEach(function (item, index) {
                                var node = {text: item.name, item: item};
                                subNodes.push(node);
                            });
                        }
                        var node = {text: item.name, nodes: subNodes, item: item};
                        nodes.push(node);
                    });
                }
                var node = {text: item.name, nodes: nodes, item: item};
                $scope.treeData.push(node);
            });
            $('#treeview1').treeview({
                color: "#428bca",
                expandIcon: 'glyphicon glyphicon-chevron-right',
                collapseIcon: 'glyphicon glyphicon-chevron-down',
                data: $scope.treeData,
                multiSelect: true
            });
            $('#treeview1').treeview('collapseAll', {silent: true});

            var nodes = $('#treeview1').treeview('getUnselected');
            nodes.forEach(function (itemX, index) {
                $scope.team.teamMenuList.forEach(function (itemY, index) {
                    if (itemY.menu.id == itemX.item.id) {
                        $('#treeview1').treeview('selectNode', [itemX.nodeId, {silent: true}]);
                    }
                });
            });
        });
    }
    $scope.teams = [];
    $scope.loadTeams = function () {
        teamService.getAll().then(function (response) {
            $scope.teams = response.data;
        })
    }

    $('#teamMenuModal').on('show.bs.modal', function () {
        $scope.loadTeams();
        // console.log($scope.menus);

    })
});
