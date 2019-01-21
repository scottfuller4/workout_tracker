const App = {};

$(function () {
    App.init();
});

App.init = function () {
    App.getData();
}

App.getData = function () {
    $.ajax({
        url: `https://wger.de/api/v2/exercise`,
        method: 'GET'
    }).then(res => {
        console.log('hello', res);
    })
}