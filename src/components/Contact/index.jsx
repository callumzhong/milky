import Button from '../Button';
import {
  IcBaselinePhone,
  IcRoundEmail,
  MaterialSymbolsLocationOnRounded,
} from '../Icon';
import THEME from '../theme';
import TitleSection from '../TitleSection';

const Contact = () => {
  return (
    <section className='container py-12'>
      <div className='max-w-lg text-center mx-auto mb-12'>
        <TitleSection icon='both' align='center'>
          CONTACT US
        </TitleSection>
        <h2 className={THEME.h1}>
          If You Have Any Query, Please Contact Us
        </h2>
      </div>
      <div className='flex flex-wrap -mx-6'>
        <div className='basis-full lg:basis-6/12 px-6 mb-12 lg:mb-0'>
          <h3 className={`${THEME.h3} mb-6`}>
            Need a functional contact form?
          </h3>
          <p className='mb-6'>
            The contact form is currently inactive. Get a
            functional and working contact form with Ajax &
            PHP in a few minutes. Just copy and paste the
            files, add a little code and you're done.
          </p>
          <form className='flex flex-wrap -mx-2'>
            <div className='basis-full lg:basis-6/12 px-2 mb-4'>
              <label className='relative block'>
                <input
                  className='peer w-full border rounded-lg pb-[10px] pt-[26px] px-3 outline-hippie-green focus:pb-[10px] focus:pt-[26px] placeholder-shown:py-[18px] text-gray-900'
                  type='text'
                  placeholder=' '
                />
                <span className='text-sm -top-2 absolute left-0 py-4 px-3 duration-300 peer-focus:text-sm peer-focus:-top-2 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base'>
                  Your Name
                </span>
              </label>
            </div>
            <div className='basis-full lg:basis-6/12 px-2 mb-4 '>
              <label className='relative block'>
                <input
                  className='peer w-full border rounded-lg pb-[10px] pt-[26px] px-3 outline-hippie-green focus:pb-[10px] focus:pt-[26px] placeholder-shown:py-[18px] text-gray-900'
                  type='text'
                  placeholder=' '
                />
                <span className='text-sm -top-2 absolute left-0 py-4 px-3 duration-300 peer-focus:text-sm peer-focus:-top-2 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base'>
                  Your Email
                </span>
              </label>
            </div>
            <div className='basis-full px-2 mb-4'>
              <label className='relative block'>
                <input
                  className='peer w-full border rounded-lg pb-[10px] pt-[26px] px-3 outline-hippie-green focus:pb-[10px] focus:pt-[26px] placeholder-shown:py-[18px] text-gray-900'
                  type='text'
                  placeholder=' '
                />
                <span className='text-sm -top-2 absolute left-0 py-4 px-3 duration-300 peer-focus:text-sm peer-focus:-top-2 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base'>
                  Subject
                </span>
              </label>
            </div>
            <div className='basis-full px-2 mb-4'>
              <label className='relative block'>
                <textarea
                  placeholder=' '
                  className='peer w-full h-[250px] border rounded-lg pb-[10px] pt-[26px] px-3 outline-hippie-green focus:pb-[10px] focus:pt-[26px] placeholder-shown:py-[18px] text-gray-900'
                  name=''
                  id=''
                ></textarea>
                <span className='text-sm -top-2 absolute left-0 py-4 px-3 duration-300 peer-focus:text-sm peer-focus:-top-2 peer-placeholder-shown:top-0 peer-placeholder-shown:text-base'>
                  Message
                </span>
              </label>
            </div>
            <div className='basis-full'>
              <Button type='submit'>Send Message</Button>
            </div>
          </form>
        </div>
        <div className='basis-full lg:basis-6/12 flex flex-col px-6'>
          <h3 className={`mb-6 ${THEME.h3}`}>
            Contact Details
          </h3>
          <ul className='flex w-full flex-col'>
            <li className='flex py-4 border-b gap-5'>
              <div className='block rounded-full p-2 bg-confetti self-start'>
                <MaterialSymbolsLocationOnRounded className='text-lg' />
              </div>
              <div className='flex flex-col gap-2'>
                <h5 className={THEME.h5}>Our Office</h5>
                <p>123 Street, New York, USA</p>
              </div>
            </li>
            <li className='flex py-4 border-b gap-5'>
              <div className='block rounded-full  p-2 bg-confetti self-start'>
                <IcBaselinePhone className='text-lg' />
              </div>
              <div className='flex flex-col gap-2'>
                <h5 className={THEME.h5}>Call Us</h5>
                <p>+012 345 67890</p>
              </div>
            </li>
            <li className='flex py-4 gap-5'>
              <div className='block rounded-full  p-2 bg-confetti self-start'>
                <IcRoundEmail className='text-lg' />
              </div>
              <div className='flex flex-col gap-2'>
                <h5 className={THEME.h5}>Mail Us</h5>
                <p>info@example.com</p>
              </div>
            </li>
          </ul>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6000584.0718284445!2d-75.770041!3d42.74663!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1667376227634!5m2!1sen!2sbd'
            className='border-none w-full flex-1 min-h-[320px]'
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
