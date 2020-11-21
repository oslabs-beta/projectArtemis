import { Import } from 'https://deno.land/x/aleph/mod.ts'
import React from 'https://esm.sh/react'
import MenuBar from '../components/MenuBar.tsx'
import AnalyticsContainer from '../components/AnalyticsContainer.tsx'
import GraphTwo from "../components/analytics-containers/GraphTwo.tsx"

export default function Home() {
    return (
        <div className='container-gui'>
            <Import from="../style/index.css" />
            <MenuBar />
            <AnalyticsContainer />
        </div>
    )
}
