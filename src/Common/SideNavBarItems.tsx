import { FormattedMessage } from 'react-intl';

export const loadingMenu = [
  {
    id: 'group-dashboard-loading',
    title: <FormattedMessage id="dashboard" />,
    type: 'group',
    icon: null,
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard/default',
        breadcrumbs: false
      },
      {
        id: 'banner',
        title: 'Banner',
        type: 'collapse',
        icon: null,
        children: [
          {
            id: 'addbanner',
            title: 'Add Banner',
            type: 'item',
            url: '/banner/addBanner',
            breadcrumbs: false
          },
          {
            id: 'listbanner',
            title: 'List Banner',
            type: 'item',
            url: '/banner/listBanner',
            breadcrumbs: false
          }
        ]
      },
      {
        id: 'city',
        title: 'City',
        type: 'collapse',
        breadcrumbs: false,
        children: [
          {
            id: 'addcity',
            title: 'Add City',
            type: 'item',
            url: '/city/addCity',
            breadcrumbs: false
          },
          {
            id: 'liscity',
            title: 'List City',
            type: 'item',
            url: '/city/listCity',
            breadcrumbs: false
          }
        ]
      },
      {
        id: 'cartype',
        title: 'Car Type',
        type: 'collapse',
        icon: null,
        breadcrumbs: false,
        children: [
          {
            id: 'addcartype',
            title: 'Add Car Type',
            type: 'item',
            url: '/cartype/addCarType',
            breadcrumbs: false
          },
          {
            id: 'listcar',
            title: 'List Car',
            type: 'item',
            url: '/cartype/listCarType',
            breadcrumbs: false
          }
        ]
      },
      {
        id:'cardbrand',
        title: 'Car Brand',
        type: 'collapse',
        icon: null,
        breadcrumbs: false,
        children: [
          {
            id:'addcarbrand',
            title: 'Add Car Brand',
            type: 'item',
            url:'/carbrand/addCarBrand',
            breadcrumbs: false
          },
          {
            id:'listcarbrand',
            title: 'List Car Brand',
            type: 'item',
            url:'/carbrand/listCarBrand',
            breadcrumbs: false
          }
        ]
      },
      {
        id: 'car',
        title: 'Car',
        type: 'collapse',
        icon: null,
        breadcrumbs: false,
        children: [
          {
            id: 'addcar',
            title: 'Add Car',
            type: 'item',
            url: '/car/addCar',
            breadcrumbs: false
          },
          {
            id: 'listcar',
            title: 'List Car',
            type: 'item',
            url: '/car/ListCar',
            breadcrumbs: false
          }
        ]
      },
      {
        id: 'gallery',
        title: 'Gallery',
        type: 'collapse',
        icon: null,
        breadcrumbs: false,
        children: [
          {
            id: 'addgallery',
            title: 'Add Gallery',
            type: 'item',
            url: '/gallery/addGallery',
            breadcrumbs: false
          },
          {
            id: 'listgallery',
            title: 'List Gallery',
            type: 'item',
            url: '/gallery/listGallery',
            breadcrumbs: false
          }
        ]
      },
      {
        id: 'faq',
        title: 'FAQ',
        type: 'collapse',
        icon: null,
        breadcrumbs: false,
        children: [
          {
            id: 'addfaq',
            title: 'Add FAQ',
            type: 'item',
            url: '/faq/addFaq',
            breadcrumbs: false
          },
          {
            id: 'listfaq',
            title: 'List FAQ',
            type: 'item',
            url: '/faq/listFaq',
            breadcrumbs: false
          }
        ]
      },
      {
        id: 'facility',
        title: 'Facility',
        type: 'collapse',
        icon: null,
        breadcrumbs: false,
        children: [
          {
            id: 'addfacility',
            title: 'Add Facility',
            type: 'item',
            url: '/facility/addFacility',
            breadcrumbs: false
          },
          {
            id: 'listfacility',
            title: 'List Facility',
            type: 'item',
            url: '/facility/listFacility',
            breadcrumbs: false
          }
        ]
      },
      {
        id: 'paymentlist',
        title: 'Payment LIst',
        type: 'item',
        url: '/dashboard/paymentList',
        breadcrumbs: false
      },
      {
        id: 'payoutlist',
        title: 'Payout LIst',
        type: 'item',
        url: '/dashboard/payoutList',
        breadcrumbs: false
      },
      {
        id: 'coupon',
        title: 'Coupon',
        type: 'collapse',
        icon: null,
        breadcrumbs: false,
        children: [
          {
            id: 'addcupon',
            title: 'Add Coupon',
            type: 'item',
            url: '/coupon/addCoupon',
            breadcrumbs: false
          },
          {
            id: 'listcoupon',
            title: 'List Coupon',
            type: 'item',
            url: '/coupon/listCoupon',
            breadcrumbs: false
          }
        ]
      },
      {
        id: 'page',
        title: 'Page',
        type: 'collapse',
        icon: null,
        breadcrumbs: false,
        children: [
          {
            id: 'addpage',
            title: 'Add Page',
            type: 'item',
            url: '/page/addPage',
            breadcrumbs: false
          },
          {
            id: 'listpage',
            title: 'List Page',
            type: 'item',
            url: '/page/listPage',
            breadcrumbs: false
          }
        ]
      },
      {
        id: 'bokking',
        title: 'Booking',
        type: 'collapse',
        icon: null,
        breadcrumbs: false,
        children: [
          {
            id: 'penddingbooking',
            title: 'Pendding Booking',
            type: 'item',
            url: '/booking/penddingBooking',
            breadcrumbs: false
          },
          {
            id: 'cancelledbooking',
            title: 'Cancelled Booking',
            type: 'item',
            url: '/booking/cancelledBooking',
            breadcrumbs: false
          },
          {
            id: 'pickupbooking',
            title: 'Pick Up Booking',
            type: 'item',
            url: '/booking/pickupBooking',
            breadcrumbs: false
          },
          {
            id: 'dropcarbooking',
            title: 'Drop Car Booking',
            type: 'item',
            url: '/booking/dropCarBooking',
            breadcrumbs: false
          },
          {
            id: 'completedbooking',
            title: 'Completed Booking',
            type: 'item',
            url: '/booking/completedBooking',
            breadcrumbs: false
          }
        ]
      },
      {
        id: 'userlist',
        title: 'Users List',
        type: 'item',
        url: '/dashboard/userList',
        breadcrumbs: false
      }
      
      // {
      //   id: 'search',
      //   title: 'Search',
      //   type: 'item',
      //   url: '/search',
      //   breadcrumbs: false
      // },
      // {
      //   id: 'sales',
      //   title: 'Sales',
      //   type: 'item',
      //   url: '/sales',
      //   breadcrumbs: false
      // },
      // {
      //   id: 'plans',
      //   title: 'Plans',
      //   type: 'item',
      //   url: '/plans',
      //   breadcrumbs: false
      // },
      // {
      //   id: 'addNewDetails',
      //   title: 'Add New Details',
      //   type: 'collapse',
      //   breadcrumbs: false,
      //   children: [
      //     {
      //       id: 'country',
      //       title: 'Country',
      //       type: 'item',
      //       url: '/addNewDetails/country',
      //       breadcrumbs: false
      //     },
      //     {
      //       id: 'state',
      //       title: 'State',
      //       type: 'item',
      //       url: '/addNewDetails/state',
      //       breadcrumbs: false
      //     },
      //     {
      //       id: 'district',
      //       title: 'District',
      //       type: 'item',
      //       url: '/addNewDetails/district',
      //       breadcrumbs: false
      //     },
      //     {
      //       id: 'city',
      //       title: 'City',
      //       type: 'item',
      //       url: '/addNewDetails/city',
      //       breadcrumbs: false
      //     },
      //     ,
      //     {
      //       id: 'religion',
      //       title: 'Religion',
      //       type: 'item',
      //       url: '/addNewDetails/religion',
      //       breadcrumbs: false
      //     },
      //     {
      //       id: 'caste',
      //       title: 'Caste',
      //       type: 'item',
      //       url: '/addNewDetails/caste',
      //       breadcrumbs: false
      //     },
      //     {
      //       id: 'subcaste',
      //       title: 'Subcaste',
      //       type: 'item',
      //       url: '/addNewDetails/subcaste',
      //       breadcrumbs: false
      //     },
      //     {
      //       id: 'occuption',
      //       title: 'Occuption',
      //       type: 'item',
      //       url: '/addNewDetails/occuption',
      //       breadcrumbs: false
      //     },
      //     {
      //       id: 'education',
      //       title: 'Education',
      //       type: 'item',
      //       url: '/addNewDetails/education',
      //       breadcrumbs: false
      //     },
      //     {
      //       id: 'languages',
      //       title: 'Languages',
      //       type: 'item',
      //       url: '/addNewDetails/languages',
      //       breadcrumbs: false
      //     },
      //     {
      //       id: 'source',
      //       title: 'Source',
      //       type: 'item',
      //       url: '/addNewDetails/source',
      //       breadcrumbs: false
      //     },
      //     {
      //       id: 'university',
      //       title: 'University',
      //       type: 'item',
      //       url: '/addNewDetails/university',
      //       breadcrumbs: false
      //     }
      //   ]
      // },
      // {
      //   id: 'siteSetup',
      //   title: 'Site Setup',
      //   type: 'collapse',
      //   breadcrumbs: false,
      //   children: [
      //     {
      //       id: 'updateBasicSiteSetting',
      //       title: 'Update basic site setting',
      //       type: 'item',
      //       url: '/siteSetup/updateBasicSiteSetting',
      //       breadcrumbs: false
      //     },
      //     {
      //       id: 'updateLogo',
      //       title: 'Update logo & favicon',
      //       type: 'item',
      //       url: '/siteSetup/updateLogo',
      //       breadcrumbs: false
      //     },
      //     {
      //       id: 'siteDefaultImage',
      //       title: 'Site default image',
      //       type: 'item',
      //       url: '/siteSetup/siteDefaultImage',
      //       breadcrumbs: false
      //     },
      //     {
      //       id: 'updateEmailSetting',
      //       title: 'Update email setting',
      //       type: 'item',
      //       url: '/siteSetup/updateEmailSetting',
      //       breadcrumbs: false
      //     },
      //     {
      //       id: 'updateMatriPrefix',
      //       title: 'Update Matri prefix',
      //       type: 'item',
      //       url: '/siteSetup/updateMatriPrefix',
      //       breadcrumbs: false
      //     },
      //     {
      //       id: 'socialMediaLink',
      //       title: 'Social media link',
      //       type: 'item',
      //       url: '/siteSetup/socialMediaLink',
      //       breadcrumbs: false
      //     },
      //     {
      //       id: 'googleAnalyticsCode',
      //       title: 'Google analytics code',
      //       type: 'item',
      //       url: '/siteSetup/googleAnalyticsCode',
      //       breadcrumbs: false
      //     },
      //     {
      //       id: 'appLink',
      //       title: 'App link (Android & iOS App)',
      //       type: 'item',
      //       url: '/siteSetup/appLink',
      //       breadcrumbs: false
      //     }
      //   ]
      // },
      // {
      //   id: 'careers',
      //   title: 'Careers',
      //   type: 'item',
      //   url: '/careers',
      //   breadcrumbs: false
      // },
      // {
      //   id: 'reports',
      //   title: 'Reports',
      //   type: 'item',
      //   url: '/reports',
      //   breadcrumbs: false
      // },
      // {
      //   id: 'others',
      //   title: 'Others',
      //   type: 'item',
      //   url: '/others',
      //   breadcrumbs: false
      // }
    ]
  }
];
