var images = [ "galaxi1.jfif",
"galaxi2.jfif",
"galaxi3.jfif",
"galaxi4.jfif",
"galaxi5.jfif"  ];

var i=0;

function slides(){
document.getElementById("slideimage").src = images[i];
if (i<(images.length-1))  //0<4
i++;
else
i=0;
}
setInterval(slides, 2000)