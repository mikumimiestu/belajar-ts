interface GenericListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function GenericList<T>({ items, renderItem }: GenericListProps<T>) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="bg-white p-3 shadow rounded">
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

export default GenericList;
