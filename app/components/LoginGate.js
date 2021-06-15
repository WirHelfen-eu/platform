import React from 'react';
import { signIn, signOut } from 'next-auth/client'

function LoginGate(props) {
    return (
        <div className="flex flex-col p-8 bg-white rounded-2xl border-2">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="flex flex-col ml-3">
                        <div className="font-medium leading-none">You are not logged in.</div>
                        <p className="text-sm text-gray-600 leading-none mt-1">Hey darling, to view this peage you will have to login.
                        </p>
                    </div>
                </div>
                <button onClick={signIn} mat-icon-button="" className="flex-no-shrink bg-wh-green-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-wh-green-500 text-white rounded-full">Login or Register</button>
            </div>
        </div>
    );
}

export default LoginGate;