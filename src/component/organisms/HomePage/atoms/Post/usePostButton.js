// import { useState } from "react";
// import axios from "axios";
// import AuthContext from "../../../../Context/AuthContext";
// import Context from "../../../../Context/Context";
// export default function usePostButton() {
//   const [userData] = (AuthContext);
//   const { , set } = (Context);

//   const [userPostData, setuserPostData] = useState({});
//   const [openModal, setOpenModal] = useState(false);

//   const handleClickSend = (data) => {
//     const fetchEventRequest = async () => {
//       const res = await axios.post("/api/event/participate", {
//         userId: userData.userId,
//         postId: data.id,
//       });
//       console.log("handleClickSend usePostButton", res);
//     };

//     fetchEventRequest();
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setuserPostData({
//       ...userPostData,
//       [name]: value,
//     });
//   };
//   const handleClickModale = () => {
//     setOpenModal(!openModal);
//   };

//   const handleClickDelete = (data) => {
//     const fetchDeletePost = async () => {
//       console.log(data.id);
//       const res = await axios.delete(`/api/delete/post/${data.id}`);
//       console.log("handleClickDelete", res);
//       set(!);
//     };

//     fetchDeletePost();
//   };
//   const handleSubmit = async (event, data) => {
//     //   event.preventDefault();
//     //   console.log("data", data.id);
//     //   // console.log("userPostData", userPostData);
//     //   // const res = await axios.patch(`/api/edit/post/${data.id}`, userPostData);
//     //   // console.log("res", res.status);
//     //   // if (res.status === 200) {
//     //   //   console.log("status 200");
//     //   //   await alert("post editer avec succes");
//     //   // }
//     //   // setOpenModal(!openModal);
//     //   // set(!);
//   };
//   return {
//     handleClickSend,
//     handleChange,
//     handleClickModale,
//     handleClickDelete,
//     handleSubmit,
//     userData,
//     openModal,
//     userPostData,
//   };
// }
