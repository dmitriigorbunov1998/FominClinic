import './CardInfoUser.css'

export default function CardInfoUser(users) {
    return (
            <div className='userCard'>
                <div className='title'>{users.title}</div>
                <div className='badge'>{users.badge}</div>
                <div className='contactBadge'>{users.contactBadge}</div>
            </div>
    )
}