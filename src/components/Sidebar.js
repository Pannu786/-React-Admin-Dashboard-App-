import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
// import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import Tippy from '@tippyjs/react';

import { links } from '../data/dummy';

const Sidebar = () => {
  const activeMenu = true;

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <>
          <div className='flex justify-between items-center'>
            <Link
              to='/'
              onClick={() => {}}
              className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tighter dark:text-white text-slate-900'
            >
              <SiShopware /> <span>Mars-Shoppy</span>
            </Link>
            <Tippy content='Menu' placement='right'>
              <button
                type='button'
                onClick={() => {}}
                className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'
              >
                <MdOutlineCancel />
              </button>
            </Tippy>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
