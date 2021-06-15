import { useState } from 'react';

function Step2(props) {

    const [isValid, setIsValid] = useState(0)
    const onAddressChange = (e) => {
        e.preventDefault()
        props.setFormData((prevState) => {
            return (
                { ...prevState, address: e.target.value }
            )
        })
        setIsValid(1)
    }

    return (
        <div>
            <h2 className={"text-3xl"}>{props.currentStep}. Wo bietest Du Deine Hilfe an?</h2>
            <label className="block mb-5">
                <input type="text" className="form-input mt-1 w-full rounded-full border-2" onChange={onAddressChange} placeholder="enter your adress" />
            </label>

            <div className="block mb-5">
                <p><button className={"px-8 py-3 border border-transparent text-base font-small rounded-full text-wh-green-700 border-wh-green-100 hover:bg-wh-green-200 md:py-2 md:text-lg md:px-5 float-left mr-4"} onClick={props.previousStep}>Previous Step</button></p>

                {isValid &&
                    <p><button className={"px-8 py-3 border border-transparent text-base font-small rounded-full text-wh-green-700 border-wh-green-100 hover:bg-wh-green-200 md:py-2 md:text-lg md:px-5"} onClick={props.nextStep}>Next Step</button></p>
                }
            </div>
        </div>

    );
}

export default Step2;