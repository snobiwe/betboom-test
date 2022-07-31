const navigationMap = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Overview',
                },
              },
            ],
            options: {
              bottomTab: {
                text: 'Tab 1',
                // icon: require('../images/one.png'),
                testID: 'FIRST_TAB_BAR_BUTTON',
              },
            },
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Players',
                },
              },
            ],
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Create',
                },
              },
            ],
          },
        },
      ],
    },
  },
}

export default navigationMap
