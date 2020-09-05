/*
5, Write a program in javascript for following
    a, declare array
    b, add item
    c, delete item
    d, add at particular index
    e, delete from particular index
*/

let array = undefined;

function declareArray() {
  array = [];
}

function addItem(item) {
  if (!array) {
    console.log("Array is not declared");
    return;
  }

  if (typeof array !== "object") {
    console.log("this operation is not supported");
    return;
  }
  array.push(item);
}

function deleteItem(item) {
  if (!array) {
    console.log("Array is not declared");
    return;
  }

  if (typeof array !== "object") {
    console.log("this operation is not supported");
    return;
  }

  const index = array.indexOf(item);
  if (index === -1) {
    console.log("Item is not present in the array");
    return;
  }

  array.splice(index, 1);
}

function addAtParticularIndex(index, item) {
  if (!array) {
    console.log("Array is not declared");
    return;
  }

  if (typeof array !== "object") {
    console.log("this operation is not supported");
    return;
  }
  if (index < 0) {
    console.log("Please provide valid index");
    return;
  }

  array.splice(index, 0, item);
}

function addAtParticularIndex(index) {
  if (!array) {
    console.log("Array is not declared");
    return;
  }

  if (typeof array !== "object") {
    console.log("this operation is not supported");
    return;
  }

  if (index < 0) {
    console.log("Please provide valid index");
    return;
  }

  array.splice(index, 1);
}
