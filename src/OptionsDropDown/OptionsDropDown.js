import { Select } from "./StyleOptionsDropDown"
import globalObject from "../Global/globals"
const OptionsDropDown = ({ onChange }) => {
  return (
    <Select onChange={onChange}>
      {globalObject.optionsArray.map((option) => {
        return (
          <option key={option} value={option}>
            {option}X{option}
          </option>
        )
      })}
    </Select>
  )
}
export default OptionsDropDown
