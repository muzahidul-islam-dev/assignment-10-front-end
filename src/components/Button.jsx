import React from 'react'

function Button({ varients, className,  children, ...rest }) {

    return (
        <div>
            {
                varients == 'light' ? <button {...rest} className={`btn btn-sm dark:bg-slate-700 py-5 px-7 rounded ${className}`} size="sm">{children}</button> : <button {...rest} className={`btn btn-info bg-primary shadow-none btn-sm border-none py-5 px-7 rounded text-white ${className}`} size="sm">{children}</button>
            }
        </div>
    )
}

export default Button
