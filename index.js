$(function () {
    $("#btn").click(function () {
        //$("#show").empty();
        var city = $("#input").val();
      //  var namecity = "<h4><img id = 'picH' src='google-location-icon-16.png' alt=''><b>" + city + "</b></h4>";
      //  $("#show").append(namecity);
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city+ "&APPID=19d03cc3f591efe48845e090436f2bdc";
        $.get(url, function (data) {

            console.log(data);
            var name = "<p>"+data.name+"</p>";
            //var detail = "<table align = 'center'><tr><td><img class = 'font' src='" + picShow + "' alt=''></td></tr></table><table align = 'center'><tr><td width = '100%'><p id = 'text'><b>" + data.weather[0].description + "<b></p></td></tr></table>" + "<table>" + "<tr><td><img src='Celsius-icon.png' alt=''></td><td>" + (data.main.temp) / 10 + "</td></tr>" + "<tr><td><img src='1841-200.png' alt=''></td><td>" + data.main.pressure + " hPa</td></tr>" + "<tr><td><img src='219816.png' alt=''></td><td>" + data.main.humidity + " %</td></tr></table>";
            $("#loca").append(name);

            var temps = "<p>"+(data.main.temp/10).toFixed(2)+"<sup>o</sup>C</p>";
            $("#hub").append(temps);

            var ban = "<h2>humidity : "+data.main.humidity+"</h2>";
            $("#op").append(ban);

            var win = "<h2>wind deg : "+data.wind.deg+"</h2>";
            $("#ok").append(win);

            var des = "<h2>description : "+data.weather[0].description+"</h2>";
            $("#do").append(des);


        });
    });
});
