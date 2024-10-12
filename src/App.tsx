import { useState } from 'react'
import './App.scss'
import CheckBoxAnimatedV1 from './components/check-animate-1/CheckBoxAnimatedV1'
import CheckBoxAnimated from './components/check-animate/CheckBoxAnimated'
import Dropdownmenu from './components/dropdown-menu/Dropdownmenu'

function App() {
    const [ischeck, setIscheck] = useState(false)
    const [ischeck1, setIscheck1] = useState(true)

    const handleCheckBoxChange3 = (
        value: boolean,
        setChange: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
        setChange( value )
    }

    return (
        <>
            <header>
                <nav className='width-main'>
                    <h1>Componentes React Javv - 2024</h1>
                </nav>
            </header>
            <section className='mainsection width-main'>
                <article className="checkboxes">
                    <CheckBoxAnimated
                        style={{ backgroundColor: 'orange' }}
                        text='Escoger opción:'
                    />
                    <CheckBoxAnimated
                        text='Leer términos y condiciones'
                        style={{ backgroundColor: 'green' }}
                    />
                    <CheckBoxAnimated
                        text='Está de acuerdo'
                        style={{
                            backgroundColor: 'purple'
                        }}
                    />
                </article>
                <article className="dropdownmenu">
                    <Dropdownmenu
                        options={['Opción 1', 'Opción 2']}
                        text='Seleccione'
                    />
                </article>
                <article className='checkboxes'>
                    <CheckBoxAnimatedV1
                        color='orange'
                        text='Opción 2'
                        width='90px'
                        height='25px'
                        checked={ischeck}
                        onChange={() => handleCheckBoxChange3(!ischeck, setIscheck)}
                    />

                    <CheckBoxAnimatedV1
                        color='orange'
                        text='Opción 2'
                        width='90px'
                        height='25px'
                        checked={ischeck1}
                        onChange={() => handleCheckBoxChange3(!ischeck1, setIscheck1)}
                    />
                </article>
                <article>
                    <h3>La opción 1 está { ischeck? 'Marcada' : 'Desmarcada' }</h3>
                    <h3>La opción 2 está { ischeck1? 'Marcada' : 'Desmarcada' }</h3>
                </article>
            </section>
        </>
    )
}

export default App
