
import { useState, useEffect } from "react";
import { getDeliById } from "../APICake/cakeApi";

const Detalle = () => {

  const [producto, setProducto] = useState({});

  useEffect(() => {
    setProducto(getDeliById());
  }, []);

  return <div>{producto}</div>
};

export default Detalle;