class Node {
    constructor(size, next = null) {
      this.size = size;
      this.next = next;
    }
  }
  
  class Queue {
    constructor(limit = 4) {
      this.front = null;
      this.back = null;
      this.length = 0;
      this.limit = limit;
      this.waitingTime = 0;
    }
  
    isFull = () => this.length === this.limit;
  
    isEmpty = () => this.length === 0;
  
    peek = () => this.waitingTime;
  
    addNode = (size) => {
      const newNode = new Node(size);
      if (this.isEmpty()) this.front = newNode;
      else this.back.next = newNode;
  
      this.back = newNode;
      this.length++;
      this.waitingTime += size * 0.5;
    };
    enqueue = (size) => {
      if (this.isFull()) {
        console.log(`The line is full. Come back after ${this.waitingTime} minutes`);
      } else {
        let peopleNum = size;
        while (peopleNum > 12) {
          this.addNode(12);
          peopleNum -= 12;
        }
        this.addNode(peopleNum);
      }
    };
  
    dequeue = () => {
      if (this.isEmpty()) {
        console.log("Queue is empty, no one to ride!");
      } else {
        const removed = this.front;
        if (this.length === 1) {
          this.front = null;
          this.back = null;
        } else {
          this.front = removed.next;
        }
        this.length--;
        this.waitingTime -= removed.size * 0.5;
        return removed.size;
      }
    };
  }
  
  const disney = new Queue(2);
  console.log(disney.peek());
  disney.enqueue(10);
  console.log(disney.peek());
  disney.enqueue(12);
  console.log(disney.peek());
  disney.enqueue(45);
  console.log(disney.peek());
  disney.enqueue(22);
  console.log(disney.peek());
  
  console.log(disney.dequeue());
  console.log(disney.dequeue());
//   console.log("This many in queue", disney.waitingTime * 2);
  console.log(disney.peek());
//   console.log("Back node", disney.back.size);