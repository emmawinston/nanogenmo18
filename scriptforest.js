$(document).ready(function() {
  
// generate a forest in tracery
 /*  function loadGrammar(name) {
        $("#output").html("");

        var grammar = tracery.createGrammar(grammars[name]);
        $("#grammar").html(grammar.toText());

        for (var i = 0; i < 8; i++) {

            var s = grammar.flatten("#origin#");
            console.log(s);
            var div = $("<div/>", {
                class : "outputSample",
                html : s
            });

            $("#output").append(div);

        }

    }; */

var foresttemplate = tracery.createGrammar(
   {
	"origin":["#forest#<br/>#forest#<br/>#forest#<br/>#forest#<br/>#forest#<br/>#forest#<br/>#forest#<br/>#forest#<br/>#forest#<br/>#forest#<br/>#forest#"],
	"forest":["#tree##tree##tree##tree##tree##tree##tree##tree##tree#",
"#tree##forestry##tree##forestry#",
"#tree##tree##forestry##forestry#",
"#forestry##tree##tree##forestry#",
"#tree##forestry##wildlife##forestry#",
"#forestry##wildlife##tree##forestry#",
"#tree##wildlife##forestry##forestry#",
"#wildlife##forestry##tree##forestry#",
"#forestry##tree##wildlife##forestry#",
"#wildlife##tree##forestry##forestry#"
],
	"forestry": ["#tree##wildlife##tree##wildlife##tree##wildlife##tree#",
"#tree##wildlife##tree##tree##tree##tree##tree#",
"#tree##tree##wildlife##tree##tree##tree##tree#",
"#tree##tree##wildlife##tree##tree##tree#",
"#tree##tree##tree##wildlife##tree##tree#",
"#tree##tree##tree##tree##wildlife##tree#",
"#tree##wildlife##wildlife##tree##tree##tree##tree#",
"#tree##wildlife##tree##tree##wildlife##tree##tree#",
"#tree##wildlife##tree##tree##tree##wildlife##tree#",
"#tree##tree##wildlife##tree##wildlife##tree##tree#",
"#tree##tree##wildlife##tree##tree##wildlife##tree#",
"#tree##tree##tree##wildlife##wildlife##tree##tree#",
"#tree##tree##tree##wildlife##tree##wildlife##tree#",
"#tree##tree##tree##tree##wildlife##wildlife##tree#",
"#tree##tree##tree##wildlife##wildlife##wildlife##tree#",
"#tree##tree##wildlife##wildlife##wildlife##tree##tree#",
"#tree##tree##wildlife##wildlife##tree##wildlife##tree#",
"#tree##tree##wildlife##tree##wildlife##wildlife##tree#",
"#tree##wildlife##wildlife##wildlife##tree##tree##tree#",
"#tree##wildlife##wildlife##tree##wildlife##tree##tree#",
"#tree##wildlife##wildlife##tree##tree##wildlife##tree#",
"#tree##wildlife##tree##wildlife##wildlife##tree##tree#",
"#tree##wildlife##tree##tree##wildlife##wildlife##tree#",
"#wildlife##tree##wildlife##tree##wildlife##tree##wildlife#",
"#wildlife##tree##wildlife##tree##wildlife##tree##wildlife#",
"#wildlife##tree##wildlife##tree##wildlife##tree##wildlife#",
"#tree##wildlife##tree##wildlife##tree##wildlife##tree#",
"#tree##wildlife##tree##wildlife##tree##wildlife##tree#",
"#tree##wildlife##tree##wildlife##tree##wildlife##tree#",

" #wildlife# #wildlife# #wildlife# ",
" #wildlife#     ",
" #wildlife#    ",
"  #wildlife#   ",
"   #wildlife#  ",
"    #wildlife# ",
" #wildlife##wildlife#    ",
" #wildlife#  #wildlife#  ",
" #wildlife#   #wildlife# ",
"  #wildlife# #wildlife#  ",
"  #wildlife#  #wildlife# ",
"   #wildlife##wildlife#  ",
"   #wildlife# #wildlife##tree#",
"    #wildlife##wildlife# ",
"   #wildlife##wildlife##wildlife# ",
"  #wildlife##wildlife##wildlife#  ",
"  #wildlife##wildlife# #wildlife# ",
"  #wildlife# #wildlife##wildlife# ",
" #wildlife##wildlife##wildlife#   ",
" #wildlife##wildlife# #wildlife#  ",
" #wildlife##wildlife#  #wildlife# ",
" #wildlife# #wildlife##wildlife# ",
" #wildlife#  #wildlife##wildlife# ",
"#wildlife# #wildlife# #wildlife# #wildlife#",
"#wildlife# #wildlife# #wildlife# #wildlife#",
"#wildlife# #wildlife# #wildlife# #wildlife#",
" #wildlife# #wildlife# #wildlife# ",
" #wildlife# #wildlife# #wildlife# ",
" #wildlife# #wildlife# #wildlife# "

],
	"tree": [
	" ",
	" ",
	"🌲",
	"🌳"
],
	"wildlife": [
	"🌲",
	"🌳",
	"🌲",
	"🌳",
	"🌲",
	"🌳",
	"🌲",
	"🌳",
	"🌲",
	"🌳",
	"🌲",
	"🌳",
	"🌲",
	"🌳",
	"🌲",
	"🌳",
	"🌲",
	"🌳",
	"🌲",
	"🌳",
	"🌺",
	"🌻 ",
	"🌹",
	"🌷",
	"🌼",
	"🌸",
	"💐",
	"🍄",
	"🌲",
	"🌳",
	"🌿",
	"☘",
	"🌾",
	"🍀",
	"🦂",
	"🐏",
	"🐑",
	"🐐",
	"🐘",
	"🐁",
	"🐀",
	"🐇",
	"🐿",
	"🦃",
	"🐓",
	"🐣",
	"🐥",
	"🕊",
	"🐊",
	"🐢",
	"🐍",
	"🐌",
	"🐛",
	"🐜",
	"🐝",
	"🐞",
	"🕷",
	"🕸"		
	],
"livestock": [ 
	"🦂",
	"🐏",
	"🐑",
	"🐐",
	"🐘",
	"🐁",
	"🐀",
	"🐇",
	"🐿",
	"🦃",
	"🐓",
	"🐣",
	"🐥",
	"🕊",
	"🐊",
	"🐢",
	"🐍",
	"🐌",
	"🐛",
	"🐜",
	"🐝",
	"🐞",
	"🕷",
	"🕸",
	"🐖",
	"🐄",
	"🐃",
	"🐂",
	"🐎",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" "
]	
});
  
// output the forest as a single string of characters
  var value = $(this).val().replace(/\n/g, '<br/>');
  
  var forestoutput = foresttemplate.flatten('#origin#');
    
// figure out who the characters present are - maybe there's a more elegant way to do this, but i don't know it.
  
  var characters = [];
  var charList = []; // list the characters with 'a'
  var finalChar = [];
  
  if (forestoutput.indexOf("🐑") >= 0) { 
    characters.push("sheep"); }
  if (forestoutput.indexOf("🐐") >= 0) { 
      characters.push("goat");
  }
  if (forestoutput.indexOf("🐘") >= 0) { 
      characters.push("elephant");
  }
  if (forestoutput.indexOf("🐁") >= 0) { 
      characters.push("mouse");
  }
  if (forestoutput.indexOf("🐇") >= 0) { 
      characters.push("rabbit");
  }
  if (forestoutput.indexOf("🐿") >= 0) { 
      characters.push("squirrel");
  }
  if (forestoutput.indexOf("🦃") >= 0) { 
      characters.push("turkey");
  }
  if (forestoutput.indexOf("🐓") >= 0) { 
      characters.push("chicken");
  }
  if (forestoutput.indexOf("🐥") >= 0) { 
      characters.push("chick");
  }
  if (forestoutput.indexOf("🕊") >= 0) { 
      characters.push("dove");
  }
  if (forestoutput.indexOf("🐊") >= 0) { 
      characters.push("crocodile");
  }
  if (forestoutput.indexOf("🐢") >= 0) { 
      characters.push("turtle");
  }
  if (forestoutput.indexOf("🐍") >= 0) { 
      characters.push("snake");
  }
  if (forestoutput.indexOf("🐌") >= 0) { 
      characters.push("snail");
  }
  if (forestoutput.indexOf("🐛") >= 0) { 
      characters.push("caterpillar");
  }
  if (forestoutput.indexOf("🐜") >= 0) { 
      characters.push("ant");
  }
  if (forestoutput.indexOf("🐝") >= 0) { 
      characters.push("bee");
  }
  if (forestoutput.indexOf("🐞") >= 0) { 
      characters.push("ladybird");
  }
  if (forestoutput.indexOf("🐖") >= 0) { 
      characters.push("pig");
  }
  if (forestoutput.indexOf("🐄") >= 0) { 
      characters.push("cow");
  }
  if (forestoutput.indexOf("🐎") >= 0) { 
      characters.push("horse");
  }
  
  var i;
  for (i = 0; i < (characters.length - 1); i++) { 
    charList.push(" a " + characters[i]);
  } // formatted version of character list

  for (i = (characters.length - 1); i < (characters.length); i++) {
    finalChar.push(", and a " + characters[i]);
  }
  
  // log the forest trace and the cast of characters.
$('div#trace').html(forestoutput);

  console.log(forestoutput);
  console.log(characters);
  console.log(charList);
  console.log(finalChar);
  
  
// exposition
var pastTense = {tense: RiTa.PAST_TENSE}; //arg for RiTa

  
function title() {
  var titleword = `${RiTa.randomWord('jj')} `;
  var titlewordcase = titleword[0].toUpperCase() + titleword.slice(1);
  var title = "<h1>The " + titlewordcase + " Forest</h1>";
  $('div#title').append(title);
}
  
var plural = {number: RiTa.PLURAL}; //arg for RiTa
  
var dayNight = [
  "day",
  "night"
];
  
var placeDesc = [
  "Through the " + `${RiTa.randomWord('jj')} ` + "and " + `${RiTa.randomWord('jj')} ` + "trees were scattered",
  "In the " + `${RiTa.randomWord('jj')} ` + "and " + `${RiTa.randomWord('jj')} ` + "clearing sat",
  "Wandering through the " + `${RiTa.randomWord('jj')} ` + "and " + `${RiTa.randomWord('jj')} ` + "grass came"
];
  
var weatherDesc = [
  "The " + `${RiTa.randomWord('jj')} ` + "sun " + `${RiTa.conjugate(RiTa.randomWord('vb'), pastTense)} ` + "down " + `${RiTa.randomWord('rb')} ` + "overhead. ",
  "It was snowing " + `${RiTa.randomWord('rb')}, ` + "and everything was covered in a " + `${RiTa.randomWord('jj')} ` + `${RiTa.randomWord('nn')} ` + "of " + `${RiTa.randomWord('jj')} ` + "white. ",
  "The wind was blowing " + `${RiTa.randomWord('rb')}, ` + "and the leaves of the trees " + `${RiTa.conjugate(RiTa.randomWord('vb'), pastTense)} ` + `${RiTa.randomWord('rb')} ` + "as it " + `${RiTa.conjugate(RiTa.randomWord('vb'), pastTense)} ` + "through them. ",
  "It was a " + `${RiTa.randomWord('jj')}, ` + "rainy day, " + "and some " + `${RiTa.randomWord('jj')} ` + "drizzle was just beginning to "  + `${RiTa.randomWord('rb')} ` + "fall " + "afresh. "
];
  
var rollPlace = placeDesc[Math.floor(Math.random()*placeDesc.length)];
var rollWeather = weatherDesc[Math.floor(Math.random()*weatherDesc.length)];
var rollTime = dayNight[Math.floor(Math.random()*dayNight.length)];
  

function exposition() {
  
  
 var exposition = "<p>It was a " + `${RiTa.randomWord('jj')} ` + rollTime + ", and the forest was " + `${RiTa.randomWord('jj')}. ` + rollPlace + " a number of creatures, the heroes of our story;" + charList + finalChar + ". " + rollWeather + "</p>";
 
 console.log(exposition);
  $('div#output').append(exposition);
  
}
  
// function to describe a character.
  
function charDesc() {
  var currentChar = characters[0];
  
  var description = "The " + currentChar + " was a " + `${RiTa.randomWord('jj')} ` + currentChar + ", " + `${RiTa.randomWord('jj')}` + ", " + `${RiTa.randomWord('jj')}` + ", and " + `${RiTa.randomWord('jj')}` + ". The " + currentChar + " enjoyed " + `${RiTa.pluralize(RiTa.randomWord('nn'))}` + ", but hated " + `${RiTa.pluralize(RiTa.randomWord('nn'))}` + ". At this particular moment, it felt " + `${RiTa.randomWord('jj')}` + ", with shades of " + `${RiTa.randomWord('jj')}` + ". ";
  
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
  
  var action = "The " + currentChar + " " + verbedAdverb() + ", " + verbedAdverb() + ", then " + verbedAdverb() + ". It was " + `${RiTa.randomWord('jj')}` + ", and " + `${RiTa.conjugate(RiTa.randomWord('vb'), pastTense)} ` + "the " + `${RiTa.randomWord('nn')}` + ". "; 
  
  console.log(action);
  $('div#output').append(action);
}
  
function charAction() {
  var currentChar = characters[0];
  
  var action = "Nearby, the " + currentChar + " " + verbedAdverb() + ", " + verbedAdverb() + ", then " + verbedAdverb() + ". It was " + `${RiTa.randomWord('jj')}` + ", and " + `${RiTa.conjugate(RiTa.randomWord('vb'), pastTense)} ` + "the " + `${RiTa.randomWord('nn')}` + ". "; 
  
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
  
  rm.loadText("Small neat ears and thick silky hair. It was the Water Rat! Then the two animals stood and regarded each other cautiously. Hullo, Mole! said the Water Rat. Hullo, Rat! said the Mole. Would you like to come over? enquired the Rat presently. Oh, it's all very well to TALK, said the Mole, rather pettishly, he being new to a river and riverside life and its ways. The Rat said nothing, but stooped and unfastened a rope and hauled on it; then lightly stepped into a little boat which the Mole had not observed. It was painted blue outside and white within, and was just the size for two animals; and the Mole's whole heart went out to it at once, even though he did not yet fully understand its uses. The Rat sculled smartly across and made fast. Then he held up his forepaw as the Mole stepped gingerly down. Lean on that! he said. Now then, step lively! and the Mole to his surprise and rapture found himself actually seated in the stern of a real boat. This has been a wonderful day! said he, as the Rat shoved off and took to the sculls again. Do you know, I've never been in a boat before in all my life. What? cried the Rat, open-mouthed: Never been in a--you never--well I--what have you been doing, then? Is it so nice as all that? asked the Mole shyly, though he was quite prepared to believe it as he leant back in his seat and surveyed the cushions, the oars, the rowlocks, and all the fascinating fittings, and felt the boat sway lightly under him. Nice? It's the ONLY thing, said the Water Rat solemnly, as he leant forward for his stroke. Believe me, my young friend, there is NOTHING--absolute nothing--half so much worth doing as simply messing about in boats. Simply messing, he went on dreamily: messing--about--in--boats; messing---- Look ahead, Rat! cried the Mole suddenly. It was too late. The boat struck the bank full tilt. The dreamer, the joyous oarsman, lay on his back at the bottom of the boat, his heels in the air. --about in boats--or WITH boats, the Rat went on composedly, picking himself up with a pleasant laugh. In or out of them, it doesnt matter. Nothing seems really to matter, that's the charm of it. Whether you get away, or whether you don't; whether you arrive at your destination or whether you reach somewhere else, or whether you never get anywhere at all, you're always busy, and you never do anything in particular; and when you've done it there's always something else to do, and you can do it if you like, but you'd much better not. Look here! If you've really nothing else on hand this morning, supposing we drop down the river together, and have a long day of it? The Mole waggled his toes from sheer happiness, spread his chest with a sigh of full contentment, and leaned back blissfully into the soft cushions. WHAT a day I'm having! he said. Let us start at once! Hold hard a minute, then! said the Rat. He looped the painter through a ring in his landing-stage, climbed up into his hole above, and after a short interval reappeared staggering under a fat, wicker luncheon-basket. Shove that under your feet, he observed to the Mole, as he passed it down into the boat. Then he untied the painter and took the sculls again. What's inside it? asked the Mole, wriggling with curiosity. There's cold chicken inside it, replied the Rat briefly; coldtonguecoldhamcoldbeefpickledgherkinssaladfrenchrollscresssan- dwichespottedmeatgingerbeerlemonadesodawater---- O stop, stop, cried the Mole in ecstacies: This is too much! Do you really think so? enquired the Rat seriously. It's only what I always take on these little excursions; and the other animals are always telling me that I'm a mean beast and cut it VERY fine! The Mole never heard a word he was saying. Absorbed in the new life he was entering upon, intoxicated with the sparkle, the ripple, the scents and the sounds and the sunlight, he trailed a paw in the water and dreamed long waking dreams. The Water Rat, like the good little fellow he was, sculled steadily on and forebore to disturb him. I like your clothes awfully, old chap, he remarked after some half an hour or so had passed. I'm going to get a black velvet smoking-suit myself some day, as soon as I can afford it. I beg your pardon, said the Mole, pulling himself together with an effort. You must think me very rude; but all this is so new to me. So--this--is--a--River! THE River, corrected the Rat. And you really live by the river? What a jolly life! By it and with it and on it and in it, said the Rat. It's brother and sister to me, and aunts, and company, and food and drink, and (naturally) washing. It's my world, and I don't want any other. What it hasn't got is not worth having, and what it doesnt know is not worth knowing. Lord! the times we've had together! Whether in winter or summer, spring or autumn, it's always got its fun and its excitements. When the floods are on in February, and my cellars and basement are brimming with drink that's no good to me, and the brown water runs by my best bedroom window; or again when it all drops away and, shows patches of mud that smells like plum-cake, and the rushes and weed clog the channels, and I can potter about dry shod over most of the bed of it and find fresh food to eat, and things careless people have dropped out of boats! But isn't it a bit dull at times? the Mole ventured to ask. Just you and the river, and no one else to pass a word with? No one else to--well, I mustnt be hard on you, said the Rat with forbearance. You're new to it, and of course you don't know. The bank is so crowded nowadays that many people are moving away altogether: O no, it isn't what it used to be, at all. Otters, kingfishers, dabchicks, moorhens, all of them about all day long and always wanting you to DO something--as if a fellow had no business of his own to attend to! What lies over THERE asked the Mole, waving a paw towards a background of woodland that darkly framed the water-meadows on one side of the river. That? O, that's just the Wild Wood, said the Rat shortly. We don't go there very much, we river-bankers. Aren't they--aren't they very NICE people in there? said the Mole, a trifle nervously. W-e-ll, replied the Rat, let me see. The squirrels are all right. AND the rabbits--some of them, but rabbits are a mixed lot. And then there's Badger, of course. He lives right in the heart of it; wouldnt live anywhere else, either, if you paid him to do it. Dear old Badger! Nobody interferes with HIM. Theyd better not, he added significantly. Why, who SHOULD interfere with him? asked the Mole. Well, of course--there--are others, explained the Rat in a hesitating sort of way. Weasels--and stoats--and foxes--and so on. They're all right in a way--I'm very good friends with them--pass the time of day when we meet, and all that--but they break out sometimes, there's no denying it, and then--well, you can't really trust them, and that's the fact. All children, except one, grow up. They soon know that they will grow up, and the way Wendy knew was this. One day when she was two years old she was playing in a garden, and she plucked another flower and ran with it to her mother. I suppose she must have looked rather delightful, for Mrs. Darling put her hand to her heart and cried, “Oh, why can't you remain like this for ever!” This was all that passed between them on the subject, but henceforth Wendy knew that she must grow up. You always know after you are two. Two is the beginning of the end. Of course they lived at 14 [their house number on their street], and until Wendy came her mother was the chief one. She was a lovely lady, with a romantic mind and such a sweet mocking mouth. Her romantic mind was like the tiny boxes, one within the other, that come from the puzzling East, however many you discover there is always one more; and her sweet mocking mouth had one kiss on it that Wendy could never get, though there it was, perfectly conspicuous in the right-hand corner. The way Mr. Darling won her was this: the many gentlemen who had been boys when she was a girl discovered simultaneously that they loved her, and they all ran to her house to propose to her except Mr. Darling, who took a cab and nipped in first, and so he got her. He got all of her, except the innermost box and the kiss. He never knew about the box, and in time he gave up trying for the kiss. Wendy thought Napoleon could have got it, but I can picture him trying, and then going off in a passion, slamming the door. Mr. Darling used to boast to Wendy that her mother not only loved him but respected him. He was one of those deep ones who know about stocks and shares. Of course no one really knows, but he quite seemed to know, and he often said stocks were up and shares were down in a way that would have made any woman respect him. Mrs. Darling was married in white, and at first she kept the books perfectly, almost gleefully, as if it were a game, not so much as a Brussels sprout was missing; but by and by whole cauliflowers dropped out, and instead of them there were pictures of babies without faces. She drew them when she should have been totting up. They were Mrs. Darling's guesses. Wendy came first, then John, then Michael. For a week or two after Wendy came it was doubtful whether they would be able to keep her, as she was another mouth to feed. Mr. Darling was frightfully proud of her, but he was very honourable, and he sat on the edge of Mrs. Darling's bed, holding her hand and calculating expenses, while she looked at him imploringly. She wanted to risk it, come what might, but that was not his way; his way was with a pencil and a piece of paper, and if she confused him with suggestions he had to begin at the beginning again. “Now don't interrupt,” he would beg of her. “I have one pound seventeen here, and two and six at the office; I can cut off my coffee at the office, say ten shillings, making two nine and six, with your eighteen and three makes three nine seven, with five naught naught in my cheque-book makes eight nine seven--who is that moving?--eight nine seven, dot and carry seven--don't speak, my own--and the pound you lent to that man who came to the door--quiet, child--dot and carry child--there, you've done it!--did I say nine nine seven? yes, I said nine nine seven; the question is, can we try it for a year on nine nine seven?” “Of course we can, George,” she cried. But she was prejudiced in Wendy's favour, and he was really the grander character of the two. “Remember mumps,” he warned her almost threateningly, and off he went again. “Mumps one pound, that is what I have put down, but I daresay it will be more like thirty shillings--don't speak--measles one five, German measles half a guinea, makes two fifteen six--don't waggle your finger--whooping-cough, say fifteen shillings”--and so on it went, and it added up differently each time; but at last Wendy just got through, with mumps reduced to twelve six, and the two kinds of measles treated as one. There was the same excitement over John, and Michael had even a narrower squeak; but both were kept, and soon, you might have seen the three of them going in a row to Miss Fulsom's Kindergarten school, accompanied by their nurse. Mrs. Darling loved to have everything just so, and Mr. Darling had a passion for being exactly like his neighbours; so, of course, they had a nurse. As they were poor, owing to the amount of milk the children drank, this nurse was a prim Newfoundland dog, called Nana, who had belonged to no one in particular until the Darlings engaged her. She had always thought children important, however, and the Darlings had become acquainted with her in Kensington Gardens, where she spent most of her spare time peeping into perambulators, and was much hated by careless nursemaids, whom she followed to their homes and complained of to their mistresses. She proved to be quite a treasure of a nurse. How thorough she was at bath-time, and up at any moment of the night if one of her charges made the slightest cry. Of course her kennel was in the nursery. She had a genius for knowing when a cough is a thing to have no patience with and when it needs stocking around your throat. She believed to her last day in old-fashioned remedies like rhubarb leaf, and made sounds of contempt over all this new-fangled talk about germs, and so on. It was a lesson in propriety to see her escorting the children to school, walking sedately by their side when they were well behaved, and butting them back into line if they strayed. On John's footer [in England soccer was called football, “footer” for short] days she never once forgot his sweater, and she usually carried an umbrella in her mouth in case of rain. There is a room in the basement of Miss Fulsom's school where the nurses wait. They sat on forms, while Nana lay on the floor, but that was the only difference. They affected to ignore her as of an inferior social status to themselves, and she despised their light talk. She resented visits to the nursery from Mrs. Darling's friends, but if they did come she first whipped off Michael's pinafore and put him into the one with blue braiding, and smoothed out Wendy and made a dash at John's hair. No nursery could possibly have been conducted more correctly, and Mr. Darling knew it, yet he sometimes wondered uneasily whether the neighbours talked. He had his position in the city to consider. Nana also troubled him in another way. He had sometimes a feeling that she did not admire him. “I know she admires you tremendously, George,” Mrs. Darling would assure him, and then she would sign to the children to be specially nice to father. Lovely dances followed, in which the only other servant, Liza, was sometimes allowed to join. Such a midget she looked in her long skirt and maid's cap, though she had sworn, when engaged, that she would never see ten again. The gaiety of those romps! And gayest of all was Mrs. Darling, who would pirouette so wildly that all you could see of her was the kiss, and then if you had dashed at her you might have got it. There never was a simpler happier family until the coming of Peter Pan. Mrs. Darling first heard of Peter when she was tidying up her children's minds. It is the nightly custom of every good mother after her children are asleep to rummage in their minds and put things straight for next morning, repacking into their proper places the many articles that have wandered during the day. If you could keep awake (but of course you can't) you would see your own mother doing this, and you would find it very interesting to watch her. It is quite like tidying up drawers. You would see her on her knees, I expect, lingering humorously over some of your contents, wondering where on earth you had picked this thing up, making discoveries sweet and not so sweet, pressing this to her cheek as if it were as nice as a kitten, and hurriedly stowing that out of sight. When you wake in the morning, the naughtiness and evil passions with which you went to bed have been folded up small and placed at the bottom of your mind and on the top, beautifully aired, are spread out your prettier thoughts, ready for you to put on. I don't know whether you have ever seen a map of a person's mind. Doctors sometimes draw maps of other parts of you, and your own map can become intensely interesting, but catch them trying to draw a map of a child's mind, which is not only confused, but keeps going round all the time. There are zigzag lines on it, just like your temperature on a card, and these are probably roads in the island, for the Neverland is always more or less an island, with astonishing splashes of colour here and there, and coral reefs and rakish-looking craft in the offing, and savages and lonely lairs, and gnomes who are mostly tailors, and caves through which a river runs, and princes with six elder brothers, and a hut fast going to decay, and one very small old lady with a hooked nose. It would be an easy map if that were all, but there is also first day at school, religion, fathers, the round pond, needle-work, murders, hangings, verbs that take the dative, chocolate pudding day, getting into braces, say ninety-nine, three-pence for pulling out your tooth yourself, and so on, and either these are part of the island or they are another map showing through, and it is all rather confusing, especially as nothing will stand still. Of course the Neverlands vary a good deal. John's, for instance, had a lagoon with flamingoes flying over it at which John was shooting, while Michael, who was very small, had a flamingo with lagoons flying over it. John lived in a boat turned upside down on the sands, Michael in a wigwam, Wendy in a house of leaves deftly sewn together. John had no friends, Michael had friends at night, Wendy had a pet wolf forsaken by its parents, but on the whole the Neverlands have a family resemblance, and if they stood still in a row you could say of them that they have each other's nose, and so forth. On these magic shores children at play are for ever beaching their coracles [simple boat]. We too have been there; we can still hear the sound of the surf, though we shall land no more. Of all delectable islands the Neverland is the snuggest and most compact, not large and sprawly, you know, with tedious distances between one adventure and another, but nicely crammed. When you play at it by day with the chairs and table-cloth, it is not in the least alarming, but in the two minutes before you go to sleep it becomes very real. That is why there are night-lights. Occasionally in her travels through her children's minds Mrs. Darling found things she could not understand, and of these quite the most perplexing was the word Peter. She knew of no Peter, and yet he was here and there in John and Michael's minds, while Wendy's began to be scrawled all over with him. The name stood out in bolder letters than any of the other words, and as Mrs. Darling gazed she felt that it had an oddly cocky appearance. “Yes, he is rather cocky,” Wendy admitted with regret. Her mother had been questioning her. “But who is he, my pet?” “He is Peter Pan, you know, mother.” At first Mrs. Darling did not know, but after thinking back into her childhood she just remembered a Peter Pan who was said to live with the fairies. There were odd stories about him, as that when children died he went part of the way with them, so that they should not be frightened. She had believed in him at the time, but now that she was married and full of sense she quite doubted whether there was any such person. “Besides,” she said to Wendy, “he would be grown up by this time.” “Oh no, he isn't grown up,” Wendy assured her confidently, “and he is just my size.” She meant that he was her size in both mind and body; she didn't know how she knew, she just knew it. Mrs. Darling consulted Mr. Darling, but he smiled pooh-pooh. “Mark my words,” he said, “it is some nonsense Nana has been putting into their heads; just the sort of idea a dog would have. Leave it alone, and it will blow over.” But it would not blow over and soon the troublesome boy gave Mrs. Darling quite a shock. Children have the strangest adventures without being troubled by them. For instance, they may remember to mention, a week after the event happened, that when they were in the wood they had met their dead father and had a game with him. It was in this casual way that Wendy one morning made a disquieting revelation. Some leaves of a tree had been found on the nursery floor, which certainly were not there when the children went to bed, and Mrs. Darling was puzzling over them when Wendy said with a tolerant smile: “I do believe it is that Peter again!” “Whatever do you mean, Wendy?” “It is so naughty of him not to wipe his feet,” Wendy said, sighing. She was a tidy child. She explained in quite a matter-of-fact way that she thought Peter sometimes came to the nursery in the night and sat on the foot of her bed and played on his pipes to her. Unfortunately she never woke, so she didn't know how she knew, she just knew. “What nonsense you talk, precious. No one can get into the house without knocking.” “I think he comes in by the window,” she said. “My love, it is three floors up.” “Were not the leaves at the foot of the window, mother?” It was quite true; the leaves had been found very near the window. Mrs. Darling did not know what to think, for it all seemed so natural to Wendy that you could not dismiss it by saying she had been dreaming. “My child,” the mother cried, “why did you not tell me of this before?” “I forgot,” said Wendy lightly. She was in a hurry to get her breakfast. Oh, surely she must have been dreaming. But, on the other hand, there were the leaves. Mrs. Darling examined them very carefully; they were skeleton leaves, but she was sure they did not come from any tree that grew in England. She crawled about the floor, peering at it with a candle for marks of a strange foot. She rattled the poker up the chimney and tapped the walls. She let down a tape from the window to the pavement, and it was a sheer drop of thirty feet, without so much as a spout to climb up by. Certainly Wendy had been dreaming. But Wendy had not been dreaming, as the very next night showed, the night on which the extraordinary adventures of these children may be said to have begun. On the night we speak of all the children were once more in bed. It happened to be Nana's evening off, and Mrs. Darling had bathed them and sung to them till one by one they had let go her hand and slid away into the land of sleep. All were looking so safe and cosy that she smiled at her fears now and sat down tranquilly by the fire to sew. It was something for Michael, who on his birthday was getting into shirts. The fire was warm, however, and the nursery dimly lit by three night-lights, and presently the sewing lay on Mrs. Darling's lap. Then her head nodded, oh, so gracefully. She was asleep. Look at the four of them, Wendy and Michael over there, John here, and Mrs. Darling by the fire. There should have been a fourth night-light. While she slept she had a dream. She dreamt that the Neverland had come too near and that a strange boy had broken through from it. He did not alarm her, for she thought she had seen him before in the faces of many women who have no children. Perhaps he is to be found in the faces of some mothers also. But in her dream he had rent the film that obscures the Neverland, and she saw Wendy and John and Michael peeping through the gap. The dream by itself would have been a trifle, but while she was dreaming the window of the nursery blew open, and a boy did drop on the floor. He was accompanied by a strange light, no bigger than your fist, which darted about the room like a living thing and I think it must have been this light that wakened Mrs. Darling. She started up with a cry, and saw the boy, and somehow she knew at once that he was Peter Pan. If you or I or Wendy had been there we should have seen that he was very like Mrs. Darling's kiss. He was a lovely boy, clad in skeleton leaves and the juices that ooze out of trees but the most entrancing thing about him was that he had all his first teeth. When he saw she was a grown-up, he gnashed the little pearls at her. ");
  
var speech = "It approached the " + prevChar + ", " + verbedAdverb() + " to it, " + "and said: " + " <br/></br/>'Excuse me, but I was wondering: " + ` ${rm.generateSentences(40).join(" ")}` + "'" + "<br/><br/>'But --' said the " + prevChar + ` ${RiTa.randomWord('rb')}` + ", only to be interrupted. <br/><br/>'" + `${rm.generateSentences(40).join(" ")}` + "' " + "<br/><br/>'Actually,' responded the " + prevChar + ` ${RiTa.randomWord('rb')}` + ", 'I think you'll find the following. " + `${rm.generateSentences(80).join(" ")}` + "' " + "<br/><br/>The " + currentChar + " felt " + `${RiTa.randomWord('jj')} ` + "at this, and " + verbedAdverb() + ", " + `${RiTa.getPresentParticiple(RiTa.randomWord('vb'))} ` + `${RiTa.randomWord('rb')}` + ". <br/><br/>";
  
  console.log(speech);
  $('div#output').append(speech);
}
  
  function ending() {
    var ending = " 'I do wish you wouldn't all talk so much,' it said, " + `${RiTa.randomWord('rb')}` + ". ";

  $('div#output').append(ending);
  }
  
// WHAT GOES ON THE PAGE
  
// exposition
  
exposition()
  
var i;
for (i = 0; i < 1; i++) {
 title();
 charDesc();
 charActionFirst();
 characters.push(characters.shift());  // moves first character to end of array so we can start over
}

  for (i = 0; i < characters.length-1; i++) { 
  charAction();
  charDesc();
  charSpeech();
 characters.push(characters.shift());  // moves first character to end of array so we can start over
}
  
for (i = characters.length - 1; i < characters.length; i++) { 
  charAction();
  charDesc();
  charSpeech();
  ending();
 characters.push(characters.shift());  // moves first character to end of array so we can start over
}
  
});