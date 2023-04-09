import { useRef } from "react";
import styles from './treeMenuList.module.less';
import dropdown from '@/assets/dropdown.png';
// import { useNavigate, useParams } from "react-router-dom";
import { TreeItem } from './treeData';



interface MenusProps {
  menu: TreeItem
}

export function Menus(props: MenusProps) {
  const { menu } = props;
  const ulRef = useRef<HTMLDivElement>(null);

  function onDisplayMenuItemList(e: any) {
    e.stopPropagation();
    // 这是点击➡️ 时调用的方法
    // 如果当前这个➡️ 没有旋转，那就设置旋转，视觉效果

    e.target.style.transform = e.target.style.transform === 'rotate(0deg)' ? 'rotate(180deg)' : 'rotate(0deg)'
    let ul = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
    for (let i = 1; i < ul.children.length; i++) {
      ul.children[i].style.display = ul.children[i].style.display === "none" ? "block" : 'none'
    }
  }

  function tree(children: TreeItem[] | undefined) {
    let treeItem;
    //如果有子元素
    if (children) {
      //子元素是数组的形式,把所有的子元素循环出来
      treeItem = children.map((item: TreeItem, key: number) => {
        return (
          <ul key={key} >
            <li>
              <MenuItem menuItem={item} onDisplayMenuItemList={onDisplayMenuItemList} />
            </li>
            {/* 如果当前子元素还有子元素，就递归使用tree方法，把当前子元素的子元素渲染出来 */}
            {tree(item.children)}
          </ul>
        )
      })
    }
    return treeItem;
  }

  function treeItemGroup(itemGroup: any) {
    let itemGroupItem = [];
    // 把所有节点放在一个数组里面
    itemGroupItem.push(
      <main>
        {/* 第一个层级 */}
        <li key={itemGroup.key} >
          <MenuItem menuItem={itemGroup} onDisplayMenuItemList={onDisplayMenuItemList} />
        </li>
        {/* 调用tree方法 */}
        {tree(itemGroup.children)}
      </main>
    )
    return itemGroupItem
  }


  return (
    <div className={styles.menus} ref={ulRef}>
      {treeItemGroup(menu)}
    </div>
  )
}


interface MenuItemProps {
  menuItem: TreeItem;
  onDisplayMenuItemList?: any
}

export function MenuItem(props: MenuItemProps) {
  const { menuItem, onDisplayMenuItemList } = props;
  // const nav = useNavigate();

  function onEnterMenuItem() {
    // nav(`m/${menu.name}/List?sid=${menu.sid}`, { replace: true })
  }
  return (
    <div className={styles.menuItem}>
      <div className={styles.mLeft}>
        <img src={menuItem?.icon} className={styles.avatar} alt="" />
      </div>
      <div className={styles.mRight} onClick={onEnterMenuItem}>
        <div className={styles.rLeft}>
          <h3>{menuItem?.title}</h3>
        </div>
        {menuItem.children &&
          <div className={styles.rRight} onClick={(e) => onDisplayMenuItemList(e)}>
            <img src={dropdown} alt="" className={styles.dropdown} />
          </div>
        }
      </div>
    </div>
  )
}

