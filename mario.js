
//drawPyramid(10);

drawPyramid(10);

function determineHeightAndThenDrawPyramid() {

    var heightStr = document.getElementById("heightRange").value;
    // just so we know we're here
    //console.log("someone invoked the determineHeightAndThenDrawPyramid function!");

    // here we convert the string to an int
    height = parseInt(heightStr);
    //console.log(height)

    // draw the pyramid with the given height
    drawPyramid(height)
}

function drawPyramid(height) {

    document.getElementById("pyramid").innerHTML = "";
    // TODO 2
    // delete the "under construction" element, ie the <div id="notice">
    var pyramidDiv = document.getElementById("pyramid");

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            rowStr += "."; // QUIZ: what happens if we use a space (" ") instead of a period?
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

        // create a text element with the string of characters
        textElem = document.createTextNode(rowStr);

        // create a <p> element with the text inside
        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
