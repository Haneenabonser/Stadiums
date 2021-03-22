var userName = prompt("What's your name?");
console.log(userName);
document.write('<h3>' + 'Welcome ' + userName + '</h3>')

var favoriteTeam = prompt("Who is your favorite team?");
console.log(favoriteTeam);
document.write('<h4>' + "Oh cool " + userName + "!" + " This is a picture of your favorite team stadium." + '</h4>');

    while (favoriteTeam !== 'real madrid' && favoriteTeam !== "barcelona" && favoriteTeam !== "manchester city" && favoriteTeam !== "juventus") {
        favoriteTeam = prompt("Please choose only one of these teams: real madrid, barcelona, manchester city, juventus");
    }
    
    if (favoriteTeam === 'real madrid') {
        document.write('<img src="Pictures/realmadrid.jpg"/>');
    }
    else if
        (favoriteTeam === 'barcelona') {
        document.write('<img src="Pictures/barcelona.jpg"/>');
    }
    else if
        (favoriteTeam === 'manchester city') {
        document.write('<img src="Pictures/manchestercity.jpg"/>'); 
    }
    else if (favoriteTeam === 'juventus') {
        document.write('<img src="Pictures/Juve.jpg"/>');
    }




var starRating = prompt("What star rating would you give World Stadiums, 1-5?")
var getStarRating = function() {
    var stars = " ";

    for (var i = 0; i < starRating; i++) {
        stars += '<img src="Pictures/star.jpg" width="25px"/>';

    }
    console.log(stars);
    return stars
}
document.write(getStarRating());

