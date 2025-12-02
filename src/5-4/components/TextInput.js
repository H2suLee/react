function TextInput({ value, setValue }) {
  return (
    <input
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
}

export default TextInput;
