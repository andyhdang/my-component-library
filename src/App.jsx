import React from 'react'

//Styling imports
import './App.css'
import '../tokens-dist/css/variables.css';

//Component imports
import Button from './components/Button/Button'
import AddIcon from "@mui/icons-material/Add";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Toggle from './components/Toggle/Toggle';
import Gallery from './components/Gallery/Gallery';
import Card from './components/Card/Card';

function App() {

  return (
      <>
        <h1>My Component Library</h1>
        <Toggle></Toggle>
        <Card
          title='Toyota Crown Signia'
          content='Experience the height of sophistication.'
          img='src/assets/car images/2025-toyota-crown-signia-front-and-side-view.webp'
          alt='Toyota Crown Signia'
          detail='2025'
          price='$43,590'
          backgroundColor='#3C2C2A'
          >
        </Card>
        <Card
          title='bZ4X'
          content='Powered up to own the day.'
          img='src/assets/car images/2023-Toyota-bZ4X-front-three-quarter.avif'
          alt='bZ4X'
          detail='2025'
          price='$37,070'
          backgroundColor='#2B5B59'
          >
        </Card>
        <h2>Buttons</h2>
        <h3>Examples</h3>
        <h4>Types</h4>
        <p className='code'>default, primary, subtle, dashed, link</p>
        <div className="examples-wrapper">

          <Button
            type='default'
            label='Default Button'
          />
          <Button
            type='primary'
            label='Primary Button'
          />
          <Button
            type='subtle'
            label='Subtle Button'
          />
          <Button
            type='dashed'
            label='Dashed Button'
          />
          <Button
            type='link'
            label='Link Button'
          />

        </div>
        <h4>Sizes</h4>
        <p className='code'>small, default</p>

        <div className="examples-wrapper">

          <Button
            size='small'
            label='Small Button'
          />
          <Button
            label='Default Size Button'
          />

        </div>
        <h4>Icons</h4>
        <p className='code'>leadingIcon, trailingIcon</p>
        <div className="examples-wrapper">
          <Button
            leadingIcon={<AddIcon></AddIcon>}
            label='Button with leading icon'
          />
          <Button
            trailingIcon={<CloseRoundedIcon></CloseRoundedIcon>}
            label='Button with trailing icon'
          />

        </div>
        <h4>isDisabled</h4>
        <p className='code'>true, false</p>
        <div className="examples-wrapper">
          <Button
            label='Disabled Button'
            isDisabled={true}
          />
        </div>

        <h4>isFullWidth</h4>
        <p className='code'>true, false</p>
        <div className="examples-wrapper">
          <Button
            label='Full Width Button'
            isFullWidth={true}
          />
        </div>

        <h2>Card</h2>
        <h3>Examples</h3>
        <h4>Default</h4>
        <p className='code'>title, content</p>
        
        

      </>
  )
}

export default App
