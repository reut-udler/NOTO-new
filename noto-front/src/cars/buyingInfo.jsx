import carService from "./carService";
import { Input, SelectInput } from "../common/input";
import Joi from "joi";

const BuyingInfo = () => {
  const ownershipOptions = [
    { value: "Private", label: "פרטי" },
    { value: "Leasing", label: "ליסינג" },
    { value: "Rented", label: "השכרה/החכר" },
    { value: "Company car", label: "חברה" },
    { value: "Taxi", label: "מונית" },
  ];

  return (
    <div className="container">
      <h4 className="mt-5 mx-5">רישום קנייה ומכירה</h4>
      <SelectInput
        options={ownershipOptions}
        defaultValue={ownershipOptions[0]}
        selectedLabel="בעלות קודמת"
      >
        {}
      </SelectInput>
      <Input name="buyingPrice" label="מחיר בקנייה" type="text" />
      <Input name="buyingKm" label="קילומטראג' בקנייה" type="text" />

      <div className="form-group col-md-5 mt-2 mx-auto">
        <label htmlFor="exampleFormControlTextarea1">הערות</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
        ></textarea>
      </div>
    </div>
  );
};

export default BuyingInfo;
