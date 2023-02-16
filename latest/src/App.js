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
    <div data-is-scrollable="true" style={{ overflow: 'hidden'}}>
      <h1>Using latest @fluentui/react at time of writing (v8.105.8)</h1>
      <DetailsList
        items={items}
        columns={columns}/>
    </div>
  );
}

export default App;
