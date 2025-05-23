const Controller2 = ({ onClickButton }) => {
  const buttonList = [-1, -10, -100, +100, +10, +1];

  return (
    <div>
      {buttonList.map((value) => {
        return (
          <button
            key={value}
            onClick={() => {
              onClickButton(value);
              console.log(value);
            }}
          >
            {(value > 0 ? "+" : "") + value}
          </button>
        );
      })}
    </div>
  );
};

export default Controller2;
