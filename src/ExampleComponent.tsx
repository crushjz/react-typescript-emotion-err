import React from 'react'
import styled from '@emotion/styled'

const Button = styled.button`
  color: hotpink;
`

const ExampleComponent: React.FC = () => (
  <Button as="a" href="https://github.com/emotion-js/emotion">
    Emotion on GitHub
  </Button>
)

export { ExampleComponent }
