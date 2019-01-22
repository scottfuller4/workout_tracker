const App = {};
App.apiKey = `4d8caf10dccace6d053c0c4de1a0dcb50297adf1`;

$(function () {
    App.init();
});

App.init = function () {
    // App.getMuscleGroup();
}

App.getMuscleGroup = function () {
    $('#muscleGroup').on('submit', function (e) {
        e.preventDefault();
        const muscle = $("#muscleGroup option:selected").val();
        console.log(muscle);
    });
}

App.getData = function () {
    $.ajax({
        url: `https://wger.de/api/v2/exercise/?status=2`,
        method: 'GET'
    }).then(res => {
        console.log('hello');
        console.log(res);
    })
}