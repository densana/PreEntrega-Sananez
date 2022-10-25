
import { useState, useEffect } from "react";
import { getDeliById } from "../APICake/cakeApi";
import { useParams } from "react-router-dom";
import ItemList from "../components/Producto/ItemList";

const Detalle = () => {

  const [producto, setProducto] = useState([]);
  const { idProducto } = useParams();

  const getImagesId = () => {
    setTimeout(() => {
      const producto = getDeliById();
      setProducto(producto);
    }, 2000);
  };

  useEffect(() => {
    getImagesId();
  }, []);


  return <div>
          {idProducto
          ? producto
          .filter((prod) => prod.id === idProducto)
          .map((producto, i) => (
                <ItemList
                  id={producto.id}
                  key={i}
                  title={producto.title}
                  pictureurl={producto.pictureurl}
                  description={producto.description}
                  category={producto.category}
                />
              ))
          : producto.map((producto, i) => (
            <ItemList
              id={producto.id}
              key={i}
              title={producto.title}
              pictureurl={producto.pictureurl}
              description={producto.description}
              category={producto.category}
            />
          ))}
  
  </div>
};

export default Detalle;