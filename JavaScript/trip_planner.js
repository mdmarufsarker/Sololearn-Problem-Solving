// Trip Planner


// You need to plan a road trip. You are traveling at an average speed of 40 miles an hour.
// Given a distance in miles as input (the code to take input is already present), output to the console the time it will take you to cover it in minutes.

// Sample Input:
// 150

// Sample Output:
// 225

// Explanation: It will take 150/40 = 3.75 hours to cover the distance, which is equivalent to 3.75*60 = 225 minutes.


function main() { 
    var distance = parseInt(readLine(), 10);
    var speed = 40; 
    var time = 60; 

   console.log(distance/speed*time); 
}