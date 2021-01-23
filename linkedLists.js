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



