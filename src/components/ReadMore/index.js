import {useState} from 'react'

import {
  MainContainer,
  Heading,
  Para,
  Image,
  Description,
  Button,
} from './styledComponents'

const reactHooksDescription =
  'Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components. For curious readers, we have prepared a detailed RFC. Hooks allow you to reuse stateful logic without changing your component hierarchy. Hooks work side-by-side with existing code so you can adopt them gradually.'

const ReadMore = () => {
  const [more, setMore] = useState(false)
  const buttonClicked = () => {
    setMore(prevState => !prevState)
  }
  return (
    <MainContainer>
      <Heading>React Hooks</Heading>
      <Para>Hooks are a new addition to React</Para>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Description>
        {more ? reactHooksDescription : reactHooksDescription.slice(0, 170)}
      </Description>
      <Button onClick={buttonClicked} type="button">
        {more ? 'Read Less' : 'Read More'}
      </Button>
    </MainContainer>
  )
}
export default ReadMore
