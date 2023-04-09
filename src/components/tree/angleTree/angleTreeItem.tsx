import React from "react";
import styles from './angleTreeItem.module.less';
import { TreeItem } from "../treeData";

import { MenuItem } from "../TreeMenuList";

interface AngleTreeItemProps {
  menuItem: TreeItem;
}
export function AngleTreeItem(props: AngleTreeItemProps) {
  const { menuItem } = props;
  return (
    <div className={styles.angleTree}>
      <MenuItem menuItem={menuItem} />
    </div>
  )
}