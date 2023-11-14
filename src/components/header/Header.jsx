import React, {useEffect, useState} from 'react';
import s from './header.module.scss'
import Logo from "../logo/Logo";
import PhoneInput from "react-phone-input-2";
import Popup from "../popup/Popup";
import {useMediaQuery} from "react-responsive";
import {isValidNumber, parsePhoneNumber} from "libphonenumber-js";




const Header = () => {



    const isMobile = useMediaQuery({maxWidth: 765});

    const [firstName, setFirstName] = useState('')
    const [firstNameError, setFirstNameError] = useState('The First name is required')
    const [firstNameDirty, setFirstNameDirty] = useState(false)

    const [lastName, setLastName] = useState('')
    const [lastNameError, setLastNameError] = useState('The Last name is required')
    const [lastNameDirty, setLastNameDirty] = useState(false)

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('Email address is required')
    const [emailDirty, setEmailDirty] = useState(false)


    const [phoneNumber, setPhoneNumber] = useState('')
    const [phoneNumberError, setPhoneNumberError] = useState('The Phone number is required')
    const [phoneNumberDirty, setPhoneNumberDirty] = useState(false)


    const [activeForm, setActiveForm] = useState(true)


    const inputFirstNameCase = `${s.firstName_input} ${firstNameError && firstNameDirty ? s.error_input : ''}`;
    const inputLastNameCase = `${s.lastName_input} ${lastNameError && lastNameDirty ? s.error_input : ''}`;
    const inputEmailCase = `${s.email_input} ${emailError && emailDirty ? s.error_input : ''}`;
    const inputPhoneCase = `${s.phone_input} ${phoneNumberError && phoneNumberDirty ? s.error_input : ''}`;
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'firstName':
                setFirstNameDirty(true);
                break;

            case 'lastName':
                setLastNameDirty(true);
                break;

            case 'email':
                setEmailDirty(true);
                break;

            case 'phone':
                setPhoneNumberDirty(true);
                break;

            default:
                break;
        }
    };


    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Please enter a valid email address')

        } else {
            setEmailError('')
        }
    }

    const nameHandler = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2) {
            setFirstNameError('The name must contain at least 2 letters.');
        } else {
            setFirstNameError('');
        }
    };

    const lastNameHandler = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2) {
            setLastNameError('The Last name must contain at least 2 letters.');
        } else {
            setLastNameError('');
        }
    };


    const handlePhoneChange = (value, country) => {
        setPhoneNumber(value);

        if (value.length > 1) {
            const phoneNumberObj = parsePhoneNumber(value, country.countryCode.toUpperCase());
            const formattedPhoneNumber = phoneNumberObj ? phoneNumberObj.formatInternational() : '';
            const isValid = isValidNumber(formattedPhoneNumber, country);
            if (!isValid) {
                setPhoneNumberError('Type a correct phone number');
                setPhoneNumberDirty(true);
            } else {
                setPhoneNumberError('');
                setPhoneNumberDirty(false);
            }

        }
    };


    useEffect(() => {
        if (firstNameError || lastNameError || emailError || phoneNumberError) {
            setActiveForm(false)
        } else {
            setActiveForm(true)
        }

    }, [firstNameError, lastNameError, emailError, phoneNumberError,]);


    const [popUpIsActive, setPopUpIsActive] = useState(false)
    const submitHandler = (e) => {
        e.preventDefault()
        setPopUpIsActive(!popUpIsActive)
    }


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