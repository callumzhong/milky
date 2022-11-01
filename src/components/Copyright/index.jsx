const Copyright = () => {
  return (
    <div className='bg-confetti py-6'>
      <div className='flex gap-4 container'>
        <div className='basis-6/12'>
          ©{' '}
          <a
            target='_blank'
            href='https://github.com/callumzhong'
          >
            Callum Zhong
          </a>
          , AllRight Reserved
        </div>
        <div className='basis-6/12 text-right'>
          設計稿來源{' '}
          <a target='_blank' href='https://htmlcodex.com/'>
            HTML Codex
          </a>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
