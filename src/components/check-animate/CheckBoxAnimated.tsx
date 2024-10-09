import { FC } from 'react';
import './checkboxanimated.scss'

interface PropsCheck {
    width?: number;
    height?: number;
    style?: object;
    text?: string;
}

const CheckBoxAnimated: FC<PropsCheck> = ({
    width = 150,
    height = 50,
    style = {},
    text = '' }) => {
    return (
        <div className="checkmain">
            <label htmlFor="check">{text}</label>
            <div
                className="checkcontainer"
                style={style}
            >
                <input
                    type="checkbox"
                    name="check"
                    id="check"
                    className='check'
                />
                <div className="check_circle"></div>

            </div>
        </div>

    )
}

export default CheckBoxAnimated