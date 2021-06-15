import React from 'react';

function Step1(props) {

    const buttonClick = (e) => {
        e.preventDefault()
        props.setFormData((prevState) => {
            return (
                { ...prevState, category: e.target.name }
            )
        })
        props.nextStep()
    }

    return (
        <div>
            <h2 className={"text-3xl"}>{props.currentStep}. Welche art von Hilfe moechtest Du anbieten?</h2>
            <div class="pt-20 pb-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                <div class="rounded overflow-hidden shadow-lg">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Einkaufen</div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <button onClick={buttonClick} name="Einkaufen-Essen" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Essen</button>
                        <button onClick={buttonClick} name="Einkaufen-Kleidung" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Kleidung</button>
                        <button onClick={buttonClick} name="Einkaufen-Sonstiges" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Sonstiges</button>
                    </div>
                </div>
                <div class="rounded overflow-hidden shadow-lg">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Gesellschaft</div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span onClick={buttonClick} name="Gesellschaft-Schreiben" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Schreiben</span>
                        <span onClick={buttonClick} name="Gesellschaft-Spazieren" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Spazieren</span>
                        <span onClick={buttonClick} name="Gesellschaft-Videocall" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Videocall</span>
                        <span onClick={buttonClick} name="Gesellschaft-Telefonieren" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Telefonieren</span>
                        <span onClick={buttonClick} name="Gesellschaft-Videospiele" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Videospiele</span>
                    </div>
                </div>
                <div class="rounded overflow-hidden shadow-lg">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Dinge Reparieren</div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span onClick={buttonClick} name="Reparieren-Fahrrad" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Fahrrad</span>
                        <span onClick={buttonClick} name="Reparieren-Computer" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Computer</span>
                        <span onClick={buttonClick} name="Reparieren-Sonstiges" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Sonstiges</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Step1;