import React from 'react'
import Select from 'react-select'

function RequestFilter(props) {

    // this should not be hardcoded
    const options = [
        { value: 'Berlin', label: "Berlin" },
        { value: 'Hamburg', label: "Hamburg" },
        { value: 'Freiburg', label: "Freiburg" }

    ]
    return (
        <div className="w-full block mb-10">
            <h3>Filter:</h3>
            <Select styles={{
                option: base => ({
                    ...base,
                    border: `1px dotted grey-700`,
                    height: '100%',
                }),
            }}
                options={options} />
        </div >
    );
}

export default RequestFilter;