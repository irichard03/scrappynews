$(function(){
    console.log("jquery loaded");

    //scrape button, gets scraper route, initiates server scrape from htts://www.chron.com
    $("#scraper").click(function(event){
        event.preventDefault();
        console.log("scraper button clicked");

        $.ajax({
            method: "GET",
            url: "/scraper"
        }).then(
            function() {
            console.log("scraped");
            location.reload(true);
        });
    });
});

