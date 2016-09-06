var work = {
  "c": [
    {"Name":"Real Calculator", "ID":"RC", "Size":"1.08 KB", "Link":"https://gist.github.com/midhruvjaink/a45607b8491b520e132084c23b83a4c8.js" },
    {"Name":"Factorial Using Recursion", "ID":"FactRecur", "Size":"184 Bytes", "Link":"https://gist.github.com/midhruvjaink/6391d4ac096a671da47699567c738d5e.js"},
    {"Name":"Table", "ID":"Table", "Size":"259 Bytes", "Link":"https://gist.github.com/midhruvjaink/b0ce555c46c0082630e6b55a14fead6a.js"},
    {"Name":"Stock Market", "ID":"stockMarket", "Size":"208 Bytes", "Link":"https://gist.github.com/midhruvjaink/92b742f839a6c762cd470d60de3c1da4.js"},
    {"Name":"Random Number Generator", "ID":"randNumb", "Size":"222 Bytes", "Link":"https://gist.github.com/midhruvjaink/881f30d6ff039dbd753d41c6c3a7ab10.js"},
    {"Name":"Using Private Class Using Public", "ID":"privatethruPublic", "Size":"279 Bytes", "Link":"https://gist.github.com/midhruvjaink/ca3fc585fc7e4167f8791784a99b4020.js"},
    {"Name":"Size of Variables", "ID":"sizeOfDataTypes", "Size":"716 Bytes", "Link":"https://gist.github.com/midhruvjaink/a260b22ae81b0deb01ade709defb2367.js"},
    {"Name":"Print ASCII", "ID":"printASCII", "Size":"149 Bytes", "Link":"https://gist.github.com/midhruvjaink/5bbbf070310fdd374059d28d30f799c1.js"},
  ],
  "python":[
    {"Name":"Cube Root", "ID":"cubeRoot", "Size":"229 Bytes", "Link":"https://gist.github.com/midhruvjaink/8d6252d081af2920f2141ff5e56601a5.js"},
    {"Name":"Calculator", "ID":"calculatorPy", "Size":"751 Bytes", "Link":"https://gist.github.com/midhruvjaink/25d526070fd438c212f16932acdcf6ac.js"},
    {"Name":"Area of Circle", "ID":"areaCirclePy", "Size":"106 Bytes", "Link":"https://gist.github.com/midhruvjaink/2f5c8b42f39e08095df771973ec94970.js"},
  ]
}

//c/c++

var i = 0
document.write('<h2 class="text-primary" id="c">C/C++</h2>');
document.write('<div class="panel-group" id="accordion">');

for(i=0; i<work.c.length; i++)
{
  var j = i+1;
  document.write('<div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title">');
  document.write('<a data-toggle="collapse" data-parent="#accordian" href="#' + work.c[i].ID + '" >' + work.c[i].Name + ' <span class="label label-info">' + work.c[i].Size + '</span>' + ' </a> </h4> </div>');
  document.write('<div class="panel-collapse collapse" id="' + work.c[i].ID + '">');
  document.write('<div class="panel-body">');
  document.write('<script src=" '+ work.c[i].Link + '"></script>');
  document.write('</div></div></div>');
}

document.write('</div>');
document.write('<hr size="10px"/>');

//python

var i = 0
document.write('<h2 class="text-primary" id="python">Python</h2>');
document.write('<div class="panel-group" id="accordion">');

for(i=0; i<work.python.length; i++)
{
  var j = i+1;
  document.write('<div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title">');
  document.write('<a data-toggle="collapse" data-parent="#accordian" href="#' + work.python[i].ID + '" >' + work.python[i].Name + ' <span class="label label-info">' + work.python[i].Size + '</span>' + ' </a> </h4> </div>');
  document.write('<div class="panel-collapse collapse" id="' + work.python[i].ID + '">');
  document.write('<div class="panel-body">');
  document.write('<script src=" '+ work.python[i].Link + '"></script>');
  document.write('</div></div></div>');
}

document.write('</div>');
document.write('<hr size="10px"/>');

 //{"Name":"", "ID":"", "Size":"", "Link":""},
