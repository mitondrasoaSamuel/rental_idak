import React from 'react'
import { Button } from 'primereact/button';

function Ronde({icon}) {
  return (
    <div>
        <Button icon={icon} severity="danger" aria-label="Cancel" className='w-[40px] h-[40px] rounded-full flex items-center justify-center' />
    </div>
  )
}

export default Ronde