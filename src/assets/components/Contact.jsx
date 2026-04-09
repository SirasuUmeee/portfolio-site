import { useMemo, useRef, useState } from "react";

const Contact = () => {
    const containerRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const [ formData, setFormData ] = useState({
        username: "",
        email: "",
        phone: "",
        gender: "",
        message: ""
    });
    const [ touched, setTouched ] = useState({
        username: false,
        email: false,
        phone: false,
        message: false
    });

    const changeData = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validation = useMemo(() => {
        const { username, email, phone, gender, message } = formData;
        const pattern = /^(0\d{1,4}-\d{1,4}-\d{4}|0\d{10})$/;

        const errors = {
            username: username.length > 0,
            email: email.includes("@") && email.length >= 3,
            phone: phone === "" || pattern.test(phone),
            gender: true,
            message: message.length > 0
        };
        const isShowCheck = {
            username: errors.username,
            email: errors.email,
            phone: phone.length > 0 && errors.phone,
            gender: gender !== "",
            message: errors.message
        };

        const isAllValid = Object.values(errors).every(value => value === true);
        return { errors, isShowCheck, isAllValid };
    }, [formData]);

    const isTouch = (e) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
    };

    const getClassName = (target, isRequire = false) => {
        const isValid = validation.isShowCheck[target];
        const isTouched = touched[target];
        let res = "";

        if (isRequire) {
            if(isTouched && !isValid) res = "form-alert";
        } else {
            if (!validation.errors[target]) {
                res = "form-alert";
            };
        };
        
        return res;
    };

    const FORM_ITEM_ASSET = [
        {id: "username", label: "Name", desc: "Entry your name", type: "text", require: true},
        {id: "email", label: "Email", desc: "example@example.com", type: "email", require: true},
        {id: "phone", label: "Phone", desc: "000-0000-0000", type: "tel", require: false},
    ];
    const FORM_RADIO_ASSET = [
        {id: "male", name: "Male"},
        {id: "female", name: "Female"},
        {id: "other", name: "Other"},
    ];

    return (
        <section id="section-contact">
            <h2 className="main-header-text">Contact</h2>
            <form action="#" className="form-container" ref={containerRef} onSubmit={handleSubmit}>
                <ul className="form-list-container">
                    {FORM_ITEM_ASSET.map((item) => {
                        return (
                            <li className={`form-item disable-cursor-area ${item.require ? "form-require" : ""}`} key={item.id}>
                                <label className="form-label form-entry-check">
                                    <span className={`form-category ${validation.isShowCheck[item.id] ? "form-input-accept" : ""}`}>{item.label}</span>
                                    <div className="form-wrapper">
                                        <input
                                            className={`form-input ${getClassName(item.id, item.require)}`}
                                            name={item.id}
                                            type={item.type}
                                            onBlur={isTouch}
                                            onChange={changeData}
                                            value={formData[item.id]}
                                            placeholder={item.desc} />
                                        <span className={`form-check ${validation.isShowCheck[item.id] ? "" : "form-check-hidden"} `}>✔</span>
                                    </div>
                                </label>
                            </li>
                        );
                    })}
                    <li className="form-item disable-cursor-area">
                        <div className="form-label">
                            <span className={`form-category ${validation.isShowCheck.gender ? "form-input-accept" : ""}`}>Gender</span>
                            <div className="form-wrapper">
                                <div className="form-input form-gender">
                                    {FORM_RADIO_ASSET.map((radio) => {
                                        return (
                                            <label className="form-radio-label" key={radio.id}>
                                                <input 
                                                    className="form-radio"
                                                    id={`form-radio-${radio.id}`}
                                                    name="gender"
                                                    type="radio"
                                                    onChange={changeData}
                                                    value={radio.name}
                                                    checked={formData.gender === radio.name} />
                                                {radio.name}
                                            </label>
                                        );
                                    })}
                                </div>
                                <span className={`form-check ${validation.isShowCheck.gender ? "" : "form-check-hidden"}`}>✔</span>
                            </div>
                        </div>
                    </li>
                    <li className="form-item form-require disable-cursor-area">
                        <label className="form-label form-entry-check">
                            <span className={`form-category ${validation.isShowCheck.message ? "form-input-accept" : ""}`}>Message</span>
                            <div className="form-wrapper">
                                <textarea
                                    name="message"
                                    className={`form-input ${getClassName("message", true)}`}
                                    onBlur={isTouch}
                                    onChange={changeData}
                                    value={formData.message}
                                    placeholder="Write down your request"
                                ></textarea>
                                <span className={`form-check ${validation.isShowCheck.message ? "" : "form-check-hidden"} `}>✔</span>
                            </div>
                        </label>
                    </li>
                    <li className="form-item">
                        <input
                            className={`form-submit hover-cursor ${validation.isAllValid ? "form-submit-fulfilled" : ""}`}
                            type="submit"
                            value="Submit" 
                            disabled={!validation.isAllValid} />
                    </li>
                </ul>
            </form>
        </section>
    );
};

export default Contact;