/* Badger's Revenge
The names of those who are witnessed clapping Badger more than twice in the first four days of
any one week will go into a draw. On Friday morning, a random name will be drawn from that list and 
the 'winner' will be forced to deliver the solution to Friday's warmup.

Create a program that Badger can use for this task - ideally, you should create an object 
(revengeOfBadger) to do this, but if you can get it working using standalone functions, that's cool.

Your program should:

Track how many times each student in the class has clapped this week (just make up the numbers);
Include a collection of candidates for the Friday draw (ie, a list of names of people who have 
clapped Badger more than twice that week);
Pick a random student to deliver the solution to Friday's warmup.
If no one has clapped enough that week, the program should indicate that Badger has to do 
his own damned warmup. */

//object with names and clapping

const revengeOfBadger = {
  students: {
    'Alex' : 1,
    'Bob' : 2,
    'Charlie' : 3,
    'Daise' : 4,
    'Eddie': 5
  },

  shortList : [],

  getStudentList: function() {

    //reset shirtList to empty array
    this.shortList = [];

    for (let key in this.students) {
      if (this.students[key] > 2) {
        this.shortList.push(key);
      }
    }

    console.log(this.shortList); //["Charlie", "Daisy", "Eddie"]
    return this.shortList.length;
  },

  draw: function () {
    let winner = 'Badger';
    let numberOfcandidates = this.getStudentList(); // 3

    if (numberOfcandidates > 0) {
      let randy = Math.floor(Math.random() * numberOfcandidates);
      //console.log(randy);
      winner = this.shortList[randy]
    }

    return `winner is ${winner}.`
  }
    
};

//console.log(revengeOfBadger.getStudentList())
console.log(revengeOfBadger.draw());