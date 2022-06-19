import Select from "react-select";

export const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="myform form">
            <label htmlFor={name}>{label}</label>
            <input {...rest} id={name} name={name} className="form-control" />
            {error && <span className="text-danger">{error}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export const SelectInput = (props) => {
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="form-group">
            <label htmlFor={props.selectedLabel}>{props.selectedLabel}</label>
            <Select options={props.options} defaultValue={props.defaultValue} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Inputs = {
  Input,
  SelectInput,
};

export default Inputs;
