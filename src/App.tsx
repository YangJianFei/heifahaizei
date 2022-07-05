import React, { FC } from 'react';
import { ElProps } from '@/types';

const App: FC<ElProps> = (props: ElProps) => (
  <>
    {props.children}
  </>
);

export default App;