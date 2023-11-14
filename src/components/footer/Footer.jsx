import React from 'react';
import s from './footer.module.css'

const Footer = () => {
    return (
        <footer>
            <h3>
                Withdraw funds conveniently.
            </h3>

            <div className={s.icons_block}>

                <div className={s.icon}>
                    <img src={require('../../assets/payment.png')} width={98} height={25} draggable={false}/>
                </div>

                <div className={s.icon}>
                    <img src={require('../../assets/payment2.png')} width={114} height={20} draggable={false}/>
                </div>

                <div className={s.icon}>
                    <img src={require('../../assets/payment3.png')} width={61} height={36} draggable={false}/>
                </div>

                <div className={s.icon}>
                    <img src={require('../../assets/payment4.png')} width={110} height={24} draggable={false}/>
                </div>

                <div className={s.icon}>
                    <img src={require('../../assets/payment5.png')} width={87} height={40} draggable={false}/>
                </div>

                <div className={s.icon}>
                    <img src={require('../../assets/payment6.png')} width={151} height={60} draggable={false}/>
                </div>


                <div className={s.icon}>
                    <img src={require('../../assets/payment7.png')} width={56} height={52} draggable={false}/>
                </div>

                <div className={s.icon}>
                    <img src={require('../../assets/payment8.png')} width={104} height={32} draggable={false}/>
                </div>


                <div className={s.icon}>
                    <img src={require('../../assets/payment9.png')} width={100} height={18} draggable={false}/>
                </div>

                <div className={s.icon}>
                    <img src={require('../../assets/payment10.png')} width={99} height={24} draggable={false}/>
                </div>

                <div className={s.icon}>
                    <img src={require('../../assets/payment11.png')} width={64} height={22} draggable={false}/>
                </div>

                <div className={s.icon}>
                    <img src={require('../../assets/payment12.png')} width={151} height={60} draggable={false}/>
                </div>

                <div className={s.icon}>
                    <img src={require('../../assets/payment13.png')} width={67} height={18} draggable={false}/>
                </div>

                <div className={s.icon}>
                    <img src={require('../../assets/payment14.png')} width={151} height={60} draggable={false}/>
                </div>

                <div className={s.icon}>
                    <img src={require('../../assets/payment15.png')} width={98} height={17} draggable={false}/>
                </div>

                <div className={s.icon}>
                    <img src={require('../../assets/payment16.png')} width={151} height={60} draggable={false}/>
                </div>

                <div className={s.icon}>
                    <img src={require('../../assets/payment17.png')} width={124} height={43} draggable={false}/>
                </div>

                <div className={s.icon}>
                    <img src={require('../../assets/payment18.png')} width={123} height={26} draggable={false}/>
                </div>

                <div className={s.icon}>
                    <img src={require('../../assets/payment19.png')} width={123} height={30} draggable={false}/>
                </div>

                <div className={s.icon}>
                    <img src={require('../../assets/payment20.png')} width={100} height={27} draggable={false}/>
                </div>

                <div className={s.icon}>
                    <img src={require('../../assets/payment21.png')} width={97} height={45} draggable={false}/>
                </div>

            </div>

            <div className={s.footer_block}>

                <div className={s.first}>
                    <img src={require('../../assets/logo2.png')} width={67} height={48} draggable={false}/>

                    <p>
                        MTrading execution quality is confirmed by VMT and complies with best execution standards.
                    </p>

                    <div>
                        <img src={require('../../assets/logo3.png')} width={110} height={48} draggable={false}/>


                        <p>
                            The interests of MTrading clients are protected by the Financial Commission’s Compensation
                            Fund for up to €20 000 per claim.
                        </p>
                    </div>

                    <ul>
                        <a href="https://www.facebook.com/MTradingGlobal" target="_blank" rel="noopener noreferrer">
                        <li>
                            <img src={require('../../assets/facebook f.png')} width={8} height={17} draggable={false}/>
                        </li>
                        </a>





                        <a href="https://t.me/MtradingClub" target="_blank" rel="noopener noreferrer">
                        <li>
                            <img src={require('../../assets/telegram.png')} width={18} height={14} draggable={false}/>
                        </li>
                        </a>

                        <a href="https://twitter.com/mtrading" target="_blank" rel="noopener noreferrer">
                        <li>
                            <img src={require('../../assets/x.png')} width={18} height={16} draggable={false}/>
                        </li>
                        </a>

                        <a href="https://www.linkedin.com/company/mtrading/" target="_blank" rel="noopener noreferrer">
                        <li>
                            <img src={require('../../assets/in.png')} width={24} height={24} draggable={false}/>
                        </li>
                        </a>

                    </ul>
                </div>

                <div className={s.second}>

                    <p>
                        Address: First Floor, First Saint Vincent Bank Ltd. Building, James Street, Kingstown, St.
                        Vincent and the Grenadines. MTrading (ServiceComsvg Ltd.) incorporated under registered number
                        24275 IBC 2017 by the Registrar of International Business Companies, registered by the Financial
                        Services Authority of Saint Vincent and the Grenadines. Legal: This website is administrated by
                        General Brent LP Risk warning: Trading foreign exchange or contracts for differences on margin
                        carries a high level of risk, and may not be suitable for all investors. There is a possibility
                        that you may sustain a loss equal to or greater than your entire investment. Therefore, you
                        should not invest or risk money that you cannot afford to lose. You should ensure you understand
                        all of the risks. Before using ServiceComSvg Ltd services please acknowledge the risks
                        associated with trading. The content of this Website must not be construed as personal advice.
                        ServiceComSvg Ltd. recommends you seek advice from an independent financial advisor. Regional
                        Restrictions: ServiceComsvg ltd. does not provide services to residents of certain
                        jurisdictions, such as: Japan, the United States of America,
                        Canada, Germany, New Zealand, and some other regions. For more information please refer to our
                        FAQ section.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;