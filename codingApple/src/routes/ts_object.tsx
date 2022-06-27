import React from "react";
import PropTypes from "prop-types";
import { type } from "os";

function ts_object() {
  type testType = (a: string) => number;

  let member = {
    name: "kim",
    age: 30,
    plusOne(x: number) {
      return x + 1;
    },
    changeName: () => {
      console.log("안녕");
    },
  };

  member.plusOne(2);
  member.changeName();

  type cutType = (x: string) => string;
  type removeDashType = (x: string) => Number;

  const cutZero: cutType = (x) => {
    let result = x.replace(/^0+/, "");
    return result;
  };

  const removeDash: removeDashType = (x) => {
    let result = x.replace(/-/g, "");
    return parseFloat(result);
  };

  type Member = {
    name: string;
    age: number;
    plusOne: (x: number) => number;
    changeName: () => void;
  };

  //숙제3

  const homework3 = (x: string, func1: cutType, func2: removeDashType) => {
    let result1 = func1(x);
    return func2(result1);
  };
  console.log(homework3("010-1111-2222", cutZero, removeDash));
  return (
    <div>
      <p>{homework3("010-1111-2222", cutZero, removeDash)}</p>
      <code>
        <pre>{`  type testType = (a: string) => number;

let member = {
  name: "kim",
  age: 30,
  plusOne(x: number) {
    return x + 1;
  },
  changeName: () => {
    console.log("안녕");
  },
};

member.plusOne(2);
member.changeName();

type cutType = (x: string) => string;
type removeDashType = (x: string) => Number;

const cutZero: cutType = (x) => {
  let result = x.replace(/^0+/, "");
  return result;
};

const removeDash: removeDashType = (x) => {
  let result = x.replace(/-/g, "");
  return parseFloat(result);
};

type Member = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};

//숙제3

const homework3 = (x: string, func1: cutType, func2: removeDashType) => {
  let result1 = func1(x);
  return func2(result1);
};
console.log(homework3("010-1111-2222", cutZero, removeDash));`}</pre>
      </code>
    </div>
  );
}

ts_object.propTypes = {};

export default ts_object;
