import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearUpdatedOrder,
  getAllOrdersAsync,
  selectInfoOrder,
  getUserOrdersAsync,
  clearCanceledOrder,
} from "./infoOrderSlice";
import { selecAccount } from "../../pages/account/accountSlice";
import { OrderCard } from "./OrderCard";

import "./info-order.scss";

const InfoOrder = () => {
  const dispatch = useDispatch();
  const { loading, allOrders, updatedOrder, canceledOrder } =
    useSelector(selectInfoOrder);
  const { user } = useSelector(selecAccount);
  const { token } = user || "";
  const { iduser: id } = user || 0;
  const { role } = user || "costumer";

  useEffect(() => {
    if (!allOrders.length) {
      if (role === "admin") {
        dispatch(getAllOrdersAsync({ id, token }));
      } else {
        dispatch(getUserOrdersAsync({ id, token }));
      }
    }
  }, [user]);

  useEffect(() => {
    if (Object.keys(updatedOrder).length) {
      dispatch(getAllOrdersAsync({ id, token }));
      dispatch(clearUpdatedOrder());
    }
  }, [updatedOrder]);

  useEffect(() => {
    if (Object.keys(canceledOrder).length) {
      dispatch(getUserOrdersAsync({ id, token }));
      dispatch(clearCanceledOrder());
    }
  });

  return (
    <div className="info-order">
      {allOrders.length &&
        allOrders.map((item, index) => (
          <OrderCard
            item={item}
            index={index}
            iduser={id}
            token={token}
            role={role}
          />
        ))}
    </div>
  );
};

export default InfoOrder;
