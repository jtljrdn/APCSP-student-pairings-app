//Declare functions
function funcAdd(name) {
  let student = String(name);
  students.push(student);
  inputText.value = "";
  let str = students.join("<br />");
  resultsText.style.color = "blue";
  resultsText.innerHTML = "Your list of students include: " + "<br>" + str;
}

function funcPair(list) {
  if (list != "") {
    let partnerList = []; //This stores the pairings
    let partner1 = "";
    let partner2 = "";

    for (let x = 0; x < list.length; x++) {
      let rand = Math.floor(Math.random() * list.length);

      partner1 = String(list[rand]);
      list.splice(rand, 1);
      rand = Math.floor(Math.random() * list.length);

      partner2 = String(list[rand]);
      list.splice(rand, 1);

      partnerList.push({ name1: partner1, name2: partner2 });
      console.log(partnerList);
      x = 0;
    }
    fillList(partnerList);
    playSound("sounds/drumRoll.wav");
  } else {
    resultsText.style.color = "red";
    resultsText.innerHTML = "You have not added any students " + "Please add a name and click the button"
  }
}

function fillList(myList){
    let h1 = document.createElement('h1');
    h1.style.color = 'maroon';
    h1.innerHTML = 'Student Pairs: ';
    pairingsList.appendChild(h1);
    myList.forEach(function(item){
        let h2 = document.createElement('h2');
        h2.style.color = 'blue';
        
        h2.innerHTML = `${item.name1} and ${item.name2}`;
        pairingsList.appendChild(h2);
    })
}

function emptyList(list){
    playSound('sounds/swoosh.wav');

    students = [];
    resultsText.innerHTML = '';

    let h1s = document.querySelectorAll("#list-pairings h1");
    for (let i = 0; (h1=h1s[i]); i++) {
        h1.parentNode.removeChild(h1);
    }

    let h2s = document.querySelectorAll("#list-pairings h2")
    for (let i = 0; (h2=h2s[i]); i++) {
        h2.parentNode.removeChild(h2);
    }
}

function playSound(file){
    let myAudio = new Audio(file);
    myAudio.play(file);
}s