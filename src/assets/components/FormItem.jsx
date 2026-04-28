const FormItem = ({ item, validation, getClassName, isTouch, changeData, formData }) => {
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
};

export default FormItem;