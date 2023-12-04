import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      Admin Home
      <Link to={"./Attendances"}>
        <button>출결 관리</button>
      </Link>
      <Link to={"./PlayersInfo"}>
        <button>플레이어 관리</button>
      </Link>
      <Link to={"./FormManagement"}>
        <button>휴가/공결 신청 관리</button>
      </Link>
    </div>
  );
};

export default Admin;
