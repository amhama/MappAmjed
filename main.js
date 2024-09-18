let btn_music=document.getElementById('music');
let isplaying=false;

btn_music.addEventListener('click', () =>{
 
    if(isplaying){
        document.getElementById('musicx').pause();
    }else{
        document.getElementById('musicx').play();
    }
isplaying=!isplaying;
})

let isshowing=false;

btn_music.addEventListener('click', () =>{
    if(isshowing){
       btn_music.style.opacity=0.68;
    }else{
        btn_music.style.opacity=1;
    }
    isshowing=!isshowing;
})

let btn_exp = document.getElementById('exp');
let isarrow = false;

btn_exp.addEventListener('mouseover', () => {
    document.getElementById('arrow').style.transform = 'rotate(90deg)';
    isarrow = true;
});

btn_exp.addEventListener('mouseleave', () => {
    if (isarrow) {
        document.getElementById('arrow').style.transform = 'rotate(0deg)';
    }
});

let btn_sidelist =document.getElementById('sidelist');
let issliding =false;

btn_sidelist.addEventListener('click', () => {
    if (issliding) {
        document.getElementById('sub_sidelist').style.transform = 'translateX(450px)';
        document.getElementById('mobile').style.display = 'block';
        
        // Add a slight delay before applying the opacity to allow display change
        setTimeout(() => {
            document.getElementById('mobile').style.opacity = 1;
        }, 10); // Small timeout to trigger the transition
    } else {
        document.getElementById('sub_sidelist').style.transform = 'translateX(0px)';
        document.getElementById('mobile').style.opacity = 0;

        // Hide the element after the transition is complete
        setTimeout(() => {
            document.getElementById('mobile').style.display = 'none';
        }, 200); // Match the transition time (0.2s)
    }
    issliding = !issliding;
});
