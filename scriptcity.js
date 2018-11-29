$(document).ready(function() {
  
  
function fin() {
  $("#end").append(end);
}
  
var end = "<h2>THE END</h2>" + "<h3><a href='/gallery.html'>< prev </a>&nbsp;&nbsp;<a href='https://github.com/emmawinston/nanogenmo18'>github</a></h3>";  

var citytemplate = tracery.createGrammar(
   {
    "origin": ["#daysky1#<br/>#daysky2#<br/>#daysky2#<br/>#city#", "#nightsky1#<br/>#nightsky2#<br/>#nightsky2#<br/>#city#"],
	"city": ["#building##building##building##building##building##building##building##building#"],
	"daysky1":[
	"#suns#       ",
	" #suns#      ",
	"  #suns#     ",
	"   #suns#    ",
	"    #suns#   ",
	"     #suns#  ",
	"      #suns# ",
	"       #suns#",
	"#suns##daystuff#      ",
	" #suns# #daystuff#    ",
	"  #suns#  #daystuff#  ",
	"   #suns#  #daystuff# ",
	"    #suns#  #daystuff#",
	" #daystuff#   #suns##daystuff# ",
	" #daystuff#    #suns##daystuff#",
	" #daystuff# #daystuff#   #suns#"
		
],
	"nightsky1":[
	"#moons#       ",
	" #moons#      ",
	"  #moons#     ",
	"   #moons#    ",
	"    #moons#   ",
	"     #moons#  ",
	"      #moons# ",
	"       #moons#",
	"#moons##nightstuff#      ",
	" #moons# #nightstuff#    ",
	"  #moons#  #nightstuff#  ",
	"   #moons#  #nightstuff# ",
	"    #moons#  #nightstuff#",
	" #nightstuff#   #moons##nightstuff# ",
	" #nightstuff#    #moons##nightstuff#",
	" #nightstuff# #nightstuff#   #moons#"
],

"daysky2":[
	"#daystuff#       ",
	" #daystuff#      ",
	"  #daystuff#     ",
	"   #daystuff#    ",
	"    #daystuff#   ",
	"     #daystuff#  ",
	"      #daystuff# ",
	"       #daystuff#",
	"        ",
	"#daystuff##daystuff#      ",
	" #daystuff# #daystuff#    ",
	"  #daystuff#  #daystuff#  ",
	"   #daystuff#  #daystuff# ",
	"    #daystuff#  #daystuff#",
	" #daystuff#   #daystuff##daystuff# ",
	" #daystuff#    #daystuff##daystuff#",
	" #daystuff# #daystuff# #daystuff# #daystuff#",
	"#daystuff# #daystuff# #daystuff# #daystuff# ",
	" #daystuff# #daystuff# #daystuff# #daystuff#",
	"#daystuff# #daystuff# #daystuff##daystuff##daystuff##daystuff#",
	" #daystuff# #daystuff#   #daystuff#"

],

"nightsky2":[
	"#nightstuff#       ",
	" #nightstuff#      ",
	"  #nightstuff#     ",
	"   #nightstuff#    ",
	"    #nightstuff#   ",
	"     #nightstuff#  ",
	"      #nightstuff# ",
	"       #nightstuff#",
	"#nightstuff##nightstuff#      ",
	" #nightstuff# #nightstuff#    ",
	"  #nightstuff#  #nightstuff#  ",
	"   #nightstuff#  #nightstuff# ",
	"    #nightstuff#  #nightstuff#",
	" #nightstuff#   #nightstuff##nightstuff# ",
	" #nightstuff#    #nightstuff##nightstuff#",
	" #nightstuff# #nightstuff# #nightstuff# #nightstuff#",
	"#nightstuff# #nightstuff# #nightstuff# #nightstuff# ",
	" #nightstuff# #nightstuff# #nightstuff# #nightstuff#",
	"#nightstuff# #nightstuff# #nightstuff##nightstuff##nightstuff##nightstuff#",
	" #nightstuff# #nightstuff#   #nightstuff#"

],

	"suns":[
		"🌞",
		"🌞",
		"⛅️",
		"⛅️",
		"🌤",
		"🌤",
		"🌥 ",
		"🌦"
],
"moons":["🌕",
		"🌖",
		"🌗",
		"🌘",
		"🌘",
		"🌑 ",
		"🌚"
	],

"nightstuff":[
	"⭐️",
	"🌟",
	"💫",
	"✨",
	"☄",
	"⭐️ ",
	"🌟",
	"⭐️ ",
	"🌟",
	"⭐️ ",
	"🌟"
],
"daystuff":[
	"☁️",
	"☁️",
	"☁️",
	"☁️",
	"☁️",
	"☁️",
	"☁️",
	"☁️",
	"☁️",
	"☁️",
	"☁️",
	"☁️",
	"☁️",
	"☁️",
	"☁️",
	"☁️",
	"☁️",
	"☁️",
	"☁️",
	"☁️",
	"☁️",
	"☁️",
	"☁️",
	"🌧",
	"⛈",
	"🌩",
	"🌧",
	"⛈",
	"🌩",
	"⚡️",
	"🌨",
	"🌪 ",
	"💧",
	"💧",
	"💧",
	"💧",
	"💧",
	"💧",	
	"💧"
],
	"building":[
		"🏠",
		"🏡",
		"🏚",
		"🏢",
		"🏬",
		"🏠",
		"🏡",
		"🏚",
		"🏢",
		"🏬",
		"🏣",
		"🏤",
		"🏥",
		"🏦",
		"🏨",
		"🏪",
		"🏫",
		"🏩",
		"💒 ",
		"🏛",
		"⛪️",
		"🕌",
		"🎪",
		"🕍" 
]
});
  
// output the gallery as a single string of characters
  var value = $(this).val().replace(/\n/g, '<br/>');
  
  var cityoutput = citytemplate.flatten('#origin#');
  console.log(cityoutput);
  $('div#trace').append(cityoutput);
  
  var cityname = [];

// story title  
function title() {
  var titleword = `${RiTa.randomWord('jj')} `;
  var titlewordcase = titleword[0].toUpperCase() + titleword.slice(1);
  var title = "<h1>The " + titlewordcase + " City</h1>";
  cityname.push(titlewordcase);
  $('div#title').append(title);
}
    
// figure out who the characters present are - maybe there's a more elegant way to do this, but i don't know it.
  var characters = [];
  var charList = []; // list the characters with 'a'
  var finalChar = [];
  var pronouns = [];
  var pronounsUpper = [];
  
  
  if (cityoutput.indexOf("🚶") >= 0) { 
    characters.push("man");
    pronouns.push("he");
    pronounsUpper.push("He");
  }
  
  if(cityoutput.indexOf("🕴") >= 0) {
    characters.push("eerily floating person");
      pronouns.push("they");
      pronounsUpper.push("They");
  }
  
  if (cityoutput.indexOf("🏃") >= 0) { 
      characters.push("running man");
      pronouns.push("he");
      pronounsUpper.push("He");
  }
  if (cityoutput.indexOf("💃") >= 0) { 
      characters.push("dancing lady");
      pronouns.push("she");
      pronounsUpper.push("She");
  }
  if (cityoutput.indexOf("👫") >= 0) { 
      characters.push("couple");
      pronouns.push("they");
      pronounsUpper.push("They");
  }
  if (cityoutput.indexOf("👬") >= 0) { 
      characters.push("couple");
      pronouns.push("they");
      pronounsUpper.push("They");
  }
  if (cityoutput.indexOf("👭") >= 0) { 
      characters.push("couple");
      pronouns.push("they");
      pronounsUpper.push("They");
  }
  
  var i;
  for (i = 0; i < (characters.length - 1); i++) { 
    charList.push(" the " + characters[i]);
  } // formatted version of character list

  for (i = (characters.length - 1); i < (characters.length); i++) {
    finalChar.push(", and the " + characters[i]);
  }
  
  var art = [];
  var artList = [];
  var finalArt = [];
  
  if (cityoutput.indexOf("🚢") >= 0) { 
     art.push("ship"); }
  
  if (cityoutput.indexOf("🎡") >= 0) { 
      art.push("ferris wheel");
  }
  
  
  // log the forest trace and the cast of characters.
$('div#trace').html(cityoutput);

  console.log(cityoutput);
  console.log(characters);
  console.log(charList);
  console.log(finalChar);
  
  
// exposition
var pastTense = {tense: RiTa.PAST_TENSE}; //arg for RiTa
  
var plural = {number: RiTa.PLURAL}; //arg for RiTa
  
var dayNight = [
  "day",
  "night"
];
  
var placeDesc = [
  "The gallery was old, and a little " + `${RiTa.randomWord('jj')} ` + "and " + `${RiTa.randomWord('jj')}` + ", but despite this, ",
  "The gallery was the finest of its kind, beloved by critics and the elite; it was rather " + `${RiTa.randomWord('jj')} ` + "and " + `${RiTa.randomWord('jj')}` + ", and ",
  "The gallery was popular amongst visitors, but considered rather " + `${RiTa.randomWord('jj')} ` + "and " + `${RiTa.randomWord('jj')} ` + "by the critics. Nonetheless, "
];
  
var artDesc = [
  "A new exhibition had recently opened; a showcase of " + `${RiTa.randomWord('jj')} ` + "art, featuring " + `${RiTa.randomWord('jj')} ` + "paintings of a " + art[1] + ", and a " + art[0] + ". ",
  "The gallery's current exhibition had been open for some time, but remained well-attended; it was a showcase of " + `${RiTa.randomWord('jj')} ` + "art, featuring " + `${RiTa.randomWord('jj')} ` + "paintings of a " + art[1] + ", and a " + art[0] + ". "
];

  
var rollPlace = placeDesc[Math.floor(Math.random()*placeDesc.length)];
var rollArt = artDesc[Math.floor(Math.random()*artDesc.length)];
var rollTime = dayNight[Math.floor(Math.random()*dayNight.length)];

function exposition() {
  
  
 var exposition = "<p>It was a " + `${RiTa.randomWord('jj')} ` + rollTime + " at the " + cityname + " Gallery, which was  " + `${RiTa.randomWord('jj')} ` + " and replete with " + `${RiTa.pluralize(RiTa.randomWord('nn'))}` + ". " + rollPlace + " a number of visitors had arrived to gaze upon the fine art;" + charList + finalChar + ". " + rollArt + "</p>";
 
 console.log(exposition);
  $('div#output').append(exposition);
  
}
  
// function to describe a character.
  
function charDesc() {
  var currentChar = characters[0];
  
  var description = "The " + currentChar + " was a " + `${RiTa.randomWord('jj')} ` + currentChar + ", " + `${RiTa.randomWord('jj')}` + ", " + `${RiTa.randomWord('jj')}` + ", and " + `${RiTa.randomWord('jj')}` + ". The " + currentChar + " enjoyed " + `${RiTa.pluralize(RiTa.randomWord('nn'))}` + ", but hated " + `${RiTa.pluralize(RiTa.randomWord('nn'))}` + ". At this particular moment, " + pronouns[i] + " felt " + `${RiTa.randomWord('jj')}` + ", with shades of " + `${RiTa.randomWord('jj')}` + ". ";
  
 console.log(description);
  
 $('div#output').append(description); 
}
  
function verbedAdverb() {
 return `${RiTa.conjugate(RiTa.randomWord('vb'), pastTense)} ` + `${RiTa.randomWord('rb')}`;
}
  
  
function charActionFirst() {
  var prevChar = characters[characters.length - 1];
  var currentChar = characters[0];
  var nextChar = characters[1];
  
  var action = "The " + currentChar + " " + verbedAdverb() + ", " + verbedAdverb() + ", then " + verbedAdverb() + ". " + pronounsUpper[i] + " was " + `${RiTa.randomWord('jj')}` + ", and " + `${RiTa.conjugate(RiTa.randomWord('vb'), pastTense)} ` + "the " + `${RiTa.randomWord('nn')}` + ". "; 
  
  console.log(action);
  $('div#output').append(action);
}
  
function charAction() {
  var currentChar = characters[0];
  
  var action = "Nearby, the " + currentChar + " " + verbedAdverb() + ", " + verbedAdverb() + ", then " + verbedAdverb() + ". " + pronounsUpper[i] + " was " + `${RiTa.randomWord('jj')}` + ", and " + `${RiTa.conjugate(RiTa.randomWord('vb'), pastTense)} ` + "the " + `${RiTa.randomWord('nn')}` + ". "; 
  
  console.log(action);
  $('div#output').append(action);
}
  
function charSpeech() {
  var prevChar = characters[characters.length - 1];
  var currentChar = characters[0];
  var nextChar = characters[1];
  var saySentences = []  
  var respondSentences = []  
  
  var rm = new RiMarkov(3);
  
  rm.loadText("Of course a man’s ideas on the subject of teaching necessarily depend upon his general views of the purport and scope of art. Is Art (1) a mere imitative impulse--a record of the superficial facts and phases of nature in a particular medium? or, is it (2) the most subtle and expressive of languages, taking all manner of rich and varied forms in all sorts of materials, under the paramount impulse of the selective search for beauty? Naturally, our answer to the question what should be taught, and how to teach it depends upon our answer to these questions. But the greater includes the less, and, though one may be biassed by the second definition given above, it does not follow that the first may not have its due place in a course of study. The question, then, really is, what is the most helpful course of study towards the attainment of that desirable facility of workmanship, that cultivation of the natural perception, feeling, and judgement in the use of those elements and materials in their ultimate expression and realization of beauty? And here we have to stop again on our road, and ask what is this quality of beauty, and whence does it come? Without exactly attempting a final or philosophical account of it, we may call it an outcome and efflorescence of the delight in life under happy conditions. The history of art and nature shows its evolution in ever varying degree and form, constantly affected by external conditions, and modified by place and circumstance, following, in the development of the sensibility to ideas and impressions of beauty, through the refinement of the senses and the intellect, much the same course as the development of man himself as a social and reflective animal. As we cannot see colour without light, neither can we expect sensibility to beauty to grow up naturally amid sordid and depressing surroundings. For art is not an independent accidental unrelated phenomenon, but is the result, as we find it in its various manifestations, of long ages of growth, and co-operative tradition and sympathy. Seeking beautiful art, organic and related in all its parts, we turn naturally to places and periods of history which are the culminating points in such a growth. To Athens in the Phidian age, for instance; to almost any European city in the Middle Ages; to one of our own village churches, even, where the nineteenth-century restorer has not been; to Venice or Florence in the early renascence, rather than to modern London or Paris. But even limiting ourselves to our own day we have got to expect far more from the man who has worked from his youth up in what we call “an atmosphere of art,” even if it is only that of the modern painter’s studio, than from a mill hand, say, trained to some one special function, perhaps, in some process of machine industry, whose life is spent in monotonous toil and whose daily vision is bounded by chimney-pots and back-yards. A pinch of the salt of art and culture at measured intervals, will never counteract the adverse and more prominent influence of the daily, hourly surroundings on the eye and mind. It is hopeless if one hour of life’s day says “yes,” if all the other twenty-three say “no” continually. Are we not led to these triumphs through the winsome defiles of freehand and shaded drawing from the cast, perhaps accompanied by cheerful model drawing, perspective puzzles, and anatomical dissections, and drawings of the human skeleton seen through antique figures, which seem to anticipate the Röntgen rays? “The proper study of mankind is man,” but according to the Academic system it is practically the only study--study of the human frame and form isolated from everything else. No doubt such isolation, theoretically at least, concentrates the attention upon the most difficult and subtle of all living organisms; but the practical question is, do these elaborate and more or less artificial studies really give the student a true grasp of form and construction? Are they not too much practically taken as still-life studies, and approached rather in the imitative spirit?");
  
var speech = pronounsUpper[i] + " approached the " + prevChar + ", " + verbedAdverb() + ", and said: " + " <br/><blockquote>'Excuse me, but I was wondering: " + ` ${rm.generateSentences(50).join(" ")}` + "'" + "</blockquote> 'But --' said the " + prevChar + ` ${RiTa.randomWord('rb')}` + ", only to be interrupted. <br/><blockquote>'" + `${rm.generateSentences(50).join(" ")}` + "' " + "</blockquote>'Actually,' responded the " + prevChar + ` ${RiTa.randomWord('rb')}` + ", 'You might consider the following. <blockquote>" + `${rm.generateSentences(90).join(" ")}` + "' " + "</blockquote> The " + currentChar + " felt " + `${RiTa.randomWord('jj')} ` + "at this, and " + verbedAdverb() + ", " + `${RiTa.getPresentParticiple(RiTa.randomWord('vb'))} ` + `${RiTa.randomWord('rb')}` + ". <br/><br/>";
  
  console.log(speech);
  $('div#output').append(speech);
}
  
var ending = [
      " 'I just like the colours,' " + pronouns[0] + " said, " + `${RiTa.randomWord('rb')}` + ". ",
      " 'I just thought it was nice,' " + pronouns[0] + " said, " + `${RiTa.randomWord('rb')}` + ". ",
      " 'Actually, I hate art,' " + pronouns[0] + " said, " + `${RiTa.randomWord('rb')}` + ". "
      ]; 
  
var rollEnd = ending[Math.floor(Math.random()*ending.length)];
  
  function punchline() {
  $('div#output').append(rollEnd);
  }
  
// WHAT GOES ON THE PAGE
  
// exposition
title();
exposition();
  
var i;
for (i = 0; i < 1; i++) {
 charDesc();
 charActionFirst();
 characters.push(characters.shift());  // moves first character to end of array so we can start over
 pronouns.push(pronouns.shift()); 
 pronounsUpper.push(pronounsUpper.shift());
}

  for (i = 0; i < characters.length-1; i++) { 
  charAction();
  charDesc();
  charSpeech();
  characters.push(characters.shift());  // moves first character to end of array so we can start over
  pronouns.push(pronouns.shift()); 
  pronounsUpper.push(pronounsUpper.shift());
}
  
for (i = characters.length - 1; i < characters.length; i++) { 
  charAction();
  charDesc();
  charSpeech();
  console.log(pronouns);
  punchline();
  characters.push(characters.shift());  
  pronouns.push(pronouns.shift());  // moves first character to end of array so we can start over
  pronounsUpper.push(pronounsUpper.shift());
}

  fin();
  
});