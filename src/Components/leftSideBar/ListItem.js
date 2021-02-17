import React from "react";

// const props = {
//    title:{title}
//     lessonNumber:{item.lessonNumber}
// id={item.id}
// }

const ListItem = (props) => {
  const { lessonNumber, title, children } = props;
  // console.log(props.item);
  return (
    <li>
      <span>
        {/* {hash} */}
        {lessonNumber} - {title}
      </span>
      {children}
    </li>
  );
};

export default ListItem;
