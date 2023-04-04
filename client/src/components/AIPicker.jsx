import React from 'react'
import CustomButton from './CustomButton';

const AIPicker = ({prompt , setPrompt, generatingImg, handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea
        placeholder='ASK THE AI'
        rows={5}
        value={prompt}
        onChange={(e)=>setPrompt(e.target.value)}
        className='aipicker-textarea'
      />
      <div className='flex flex-wrap gap-3'>
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="AI in progress"
            CustomStyles="text-xs"

          />
        ):(
          <>
            <CustomButton
              type = 'outline'
              title='AI Logo'
              handleClick={()=>handleSubmit('logo')}
              CustomStyles="text-xs"
            />
            <CustomButton
              type = 'filled'
              title='AI Full Image'
              handleClick={()=>handleSubmit('full')}
              CustomStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker