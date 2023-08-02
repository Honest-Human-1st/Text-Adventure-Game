let menuScreen=document.querySelector(".menu-screen");
let startButton=document.querySelector(".start-button");
let entRuinsb=document.querySelector(".ent-ruins");
let entSurfaceb=document.querySelector(".ent-surface");
let entArenab=document.querySelector(".ent-arena");
let restartDiv=document.querySelector(".game-restart");
let restartButton=document.querySelector(".restart-button");
let entHallwayb=document.querySelector(".ent-hallway");
let leftWayb=document.querySelector(".left-way");
let rightWayb=document.querySelector(".right-way");
let arenaReturnb=document.querySelector(".arena-return");
let rangedTackb=document.querySelector(".ranged-attack");
let meleeTackb=document.querySelector(".melee-attack");
let leftPathb=document.querySelector(".left-path");
let rightPathb=document.querySelector(".right-path");
let ruinsReturnb=document.querySelector(".return-to-ruins-button");
let hamArenab=document.querySelector(".ent-ham-arena");
let hamHallwayb=document.querySelector(".ent-ham-hallway");
let beastarenaReturnb=document.querySelector(".arena-return-two");
let tacticsAttackb=document.querySelector(".tactics-button");
let brutalityAttackb=document.querySelector(".brutality-button");




let storyOpen=document.querySelector(".story-opening");
let enterRuins=document.querySelector(".enter-ruins-screen");
let enterArena=document.querySelector(".arena-screen");
let enterHallway=document.querySelector(".hallway-screen");
let leftHall=document.querySelector(".gone-left-screen");
let rightHall=document.querySelector(".gone-right-screen");
let swordArena=document.querySelector(".ruins-with-sword");
let rangedAttack=document.querySelector(".ranged-approach-screen");
let meleeAttack=document.querySelector(".melee-approach-screen");
let enterSurface=document.querySelector(".surface-screen");
let rightPath=document.querySelector(".right-surf-path-screen");
let leftPath=document.querySelector(".left-surf-path-screen");
let hamboneRuins=document.querySelector(".hambone-ruins-screen");
let hamboneArena=document.querySelector(".hambone-arena-screen");
let hamboneHallway=document.querySelector(".hambone-hallway-screen");
let beastArena=document.querySelector(".ruins-with-beast");
let tacticsAttack=document.querySelector(".tactics-approach-screen");
let brutalAttack=document.querySelector(".brutality-approach-screen");






 
startButton.onclick=function(){
    storyOpen.style.display="block";
    menuScreen.style.display="none";
        var audio = document.getElementById("enterMusic");
    audio.play();
};

entRuinsb.onclick=function(){
    enterRuins.style.display="block";
    storyOpen.style.display="none";
    var audio = document.getElementById("ruinsMusic");
    audio.play();
    var audio = document.getElementById("enterMusic");
    audio.pause();
};

entArenab.onclick=function(){
    enterArena.style.display="block";
    enterRuins.style.display="none";
    var audio = document.getElementById("myAudio");
    audio.play();
    var audio = document.getElementById("ruinsMusic");
    audio.pause();
    restartButton.style.display="block";
};

restartButton.onclick=function(){
    storyOpen.style.display="block";
     enterArena.style.display="none";
    leftHall.style.display="none";
    restartButton.style.display="none";
    rangedAttack.style.display="none";
    meleeAttack.style.display="none";
    rightPath.style.display="none";
    hamboneArena.style.display="none";
    tacticsAttack.style.display="none";
    brutalAttack.style.display="none";
};

entHallwayb.onclick=function(){
    enterHallway.style.display="block";
    enterRuins.style.display="none";
};

leftWayb.onclick=function(){
    leftHall.style.display="block";
    enterHallway.style.display="none";
    var audio = document.getElementById("myAudio");
    audio.play();
    var audio = document.getElementById("ruinsMusic");
    audio.pause();
     restartButton.style.display="block";
};


rightWayb.onclick=function(){
    rightHall.style.display="block";
    enterHallway.style.display="none";
};

arenaReturnb.onclick=function(){
    swordArena.style.display="block";
    rightHall.style.display="none";
    var audio = document.getElementById("fightMusic");
    audio.play();
    var audio = document.getElementById("ruinsMusic");
    audio.pause();
};

rangedTackb.onclick=function(){
    rangedAttack.style.display="block";
    swordArena.style.display="none";
    var audio = document.getElementById("victoryAudio");
    audio.play();
    var audio = document.getElementById("fightMusic");
    audio.pause();
    restartButton.style.display="block";
    
};

meleeTackb.onclick=function(){
    meleeAttack.style.display="block";
    swordArena.style.display="none";
    var audio = document.getElementById("defeatAudio");
    audio.play();
    var audio = document.getElementById("fightMusic");
    audio.pause();
    restartButton.style.display="block";
};

entSurfaceb.onclick=function(){
    enterSurface.style.display="block";
    storyOpen.style.display="none";
};

leftPathb.onclick=function(){
    leftPath.style.display="block";
    enterSurface.style.display="none";
};

rightPathb.onclick=function(){
    rightPath.style.display="block";
    enterSurface.style.display="none";
    var audio = document.getElementById("myAudio");
    audio.play();
    restartButton.style.display="block";
};

ruinsReturnb.onclick=function(){
    hamboneRuins.style.display="block";
    leftPath.style.display="none";
    var audio = document.getElementById("ruinsMusic");
    audio.play();
};

hamArenab.onclick=function(){
    hamboneArena.style.display="block";
    hamboneRuins.style.display="none";
    var audio = document.getElementById("myAudio");
    audio.play();
    var audio = document.getElementById("ruinsMusic");
    audio.pause();
    restartButton.style.display="block";
};

hamHallwayb.onclick=function(){
    hamboneHallway.style.display="block";
    hamboneRuins.style.display="none";
};

beastarenaReturnb.onclick=function(){
    beastArena.style.display="block";
    hamboneHallway.style.display="none";
    var audio = document.getElementById("fightMusic");
    audio.play();
    var audio = document.getElementById("ruinsMusic");
    audio.pause();
};

tacticsAttackb.onclick=function(){
    tacticsAttack.style.display="block";
    beastArena.style.display="none";
     var audio = document.getElementById("defeatAudio");
    audio.play();
    var audio = document.getElementById("fightMusic");
    audio.pause();
    restartButton.style.display="block";
};

brutalityAttackb.onclick=function(){
    brutalAttack.style.display="block";
    beastArena.style.display="none";
    var audio = document.getElementById("victoryAudio");
    audio.play();
    var audio = document.getElementById("fightMusic");
    audio.pause();
    restartButton.style.display="block";
};