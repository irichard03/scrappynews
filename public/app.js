$(function(){
    //scrape button, gets scraper route, initiates server scrape from htts://www.chron.com
    $("#scraper").click(function(event){
        event.preventDefault();
        $.ajax({
            method: "GET",
            url: "/scraper"
        }).then(
            function() {
            console.log("scraped");
            location.reload(true);
        });
    });

    $("#save").click(function(event){
        event.preventDefault();
        let rowID = $(this).attr("data-id");
        let newNote = {
            title: $("#title").val().trim(),
            note: $("#note").val().trim(),
        }
        $.ajax({
            method: "POST",
            url: "/api/addnote/" + rowID,
            data: newNote
        }).then(
            function() {
            location.reload(true);
        });
    });

    $("#delete").click(function(event){
        event.preventDefault();
        $("div").attr("data-id");x
        
    });

});

