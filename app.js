var userName = prompt("What's your name?");
console.log(userName);
document.write('<h3>' + 'Welcome ' + userName + '</h3>')

var favoriteTeam = prompt("Who is your favorite team?");
console.log(favoriteTeam);
document.write('<h4>' + "Oh cool " + userName + "!" + " This is a picture of your favorite team stadium." + '</h4>');

if (favoriteTeam === 'real madrid') {
    document.write('<img src="Pictures/realmadrid.jpg"/>'); document.body.style.backgroundColor= "Blue";
}
else if
    (favoriteTeam === 'barcelona') {
        document.write('<img src="Pictures/barcelona.jpg"/>'); document.body.style.backgroundColor= "red";
}
else if
    (favoriteTeam === 'manchester city') {
        document.write('<img src="Pictures/manchestercity.jpg"/>'); document.body.style.backgroundColor= "babyBlue";
}
else if (favoriteTeam === 'juventus') {
    document.write('<img src="Pictures/Juve.jpg"/>'); document.body.style.backgroundColor= "Gray";
}
else { alert("Sadly, we don't have a picture of your favorite team stadium, choose another team"); 
}
