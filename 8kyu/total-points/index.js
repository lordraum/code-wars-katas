// Total amount of points
/* 
Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
*/
// For example: ["3:1", "2:2", "0:1", ...]
/* 
Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
*/

const points = (games) =>
  games.reduce((a, b) => (a += b[0] > b[2] ? 3 : b[0] === b[2] ? 1 : 0), 0);

let x = ["3:0", "1:1", "0:2", "2:2", "4:1"]; // 8 puntos

console.log(points(x));
