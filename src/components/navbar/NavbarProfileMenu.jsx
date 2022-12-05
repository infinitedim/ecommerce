/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

// import React from "react";
// import { useAppSelector } from "../../app/hooks";

// import { ReactComponent as Miolica } from "../../assets/ico/Logo_full.svg";

// export default function NavbarProfileMenu({ isProfileMenuOpened, onClose }) {
//   const { isAuthenticated } = useAppSelector(({ auth }) => auth);

//   if (isAuthenticated) {
//     return <p>Lorem ipsum dolor sit amet.</p>;
//   }

//   return (
//     <div
//       className={`popup-bottom ${isProfileMenuOpened ? "active" : ""}`}
//       onClick={onClose}
//     >
//       <div
//         className="popup-content max-w-[550px]"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="relative flex items-center justify-end border-b border-l-custom-white-700 py-2 px-4">
//           <Miolica className="absolute-center h-[30px] w-auto" />

//           <button
//             className="btn-default flex h-10 w-10 items-center justify-center p-0 text-xl"
//             type="button"
//             onClick={onClose}
//           >
//             &times;
//           </button>
//         </div>
//         <div className="p-6">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident,
//             tempore.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
