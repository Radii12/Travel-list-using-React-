const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list🚀</em>
      </p>
    );
  }
  const numberOfItems = items.length;
  const nubmberOfItemsPacked = items.filter((item) => item.packed).length;
  const presntage = Math.round((nubmberOfItemsPacked / numberOfItems) * 100);
  return (
    <footer className="stats">
      <em>
        {presntage === 100
          ? "you got everything Ready to go ✈️"
          : `You have ${numberOfItems} items on your list . and you already packed
        ${nubmberOfItemsPacked} (${presntage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
