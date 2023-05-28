import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeUserRoleAsync,
  clearChangedRole,
  getAllUsersAsync,
  updateUserAsync,
  clearUpdatedUser,
  selectUserInfo,
  uploadImageAsync,
  clearImageUrl,
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
  const { imageURL } = useSelector(selectUserInfo);
  const [isForm, setIsForm] = useState(false);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSaveUserEdit = (e) => {
    e.preventDefault();
    setName(e.target.elements[0].value);
    setLastname(e.target.elements[1].value);
    setEmail(e.target.elements[2].value);
    setPassword(e.target.elements[3].value);
    const file = e.target.elements[4].files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "g1jf4xky");
    dispatch(uploadImageAsync({ formData }));
    /* console.log(name, lastname, email, password);
    dispatch(updateUserAsync({ id, token, email, password, name, lastname }));
    setIsForm(false); */
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
    if (imageURL) {
      console.log(name, lastname, email, password);
      const image = imageURL;
      dispatch(
        updateUserAsync({ id, token, email, password, name, lastname, image })
      );
      setIsForm(false);
      dispatch(clearImageUrl());
    }
  }, [imageURL]);

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
