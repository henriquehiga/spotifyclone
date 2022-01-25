import './cardcontent.css'

export const CardContent = (props) => {

    return(
            <div className="cardContent">
                <div className="cardContentImg">
                    <img src="https://i.pinimg.com/originals/fe/5c/36/fe5c36b8b4cbaa728f3c03a311e002cb.png" alt="" />

                    <span className='playButtonCard'>   {`>`}
                    </span>
                </div>

                <div className="cardInfo">
                    <b>{props.cardTitulo}</b>
                    <p>{props.cardDesc}</p>
                </div>
                
            </div>
    );

}