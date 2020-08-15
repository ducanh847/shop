// import React, { Component, useState } from "react";
// import CartItem from "./CartItem";
// import { InputNumber } from "antd";

// const data = JSON.parse(localStorage.getItem("CART"));
// const sum = JSON.parse(localStorage.getItem("SUM"));
// const CartContainer = () => {
//   const [dataAfterUpdate, setDataAfterUpdate] = useState(data ? data : []);
//   const [total, setTotal] = useState(sum ? sum : 0);

//   const formatNumber = (num) => {
//     return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
//   };
//   const onChangeQuanlity = (val, id) => {
//     let dataAfterUpdate = []
//     let total = 0;
//     data.map((x) => {
//       if(x.id === id){
//         x.quanlity = val;
//       }
//       dataAfterUpdate.push(x)
//       total += (x.quanlity * x.price)
//       setTotal(total)
//       localStorage.setItem('CART', JSON.stringify(dataAfterUpdate));
//     })
//     localStorage.setItem("SUM", JSON.stringify(total));
//   };
//   return (
//     <div className="table-cart">
//       <table>
//         <thead>
//           <tr>
//             <th>Product</th>
//             <th>Price</th>
//             <th>Quantity</th>
//             <th>Total</th>
//             <th />
//           </tr>
//         </thead>
//         <tbody>
//           {data?.map((item, idx) => {
//             return (
//               <tr>
//                 <td>{item.name}</td>
//                 <td>{formatNumber(item.price)}</td>
//                 <td>
//                   <InputNumber
//                     min="1"
//                     defaultValue={item.quanlity}
//                     onChange={(val) => onChangeQuanlity(val, item.id)}
//                   />
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <p>{total}</p>
//     </div>
//   );
// };

// export default CartContainer;
