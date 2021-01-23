// const prompt = require("prompt-sync")({ sigint: true });

// class Node {
//   constructor(age, highlight, next = null) {
//     this.age = age;
//     this.highlight = highlight;
//     this.next = next;
//   }
// }

// class LinkedList {
//   constructor(age, highlight) {
//     this.head = new Node(age, highlight);
//   }

//   insertBeginning = (age, highlight) => {
//     const newNode = new Node(age, highlight, this.head);
//     this.head = newNode;
//   };

//   traverse = () => {
//     let current = this.head;
//     while (current) {
//       console.log(`Age: ${current.age}, highlight: ${current.highlight}`);
//       current = current.next;
//     }
//   };

//   insertHighlights = (age) => {
//     let current = this.head;
//     while (current.age < age) {
//       let currentAge = current.age + 1;
//       if (current.next && current.next.age === currentAge) {
//         current = current.next;
//       } else {
//         let highlight = prompt(`What was the highlight for age ${currentAge}?`);
//         let newNode = new Node(currentAge, highlight, current.next);
//         current.next = newNode;
//         current = newNode;
//       }
//     }
//   };
// }

// const hamza = new LinkedList(7, "I got shorts");
// hamza.insertBeginning(3, "I walked");
// hamza.insertBeginning(1, "I crawled");
// hamza.traverse();

// const age = prompt("How old are you?");
// hamza.insertHighlights(age);
// hamza.traverse();


const prompt = require('prompt-sync')({sigint: true});


class Node {
  constructor(year, highlight) {
    this.year = year;
    this.highlight = highlight;
    this.next = null;
  }
}

class LifeHighlights {
  constructor(year, highlight) {
    this.head = new Node(year, highlight);
  }

  add = (year, highlight) => {
    const node = new Node(year, highlight);
    this.head = node;
  };

  traverse = () => {
    let current = this.head;
    while (current) {
      console.log(`At ${current.year}, ${current.highlight}`);
      current = current.next;
    }
  };

  highlights = (year) => {
    let current = this.head;
    while (current.year < year) {
      let myAge = current.year + 1;
      if (current.next && current.next.year === myAge) {
        current = current.next;
      } else {
        let highlight = prompt(`What happened this year ${myAge}?`);
        let nextNode = new Node(myAge, highlight, current.next);
        current.next = nextNode;
        current = nextNode;
      }
    }
  };
}

const emque = new LifeHighlights(1, "I was born");
emque.add(3, "I started running");
emque.add(7, "I started school");
emque.traverse();


const user = prompt("Please enter an age: ");
emque.add(user);
emque.traverse();


