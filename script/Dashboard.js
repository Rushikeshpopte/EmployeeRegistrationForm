$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/employees",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        // data:JSON.stringify(req),
        success: function (response) {
            console.log(response);
            $("tbody").empty();
            console.log(response);
            var icon = document.createElement('td');
            icon.className = "fa fa-trash";
            icon.append(DetailsTbody);

            var DetailsTbody = "";
            for (var i = 0; i < response.length; i++) {
                DetailsTbody += '<tr>';
                DetailsTbody += '<td>' + response[i].name + '</td>';
                DetailsTbody += '<td>' + response[i].gender + '</td>';
                DetailsTbody += '<td>' + response[i].department + '</td>';
                DetailsTbody += '<td>' + response[i].salary + '</td>';
                DetailsTbody += '<td>' + response[i].startDate + '</td>';

                var button = $('<input type=button onclick="DeleteDetails(this);" />')



                // var node = document.createElement(elemen.tag);
                // node.innerHTML = elemen.content;

                // var button = $('<input type="button" value="delet"/>').click(DeleteDetails)
                button.addClass("fa fa-trash")
                // button.onclick=DeleteDetails;
                var editicon = $('<i "onclick=DeleteDetails(this);"><i/>')
                editicon.addClass("fa fa-pen")
                // var deleticon = button.innerHTML
                DetailsTbody += '<td>' + button.get(0).outerHTML + " " + editicon.get(0).outerHTML + '</td>';


                // button.appendTo($("tbody"))


            };
            $("tbody").append(DetailsTbody);


        },
        failure: function (response) {
            alert(response.responseText);
            alert("Failure");
        },
        error: function (response) {
            alert(response);
            alert("Error");
        }
    });

    function DeleteDetails() {
        console.log("hello")
        $.ajax({
            type: "DELETE",
            url: "http://localhost:3000/employees/19",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                console.log(response);
            }
        })
    };

    function UpdateDetails() {
        console.log("hello")
        $.ajax({
            type: "PUT",
            url: "http://localhost:3000/employees/1",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                console.log(response);
            }
        })
    };

    function AddDetails() {
        console.log("hello")
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/employees/1",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                console.log(response);
            }
        })
    };

});

// DetailsTbody += <td> <a></a></td>;

// DetailsTbody += '<td>' + icon.append(<i class="fa fa tras"></i>) + '</td>' ;



// var button = $('<input/>').attr({

//     type : "button",
//     value : "Delet",

// })
// button.addEventListener ("click" , DeleteDetails);

// button.appendTo($("tbody"));