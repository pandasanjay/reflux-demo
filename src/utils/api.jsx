var Fetch = require("whatwg-fetch");

var baseUrl = "https://laravel-test-project-pandasanjay.c9users.io:8081";


module.exports = {
    get: function(url){
        return fetch(baseUrl + url)
                .then(function(res){
                    return res.json();
                })
    }
}