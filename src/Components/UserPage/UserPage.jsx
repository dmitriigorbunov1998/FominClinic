import './UserPage.css';
import {mealTimes} from "../../data.js";
import {users} from "../../data.js";
import {useState} from "react";

export default function UserPage() {
    const [isClosed, setIsClosed] = useState(true);

    const toggleClosed = () => {
        setIsClosed(!isClosed);
    };

    return (
        <div className='userPage'>
            <div className='userPageTitle'>
                {users[0].title}
            </div>
            <div className='tablesWrapper'>
                {mealTimes.map(mealTimes =>
                    <div className='userTable' key={mealTimes.date}>
                        <div className='userTableTitle'>
                            <div className='dateBadge'>{mealTimes.date}</div>
                            <div
                                className='toggle'
                                onClick={toggleClosed}
                            >
                                {isClosed ? 'Развернуть' : 'Свернуть'}
                            </div>
                        </div>
                        {isClosed && null}
                        {!isClosed && (
                            <>
                                <div className='userTableHeader'>
                                    <div className='userTableCell'>Вид приёма пищи</div>
                                    <div className='userTableCell'>Что съел</div>
                                    <div className='userTableBigCell'>Шкала голода</div>
                                    <div className='userTableCell'>Шкала насыщения</div>
                                </div>
                                <div className='userTableRow'></div>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}