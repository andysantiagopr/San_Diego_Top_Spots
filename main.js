$(document).ready(function() {
    $.getJSON('data.json', function (spots) {
        spots.forEach(spot => {

            const row = $('<tr>'); //This line simply creates the element tr. 
            const nameCell = $('<td>').text(spot.name); //This line creates the element and the .text add the text inside it.
            const descCell = $('<td>').text(spot.description); //Same as above.

            const lat = spot.location[0]; //Storing the latitute from the obj.
            const lng = spot.location[1]; //Storing the longitude from the obj. 

            const mapLink = $("<a>") //Creates the anchor element with Jquery. 
                .attr("href", `https://www.google.com/maps?q=${lat},${lng}`) //Constructed a dynamic link using template literals and query parameter key to insert lat and lng values into the link. 
                .attr("target", "_blank") //Helps to open the page on a new tab. 
                .addClass("link-button")
                .text("Open in Google Maps"); //Creates the text for the anchor element.

            //In HTML it would look like this: <a href="https://www.google.com/maps?q=${lat},${lng}" target="_blank">Open in Google Maps>.

            const linkCell = $("<td>").append(mapLink); //Creates element td and adding the link with .append(). Cannot use .text() because it will return [a, b] instead of the link. 

            row.append(nameCell, descCell, linkCell);

            $("#spots-table tbody").append(row);
            
        })
    })
});
