import React, {FunctionComponent, useState} from 'react';
import styled from 'styled-components';
import { Digit, Operator } from '../../lib/types';

export const App: FunctionComponent = () => {
  const [mem, setMem] = useState<number>(0)
  const [res, setRes] = useState<number>(0)
  const [waitOperand, setWaitOperading] = useState<boolean>(true)
  const [pendingOperator, setPendingOperator] = useState<Operator>()
  const [display, setDisplay] = useState<string>('0')
}

export default App;
