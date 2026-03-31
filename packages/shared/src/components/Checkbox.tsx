import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, id, ...props }) => {
  return (
    <div className="form-field">
      <label htmlFor={id}>
        <input type="checkbox" id={id} {...props} />
        {label && <span>{label}</span>}
      </label>
    </div>
  );
};
