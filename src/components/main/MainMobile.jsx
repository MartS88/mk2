import React from 'react';
import s from 'main.module.scss'

const MainMobile = () => {
    return (
        <div className={s.form_back}>
            <form>

                <div className={s.title_block}>
                    <h2>
                        Join now
                        <br/>
                        and get
                        <br/>
                        deposit bonus
                    </h2>

                    <span>
                                200%
                            </span>
                </div>

                <div className={s.inputs_block}>

                    <div className={s.name_group}>
                        <div className={s.label_group}>
                            <label htmlFor="firstName">First name:</label>
                            <input
                                className={inputFirstNameCase}
                                type="text"
                                id="firstName"
                                name="firstName"
                                autoComplete='off'
                                onBlur={e => blurHandler(e)}
                                onChange={e => nameHandler(e)}
                            />

                            <div className={s.error_container}>
                                {firstNameDirty && firstNameError && (
                                    <div className={`${s.error} ${s.visible}`}>
                                        {firstNameError}
                                    </div>
                                )}
                            </div>

                        </div>


                        <div className={s.label_group}>
                            <label htmlFor="lastName">Last name:</label>
                            <input
                                className={inputLastNameCase}
                                type="text"
                                id="lastName"
                                name="lastName"
                                autoComplete='off'
                                onBlur={e => blurHandler(e)}
                                onChange={e => lastNameHandler(e)}
                            />

                            <div className={s.error_container}>
                                {lastNameDirty && lastNameError && (
                                    <div className={`${s.error} ${s.visible}`}>
                                        {lastNameError}
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                    <div className={s.phone_group}>
                        <div className={s.label_group}>
                            <label htmlFor="email">Email:</label>
                            <input
                                className={inputEmailCase}
                                type="email"
                                id="email"
                                name="email"
                                autoComplete='off'
                                onBlur={e => blurHandler(e)}
                                onChange={e => emailHandler(e)}

                            />

                            <div className={s.error_container}>
                                {emailDirty && emailError && (
                                    <div className={`${s.error} ${s.visible}`}>
                                        {emailError}
                                    </div>
                                )}
                            </div>


                        </div>

                        <div className={s.label_group}>

                            <label htmlFor="phoneNumber">Phone number:</label>

                            <PhoneInput
                                onBlur={() => blurHandler({target: {name: 'phone'}})}
                                type="phone"
                                id="phone"
                                name="phone"
                                className={inputPhoneCase}
                                country={'in'}
                                value={phoneNumber}
                                onChange={(value, country, ) => handlePhoneChange(value, country, )}
                                inputProps={{
                                    required: true,
                                }}
                            />


                            <div className={s.error_container}>
                                {phoneNumberDirty && phoneNumberError && (
                                    <div className={`${s.error} ${s.visible}`}>
                                        {phoneNumberError}
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                </div>


                <button
                    disabled={!activeForm}
                    className={activeForm ? s.submit_button : s.button_disabled}
                    type='submit'
                >
                    Get Bonus
                </button>



                <img src={require('../../assets/bank2.png')} draggable={false}/>


                <p>
                    By proceeding, I accept the Privacy Policy and certify that I am over 18 years old. I agree to
                    receive company news, product updates and market overviews by email.
                    I understand that I can unsubscribe by contacting Customer Support.
                </p>
            </form>

        </div>
    );
};

export default MainMobile;