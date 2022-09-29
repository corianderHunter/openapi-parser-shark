// tslint:disable

import { AxiosInstance } from 'axios'
import fetch from './service'

/**
 *
 * @summary ConnectionBO
 * @interface ConnectionBO
 */
export interface ConnectionBO {
  /**
   * 结束系统标识
   * @type { number }
   * @memberof ConnectionBO
   */
  ['endSystemId']?: number
  /**
   * 结束端点标识
   * @type { number }
   * @memberof ConnectionBO
   */
  ['endTerminal']?: number
  /**
   * 结束端点类型
   * @type { string }
   * @memberof ConnectionBO
   */
  ['endTerminalType']?: string
  /**
   * 能源类型
   * @type { string }
   * @memberof ConnectionBO
   */
  ['energyType']?: string
  /**
   * 起始系统标识
   * @type { number }
   * @memberof ConnectionBO
   */
  ['startSystemId']?: number
  /**
   * 起始端点标识
   * @type { number }
   * @memberof ConnectionBO
   */
  ['startTerminal']?: number
  /**
   * 起始端点类型
   * @type { string }
   * @memberof ConnectionBO
   */
  ['startTerminalType']?: string
}

/**
 *
 * @summary TopologyBO
 * @interface TopologyBO
 */
export interface TopologyBO {
  /**
   * 系统数据
   * @type { TopologyVO[] }
   * @memberof TopologyBO
   */
  ['childSystems']?: TopologyVO[]
  /**
   * 系统连接数据
   * @type { ConnectionBO[] }
   * @memberof TopologyBO
   */
  ['connections']?: ConnectionBO[]
}

/**
 *
 * @summary TopologyVO
 * @interface TopologyVO
 */
export interface TopologyVO {
  /**
   * datacode信息
   * @type { StandardModel68[] }
   * @memberof TopologyVO
   */
  ['datacodeList']?: StandardModel68[]
  /**
   * 系统描述
   * @type { string }
   * @memberof TopologyVO
   */
  ['description']?: string
  /**
   * 是否设备
   * @type { boolean }
   * @memberof TopologyVO
   */
  ['isDevice']?: boolean
  /**
   * 采集点数据集
   * @type { StandardModel109[] }
   * @memberof TopologyVO
   */
  ['pointList']?: StandardModel109[]
  /**
   * 系统编码
   * @type { string }
   * @memberof TopologyVO
   */
  ['systemCode']?: string
  /**
   * 系统标识
   * @type { number }
   * @memberof TopologyVO
   */
  ['systemId']?: number
  /**
   * 系统名称
   * @type { string }
   * @memberof TopologyVO
   */
  ['systemName']?: string
  /**
   * 系统类型
   * @type { string }
   * @memberof TopologyVO
   */
  ['systemType']?: string
  /**
   *
   * @type { TopologyBO }
   * @memberof TopologyVO
   */
  ['topology']?: TopologyBO
}

/**
 *
 * @summary StandardModel17
 * @interface StandardModel17
 */
export interface StandardModel17 {}

/**
 *
 * @summary StandardModel40
 * @interface StandardModel40
 */
export interface StandardModel40 {
  /**
   * 时间
   * @type { string }
   * @memberof StandardModel40
   */
  ['time']?: string
  /**
   * 时序值或者业务值
   * @type { string }
   * @memberof StandardModel40
   */
  ['value']?: string
}

/**
 *
 * @summary StandardModel56
 * @interface StandardModel56
 */
export interface StandardModel56 {
  /**
   * 当前获取系统的级别,(1--&gt;获取下一级,2--&gt;获取两级,0获取所有数据)
   * @type { number }
   * @memberof StandardModel56
   */
  ['level']: number
  /**
   * 是否进行包含或者排除,取值范围(1--&gt;包含||0--&gt;排除,该值为null时不进行条件筛选),该取值决定param参数执行包含设备连接与采集点还是排除
   * @type { number }
   * @memberof StandardModel56
   */
  ['operation']?: number
  /**
   * 拓扑连接中连接的设备类型,以及采集点(该参数为map类型,key--&gt;对应设备类型编码,value--&gt;对应采集点,当value取值为null时,不获取采集点,value值为[]时,获取全量采集点)
   * @type { any }
   * @memberof StandardModel56
   */
  ['param']?: any
  /**
   * 系统标示
   * @type { number }
   * @memberof StandardModel56
   */
  ['systemId']: number
}

/**
 *
 * @summary StandardModel57
 * @interface StandardModel57
 */
export interface StandardModel57 {
  /**
   * 返回消息內容
   * @type { string }
   * @memberof StandardModel57
   */
  ['msg']?: string
  /**
   *
   * @type { TopologyVO }
   * @memberof StandardModel57
   */
  ['result']?: TopologyVO
  /**
   * 0:成功,其他:失败,详细:1,访问的资源不存在 2,调用方法不被支持 3,接口请求JSON数据格式错误 4,检查输入参数:参数有问题 5,运行时错误 6,HTTP请求头需要包含认证信息 7,HTTP请求头的认证信息不对 8,参数已经存在 9,参数不存在 10,信息不存在 11,结果存在 12,结果不存在
   * @type { number }
   * @memberof StandardModel57
   */
  ['retCode']?: number
}

/**
 *
 * @summary StandardModel63
 * @interface StandardModel63
 */
export interface StandardModel63 {
  /**
   * 查询结束时间
   * @type { string }
   * @memberof StandardModel63
   */
  ['endTime']?: string
  /**
   * 能源类型,0:电,1:蒸汽,2:全部
   * @type { string }
   * @memberof StandardModel63
   */
  ['energyType']?: string
  /**
   * 查询起始时间
   * @type { string }
   * @memberof StandardModel63
   */
  ['startTime']?: string
  /**
   * 系统表示
   * @type { number }
   * @memberof StandardModel63
   */
  ['systemId']?: number
  /**
   * 时间类型,0:日,1:月,2:小时,3:分钟
   * @type { string }
   * @memberof StandardModel63
   */
  ['timeType']?: string
}

/**
 *
 * @summary StandardModel65
 * @interface StandardModel65
 */
export interface StandardModel65 {
  /**
   * 返回消息內容
   * @type { string }
   * @memberof StandardModel65
   */
  ['msg']?: string
  /**
   * 站耗能情况
   * @type { StandardModel67[] }
   * @memberof StandardModel65
   */
  ['result']?: StandardModel67[]
  /**
   * 0:成功,其他:失败,详细:1,访问的资源不存在 2,调用方法不被支持 3,接口请求JSON数据格式错误 4,检查输入参数:参数有问题 5,运行时错误 6,HTTP请求头需要包含认证信息 7,HTTP请求头的认证信息不对 8,参数已经存在 9,参数不存在 10,信息不存在 11,结果存在 12,结果不存在
   * @type { number }
   * @memberof StandardModel65
   */
  ['retCode']?: number
}

/**
 *
 * @summary StandardModel66
 * @interface StandardModel66
 */
export interface StandardModel66 {
  /**
   * 点耗能单位
   * @type { string }
   * @memberof StandardModel66
   */
  ['eleConsumeUnit']?: string
  /**
   * 电耗能总量
   * @type { number }
   * @memberof StandardModel66
   */
  ['eleConsumeVal']?: number
  /**
   * 蒸汽耗能单位
   * @type { string }
   * @memberof StandardModel66
   */
  ['steamConsumeUnit']?: string
  /**
   * 蒸汽耗能总量
   * @type { number }
   * @memberof StandardModel66
   */
  ['steamConsumeVal']?: number
  /**
   * 时间
   * @type { string }
   * @memberof StandardModel66
   */
  ['time']?: string
}

/**
 *
 * @summary StandardModel67
 * @interface StandardModel67
 */
export interface StandardModel67 {
  /**
   * 系统表示
   * @type { number }
   * @memberof StandardModel67
   */
  ['systemId']?: number
  /**
   * 时序耗能列表
   * @type { StandardModel66[] }
   * @memberof StandardModel67
   */
  ['use']?: StandardModel66[]
}

/**
 *
 * @summary StandardModel68
 * @interface StandardModel68
 */
export interface StandardModel68 {
  /**
   * datacode
   * @type { string }
   * @memberof StandardModel68
   */
  ['datacode']?: string
  /**
   * datacode描述
   * @type { string }
   * @memberof StandardModel68
   */
  ['description']?: string
}

/**
 *
 * @summary StandardModel91
 * @interface StandardModel91
 */
export interface StandardModel91 {
  /**
   * 查询结束时间
   * @type { string }
   * @memberof StandardModel91
   */
  ['endTime']: string
  /**
   *
   * @type { StandardModel93 }
   * @memberof StandardModel91
   */
  ['param']: StandardModel93
  /**
   * 查询起始时间
   * @type { string }
   * @memberof StandardModel91
   */
  ['startTime']: string
  /**
   * 系统id
   * @type { number }
   * @memberof StandardModel91
   */
  ['systemId']: number
}

/**
 *
 * @summary StandardModel92
 * @interface StandardModel92
 */
export interface StandardModel92 {
  /**
   * 业务数据查询值
   * @type { StandardModel17[] }
   * @memberof StandardModel92
   */
  ['data']?: StandardModel17[]
  /**
   * datacode
   * @type { string }
   * @memberof StandardModel92
   */
  ['datacode']?: string
  /**
   * datacode描述
   * @type { string }
   * @memberof StandardModel92
   */
  ['description']?: string
}

/**
 *
 * @summary StandardModel93
 * @interface StandardModel93
 */
export interface StandardModel93 {
  /**
   * 查询业务数据参数
   * @type { StandardModel68[] }
   * @memberof StandardModel93
   */
  ['businessParam']?: StandardModel68[]
  /**
   *
   * @type { StandardModel103 }
   * @memberof StandardModel93
   */
  ['seriesParam']?: StandardModel103
}

/**
 *
 * @summary StandardModel94
 * @interface StandardModel94
 */
export interface StandardModel94 {
  /**
   * 业务数据查询值
   * @type { StandardModel40[] }
   * @memberof StandardModel94
   */
  ['data']?: StandardModel40[]
  /**
   * 描述
   * @type { string }
   * @memberof StandardModel94
   */
  ['description']?: string
  /**
   * 业务域
   * @type { string }
   * @memberof StandardModel94
   */
  ['domain']?: string
  /**
   * 设备编码
   * @type { string }
   * @memberof StandardModel94
   */
  ['equipID']?: string
  /**
   * 设备分类
   * @type { string }
   * @memberof StandardModel94
   */
  ['equipMK']?: string
  /**
   * 采集点
   * @type { string }
   * @memberof StandardModel94
   */
  ['metric']?: string
  /**
   * 采集点名称
   * @type { string }
   * @memberof StandardModel94
   */
  ['pointName']?: string
  /**
   * 站id
   * @type { string }
   * @memberof StandardModel94
   */
  ['stationAlias']?: string
  /**
   * 单位
   * @type { string }
   * @memberof StandardModel94
   */
  ['unit']?: string
}

/**
 *
 * @summary StandardModel95
 * @interface StandardModel95
 */
export interface StandardModel95 {
  /**
   * 获取时序和业务数据接口业务数据结果
   * @type { StandardModel92[] }
   * @memberof StandardModel95
   */
  ['businessResp']?: StandardModel92[]
  /**
   * 返回消息內容
   * @type { string }
   * @memberof StandardModel95
   */
  ['msg']?: string
  /**
   * 0:成功,其他:失败,详细:1,访问的资源不存在 2,调用方法不被支持 3,接口请求JSON数据格式错误 4,检查输入参数:参数有问题 5,运行时错误 6,HTTP请求头需要包含认证信息 7,HTTP请求头的认证信息不对 8,参数已经存在 9,参数不存在 10,信息不存在 11,结果存在 12,结果不存在
   * @type { number }
   * @memberof StandardModel95
   */
  ['retCode']?: number
  /**
   * 获取时序和业务数据接口时序数据结果
   * @type { StandardModel94[] }
   * @memberof StandardModel95
   */
  ['seriesResp']?: StandardModel94[]
}

/**
 *
 * @summary StandardModel103
 * @interface StandardModel103
 */
export interface StandardModel103 {
  /**
   * 聚合方法,常见:avg(平均数据点),count(集合中原始数据点的数目 ),dev(计算标准偏差)first(去第一个值),last(去最后一个值),min(最小值),max(最大值),none(不做计算),sum(求和),zimsum(求和,补零)等
   * @type { string }
   * @memberof StandardModel103
   */
  ['aggregator']?: string
  /**
   * 采样(采样时间+聚合方法+填充策略),采样时间单位:s秒,m分,h小时,d天;填充策略:null(返回null),none,nan(出现nan,返回null),zero(补零);例如:1m-avg-null
   * @type { string }
   * @memberof StandardModel103
   */
  ['downsample']?: string
  /**
   * 查询时序数据参数
   * @type { StandardModel109[] }
   * @memberof StandardModel103
   */
  ['listqueries']?: StandardModel109[]
}

/**
 *
 * @summary StandardModel109
 * @interface StandardModel109
 */
export interface StandardModel109 {
  /**
   * 描述
   * @type { string }
   * @memberof StandardModel109
   */
  ['description']?: string
  /**
   * 业务域
   * @type { string }
   * @memberof StandardModel109
   */
  ['domain']?: string
  /**
   * 设备编码
   * @type { string }
   * @memberof StandardModel109
   */
  ['equipID']?: string
  /**
   * 设备分类
   * @type { string }
   * @memberof StandardModel109
   */
  ['equipMK']?: string
  /**
   * 采集点
   * @type { string }
   * @memberof StandardModel109
   */
  ['metric']?: string
  /**
   * 采集点名称
   * @type { string }
   * @memberof StandardModel109
   */
  ['pointName']?: string
  /**
   * 站id
   * @type { string }
   * @memberof StandardModel109
   */
  ['stationAlias']?: string
  /**
   * 单位
   * @type { string }
   * @memberof StandardModel109
   */
  ['unit']?: string
}

/**
 *
 * @summary GetProvideConsumeRequest
 * @interface GetProvideConsumeRequest
 * @description 查询园区产耗能信息条件
 * @required true
 */
/**
 *
 * @summary RouteWhiteListReq
 * @interface RouteWhiteListReq
 * @description req
 * @required true
 */
/**
 * @tags SOS泛能态大数据API
 * @summary 获取时序和业务数据
 * @param {StandardModel91} [body] req
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataGetSystemdata = async (
  body?: StandardModel91,
  local_options?: AxiosInstance
): Promise<StandardModel95> => {
  let local_url = '/internal/bigdata/get_systemdata'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel95>
}

/**
 * @tags SOS泛能态大数据API
 * @summary 根据系统标识获取拓扑信息和业务标示datacode
 * @param {StandardModel56} [body] req
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataGetSysteminfo = async (
  body?: StandardModel56,
  local_options?: AxiosInstance
): Promise<StandardModel57> => {
  let local_url = '/internal/bigdata/get_systeminfo'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel57>
}

/**
 * @tags SOS泛能态大数据API
 * @summary 查看用户侧的负荷功率(蒸汽、电)
 * @param {StandardModel63} [body] req
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataSystemConsumeEnergy = async (
  body?: StandardModel63,
  local_options?: AxiosInstance
): Promise<StandardModel65> => {
  let local_url = '/internal/bigdata/system/consume_energy'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel65>
}
