

const radicals = [..."日月金木水火土竹戈十大中一弓人心手口尸廿山女田重卜*"];
const mapping = radicals.map((radical, i) => ([String.fromCodePoint(0x41+i), radical]))
const state = {
    A: 0.75,
    B: 0.66,
    C: 0.5,
}

function next(notes, state, key=0) {
    return () => {
            
        let sum = Object.values(state).reduce((sum, value) => sum + value);
        let keys = Object.keys(state);
        let getNewCard = (Math.random() * keys.length) < sum
        
        function selectFromPrevious(note) {
            return state[note[key]] < Math.random()
        }

        function getNew(note) {
            return !state[note[key]];
        }
        let note = notes.find(getNewCard ? getNew : selectFromPrevious);
        console.log(note);
        return answer => {
            answer && state[note[key]]++
            state[note[key]] /= 2;
        }
    }
}
console.log(next(mapping, state, 0));
