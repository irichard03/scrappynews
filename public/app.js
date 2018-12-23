$(function(){
    console.log("jquery loaded");

    $("#scraper").click(function(event){
        event.preventDefault();
        console.log("button clicked");

        $.ajax({
            method: "GET",
            url: "/scraper"
        }).then(function(data){
            console.log(data);
        });
    });
});

