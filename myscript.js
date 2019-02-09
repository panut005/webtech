$(document).ready(function() 
{
    $('#advance-search').hide();

    $('#advance-btn').click(function(){
        $('#advance-search').toggle();
    });
    $.ajax({url: "data.json",dataType: "json"}).done(function(response) 
    {
        console.log(response);
        var t= "";
        response.forEach(element => 
        {
            console.log(element.name, element.size, element.radius, element.material, element.price);
            t += "<tr>"+
            "<td>"+element.name+"</td>"+
            "<td>"+element.size+"</td>"+
            "<td>"+element.radius+"</td>"+
            "<td>"+element.material+"</td>"+
            "<td>"+element.price+"</td>";
            $('#table').html(t);
        });
    });
    // $.ajax({
    //     url: "data.json",
    //     dataType: "json"
    //     }).done(function(response) {
    //         var data = response;
    //         var x = "";
    //         var name =[];
    //         for(var i = 0;i < data.length;i++){
    //             if(jQuery.inArray(data[i].name,name) ==-1){
    //                 name.push(data[i].name);
    //                 x +="<option>"+data[i].name+"</option>";
    //             }
    //         }
    //         $('#name-selector').html(x);
    //     }
    // );
});

$('#submit-btn').click(function() {
    $.ajax({
        url: "data.json",
        dataType: "json"
    }).done(function(response) {
        console.log(response);
        var t= "";
        var check = false;
        $('p#warning').text("");
        response.forEach(element => {
            if(element.name.toLowerCase().includes($('#input-text').val().toLowerCase())){
                console.log(element.name, element.size, element.radius, element.material, element.price);
                check = true;
            t += "<tr>"+
            "<td>"+element.name+"</td>"+
            "<td>"+element.size+"</td>"+
            "<td>"+element.radius+"</td>"+
            "<td>"+element.material+"</td>"+
            "<td>"+element.price+"</td>";
            $('#table').html(t);
            $('h3#warning').text("");
            }
            else{
                $('h3#warning').text("Information not found!!!");

            }
        });
    });
});




$('#medium-btn').click(function(){
    $.ajax({
        url: "data.json",
        dataType: "json"
    }).done(function(response) {
        console.log(response);
        var t= "";
        response.forEach(element => {
            if(element.size.includes("MEDIUM")){
                console.log(element.name, element.size, element.radius, element.material, element.price);
            t += "<tr>"+
            "<td>"+element.name+"</td>"+
            "<td>"+element.size+"</td>"+
            "<td>"+element.radius+"</td>"+
            "<td>"+element.material+"</td>"+
            "<td>"+element.price+"</td>";
            $('#table').html(t);
            $('h3#warning').text("");
            }
        });
    });
});

$('#large-btn').click(function(){
    $.ajax({
        url: "data.json",
        dataType: "json"
    }).done(function(response) {
        console.log(response);
        var t= "";
        response.forEach(element => {
            if(element.size.includes("LARGE")){
                console.log(element.name, element.size, element.radius, element.material, element.price);
            t += "<tr>"+
            "<td>"+element.name+"</td>"+
            "<td>"+element.size+"</td>"+
            "<td>"+element.radius+"</td>"+
            "<td>"+element.material+"</td>"+
            "<td>"+element.price+"</td>";
            $('#table').html(t);
            $('h3#warning').text("");
            }
        });
    });
});

$('#oystersteel-btn').click(function(){
    $.ajax({
        url: "data.json",
        dataType: "json"
    }).done(function(response) {
        console.log(response);
        var t= "";
        response.forEach(element => {
            if(element.material.includes("OYSTERSTEEL")){
                console.log(element.name, element.size, element.radius, element.material, element.price);
            t += "<tr>"+
            "<td>"+element.name+"</td>"+
            "<td>"+element.size+"</td>"+
            "<td>"+element.radius+"</td>"+
            "<td>"+element.material+"</td>"+
            "<td>"+element.price+"</td>";
            $('#table').html(t);
            $('h3#warning').text("");
            }
        });
    });
});

$('#gold-btn').click(function(){
    $.ajax({
        url: "data.json",
        dataType: "json"
    }).done(function(response) {
        console.log(response);
        var t= "";
        response.forEach(element => {
            if(element.material.includes("GOLD")){
                console.log(element.name, element.size, element.radius, element.material, element.price);
            t += "<tr>"+
            "<td>"+element.name+"</td>"+
            "<td>"+element.size+"</td>"+
            "<td>"+element.radius+"</td>"+
            "<td>"+element.material+"</td>"+
            "<td>"+element.price+"</td>";
            $('#table').html(t);
            $('h3#warning').text("");
            }
        });
    });
});

$('#advance-btn-search').click(function(){
    $.ajax({
        url: "data.json",
        dataType: "json"
    }).done(function(response) {
        var data = response;
        var t= "";
        var check = false;
        $('p#warning').text("");
        response.forEach(element => {
            if(element.name.toLowerCase().includes($('#name-adsearch').val().toLowerCase()) && 
            element.size.toLowerCase().includes($('#size-adsearch').val().toLowerCase()) &&
            element.radius<=parseInt($('#radius-adsearch').val()) &&
            element.material.toLowerCase().includes($('#material-adsearch').val().toLowerCase()) &&
            element.price<=parseInt($('#price-adsearch').val())){
                console.log(element.name, element.size, element.radius, element.material, element.price);
                check = true;
            t += "<tr>"+
            "<td>"+element.name+"</td>"+
            "<td>"+element.size+"</td>"+
            "<td>"+element.radius+"</td>"+
            "<td>"+element.material+"</td>"+
            "<td>"+element.price+"</td>";
            $('#table').html(t);
            $('h3#warning').text("");
            }
        });
        if(check==false){
            $('h3#warning').text("Information not found!!!");

        }
    });
});