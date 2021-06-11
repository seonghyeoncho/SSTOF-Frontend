import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { InputMDProps } from "./interface";

const InputForMD: React.FC<InputMDProps> = ({
  onChange,
  value,
  placeholder
}: InputMDProps) => (
    <TextareaAutosize
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        resize: "none",
        background: "#363636",
        color: "white",
        outline: "none",
        width: "100%",
        border: "none",
        borderRadius: "5px",
        padding: "5px",
        fontSize: "16px",
      }}
      minRows={20}
      spellCheck={false}
    />
  );

export default InputForMD;