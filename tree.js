const prompt = require('prompt-sync')({sigint: true});
// class TreeNode{
//     constructor(data) {
//         this.data = data;
//         this.rightChild = null;
//         this.leftChild = null;
//     }

//     addChild = (node1, node2) => {
//         this.rightChild = node1;
//         this.leftChild = node2;
//     }

//     traverse = () => {

//     }
// }

//got a bit confused here

class AlienFamily{
    constructor(root) {
        this.root = root;
        this.decendants = [];
    }

    addDecandant = (name) => {
        this.decandants.push(name);
    }

    getChildWithName = (name) => {
        for (let child of this.decendants) {
          if (child.name === name) {
            return child;
          }
        }
        return null;
      };

    traverse = () => {
        let familyTree = [this];
        let name = prompt("Please enter a full name or done if finished: ");
        while (familyTree.length > 0) {
            // so the logic here is I think to split the string and check if the second name (last name) is the same and them add it to the family 
            // let name = prompt("Please enter a full name or done if finished: ");
            name.split('').reverse();
            let lastName = name.slice(-1);
            if (lastName) {
                name = familyTree.pop();
                console.log("added a child")
            }   
        }
    }
}



const familyRoot = new AlienFamily("family");
// let fullName = prompt("Enter name of child (type 'done' if you're finished): ");

// while (fullName !== "done") {
//   let current = root;

//   let names = fullName.split(" ").reverse();
//   let firstName = names.pop();
//   let lastName = names.shift();

//   if (lastName === current.name) {
//     if (names) {
//       for (let name of names) {
//         let child = current.getChildWithName(name);
//         if (child) {
//           current = child;
//         } else {
//           let newNode = new AlienFamily(name);
//           current.addDecandant(newNode);
//           current = newNode;
//         }
//       }
//     }
//     let newNode = new AlienFamily(firstName);
//     current.addDecandant(newNode);
//   }

//   console.log("--------------------------------------------------");
//   fullName = prompt("Enter name of child (type 'done' if you're finished): ");
// }
familyRoot.traverse();
