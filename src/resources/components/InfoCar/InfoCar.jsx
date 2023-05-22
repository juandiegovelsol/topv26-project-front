import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCarsAsync, selectInfoCar } from "./infoCarSlice";
import { selecAccount } from "../../pages/account/accountSlice";
import { CarCard } from "./CarCard";

import "./info-car.scss";

const InfoCar = () => {
  const dispatch = useDispatch();
  const { loading, allCars } = useSelector(selectInfoCar);
  const { user } = useSelector(selecAccount);
  const { token } = user || "";
  const { iduser: id } = user || 0;
  useEffect(() => {
    if (!allCars.length) {
      dispatch(getAllCarsAsync({ id, token }));
    }
  }, [user]);
  return (
    <div className="info-car">
      {allCars.length &&
        allCars.map((item, index) => <CarCard item={item} index={index} />)}
    </div>
  );
};

export default InfoCar;
