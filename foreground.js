
import anime from './node_modules./animejs./lib./anime.es.js';

function getHeight(element)
{
    var elementPos = element.getBoundingClientRect().top + element.getBoundingClientRect().height;
    var height = document.documentElement.clientHeight-elementPos;

    return height;
}

function fall(element)
{
    var classOfElement = ".fallAnim";
    var height = getHeight(element);
    anime({
        targets: classOfElement,
        translateY: height,
        rotate: 420,
        duration: 10000
        
    });
    // object.style.position = fixed;
    
}

function dash(element)
{
    jett.classList.add('dash');
    const rectEle = element.getBoundingClientRect();
    const rectJett = jett.getBoundingClientRect();

    var moveX = rectEle.width*2;
    var directionX = "-="+moveX;
    console.log("hallo" + moveX);
    
    anime({

        targets: ".dash",
        translateX: directionX,
        easing: 'linear',
        duration: 2000,
        
        
        // duration: 10

        complete: function(anim) {
            jett.classList.remove("dash");
            fall(element);
        }
    });
}

function moveTo(element)
{
    const rectEle = element.getBoundingClientRect();
    const rectJett = jett.getBoundingClientRect();
    

    var moveX = 0;
    var moveY = 0;
    if(rectEle.right > 250)
    {
        moveX = rectEle.right-rectJett.right+250;
        moveY = rectEle.bottom-rectJett.bottom+(rectEle.height/4);
    }

    if(moveX >0)
    {
        jett.classList.add('walk', 'walkRight');
    }
    else
    {
        jett.classList.add('walk', 'walkLeft');
    }
    
    // console.log(rectEle.right);
    // console.log(rectEle.top);
    // console.log(rectJett.right);
    // console.log(rectJett.top);
    // console.log(moveX);
    // console.log(moveY);
    //formatting
    var directionY = "+="+moveY;
    var directionX = "+="+moveX;
    
    
    // jett.classList.add('walk');;
    anime({

        targets: ".walk",
        translateY: directionY,
        translateX: directionX,
        easing: 'spring(1, 5, 30, 0)',
        // duration: 10

        complete: function(anim) {
            if(moveX >0)
            {
                jett.classList.remove('walk', 'walkRight');
            }
            else
            {
                jett.classList.remove('walk', 'walkLeft');
            }
            dash(element);
        }
    });

    


}

// function findElement()
// {

// }

//predetermine elements
document.querySelector(".lnXdpd").classList.add('fall');

document.querySelector("#SIvCob").classList.add('fall');

document.querySelector(".RNNXgb").classList.add('fall');



var jett = document.createElement("div");
jett.classList.add('jett');
document.body.appendChild(jett);

var listElements = document.querySelectorAll(".fall");
var element = listElements[Math.floor(Math.random()*listElements.length)];
element.classList.add("fallAnim");

setTimeout(function(){
    jett.classList.add("walk", "walkRight");
    anime({
        targets: ".walk",
        translateX: "+=600",
        duration: 5000,
        easing: 'linear',
        complete: function(anim){
            anime({
                targets: ".walk",
                translateY: "+=600",
                duration: 5000,
                easing: 'linear',
                complete: function(anim){
                    jett.classList.remove("walkRight");
                    jett.classList.add("walkLeft");
                    anime({
                        targets: ".walk",
                        translateX: "-=600",
                        duration: 5000,
                        easing: 'linear',
                        complete: function(anim){
                            jett.classList.remove("walk", "walkLeft");
                            moveTo(element);
                        }
                    });
                }
            });
        }
    });

}, 3000);



