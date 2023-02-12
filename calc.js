// xpNeeded[i = 999] = XP needed to go from level i+1 to i+2
// The formula is unknown, these are fixed values taken straight from the game itself
const xpNeeded = [14,127,231,472,720,976,1239,1772,2322,2887,3470,4070,5362,6693,8064,9476,10930,12428,12757,13096,13443,13799,14164,14540,14925,15321,15727,16143,16571,17010,17461,17924,18399,18886,19387,19901,20428,20969,21525,22095,22681,23282,23899,24532,25182,25850,26535,27238,27960,28701,29461,30242,31043,31866,32710,33577,34467,35380,36318,37280,38268,39283,40324,41392,42489,43615,44771,45957,47175,48425,49708,51026,52378,53766,55191,56653,58155,59696,61278,62901,64568,66279,68036,69839,71689,73589,75539,77541,79596,81705,83870,86093,88375,90716,93120,95588,98121,100721,103391,106130,108943,111830,114793,117835,120958,124163,127454,130831,134298,137857,141510,145260,149110,153061,157117,161281,165555,169942,174446,179068,183814,188685,193685,198818,204086,209494,215046,220745,226595,232599,238763,245090,251585,258252,265096,272121,279332,286735,294333,302133,310139,318358,326794,335455,344344,353469,362836,372451,382321,392453,402610,412793,423001,433235,443494,453779,464090,474426,484788,495177,505591,516031,526497,536990,547508,558053,568625,579222,589847,600497,611175,621879,632610,643368,654152,664964,675802,686668,697561,708481,719429,730403,741406,752435,763493,774577,785690,796831,807999,819195,830419,841671,852952,864260,875597,886962,898356,909778,921229,932708,944216,955753,967318,978913,990536,1002189,1013870,1025581,1037321,1049091,1060890,1072718,1084576,1096464,1108381,1120328,1132305,1144312,1156349,1168417,1180514,1192641,1204799,1216987,1229206,1241455,1253735,1266045,1278387,1290759,1303162,1315596,1328061,1340558,1353085,1365644,1378234,1390856,1403510,1416195,1428911,1441660,1454440,1467252,1480097,1492973,1505882,1518823,1531796,1544802,1557840,1570911,1584014,1597150,1610319,1623521,1636756,1650025,1663326,1676660,1690028,1703429,1716864,1730333,1743835,1757370,1770940,1784543,1798181,1811853,1825559,1839299,1853073,1866882,1880725,1894603,1908516,1922464,1936446,1950463,1964516,1978603,1992726,2006884,2021077,2035306,2049571,2063871,2078207,2092578,2106986,2121430,2135909,2150425,2164978,2179566,2194191,2208853,2223551,2238286,2253058,2267867,2282713,2297596,2312516,2327474,2342469,2357501,2372571,2387679,2402824,2418007,2433228,2448488,2463785,2479121,2494495,2509907,2525358,2540848,2556376,2571943,2587549,2603194,2618878,2634602,2650365,2666167,2682008,2697890,2713810,2729771,2745772,2761812,2777893,2794014,2810175,2826377,2842619,2858902,2875225,2891590,2907995,2924441,2940928,2957457,2974027,2990638,3007291,3023985,3040721,3057499,3074319,3091181,3108085,3125032,3142020,3159052,3176126,3193242,3210401,3227604,3244849,3262137,3279469,3296843,3314262,3331724,3349229,3366778,3384372,3402009,3419690,3437415,3455185,3472999,3490858,3508761,3526709,3544702,3562740,3580823,3598952,3617125,3635344,3653609,3671919,3690275,3708677,3727125,3745619,3764159,3782746,3801379,3820058,3838785,3857558,3876378,3895245,3914159,3933121,3952130,3971186,3990291,4009443,4028642,4047890,4067186,4086530,4105923,4125364,4144853,4164392,4183979,4203615,4223300,4243035,4262818,4282652,4302535,4322467,4342449,4362482,4382564,4402697,4422880,4443113,4463397,4483732,4504117,4524554,4545041,4565580,4586170,4606812,4627505,4648250,4669047,4689896,4710797,4731750,4752755,4773814,4794924,4816088,4837304,4858574,4879896,4901272,4922702,4944185,4965721,4987312,5008956,5030655,5052408,5074215,5096077,5117993,5139964,5161990,5184071,5206208,5228400,5250647,5272950,5295308,5317723,5340193,5362720,5385303,5407942,5430638,5453391,5476201,5499067,5521991,5544972,5568011,5591107,5614261,5637473,5660743,5684071,5707457,5730902,5754406,5777968,5801589,5825269,5849009,5872807,5896666,5920583,5944561,5968599,5992696,6016854,6041073,6065352,6089691,6114092,6138553,6163076,6187659,6212305,6237012,6261780,6286611,6311504,6336459,6361476,6386556,6411699,6436904,6462173,6487504,6512899,6538358,6563880,6589466,6615115,6640829,6666608,6692450,6718358,6744330,6770367,6796469,6822636,6848869,6875167,6901532,6927962,6954458,6981020,7007649,7034344,7061106,7087935,7114831,7141794,7168825,7195923,7223089,7250323,7277625,7304996,7332434,7359942,7387518,7415163,7442877,7470660,7498513,7526435,7554428,7582490,7610622,7638825,7667098,7695442,7723857,7752343,7780900,7809528,7838229,7867000,7895844,7924760,7953748,7982808,8011942,8041148,8070427,8099779,8129205,8158704,8188277,8217924,8247645,8277440,8307310,8337254,8367274,8397368,8427538,8457783,8488103,8518500,8548972,8579521,8610146,8640847,8671626,8702481,8733413,8764423,8795510,8826675,8857918,8889239,8920639,8952116,8983673,9015308,9047023,9078816,9110690,9142643,9174675,9206788,9238981,9271255,9303609,9336045,9368561,9401159,9433838,9466598,9499441,9532366,9565373,9598463,9631635,9664890,9698229,9731651,9765156,9798745,9832418,9866175,9900017,9933943,9967954,10002050,10036232,10070498,10104851,10139289,10173814,10208424,10243122,10277906,10312777,10347735,10382780,10417913,10453134,10488443,10523841,10559326,10594901,10630564,10666317,10702159,10738091,10774112,10810224,10846425,10882718,10919101,10955574,10992140,11028796,11065544,11102384,11139317,11176341,11213458,11250668,11287971,11325367,11362857,11400440,11438117,11475889,11513755,11551715,11589771,11627921,11666167,11704509,11742946,11781480,11820110,11858836,11897660,11936580,11975598,12014713,12053926,12093237,12132646,12172154,12211760,12251466,12291271,12331175,12371179,12411284,12451488,12491793,12532199,12572705,12613313,12654023,12694834,12735747,12776763,12817881,12859102,12900426,12941853,12983384,13025019,13066757,13108600,13150548,13192601,13234758,13277021,13319390,13361865,13404446,13447133,13489927,13532828,13575836,13618952,13662176,13705507,13748947,13792496,13836153,13879920,13923796,13967782,14011877,14056083,14100399,14144827,14189365,14234015,14278776,14323649,14368634,14413732,14458943,14504266,14549703,14595253,14640918,14686696,14732589,14778597,14824720,14870958,14917311,14963781,15010366,15057068,15103887,15150823,15197876,15245047,15292336,15339743,15387269,15434913,15482677,15530559,15578562,15626685,15674928,15723291,15771776,15820381,15869108,15917957,15966928,16016022,16065238,16114577,16164040,16213626,16263337,16313171,16363130,16413214,16463424,16513758,16564219,16614806,16665519,16716359,16767326,16818420,16869643,16920993,16972472,17024079,17075815,17127681,17179677,17231802,17284058,17336444,17388961,17441610,17494390,17547302,17600347,17653524,17706834,17760277,17813854,17867565,17921410,17975390,18029504,18083754,18138140,18192661,18247319,18302114,18357045,18412114,18467321,18522665,18578148,18633769,18689530,18745430,18801470,18857650,18913970,18970431,19027034,19083777,19140663,19197691,19254861,19312175,19369631,19427231,19484976,19542864,19600898,19659076,19717400,19775870,19834486,19893248,19952157,20011214,20070418,20129770,20189271,20248920,20308719,20368667,20428765,20489013,20549412,20609961,20670662,20731515,20792520,20853678,20914988,20976452,21038069,21099841,21161766,21223847,21286083,21348474,21411022,21473725,21536586,21599603,21662779,21726112,21789603,21853254,21917063,21981032,22045160,22109450,22173899,22238510,22303283,22368217,22433314,22498573,22563996,22629582,22695332,22761247,22827326,22893571,22959981,23026557,23093300,23160209,23227286,23294530,23361943,23429524,23497274,23565193,23633282,23701542,23769972,23838573,23907346,23976290,24045407,24114697,24184160,24253796,24323607,24393592,24463752,24534088,24604599,24675287,24746152,24817193,24888412,24959809,25031385,25103140,25175074,25247188,25319482,25391957,25464613,25537451,25610471,25683673,25757058,25830627,25904380,25978317,26052439,26126746,26201239,26275919,26350785,26425838,26501079,26576508,26652125,26727931,26803928,26880114,26956490,27033057,27109816,27186767,27263910,27341246,27418775,27496499,27574416,27652528,27730836,27809339,27888039,27966935,28046028,28125320,28204809,28284497,28364385,28444472,28524759,28605247,28685937,28766828,28847921,28929217,29010716,29092419,29174327,29256439,29338756,29421279,29504008,29586945,29670088,29753440,29836999,29920768,30004746,30088934,30173333];

// Amount of XP needed from Level 1 to Level 999
const xpTo999 = 8810514596;

// ["Name", XP/win, XP/loss]
const mainTables = [
	["Monaco", 360, 72],
	["London", 68, 14],
	["Sydney", 177, 35],
	["Moscow/Lisbon", 360, 72],
	["Tokyo", 884, 177],
	//["Cancun", 1581, 0],
	["Las Vegas", 1547, 309],
	["Jakarta", 1768, 707],
	//["Monte Carlo", 1768, 707 ???],
	["Toronto", 2210, 884],
	["Cairo", 3127, 999],
	["Dubai", 4044, 1114],
	//["Cannes", 5622, 0],
	["Shanghai", 5000, 1300],
	["Paris", 6000, 1500],
	["Rome", 6550, 1750],
	["Bangkok", 7500, 2500],
	//["Doha", 10100, 0],
	["Seoul", 9400, 2820],
	["Mumbai", 10500, 3150],
	["Berlin", 13000, 3900],
	["Venice", 26000, 7800]
];

const doubleBetTables = [
	["Bet 100", 177, 35],
	["Bet 500", 360, 72],
	["Bet 2.5k", 884, 177],
	["Bet 10k", 1547, 309],
	["Bet 50k", 1768, 707],
	["Bet 100k", 2210, 884],
	["Bet 500k", 4044, 1114],
	["Bet 2.5m", 6000, 1500],
	["Bet 10m", 9400, 2820]
];

/*const tournamentTables = [
	["Barcelona", 0, 0],
	["Buenos Aires", 0, 0],
	["Rio", 0, 0],
	["Amsterdam", 0, 0],
	["Singapore", 0, 0]
];*/

// Populate table selection when the webpage loads
window.onload = function() {
	let select = document.getElementById("main_tables");

	for (let i = 0; i < mainTables.length; i++) {
		let name = mainTables[i][0];
		let element = document.createElement("option");
		element.textContent = name;
		select.appendChild(element);
	}
	
	select = document.getElementById("2x_tables");
	
	for (let i = 0; i < doubleBetTables.length; i++) {
		let name = doubleBetTables[i][0];
		let element = document.createElement("option");
		element.textContent = name;
		select.appendChild(element);
	}
	
	/*select = document.getElementById("tournament_tables");
	
	for (let i = 0; i < tournamentTables.length; i++) {
		let name = tournamentTables[i][0];
		let element = document.createElement("option");
		element.textContent = name;
		select.appendChild(element);
	}*/
};

// Prevent users from inputting out of range values in number inputs
function checkRange(element) {
	if (element.value != "") {
		if (parseInt(element.value) < parseInt(element.min))
			element.value = element.min;

		if (parseInt(element.value) > parseInt(element.max))
			element.value = element.max;
	}
}

// Format number (adds spaces)
function fmtN(x) {
	let parts = x.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	return parts.join(".");
}

// Toggle <div> display based on its respective checkbox
function toggle(name) {
	let checkBox = document.getElementById(name + "_cb");
	let div = document.getElementById(name + "_div");
	
	div.style.display = checkBox.checked? "block" : "none";
}

// How much XP is needed to go from startLevel to endLevel
function calculateTotalXP(startLevel, endLevel) {
	let xp = 0;
	for (let i = startLevel - 1; i < endLevel - 1; i++)
		xp += xpNeeded[i];
	
	return xp;
}

// Calculate XP based on table, VIP, and cues (if any)
// If XP is -1, show info about the table itself, not the XP requirement
function calculateXP(result, xp) {
	let checkBox = document.getElementById("matches_cb");
	if (!checkBox.checked) {
		result.innerHTML += "<br>";
		return;
	}
	
	let select = document.getElementById("table");
	let selectedValue = select.selectedIndex - 1;
	
	// Didn't select a table, bail
	if (selectedValue == -1) {
		result.innerHTML += "<br>";
		return;
	}
	
	let table;
	
	// Selected a main table
	if (selectedValue < mainTables.length)
		table = mainTables[selectedValue];
	
	// Selected a double bet table
	else /*if (selectedValue < tournamentTables.length)*/ {
		selectedValue -= mainTables.length;
		table = doubleBetTables[selectedValue];
	}
	
	// Selected a tournament table
	/*else {
		selectedValue -= doubleBetTables.length;
		table = tournamentTables[selectedValue];
	}*/
	
	let vipMultiplier = parseFloat(document.querySelector('input[name="vip"]:checked').value);
	let cueMultiplier = 0;
	
	checkBox = document.getElementById("cue_cb");
	if (checkBox.checked) {
		let numCues = parseInt(document.getElementById("cue_num").value) || 0;
		cueMultiplier = parseFloat(document.querySelector('input[name="cue"]:checked').value) * numCues;
	}
	
	// Gained XP = floor(Base XP * VIP) + round(Base XP * Cue)
	let xpPerWin = Math.floor(table[1] * vipMultiplier) + Math.round(table[1] * cueMultiplier);
	let xpPerLoss = Math.floor(table[2] * vipMultiplier) + Math.round(table[2] * cueMultiplier);
	
	// Can't set innerHTML directly, otherwise it will prematurely close the <ul> for us
	let content = "";
	
	// Display information for specified XP
	if (xp != -1) {
		let winsNeeded = (xp / xpPerWin).toFixed(2);
		let lossesNeeded = (xp / xpPerLoss).toFixed(2);
		
		content += "<ul>" +
			"<li><strong>Number of " + table[0] + " wins: </strong>" + fmtN(winsNeeded) + "</li>" +
			"<li><strong>Number of " + table[0] + " losses: </strong>" + fmtN(lossesNeeded) + "</li>";
			
		checkBox = document.getElementById("winrate_cb");
		if (checkBox.checked) {
			let winrate = parseFloat(document.getElementById("winrate").value) || 0.0;
			let matchesNeeded = (xp / ((winrate / 100) * xpPerWin + (1 - (winrate / 100)) * xpPerLoss)).toFixed(2);
			
			content += "<li><strong>Number of " + table[0] + " matches at " + winrate + "% winrate: </strong>" + fmtN(matchesNeeded) + "</li>";
		}
			
		content += "</ul>";
	}
	
	// Display information about the table itself
	else {
		content += "<h2>" + table[0] + " table</h2>" +
			"" +
			"<strong>XP per win (incl. VIP/cue bonus): </strong>" + fmtN(xpPerWin) + "<br>" +
			"<strong>XP per loss (incl. VIP/cue bonus): </strong>" + fmtN(xpPerLoss) + "<br>";
			
		checkBox = document.getElementById("winrate_cb");
		if (checkBox.checked) {
			let winrate = parseFloat(document.getElementById("winrate").value) || 0.0;
			let matchesNeeded = ((winrate / 100) * xpPerWin + (1 - (winrate / 100)) * xpPerLoss).toFixed(2);
			
			content += "<strong>XP per match at " + winrate + "% winrate: </strong>" + fmtN(matchesNeeded) + "<br>";
		}
	}
	
	result.innerHTML += content;
}

function calculate() {
	let result = document.getElementById("result");
	result.innerHTML = "";
	
	let level = parseInt(document.getElementById("level").value) || 1;
	let xp = parseInt(document.getElementById("xp").value) || 0;
	let nextXP = xpNeeded[level - 1] - xp;
	if (nextXP < 1) {
		result.innerHTML = "<strong>Error: </strong> You have more or equal XP (" + fmtN(xp) + ") than the next level requirement (" + fmtN(xpNeeded[level - 1]) + ")";
		result.scrollIntoView();
		return;
	}
	
	let totalXP = calculateTotalXP(1, level) + xp;
	let totalPercent = ((totalXP / xpTo999) * 100).toFixed(2);
	
	let nextPercent = ((xp / xpNeeded[level-1]) * 100).toFixed(2);
	let nextLevel = level + 1;
	
	// Special case where we display information about the table to the user
	calculateXP(result, -1);
	
	result.innerHTML += "<h2>Your stats</h2>" + 
		"<strong>Level and XP: </strong>" + level + " (" + fmtN(xp) + "/" + fmtN(xpNeeded[level-1]) + " - " + nextPercent + "% to " + nextLevel + ")<br>" +
		"<strong>Total XP (from level 1): </strong>" + fmtN(totalXP) + " (" + totalPercent + "% to 999)";
		
	calculateXP(result, totalXP);
	
	result.innerHTML += "<strong>XP needed for next level " + nextLevel + ": </strong>" + fmtN(nextXP);
		
	calculateXP(result, nextXP);
	
	let checkBox = document.getElementById("target_cb");
	if (checkBox.checked) {
		let targetLevel = parseInt(document.getElementById("target").value) || 1;
		
		if (targetLevel <= level) {
			result.innerHTML = "<strong>Error: </strong> You have a higher level (" + level + ") than your target level (" + targetLevel + ")";
			result.scrollIntoView();
			return;
		}
		
		let targetTotalXP = calculateTotalXP(1, targetLevel);
		let targetTotalPercent = ((targetTotalXP / xpTo999) * 100).toFixed(2);
		let targetXP = calculateTotalXP(level, targetLevel) - xp;
		result.innerHTML += "<h2>Target level " + targetLevel + "</h2>" + 
			"<strong>Target total XP (from level 1): </strong>" + fmtN(targetTotalXP) + " (" + targetTotalPercent + "% to 999)";
		
		calculateXP(result, targetTotalXP);
		
		result.innerHTML += "<strong>XP needed for target level " + targetLevel + ": </strong>" + fmtN(targetXP);
		
		calculateXP(result, targetXP);
	}
	
	result.scrollIntoView();
}
