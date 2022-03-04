import React, { useState } from 'react'
import Button from '../Button'

function Collapse({buttonText}) {

    const [visibility, setVisibility] = useState(false)

    const handleClick = () => {
        setVisibility(!visibility)
    }

    const Box = ({year, title}) => {
        return (
            <div className=" border-l-4 border-green-rick-morty mt-2 pl-2">
                <div className="flex-col">
                    <p className="text-sm">{year}</p>
                    <p className="text-xl text-left">{title}</p>
                </div>
            </div>
        )
    } 

  return (
    <div>
        <Button children={buttonText} onClick={handleClick} />
        {visibility &&                            
            <ul className="my-4 pl-10">
                <Box year="2015-2019 (4 years)" title="Bachelor of Engineering in Telecommunication Technologies and Services Engineering (BETTS)" />
                <Box year="2020-2021 (2 years)" title="Master of Science in Telecommunication Engineering" />
            </ul>}
    </div>
  )
}

export default Collapse