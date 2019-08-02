/*
$(document).ready(function () {
    $('#btn').click(function (e) {
        /!*   let data = $('#one').val();
           console.log(data);*!/
        let root = "https://jsonplaceholder.typicode.com/posts";
        $.ajax(root, {
            dataType: "json",
            method: 'GET',
            success: function(response){
                console.log(response);
            }
        });
    });
});*/

function main(cuantity) {


function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}


$(function () {
    $("form").on("submit", function (e) {
        e.preventDefault();
        //prepare the request
        let request = gapi.client.youtube.search.list({
            part: " snippet",
            type: "video",
            q: encodeURIComponent($("#one").val()).replace(/%20/g, "+"),
            maxResults: cuantity,
            order: "viewCount",
        });
        //execute the request
        request.execute(function(response){
        let resaults = response.result;
        $.each(resaults.items, function (index, item) {
/*
            $("#results").append(item.id.videoId + " " + item.snippet.title + "<br>");
*/

            $.get("html/item.html", function (data) {
                $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
            });
        });
        });
        console.log("hello");
        $('#load').css('display', 'block')

    });
});

}

main(9);

$(document).on('click', '#load', function() {
/*    location.reload(true);
    setTimeout(, 2000);*/
    console.log("hello world");
});






/*$('.btn btn-success').on("click", function () {
    console.log("hello world");
});*/


function init() {
    gapi.client.setApiKey("AIzaSyBj2LATPZlV3jbk49QlQDvhToMnMQOha6Y");
    gapi.client.load("youtube", "v3", function () {
        //youtube api is ready
    })

}





/*        $('#results').after(function () {
            $(".two").append("<button id='load' class='btn btn-success'>Load More</button>")
        });*/


/*        setTimeout(function(){

        $(".two").append("<button id='load' class='btn btn-success'>Load More</button>")

        }, 1000);*/