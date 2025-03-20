import React from "react";
import UserCard from "./components/UserCard";
import './App.css';

function App() {
  return (
    <div>
      <h1 className="title"><strong>USER CARD</strong> </h1>
      <div className="user-container">
        <UserCard
          name="SEOHO "
          image="https://pbs.twimg.com/media/GgvzY-qbsAAOBmJ?format=jpg&name=4096x4096"
          role="Main Vocal"
        />
        <UserCard
          name="LEEDO"
          image="https://pbs.twimg.com/media/Gg1KiEmaMAArLj6?format=jpg&name=4096x4096"
          role="Main Rapper"
        />
        <UserCard
          name="KEONHEE"
          image="https://pbs.twimg.com/media/Gg1psqwaAAA3Muv?format=jpg&name=4096x4096"
          role="Main Vocal"
        />
        <UserCard
          name="HWANWOONG"
          image="https://pbs.twimg.com/media/GgwhvydaYAAtuHZ?format=jpg&name=4096x4096"
          role="Main Dancer"
        />
        <UserCard
          name="XION"
          image="https://pbs.twimg.com/media/Gg1pwyPaMAICgnP?format=jpg&name=4096x4096"
          role="Visual, Sub Vocal"
        />

      </div>
    </div>


  );
}
export default App;