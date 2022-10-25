import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import * as React from 'react';
import {useState} from 'react';

function ButtonCount() {
    const [numberCount, setNumberCount] = useState(0);

  function clickCountAdd() {
    setNumberCount(numberCount + 1) 

  }

  function clickCount() {
    setNumberCount(numberCount - 1)
  }

  const stock = (10 - numberCount)



  return (
    <div>
      <p>Stock: {stock}</p>
    <ButtonGroup aria-label="Basic example">
      <Button variant="light" disabled={numberCount === 0 ? true : false} onClick={() => clickCount() }>-</Button>
      <Button variant="light">{numberCount}</Button>
      <Button variant="light" disabled={numberCount === 10 ? true : false} onClick={() => clickCountAdd() }>+</Button>
    </ButtonGroup>
    </div>
  );
}

export default ButtonCount;