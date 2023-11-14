import React from 'react';
import s from './header.module.css'
import Logo from "../logo/Logo";



const Header = () => {
    return (

        <header>
            <div className={s.menu_block}>
                <Logo/>

                <div className={s.button_block}>

                    <button className={s.open_account}>Open account</button>

                </div>
            </div>


            <div className={s.header_block}>

                <div className={s.title_block}>
                    <h1>
                        Tool for Daily Trading Achievements
                    </h1>

                    <div>
                        <img src={require('../../assets/Vector.png')} width={16} height={10} draggable={false}/>
                        <span>Achieve stable and affordable results with trades starting at $1.</span>
                    </div>

                    <div>
                        <img src={require('../../assets/Vector.png')} width={16} height={10} draggable={false}/>
                        <span>Use ready-to-go trading strategies and practice on a demo account.</span>
                    </div>

                    <button className={s.start_now_button}>
                        Start now
                    </button>
                </div>
            </div>

            <div className={s.simple_and_fascinating}>

                <h2>
                    Simple and Fascinating
                </h2>
                <div className={s.simple_block}>

                    <div className={s.icon_block}>

                        <img src={require('../../assets/Icon.png')} width={142} height={140} draggable={false}/>

                        <span className={s.about}>
                            Minimum Risk, Maximum Fun
                            </span>

                        <span className={s.about2}>
                            Hone your skills and try out new strategies with $10,000 in your demo account.
                            </span>

                    </div>

                    <div className={s.icon_block}>

                        <img src={require('../../assets/Icon2.png')} width={120} height={105} draggable={false}/>

                        <span className={s.about}>
                            No complex settings.
                            </span>

                        <span className={s.about2}>
                            Use built-in indicators to advance your trading.
                            </span>

                    </div>

                    <div className={s.icon_block}>

                        <img src={require('../../assets/Icon3.png')} width={119} height={109} draggable={false}/>

                        <span className={s.about}>
                            Trade when and where you want.
                            </span>

                        <span className={s.about2}>
                          Log into the platform from any device.
                            </span>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;