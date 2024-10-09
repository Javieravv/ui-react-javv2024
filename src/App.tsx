import './App.scss'
import CheckBoxAnimated from './components/check-animate/CheckBoxAnimated'
import Dropdownmenu from './components/dropdown-menu/Dropdownmenu'

function App() {
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
            </section>
        </>
    )
}

export default App
