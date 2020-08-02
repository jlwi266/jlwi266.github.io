//Scripts for Azure Character Creation System

//object that stores player data
class PlayerChar {

    //baseline info
    name = "";
    rank = "";
    race = "";
    subRace = "";

    //main attributes
    agility = 3;
    dexterity = 3;
    dodge = 3;
    intelligence = 3;
    strength = 3;
    vitality = 3;
    wisdom = 3;

    //secondary attributes
    accuracy = 0;
    itemization = 0;
    luck = 0;
    resolve = 0;
    speed = 0;

    //misc attributes
    athletics = 0;
    arcana = 0;
    charisma = 0;
    survival = 0;
    mechanical = 0;
    knowledge = 0;
    finesse = 0;

    //misc stats
    magicHeal = 0;
    resolve = 0;
    dodgeChance = 0;
    agiDef = 0;
    intDef = 0;
    strDef = 0;
}

function setPoints(rank) {

    console.log(rank);

    if (rank == "null") {
        document.getElementById("main").value = 0;
        document.getElementById("secondary").value = 0;
        document.getElementById("misc").value = 0;
        setRace("null");
        reset();
    }
    else if (rank == "Cinder") {
        document.getElementById("main").value = 10;
        document.getElementById("secondary").value = 12;
        document.getElementById("misc").value = 16;
        setRace("null");
        reset();
    }
    else if (rank == "Flame") {
        document.getElementById("main").value = 10;
        document.getElementById("secondary").value = 14;
        document.getElementById("misc").value = 18;
        setRace("null");
        reset();
    }
    else if (rank == "Azure Flame") {
        document.getElementById("main").value = 10;
        document.getElementById("secondary").value = 15;
        document.getElementById("misc").value = 20;
        setRace("null");
        reset();
    }
    else if (rank == "Azure Blade") {
        document.getElementById("main").value = 10;
        document.getElementById("secondary").value = 16;
        document.getElementById("misc").value = 24;
        setRace("null");
        reset();
    }

}

function setRace(race) {

    var subSelect = document.getElementById("subrace");

    for (i = subSelect.length - 1; i >= 0; i--) {
        subSelect.options[i] = null;
    }

    if (race == "null") {
        document.getElementById("race").value = "null";
        nullOp = new Option("--please pick a race first--", "null");
        subSelect.appendChild(nullOp);

        reset();
    }
    else if (race == "Miqo'te") {

        option1 = new Option("--please select a subrace--", "null2");
        option2 = new Option("Seeker of the Sun", "Seeker of the Sun");
        option3 = new Option("Keeper of the Moon", "Keeper of the Moon");
        subSelect.appendChild(option1);
        subSelect.appendChild(option2);
        subSelect.appendChild(option3);

        reset();
    }
    else if (race == "Hyur") {

        option1 = new Option("--please select a subrace--", "null2");
        option2 = new Option("Midlander", "Midlander");
        option3 = new Option("Highlander", "Highlander");
        subSelect.appendChild(option1);
        subSelect.appendChild(option2);
        subSelect.appendChild(option3);

        reset();
    }
    else if (race == "Au Ra") {

        option1 = new Option("--please select a subrace--", "null2");
        option2 = new Option("Xaela", "Xaela");
        option3 = new Option("Raen", "Raen");
        subSelect.appendChild(option1);
        subSelect.appendChild(option2);
        subSelect.appendChild(option3);

        reset();
    }
    else if (race == "Roegadyn") {

        option1 = new Option("--please select a subrace--", "null2");
        option2 = new Option("Sea Wolf", "Sea Wolf");
        option3 = new Option("Hellsguard", "Hellsguard");
        subSelect.appendChild(option1);
        subSelect.appendChild(option2);
        subSelect.appendChild(option3);

        reset();
    }
    else if (race == "Elezen") {

        option1 = new Option("--please select a subrace--", "null2");
        option2 = new Option("Duskwight", "Duskwight");
        option3 = new Option("Wildwood", "Wildwood");
        subSelect.appendChild(option1);
        subSelect.appendChild(option2);
        subSelect.appendChild(option3);

        reset();
    }
    else if (race == "Lalafell") {

        option1 = new Option("--please select a subrace--", "null2");
        option2 = new Option("Dunesfolk", "Dunesfolk");
        option3 = new Option("Plainsfolk", "Plainsfolk");
        subSelect.appendChild(option1);
        subSelect.appendChild(option2);
        subSelect.appendChild(option3);

        reset();
    }
    else if (race == "Viera") {

        option1 = new Option("--please select a subrace--", "null2");
        option2 = new Option("Veena", "Veena");
        option3 = new Option("Rava", "Rava");
        subSelect.appendChild(option1);
        subSelect.appendChild(option2);
        subSelect.appendChild(option3);

        reset();
    }
    else if (race == "Hrothgar") {

        option1 = new Option("--please select a subrace--", "null2");
        option2 = new Option("Helions", "Helions");
        option3 = new Option("The Lost", "The Lost");
        subSelect.appendChild(option1);
        subSelect.appendChild(option2);
        subSelect.appendChild(option3);

        reset();
    }
}

function setRaceAttr(subrace) {

    reset();

    if (subrace == "Seeker of the Sun") {
        console.log(subrace);
        document.getElementById("speed").min = 1;
        document.getElementById("speed").value = 1;
        document.getElementById("athletics").min = 1;
        document.getElementById("athletics").value = 1;
        document.getElementById("survival").min = 1;
        document.getElementById("survival").value = 1;
    }
    else if (subrace == "Keeper of the Moon") {
        document.getElementById("accuracy").min = 1;
        document.getElementById("accuracy").value = 1;
        document.getElementById("charisma").min = 1;
        document.getElementById("charisma").value = 1;
        document.getElementById("knowledge").min = 1;
        document.getElementById("knowledge").value = 1;
    }
    else if (subrace == "Midlander") {
        document.getElementById("luck").min = 1;
        document.getElementById("luck").value = 1;
        document.getElementById("charisma").min = 1;
        document.getElementById("charisma").value = 1;
        document.getElementById("survival").min = 1;
        document.getElementById("survival").value = 1;
    }
    else if (subrace == "Highlander") {
        document.getElementById("resolve").min = 1;
        document.getElementById("resolve").value = 1;
        document.getElementById("arcana").min = 1;
        document.getElementById("arcana").value = 1;
        document.getElementById("athletics").min = 1;
        document.getElementById("athletics").value = 1;
    }
    else if (subrace == "Xaela") {
        document.getElementById("itemization").min = 1;
        document.getElementById("itemization").value = 1;
        document.getElementById("survival").min = 1;
        document.getElementById("survival").value = 1;
        document.getElementById("knowledge").min = 1;
        document.getElementById("knowledge").value = 1;
    }
    else if (subrace == "Raen") {
        document.getElementById("accuracy").min = 1;
        document.getElementById("accuracy").value = 1;
        document.getElementById("charisma").min = 1;
        document.getElementById("charisma").value = 1;
        document.getElementById("finesse").min = 1;
        document.getElementById("finesse").value = 1;
    }
    else if (subrace == "Sea Wolf") {
        document.getElementById("speed").min = 1;
        document.getElementById("speed").value = 1;
        document.getElementById("mechanical").min = 1;
        document.getElementById("mechanical").value = 1;
        document.getElementById("charisma").min = 1;
        document.getElementById("charisma").value = 1;
    }
    else if (subrace == "Hellsguard") {
        document.getElementById("resolve").min = 1;
        document.getElementById("resolve").value = 1;
        document.getElementById("survival").min = 1;
        document.getElementById("survival").value = 1;
        document.getElementById("athletics").min = 1;
        document.getElementById("athletics").value = 1;
    }
    else if (subrace == "Duskwight") {
        document.getElementById("speed").min = 1;
        document.getElementById("speed").value = 1;
        document.getElementById("arcana").min = 1;
        document.getElementById("arcana").value = 1;
        document.getElementById("mechanical").min = 1;
        document.getElementById("mechanical").value = 1;
    }
    else if (subrace == "Wildwood") {
        document.getElementById("accuracy").min = 1;
        document.getElementById("accuracy").value = 1;
        document.getElementById("arcana").min = 1;
        document.getElementById("arcana").value = 1;
        document.getElementById("knowledge").min = 1;
        document.getElementById("knowledge").value = 1;
    }
    else if (subrace == "Dunesfolk") {
        document.getElementById("luck").min = 1;
        document.getElementById("luck").value = 1;
        document.getElementById("charisma").min = 1;
        document.getElementById("charisma").value = 1;
        document.getElementById("arcana").min = 1;
        document.getElementById("arcana").value = 1;
    }
    else if (subrace == "Plainsfolk") {
        document.getElementById("resolve").min = 1;
        document.getElementById("resolve").value = 1;
        document.getElementById("arcana").min = 1;
        document.getElementById("arcana").value = 1;
        document.getElementById("mechanical").min = 1;
        document.getElementById("mechanical").value = 1;
    }
    else if (subrace == "Veena") {
        document.getElementById("itemization").min = 1;
        document.getElementById("itemization").value = 1;
        document.getElementById("survival").min = 1;
        document.getElementById("survival").value = 1;
        document.getElementById("charisma").min = 1;
        document.getElementById("charisma").value = 1;
    }
    else if (subrace == "Rava") {
        document.getElementById("accuracy").min = 1;
        document.getElementById("accuracy").value = 1;
        document.getElementById("finesse").min = 1;
        document.getElementById("finesse").value = 1;
        document.getElementById("athletics").min = 1;
        document.getElementById("athletics").value = 1;
    }
    else if (subrace == "Helions") {
        document.getElementById("resolve").min = 1;
        document.getElementById("resolve").value = 1;
        document.getElementById("athletics").min = 1;
        document.getElementById("athletics").value = 1;
        document.getElementById("mechanical").min = 1;
        document.getElementById("mechanical").value = 1;
    }
    else if (subrace == "The Lost") {
        document.getElementById("luck").min = 1;
        document.getElementById("luck").value = 1;
        document.getElementById("athletics").min = 1;
        document.getElementById("athletics").value = 1;
        document.getElementById("charisma").min = 1;
        document.getElementById("charisma").value = 1;
    }
}

function incrementValue(target, category) {

    targetVal = parseInt(document.getElementById(target).value, 10);
    categoryVal = parseInt(document.getElementById(category).value, 10);

    if (categoryVal > 0) {
        document.getElementById(target).value = targetVal + 1;
        document.getElementById(category).value = categoryVal - 1;
    }
}

function decrementValue(target, category) {

    targetVal = parseInt(document.getElementById(target).value, 10);
    targetMin = parseInt(document.getElementById(target).min);
    categoryVal = parseInt(document.getElementById(category).value, 10);

    if (category == "main" && categoryVal < 10 && targetVal > targetMin) {
        document.getElementById(target).value = targetVal - 1;
        document.getElementById(category).value = categoryVal + 1;
    }
    else if (category == "secondary" && categoryVal < 12 && targetVal > targetMin) {
        document.getElementById(target).value = targetVal - 1;
        document.getElementById(category).value = categoryVal + 1;
    }
    else if (category == "secondary" && categoryVal < 14 && targetVal > targetMin) {
        document.getElementById(target).value = targetVal - 1;
        document.getElementById(category).value = categoryVal + 1;
    }
    else if (category == "secondary" && categoryVal < 15 && targetVal > targetMin) {
        document.getElementById(target).value = targetVal - 1;
        document.getElementById(category).value = categoryVal + 1;
    }
    else if (category == "secondary" && categoryVal < 16 && targetVal > targetMin) {
        document.getElementById(target).value = targetVal - 1;
        document.getElementById(category).value = categoryVal + 1;
    }
    else if (category == "misc" && categoryVal < 16 && targetVal > targetMin) {
        document.getElementById(target).value = targetVal - 1;
        document.getElementById(category).value = categoryVal + 1;
    }
    else if (category == "misc" && categoryVal < 18 && targetVal > targetMin) {
        document.getElementById(target).value = targetVal - 1;
        document.getElementById(category).value = categoryVal + 1;
    }
    else if (category == "misc" && categoryVal < 20 && targetVal > targetMin) {
        document.getElementById(target).value = targetVal - 1;
        document.getElementById(category).value = categoryVal + 1;
    }
    else if (category == "misc" && categoryVal < 24 && targetVal > targetMin) {
        document.getElementById(target).value = targetVal - 1;
        document.getElementById(category).value = categoryVal + 1;
    }
}

function reset() {

    //reset main
    document.getElementById("agility").value = 3;
    document.getElementById("dexterity").value = 3;
    document.getElementById("dodge").value = 3;
    document.getElementById("intelligence").value = 3;
    document.getElementById("strength").value = 3;
    document.getElementById("vitality").value = 3;
    document.getElementById("wisdom").value = 3;

    //reset secondary

    document.getElementById("accuracy").value = 0;
    document.getElementById("itemization").value = 0;
    document.getElementById("luck").value = 0;
    document.getElementById("resolve").value = 0;
    document.getElementById("speed").value = 0;

    document.getElementById("accuracy").min = 0;
    document.getElementById("itemization").min = 0;
    document.getElementById("luck").min = 0;
    document.getElementById("resolve").min = 0;
    document.getElementById("speed").min = 0;

    //reset misc

    document.getElementById("athletics").value = 0;
    document.getElementById("arcana").value = 0;
    document.getElementById("charisma").value = 0;
    document.getElementById("survival").value = 0;
    document.getElementById("mechanical").value = 0;
    document.getElementById("knowledge").value = 0;
    document.getElementById("finesse").value = 0;

    document.getElementById("athletics").min = 0;
    document.getElementById("arcana").min = 0;
    document.getElementById("charisma").min = 0;
    document.getElementById("survival").min = 0;
    document.getElementById("mechanical").min = 0;
    document.getElementById("knowledge").min = 0;
    document.getElementById("finesse").min = 0;
}

function updateMiscVals() {

    //calc numbers
    var int = document.getElementById("intelligence").value;
    var wis = document.getElementById("wisdom").value;
    var res = document.getElementById("resolve").value;
    var ddg = document.getElementById("dodge").value;
    var str = document.getElementById("strength").value;
    var spd = document.getElementById("speed").value;
    var agi = document.getElementById("agility").value;

    //used to determine where to round since this system is weird
    var rounder = 0;

    //calc magic heals
    rounder = ((wis * .75) + (int * .25)) % 1;
    if (rounder > 0.50) {
        document.getElementById("magicHealing").value = Math.ceil(((wis * .75) + (int * .25)));
    }
    else {
        document.getElementById("magicHealing").value = Math.floor(((wis * .75) + (int * .25)));
    }

    //calc resolve
    document.getElementById("resolveMisc").value = 20 + (res * 5);

    //calc dodge chance
    document.getElementById("dodgeChance").value = parseInt(ddg, 10) + parseInt(spd, 10);

    //calc agi def
    rounder = (agi * .5) % 1;
    if (rounder > 0.50) {
        document.getElementById("agiDef").value = Math.ceil((agi * .5));
    }
    else {
        document.getElementById("agiDef").value = Math.floor((agi * .5));
    }

    //calc int def
    rounder = (int * .5) % 1;
    if (rounder > 0.50) {
        document.getElementById("intDef").value = Math.ceil((int * .5));
    }
    else {
        document.getElementById("intDef").value = Math.floor((int * .5));
    }

    //calc str def
    rounder = (str * .5) % 1;
    if (rounder > 0.50) {
        document.getElementById("strDef").value = Math.ceil((str * .5));
    }
    else {
        document.getElementById("strDef").value = Math.floor((str * .5));
    }

}

//WHY DOESN'T JS HAVE STRINGBUILDER, AHHHHH
function writeString() {

    console.log(document.getElementById("charName").value);

    if ((document.getElementById("main").value == 0) && (document.getElementById("secondary").value == 0) && (document.getElementById("misc").value == 0) && (document.getElementById("rank").value != "null") && (document.getElementById("race").value != "null") && (document.getElementById("subrace").value != "null") && (document.getElementById("charName").value != "")){

        console.log("You're in!");

        var output = "";

        output += "Character Name - " + document.getElementById("charName").value + "\n";
        output += "Free Company Rank - " + document.getElementById("rank").value + "\n";
        output += "Race - " + document.getElementById("race").value + "\n";
        output += "Sub Race - " + document.getElementById("subrace").value + "\n\n";

        output += "Main Attributes\n";
        output += "Agility - " + document.getElementById("agility").value + "\n";
        output += "Dexterity - " + document.getElementById("dexterity").value + "\n";
        output += "Dodge - " + document.getElementById("dodge").value + "\n";
        output += "Intelligence - " + document.getElementById("intelligence").value + "\n";
        output += "Strength - " + document.getElementById("strength").value + "\n";
        output += "Vitality - " + document.getElementById("vitality").value + "\n";
        output += "Wisdom - " + document.getElementById("wisdom").value + "\n\n";

        output += "Secondary Attributes\n";
        output += "Accuracy - " + document.getElementById("accuracy").value + "\n";
        output += "Itemization - " + document.getElementById("itemization").value + "\n";
        output += "Luck - " + document.getElementById("luck").value + "\n";
        output += "Resolve - " + document.getElementById("resolve").value + "\n";
        output += "Speed - " + document.getElementById("speed").value + "\n\n";

        output += "Misc Attributes\n";
        output += "Athletics - " + document.getElementById("athletics").value + "\n";
        output += "Arcana - " + document.getElementById("arcana").value + "\n";
        output += "Charisma - " + document.getElementById("charisma").value + "\n";
        output += "Survival - " + document.getElementById("survival").value + "\n";
        output += "Mechanical - " + document.getElementById("mechanical").value + "\n";
        output += "Knowledge - " + document.getElementById("knowledge").value + "\n";
        output += "Finesse - " + document.getElementById("finesse").value + "\n\n";

        output += "Magic Healing = " + document.getElementById("magicHealing").value + "\n";
        output += "Resolve = " + document.getElementById("resolveMisc").value + "\n";
        output += "Dodge Chance = " + document.getElementById("dodgeChance").value + "\n";
        output += "Agi Defense = " + document.getElementById("agiDef").value + "\n";
        output += "Int Defense = " + document.getElementById("intDef").value + "\n";
        output += "Str Defense = " + document.getElementById("strDef").value + "\n";

        copy(output);

        alert("Character data copied to clipboard.");
    }
    else {
        alert("Form not complete. Please ensure that all fields are filled in, and that you have allocated all points.");
    }
}

function copy(str) {
    // Create new element
    var el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = { position: 'absolute', left: '-9999px' };
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);
}

/*function download(output) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(output));
    element.setAttribute('download', document.getElementById("charName").value + ".txt");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}*/