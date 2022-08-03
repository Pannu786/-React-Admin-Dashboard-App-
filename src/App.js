import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
// import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import Tippy from '@tippyjs/react';

// We are importing the main Components here 
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';

// Over here we importing individual pages which will be used in the component
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorMapping,
  ColorPicker,
  Editor,
  Line,
} from './pages';

// Tailwind default css styles are imported here
import './App.css';

// We are importing the State context here to use the state in the component which will be used in the components too
import { useStateContext } from './contexts/ContextProvider';


const App = () => {
  const { activeMenu } = useStateContext();
  return (
    <div>
      {/* So far in the main app file we have style the setting logo, activeMenu styles for Sidebar, style settings for Navbar and giving routes to the individual paged  */}
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <Tippy content='Settings'>
              <button
                type='button'
                className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                style={{ background: 'blue', borderRadius: '50%' }}
              >
                <FiSettings />
              </button>
            </Tippy>
          </div>
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full ${
              activeMenu ? 'md:ml-72' : 'flex-2'
            }`}
          >
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>
          </div>

          <div>
            <Routes>
              {/* DashBoard */}
              <Route path='/' element={<Ecommerce />} />
              <Route path='/eCommerce' element={<Ecommerce />} />
              {/* Pages */}
              <Route path='/orders' element={<Orders />} />
              <Route path='/employees' element={<Employees />} />
              <Route path='/customers' element={<Customers />} />

              {/* Apps */}
              <Route path='/kanban' element={<Kanban />} />
              <Route path='/editor' element={<Editor />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/color-picker' element={<ColorPicker />} />

              {/* Charts */}
              <Route path='/line' element={<Line />} />
              <Route path='/area' element={<Area />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/financial' element={<Financial />} />
              <Route path='/color-mapping' element={<ColorMapping />} />
              <Route path='/pyramid' element={<Pyramid />} />
              <Route path='/stacked' element={<Stacked />} />
            </Routes>
          </div>
        </div>
        <div></div>
      </BrowserRouter>
    </div>
  );
};

export default App;
