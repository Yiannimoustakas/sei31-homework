const revengeOfBadger = {
  students: {
    "Alex": 1,
    "Bob": 2,
    "Charlie": 3,
    "Daisy": 4,
    "Eddie": 5
  },

  shortList: [],

  getStudentList: function() {
    // reset shortlist to empty array
    this.shortList = [];

    for (let key in this.students) {
      if (this.students[key] > 2) {
        this.shortList.push(key);
      }
    }

    console.log(this.shortList); // ["charlie", "Daisy", "Eddie"]
    return this.shortList.length;
  },

  draw: function() {
    let winner = "Badger";
    let numberOfCandidates = this.getStudentList(); // 3

    if (numberOfCandidates > 0) {
      let randy = Math.floor(Math.random() * numberOfCandidates);
      // console.log(randy);
      winner = this.shortList[randy]
    }

    return `winner is ${ winner }`
  }
};

// console.log(revengeOfBadger.getStudentList());
console.log(revengeOfBadger.draw());
