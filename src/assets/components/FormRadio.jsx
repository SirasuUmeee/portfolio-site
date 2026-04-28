
const FormRadio = ({ radio, changeData, formData }) => {
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
};

export default FormRadio;