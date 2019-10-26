import React from 'react'

const AuthorImage = ({image, ...props }) => {
    return (
        <div>
            <img src="{image}"></img>
        </div>
    )
}

export default AuthorImage

