import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Label = Styled.Text``;

const App = (): JSX.Element => {
  return (
    <Container>
      <Label>Hello world!</Label>
    </Container>
  );
};

export default App;
