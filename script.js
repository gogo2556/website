alert("if you want to log in to the home page, press ok")
function information() {
    var name = info.name.value;
    var age = info.age.value;
    var Yourfavoriteplayer =info.Yourfavoriteplayer.value;
    document.writeln("<table>");
    document.writeln("<caption> <h3> information <h3></caption>");
    document.writeln(" <tr><td> <b>Name: </b></td> <td>"+name+"</td> </tr>");
    document.writeln(" <tr><td> <b>Age: </b></td> <td>"+age+"</td> </tr>");
    document.writeln(" <tr><td> <b>Your favorite player: </b></td> <td>"+Yourfavoriteplayer+"</td> </tr>");
    document.writeln("</table>");
}