import set from '@/assets/set.png';
import info from '@/assets/info.png';
import show from '@/assets/flower.png';
import pinkFlower from '@/assets/pinkFlower.png';
import Yh from '@/assets/Yh.png';

import sevenColouredFlowers from '@/assets/sevenColouredFlowers.png';

export interface TreeItem {
  title: string;
  key: string;
  level: string;
  display?: boolean;
  children?: TreeItem[];
  desc?: string;
  icon?: string;
}

export const node: TreeItem[] = [
  {
    title: '111111',
    key: '0',
    level: 'level1',
    display: true,
    icon: info
  },
  {
    title: '00000',
    key: '0',
    level: 'level1',
    display: true,
    icon: set,
    children: [
      {
        title: '0-111111',
        key: '0-0',
        level: 'level2',
        display: true,
        icon: show,
        children: [
          {
            title: '0-1-1111',
            key: '0-0-0',
            level: 'level3',
            icon: pinkFlower,
          },
          {
            title: '0-1-2222',
            key: '0-0-1',
            level: 'level3',
            display: true,
            icon: pinkFlower,
            children: [
              {
                title: '0-1-2-11111',
                key: '0-0-1-0',
                level: 'level4',
                display: true,
                icon: Yh,
                children: [
                  {
                    title: '0-1-2-1-111',
                    key: '0-0-1-0-0',
                    level: 'level5',
                    icon: sevenColouredFlowers,
                  }
                ]
              }
            ]
          },
          {
            title: '0-1-33333',
            key: '0-0-4',
            level: 'level3',
            icon: pinkFlower,
          },
        ]
      },
      {
        title: '0-222222',
        key: '0-2',
        level: 'level2',
        display: true,
        icon: show,
        children: [
          {
            title: '0-2-1111',
            key: '0-2-0',
            level: 'level3',
            icon: pinkFlower,
          },
          {
            title: '0-2-2222',
            key: '0-2-0',
            level: 'level3',
            icon: pinkFlower,
          },
          {
            title: '0-2-3333',
            key: '0-2-0',
            level: 'level3',
            icon: pinkFlower,
          }
        ]
      }
    ]
  }
]