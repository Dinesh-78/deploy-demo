// third-party
import { FormattedMessage } from 'react-intl';

// project-import
import { useGetMenu } from 'api/menu';

// assets
import { Refresh, Home3, HomeTrendUp, Box1 } from 'iconsax-react';

// type
import { NavItemType } from 'types/menu';

const icons = {
  navigation: Home3,
  dashboard: HomeTrendUp,
  components: Box1,
  loading: Refresh
};

const loadingMenu: NavItemType = {
  id: 'group-dashboard-loading',
  title: <FormattedMessage id="dashboard" />,
  type: 'group',
  icon: icons.loading,
  children: [
    {
      id: 'dashboard1',
      title: <FormattedMessage id="dashboard" />,
      type: 'collapse',
      icon: icons.loading,
      children: [
        {
          id: 'listUsers',
          title: 'loading',
          type: 'item',
          url: '/dashboard/listUsers',
          breadcrumbs: false
        },
        {
          id: 'blockedStaff',
          title: 'loading',
          type: 'item',
          url: '/dashboard/blockedStaff',
          breadcrumbs: false
        },
        {
          id: 'listUsers',
          title: 'loading',
          type: 'item',
          url: '/dashboard/suspendedStaff',
          breadcrumbs: false
        },
        {
          id: 'createUser',
          title: 'loading',
          type: 'item',
          url: '/dashboard/createUser',
          breadcrumbs: false
        }
      ]
    }
  ]
};

// ==============================|| MENU ITEMS - API ||============================== //

export function MenuFromAPI() {
  const { menu, menuLoading } = useGetMenu();

  if (menuLoading) return loadingMenu;

  const subChildrenList = (children: NavItemType[]) => {
    return children?.map((subList: NavItemType) => {
      return fillItem(subList);
    });
  };

  const itemList = (subList: NavItemType) => {
    let list = fillItem(subList);

    // if collapsible item, we need to feel its children as well
    if (subList.type === 'collapse') {
      list.children = subChildrenList(subList.children!);
    }
    return list;
  };
  console.log("menu: ", menu)
  const childrenList: NavItemType[] | undefined = menu?.children?.map((subList: NavItemType) => {
    return itemList(subList);
  });

  let menuList = fillItem(menu, childrenList);
  return menuList;
}

function fillItem(item: NavItemType, children?: NavItemType[] | undefined) {
  return {
    ...item,
    title: <FormattedMessage id={`${item?.title}`} />,
    // @ts-ignore
    icon: icons[item?.icon],
    ...(children && { children })
  };
}
