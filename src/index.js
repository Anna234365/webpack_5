import './index.scss';

const myObject = {
  first: "1",
  senond: "2",
  third: "3"
}

const myNewObj = {
  ...myObject,
  forth: "4",
  fifth: "6"
}

console.log(myNewObj)
