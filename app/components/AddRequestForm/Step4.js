import {useState} from 'react';

function Step4(props) {

    const onSubmit = (e) => {
        e.preventDefault()
        // tbd. post data to backend
    }

    return (
        <div>
            <h2 className={"text-3xl"}>{props.currentStep}. Bestaetigen</h2>
            <span>
                {JSON.stringify(props.formData, 4, " ")}
            </span>
            <div className="block mb-5">
                <p><button className={"px-8 py-3 border border-transparent text-base font-small rounded-full text-wh-green-700 border-wh-green-100 hover:bg-wh-green-200 md:py-2 md:text-lg md:px-5 float-left mr-4"} onClick={props.previousStep}>Previous Step</button></p>
                <p><button className={"px-8 py-3 border border-transparent text-base font-small rounded-full text-wh-green-700 border-wh-green-100 hover:bg-wh-green-200 md:py-2 md:text-lg md:px-5"} onClick={onSubmit}>Submit</button></p>

            </div>
        </div>

    );
}

export default Step4;