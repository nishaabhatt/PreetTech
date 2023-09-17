import React from 'react'

const Contact = () => {

  return (
    <section id='contact' className='py-10 bg-bgcolor overflow-x-hidden'>
      <div className='container mx-auto px-4'>
        <div className='mx-w-full mx-auto text-center mb-20'>
          <h2 className='heading font-bold text-5xl lg:text-5xl'>Contact</h2>
        </div>
        <div className='lg:flex space-x-4 justify-between'>
          <div className='lg:w-4/12'>
            <heading className='font-bold text-3xl'>Contacting Our IT Hub: Your First Step To Success</heading>
            <p className='text-body leading-9 text-xl lg:text-xxl py-10'>Embark on a journey of digital transformation with our IT hub. From innovative solutions to expert guidance, we’re here to pave the way for your success. Reach out today and let’s shape the future together.</p>
          </div>

          <div className='lg:w-6/12'>
            <form className='flex flex-col gap-8'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <input type='text' placeholder='Name*' className='inputStyle' required />
                <input type='email' placeholder='Email*' className='inputStyle' required />
              </div>
              <input type='text' placeholder='Subject*' className='inputStyle' required />
              <textarea type='text' placeholder='Please describe what you need*' 
              className='inputStyle' required ></textarea>

              <div>
                <button type='submit' className='btn'>SEND MESSAGE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact