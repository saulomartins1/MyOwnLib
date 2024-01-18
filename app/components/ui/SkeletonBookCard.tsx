import React from 'react'

export const SkeletonBookCard = () => {
    return <>
        <article className='skeletonImg flex flex-col justify-between bg-dark2 p-4 w-[232px] h-[180px] rounded-lg border-[1px] border-borders'>
            <div className='flex items-center gap-3'>
                <div className='skeletonImg flex-shrink-0 w-12 h-16 bg-dark1 border-borders border-[1px] rounded-md overflow-hidden' />
                <div className='flex flex-col py-1 truncate gap-3'>
                    <div className='border-borders border-[1px] skeletonImg w-[100px] h-3 rounded-lg' />
                    <div className='border-borders border-[1px] skeletonImg w-[60px] h-3 rounded-lg' />
                    <div className='border-borders border-[1px] skeletonImg w-[40px] h-3 rounded-lg flex flex-wrap gap-1' />
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div>
                    <div className='border-borders border-[1px] skeletonImg w-8 h-8 rounded-full' />
                </div>
                <div className='border-borders border-[1px] skeletonImg w-20 h-12 rounded-full'></div>
            </div>
        </article>
    </>
}
