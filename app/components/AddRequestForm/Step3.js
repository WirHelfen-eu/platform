import React from 'react';

function Step3(props) {

    const onInputChange = (e) => {
        e.preventDefault()
        props.setFormData((prevState) => {
            return (
                { ...prevState, [e.target.name]: e.target.value }
            )
        })
    }


    return (
        <div>
            <h2 className={"text-3xl"}>{props.currentStep}. Persoenliche Angaben</h2>
            <div className="mt-4 mb-4">
                <span className="text-1xl text-wh-green-500">Gender</span>
                <div className="mt-2">
                    <label className="inline-flex items-center">
                        <input onChange={onInputChange} type="radio" className="form-radio border-2" name="accountType" value="female" />
                        <span className="ml-2">female</span>
                    </label>
                    <label onChange={onInputChange} className="inline-flex items-center ml-6">
                        <input type="radio" className="form-radio border-2 border-solid" name="accountType" value="male" />
                        <span className="ml-2">male</span>
                    </label>
                    <label onChange={onInputChange} className="inline-flex items-center ml-6">
                        <input type="radio" className="form-radio border-2" name="accountType" value="diverse" />
                        <span className="ml-2">diverse</span>
                    </label>
                </div>
            </div>
            <label className="block mb-5">
                <span className="text-1xl text-wh-green-500">First Name</span>
                <input name="first_name" type="text" className="form-input mt-1 w-full rounded-full border-2" onChange={onInputChange} placeholder="enter your adress" />
            </label>
            <label className="block mb-5">
                <span className="text-1xl text-wh-green-500">Last Name</span>
                <input name="last_name" type="text" className="form-input mt-1 block w-full rounded-full border-2" onChange={onInputChange} placeholder="enter your adress" />
            </label>
            <label className="block mb-5">
                <span className="text-1xl text-wh-green-500">E-Mail</span>
                <input name="email" type="email" className="form-input mt-1 block w-full rounded-full border-2" onChange={onInputChange} placeholder="enter your adress" />
            </label>
            <label className="block mb-5">
                <span className="text-1xl text-wh-green-500">Kleine Beschreibung deiner Hilfe</span>
                <textarea className="form-textarea mt-1 block w-full rounded-lg border-2" rows="3" placeholder="Enter some long form content."></textarea>
            </label>
            <div className="block mb-5">
                <p><button className={"px-8 py-3 border border-transparent text-base font-small rounded-full text-wh-green-700 border-wh-green-100 hover:bg-wh-green-200 md:py-2 md:text-lg md:px-5 float-left mr-4"} onClick={props.previousStep}>Previous Step</button></p>
                <p><button className={"px-8 py-3 border border-transparent text-base font-small rounded-full text-wh-green-700 border-wh-green-100 hover:bg-wh-green-200 md:py-2 md:text-lg md:px-5"} onClick={props.nextStep}>Next Step</button></p>
            </div>
        </div>

    );
}

export default Step3;