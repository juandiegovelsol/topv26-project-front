import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCarsAsync,
  updateCarQuantityAsync,
  clearUpdatedQuantity,
  selectInfoCar,
} from "./infoCarSlice";
import { selecAccount } from "../../pages/account/accountSlice";
import { CarCard } from "./CarCard";

import "./info-car.scss";

const InfoCar = () => {
  const dispatch = useDispatch();
  const { loading, allCars, updatedQuantity } = useSelector(selectInfoCar);
  const { user } = useSelector(selecAccount);
  const { token } = user || "";
  const { iduser: id } = user || 0;

  const handleAdd = (quant, idcar) => {
    const iduser = id;
    const quantity = quant + 1;
    dispatch(updateCarQuantityAsync({ iduser, idcar, token, quantity }));
  };

  const handleSubstract = (quant, idcar) => {
    const iduser = id;
    const quantity = quant > 0 ? quant - 1 : quant;
    dispatch(updateCarQuantityAsync({ iduser, idcar, token, quantity }));
  };

  useEffect(() => {
    if (!allCars.length) {
      dispatch(getAllCarsAsync({ id, token }));
    }
  }, [user]);

  useEffect(() => {
    if (Object.keys(updatedQuantity).length) {
      dispatch(getAllCarsAsync({ id, token }));
      dispatch(clearUpdatedQuantity());
    }
  }, [updatedQuantity]);

  return (
    <div className="info-car">
      {allCars.length &&
        allCars.map((item, index) => (
          <CarCard
            item={item}
            index={index}
            handleAdd={() => handleAdd(item.quantity, item.idcar)}
            handleSubstract={() => handleSubstract(item.quantity, item.idcar)}
          />
        ))}
    </div>
  );
};

export default InfoCar;
