import './ItemListContainer.css'
import cakeApi from "../../APICake/cakeApi";
import ItemList from '../Producto/ItemList'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Ilc() {
  const [filter, setFilter] = useState("");
  const [delicias, setDelicias] = useState([]);
  const { cat } = useParams();

  const getImages = () => {
    setTimeout(() => {
      const delicias = cakeApi;
      setDelicias(delicias);
    }, 2000);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="principal_container">

      <div className="buscador">
      <div>Nuestras Delicias</div>
      <input
        id="filter"
        name="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
      </div>

      <div className="cards-container">
        {cat
          ? delicias
              .filter((deli) => deli.category.includes(filter))
              .filter((deli) => deli.category === cat)
              .map((delicias, i) => (
                <ItemList
                  id={delicias.id}
                  key={i}
                  title={delicias.title}
                  pictureurl={delicias.pictureurl}
                  description={delicias.description}
                  category={delicias.category}
                />
              ))
          : delicias
              .filter((deli) => deli.category.includes(filter))
              .map((delicias, i) => (
                <ItemList
                  id={delicias.id}
                  key={i}
                  title={delicias.title}
                  pictureurl={delicias.pictureurl}
                  description={delicias.description}
                  category={delicias.category}
                />
              ))}
      </div>
    </div>
  );
}

export default Ilc;
