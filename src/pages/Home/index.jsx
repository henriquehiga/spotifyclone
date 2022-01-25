import { useEffect, useState } from 'react'
import { CardPlaylist } from '../../components/CardPlaylist'
import { NavUser } from '../../components/NavUser'
import { CardContent } from '../../components/CardContent'
import './home.css'


export const Home = () => {

    const [ topY, settopY ] = useState(null)
    const [ actualHour, setActualHour ] = useState('')
    const [ dayMsg, setDayMsg ] = useState('')

    const scroll = () => {
    
        var a = document.getElementById('homeContainer').getBoundingClientRect();
        settopY(a.y)
    
    }

    useEffect(() => {

        var date = new Date();
        setActualHour(date.getHours())

        console.log(actualHour)

        if(actualHour < 12){
            setDayMsg('Bom dia!')
        }else if(actualHour < 19){
            setDayMsg('Boa tarde!')
        }else{
            setDayMsg('Boa noite!')
        }

    },[])

    return(
        <div onScroll={scroll}  className="containerContent">
        
            <div id='homeContainer' className="headerWrapper">
                <NavUser value={topY} />

                <div className="headerContent">
                    
                    <span className='containerMessage'>
                        <h1>Spotify Clone com React JS</h1>

                        <span className='iconsMessage'>
                            <i class="far fa-bell"></i>
                            <i class="fas fa-history"></i>
                            <i class="fas fa-cog"></i>
                        </span>
                    </span>
                    <div className="cardsHeader">
                        <CardPlaylist text="By: Henrique Higa"/>
                        <CardPlaylist text="Liked Songs"/>
                        <CardPlaylist text="Liked Songs"/><CardPlaylist text="Liked Songs"/><CardPlaylist text="Liked Songs"/><CardPlaylist text="Liked Songs"/>
                        
                    </div>
                </div>
            </div>

            <div className="contentWrapper">
                <div className='boxContent'>
                    <span className="titleCardContent">
                        <h2>Shows you might like</h2>
                        <b>see all</b>
                    </span>
                    
                    <div className="contentCardsHolder">
                        <CardContent cardTitulo={'Song title'} cardDesc={'Song Description'}/>
                        <CardContent cardTitulo={'Song title'} cardDesc={'Song Description'}/><CardContent cardTitulo={'Song title'} cardDesc={'Song Description'}/><CardContent cardTitulo={'Song title'} cardDesc={'Song Description'}/><CardContent cardTitulo={'Song title'} cardDesc={'Song Description'}/><CardContent cardTitulo={'Song title'} cardDesc={'Song Description'}/>
                    </div>
                    </div>

                    <div className='boxContent'>
                    <span className="titleCardContent">
                        <h2>Shows you might like</h2>
                        <b>see all</b>
                    </span>
                
                    <div className="contentCardsHolder">
                    <CardContent cardTitulo={'Song title'} cardDesc={'Song Description'}/><CardContent cardTitulo={'Song title'} cardDesc={'Song Description'}/><CardContent cardTitulo={'Song title'} cardDesc={'Song Description'}/><CardContent cardTitulo={'Song title'} cardDesc={'Song Description'}/>
                    </div>
                </div>
                
            </div>

            

        </div>
    )
}