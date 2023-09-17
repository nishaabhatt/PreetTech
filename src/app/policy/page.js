import React from 'react'

const privacyContent = {
    heading: "Privacy Policy"
}

const PrivacyPolicy = () => {
  return (
    <section id='policy' className='pb-20 py-10 bg-bgcolor'>
        <div className='container mx-auto px-4'>
            <div className='max-w-xl mx-auto text-center mb-10'>
                {privacyContent.heading && (
                    <h2 className='heading text-5xl font-bold lg:text-5xl '>{privacyContent.heading}</h2>
                )}
            </div>
            <div className='pt-10 pb-10 ml-30'>
                <h3 className=' heading inline-block font-bold text-4xl lg:text-4xl'>
                Who We Are
                </h3>
            </div>
            <div className='ml-30 mr-30'>
                <p className='text-body leading-9 text-xl lg:text-xxl '>
                Our website address is: https://preettech.com.
                </p>
            </div>
            <div className='pt-10 pb-10 ml-30'>
                <h3 className=' heading inline-block font-bold text-4xl lg:text-4xl'>
                Comments
                </h3>
            </div>
            <div className='ml-30 mr-30'>
                <p className='text-body leading-9 text-xl lg:text-xxl '>
                When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.
                </p>
                <p className='text-body leading-9 text-xl lg:text-xxl '>
                An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.
                </p>
            </div>
            <div className='pt-10 pb-10 ml-30'>
                <h3 className=' heading inline-block font-bold text-4xl lg:text-4xl'>
                Media
                </h3>
            </div>
            <div className='ml-30 mr-30'>
                <p className='text-body leading-9 text-xl lg:text-xxl '>
If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
                </p>
            </div>
            <div className='pt-10 pb-10 ml-30'>
                <h3 className=' heading inline-block font-bold text-4xl lg:text-4xl'>
                Cookies
                </h3>
            </div>
            <div className='ml-30 mr-30'>
                <p className='text-body leading-9 text-xl lg:text-xxl '>
                If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
                </p>
                <p className='text-body leading-9 text-xl lg:text-xxl '>
                If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
                </p>
                <p className='text-body leading-9 text-xl lg:text-xxl '>
                When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
                </p>
            </div>
        </div>
    </section>
  )
}

export default PrivacyPolicy