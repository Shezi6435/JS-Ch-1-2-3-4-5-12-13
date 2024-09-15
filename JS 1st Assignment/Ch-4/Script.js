  let var1 = "Variable 1", var2 = "Variable 2", var3 = "Variable 3";
        
  let legalNames = ["myVariable", "var_1", "$amount", "_name", "variableName"];
  let illegalNames = ["1stVariable", "my-Variable", "var name", "if", "let"];
        
  console.log("Legal Variable Names: ", legalNames);
  console.log("Illegal Variable Names: ", illegalNames);



document.write("<b>Rules for naming JS variables!<br> <hr>");

document.write("(a) Variable names can only contain letters, numbers, dollar signs, and underscores. For example $my_1stVariable<br>");
document.write("(b) Variables must begin with a $, _ or name. For example $name, _name or name<br>");
document.write("Variable names should not be JS keywords <br>");
