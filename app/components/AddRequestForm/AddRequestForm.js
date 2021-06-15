import {useState} from 'react';
import StepWizard from "react-step-wizard"; // https://github.com/jcmcneal/react-step-wizard
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

function AddRequestForm(props) {

    const [formData, setFormData] = useState({})

    return (
        <StepWizard>
            <Step1 hashKey="1" formData={formData} setFormData={setFormData}></Step1>
            <Step2 hashKey="2" formData={formData} setFormData={setFormData}></Step2>
            <Step3 hashKey="3" formData={formData} setFormData={setFormData}></Step3>
            <Step4 hashKey="4" formData={formData} setFormData={setFormData}></Step4>
        </StepWizard>
    );
}

export default AddRequestForm;