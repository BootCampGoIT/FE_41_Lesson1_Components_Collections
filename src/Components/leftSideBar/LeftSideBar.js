import React from "react";
import ListItem from "./ListItem";

import AuthForm from "../auth/AuthForm";

const hash = "#";

const lessons1 = [
  {
    title: "  Компоненты и коллекции",
    lessonNumber: "Занятие 1",
    id: "srdtfyguhjiok",
  },
  {
    title: "  События и состояние",
    lessonNumber: "Занятие 2",
    id: "srdtfyguhjgdfdgiok",
  },
  {
    title: "  Формы",
    lessonNumber: "Занятие 3",
    id: "srdtfygugdgfdhjiok",
  },
  {
    title: "  Жизненный цикл",
    lessonNumber: "Занятие 4",
    id: "srdtfdfgdgyguhjiok",
  },
];

const LeftSideBar = () => {
  return (
    <>
      <ul>
        {lessons1.map((item) => (
          <ListItem key={item.id} {...item}>
            <button type='button'>Delete</button>
            <button type='button'>Edit</button>
          </ListItem>
        ))}
      </ul>
      <AuthForm />
    </>
  );
};

// title={item.title}
//           lessonNumber={item.lessonNumber}
//           id={item.id}

// const LeftSideBar ={
//     "dfhgjkhjghfdggfghfsdfdfsd678s": {
//         "fgjhdkw5434": {
//             key: "1"
//         },
//         "fgjh654rffd": {
//             key: 2
//         }
//     }
// }

export default LeftSideBar;
