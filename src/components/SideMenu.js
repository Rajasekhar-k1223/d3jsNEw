import React, { useState } from "react";
import { ReactDialogBox } from "react-js-dialog-box";
import "react-js-dialog-box/dist/index.css";
export default function SideMenu() {
  const [Model, setModel] = useState(false);
  const openBox = () => {
    setModel(true);
  };

  const closeBox = () => {
    setModel(false);
  };
  return (
    <div>
      <li
        style={{ background: "rgb(235, 28, 45)" }}
        title="test1"
        onClick={() => {
          setModel(true);
        }}
      >
        Test1
      </li>
      <li
        style={{ background: "rgb(211, 160, 41)" }}
        title="test1"
        onClick={() => {
          setModel(true);
        }}
      >
        Test1
      </li>
      <li
        style={{ background: "rgb(39, 155, 72)" }}
        title="test1"
        onClick={() => {
          setModel(true);
        }}
      >
        Test1
      </li>
      <li
        style={{ background: "rgb(195, 31, 51)" }}
        title="test1"
        onClick={() => {
          setModel(true);
        }}
      >
        Test1
      </li>
      <li
        style={{ background: "rgb(239, 64, 43)" }}
        title="test1"
        onClick={() => {
          setModel(true);
        }}
      >
        Test1
      </li>
      <li
        style={{ background: "rgb(0, 174, 217)" }}
        title="test1"
        onClick={() => {
          setModel(true);
        }}
      >
        Test1
      </li>
      <li
        style={{ background: "rgb(253, 183, 19)" }}
        title="test1"
        onClick={() => {
          setModel(true);
        }}
      >
        Test1
      </li>
      <li
        style={{ background: "rgb(143, 24, 56)" }}
        title="test1"
        onClick={() => {
          setModel(true);
        }}
      >
        Test1
      </li>
      <li
        style={{ background: "rgb(243, 109, 37)" }}
        title="test1"
        onClick={() => {
          setModel(true);
        }}
      >
        Test1
      </li>
      <li
        style={{ background: "rgb(225, 20, 132)" }}
        title="test1"
        onClick={() => {
          setModel(true);
        }}
      >
        Test1
      </li>
      <li
        style={{ background: "rgb(249, 157, 38)" }}
        title="test1"
        onClick={() => {
          setModel(true);
        }}
      >
        Test1
      </li>
      <li
        style={{ background: "rgb(207, 141, 42)" }}
        title="test1"
        onClick={() => {
          setModel(true);
        }}
      >
        Test1
      </li>
      <li
        style={{ background: "rgb(72, 119, 62)" }}
        title="test1"
        onClick={() => {
          setModel(true);
        }}
      >
        Test1
      </li>
      <li
        style={{ background: "rgb(0, 125, 188)" }}
        title="test1"
        onClick={() => {
          setModel(true);
        }}
      >
        Test1
      </li>
      <li
        style={{ background: "rgb(62, 176, 73)" }}
        title="test1"
        onClick={() => {
          setModel(true);
        }}
      >
        Test1
      </li>
      <li
        style={{ background: "rgb(2, 85, 139)" }}
        title="test1"
        onClick={() => {
          setModel(true);
        }}
      >
        Test1
      </li>
      <li
        style={{ background: "rgb(24, 54, 104)" }}
        title="test1"
        onClick={() => {
          setModel(true);
        }}
      >
        Test1
      </li>
      {Model && (
        <>
          <ReactDialogBox
            closeBox={closeBox}
            modalWidth="60%"
            headerBackgroundColor="red"
            headerTextColor="white"
            headerHeight="65"
            closeButtonColor="white"
            bodyBackgroundColor="white"
            bodyTextColor="black"
            bodyHeight="200px"
            headerText="Title"
          >
            <div>
              <h1>Dialog Content</h1>
            </div>
          </ReactDialogBox>
        </>
      )}
    </div>
  );
}
