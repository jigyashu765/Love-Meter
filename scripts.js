let bothName = document.getElementById('bothName');
let progressBar = document.getElementById("progress-bar");
let calculatBtn = document.getElementById('calculatBtn');
let childrenBtn = document.getElementById('childrenBtn');
let resetBtn = document.getElementById('resetBtn');
let saveBtn = document.getElementById('saveBtn');
let childrenMassage = document.getElementById('children');
let Name1;
let Name2;
let Love;
let childNumber;
let person;
let List = [
    {
        Name1: ['Ram', 'Rama', 'ram', 'rama'],
        Name2: ['Sita', 'sita'],
        Love: '100',
        childNumber: '2'
    },
    
    {
        Name1: ['Sita', 'sita'],
        Name2: ['Ram', 'Rama', 'ram', 'rama'],
        Love: '100',
        childNumber: '2'
    },
    
    {
        Name1: ['Krishna', 'krishna'],
        Name2: ['Radha', 'radha'],
        Love: '100',
        childNumber: '0'
    },
    
    {
        Name1: ['Radha', 'radha'],
        Name2: ['Krishna', 'krishna'],
        Love: '100',
        childNumber: '0'
    },
    
    {
        Name1: ['Krishna', 'krishna'],
        Name2: ['rukmini', 'Rukmini'],
        Love: '100',
        childNumber: '10'
    },
    
    {
        Name1: ['rukmini', 'Rukmini'],
        Name2: ['Krishna', 'krishna'],
        Love: '100',
        childNumber: '10'
    },
    
    {
        Name1: ['Shiv', 'shiv', 'Sankar', 'sankar', 'shiva', 'Shiva'],
        Name2: ['parvati', 'Parvati',],
        Love: '100',
        childNumber: '3'
    },

    {
        Name1: ['parvati', 'Parvati',],
        Name2: ['Shiv', 'shiv', 'Sankar', 'sankar', 'shiva', 'Shiva'],
        Love: '100',
        childNumber: '3'
    },
    
    {
        Name1: ['Vishnu', 'vishnu', 'Shree Hari', 'shree Hari'],
        Name2: ['lakshmi', 'Lakshmi',],
        Love: '100',
        childNumber: '21'
    },
    
    {
        Name1: ['lakshmi', 'Lakshmi',],
        Name2: ['Vishnu', 'vishnu', 'Shree Hari', 'shree Hari'],
        Love: '100',
        childNumber: '21'
    }
];

resetBtn.addEventListener("click", resetFun);
calculatBtn.addEventListener("click", calculatLove);
childrenBtn.addEventListener("click", calculatChild);
saveBtn.addEventListener("click", saveFun);

// This Function Call by Button

function resetFun(){
    bothName.innerHTML = 'Enter Your & Your Partner Name';
    document.getElementById("name1").value = "";
    document.getElementById("name2").value = "";
    document.getElementById("name1").focus();
    calculatBtn.style.display = 'block';
    childrenMassage.innerHTML = '';
    progressBar.style.display = 'none';
    childrenBtn.style.display = 'none';
}

function calculatLove() {
    Name1 = document.getElementById('name1').value;
    Name2 = document.getElementById('name2').value;

    person = List.find(item => {
        return item.Name1.includes(Name1) && item.Name2.includes(Name2);
    });

    if (Name1 === '' || Name2 === '') {
        bothName.innerHTML = 'Enter Your and Your Partner Name First...';
    } else if (person) {
        Love = person.Love;
        notChange();
    } else {
        const combinedNames = Name1 + Name2;
        const hashValue = getHashValue(combinedNames);
        Love = Math.abs(hashValue % 80) + 20;
        childrenBtn.style.display = 'block';
        notChange();
    }
}

function calculatChild() {
    if (person) {
        childrenMassage.innerHTML = Name1 + ' & ' + Name2 + ' have ' + person.childNumber + ' Baby...';
        saveBtn.style.display='none';
    } else {
        childNumber = Math.floor((Math.random() * (Love / 100) * 10) + 1);
        childrenMassage.innerHTML = Name1 + ' & ' + Name2 + ', You May have ' + childNumber + ' Baby in Future...';
        saveBtn.style.display = 'block';
    }
    childrenBtn.style.display = 'None';
}

// This Function Call by Button

// This Function Call by Other Function

function saveFun() {
    const newItem = {
        Name1: Name1,
        Name2: Name2,
        Love: Love,
        childNumber: childNumber
    };
    List.push(newItem);
    saveBtn.style.display = 'none';
}

function getHashValue(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + charCode;
        hash |= 0; // Convert to 32-bit integer
    }
    return hash;
}

function notChange() {
    bothName.innerHTML = Name1 + ' 💖 ' + Name2;
    calculatBtn.style.display = 'none';
    progressBar.style.display = 'block';
    childrenBtn.style.display = 'block';
    progressBar.innerHTML = Love + '%';
}

// This Function Call by Other Function