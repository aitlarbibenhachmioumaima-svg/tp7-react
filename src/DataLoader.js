function DataLoader({ render }) {
  const users = ['Oumaima', 'Taha', 'Amin', 'Chaimae'];

  return <div>{render(users)}</div>;
}

export default DataLoader;