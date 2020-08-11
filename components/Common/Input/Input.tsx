import React from "react";

import styles from "./Input.module.css";

interface InputProps {
  id: string;
  name: string;
  value?: string;
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
}

const Input: React.FC<InputProps> = (props) => {
  const { id, name, value, label, onChange } = props;
  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputLabel} htmlFor={id}>
        {label}
        <input
          className={styles.inputField}
          type="text"
          name={name}
          id={id}
          onChange={onChange}
          value={value}
        />
      </label>
    </div>
  );
};

export default Input;
