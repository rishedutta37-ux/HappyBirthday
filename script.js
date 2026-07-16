/* ==========================================
   HAPPY BIRTHDAY WEBSITE
   Part 1
========================================== */

// =============================
// LOADER
// =============================

window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);

    }, 2500);
});

// =============================
// START BUTTON
// =============================

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    document.getElementById("story").scrollIntoView({
        behavior: "smooth"
    });

});

// =============================
// CREATE STARS
// =============================

const stars = document.getElementById("stars");

for(let i=0;i<180;i++){

    let star = document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*3+"s";

    star.style.opacity=Math.random();

    stars.appendChild(star);

}

// =============================
// FLOATING HEARTS
// =============================

const hearts=document.getElementById("hearts");

function createHeart(){

    let heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*30)+"px";

    heart.style.animationDuration=(5+Math.random()*5)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,350);

// =============================
// BALLOONS
// =============================

const colors=[
"#ff4f8b",
"#ffcc00",
"#7b68ee",
"#00d4ff",
"#ff6ec7"
];

function balloon(){

    const b=document.createElement("div");

    b.className="balloon";

    b.style.left=Math.random()*100+"vw";

    b.style.background=colors[Math.floor(Math.random()*colors.length)];

    b.style.animationDuration=(8+Math.random()*6)+"s";

    document.body.appendChild(b);

    setTimeout(()=>{

        b.remove();

    },15000);

}

setInterval(balloon,2500);

// =============================
// CURSOR GLOW
// =============================

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

});

/* ==========================================
   HAPPY BIRTHDAY WEBSITE
   Part 2
========================================== */

// =============================
// BIRTHDAY CAKE CLICK
// =============================

const cake = document.getElementById("cake");

cake.addEventListener("click", () => {

    cake.innerHTML = "🎂✨";

    cake.style.transform = "scale(1.25)";

    cake.style.transition = ".5s";

    confetti({
        particleCount:250,
        spread:180,
        origin:{ y:0.6 }
    });

    setTimeout(()=>{
        cake.innerHTML="🎂";
        cake.style.transform="scale(1)";
    },2000);

});

// =============================
// GIFT BUTTON
// =============================

const giftBtn=document.getElementById("giftBtn");

giftBtn.addEventListener("click",()=>{

    const message=document.getElementById("giftMessage");

    message.style.display="block";

    confetti({
        particleCount:400,
        spread:360,
        startVelocity:45
    });

});

// =============================
// SHOOTING STARS
// =============================

function shootingStar(){

    const star=document.createElement("div");

    star.className="shooting-star";

    star.style.top=Math.random()*40+"vh";

    star.style.left=(70+Math.random()*30)+"vw";

    document.body.appendChild(star);

    setTimeout(()=>{
        star.remove();
    },2000);

}

setInterval(shootingStar,7000);

// =============================
// SPARKLES
// =============================

function sparkle(){

    const s=document.createElement("div");

    s.className="sparkle";

    s.style.left=Math.random()*100+"vw";

    s.style.top=Math.random()*100+"vh";

    document.body.appendChild(s);

    setTimeout(()=>{
        s.remove();
    },3000);

}

setInterval(sparkle,250);

// =============================
// FADE-UP ANIMATION ON SCROLL
// =============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".card,.letter,.photo").forEach(el=>{

    el.classList.add("fade-up");

    observer.observe(el);

});

// =============================
// PHOTO HOVER EFFECT
// =============================

document.querySelectorAll(".photo img").forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.transform="scale(1.08)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

    });

});

/* ==========================================
   HAPPY BIRTHDAY WEBSITE
   Part 3 - Grand Finale
========================================== */

// =============================
// LOVE TEXT TYPING EFFECT
// =============================

const heroTitle = document.querySelector("#hero h1");

const text = "Mondira Das ❤️";

let index = 0;

heroTitle.innerHTML = "";

function typeWriter(){

    if(index < text.length){

        heroTitle.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter,150);

    }

}

setTimeout(typeWriter,3000);

// =============================
// FLOATING "I LOVE YOU"
// =============================

const messages=[

"I Love You ❤️",
"Happy Birthday ❤️",
"My Princess 👑",
"Stay Happy 🌸",
"Forever Together 💕"

];

function floatingMessage(){

    const msg=document.createElement("div");

    msg.innerHTML=messages[Math.floor(Math.random()*messages.length)];

    msg.style.position="fixed";

    msg.style.left=Math.random()*90+"vw";

    msg.style.bottom="-40px";

    msg.style.color="white";

    msg.style.fontSize="22px";

    msg.style.fontWeight="600";

    msg.style.pointerEvents="none";

    msg.style.animation="floatUp 8s linear forwards";

    document.body.appendChild(msg);

    setTimeout(()=>{

        msg.remove();

    },8000);

}

setInterval(floatingMessage,5000);

// =============================
// GRAND FIREWORKS
// =============================

function firework(){

    confetti({

        particleCount:180,

        spread:120,

        startVelocity:40,

        origin:{
            x:Math.random(),
            y:Math.random()*0.6
        }

    });

}

setInterval(firework,12000);

// =============================
// ENVELOPE CLICK
// =============================

const envelope=document.querySelector(".letter");

envelope.addEventListener("click",()=>{

    envelope.style.transform="scale(1.03) rotateY(4deg)";

    envelope.style.transition=".5s";

    setTimeout(()=>{

        envelope.style.transform="scale(1)";

    },600);

});

// =============================
// OPTIONAL MUSIC BUTTON
// =============================

// Uncomment if you add:
// <audio id="bgMusic" src="music/birthday.mp3" loop></audio>
// <button id="musicBtn">🎵</button>

/*
const music=document.getElementById("bgMusic");

const musicBtn=document.getElementById("musicBtn");

musicBtn.addEventListener("click",()=>{

    if(music.paused){

        music.play();

        musicBtn.innerHTML="🔊";

    }

    else{

        music.pause();

        musicBtn.innerHTML="🎵";

    }

});
*/

// =============================
// HAPPY BIRTHDAY POPUP
// =============================

setTimeout(()=>{

    alert("🎉 Happy Birthday Mondira! ❤️\n\nWishing you endless happiness, success, love, and beautiful memories. 💖");

},5000);

// =============================
// CONSOLE MESSAGE 😊
// =============================

console.log(`
❤️ Happy Birthday Mondira ❤️

Made with love by
Protyush Dutta

Have a beautiful day!
`);