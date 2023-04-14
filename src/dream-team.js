const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
// function createDreamTeam( members ) {
//   if ( !Array.isArray(members)) return false;
//   let teamName = "";
//   let members2 = members.map(item => {
//     if (typeof item === 'string') {
//       return item.toString().trim(' ').toUpperCase();
//     } else if (Array.isArray(item)) {
//       return item.map(subitem => subitem.toString().trim(' ').toUpperCase());
//     } else if (typeof item === 'object' && item !== null) {
//       return Object.values(item).map(subitem => subitem.toString().trim(' ').toUpperCase());
//     } else {
//       return '';
//     }
//   }).flat();

//   members2.sort();
//   members2.forEach(element => {
//     if (typeof(element) === "string"){
//         element = element.trim(' ');
//         element = element.toUpperCase();
//         teamName += element[0];
//     } else {

//     }
// });

//   return teamName;

// }

function createDreamTeam(members) {
  let teamName = "";
  if(!Array.isArray(members)) 
    return false;
  members.forEach(element => {
      if (typeof(element) === "string"){
          element = element.trim(' '); 
          element = element.toUpperCase();
          teamName += element[0];
      } else {
          
      }
  });

  const sortedArr = Array.from(teamName).sort();
  teamName = sortedArr.join("");
  
    return teamName;
  
}

// function createDreamTeam(members) {
//   if (!Array.isArray(members)) return false;

//   let members2 = members
//     .map((item) => {
//       if (typeof item === "string") {
//         return item.toString().trim(" ").toUpperCase();
//       } else if (Array.isArray(item)) {
//         return item
//           .filter((subitem) => typeof subitem === "string")
//           .map((subitem) => subitem.toString().trim(" ").toUpperCase());
//         // } else if (typeof item === 'object' && item !== null) {
//         //   return Object.values(item).filter(subitem => typeof subitem === 'string').map(subitem => subitem.toString().trim(' ').toUpperCase());
//       } else {
//         return "";
//       }
//     })
//     .flat();

//   let teamName = "";
//   members2.sort();
//   members2.forEach((element) => {
//     if (typeof element === "string") {
//       element = element.trim().toUpperCase();
//       if (element[0]) {
//         teamName += element[0];
//       }
//     }
//   });

//   const set = new Set(teamName);
//   const sortedArr = Array.from(set).sort();
//   teamName = sortedArr.join("");
  
//   return teamName;
// }


// function createDreamTeam(members) {
//   if (!Array.isArray(members)) return false;
//   let teamNameSet = new Set();
//   members.flatMap(item => {
//     if (typeof item === "string") {
//       return item.trim().toUpperCase();
//     } else {
//       return "";
//     }
//   }).sort().forEach(element => {
//     if (element) {
//       teamNameSet.add(element[0]);
//     }
//   });
//   return Array.from(teamNameSet).join("");
// }

module.exports = {
  createDreamTeam,
};

// console.log(
//   createDreamTeam([
//     ["David Abram"],
//     ["Robin Attfield"],
//     "Thomas Berry",
//     ["Paul R.Ehrlich"],
//     "donna Haraway",
//     " BrIaN_gOodWiN  ",
//     {
//       0: "Serenella Iovino",
//     },
//     "Erazim Kohak",
//     "  val_plumwood",
//   ])
// );

console.log(

  createDreamTeam(3)
);



console.log("false");