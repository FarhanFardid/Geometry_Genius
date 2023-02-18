// navbar event handler 
document.getElementById('blog_btn').addEventListener('click', function(){

    window.location.href ="blog.html";
})

// card background color change functions



function rg(m, n) {
    return Math.floor( Math.random() * (n - m + 1) ) + m;
}

function hex(i) {
    return i.toString(16);
}

function randColor() {
    return '#' + hex(rg(1, 15)) + hex(rg(1, 15)) + hex(rg(1, 15)) +
        hex(rg(1, 15)) + hex(rg(1, 15)) + hex(rg(1, 15));
}

function setBgColor(id){
    const clr  = randColor();
    
    document.getElementById(id).style.background = clr + '';
    console.log(clr);
}
// card wise color set
// 1. Triangle card
document.getElementById('triangle_card').addEventListener('mouseover', function() {
    setBgColor('triangle_card');
});


// 2. Rectangle_card
document.getElementById('rectangle_card').addEventListener('mouseover', function() {
    setBgColor('rectangle_card');
});