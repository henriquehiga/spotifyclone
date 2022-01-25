import './cardplaylist.css'

export const CardPlaylist = (props) => {
    return(

        <div className="cardPlaylist-container">
            <div className="imgCard">
                <img src="https://i.pinimg.com/originals/fe/5c/36/fe5c36b8b4cbaa728f3c03a311e002cb.png" alt="" />
            </div>
            <b>{props.text}</b>

            <span className='arrowPlay'>
                <b>{`>`}</b>
            </span>
        </div>

    );
}