const subhanAllahDisplay = document.getElementById('subhanAllahDisplay')
const subhanAllahIncrimentBtn = document.getElementById('subhanAllahIncrimentBtn')
const subhanAllahDecrimentBtn = document.getElementById('subhanAllahDecrimentBtn')

const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay')
const alhamdulillahIncrimentBtn = document.getElementById('alhamdulillahIncrimentBtn')
const alhamdulillahDecrimentBtn = document.getElementById('alhamdulillahDecrimentBtn')

const allahAkberDisplay = document.getElementById('allahAkberDisplay')
const allahAkberIncrimentBtn = document.getElementById('allahAkberIncrimentBtn')
const allahAkberDecrimentBtn = document.getElementById('allahAkberDecrimentBtn')

const resetBtn = document.getElementById('resetBtn')

let subhanAllahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahAKberInitialValue = 0;


//subhanallah start
subhanAllahIncrimentBtn.addEventListener('click',function(){
    if(subhanAllahInitialValue == 33){
        return alert ('Subhanallah complete. Please Fillup another oner')
    }
    subhanAllahInitialValue +=1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;

})

subhanAllahDecrimentBtn.addEventListener('click', function(){
    if(subhanAllahInitialValue === 0){
        return alert('you cant added negative value');
    }
    subhanAllahInitialValue -= 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
})
// subhanallah end

//alhamdulillah start
alhamdulillahIncrimentBtn.addEventListener('click',function(){
    if(alhamdulillahInitialValue === 33){
        return alert ('Alhamdulillah compleded, Please Fillup Another One')
    }

    alhamdulillahInitialValue +=1;
    alhamdulillahDisplay .innerText = alhamdulillahInitialValue;
})

alhamdulillahDecrimentBtn.addEventListener('click',function(){
    if ( alhamdulillahInitialValue === 0)
    return alert('you cant added negative value');
    alhamdulillahInitialValue -= 1;
    alhamdulillahDisplay.innerText =alhamdulillahInitialValue;
 

})

//alhamdulillah end

// allahu akbar start
allahAkberIncrimentBtn.addEventListener('click',function(){
    if(allahAKberInitialValue === 34){
        return alert(' Allahu akbar completed , please fillup another One')
    }
    allahAKberInitialValue +=1 ;
    allahAkberDisplay.innerText = allahAKberInitialValue;

})

allahAkberDecrimentBtn.addEventListener('click',function(){
    if(allahAKberInitialValue === 0){
        return alert('You Cannot added negative value')
    }
    allahAKberInitialValue -=1;
    allahAkberDisplay.innerText = allahAKberInitialValue;
})

//allahu akbar end

resetBtn.addEventListener('click',function(){
    subhanAllahDisplay.innerText = 0;
    alhamdulillahDisplay.innerText = 0;
    allahAkberDisplay.innerText = 0;
    subhanAllahInitialValue = 0
    alhamdulillahInitialValue = 0;
    allahAKberInitialValue = 0;
})