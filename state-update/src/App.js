import './App.css';
import { DetailsList } from '@fluentui/react';

const items = [];

for (let i = 0; i < 200; i++) {
 items.push({
    key: i,
    name: 'Item ' + i,
    value: i,
  });
}

const columns = [
  { key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
  { key: 'column2', name: 'Value', fieldName: 'value', minWidth: 100, maxWidth: 200, isResizable: true },
];

function App() {
  return (
    <div>
      <h1>Using patched @fluentui/react</h1>
      <DetailsList
        items={items}
        columns={columns}/>
    </div>
  );
}

export default App;
