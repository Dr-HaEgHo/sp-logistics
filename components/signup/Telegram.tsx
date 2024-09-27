import React from 'react'
import { FilledButton } from '../Button'
import { useRouter } from 'next/navigation';

const Telegram = () => {

  const router = useRouter();

  return (
    <div>
        <p className='text-textBody mx-auto text-links lh-150 text-center mb-6'>Click the button below to open Telegram app on your desktop. When Telegram chat is opened, click 'Start'.</p>
        <FilledButton
            cta={() => {router.push('/signup/connect-telegram?page=1')}}
            text="Continue with Telegram"
            image={require('../../assets/icons/telegramWhite.svg')}
            btnClass='bg-teleBlue hover:bg-teleBlueHover'
            pClass='text-white'
        />
        <div>
            <p className='text-textSec text-linkSmall text-center mt-8'>By signing up, you agree to ChatBoomer's
                <br />
                <span ><a href="#" className='text-appBlue'>Terms of Service</a> and <a href="#" className='text-appBlue'>Privacy Policy</a></span>
            </p>
        </div>
    </div>
  )
}

export default Telegram