import { Import } from 'https://deno.land/x/aleph/mod.ts'
import React from 'https://esm.sh/react'

export default function Home() {
    return (
        <div>
            <Import from="../style/index.less" />
        </div>
    )
}
