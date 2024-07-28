import './Card.css'
import CardInfoUser from '../CardInfoUser/CardInfoUser.jsx'
import {users} from '../../data.js'

export default function Card() {
    return (
            <div className='usersWrapper'>
                {users.map(user =>
                    <CardInfoUser
                        key={user.badge} { ...user}
                    />
                )}
            </div>
    )
}