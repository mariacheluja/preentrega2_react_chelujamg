//import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetails/ItemDetails'
import useFetch from '../Hook/useFetch'

const ItemDetailContainer = ( { id }) => {
    const [item] = useFetch(`https://fakestoreapi.com/products/${id}`)
    return (
        <>
            {
                item !== null &&
                <ItemDetail item={item} />

            }
        </>
    )
}

export default ItemDetailContainer
