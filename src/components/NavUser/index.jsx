import './navuser.css'

export const NavUser = ( {value} ) => {

    var opacity = (value * -1) / 100;

    var scrollVisible = {
        background : `rgba(46 , 2, 144, ${opacity})`
    }

    return(
        <div style={scrollVisible} id='navUser' className="navuser-container">

            <div className="navuser-wrapper">
                <span className="buttonsBackNext">
                    <span className="buttonsControl">
                        {`<`}
                    </span>
                    <span className="buttonsControl">
                        {`>`}
                    </span>
                </span>

                <span className="userInfo">
                    <div className="userInfoImg">
                        <img src="https://photografos.com.br/wp-content/uploads/2020/09/fotografia-para-perfil.jpg" alt="" />
                    </div>
                    <b>Henrique Higa</b>
                    <p>{`>`}</p>
                </span>
            </div>

        </div>
    )
}