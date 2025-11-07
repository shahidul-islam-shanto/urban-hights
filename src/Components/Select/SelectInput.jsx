import React from "react";
import Select from "react-select";
import "./SelectInput.css";

const options = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];
const SelectInput = () => {
  return (
    <div className=" ">
      <div className="">
        <Select
          options={options}
          isSearchable={false}
          placeholder="Select"
          className="w-full text-black"
          styles={{
            control: (base) => ({
              ...base,
              minHeight: "54px",
              borderColor: "#d1d5db",
              boxShadow: "none",
              "&:hover": { borderColor: "#9ca3af" },
            }),
          }}
        />
      </div>
    </div>
  );
};
export default SelectInput;
