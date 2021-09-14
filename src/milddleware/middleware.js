// import { fetchDataAction } from "../action";

// const fetchData = (dispatch) => {
//   fetch("http://localhost:3785/")
//     .then((res) => res.json())
//     .then((res) => {
//       dispatch({ data: res });
//     })
//     .catch((error) => {
//       dispatch({ data: error });
//     });
// };

// export const nameMiddleWare =
//   ({ dispatch }) =>
//   (next) =>
//   (action) => {
//     const { type } = action;
//     switch (type) {
//       case FETCH_DATA:
//         fetchData(dispatch);
//         break;
//       default:
//         next(action);
//     }
//   };
