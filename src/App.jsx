import React from 'react'
import './App.css'
import Button from './components/Button/Button'
import AddIcon from "@mui/icons-material/Add";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import '../tokens-dist/css/variables.css';


function App() {

  return (
    <>
        <h1>My Component Library</h1>
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
          <Button
            label='Enabled Button'
            isDisabled={false}
          />
          </div>

          <h4>isFullWidth</h4>
          <p className='code'>true, false</p>
          <div className="examples-wrapper">
            <Button
              label='Full Width Button'
              isFullWidth={true}
            />
            <Button
              label='Normal Button'
              isFullWidth={false}
            />
          </div>

    </>
  )
}

export default App
