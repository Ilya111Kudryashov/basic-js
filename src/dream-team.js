const { NotImplementedError } = require('../extensions/index.js');

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
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  let newArr=[];
  for(let i=0;i<members.length;i++){
    if(typeof members[i]=='string'){
            console.log(members[i]);
            let newMember=members[i].slice(0,1);
            console.log(newMember.toUpperCase());
            newArr.push(newMember);
            newArr.sort();
            
        }
    }
    return newArr;
}


module.exports = {
  createDreamTeam
};
