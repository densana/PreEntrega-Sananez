import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import * as React from 'react';
import {useState} from 'react';

function ButtonCount({stock, initial}) {
    const [numberCount, setNumberCount] = useState(initial);

  function clickCountAdd() {
    (stock) !== numberCount ? setNumberCount(numberCount + 1) : setNumberCount(numberCount + 0);
  }

  function clickCount() {
    numberCount !== 0 ? setNumberCount(numberCount - 1) : setNumberCount(numberCount + 0)
  }

  return (
    <div>
      <p>Stock:{stock}</p>
    <ButtonGroup aria-label="Basic example">
      <Button variant="secondary" onClick={() => clickCount()}>-</Button>
      <Button variant="secondary">{numberCount}</Button>
      <Button variant="secondary" onClick={() => clickCountAdd()}>+</Button>
    </ButtonGroup>
    </div>
  );
}

export default ButtonCount;