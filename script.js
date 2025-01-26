let round = 0;
let chat = 0;

const colours = [
    "#A8E6CF",
    "#DCEDC1",
    "#FFD3B6",
    "#FFAAA5",
    "#FF8B94", 
    "#D5D7F2"
];

let gd_dialog = [ 
    "More.", 
    "I'm ok with that.", 
    "I accept.", 
    "More!"
];

let dg_looper = 0;
let dg_dialog = [
    "Have another.",
    "Sure.", 
    "I've got plenty."
];

const qualities = [
    "wicked sense of humour",
    "not shy to laugh (literally and philosophically)",
    "creative",
    "playful",
    "fun to do both something and nothing with",
    "peak hang - the convo, the energy, the laughs",
    "values gratitude, presence and awareness - both in others, and generally",
    "handsome (like a tawny wood elf sunshine prince)",
    "handsome (in both an ancient and 1800s way)",
    "unconsciously highly swag",
    "strong (can lift me up with ease)",
    "strong (opinions)",
    "sexy (ooo mama)",
    "makes me cum",
    "nice hands",
    "embraces healthy risk",
    "extremely beautiful penis",
    "a most delicious smooch",
    "appreciates balance",
    "brave",
    "realistic",
    "genuinely inclusive",
    "talks nicely to strangers",
    "gives good and loving attention",
    "listens very well",
    "willing to entertain batshit ideas and musings",
    "speaks freely with me",
    "underratedly patient",
    "respects the big picture jest",
    "good kind of critical",
    "well-earned and honed critical expression",
    "highly open to experience",
    "excessive humility regarding shortcomings and blindspots",
    "witty",
    "well read",
    "makes me feel safe",
    "makes me feel beautiful",
    "makes me feel sexy (oo mama)",
    "accommodating to my wellbeing even when I am not",
    "decidely unjaded and instead favours wonder",
    "wakes up early without trying",
    "exhibits admirable self-restraint",
    "has experienced a fair chunk of shit, and actually learnt from it",
    "great depth, little pretension",
    "taste in music, movies, and media at large is refined, and uncomprisingly authentic",
    "worries about being cool exactly the correct amount",
    "magically impervious to certain kinds of psychic damage",
    "firm when needed",
    "a great friend",
    "understands my particular flavour of jest, and isn't disturbed when it's actually nonsense",
    "respects the Muses",
    "politically sober",
    "ever curious",
    "very well read",
    "cultural and media reccommendations are spot on and highly thoughtful",
    "a seeker of wonderful cultural artifacts (subscribed to so many good blogs, it is impressive)",
    "has rhythm",
    "good at maths",
    "singing voice very earnest and pleasant",
    "enormous sweetie dork (positive)",
    "respects and seeks to understand things outside of own experience",
    "absolutely delicious speaking voice",
    "conscious commitment to art life",
    "straight-up clever",
    "subconscious commitment to art life",
    "not deluded or in-denial about certain privileges of upbrining",
    "posesses a non-hubristic and ethical sense of justice",
    "genuinely down for whatevs activity-wise",
    "zest for life",
    "gorgeously sensitive (though in denial)",
    "highly observant (especially of the 'B-side of things' I'm prone to miss)",
    "confidently masculine (non-performative)",
    "willing and wanting to talk things through",
    "tolerates blatant dispect for rules despite loving strucute",
    "nice to listen to (ideas)",
    "nice to listen to (doing various accents)",
    "really into stories, which is the best topic",
    "doubts freely (this is a sign of true spirit)",
    "inspiring (my muse!)",
    "deep compassion for house plants",
    "loves a stroll",
    "cares when it counts",
    "that look in your eye",
    "encouraging through honesty",
    "entertains adventerous whims",
    "low-key a land baron",
    "takes best efforts good care of who takes care of you - family, close friends etc.",
    "decidedly not ageist",
    "generous",
    "prioritises health, respects the body",
    "makes me believe in the possibility of a creative life once again",
    "head smells good",
    "nice arms to be wrapped in",
    "open-minded to inventions and solutions (e.g. ooler, but also acting techniques)",
    "full of good ideas"
];

let quallist = qualities.slice();


document.querySelector('button').addEventListener("click", function(e) {
    e.preventDefault();
    
    let dg = document.getElementById("dg");
    let gd = document.getElementById("gd");

    if(chat == 0) {
       dg.innerHTML = "You bet.";
       gd.innerHTML = "Name one.";
       chat++;
       return;
    } if (chat > 1 && chat < qualities.length-1) {
       dg.innerHTML = dg_dialog[dg_looper];
       gd.innerHTML = "More."; 
       if (dg_looper == dg_dialog.length-1){
        dg_looper = 0;
       } else {
        dg_looper++;
       }
    } if (chat == qualities.length-1) {
        dg.innerText = "Dude, that's over 80.";
        gd.bring
        chat++;
        return;
    } if (chat == qualities.length) {
       dg.innerText = "They'll start repeating.";
       gd.innerText = "I'm ok with that. Again. More.";
       chat++;
       return;
    } if (chat == qualities.length+1) {
        dg.innerText = "Well if you're sure...";
        gd.innerText = "More.";
    } if (chat == qualities.length+7) {
        dg.innerText = "Wow, I'm into it.";
        gd.innerText = "Like this?";
    } if (chat == qualities.length+10) {
        dg.innerText = "Just like that. Yeah.";
        gd.innerText = "Is this horny for you?";
        chat++;
        return;
    } if (chat == qualities.length+11) {
        dg.innerText = "I just think it looks cool.";
        gd.innerText= "Sure you lil' weirdo. Can I have more?";
    } if (chat == qualities.length+12) {
        dg.innerText = "Have more.";
        gd.innerText = "More.";
    } if (chat == qualities.length+20) {
        dg.innerHTML = "Go nuts.";
        gd.innerHTML = "More!";
        chat++;
        return;
    } if (chat >= qualities.length+30 && chat < qualities.length+35) {
        dg.innerText = "I love your soul!";
        gd.innerText = "I accept both the lovability of my soul and your love of it.";
    } if (chat >= qualities.length+35) {
        dg.innerText = "That's enough.";
        gd.innerText = "More! ∞";
    }
    chat++;
    

    let container = document.getElementById("container");
    let noZone = document.getElementById("dialog");
   
    let qualindex = Math.round(Math.random() * quallist.length-1);
    let text = quallist[qualindex];

    let elem = document.createElement("div");
    elem.textContent = text;
    elem.style.position = "absolute";
    elem.style.display = "float";
    elem.setAttribute("id", "qual" + round);
    
    let x = Math.floor(Math.random() * (window.innerWidth-noZone.offsetWidth));
    let y = Math.floor(Math.random() * (window.innerHeight-(window.innerHeight*0.1) - (noZone.offsetTop + noZone.offsetHeight)) + (noZone.offsetTop + noZone.offsetHeight));

    elem.style.left =  x + "px";
    elem.style.top = y + "px"; 
   
    elem.style.backgroundColor = colours[Math.floor(Math.random() * colours.length)];

    if(round > 0) {
       let prevRound = round-1;
       document.getElementById("qual" + prevRound).style.backgroundColor = "#ffffff00";
    };
    
    container.appendChild(elem);

    round++;

    quallist.splice(qualindex, 1);

    if (quallist.length == 0) {
        quallist = qualities.slice();
    }

});

