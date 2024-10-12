import { FC } from 'react';
import './checkboxanimatedv1.scss';

interface PropsCheckV1 {
    width?: string;
    height?: string;
    style?: React.CSSProperties;
    text?: string;
    color?: React.CSSProperties['color'];
    checked: boolean;
    onChange: (value: boolean) => void;
}

interface CustomCSSProperties extends React.CSSProperties {
    [key: `--${string}`]: string | number;
}

const CheckBoxAnimatedV1: FC<PropsCheckV1> = ({
    width = '60px',
    height = '30px',
    style = {},
    text = 'Escoja',
    color = 'black',
    checked = false,
    onChange
}) => {
    const dynamicStyle: CustomCSSProperties = {
        ...style,
        '--width': width || '80px',
        '--height': height || '40px',
        '--color': color || 'black'
    }

    const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.checked)
    }
    return (
        <>
            <div
                className="check-container"
                style={dynamicStyle}
            >
                <label htmlFor="inputcheck">{text}</label>
                <div className="input-check">
                    <input
                        type="checkbox"
                        name="checkbox"
                        id="inputcheck"
                        checked={checked}
                        onChange={handleCheckBoxChange}
                    />
                </div>
            </div>
        </>
    )
}
export default CheckBoxAnimatedV1
