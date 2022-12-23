/****
 * 描述:配置-不同类型节点样式配置
 * 创建者:李克振
 * 日期:2021/05/13
****/
import colorConfig from './color-config'

import {
  nodeStateSelected,
} from './default-style-config'

export default {
  // 对私客户实体样式
  customer: {
    style: {
      fill: colorConfig.nodeCustomerColor,
      // stroke: '#49c2bb',
    },
    stateStyles: {
      selected: {
        fill: colorConfig.nodeCustomerColor,
        ...nodeStateSelected,
      },
    },
  },

  // 借款合同实体样式
  contract: {
    style: {
      fill: colorConfig.nodeContractColor,
      // stroke: '#49c2bb',
    },
    stateStyles: {
      selected: {
        fill: colorConfig.nodeContractColor,
        ...nodeStateSelected,
      },
    },
  },

  // 行外关联人（个人）实体样式
  outCustomer: {
    style: {
      fill: colorConfig.nodeOutCustomerColor,
      // stroke: '#49c2bb',
    },
    stateStyles: {
      selected: {
        fill: colorConfig.nodeOutCustomerColor,
        ...nodeStateSelected,
      },
    },
  },

  // 行外关联人（公司）实体样式
  outCompany: {
    style: {
      fill: colorConfig.nodeOutCompanyColor,
      // stroke: '#49c2bb',
    },
    stateStyles: {
      selected: {
        fill: colorConfig.nodeOutCompanyColor,
        ...nodeStateSelected,
      },
    },
  },

  // 员工实体样式
  staff: {
    style: {
      fill: colorConfig.nodeStaffColor,
      // stroke: '#49c2bb',
    },
    stateStyles: {
      selected: {
        fill: colorConfig.nodeStaffColor,
        ...nodeStateSelected,
      },
    },
  },

  // 对公客户实体样式
  company: {
    style: {
      fill: colorConfig.nodeCompanyColor,
      // stroke: '#49c2bb',
    },
    stateStyles: {
      selected: {
        fill: colorConfig.nodeCompanyColor,
        ...nodeStateSelected,
      },
    },
  },
}