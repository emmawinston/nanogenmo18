$(document).ready(function() {
  
  
function fin() {
  $("#end").append(end);
}
  
var end = "<h2>THE END</h2>" + "<h3><a href='/gallery.html'>< prev </a>&nbsp;&nbsp;<a href='/index.html'>back to start</a>&nbsp;&nbsp;<a href='https://github.com/emmawinston/nanogenmo18'>github</a></h3>";  

var citytemplate = tracery.createGrammar(
   {
    "origin": ["#daysky1#<br/>#daysky2#<br/>#daysky2#<br/>#city#", "#nightsky1#<br/>#nightsky2#<br/>#nightsky2#<br/>#city#"],
	"city": ["#building##building##building##building##building##building##building##building##building#"],
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
		"🌑",
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
    
// figure out what the weather is
  var weather = [];
  var weatherList = [];
  
  if (cityoutput.indexOf("☁️") >= 0) { 
    weather.push("It was a cloudy day");
  }
  if(cityoutput.indexOf("🌧") >= 0) {
    weather.push("Rain fell over the city");
  }
  if (cityoutput.indexOf("⛈") >= 0) { 
      weather.push("Rain fell over the city, and lightning flashed");
  }
  if (cityoutput.indexOf("🌩") >= 0) { 
      weather.push("Lightning flashed from clouds over the city");
  }
  if (cityoutput.indexOf("⚡️") >= 0) { 
      weather.push("Lightning flashed over the city");
  }
  if (cityoutput.indexOf("🌪") >= 0) { 
      weather.push("There was a tornado tearing through the city");
  }
  if (cityoutput.indexOf("💧") >= 0) { 
      weather.push("Rain fell heavily over the city");
  }
  if (cityoutput.indexOf("☄") >= 0) { 
      weather.push("Meteors fell through the dark sky");
  }
  if (cityoutput.indexOf("🌞") >= 0) {
    weather.push("It was a bright and sunny day");
  }
  if (cityoutput.indexOf("🌕") >= 0) {
    weather.push("The moon was bright and full");
  }
  if (cityoutput.indexOf("🌖") >= 0) {
    weather.push("The moon was almost full");
  }
  if (cityoutput.indexOf("🌗") >= 0) {
    weather.push("The moon was a perfect semicircle");
  }
  if (cityoutput.indexOf("🌘") >= 0) {
    weather.push("The moon was a slim crescent");
  }
  if (cityoutput.indexOf("🌑") >= 0) {
    weather.push("The moon was dark and new");
  }
  if (cityoutput.indexOf("🌚") >= 0) {
    weather.push("The moon smiled");
  }
  if (cityoutput.indexOf("⭐️" || "🌟") >= 0) {
    weather.push("It was a starry night");
  }  
  
function list() {
  weatherList = weather.join(". ");
}
  
  
  var i;
  for (i = 0; i < (weather.length - 1); i++) { 
    // weatherList.push(weather[i] + ". ");
    console.log(weatherList);
  } // formatted version of character list
  
  // log the forest trace and the cast of characters.
$('div#trace').html(cityoutput);

  console.log(cityoutput);
  console.log(weather);
  console.log(weatherList);
  
  
  
// buildings

var buildings = [];
var buildingsList = [];
var finalBuilding = [];
  
  if (cityoutput.indexOf("🏠") >= 0) { 
    buildings.push("house");
  }
  if(cityoutput.indexOf("🏡") >= 0) {
    buildings.push("house with a garden");
  }
  if (cityoutput.indexOf("🏚") >= 0) { 
      buildings.push("tumbledown house");
  }
  if (cityoutput.indexOf("🏢") >= 0) { 
      buildings.push("office building");
  }
  if (cityoutput.indexOf("🏬") >= 0) { 
      buildings.push("department store");
  }
  if (cityoutput.indexOf("🏣") >= 0) { 
      buildings.push("Japanese post office");
  }
  if (cityoutput.indexOf("🏤") >= 0) { 
      buildings.push("European post office");
  }
  if (cityoutput.indexOf("🏥") >= 0) { 
      buildings.push("hospital");
  }
  if (cityoutput.indexOf("🏦") >= 0) {
    buildings.push("bank");
  }
  if (cityoutput.indexOf("🏨") >= 0) {
    buildings.push("hotel");
  }
  if (cityoutput.indexOf("🏪") >= 0) {
    buildings.push("convenience store");
  }
  if (cityoutput.indexOf("🏫") >= 0) {
    buildings.push("school");
  }
  if (cityoutput.indexOf("🏩") >= 0) {
    buildings.push("love hotel");
  }
  if (cityoutput.indexOf("💒") >= 0) {
    buildings.push("church");
  }
  if (cityoutput.indexOf("🏛") >= 0) {
    buildings.push("ancient building");
  }
  if (cityoutput.indexOf("⛪️") >= 0) {
    buildings.push("temple");
  }  
  if (cityoutput.indexOf("🕌") >= 0) {
    buildings.push("mosque");
  }
  if (cityoutput.indexOf("🎪") >= 0) {
    buildings.push("fairground");
  }  
  if (cityoutput.indexOf("🕍") >= 0) {
    buildings.push("castle");
  }
  
var i;
  for (i = 0; i < (buildings.length - 1); i++) { 
    buildingsList.push(" a " + buildings[i]);
  } // formatted version of character list

  for (i = (buildings.length - 1); i < (buildings.length); i++) {
    finalBuilding.push(", and a " + buildings[i]);
  }
  
  var i;
  for (i = 0; i < (weather.length - 1); i++) { 
    // weatherList.push(weather[i] + ". ");
    console.log(weatherList);
  } // formatted version of character list
  
  // log the forest trace and the cast of characters.
$('div#trace').html(cityoutput);

  console.log(cityoutput);
  console.log(weather);
  console.log(weatherList);
  
  
// exposition
var pastTense = {tense: RiTa.PAST_TENSE}; //arg for RiTa
  
var plural = {number: RiTa.PLURAL}; //arg for RiTa
  
var dayNight = [];

function rollTime() 
  { 
    if (cityoutput.indexOf("🌞") >= 0) { 
      dayNight.push("day");
  } else if (cityoutput.indexOf("⛅️") >= 0) { 
      dayNight.push("day");
  } else if (cityoutput.indexOf("🌤") >= 0) { 
      dayNight.push("day");
  } else if (cityoutput.indexOf("🌤") >= 0) { 
      dayNight.push("day");
  } else if (cityoutput.indexOf("🌥") >= 0) { 
      dayNight.push("day");
  } else if (cityoutput.indexOf("🌦") >= 0) { 
      dayNight.push("day"); }
  else {
    dayNight.push("night"); 
  }
};
  
var rm = new RiMarkov(3);
rm.loadText("The manufacturing interest of the city consists largely of stove works, in which department it competes with its near neighbor, the town. This flourishing city, of about forty-eight thousand souls, is seven miles distant from the city, up the river, and is in manifold communication with it by railroads on both sides of the river, as well as by street railway. Steam cars run between the city and the town half hourly, during the day and far into the night, and one always encounters a stream of people between these two places, whose current sets both ways, at all times and seasons. the town is at the head of navigation on the river and communicates by street car. The city is a place of great natural beauty, and the Cataract Falls of the Mohawk River at that place add an element of wild grandeur to the scenery. One of the large, rocky islands in the river, known as Simmons' Island, is a popular resort for picnic excursions, and is a delightful place in summer, with its groves of forest trees, and the pleasant noise of waters around its base. The place seems haunted by an atmosphere of Indian legend, and one could well imagine the departed warriors of the lost tribes of the Mohawk treading these wild forest paths, and making eloquent talks before their red brothers gathered around the council fire. The Mohawk and river rivers unite at the town, and seek a common passage to the sea. Mrs. Willard's Seminary for young ladies is located in this city, and is a standard institution of learning. Many of the streets of the town are remarkably clean and finely shaded, and handsome residences and business blocks adorn them. The city is also a headquarters for Spiritualism in this section of the country. The Spiritualistic Society has, I am told, a flourishing, progressive Lyceum, which supersedes, with them, the orthodox Sunday school, and the exercises, consisting in part of marches and recitations, are conducted in a spirited and interesting manner. Foundries for hollow-ware and stoves constitute the leading branch of manufacture in the city of the town. To one not familiar with the process by which iron is shaped into the various articles of common use among us, a visit to the foundries of the town or the city would be full of interest and instruction. Piles of yellow sand are lying in the long buildings used as foundries, while on either side the room workmen are busily engaged fashioning the wet sand into moulds for the reception of the melted iron. Originally the sand is of a bright yellow color, but it soon becomes a dingy brown, by repeated use in cooling the liquid metal. Each moulder has his floor, or special amount of room allotted him for work, and here, during the forenoon, and up to three or four o'clock in the afternoon, he is very busy indeed, preparing for the pouring operation. Pig iron, thrown into a huge cauldron or boiler, and melted to a white heat, is then poured, from a kettle lined with clay, into the sand-moulds, and in a remarkably short space of time the greenish-white liquid which you saw flowing into a tiny, black aperture is shaken out of the sand by the workmen, having been transformed into portions of stoves. These go to the polishing room, and thence to the finishing apartment, where the detached pieces are hammered together, with deafening noise. the town rejoices also in a paper boat manufactory--the boats being made especially for racing and feats of skill. They find sale principally in foreign markets, and at stated seasons divide the attention of the English with the town. The boats are made of layers of brown paper put together with shellac. There is a large society of Grand Army men in the city, one Post numbering five or six hundred members. Their rooms are tastefully decorated, and hung with patriotic pictures, which make the blood thrill anew, as in the days of '61. A miniature fort occupies the centre of the room, and emblematic cannon and crossed swords are to be seen in conspicuous places. A trip down the river, in summer, from the city to New York, is said to afford some of the finest scenery in the world, not excepting the famous sail on the castled Rhine; and the large river boats which leave the city wharf daily, for our American London, are, indeed, floating palaces. The capital city of the Empire State is not, therefore, without its attractions, despite the fact that it was settled by the Dutch, and that a sort of Rip Van Winkle sleep seems, at times, to have fastened itself upon the drowsy spirit of Albanian enterprise. In this connection may be given the etymology of the word Massachusetts, which is somewhat curious. It is said that the red Sachem who governed in this part of the country had his seat on a hill about two leagues south of the city. It lay in the shape of an Indian arrow's head, which in their language was called Mos. Wetuset, pronounced _Wechuset_, was also their name for a hill, and the Sachem's seat was therefore named Mosentuset, which a slight variation changed into the name afterwards received by the colony. the city, as the centre of this colony, began from the first to assume the importance of the first city of New England. Its history belongs not only to itself, but to the country at large, as the pioneer city in the grand struggle for constitutional and political liberty. A large majority of the old landmarks which connected it with the stormy days of the past, and stood as monuments of its primeval history, are now obliterated by time and the steady march of improvements. The face of the country is changed. The three peaks of Beacon Hill, which once lifted themselves to the height of a hundred and thirty feet above the sea, are now cut down into insignificant knolls. The waters of the black bay which swelled around its base have receded to give place to the encroachments of the city. Made lands, laid out in streets and set thick with dwellings, supplant the mud flats formerly covered by the tide. Thousands of acres which were once the bed of the harbor are now densely populated. The house on Harrison avenue where the writer is at present domiciled is located on the spot which once was occupied by one of the best wharves in the city. The largest ocean craft moored to this wharf, on account of the great depth of water flowing around it. The land has steadily encroached on the water, until the peninsula that was is a peninsula no longer, and its former geographical outlines have dropped out of sight in the whirl and rush of the populous and growing city. A few old landmarks of the past, however, still remain, linking the _now_ and the _then_, and among the most prominent of these are Faneuil Hall, the Old South Church, which was founded in 1660, King's Chapel, the Old Granary Burying-ground, Brattle Square Church, quite recently demolished, the old State House, and the city Common. The Common antedates nearly all other special features of the city, and is the pride of the cityians. Here juvenile the city comes in winter to enjoy the exciting exercise of coasting, and woe to the unwary foot passenger who may chance to collide with the long sleds full of noisy boys which shoot like black streaks from the head of Beacon street Mall, down the diagonal length of the Common, to the junction of Boylston and Tremont streets. This winter (1874-5), owing to several unfortunate accidents to passers-by across the snowy roads of the coasters, elevated bridges have been erected, to meet the wants of the people without interfering with the rights of the boys. The Common was originally a fifty-acre lot belonging to a Mr. Blackstone. This was in 1633. It was designed as a cow pasture and training ground, and was sold to the people of the city the next year, 1634, for thirty pounds. The city was taxed for this purpose to the amount of not less than five shillings for each inhabitant. Mr. Blackstone afterwards removed to Cumberland, Rhode Island, where he died, in the spring of 1675. It is said that John Hancock's cows were pastured on the Common in the days of the Revolution. On the tenth of May, 1830, the city authorities forbade the use of the Common for cows, at which time it was inclosed by a two-rail fence. The handsome iron paling which now surrounds the historic area has long since taken the place of the ancient fence. Perhaps the most noticeable, certainly the most famous object on the city Common, is the Great Tree, or Old Elm, which stands in a hollow of rich soil near a permanent pond of water, not far from the centre of the enclosure. It is of unknown age. It was probably over a hundred years old in 1722. Governor Winthrop came to the city in 1630, but before that period the tree probably had its existence. It antedates the arrival of the first settlers, and it seems not unlikely that the Indian Shawmutt smoked the pipe of peace under its pendent branches. In 1844 its height was given at seventy-two and a half feet--girth, one foot above the ground, twenty-two and a half feet. The storms of over two centuries have vented their fury upon it and desthe towned its graceful outlines. But in its age and decrepitude it has been tenderly nursed and partially rejuvenated. Broken limbs, torn off by violent gales, have been replaced by means of iron clamps, and such skill as tree doctors may use. In the last century a hollow orifice in its trunk was covered with canvas and its edges protected by a mixture of clay and other substances. Later, in 1854, Mr. J. V. C. Smith, Mayor of the city, placed around it an iron fence bearing the following inscription: This tree has been standing here for an unknown period. It is believed to have existed before the settlement of the city, being full-grown in 1722. Exhibited marks of old age in 1792, and was nearly desthe towned by a storm in 1832. Protected by an iron inclosure in 1854. What a long array of exciting events has this tree witnessed! In the stirring days of the Revolution the British army was encamped around it. In 1812 the patriot army occupied the same place, in protecting the town against the invasion of a foreign foe. Tumultuous crowds have here assembled on election and Independence days, and its sturdy branches have faced alike the anger of the elements and the wrath of man. Public executions have taken place under its shadow, and witches have dangled from its branches in death's last agonies. Here, in 1740, Rev. George Whitfield preached his farewell sermon to an audience of thirty thousand people; and here, also, at an earlier date, old Matoonas, of the Nipmuck tribe, was shot to death by the dusky warriors of Sagamore John, on a charge of committing the first murder in Massachusetts Colony. An incident of still more romantic interest belongs to the history of the Old Elm. On July third, 1728, this spot was the scene of a mortal combat between two young men belonging to the upper circle of the city society. The cause of dispute was the possession of an unknown fair one. The names of the young men were Benjamin Woodbridge and Henry Phillips, both about twenty years old. The time was evening, the weapons rapiers, and Woodbridge was fatally dispatched by a thrust from the rapier of his antagonist. Phillips fled to a British ship of war lying in the harbor, and was borne by fair breezes to English shores. He did not long survive his opponent, however, dying, it is said, of despair, shortly after his arrival in England. Frog Pond, or Fountain Pond, near the Old Elm, has been transformed from a low, marshy spot of stagnant water, to the clear sheet which is now the delight of the boys. October twenty-fifth, 1848, the water from Cochituate Lake was introduced through this pond, and in honor of the occasion a large procession marched through the principal streets of the city to the Common. Addresses, hymns, prayers, and songs, were the order of the day, and when the pure water of the lake leaped through the fountain gate, the ringing of bells and boom of cannon attested the joy of the people. Near the Old Elm and the Frog Pond, on Flagstaff Hill, the corner-stone of a Soldiers' Monument was laid, September eighteenth, 1871. Some idea of the style of the monument may be gathered from the following description: Upon a granite platform will rest the plinth, in the form of a Greek cross, with four panels, in which will be inserted bas-reliefs representing the Sanitary Commission, the Navy, the Departure for the War and the Return. At each of the four corners will be a statue, of heroic size, representing Peace, History, the Army, and the Navy. The die upon the plinth will also be richly sculptured, and upon it, surrounding the shaft in alto-relievo, will be four allegorical figures representing the North, South, East and West. The shaft is to be an elegant Doric column, the whole to be surmounted by a colossal statue of America resting on a hemisphere, guarded by four figures of the American eagle, with outspread wings. 'America' will hold in her left hand the national standard, and in her right she will support a sheathed sword, and wreaths for the victors. The extreme height of the monument will be ninety feet. The artist is Martin Millmore, of the city. The people of the present day can scarcely comprehend the grand scale on which landscape gardening was attempted a hundred or more years ago. The landed gentry, themselves or their fathers immigrants from England, considered a well-kept park, like those of the immense English estates, an essential to an American one. To this day may be seen traces of their efforts in this direction, in stately avenues of venerable trees, which the iconoclastic hand of modern progress has considerately spared. In some rare instances whole estates have remained untouched, and have become public property, and their beauties thus perpetuated. Bonaventure Cemetery, near Savannah, is a notable instance of this, where a magnificently planned Southern plantation has been transferred from private to public hands, and its valuable trees remain, though the hand of art, in attempting to improve, has rather marred the majestic beauty of the place. Lemon Hill, the nucleus of Fairmount Park, in Philadelphia, was, in revolutionary times, the estate of Robert Morris, and though the landscape gardener has been almost ruthless in his improvements (?), he has been considerate enough to spare some of the century-old trees. To the same private enterprise, love of the picturesque and appreciation of beauty, the city is indebted for Druid Hill Park, in the northern suburbs of the city. Colonel Nicholas Rogers, a soldier of the Revolution and a gentleman of taste and leisure, when the war was over, retired to his country residence, a little distance from the city, then a city of some ten thousand inhabitants, and devoted the remainder of his life to improving and adorning its extensive grounds. He seemed a thorough master of landscape gardening, and all his plans were most carefully matured, so that the trees are most artistically grouped and alternated with lawns; dense masses of foliage are broken into by bays and avenues, and beautiful vistas secured in various directions. Also in the selection of his trees a careful consideration was had of their autumn foliage, so that fine contrasts of color should be produced at that season of the year. The result of all this care and labor was one of the most charming and enchanting private parks which the country afforded. It contained an area of nearly five hundred acres.");  
  
var placeDesc = [
  `${rm.generateSentences(110).join(" ")}`
];

function exposition() {
  
  
 var exposition = "<p>It was a " + `${RiTa.randomWord('jj')} ` + dayNight[0] + " in the " + cityname + " City, which was  " + `${RiTa.randomWord('jj')} ` + " and also rather " + `${RiTa.randomWord('jj')}` + ". " + weatherList + ".</p><p>The " + cityname + " City was " + `${RiTa.randomWord('jj')}` + ". " + placeDesc + "</p><p>The city was made up of a number of buildings: " + buildingsList + finalBuilding + ".</p>";
 
 console.log(exposition);
console.log(dayNight[0]);
  $('div#output').append(exposition);
  
}
  
// function to describe a character.
  
function buildingsDesc() {
  var currentBuilding = buildings[0];
  
  var description = "<p>The " + currentBuilding + " was a " + `${RiTa.randomWord('jj')} ` + currentBuilding + ", " + `${RiTa.randomWord('jj')}` + ", " + `${RiTa.randomWord('jj')}` + ", and " + `${RiTa.randomWord('jj')}` + ". " + `${rm.generateSentences(110).join(" ")}` + "</p>";
  
 console.log(description);
  
 $('div#output').append(description); 
}
  
function verbedAdverb() {
 return `${RiTa.conjugate(RiTa.randomWord('vb'), pastTense)} ` + `${RiTa.randomWord('rb')}`;
}
  
// WHAT GOES ON THE PAGE
  
// exposition
title();
rollTime();
list();
exposition();
  
var i;

for (i = 0; i < buildings.length-1; i++) { 
  buildingsDesc();
  buildings.push(buildings.shift());  // moves first character to end of array so we can start over 
}

  fin();
  
});