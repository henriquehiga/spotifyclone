import './navplayer.css'


export const NavPlayer = () => {
    return(
        <div className="container-navPlayer">

            <div className="leftNavPlayer">
                <div className="navPlayerImg">
                    <img src="https://i.pinimg.com/originals/fe/5c/36/fe5c36b8b4cbaa728f3c03a311e002cb.png" alt="" />
                </div>

                <span className="infoSong">
                    <b>Song Title</b>
                    <p>Song Description</p>
                </span>

                <span className='likeSong'>
                    <i class="fas fa-heart"></i>
                </span>
            </div>

            <div className="navPlayerInfo">

                <div className="iconsPlayerInfo">
                    <i class="fas fa-random"></i>

                    <i class="fas fa-step-backward"></i>


                    <i class="fas fa-play-circle"></i>

                    <i class="fas fa-step-forward"></i>

                    <i class="fas fa-redo-alt"></i>
                </div>

                <div className="PlayerInfoProgress">
                    <p>3:08</p>
                    <span className="barProgress">
                        <span className="currentProgress"></span>
                    </span>
                    <p>4:20</p>
                </div>

            </div>

            <div className="RightNavPlayer iconsNav">
                <i class="fas fa-microphone"></i>
                <i class="fas fa-music"></i>
                <i class="fas fa-desktop"></i>
                <i class="fas fa-volume-up"></i>
                <span className="barProgress">
                    <span className="currentProgress"></span>
                </span>
                <i class="fas fa-expand-alt"></i>
            </div>

            <div className="navPlayerRight">
                <i class="fas fa-desktop"></i>
                <i class="fas fa-play"></i>
            </div>
        </div>
    )
}