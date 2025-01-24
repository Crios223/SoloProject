// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import LoginFormModal from '../LoginFormModal/LoginFormModal';
// import './Header.css';

// function Header() {
//   const sessionUser = useSelector((state) => state.session.user);
//   const [showModal, setShowModal] = useState(false);

//   const openModal = () => setShowModal(true);
//   const closeModal = () => setShowModal(false);

//   return (
//     <header className="header">
//       {/* Logo area */}
//       <div className="header__logo">
//         <Link to="/">
//           <img
//             src="/images/logo.png" // replace with the correct path to your logo
//             alt="App Logo"
//             className="logo-image"
//           />
//         </Link>
//       </div>

//       {/* Authentication / User Menu */}
//       <div className="header__auth">
//         {sessionUser ? (
//           // If user is logged in, show user menu placeholder
//           <button className="header__user-menu">
//             User Menu
//           </button>
//         ) : (
//           // If no user, show Log In / Sign Up
//           <>
//             <button 
//               onClick={openModal} 
//               className="header__login-btn"
//             >
//               Log In
//             </button>
//             <Link 
//               to="/signup" 
//               className="header__signup-btn"
//             >
//               Sign Up
//             </Link>
//           </>
//         )}
//       </div>

//       {/* Render modal if showModal is true */}
//       {showModal && (
//         <LoginFormModal onClose={closeModal} />
//       )}
//     </header>
//   );
// }

// export default Header;


//----Change
// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// //----- this changed -----import LoginFormModal from '../LoginFormModal/LoginFormModal';
// import './Header.css';

// function Header() {
//   // For logged-in vs. logged-out display
//   const sessionUser = useSelector((state) => state.session.user);
//   const [setShowModal] = useState(false);

//   return (
//     <header className="header">
//       {/* Visual indicator to confirm rendering */}
//       <h2 style={{ backgroundColor: 'yellow', padding: '0.5rem' }}>
//         This is the Header! 
//         {sessionUser ? " (User is logged in)" : " (User is logged out)"}
//       </h2>

//       {/* Temporarily comment out the logo to see if it’s causing issues */}
//       <div className="header__logo">
//         {/*
//         <img
//           src="/images/logo.png"
//           alt="App Logo"
//           className="logo-image"
//         />
//         */}
//       </div>

//       <div className="header__auth">
//         {sessionUser ? (
//           // Show a placeholder user menu if logged in
//           <button className="header__user-menu">User Menu</button>
//         ) : (
//           // Otherwise, show Log In / Sign Up
//           <>
//             <button
//               className="header__login-btn"
//               onClick={() => setShowModal(true)}
//             >
//               Log In
//             </button>
//             <Link to="/signup" className="header__signup-btn">
//               Sign Up
//             </Link>
//           </>
//         )}
//       </div>
          
//       {/* Comment out the modal to ensure it's not hiding the page */}
//       {/*
//       {--This Changed ---showModal && <LoginFormModal onClose={() => setShowModal(false)} />}
//       */}
//     </header>
//   );
// }

// export default Header;


// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// //import LoginFormModal from '../LoginFormModal/LoginFormModal';
// import './Header.css';

// function Header() {
//   // For logged-in vs. logged-out display
//   const sessionUser = useSelector((state) => state.session.user);
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <header className="header">
//       {/* Visual indicator to confirm rendering */}
//       <h2 style={{ backgroundColor: 'yellow', padding: '0.5rem' }}>
//         This is the Header! 
//         {sessionUser ? " (User is logged in)" : " (User is logged out)"}
//       </h2>

//       {/* Temporarily comment out the logo to see if it’s causing issues */}
//       <div className="header__logo">
//         {/*
//         <img
//           src="/images/logo.png"
//           alt="App Logo"
//           className="logo-image"
//         />
//         */}
//       </div>

//       <div className="header__auth">
//         {sessionUser ? (
//           // Show a placeholder user menu if logged in
//           <button className="header__user-menu">User Menu</button>
//         ) : (
//           // Otherwise, show Log In / Sign Up
//           <>
//             <button
//               className="header__login-btn"
//               onClick={() => setShowModal(true)}
//             >
//               Log In
//             </button>
//             <Link to="/signup" className="header__signup-btn">
//               Sign Up
//             </Link>
//           </>
//         )}
//       </div>

     
//       {
//       {import React, { useState } from 'react';
//       import { useSelector } from 'react-redux';
//       import { Link } from 'react-router-dom';
//       import LoginFormModal from '../LoginFormModal/LoginFormModal';
//       import './Header.css';
      
//       function Header() {
//         // For logged-in vs. logged-out display
//         const sessionUser = useSelector((state) => state.session.user);
//         const [showModal, setShowModal] = useState(false);
      
//         return (
//           <header className="header">
//             {/* Visual indicator to confirm rendering */}
//             <h2 style={{ backgroundColor: 'yellow', padding: '0.5rem' }}>
//               This is the Header! 
//               {sessionUser ? " (User is logged in)" : " (User is logged out)"}
//             </h2>
      
//             {/* Temporarily comment out the logo to see if it’s causing issues */}
//             <div className="header__logo">
//               {/*
//               <img
//                 src="/images/logo.png"
//                 alt="App Logo"
//                 className="logo-image"
//               />
//               */}
//             </div>
      
//             <div className="header__auth">
//               {sessionUser ? (
//                 // Show a placeholder user menu if logged in
//                 <button className="header__user-menu">User Menu</button>
//               ) : (
//                 // Otherwise, show Log In / Sign Up
//                 <>
//                   <button
//                     className="header__login-btn"
//                     onClick={() => setShowModal(true)}
//                   >
//                     Log In
//                   </button>
//                   <Link to="/signup" className="header__signup-btn">
//                     Sign Up
//                   </Link>
//                 </>
//               )}
//             </div>
      
//             {/* Comment out the modal to ensure it's not hiding the page */}
//             {/*
//             {showModal && <LoginFormModal onClose={() => setShowModal(false)} />}
//             */}
//           </header>
//         );
//       }
      
//       {showModal && <LoginFormModal onClose={() => setShowModal(false)} />}
      
//     </header>
//   );
// }

// export default Header;


import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginFormModal from '../LoginFormModal/LoginFormModal';
import './Header.css';

function Header() {
  // For logged-in vs. logged-out display
  const sessionUser = useSelector((state) => state.session.user);
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="header">
      {/* Visual indicator to confirm rendering */}
      <h2 style={{ backgroundColor: 'yellow', padding: '0.5rem' }}>
        This is the Header! 
        {sessionUser ? " (User is logged in)" : " (User is logged out)"}
      </h2>

      {/* Temporarily comment out the logo to see if it's causing issues */}
      <div className="header__logo">
        {/*
        <img
          src="/images/logo.png"
          alt="App Logo"
          className="logo-image"
        />
        */}
      </div>

      <div className="header__auth">
        {sessionUser ? (
          // Show a placeholder user menu if logged in
          <button className="header__user-menu">User Menu</button>
        ) : (
          // Otherwise, show Log In / Sign Up
          <>
            <button
              className="header__login-btn"
              onClick={() => setShowModal(true)}
            >
              Log In
            </button>
            <Link to="/signup" className="header__signup-btn">
              Sign Up
            </Link>
          </>
        )}
      </div>

      {/* Comment out the modal to ensure it's not hiding the page */}
      {showModal && <LoginFormModal onClose={() => setShowModal(false)} />}
    </header>
  );
}

export default Header;