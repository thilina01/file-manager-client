
app.controller('kpiController', function ($scope, chartService) {

    $scope.func = function () {
        var elementId = 'attendance_chart_div';
        var dataArray = [
            ['CP', 'Comp', 'Cont', 'eee'],
            ['CP-32', 10, 4, 5],
            ['CP-33', 11, 6, 3],
            ['CP-34', 6, 11, 4],
            ['CP-35', 8, 10, 5]
        ];
        var options = {
            animation: {
                duration: 1000,
                easing: 'out',
                "startup": true
            },
            title: 'Attendance',
            hAxis: {
                title: 'Control Point',
                format: ''
            },
            vAxis: {
                title: ''
            }
        };
        chartService.draw(elementId, dataArray, options)
    }
});
