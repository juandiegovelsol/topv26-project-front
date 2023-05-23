import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersAsync, selectInfoOrder } from "./infoOrderSlice";
import { selecAccount } from "../../pages/account/accountSlice";
import { OrderCard } from "./OrderCard";

import "./info-order.scss";

const InfoOrder = () => {
  const dispatch = useDispatch();
  const { loading, allOrders } = useSelector(selectInfoOrder);
  const { user } = useSelector(selecAccount);
  const { token } = user || "";
  const { iduser: id } = user || 0;

  useEffect(() => {
    if (!allOrders.length) {
      dispatch(getAllOrdersAsync({ id, token }));
    }
  }, [user]);

  return (
    <div className="info-order">
      {allOrders.length &&
        allOrders.map((item, index) => <OrderCard item={item} index={index} />)}
    </div>
  );
};

export default InfoOrder;
