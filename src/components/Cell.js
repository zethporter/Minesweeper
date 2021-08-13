import React from 'react'

export default function Cell({details}) {
    return (
        <div style={{ width: 30, height: 30 }}>
            {details.value}
        </div>
    )
}

