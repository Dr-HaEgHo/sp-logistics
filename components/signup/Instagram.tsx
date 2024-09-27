import React from 'react'
import { FilledButton } from '../Button'
import { useRouter } from 'next/navigation';

const Instagram = () => {

  const router = useRouter();

  return (
    <div>
        <p className='text-textBody w-[70%] mx-auto text-links lh-150 text-center mb-6'>OneBot requires certain permissions to build automations with Messenger, Instagram, and WhatsApp. Click the button to grant them.</p>
        <FilledButton
            cta={() => {router.push('/connect-page/instagram?page=1')}}
            text="Continue with Facebook"
            image={require('../../assets/icons/facebookWhite.svg')}
            btnClass='bg-appBlue hover:bg-appBlueHover'
            pClass='text-white'
        />
        <div>
            <p className='text-textSec text-linkSmall text-center mt-8'>By signing up, you agree to OneBot’s
                <br />
                <span ><a href="#" className='text-appBlue'>Terms of Service</a> and <a href="#" className='text-appBlue'>Privacy Policy</a></span>
            </p>
        </div>
    </div>
  )
}

export default Instagram