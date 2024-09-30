 //  Question :- Must to have
// color the text of p tag having id 'para1' by inline-styling.
// Define a button with text 'color the paragraph'(case-Insensitive), which on click invokes a method named as 'addTextColor'.
// Use orangered color to color the paragraph text.
// Functionality tested
// addTextColor method will color the text of p tag having id 'para2'.  

 // SOLUTION -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color Text</title>
</head>
<body>
    <h1>Color the paragraph text.</h1><br />
    <p id="para1" style="color:orangered;">Hi, I am paragraph. color me by inline-styling.</p>

    <p id="para2">Hi, I am paragraph. color me by Javascript.</p>

    <!-- create a button here --><button style="margin:4px" onClick="addTextColor()">
        color the Paragraph
    </button>
    <script>
        function addTextColor(){
            let para2 = document.getElementById('para2');
            para2.style.color="orangered";
        }
    </script>
</body>
</html>
