import React from "react";
import { Link } from "react-router-dom";

const Player = () => {
  return (
    <div>
      개별 player 페이지
      <Link to={"./InfoUpdate"}>
        <button>정보 수정</button>
      </Link>
    </div>
  );
};

export default Player;
