'use client'

import { TextField } from '@radix-ui/themes'
import React from 'react'

const NewRecipeForm = () => {
  return (
    <div>
        <form>
            <TextField.Root>
                <TextField.Input placeholder='Title'/>
            </TextField.Root>
        </form>
    </div>
  )
}

export default NewRecipeForm