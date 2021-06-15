import React from 'react';

function RequestCard({ data }) {
    return (
        <div className="rounded overflow-hidden shadow-lg sm:wd-full">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Request</div>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{data.city.name}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{data.type.name}</span>
            </div>
        </div>
    );
}

export default RequestCard;