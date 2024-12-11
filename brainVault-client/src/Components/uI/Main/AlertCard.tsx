import React from 'react'

function AlertCard() {
    return (
        <div className="mt-2 absolute right-6 top-4 bg-red-100 border border-red-200 text-sm text-red-800 rounded-lg p-4 dark:bg-red-800/10 dark:border-red-900 dark:text-red-500" role="alert"  aria-labelledby="hs-soft-color-danger-label">
            <span  className="font-bold">Danger</span> alert! You should check in on some of those fields below.
        </div>
    )
}

export default AlertCard
