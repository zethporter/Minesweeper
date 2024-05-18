import Cell from "./Cell";

const Row = ({ columns }: { columns: number }) => {
  return (
    <div className="flex">
      {Array.from(Array(columns).keys()).map((key) => (
        <Cell key={key} />
      ))}
    </div>
  );
};

export default Row;
