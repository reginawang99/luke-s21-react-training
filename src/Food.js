function Food(props) {
  const newAddLikes = () => {
    const likeCopy = [...props.likeCount];
    likeCopy[props.currIndex] = likeCopy[props.currIndex] + 1;
    props.setLikeCount(likeCopy);
  };

  const removeFood = () => {
    const foodCopy = [...props.foodList.splice(0, props.currIndex), ...props.foodList.splice(props.currIndex + 1)];
    if (props.currIndex === foodCopy.length) {
      props.setCurrIndex(0);
    }
    props.setFoodList(foodCopy);

    const likeCopy = [...props.likeCount.splice(0, props.currIndex), ...props.likeCount.splice(props.currIndex + 1)];
    props.setLikeCount(likeCopy);
  };

  const nextFood = () => {
    props.setCurrIndex((props.currIndex + 1) % props.foodList.length);
  };

  return (
    <div className="food-container">
      <h3 className="food-item">{props.name}</h3>
      <h4 id="likeCount" className="food-item">
        {' '}
        Likes:
        {props.likeCount[props.currIndex]}
      </h4>

      <div>
        <button className="my-button food-button" onClick={newAddLikes}>Like Me</button>
        { props.isSingleView && <button className="my-button food-button" onClick={nextFood}> Pass Me </button> }
      </div>

      <button className="my-button food-button" onClick={removeFood}>Remove Me</button>
    </div>
  );
}
export default Food;
