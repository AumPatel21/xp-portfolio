import React from 'react'

const  Icons = () => {
  return (
    <div className='flex flex-col fixed font-bold'>
      <figure className='flex flex-col justify-center items-center w-fit relative mt-3 ml-1'>
        <img src='/assets/resume.png' alt='resume pdf' className='w-12'/>
        <figcaption className='text-center'>Resume</figcaption>
      </figure>

      <figure className='flex flex-col justify-center items-center w-fit relative mt-3 ml-1'>
        <img src='/assets/cmd.png' alt='resume pdf' className='w-12'/>
        <figcaption className='text-center'>Command <br/>Prompt</figcaption>
      </figure>

      <figure className='flex flex-col justify-center items-center w-fit relative mt-3 ml-1'>
        <img src='/assets/about.png' alt='resume pdf' className='w-12'/>
        <figcaption className='text-center'>Command <br/>Prompt</figcaption>
      </figure>

      <figure className='flex flex-col justify-center items-center w-fit relative mt-3 ml-1'>
        <img src='/assets/projects.png' alt='resume pdf' className='w-12'/>
        <figcaption className='text-center'>Projects</figcaption>
      </figure>
    </div>
  )
}

export default Icons