import React, { useState } from "react";
import Select from "react-select";

function DropDown() {
	const data = [
		{
			value: 1,
			label: "Kurta",
		},
		{
			value: 2,
			label: "Kurta Plazo set",
		},
		{
			value: 3,
			label: "A Line Kurta",
		},
		{
			value: 4,
			label: "Kurta Plazo Dupatta Set",
		},
	];

	const [selectedOption, setSelectedOption] = useState(null);

	// handle onChange event of the dropdown
	const handleChange = (e) => {
		setSelectedOption(e);
	};

	return (
		<div className='App'>
			<Select
				placeholder='Choose category'
				value={selectedOption} // set selected value
				options={data} // set list of the data
				onChange={handleChange} // assign onChange function
			/>

			{/* {selectedOption && (
				<div>
					 {selectedOption.label}
				</div>
			)} */}
		</div>
	);
}

export default DropDown;
