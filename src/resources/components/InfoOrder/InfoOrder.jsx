import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearUpdatedOrder,
  getAllOrdersAsync,
  selectInfoOrder,
} from "./infoOrderSlice";
import { selecAccount } from "../../pages/account/accountSlice";
import { OrderCard } from "./OrderCard";

import "./info-order.scss";

const InfoOrder = () => {
  const dispatch = useDispatch();
  const { loading, allOrders, updatedOrder } = useSelector(selectInfoOrder);
  const { user } = useSelector(selecAccount);
  const { token } = user || "";
  const { iduser: id } = user || 0;
  const [isForm, setIsForm] = useState(false);

  useEffect(() => {
    if (!allOrders.length) {
      dispatch(getAllOrdersAsync({ id, token }));
    }
  }, [user]);

  useEffect(() => {
    if (Object.keys(updatedOrder).length) {
      dispatch(getAllOrdersAsync({ id, token }));
      setIsForm(false);
      dispatch(clearUpdatedOrder());
    }
  }, [updatedOrder]);

  return (
    <div className="info-order">
      {allOrders.length &&
        allOrders.map((item, index) => (
          <OrderCard
            item={item}
            index={index}
            isForm={isForm}
            setIsForm={setIsForm}
            iduser={id}
            token={token}
          />
        ))}
    </div>
  );
};

export default InfoOrder;
