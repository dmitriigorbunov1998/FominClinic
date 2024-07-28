import './Header.css'
import logo from '/fomin-clinic.svg'
import exitImg from '/exit.svg'

export default function Header() {
    return (
        <div className='header'>
            <div className='headerWrapper'>
                <img src={logo} alt={logo} className='logo' />
                <div className='logout'>
                    <span>Выйти</span>
                    <img src={exitImg} alt={exitImg} className='logout' />
                </div>
            </div>
        </div>
    )
}