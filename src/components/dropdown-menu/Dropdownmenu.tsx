import { FC } from 'react'
import './dropdownmenu.scss'

interface PropsDropDownMenu {
    options: string[];
    text: string;
}

const Dropdownmenu: FC<PropsDropDownMenu> = ({
    options = [],
    text = 'Menú DropDown '
}) => {
    console.log(options)
    return (
        <>
            <button className='dropdown-main'>
                {text}
            </button>
        </>
    )
}

export default Dropdownmenu