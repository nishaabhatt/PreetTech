import React from 'react'


const ContactBlog = () => {
  return (
    <div className='pt-10 pl-20 pr-20  mt-10 pb-20'>





    <h2 className='text-4xl font-extrabold'>Leave a Comment</h2>
    <p className='pt-5 text-2xl leading-relaxed text-slate-500'>Your email address will not be published. Required fields are marked *</p>
<form className='border-solid'>
<textarea type='text' placeholder='type here...' className='inputStyle mt-10 text-xl h-[15rem]' required ></textarea>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 '>
    <input type='text' placeholder='Name*' className='inputStyle text-xl w-[28rem]' required />
    <input type='text' placeholder='Email*'  className='inputStyle text-xl w-[28rem]' required />
    <input type='text' placeholder='Website*' className='inputStyle text-xl w-[28rem]' required  />
</div>

<div class="flex items-center mt-10">
    <input id="default-checkbox" type="checkbox" value="" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded 
    focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="default-checkbox" class="ml-5 text-xl font-medium text-slate-500 dark:text-gray-300">
    Save my name, email, and website in this browser for the next time I comment.
    </label>
</div>

           <div className='mt-20 pl-5'>
                <button type='submit' className=' p-5 text-xl bg-primary text-white hover:border-4
                hover:border-secondary hover:bg-bgcolor hover:text-primary'>POST COMMENT</button>
              </div>
</form>
</div>
  )
}

export default ContactBlog