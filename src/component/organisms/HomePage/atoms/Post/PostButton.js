// import React from "react";
// import FromEditPost from "./FromEditPost";
// import usePostButton from "./usePostButton";

// export default function PostButton({ postDefaultData }) {
//   const {
//     handleClickSend,
//     handleChange,
//     handleClickModale,
//     handleClickDelete,
//     handleSubmit,
//     userData,
//     openModal,
//     userPostData,
//   } = usePostButton();
//   return (
//     <>
//       {postDefaultData.map((data) =>
//         data.userId === userData.userId ? (
//           <div>
//             <button onClick={handleClickModale}>Editer</button>
//             <div className="post-modale--edit">
//               {openModal ? (
//                 <div className="post-modale--edit ">
//                   <button onClick={handleClickModale}>X</button>
//                   <form onSubmit={() => handleSubmit(data)}>
//                     <FromEditPost
//                       handleChange={handleChange}
//                       userPostData={userPostData}
//                     />
//                     <button>Valider</button>
//                   </form>
//                 </div>
//               ) : null}

//               <button onClick={() => handleClickDelete(data)}>Supprimer</button>
//             </div>
//           </div>
//         ) : (
//           <button onClick={() => handleClickSend(data)}>Paticiper</button>
//         )
//       )}
//     </>
//   );
// }
