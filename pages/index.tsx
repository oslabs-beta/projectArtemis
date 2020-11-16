import { Import } from 'https://deno.land/x/aleph/mod.ts'
import React from 'https://esm.sh/react'
import TabBar from '../components/MenuBar.tsx'

export default function Home() {
    return (
        <div className='container-gui'>
            <Import from="../style/index.css" />
            <TabBar />
        </div>
    )
}
