import React from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'

const Property = () => {
    const { pathname } = useLocation()
    const id = pathname.split("/").slice(-1)[0]

    const { data, isLoading, isError } = useQuery(["resd", id], () => getProperty(id))
    return (
        <div className="wrapper">
            This is an individual property path
        </div>
    )
}

export default Property