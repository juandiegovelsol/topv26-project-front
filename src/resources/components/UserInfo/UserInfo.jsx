import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeUserRoleAsync,
  clearChangedRole,
  getAllUsersAsync,
  updateUserAsync,
  clearUpdatedUser,
  selectUserInfo,
} from "./userInfoSlice";
import { postLoginAsync } from "../../pages/account/accountSlice";
import { selecAccount } from "../../pages/account/accountSlice";
import { InfoCard } from "../InfoCard";
import { TransparentButton } from "../transparentButton";

import "./user-info.scss";

const UserInfo = () => {
  const dispatch = useDispatch();
  const { loading, allUsers, changedRole, updatedUser } =
    useSelector(selectUserInfo);
  const { user } = useSelector(selecAccount);
  const { role } = user || "";
  const { token } = user || "";
  const { iduser: id } = user || 0;
  const [isForm, setIsForm] = useState(false);

  const handleSaveUserEdit = (e) => {
    e.preventDefault();
    const name = e.target.elements[0].value;
    const lastname = e.target.elements[1].value;
    const email = e.target.elements[2].value;
    const password = e.target.elements[3].value;
    dispatch(updateUserAsync({ id, token, email, password, name, lastname }));
    setIsForm(false);
  };

  const handleUserEdit = (item) => {
    setIsForm(true);
  };

  const handleChangeRole = (item) => {
    const { iduser: id2 } = item;
    dispatch(changeUserRoleAsync({ id, id2, token }));
  };

  useEffect(() => {
    if (!allUsers.length && user.role === "admin") {
      dispatch(getAllUsersAsync({ id, token }));
    }
  }, [user]);

  useEffect(() => {
    if (Object.keys(changedRole).length) {
      dispatch(getAllUsersAsync({ id, token }));
      dispatch(clearChangedRole());
    }
  }, [changedRole]);

  useEffect(() => {
    if (Object.keys(updatedUser).length) {
      if (updatedUser.role === "admin") {
        dispatch(getAllUsersAsync({ id, token }));
        dispatch(clearUpdatedUser());
      } else {
      }
    }
  }, [updatedUser]);

  useEffect(() => {
    if (user.role === "admin") {
      dispatch(getAllUsersAsync({ id, token }));
    }
  }, []);

  if (role === "admin") {
    return (
      <div className="user-info">
        <p>Your account: </p>
        {allUsers.length &&
          allUsers.map((item, index) =>
            item.iduser === id ? (
              <InfoCard
                item={item}
                index={index}
                isForm={isForm}
                handleSubmit={handleSaveUserEdit}
              >
                {!isForm && (
                  <TransparentButton
                    handleOrder={() => handleUserEdit(item)}
                    text={"Edit Info"}
                  />
                )}
              </InfoCard>
            ) : (
              <></>
            )
          )}
        <p>Users accounts: </p>
        {allUsers.length &&
          allUsers.map((item, index) =>
            item.iduser !== id ? (
              <InfoCard item={item} index={index}>
                <TransparentButton
                  handleOrder={() => handleChangeRole(item)}
                  text={"Change Role"}
                />
              </InfoCard>
            ) : (
              <></>
            )
          )}
      </div>
    );
  } else {
    return (
      <div className="user-info">
        <p>Your account: </p>
        {Object.keys(updatedUser).length ? (
          <InfoCard
            item={updatedUser}
            index={1}
            isForm={isForm}
            handleSubmit={handleSaveUserEdit}
          >
            {!isForm && (
              <TransparentButton
                handleOrder={() => handleUserEdit(user)}
                text={"Edit Info"}
              />
            )}
          </InfoCard>
        ) : Object.keys(user).length ? (
          <InfoCard
            item={user}
            index={1}
            isForm={isForm}
            handleSubmit={handleSaveUserEdit}
          >
            {!isForm && (
              <TransparentButton
                handleOrder={() => handleUserEdit(user)}
                text={"Edit Info"}
              />
            )}
          </InfoCard>
        ) : (
          <></>
        )}
      </div>
    );
  }
};

export default UserInfo;
