import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAsync, selectUserInfo } from "./userInfoSlice";
import { selecAccount } from "../../pages/account/accountSlice";
import { InfoCard } from "../InfoCard";

import "./user-info.scss";

const UserInfo = () => {
  const dispatch = useDispatch();
  const { loading, allUsers } = useSelector(selectUserInfo);
  const { user } = useSelector(selecAccount);
  const { token } = user || "";
  const { iduser: id } = user || 0;
  useEffect(() => {
    if (!allUsers.length) {
      dispatch(getAllUsersAsync({ id, token }));
    }
  }, [user]);
  return (
    <div className="user-info">
      <p>Your account: </p>
      {allUsers.length &&
        allUsers.map((item, index) =>
          item.iduser === id ? <InfoCard item={item} index={index} /> : <></>
        )}
      <p>Users accounts: </p>
      {allUsers.length &&
        allUsers.map((item, index) =>
          item.iduser !== id ? <InfoCard item={item} index={index} /> : <></>
        )}
    </div>
  );
};

export default UserInfo;
