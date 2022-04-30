// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor, fontStyle) for the color and the font style
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

// BASIC
const smallBox = <div className="box box--small">small lightblue box</div>
const mediumBox = <div className="box box--medium">medium pink box</div>
const largeBox = <div className="box box--large">large orange box</div>

function AppBasic() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

// EXTRA CREDIT 1 +2 
const Box = props => (
  <div
    className={'box box--' + props.size + ' ' + props.className}
    style={props.style}
  >
    {' '}
    {props.children}
  </div>
)

// 
function App() {
  return (
    <div>
      <Box
        children="small lightblue box"
        size="small"
        style={{backgroundColor: 'lightblue', fontStyle:'italic'}}
      />
      <Box
        children="medium pink box"
        size="medium"
        style={{backgroundColor: 'pink'}}
      />
      <Box
        children="large orange box"
        size="large"
        style={{backgroundColor: 'orange'}}
      />
    </div>
  )
}
export default App
