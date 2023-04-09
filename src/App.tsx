import React from 'react';
import './App.css';
import { Menus } from '@/components/tree/TreeMenuList';
import { node } from '@/components/tree/treeData';
import { AngleTreeItem } from '@/components/tree/angleTree/angleTreeItem'

function App() {
  return (
    <div className="App">
      <div className="inner">
        <div className="menuList">
          {
            node.map((v, index) => {
              if (v.children) {
                return <Menus menu={v} key={index} />
              } else {
                return <AngleTreeItem menuItem={v} key={index + 100} />
              }
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
