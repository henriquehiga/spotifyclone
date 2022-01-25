import './navlateral.css'


export const NavLateral = () => {
    return(
        <div className="containerNav">

            <div className="topSideNav">

                <div className="topSideFirst">
                    <span className="itemWrapper itemWrapperSelected">
                        <i class="fas fa-home"></i>
                        <p>Home</p>
                    </span>

                    <span className="itemWrapper">
                    <i class="fas fa-search"></i>
                        <p>Search</p>
                    </span>

                    <span className="itemWrapper">
                    <i class="fas fa-book-open"></i>
                        <p>Your Library</p>
                    </span>
                </div>

                <div className="topSideSecond">
                    <span className="itemWrapper">
                        <span className="itemImageTop">
                            <img src="https://i.pinimg.com/originals/fe/5c/36/fe5c36b8b4cbaa728f3c03a311e002cb.png" alt="" />
                        </span>
                        <p>Create Playlist</p>
                    </span>

                    <span className="itemWrapper">
                        <span className="itemImageTop">
                            <img src="https://i.pinimg.com/originals/fe/5c/36/fe5c36b8b4cbaa728f3c03a311e002cb.png" alt="" />
                        </span>
                        <p>Liked Songs</p>
                    </span>

                    <span className="itemWrapper">
                        <span className="itemImageTop">
                            <img src="https://i.pinimg.com/originals/fe/5c/36/fe5c36b8b4cbaa728f3c03a311e002cb.png" alt="" />
                        </span>
                        <p>Your Episodes</p>
                    </span>
                </div>
            </div>

            <div className="barra"></div>

            <div className="bottomSideNav">
            
                <span>Teste</span>
                <span>Teste</span>
                <span>Teste</span>
                <span>Teste</span>
                <span>Teste</span>
                <span>Teste</span>
                <span>Teste</span>
                <span>Teste</span>
                <span>Teste</span>
                <span>Teste</span>
                <span>Teste</span>
                <span>Teste</span>
                <span>Teste</span>
                <span>Teste</span>
                <span>Teste</span>
                <span>Teste</span>
                <span>Teste</span>
                <span>Teste</span>
                <span>Teste</span>
                <span>Teste</span>
                <span>Teste</span>

                
            </div>

        </div>
    )
}