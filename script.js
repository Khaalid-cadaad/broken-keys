// Good Luck 💪🏾
function brokenKeys(correct, typed) {
   
    const broken = new Set();

    
    for (let i = 0; i < correct.length; i++) {
        
        if (correct[i] !== typed[i]) {
           
            broken.add(correct[i]);
        }
    }

    
    return Array.from(broken);
}


console.log(brokenKeys("fikrcamp bootcamp", "fikrcomp boorcamp")); // ➞ ["a", "t"]
console.log(brokenKeys("good night", "gppd night")); // ➞ ["o"]