import React from 'react'
import { ProductFn } from './ProductFn'
import { useQuery } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react';

function Products() {

    console.log(ProductFn());

    const { data, isLoading, isError, error } = useQuery({
        queryFn:ProductFn,
        queryKey: ['products']
    })
    
if (isLoading) return <div> <Loader2 className="animate-spin" /> </div>
if (isError) return <div>Error: {error.message}</div>
  return (
    <div className="max-w-4xl mx-auto p-4">
        {data.posts.map((product) => (
            <div key={product.id} className="border p-4 mb-4 rounded shadow">
                <h3 className="text-lg font-bold">{product.title}</h3>
                <p className="text-gray-600">{product.body}</p>
            </div>
        ))}

    </div>
  )
}

export default Products