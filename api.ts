// tslint:disable

import { AxiosInstance } from 'axios'
import fetch from './service'

/**
 *
 * @summary CalculateInstenceParam
 * @interface CalculateInstenceParam
 */
export interface CalculateInstenceParam {}

/**
 *
 * @summary CalculateTypeParam
 * @interface CalculateTypeParam
 */
export interface CalculateTypeParam {
  /**
   * 计算代码编号,比如FfuelInt耗气量，FsInt产汽量，Econsum耗电量等
   * @type { string }
   * @memberof CalculateTypeParam
   */
  ['code']?: string
  /**
   * 对象类型，0:系统，1:设备
   * @type { string }
   * @memberof CalculateTypeParam
   */
  ['objType']?: string
  /**
   * 当obj_type&#x3D;0生效,所属系统类型：COMP,UES,EMS,PVS等;当obj_type&#x3D;1生效,所属设备类型：ECR,GWB,ES等
   * @type { string }
   * @memberof CalculateTypeParam
   */
  ['typeName']?: string
}

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
 * @summary ContainerInfo
 * @interface ContainerInfo
 */
export interface ContainerInfo {
  /**
   * 能源类别
   * @type { string[] }
   * @memberof ContainerInfo
   */
  ['enegyType']?: string[]
  /**
   * 企业id
   * @type { string }
   * @memberof ContainerInfo
   */
  ['enterprise']?: string
  /**
   * 企业名称
   * @type { string }
   * @memberof ContainerInfo
   */
  ['name']?: string
}

/**
 *
 * @summary ContainerInfoResult
 * @interface ContainerInfoResult
 */
export interface ContainerInfoResult {
  /**
   * 电当前小时值
   * @type { string }
   * @memberof ContainerInfoResult
   */
  ['eleHourVal']?: string
  /**
   *
   * @type { StandardModel41 }
   * @memberof ContainerInfoResult
   */
  ['eleHours']?: StandardModel41
  /**
   * 电价单位
   * @type { string }
   * @memberof ContainerInfoResult
   */
  ['eleUnit']?: string
  /**
   * 产电量
   * @type { string }
   * @memberof ContainerInfoResult
   */
  ['eleVal']?: string
  /**
   * 能源类别
   * @type { string[] }
   * @memberof ContainerInfoResult
   */
  ['enegyType']?: string[]
  /**
   * 企业id
   * @type { string }
   * @memberof ContainerInfoResult
   */
  ['enterprise']?: string
  /**
   * 企业名称
   * @type { string }
   * @memberof ContainerInfoResult
   */
  ['name']?: string
  /**
   * 蒸汽当前小时值
   * @type { string }
   * @memberof ContainerInfoResult
   */
  ['steamHourVal']?: string
  /**
   *
   * @type { StandardModel41 }
   * @memberof ContainerInfoResult
   */
  ['steamHours']?: StandardModel41
  /**
   * 蒸汽单位
   * @type { string }
   * @memberof ContainerInfoResult
   */
  ['steamUnit']?: string
  /**
   * 产气量
   * @type { string }
   * @memberof ContainerInfoResult
   */
  ['steamVal']?: string
}

/**
 *
 * @summary Data
 * @interface Data
 */
export interface Data {
  /**
   * 量测点信息（***_***_***）
   * @type { string }
   * @memberof Data
   */
  ['metric']?: string
  /**
   * 时间戳(13位)
   * @type { number }
   * @memberof Data
   */
  ['time']?: number
  /**
   * 量测点值
   * @type { number }
   * @memberof Data
   */
  ['value']?: number
}

/**
 *
 * @summary DataCheckBaseInfo
 * @interface DataCheckBaseInfo
 */
export interface DataCheckBaseInfo {
  /**
   * 数据检测规则创建时间
   * @type { string }
   * @memberof DataCheckBaseInfo
   */
  ['createTime']: string
  /**
   * 数据检测规则创建者
   * @type { string }
   * @memberof DataCheckBaseInfo
   */
  ['creater']: string
  /**
   * 数据检测描述信息
   * @type { string }
   * @memberof DataCheckBaseInfo
   */
  ['desc']: string
  /**
   * 设备类型
   * @type { string }
   * @memberof DataCheckBaseInfo
   */
  ['deviceType']: string
  /**
   * 数据检测名称
   * @type { string }
   * @memberof DataCheckBaseInfo
   */
  ['name']: string
}

/**
 *
 * @summary DataCheckDetail
 * @interface DataCheckDetail
 */
export interface DataCheckDetail {
  /**
   *
   * @type { DataCheckBaseInfo }
   * @memberof DataCheckDetail
   */
  ['baseInfo']: DataCheckBaseInfo
  /**
   * 检查规则
   * @type { DataCheckRule[] }
   * @memberof DataCheckDetail
   */
  ['rules']?: DataCheckRule[]
}

/**
 *
 * @summary DataCheckDeviceInfo
 * @interface DataCheckDeviceInfo
 */
export interface DataCheckDeviceInfo {
  /**
   * 设备ID
   * @type { string }
   * @memberof DataCheckDeviceInfo
   */
  ['deviceID']: string
  /**
   * 业务域
   * @type { string }
   * @memberof DataCheckDeviceInfo
   */
  ['domain']: string
  /**
   * 设备编号
   * @type { string }
   * @memberof DataCheckDeviceInfo
   */
  ['equipID']: string
  /**
   * 设备类型
   * @type { string }
   * @memberof DataCheckDeviceInfo
   */
  ['equipMk']: string
  /**
   * 与该设备相关量的电表ID
   * @type { string }
   * @memberof DataCheckDeviceInfo
   */
  ['meteBusinessId']: string
  /**
   * 站别名(有可能与站ID不同)
   * @type { string }
   * @memberof DataCheckDeviceInfo
   */
  ['stationAlias']: string
  /**
   * 站ID
   * @type { string }
   * @memberof DataCheckDeviceInfo
   */
  ['stationId']: string
}

/**
 *
 * @summary DataCheckExecuteParam
 * @interface DataCheckExecuteParam
 */
export interface DataCheckExecuteParam {
  /**
   * 设备类型
   * @type { string }
   * @memberof DataCheckExecuteParam
   */
  ['deviceType']: string
  /**
   * 数据检测设备信息
   * @type { DataCheckDeviceInfo[] }
   * @memberof DataCheckExecuteParam
   */
  ['devices']?: DataCheckDeviceInfo[]
  /**
   * 检查结束时间（暂时填null） 格式yyyy-MM-dd HH:mm:ss
   * @type { string }
   * @memberof DataCheckExecuteParam
   */
  ['endTime']: string
  /**
   * 检查项Code,如果为空则检查该规则下的所有检查项
   * @type { string[] }
   * @memberof DataCheckExecuteParam
   */
  ['ruleCodes']?: string[]
  /**
   * 检查开始时间（上次检测时间） 格式yyyy-MM-dd HH:mm:ss
   * @type { string }
   * @memberof DataCheckExecuteParam
   */
  ['startTime']?: string
}

/**
 *
 * @summary DataCheckQueryParam
 * @interface DataCheckQueryParam
 */
export interface DataCheckQueryParam {
  /**
   *
   * @type { string[] }
   * @memberof DataCheckQueryParam
   */
  ['deviceTypes']?: string[]
}

/**
 *
 * @summary DataCheckResult
 * @interface DataCheckResult
 */
export interface DataCheckResult {
  /**
   *
   * @type { DataCheckResultBaseInfo }
   * @memberof DataCheckResult
   */
  ['baseInfo']?: DataCheckResultBaseInfo
  /**
   * 数据检测项结果
   * @type { DataCheckRuleResult[] }
   * @memberof DataCheckResult
   */
  ['ruleResults']?: DataCheckRuleResult[]
}

/**
 *
 * @summary DataCheckResultBaseInfo
 * @interface DataCheckResultBaseInfo
 */
export interface DataCheckResultBaseInfo {
  /**
   * 设备类型
   * @type { string }
   * @memberof DataCheckResultBaseInfo
   */
  ['deviceType']: string
  /**
   * 执行时间
   * @type { string }
   * @memberof DataCheckResultBaseInfo
   */
  ['executeTime']?: string
  /**
   * 数据检测规则名称
   * @type { string }
   * @memberof DataCheckResultBaseInfo
   */
  ['name']?: string
}

/**
 *
 * @summary DataCheckRule
 * @interface DataCheckRule
 */
export interface DataCheckRule {
  /**
   * 检查项规则Code
   * @type { string }
   * @memberof DataCheckRule
   */
  ['code']: string
  /**
   * 检查项规则名称
   * @type { string }
   * @memberof DataCheckRule
   */
  ['name']: string
  /**
   * 检查项子类型
   * @type { string }
   * @memberof DataCheckRule
   */
  ['subType']: string
  /**
   * 检查项规则类型
   * @type { string }
   * @memberof DataCheckRule
   */
  ['type']: string
}

/**
 *
 * @summary DataCheckRuleResult
 * @interface DataCheckRuleResult
 */
export interface DataCheckRuleResult {
  /**
   *
   * @type { DataCheckDeviceInfo }
   * @memberof DataCheckRuleResult
   */
  ['checkDevice']: DataCheckDeviceInfo
  /**
   * 检查项结果
   * @type { DataCheckRuleResultDetail[] }
   * @memberof DataCheckRuleResult
   */
  ['results']: DataCheckRuleResultDetail[]
}

/**
 *
 * @summary DataCheckRuleResultDetail
 * @interface DataCheckRuleResultDetail
 */
export interface DataCheckRuleResultDetail {
  /**
   * 检测结论
   * @type { string }
   * @memberof DataCheckRuleResultDetail
   */
  ['checkConclusion']: string
  /**
   * 检查项规则Code
   * @type { string }
   * @memberof DataCheckRuleResultDetail
   */
  ['code']: string
  /**
   * 检查项规则名称
   * @type { string }
   * @memberof DataCheckRuleResultDetail
   */
  ['name']: string
  /**
   * 优化建议
   * @type { string }
   * @memberof DataCheckRuleResultDetail
   */
  ['optSuggestion']: string
  /**
   * 检查项返回值
   * @type { string }
   * @memberof DataCheckRuleResultDetail
   */
  ['result']: string
  /**
   * 检查项子类型
   * @type { string }
   * @memberof DataCheckRuleResultDetail
   */
  ['subType']: string
  /**
   * 检查项规则类型
   * @type { string }
   * @memberof DataCheckRuleResultDetail
   */
  ['type']: string
  /**
   * 检查项价值 如果没有价值则为null
   * @type { string }
   * @memberof DataCheckRuleResultDetail
   */
  ['value']: string
}

/**
 *
 * @summary DataResult
 * @interface DataResult
 */
export interface DataResult {
  /**
   * 返回数据
   * @type { any }
   * @memberof DataResult
   */
  ['data']?: any
  /**
   * 返回编码
   * @type { number }
   * @memberof DataResult
   */
  ['errno']?: number
  /**
   * 返回信息
   * @type { string }
   * @memberof DataResult
   */
  ['error']?: string
}

/**
 *
 * @summary DataResultListTopologyResultVO
 * @interface DataResultListTopologyResultVO
 */
export interface DataResultListTopologyResultVO {
  /**
   * 返回数据
   * @type { TopologyResultVO[] }
   * @memberof DataResultListTopologyResultVO
   */
  ['data']?: TopologyResultVO[]
  /**
   * 返回编码
   * @type { number }
   * @memberof DataResultListTopologyResultVO
   */
  ['errno']?: number
  /**
   * 返回信息
   * @type { string }
   * @memberof DataResultListTopologyResultVO
   */
  ['error']?: string
}

/**
 *
 * @summary StandardModel4
 * @interface StandardModel4
 */
export interface StandardModel4 {
  /**
   *
   * @type { StandardModel43 }
   * @memberof StandardModel4
   */
  ['data']?: StandardModel43
  /**
   * 返回编码
   * @type { number }
   * @memberof StandardModel4
   */
  ['errno']?: number
  /**
   * 返回信息
   * @type { string }
   * @memberof StandardModel4
   */
  ['error']?: string
}

/**
 *
 * @summary DeviceRealTimeResult
 * @interface DeviceRealTimeResult
 */
export interface DeviceRealTimeResult {
  /**
   * 业务域
   * @type { string }
   * @memberof DeviceRealTimeResult
   */
  ['domain']?: string
  /**
   * 设备id
   * @type { string }
   * @memberof DeviceRealTimeResult
   */
  ['equipID']?: string
  /**
   * 设备类型
   * @type { string }
   * @memberof DeviceRealTimeResult
   */
  ['equipMK']?: string
  /**
   * 最新时间
   * @type { string }
   * @memberof DeviceRealTimeResult
   */
  ['lastestTime']?: string
  /**
   * 测点时间
   * @type { any }
   * @memberof DeviceRealTimeResult
   */
  ['metric']?: any
  /**
   * 站ID
   * @type { string }
   * @memberof DeviceRealTimeResult
   */
  ['systemCode']?: string
}

/**
 *
 * @summary GetProvideConsumeRequest
 * @interface GetProvideConsumeRequest
 */
export interface GetProvideConsumeRequest {
  /**
   * 园区id
   * @type { string }
   * @memberof GetProvideConsumeRequest
   */
  ['parkId']?: string
  /**
   * 园区名称
   * @type { string }
   * @memberof GetProvideConsumeRequest
   */
  ['parkName']?: string
  /**
   * 供能站信息
   * @type { StandardModel21[] }
   * @memberof GetProvideConsumeRequest
   */
  ['suply']?: StandardModel21[]
  /**
   * 时间 yyyy-mm-dd
   * @type { string }
   * @memberof GetProvideConsumeRequest
   */
  ['time']?: string
  /**
   * 企业信息
   * @type { ContainerInfo[] }
   * @memberof GetProvideConsumeRequest
   */
  ['uses']?: ContainerInfo[]
}

/**
 *
 * @summary StandardModel5
 * @interface StandardModel5
 */
export interface StandardModel5 {
  /**
   * 业务域,包括:UES,ENNCI,PVS,ETS,TS,EMS,MS
   * @type { string }
   * @memberof StandardModel5
   */
  ['dataSource']: string
  /**
   * 查询结束时间,查询结果包含该时间点
   * @type { string }
   * @memberof StandardModel5
   */
  ['endTime']: string
  /**
   * 设备ID
   * @type { string }
   * @memberof StandardModel5
   */
  ['equipID']: string
  /**
   * 设备分类
   * @type { string }
   * @memberof StandardModel5
   */
  ['equipMK']: string
  /**
   * 采集点列表,若不传则返回所有采集点
   * @type { string[] }
   * @memberof StandardModel5
   */
  ['metrics']?: string[]
  /**
   * 园区ID
   * @type { string }
   * @memberof StandardModel5
   */
  ['staId']: string
  /**
   * 查询起始时间,查询结果包含该时间点
   * @type { string }
   * @memberof StandardModel5
   */
  ['startTime']: string
  /**
   * userKey
   * @type { string }
   * @memberof StandardModel5
   */
  ['userKey']: string
}

/**
 *
 * @summary MetricLatestInfoResult
 * @interface MetricLatestInfoResult
 */
export interface MetricLatestInfoResult {
  /**
   * 业务域
   * @type { string }
   * @memberof MetricLatestInfoResult
   */
  ['domain']?: string
  /**
   * 设备id
   * @type { string }
   * @memberof MetricLatestInfoResult
   */
  ['equipID']?: string
  /**
   * 设备类型
   * @type { string }
   * @memberof MetricLatestInfoResult
   */
  ['equipMK']?: string
  /**
   * 测点编码
   * @type { string }
   * @memberof MetricLatestInfoResult
   */
  ['metric']?: string
  /**
   * 站ID
   * @type { string }
   * @memberof MetricLatestInfoResult
   */
  ['systemCode']?: string
  /**
   *
   * @type { any }
   * @memberof MetricLatestInfoResult
   */
  ['value']?: any
}

/**
 *
 * @summary Response
 * @interface Response
 */
export interface Response {
  /**
   *
   * @type { any }
   * @memberof Response
   */
  ['code']?: any
  /**
   *
   * @type { any }
   * @memberof Response
   */
  ['data']?: any
  /**
   *
   * @type { string }
   * @memberof Response
   */
  ['msg']?: string
}

/**
 *
 * @summary RouteWhiteListReq
 * @interface RouteWhiteListReq
 */
export interface RouteWhiteListReq {
  /**
   * 系统编码集合
   * @type { string[] }
   * @memberof RouteWhiteListReq
   */
  ['list']: string[]
  /**
   * secret
   * @type { string }
   * @memberof RouteWhiteListReq
   */
  ['secret']: string
}

/**
 *
 * @summary Sourcedata
 * @interface Sourcedata
 */
export interface Sourcedata {
  /**
   * 数据点个数
   * @type { number }
   * @memberof Sourcedata
   */
  ['allPoints']?: number
  /**
   * 数据点
   * @type { Data[] }
   * @memberof Sourcedata
   */
  ['data']?: Data[]
  /**
   * 业务域
   * @type { string }
   * @memberof Sourcedata
   */
  ['domain']?: string
  /**
   * 站ID
   * @type { string }
   * @memberof Sourcedata
   */
  ['staId']?: string
  /**
   * 版本号固定值为1
   * @type { number }
   * @memberof Sourcedata
   */
  ['version']?: number
}

/**
 *
 * @summary SpecificCalculateResultReq
 * @interface SpecificCalculateResultReq
 */
export interface SpecificCalculateResultReq {
  /**
   * 聚合方法(sum,avg,max,min),查询起始结束时间内聚合方法的结果
   * @type { string }
   * @memberof SpecificCalculateResultReq
   */
  ['aggregator']?: string
  /**
   * 指标key
   * @type { CalculateInstenceParam[] }
   * @memberof SpecificCalculateResultReq
   */
  ['calcInstenceParams']?: CalculateInstenceParam[]
  /**
   * 结果类型 尖 0 峰 1 平 2 谷 3
   * @type { string }
   * @memberof SpecificCalculateResultReq
   */
  ['dataType']: string
  /**
   * 查询结束时间,yyyy-MM-dd HH:mm:ss
   * @type { string }
   * @memberof SpecificCalculateResultReq
   */
  ['endTime']: string
  /**
   * 查询起始时间,yyyy-MM-dd HH:mm:ss
   * @type { string }
   * @memberof SpecificCalculateResultReq
   */
  ['startTime']: string
  /**
   * 指标计算时间类型,day天级,month月级,year年级
   * @type { string }
   * @memberof SpecificCalculateResultReq
   */
  ['timeType']: string
  /**
   * userKey
   * @type { string }
   * @memberof SpecificCalculateResultReq
   */
  ['userKey']: string
}

/**
 *
 * @summary SwitchRouteReq
 * @interface SwitchRouteReq
 */
export interface SwitchRouteReq {
  /**
   * secret
   * @type { string }
   * @memberof SwitchRouteReq
   */
  ['secret']: string
  /**
   * userKey
   * @type { string }
   * @memberof SwitchRouteReq
   */
  ['userKey']: string
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
 * @summary TopologyBranchVO
 * @interface TopologyBranchVO
 */
export interface TopologyBranchVO {
  /**
   * 系统别名
   * @type { string }
   * @memberof TopologyBranchVO
   */
  ['aliasCode']?: string
  /**
   * 系统描述
   * @type { string }
   * @memberof TopologyBranchVO
   */
  ['description']?: string
  /**
   * 结束计算母线号
   * @type { string }
   * @memberof TopologyBranchVO
   */
  ['endBSNum']?: string
  /**
   * 结束systemId
   * @type { number }
   * @memberof TopologyBranchVO
   */
  ['endSystemId']?: number
  /**
   * 结束端点标识
   * @type { number }
   * @memberof TopologyBranchVO
   */
  ['endTerminal']?: number
  /**
   * 是否设备
   * @type { boolean }
   * @memberof TopologyBranchVO
   */
  ['isDevice']?: boolean
  /**
   * 起始计算母线号
   * @type { string }
   * @memberof TopologyBranchVO
   */
  ['startBSNum']?: string
  /**
   * 开始systemId
   * @type { number }
   * @memberof TopologyBranchVO
   */
  ['startSystemId']?: number
  /**
   * 起始端点标识
   * @type { number }
   * @memberof TopologyBranchVO
   */
  ['startTerminal']?: number
  /**
   * 系统编码
   * @type { string }
   * @memberof TopologyBranchVO
   */
  ['systemCode']?: string
  /**
   * 系统标识
   * @type { number }
   * @memberof TopologyBranchVO
   */
  ['systemId']?: number
  /**
   * 系统名称
   * @type { string }
   * @memberof TopologyBranchVO
   */
  ['systemName']?: string
  /**
   * 系统类型
   * @type { string }
   * @memberof TopologyBranchVO
   */
  ['systemType']?: string
}

/**
 *
 * @summary TopologyLineResultVO
 * @interface TopologyLineResultVO
 */
export interface TopologyLineResultVO {
  /**
   * 计算母线号
   * @type { string }
   * @memberof TopologyLineResultVO
   */
  ['bsNum']?: string
  /**
   * 计算母线设备集合
   * @type { TopologyBranchVO[] }
   * @memberof TopologyLineResultVO
   */
  ['lineData']?: TopologyBranchVO[]
}

/**
 *
 * @summary TopologyResultVO
 * @interface TopologyResultVO
 */
export interface TopologyResultVO {
  /**
   * 电气岛下支路集合
   * @type { TopologyBranchVO[] }
   * @memberof TopologyResultVO
   */
  ['branchList']?: TopologyBranchVO[]
  /**
   * 电气岛号
   * @type { string }
   * @memberof TopologyResultVO
   */
  ['islandNum']?: string
  /**
   * 电气岛下计算母线集合
   * @type { TopologyLineResultVO[] }
   * @memberof TopologyResultVO
   */
  ['lineList']?: TopologyLineResultVO[]
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
 * @summary StandardModel6
 * @interface StandardModel6
 */
export interface StandardModel6 {
  /**
   * 查询业务数据结果
   * @type { StandardModel17[] }
   * @memberof StandardModel6
   */
  ['data']?: StandardModel17[]
  /**
   * datacode
   * @type { string }
   * @memberof StandardModel6
   */
  ['datacode']?: string
  /**
   * 返回消息內容
   * @type { string }
   * @memberof StandardModel6
   */
  ['msg']?: string
  /**
   * 0:成功,其他:失败,详细:1,访问的资源不存在 2,调用方法不被支持 3,接口请求JSON数据格式错误 4,检查输入参数:参数有问题 5,运行时错误 6,HTTP请求头需要包含认证信息 7,HTTP请求头的认证信息不对 8,参数已经存在 9,参数不存在 10,信息不存在 11,结果存在 12,结果不存在
   * @type { number }
   * @memberof StandardModel6
   */
  ['retCode']?: number
}

/**
 *
 * @summary StandardModel7
 * @interface StandardModel7
 */
export interface StandardModel7 {
  /**
   * hbase请求结果集合
   * @type { StandardModel8[] }
   * @memberof StandardModel7
   */
  ['data']?: StandardModel8[]
  /**
   * 返回消息內容
   * @type { string }
   * @memberof StandardModel7
   */
  ['msg']?: string
  /**
   * 0:成功,其他:失败,详细:1,访问的资源不存在 2,调用方法不被支持 3,接口请求JSON数据格式错误 4,检查输入参数:参数有问题 5,运行时错误 6,HTTP请求头需要包含认证信息 7,HTTP请求头的认证信息不对 8,参数已经存在 9,参数不存在 10,信息不存在 11,结果存在 12,结果不存在
   * @type { number }
   * @memberof StandardModel7
   */
  ['retCode']?: number
}

/**
 *
 * @summary StandardModel8
 * @interface StandardModel8
 */
export interface StandardModel8 {
  /**
   * 结果集合，List形式
   * @type { StandardModel59[] }
   * @memberof StandardModel8
   */
  ['dps']?: StandardModel59[]
  /**
   * 指标项
   * @type { string }
   * @memberof StandardModel8
   */
  ['metric']?: string
}

/**
 *
 * @summary StandardModel9
 * @interface StandardModel9
 */
export interface StandardModel9 {
  /**
   * 聚合方法,常见:avg(平均数据点),count(集合中原始数据点的数目 ),dev(计算标准偏差)first(去第一个值),last(去最后一个值),min(最小值),max(最大值),none(不做计算),sum(求和),zimsum(求和,补零)等
   * @type { string }
   * @memberof StandardModel9
   */
  ['aggregator']: string
  /**
   * 采样(采样时间+聚合方法+填充策略),采样时间单位:s秒,m分,h小时,d天;填充策略:null(返回null),none,nan(出现nan,返回null),zero(补零);例如:1m-avg-null
   * @type { string }
   * @memberof StandardModel9
   */
  ['downsample']?: string
  /**
   * 是否返回仅包含tag条件的数据(传3个tag时生效)
   * @type { boolean }
   * @memberof StandardModel9
   */
  ['explicitTags']?: boolean
  /**
   * 采集点
   * @type { string }
   * @memberof StandardModel9
   */
  ['metric']?: string
  /**
   * 标签项 ,搜索条件包括场站ID(staId),设备ID(equipID),设备分类(equipMK),设备环境(environStatus)等,比如:&lt;pre&gt;{&lt;br/&gt;	&quot;equipID&quot;: &quot;DEA01&quot;,&lt;br/&gt;	&quot;equipMK&quot;: &quot;DEA&quot;,&lt;br/&gt;	&quot;staId&quot;: &quot;CA02ES01&quot;,&lt;br/&gt;	&quot;environStatus&quot;: &quot;1&quot;&lt;br/&gt;}&lt;/pre&gt;其中staId为必填项,environStatus是1表示试运行,不传environStatus表示运行环境
   * @type { any }
   * @memberof StandardModel9
   */
  ['tags']?: any
}

/**
 *
 * @summary StandardModel10
 * @interface StandardModel10
 */
export interface StandardModel10 {
  /**
   * 业务域,包括:UES,PVS,ETS,TS,EMS,MS
   * @type { string }
   * @memberof StandardModel10
   */
  ['dataSource']: string
  /**
   * 查询结束时间,查询结果包含该时间点
   * @type { string }
   * @memberof StandardModel10
   */
  ['endTime']: string
  /**
   * 是否需要清洗
   * @type { boolean }
   * @memberof StandardModel10
   */
  ['isClean']?: boolean
  /**
   * opentsdb子查询
   * @type { StandardModel9[] }
   * @memberof StandardModel10
   */
  ['listQueries']?: StandardModel9[]
  /**
   * route
   * @type { boolean }
   * @memberof StandardModel10
   */
  ['route']: boolean
  /**
   * 查询起始时间,查询结果包含该时间点
   * @type { string }
   * @memberof StandardModel10
   */
  ['startTime']: string
  /**
   * userKey
   * @type { string }
   * @memberof StandardModel10
   */
  ['userKey']: string
}

/**
 *
 * @summary StandardModel11
 * @interface StandardModel11
 */
export interface StandardModel11 {
  /**
   * opentsdb请求结果集合
   * @type { StandardModel12[] }
   * @memberof StandardModel11
   */
  ['data']?: StandardModel12[]
  /**
   * 返回消息內容
   * @type { string }
   * @memberof StandardModel11
   */
  ['msg']?: string
  /**
   * 0:成功,其他:失败,详细:1,访问的资源不存在 2,调用方法不被支持 3,接口请求JSON数据格式错误 4,检查输入参数:参数有问题 5,运行时错误 6,HTTP请求头需要包含认证信息 7,HTTP请求头的认证信息不对 8,参数已经存在 9,参数不存在 10,信息不存在 11,结果存在 12,结果不存在
   * @type { number }
   * @memberof StandardModel11
   */
  ['retCode']?: number
  /**
   * source
   * @type { string }
   * @memberof StandardModel11
   */
  ['source']: string
}

/**
 *
 * @summary StandardModel12
 * @interface StandardModel12
 */
export interface StandardModel12 {
  /**
   * 聚合方法,常见:avg(平均数据点),count(集合中原始数据点的数目 ),dev(计算标准偏差)first(去第一个值),last(去最后一个值),min(最小值),max(最大值),none(不做计算),sum(求和),zimsum(求和,补零)等
   * @type { string }
   * @memberof StandardModel12
   */
  ['aggregator']?: string
  /**
   * 采样(采样时间+聚合方法+填充策略),采样时间单位:s秒,m分,h小时,d天;填充策略:null(返回null),none,nan(出现nan,返回null),zero(补零);例如:1m-avg-null
   * @type { string }
   * @memberof StandardModel12
   */
  ['downsample']?: string
  /**
   * 结果数据,JSONObject键值对形式,key是秒值
   * @type { any }
   * @memberof StandardModel12
   */
  ['dps']?: any
  /**
   * 指标项
   * @type { string }
   * @memberof StandardModel12
   */
  ['metric']?: string
  /**
   * 标签项 ,包括场站ID(staId),设备ID(equipID),设备分类(equipMK),设备环境(environStatus)等,比如:&lt;pre&gt;{&lt;br/&gt;	&quot;equipID&quot;: &quot;DEA01&quot;,&lt;br/&gt;	&quot;equipMK&quot;: &quot;DEA&quot;,&lt;br/&gt;	&quot;staId&quot;: &quot;CA02ES01&quot;,&lt;br/&gt;	&quot;environStatus&quot;: &quot;1&quot;&lt;br/&gt;}&lt;/pre&gt;其中environStatus是1表示试运行,没有environStatus表示运行环境
   * @type { any }
   * @memberof StandardModel12
   */
  ['tags']?: any
}

/**
 *
 * @summary StandardModel13
 * @interface StandardModel13
 */
export interface StandardModel13 {
  /**
   * 查询业务数据结果集合
   * @type { StandardModel6[] }
   * @memberof StandardModel13
   */
  ['data']?: StandardModel6[]
  /**
   * systemId
   * @type { string }
   * @memberof StandardModel13
   */
  ['systemId']?: string
}

/**
 *
 * @summary StandardModel14
 * @interface StandardModel14
 */
export interface StandardModel14 {
  /**
   * 系数α的确定&lt;/br&gt;指数平滑法的计算中，关键是α的取值大小，但α的取值又容易受主观影响，因此合理确定α的取值方法十分重要，一般来说，如果数据波动较大，α值应取大一些，可以增加近期数据对预测结果的影响。如果数据波动平稳，α值应取小一些。理论界一般认为有以下方法可供选择：经验判断法。这种方法主要依赖于时间序列的发展趋势和预测者的经验做出判断。 1、当时间序列呈现较稳定的水平趋势时，应选较小的α值，一般可在0.05～0.20之间取值； 2、当时间序列有波动，但长期趋势变化不大时，可选稍大的α值，常在0.1～0.2之间取值； 3、当时间序列波动很大，长期趋势变化幅度较大，呈现明显且迅速的上升或下降趋势时，宜选择较大的α值，如可在0.6～0.8间选值，以使预测模型灵敏度高些，能迅速跟上数据的变化； 2、当时间序列数据是上升（或下降）的发展趋势类型，α应取较大的值，在0.6~1之间。 试算法。根据具体时间序列情况，参照经验判断法，来大致确定额定的取值范围，然后取几个α值进行试算，比较不同α值下的预测标准误差，选取预测标准误差最小的α。 在实际应用中预测者应结合对预测对象的变化规律做出定性判断且计算预测误差，并要考虑到预测灵敏度和预测精度是相互矛盾的，必须给予二者一定的考虑，采用折中的α值
   * @type { number }
   * @memberof StandardModel14
   */
  ['a']?: number
  /**
   * 算法输入数据
   * @type { number[][] }
   * @memberof StandardModel14
   */
  ['data']?: number[][]
}

/**
 *
 * @summary StandardModel15
 * @interface StandardModel15
 */
export interface StandardModel15 {
  /**
   * 200:成功,其他:失败,详细:1,访问的资源不存在 2,调用方法不被支持 3,接口请求JSON数据格式错误 4,检查输入参数:参数有问题 5,运行时错误 6,HTTP请求头需要包含认证信息 7,HTTP请求头的认证信息不对 8,参数已经存在 9,参数不存在 10,信息不存在 11,结果存在 12,结果不存在
   * @type { number }
   * @memberof StandardModel15
   */
  ['code']?: number
  /**
   * 返回消息內容
   * @type { string }
   * @memberof StandardModel15
   */
  ['msg']?: string
  /**
   * 算法结果
   * @type { number[] }
   * @memberof StandardModel15
   */
  ['result']?: number[]
}

/**
 *
 * @summary StandardModel16
 * @interface StandardModel16
 */
export interface StandardModel16 {
  /**
   * 数据库地址
   * @type { string }
   * @memberof StandardModel16
   */
  ['dataUrl']?: string
  /**
   * 业务域
   * @type { string }
   * @memberof StandardModel16
   */
  ['domain']?: string
}

/**
 *
 * @summary StandardModel17
 * @interface StandardModel17
 */
export interface StandardModel17 {}

/**
 *
 * @summary StandardModel18
 * @interface StandardModel18
 */
export interface StandardModel18 {
  /**
   * 算法输入数据
   * @type { number[][] }
   * @memberof StandardModel18
   */
  ['data']?: number[][]
  /**
   * 算法输入参数
   * @type { number }
   * @memberof StandardModel18
   */
  ['t']?: number
}

/**
 *
 * @summary StandardModel19
 * @interface StandardModel19
 */
export interface StandardModel19 {
  /**
   * 200:成功,其他:失败,详细:1,访问的资源不存在 2,调用方法不被支持 3,接口请求JSON数据格式错误 4,检查输入参数:参数有问题 5,运行时错误 6,HTTP请求头需要包含认证信息 7,HTTP请求头的认证信息不对 8,参数已经存在 9,参数不存在 10,信息不存在 11,结果存在 12,结果不存在
   * @type { number }
   * @memberof StandardModel19
   */
  ['code']?: number
  /**
   * 返回消息內容
   * @type { string }
   * @memberof StandardModel19
   */
  ['msg']?: string
  /**
   * 算法结果
   * @type { number[] }
   * @memberof StandardModel19
   */
  ['result']?: number[]
}

/**
 *
 * @summary StandardModel20
 * @interface StandardModel20
 */
export interface StandardModel20 {
  /**
   * 能源类型 01电,02气
   * @type { string }
   * @memberof StandardModel20
   */
  ['enegyType']?: string
  /**
   * 单位
   * @type { string }
   * @memberof StandardModel20
   */
  ['unit']?: string
  /**
   * 消耗量
   * @type { string }
   * @memberof StandardModel20
   */
  ['val']?: string
}

/**
 *
 * @summary StandardModel21
 * @interface StandardModel21
 */
export interface StandardModel21 {
  /**
   * 包含主要设备
   * @type { string[] }
   * @memberof StandardModel21
   */
  ['device']?: string[]
  /**
   * 能源类别
   * @type { string[] }
   * @memberof StandardModel21
   */
  ['enegyType']?: string[]
  /**
   * 站名
   * @type { string }
   * @memberof StandardModel21
   */
  ['name']?: string
  /**
   * 站id
   * @type { string }
   * @memberof StandardModel21
   */
  ['stationid']?: string
  /**
   * 站类别
   * @type { string }
   * @memberof StandardModel21
   */
  ['stationtype']?: string
}

/**
 *
 * @summary StandardModel22
 * @interface StandardModel22
 */
export interface StandardModel22 {
  /**
   * 包含主要设备
   * @type { string[] }
   * @memberof StandardModel22
   */
  ['device']?: string[]
  /**
   * 电价单位
   * @type { string }
   * @memberof StandardModel22
   */
  ['eleUnit']?: string
  /**
   * 产电量
   * @type { string }
   * @memberof StandardModel22
   */
  ['eleVal']?: string
  /**
   * 能源类别
   * @type { string[] }
   * @memberof StandardModel22
   */
  ['enegyType']?: string[]
  /**
   * 站名
   * @type { string }
   * @memberof StandardModel22
   */
  ['name']?: string
  /**
   * 站id
   * @type { string }
   * @memberof StandardModel22
   */
  ['stationid']?: string
  /**
   * 站类别
   * @type { string }
   * @memberof StandardModel22
   */
  ['stationtype']?: string
  /**
   * 蒸汽单位
   * @type { string }
   * @memberof StandardModel22
   */
  ['steamUnit']?: string
  /**
   * 产气量
   * @type { string }
   * @memberof StandardModel22
   */
  ['steamVal']?: string
}

/**
 *
 * @summary StandardModel23
 * @interface StandardModel23
 */
export interface StandardModel23 {
  /**
   * 企业消耗能源量
   * @type { StandardModel20[] }
   * @memberof StandardModel23
   */
  ['loadsval']?: StandardModel20[]
  /**
   * 光伏电,用总电量比值
   * @type { string }
   * @memberof StandardModel23
   */
  ['regonerate']?: string
  /**
   * 泛能站总发能源量
   * @type { StandardModel58[] }
   * @memberof StandardModel23
   */
  ['suplyval']?: StandardModel58[]
}

/**
 *
 * @summary StandardModel24
 * @interface StandardModel24
 */
export interface StandardModel24 {
  /**
   * datacode
   * @type { string }
   * @memberof StandardModel24
   */
  ['datacode']?: string
  /**
   * 数据名称
   * @type { string }
   * @memberof StandardModel24
   */
  ['description']?: string
}

/**
 *
 * @summary StandardModel25
 * @interface StandardModel25
 */
export interface StandardModel25 {
  /**
   * datacode是否存在
   * @type { boolean }
   * @memberof StandardModel25
   */
  ['exist']?: boolean
  /**
   * 返回消息內容
   * @type { string }
   * @memberof StandardModel25
   */
  ['msg']?: string
  /**
   * 0:成功,其他:失败,详细:1,访问的资源不存在 2,调用方法不被支持 3,接口请求JSON数据格式错误 4,检查输入参数:参数有问题 5,运行时错误 6,HTTP请求头需要包含认证信息 7,HTTP请求头的认证信息不对 8,参数已经存在 9,参数不存在 10,信息不存在 11,结果存在 12,结果不存在
   * @type { number }
   * @memberof StandardModel25
   */
  ['retCode']?: number
}

/**
 *
 * @summary StandardModel26
 * @interface StandardModel26
 */
export interface StandardModel26 {
  /**
   * 城市ID
   * @type { string }
   * @memberof StandardModel26
   */
  ['cityid']?: string
  /**
   * 城市名称
   * @type { string }
   * @memberof StandardModel26
   */
  ['citynm']?: string
  /**
   * 城市拼音
   * @type { string }
   * @memberof StandardModel26
   */
  ['cityno']?: string
  /**
   * 通用城市ID
   * @type { string }
   * @memberof StandardModel26
   */
  ['generalid']?: string
  /**
   * 省名称
   * @type { string }
   * @memberof StandardModel26
   */
  ['provincenm']?: string
  /**
   * 该城市获取天气类型,history:历史;prediction:预测;all:全部
   * @type { string }
   * @memberof StandardModel26
   */
  ['weathertype']?: string
}

/**
 *
 * @summary StandardModel27
 * @interface StandardModel27
 */
export interface StandardModel27 {
  /**
   * PM2.5 AQI
   * @type { string }
   * @memberof StandardModel27
   */
  ['aqi']?: string
  /**
   * 城市编号
   * @type { string }
   * @memberof StandardModel27
   */
  ['cityid']?: string
  /**
   * 城市名称
   * @type { string }
   * @memberof StandardModel27
   */
  ['citynm']?: string
  /**
   * 城市拼音
   * @type { string }
   * @memberof StandardModel27
   */
  ['cityno']?: string
  /**
   * 该时段湿度
   * @type { string }
   * @memberof StandardModel27
   */
  ['humidity']?: string
  /**
   * 降雨量
   * @type { string }
   * @memberof StandardModel27
   */
  ['rainfall']?: string
  /**
   * 该时段温度
   * @type { string }
   * @memberof StandardModel27
   */
  ['temperature']?: string
  /**
   * 更新时间
   * @type { string }
   * @memberof StandardModel27
   */
  ['uptime']?: string
  /**
   * 该时段天气
   * @type { string }
   * @memberof StandardModel27
   */
  ['weather']?: string
  /**
   * 星期
   * @type { string }
   * @memberof StandardModel27
   */
  ['week']?: string
  /**
   * 该时段风向
   * @type { string }
   * @memberof StandardModel27
   */
  ['wind']?: string
  /**
   * 该时段风力
   * @type { string }
   * @memberof StandardModel27
   */
  ['winp']?: string
}

/**
 *
 * @summary StandardModel28
 * @interface StandardModel28
 */
export interface StandardModel28 {
  /**
   * 天气
   * @type { string }
   * @memberof StandardModel28
   */
  ['hourbt']?: string
  /**
   * 湿度
   * @type { string }
   * @memberof StandardModel28
   */
  ['hourhmid']?: string
  /**
   * 风速
   * @type { string }
   * @memberof StandardModel28
   */
  ['hourppcp']?: string
  /**
   * 气温
   * @type { string }
   * @memberof StandardModel28
   */
  ['hourtmp']?: string
  /**
   * 风向
   * @type { string }
   * @memberof StandardModel28
   */
  ['hourwindd']?: string
  /**
   * 风力
   * @type { string }
   * @memberof StandardModel28
   */
  ['hourwindp']?: string
  /**
   * 时间点
   * @type { string }
   * @memberof StandardModel28
   */
  ['time']?: string
}

/**
 *
 * @summary StandardModel29
 * @interface StandardModel29
 */
export interface StandardModel29 {
  /**
   * 天气预测数据
   * @type { StandardModel28[] }
   * @memberof StandardModel29
   */
  ['data']?: StandardModel28[]
  /**
   * 返回消息內容
   * @type { string }
   * @memberof StandardModel29
   */
  ['msg']?: string
  /**
   * 0:成功,其他:失败,详细:1,访问的资源不存在 2,调用方法不被支持 3,接口请求JSON数据格式错误 4,检查输入参数:参数有问题 5,运行时错误 6,HTTP请求头需要包含认证信息 7,HTTP请求头的认证信息不对 8,参数已经存在 9,参数不存在 10,信息不存在 11,结果存在 12,结果不存在
   * @type { number }
   * @memberof StandardModel29
   */
  ['retCode']?: number
}

/**
 *
 * @summary StandardModel30
 * @interface StandardModel30
 */
export interface StandardModel30 {
  /**
   * 指标项
   * @type { string }
   * @memberof StandardModel30
   */
  ['downsample']: string
  /**
   * 指标项
   * @type { string }
   * @memberof StandardModel30
   */
  ['metric']: string
  /**
   * 标签项 ,搜索条件包括场站ID(staId),设备ID(equipID),设备分类(equipMK),设备环境(environStatus)等,比如:&lt;pre&gt;{&lt;br/&gt;	&quot;equipID&quot;: &quot;DEA01&quot;,&lt;br/&gt;	&quot;equipMK&quot;: &quot;DEA&quot;,&lt;br/&gt;	&quot;staId&quot;: &quot;CA02ES01&quot;,&lt;br/&gt;	&quot;environStatus&quot;: &quot;1&quot;&lt;br/&gt;}&lt;/pre&gt;其中staId为必填项,environStatus是1表示试运行,不传environStatus表示运行环境
   * @type { any }
   * @memberof StandardModel30
   */
  ['tags']?: any
}

/**
 *
 * @summary StandardModel31
 * @interface StandardModel31
 */
export interface StandardModel31 {
  /**
   * 业务域,包括:UES,PVS,ETS,TS,EMS,MS
   * @type { string }
   * @memberof StandardModel31
   */
  ['dataSource']: string
  /**
   * 查询时间范围/天(默认三天)
   * @type { number }
   * @memberof StandardModel31
   */
  ['days']?: number
  /**
   * 是否需要清洗
   * @type { boolean }
   * @memberof StandardModel31
   */
  ['isClean']?: boolean
  /**
   * opentsdb子查询
   * @type { StandardModel30[] }
   * @memberof StandardModel31
   */
  ['listQueries']?: StandardModel30[]
  /**
   * route
   * @type { boolean }
   * @memberof StandardModel31
   */
  ['route']: boolean
  /**
   * userKey
   * @type { string }
   * @memberof StandardModel31
   */
  ['userKey']: string
  /**
   * 数据格式版本
   * @type { string }
   * @memberof StandardModel31
   */
  ['version']?: string
}

/**
 *
 * @summary StandardModel32
 * @interface StandardModel32
 */
export interface StandardModel32 {
  /**
   * 业务域
   * @type { string }
   * @memberof StandardModel32
   */
  ['domain']?: string
  /**
   * 返回消息內容
   * @type { string }
   * @memberof StandardModel32
   */
  ['msg']?: string
  /**
   * 0:成功,其他:失败,详细:1,访问的资源不存在 2,调用方法不被支持 3,接口请求JSON数据格式错误 4,检查输入参数:参数有问题 5,运行时错误 6,HTTP请求头需要包含认证信息 7,HTTP请求头的认证信息不对 8,参数已经存在 9,参数不存在 10,信息不存在 11,结果存在 12,结果不存在
   * @type { number }
   * @memberof StandardModel32
   */
  ['retCode']?: number
  /**
   * source
   * @type { string }
   * @memberof StandardModel32
   */
  ['source']: string
  /**
   * 量测点实时数据集合
   * @type { StandardModel110[] }
   * @memberof StandardModel32
   */
  ['ts']?: StandardModel110[]
  /**
   * 数据格式版本
   * @type { string }
   * @memberof StandardModel32
   */
  ['version']?: string
}

/**
 *
 * @summary StandardModel33
 * @interface StandardModel33
 */
export interface StandardModel33 {
  /**
   * 设备点实时数据集合
   * @type { DeviceRealTimeResult[] }
   * @memberof StandardModel33
   */
  ['data']?: DeviceRealTimeResult[]
  /**
   * 返回消息內容
   * @type { string }
   * @memberof StandardModel33
   */
  ['msg']?: string
  /**
   * 0:成功,其他:失败,详细:1,访问的资源不存在 2,调用方法不被支持 3,接口请求JSON数据格式错误 4,检查输入参数:参数有问题 5,运行时错误 6,HTTP请求头需要包含认证信息 7,HTTP请求头的认证信息不对 8,参数已经存在 9,参数不存在 10,信息不存在 11,结果存在 12,结果不存在
   * @type { number }
   * @memberof StandardModel33
   */
  ['retCode']?: number
}

/**
 *
 * @summary StandardModel34
 * @interface StandardModel34
 */
export interface StandardModel34 {
  /**
   * 接口编号（接口值）
   * @type { string }
   * @memberof StandardModel34
   */
  ['apiId']?: string
  /**
   * 接口名称（接口值）
   * @type { string }
   * @memberof StandardModel34
   */
  ['apiName']?: string
  /**
   * 指标编号（指标值）
   * @type { string }
   * @memberof StandardModel34
   */
  ['calcCode']?: string
  /**
   * 指标描述（指标值）
   * @type { string }
   * @memberof StandardModel34
   */
  ['calcDesc']?: string
  /**
   * 所属设备ID（指标值）
   * @type { string }
   * @memberof StandardModel34
   */
  ['calcDeviceId']?: string
  /**
   * 指标名称（指标值）
   * @type { string }
   * @memberof StandardModel34
   */
  ['calcName']?: string
  /**
   * 所属系统code（指标值）
   * @type { string }
   * @memberof StandardModel34
   */
  ['calcSystemCode']?: string
  /**
   * 业务域（量测值）
   * @type { string }
   * @memberof StandardModel34
   */
  ['dyncDomain']?: string
  /**
   * 设备id（量测值）
   * @type { string }
   * @memberof StandardModel34
   */
  ['dyncEquipId']?: string
  /**
   * 设备类型（量测值）
   * @type { string }
   * @memberof StandardModel34
   */
  ['dyncEquipMk']?: string
  /**
   * 量测点（量测值）
   * @type { string }
   * @memberof StandardModel34
   */
  ['dyncMetric']?: string
  /**
   * 站别名（量测值）
   * @type { string }
   * @memberof StandardModel34
   */
  ['dyncStaAlias']?: string
  /**
   * 站ID，等同于system_code（量测值）
   * @type { string }
   * @memberof StandardModel34
   */
  ['dyncStaId']?: string
  /**
   * 参数编号：C1,C2等表示量测值，D1，D2表示等CIM静态值，F1，F2表示指标值，K1表示接口值
   * @type { string }
   * @memberof StandardModel34
   */
  ['paramCode']?: string
  /**
   * 属性（静态值）
   * @type { string }
   * @memberof StandardModel34
   */
  ['staticAttr']?: string
  /**
   * 所属设备ID,若不是设备级别的code，则为null（静态值）
   * @type { string }
   * @memberof StandardModel34
   */
  ['staticDeviceId']?: string
  /**
   * 所属系统code（静态值）
   * @type { string }
   * @memberof StandardModel34
   */
  ['staticSystemCode']?: string
  /**
   * 类型 0:量测值,1:CIM静态值,2:指标值,3:api接口值
   * @type { string }
   * @memberof StandardModel34
   */
  ['type']?: string
}

/**
 *
 * @summary StandardModel35
 * @interface StandardModel35
 */
export interface StandardModel35 {
  /**
   * 结束时间
   * @type { string }
   * @memberof StandardModel35
   */
  ['endTime']?: string
  /**
   * 能耗类别：CEC-综合能耗,ELEC-电能,STE-蒸汽,WAT-水,AIR-压缩空气,GAS-燃气,COOL-冷,HEAT-热,FlueGas-烟气,OIL-燃油,BIO-生物质,COAL-煤,COALGAS-煤气
   * @type { string }
   * @memberof StandardModel35
   */
  ['energyType']?: string
  /**
   * 园区编码
   * @type { string }
   * @memberof StandardModel35
   */
  ['parkNo']: string
  /**
   * 开始时间
   * @type { string }
   * @memberof StandardModel35
   */
  ['startTime']?: string
  /**
   * 系统编码
   * @type { string }
   * @memberof StandardModel35
   */
  ['systemCode']?: string
  /**
   * 指标粒度，day-日 month-月 year-年
   * @type { string }
   * @memberof StandardModel35
   */
  ['timeType']?: string
  /**
   * userKey
   * @type { string }
   * @memberof StandardModel35
   */
  ['userKey']: string
}

/**
 *
 * @summary StandardModel36
 * @interface StandardModel36
 */
export interface StandardModel36 {
  /**
   * 业务类别
   * @type { string }
   * @memberof StandardModel36
   */
  ['busiType']?: string
  /**
   * 指标编码
   * @type { string }
   * @memberof StandardModel36
   */
  ['calccode']?: string
  /**
   * 指标名称
   * @type { string }
   * @memberof StandardModel36
   */
  ['calcname']?: string
  /**
   * 指标时间
   * @type { string }
   * @memberof StandardModel36
   */
  ['caldate']?: string
  /**
   * 企业名称
   * @type { string }
   * @memberof StandardModel36
   */
  ['corpName']?: string
  /**
   * 企业名称简写
   * @type { string }
   * @memberof StandardModel36
   */
  ['corpNm']?: string
  /**
   * 企业类型
   * @type { string }
   * @memberof StandardModel36
   */
  ['corpType']?: string
  /**
   * 设备编码
   * @type { string }
   * @memberof StandardModel36
   */
  ['deviceId']?: string
  /**
   * 能耗类别
   * @type { string }
   * @memberof StandardModel36
   */
  ['energyType']?: string
  /**
   * 能耗类别
   * @type { string }
   * @memberof StandardModel36
   */
  ['energyTypeName']?: string
  /**
   * 能耗值
   * @type { string }
   * @memberof StandardModel36
   */
  ['energyValue']?: string
  /**
   * 纬度
   * @type { string }
   * @memberof StandardModel36
   */
  ['latitude']?: string
  /**
   * 经度
   * @type { string }
   * @memberof StandardModel36
   */
  ['longitude']?: string
  /**
   * 系统编码
   * @type { string }
   * @memberof StandardModel36
   */
  ['systemCode']?: string
  /**
   * 指标粒度
   * @type { string }
   * @memberof StandardModel36
   */
  ['timeType']?: string
}

/**
 *
 * @summary StandardModel37
 * @interface StandardModel37
 */
export interface StandardModel37 {
  /**
   * 数据集合
   * @type { MetricLatestInfoResult[] }
   * @memberof StandardModel37
   */
  ['data']?: MetricLatestInfoResult[]
  /**
   * 返回消息內容
   * @type { string }
   * @memberof StandardModel37
   */
  ['msg']?: string
  /**
   * 0:成功,其他:失败,详细:1,访问的资源不存在 2,调用方法不被支持 3,接口请求JSON数据格式错误 4,检查输入参数:参数有问题 5,运行时错误 6,HTTP请求头需要包含认证信息 7,HTTP请求头的认证信息不对 8,参数已经存在 9,参数不存在 10,信息不存在 11,结果存在 12,结果不存在
   * @type { number }
   * @memberof StandardModel37
   */
  ['retCode']?: number
}

/**
 *
 * @summary StandardModel38
 * @interface StandardModel38
 */
export interface StandardModel38 {
  /**
   * 算法输入数据
   * @type { number[][] }
   * @memberof StandardModel38
   */
  ['data']?: number[][]
  /**
   * 算法输入参数
   * @type { number }
   * @memberof StandardModel38
   */
  ['t']?: number
}

/**
 *
 * @summary StandardModel39
 * @interface StandardModel39
 */
export interface StandardModel39 {
  /**
   * 200:成功,其他:失败,详细:1,访问的资源不存在 2,调用方法不被支持 3,接口请求JSON数据格式错误 4,检查输入参数:参数有问题 5,运行时错误 6,HTTP请求头需要包含认证信息 7,HTTP请求头的认证信息不对 8,参数已经存在 9,参数不存在 10,信息不存在 11,结果存在 12,结果不存在
   * @type { number }
   * @memberof StandardModel39
   */
  ['code']?: number
  /**
   * 返回消息內容
   * @type { string }
   * @memberof StandardModel39
   */
  ['msg']?: string
  /**
   * 算法结果
   * @type { number[] }
   * @memberof StandardModel39
   */
  ['result']?: number[]
}

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
 * @summary StandardModel41
 * @interface StandardModel41
 */
export interface StandardModel41 {
  /**
   * 时间,yyyy-MM-dd hh:mm:ss
   * @type { string[] }
   * @memberof StandardModel41
   */
  ['times']?: string[]
  /**
   * 查询值
   * @type { string[] }
   * @memberof StandardModel41
   */
  ['values']?: string[]
}

/**
 *
 * @summary StandardModel42
 * @interface StandardModel42
 */
export interface StandardModel42 {
  /**
   * 时间,yyyy-MM-dd hh:mm:ss
   * @type { string }
   * @memberof StandardModel42
   */
  ['time']?: string
  /**
   * 查询值
   * @type { number }
   * @memberof StandardModel42
   */
  ['value']?: number
}

/**
 *
 * @summary StandardModel43
 * @interface StandardModel43
 */
export interface StandardModel43 {
  /**
   * 结果数据,JSONObject键值对形式,key是秒值
   * @type { any }
   * @memberof StandardModel43
   */
  ['dps']?: any
  /**
   * 数据为空类型，0 原始数据没有，1 有原始数据没有满足条件的， 2 请求有异常，3返回有数据
   * @type { number }
   * @memberof StandardModel43
   */
  ['label']?: number
  /**
   * 标签项 ,包括场站ID(staId),设备ID(equipID),设备分类(equipMK),设备环境(environStatus)等,比如:&lt;pre&gt;{&lt;br/&gt;	&quot;equipID&quot;: &quot;DEA01&quot;,&lt;br/&gt;	&quot;equipMK&quot;: &quot;DEA&quot;,&lt;br/&gt;	&quot;staId&quot;: &quot;CA02ES01&quot;,&lt;br/&gt;	&quot;environStatus&quot;: &quot;1&quot;&lt;br/&gt;}&lt;/pre&gt;其中environStatus是1表示试运行,没有environStatus表示运行环境
   * @type { any }
   * @memberof StandardModel43
   */
  ['tags']?: any
}

/**
 *
 * @summary StandardModel44
 * @interface StandardModel44
 */
export interface StandardModel44 {
  /**
   * 返回消息內容
   * @type { string }
   * @memberof StandardModel44
   */
  ['msg']?: string
  /**
   * 数据库信息
   * @type { StandardModel16[] }
   * @memberof StandardModel44
   */
  ['result']?: StandardModel16[]
  /**
   * 0:成功,其他:失败,详细:1,访问的资源不存在 2,调用方法不被支持 3,接口请求JSON数据格式错误 4,检查输入参数:参数有问题 5,运行时错误 6,HTTP请求头需要包含认证信息 7,HTTP请求头的认证信息不对 8,参数已经存在 9,参数不存在 10,信息不存在 11,结果存在 12,结果不存在
   * @type { number }
   * @memberof StandardModel44
   */
  ['retCode']?: number
}

/**
 *
 * @summary StandardModel45
 * @interface StandardModel45
 */
export interface StandardModel45 {
  /**
   * datacode
   * @type { string }
   * @memberof StandardModel45
   */
  ['datacode']: string
  /**
   * 查询业务数据参数,根据不同的&lt;br/&gt;datacode添加不通的参数,格式:&lt;br/&gt;{key1:value1,key2:value2...},&lt;br/&gt;key代表参数名称,value代表参数值
   * @type { any }
   * @memberof StandardModel45
   */
  ['params']?: any
}

/**
 *
 * @summary StandardModel46
 * @interface StandardModel46
 */
export interface StandardModel46 {
  /**
   * 查询业务数据接口参数数组
   * @type { StandardModel47[] }
   * @memberof StandardModel46
   */
  ['params']: StandardModel47[]
}

/**
 *
 * @summary StandardModel47
 * @interface StandardModel47
 */
export interface StandardModel47 {
  /**
   * datacode和对应参数
   * @type { StandardModel45[] }
   * @memberof StandardModel47
   */
  ['datacodeParam']: StandardModel45[]
  /**
   * 查询结束时间,格式:yyyy-MM-dd hh:mm:ss
   * @type { string }
   * @memberof StandardModel47
   */
  ['endTime']?: string
  /**
   * 查新开始时间,格式:yyyy-MM-dd hh:mm:ss
   * @type { string }
   * @memberof StandardModel47
   */
  ['startTime']?: string
  /**
   * 系统id
   * @type { number }
   * @memberof StandardModel47
   */
  ['systemId']?: number
}

/**
 *
 * @summary StandardModel48
 * @interface StandardModel48
 */
export interface StandardModel48 {
  /**
   * 指标计算code
   * @type { string }
   * @memberof StandardModel48
   */
  ['calcCode']?: string
  /**
   * deviceId
   * @type { string }
   * @memberof StandardModel48
   */
  ['deviceId']?: string
  /**
   *
   * @type { StandardModel50 }
   * @memberof StandardModel48
   */
  ['result']?: StandardModel50
  /**
   * systemCode
   * @type { string }
   * @memberof StandardModel48
   */
  ['systemCode']?: string
  /**
   * 指标计算时间类型,hour小时级,day天级,month月级,year年级
   * @type { string }
   * @memberof StandardModel48
   */
  ['timeType']?: string
}

/**
 *
 * @summary StandardModel49
 * @interface StandardModel49
 */
export interface StandardModel49 {
  /**
   * 指标计算code
   * @type { string }
   * @memberof StandardModel49
   */
  ['calcCode']?: string
  /**
   * 结果类型 尖 0 峰 1 平 2 谷 3
   * @type { string }
   * @memberof StandardModel49
   */
  ['dataType']?: string
  /**
   * deviceId
   * @type { string }
   * @memberof StandardModel49
   */
  ['deviceId']?: string
  /**
   * 指标计算结果
   * @type { StandardModel50[] }
   * @memberof StandardModel49
   */
  ['result']?: StandardModel50[]
  /**
   * systemCode
   * @type { string }
   * @memberof StandardModel49
   */
  ['systemCode']?: string
  /**
   * 指标计算时间类型,hour小时级,day天级,month月级,year年级
   * @type { string }
   * @memberof StandardModel49
   */
  ['timeType']?: string
}

/**
 *
 * @summary StandardModel50
 * @interface StandardModel50
 */
export interface StandardModel50 {
  /**
   * 指标计算时间
   * @type { string }
   * @memberof StandardModel50
   */
  ['bizTime']?: string
  /**
   * 指标计算创建时间
   * @type { string }
   * @memberof StandardModel50
   */
  ['createTime']?: string
  /**
   * 指标计算公式
   * @type { string }
   * @memberof StandardModel50
   */
  ['formula']?: string
  /**
   * 指标计算公式
   * @type { string }
   * @memberof StandardModel50
   */
  ['params']?: string
  /**
   * 指标计算更新时间
   * @type { string }
   * @memberof StandardModel50
   */
  ['updateTime']?: string
  /**
   * 指标计算结果
   * @type { number }
   * @memberof StandardModel50
   */
  ['value']?: number
}

/**
 *
 * @summary StandardModel51
 * @interface StandardModel51
 */
export interface StandardModel51 {
  /**
   * 200:成功,其他:失败,详细:1,访问的资源不存在 2,调用方法不被支持 3,接口请求JSON数据格式错误 4,检查输入参数:参数有问题 5,运行时错误 6,HTTP请求头需要包含认证信息 7,HTTP请求头的认证信息不对 8,参数已经存在 9,参数不存在 10,信息不存在 11,结果存在 12,结果不存在
   * @type { number }
   * @memberof StandardModel51
   */
  ['code']?: number
  /**
   *
   * @type { StandardModel52 }
   * @memberof StandardModel51
   */
  ['data']?: StandardModel52
  /**
   * 返回消息內容
   * @type { string }
   * @memberof StandardModel51
   */
  ['msg']?: string
}

/**
 *
 * @summary StandardModel52
 * @interface StandardModel52
 */
export interface StandardModel52 {
  /**
   * 根据参数查询采集点信息接口返回结果集合
   * @type { StandardModel53[] }
   * @memberof StandardModel52
   */
  ['list']?: StandardModel53[]
  /**
   * 当前页
   * @type { number }
   * @memberof StandardModel52
   */
  ['pageNumber']?: number
  /**
   * 页面大小
   * @type { number }
   * @memberof StandardModel52
   */
  ['pageSize']?: number
  /**
   * 总页数
   * @type { number }
   * @memberof StandardModel52
   */
  ['pages']?: number
  /**
   * 总记录数
   * @type { string }
   * @memberof StandardModel52
   */
  ['total']?: string
}

/**
 *
 * @summary StandardModel53
 * @interface StandardModel53
 */
export interface StandardModel53 {
  /**
   * 站点别名
   * @type { string }
   * @memberof StandardModel53
   */
  ['aliasCode']?: string
  /**
   * 该采集点在大数据第一次采集时间
   * @type { number }
   * @memberof StandardModel53
   */
  ['collectFirstTime']?: number
  /**
   * 该采集点在大数据最后一次采集时间
   * @type { number }
   * @memberof StandardModel53
   */
  ['collectLastTime']?: number
  /**
   * 控制属性
   * @type { string }
   * @memberof StandardModel53
   */
  ['control']?: string
  /**
   * 创建时间
   * @type { string }
   * @memberof StandardModel53
   */
  ['createTime']?: string
  /**
   * 创建者
   * @type { string }
   * @memberof StandardModel53
   */
  ['creator']?: string
  /**
   * 数据编码
   * @type { string }
   * @memberof StandardModel53
   */
  ['dataCode']?: string
  /**
   * 数据对象-id（如果是设备的话，存设备的业务id）
   * @type { string }
   * @memberof StandardModel53
   */
  ['dataObjectId']?: string
  /**
   * 数据类型
   * @type { string }
   * @memberof StandardModel53
   */
  ['dataType']?: string
  /**
   * 数据对象-类型
   * @type { string }
   * @memberof StandardModel53
   */
  ['dateObjectType']?: string
  /**
   * 逻辑删除
   * @type { boolean }
   * @memberof StandardModel53
   */
  ['delFlag']?: boolean
  /**
   * 测点描述
   * @type { string }
   * @memberof StandardModel53
   */
  ['description']?: string
  /**
   * 关联的设备标识
   * @type { number }
   * @memberof StandardModel53
   */
  ['deviceId']?: number
  /**
   * 自增主键
   * @type { number }
   * @memberof StandardModel53
   */
  ['id']?: number
  /**
   * 是否是计量点：是/否
   * @type { string }
   * @memberof StandardModel53
   */
  ['ifMeasurePoint']?: string
  /**
   * IO类型，PLC专用
   * @type { string }
   * @memberof StandardModel53
   */
  ['ioType']?: string
  /**
   * 该采集点在大数据是否采集过数据
   * @type { boolean }
   * @memberof StandardModel53
   */
  ['isCollected']?: boolean
  /**
   * 量测分类
   * @type { string }
   * @memberof StandardModel53
   */
  ['measureCat']?: string
  /**
   * 仪表类型，PLC专用
   * @type { string }
   * @memberof StandardModel53
   */
  ['meterType']?: string
  /**
   * 测点名称
   * @type { string }
   * @memberof StandardModel53
   */
  ['name']?: string
  /**
   * 父级计量点
   * @type { number }
   * @memberof StandardModel53
   */
  ['pid']?: number
  /**
   * 点类型
   * @type { string }
   * @memberof StandardModel53
   */
  ['pointType']?: string
  /**
   * 产品编码
   * @type { string }
   * @memberof StandardModel53
   */
  ['productCode']?: string
  /**
   * 归属站id
   * @type { string }
   * @memberof StandardModel53
   */
  ['stationId']?: string
  /**
   * 状态值示意
   * @type { string }
   * @memberof StandardModel53
   */
  ['statusExplain']?: string
  /**
   * 关联的端点标识
   * @type { number }
   * @memberof StandardModel53
   */
  ['terminalId']?: number
  /**
   * 单位
   * @type { string }
   * @memberof StandardModel53
   */
  ['unit']?: string
  /**
   * 更新时间
   * @type { string }
   * @memberof StandardModel53
   */
  ['updateTime']?: string
  /**
   * 更新者
   * @type { string }
   * @memberof StandardModel53
   */
  ['updator']?: string
  /**
   * 数值乘数
   * @type { string }
   * @memberof StandardModel53
   */
  ['valueMultiplier']?: string
  /**
   * 数值范围
   * @type { string }
   * @memberof StandardModel53
   */
  ['valueRange']?: string
  /**
   * 数值类型
   * @type { string }
   * @memberof StandardModel53
   */
  ['valueType']?: string
}

/**
 *
 * @summary StandardModel54
 * @interface StandardModel54
 */
export interface StandardModel54 {
  /**
   * systemId
   * @type { number }
   * @memberof StandardModel54
   */
  ['systemId']: number
}

/**
 *
 * @summary StandardModel55
 * @interface StandardModel55
 */
export interface StandardModel55 {
  /**
   * 返回消息內容
   * @type { string }
   * @memberof StandardModel55
   */
  ['msg']?: string
  /**
   * 元数据查询信息
   * @type { StandardModel24[] }
   * @memberof StandardModel55
   */
  ['result']?: StandardModel24[]
  /**
   * 0:成功,其他:失败,详细:1,访问的资源不存在 2,调用方法不被支持 3,接口请求JSON数据格式错误 4,检查输入参数:参数有问题 5,运行时错误 6,HTTP请求头需要包含认证信息 7,HTTP请求头的认证信息不对 8,参数已经存在 9,参数不存在 10,信息不存在 11,结果存在 12,结果不存在
   * @type { number }
   * @memberof StandardModel55
   */
  ['retCode']?: number
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
 * @summary StandardModel58
 * @interface StandardModel58
 */
export interface StandardModel58 {
  /**
   * 市电
   * @type { string }
   * @memberof StandardModel58
   */
  ['cval']?: string
  /**
   * 能源类型
   * @type { string }
   * @memberof StandardModel58
   */
  ['enegyType']?: string
  /**
   * 光伏电
   * @type { string }
   * @memberof StandardModel58
   */
  ['pval']?: string
  /**
   * 泛能发电
   * @type { string }
   * @memberof StandardModel58
   */
  ['sval']?: string
  /**
   * 单位
   * @type { string }
   * @memberof StandardModel58
   */
  ['unit']?: string
  /**
   * 总量
   * @type { string }
   * @memberof StandardModel58
   */
  ['val']?: string
}

/**
 *
 * @summary StandardModel59
 * @interface StandardModel59
 */
export interface StandardModel59 {
  /**
   * 报警等级 0&#x3D;正常 1&#x3D;1级报警 2&#x3D;2级报警 3&#x3D;3级报警 4&#x3D;4级报警
   * @type { number }
   * @memberof StandardModel59
   */
  ['alarmLevel']?: number
  /**
   * 波形长度
   * @type { number }
   * @memberof StandardModel59
   */
  ['dataLen']?: number
  /**
   * 数据类型 0-时域波形 1-频谱，2-长时域波形 3-交叉相位 4-锤击响应 5-启停车 6-总值趋势 7-包络 8-倒谱
   * @type { number }
   * @memberof StandardModel59
   */
  ['dataType']?: number
  /**
   * 备注
   * @type { string }
   * @memberof StandardModel59
   */
  ['description']?: string
  /**
   * 仪器序列号
   * @type { string }
   * @memberof StandardModel59
   */
  ['instrCode']?: string
  /**
   * 是否是误信号 0-正常 1-误信号
   * @type { number }
   * @memberof StandardModel59
   */
  ['isError']?: number
  /**
   * 采样时间
   * @type { string }
   * @memberof StandardModel59
   */
  ['measDate']?: string
  /**
   * 采样值（默认是有效值，如果该条数据为位移，默认值为峰峰值）
   * @type { number }
   * @memberof StandardModel59
   */
  ['measValue']?: number
  /**
   * 运行转速
   * @type { number }
   * @memberof StandardModel59
   */
  ['runSpeed']?: number
  /**
   * 采样频率
   * @type { number }
   * @memberof StandardModel59
   */
  ['sampleRate']?: number
  /**
   * 单位
   * @type { string }
   * @memberof StandardModel59
   */
  ['unit']?: string
  /**
   * 震动数据
   * @type { string }
   * @memberof StandardModel59
   */
  ['waveData']?: string
  /**
   * 波形数据key 唯一标识
   * @type { string }
   * @memberof StandardModel59
   */
  ['waveKey']?: string
}

/**
 *
 * @summary StandardModel60
 * @interface StandardModel60
 */
export interface StandardModel60 {
  /**
   * 业务域
   * @type { string }
   * @memberof StandardModel60
   */
  ['domain']: string
  /**
   * 设备id
   * @type { string }
   * @memberof StandardModel60
   */
  ['equipID']: string
  /**
   * 设备类型
   * @type { string }
   * @memberof StandardModel60
   */
  ['equipMK']: string
  /**
   * 测点编码
   * @type { string }
   * @memberof StandardModel60
   */
  ['metric']?: string
  /**
   * 站ID
   * @type { string }
   * @memberof StandardModel60
   */
  ['systemCode']: string
}

/**
 *
 * @summary StandardModel61
 * @interface StandardModel61
 */
export interface StandardModel61 {
  /**
   * 相对湿度
   * @type { number }
   * @memberof StandardModel61
   */
  ['humidity']?: number
  /**
   * 干球温度
   * @type { number }
   * @memberof StandardModel61
   */
  ['temperaturedryball']?: number
  /**
   * 湿球温度
   * @type { number }
   * @memberof StandardModel61
   */
  ['temperaturewetball']?: number
}

/**
 *
 * @summary StandardModel62
 * @interface StandardModel62
 */
export interface StandardModel62 {
  /**
   * 环境湿球温度数据
   * @type { StandardModel61[] }
   * @memberof StandardModel62
   */
  ['data']?: StandardModel61[]
  /**
   * 返回消息內容
   * @type { string }
   * @memberof StandardModel62
   */
  ['msg']?: string
  /**
   * 0:成功,其他:失败,详细:1,访问的资源不存在 2,调用方法不被支持 3,接口请求JSON数据格式错误 4,检查输入参数:参数有问题 5,运行时错误 6,HTTP请求头需要包含认证信息 7,HTTP请求头的认证信息不对 8,参数已经存在 9,参数不存在 10,信息不存在 11,结果存在 12,结果不存在
   * @type { number }
   * @memberof StandardModel62
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
 * @summary StandardModel64
 * @interface StandardModel64
 */
export interface StandardModel64 {
  /**
   * 园区名称
   * @type { string }
   * @memberof StandardModel64
   */
  ['containerName']?: string
  /**
   * 电负荷
   * @type { number }
   * @memberof StandardModel64
   */
  ['elecValue']?: number
  /**
   * 热蒸汽负荷
   * @type { number }
   * @memberof StandardModel64
   */
  ['steamValue']?: number
  /**
   * 时间
   * @type { string }
   * @memberof StandardModel64
   */
  ['time']?: string
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
 * @summary StandardModel69
 * @interface StandardModel69
 */
export interface StandardModel69 {
  /**
   * 价格
   * @type { StandardModel42[] }
   * @memberof StandardModel69
   */
  ['price']?: StandardModel42[]
  /**
   * 能源类型: GSB燃气 ICG热水 HRSG蒸汽 IV冷水 EES烟气 GWB-X需量电价 GWB-W网电电价 GWB-Z直供电价 ECR供水
   * @type { string }
   * @memberof StandardModel69
   */
  ['type']?: string
  /**
   * 价格单位
   * @type { string }
   * @memberof StandardModel69
   */
  ['unit']?: string
}

/**
 *
 * @summary StandardModel70
 * @interface StandardModel70
 */
export interface StandardModel70 {
  /**
   * 查询状态code
   * @type { number }
   * @memberof StandardModel70
   */
  ['code']?: number
  /**
   * 查询状态信息
   * @type { string }
   * @memberof StandardModel70
   */
  ['msg']?: string
  /**
   * 角色类型:seller卖方 buyer买方
   * @type { string }
   * @memberof StandardModel70
   */
  ['roleType']?: string
  /**
   * 泛能站id或者企业id
   * @type { string }
   * @memberof StandardModel70
   */
  ['systemId']?: string
  /**
   * 能源价格接口返回类型价格信息
   * @type { StandardModel69[] }
   * @memberof StandardModel70
   */
  ['typePrices']?: StandardModel69[]
}

/**
 *
 * @summary StandardModel71
 * @interface StandardModel71
 */
export interface StandardModel71 {
  /**
   * 返回消息內容
   * @type { string }
   * @memberof StandardModel71
   */
  ['msg']?: string
  /**
   * 获取业务数据接口结果业务集合
   * @type { StandardModel13[] }
   * @memberof StandardModel71
   */
  ['result']?: StandardModel13[]
  /**
   * 0:成功,其他:失败,详细:1,访问的资源不存在 2,调用方法不被支持 3,接口请求JSON数据格式错误 4,检查输入参数:参数有问题 5,运行时错误 6,HTTP请求头需要包含认证信息 7,HTTP请求头的认证信息不对 8,参数已经存在 9,参数不存在 10,信息不存在 11,结果存在 12,结果不存在
   * @type { number }
   * @memberof StandardModel71
   */
  ['retCode']?: number
}

/**
 *
 * @summary StandardModel72
 * @interface StandardModel72
 */
export interface StandardModel72 {
  /**
   *
   * @type { StandardModel23 }
   * @memberof StandardModel72
   */
  ['bigdata']?: StandardModel23
  /**
   * 用户侧消耗能源值
   * @type { StandardModel64[] }
   * @memberof StandardModel72
   */
  ['loads']?: StandardModel64[]
  /**
   * 返回消息內容
   * @type { string }
   * @memberof StandardModel72
   */
  ['msg']?: string
  /**
   * 0:成功,其他:失败,详细:1,访问的资源不存在 2,调用方法不被支持 3,接口请求JSON数据格式错误 4,检查输入参数:参数有问题 5,运行时错误 6,HTTP请求头需要包含认证信息 7,HTTP请求头的认证信息不对 8,参数已经存在 9,参数不存在 10,信息不存在 11,结果存在 12,结果不存在
   * @type { number }
   * @memberof StandardModel72
   */
  ['retCode']?: number
  /**
   * 供能站信息
   * @type { StandardModel22[] }
   * @memberof StandardModel72
   */
  ['suply']?: StandardModel22[]
  /**
   * 企业信息
   * @type { ContainerInfoResult[] }
   * @memberof StandardModel72
   */
  ['uses']?: ContainerInfoResult[]
}

/**
 *
 * @summary StandardModel73
 * @interface StandardModel73
 */
export interface StandardModel73 {
  /**
   * 城市信息集合
   * @type { StandardModel74[] }
   * @memberof StandardModel73
   */
  ['citys']?: StandardModel74[]
  /**
   * 返回消息內容
   * @type { string }
   * @memberof StandardModel73
   */
  ['msg']?: string
  /**
   * 0:成功,其他:失败,详细:1,访问的资源不存在 2,调用方法不被支持 3,接口请求JSON数据格式错误 4,检查输入参数:参数有问题 5,运行时错误 6,HTTP请求头需要包含认证信息 7,HTTP请求头的认证信息不对 8,参数已经存在 9,参数不存在 10,信息不存在 11,结果存在 12,结果不存在
   * @type { number }
   * @memberof StandardModel73
   */
  ['retCode']?: number
}

/**
 *
 * @summary StandardModel74
 * @interface StandardModel74
 */
export interface StandardModel74 {
  /**
   * 区县
   * @type { string }
   * @memberof StandardModel74
   */
  ['area']?: string
  /**
   * 城市
   * @type { string }
   * @memberof StandardModel74
   */
  ['city']?: string
  /**
   * 城市ID
   * @type { string }
   * @memberof StandardModel74
   */
  ['cityId']?: string
  /**
   * 是否获取预测信息 1:是 0或null:不是
   * @type { number }
   * @memberof StandardModel74
   */
  ['isPrediction']?: number
  /**
   * 省份
   * @type { string }
   * @memberof StandardModel74
   */
  ['province']?: string
}

/**
 *
 * @summary StandardModel75
 * @interface StandardModel75
 */
export interface StandardModel75 {
  /**
   * 城市ID
   * @type { string }
   * @memberof StandardModel75
   */
  ['cityId']?: string
  /**
   * 接口返回集合
   * @type { StandardModel78[] }
   * @memberof StandardModel75
   */
  ['times']?: StandardModel78[]
}

/**
 *
 * @summary StandardModel76
 * @interface StandardModel76
 */
export interface StandardModel76 {
  /**
   * 返回城市信息
   * @type { StandardModel75[] }
   * @memberof StandardModel76
   */
  ['citys']?: StandardModel75[]
  /**
   * 返回消息內容
   * @type { string }
   * @memberof StandardModel76
   */
  ['msg']?: string
  /**
   * 0:成功,其他:失败,详细:1,访问的资源不存在 2,调用方法不被支持 3,接口请求JSON数据格式错误 4,检查输入参数:参数有问题 5,运行时错误 6,HTTP请求头需要包含认证信息 7,HTTP请求头的认证信息不对 8,参数已经存在 9,参数不存在 10,信息不存在 11,结果存在 12,结果不存在
   * @type { number }
   * @memberof StandardModel76
   */
  ['retCode']?: number
}

/**
 *
 * @summary StandardModel77
 * @interface StandardModel77
 */
export interface StandardModel77 {
  /**
   * 城市ID
   * @type { string }
   * @memberof StandardModel77
   */
  ['cityId']?: string
  /**
   * 白天天气
   * @type { string }
   * @memberof StandardModel77
   */
  ['condition_day']?: string
  /**
   * 夜间天气
   * @type { string }
   * @memberof StandardModel77
   */
  ['condition_night']?: string
  /**
   * 天气预测时间
   * @type { string }
   * @memberof StandardModel77
   */
  ['date']?: string
  /**
   * 间隔时间
   * @type { number }
   * @memberof StandardModel77
   */
  ['daysAhead']?: number
  /**
   * 湿度
   * @type { string }
   * @memberof StandardModel77
   */
  ['humidity']?: string
  /**
   * 月相
   * @type { string }
   * @memberof StandardModel77
   */
  ['moonphase']?: string
  /**
   * 月出
   * @type { string }
   * @memberof StandardModel77
   */
  ['moonrise']?: string
  /**
   * 月落
   * @type { string }
   * @memberof StandardModel77
   */
  ['moonset']?: string
  /**
   * 日出
   * @type { string }
   * @memberof StandardModel77
   */
  ['sunrise']?: string
  /**
   * 日落
   * @type { string }
   * @memberof StandardModel77
   */
  ['sunset']?: string
  /**
   * 查询时间
   * @type { string }
   * @memberof StandardModel77
   */
  ['sys_time']?: string
  /**
   * 白天温度
   * @type { string }
   * @memberof StandardModel77
   */
  ['temp_day']?: string
  /**
   * 夜间温度
   * @type { string }
   * @memberof StandardModel77
   */
  ['temp_night']?: string
  /**
   * 白天风向角度
   * @type { string }
   * @memberof StandardModel77
   */
  ['wind_degrees_day']?: string
  /**
   * 夜间风向角度
   * @type { string }
   * @memberof StandardModel77
   */
  ['wind_degrees_night']?: string
  /**
   * 白天风向
   * @type { string }
   * @memberof StandardModel77
   */
  ['wind_dir_day']?: string
  /**
   * 夜间风向
   * @type { string }
   * @memberof StandardModel77
   */
  ['wind_dir_night']?: string
  /**
   * 白天风级
   * @type { string }
   * @memberof StandardModel77
   */
  ['wind_level_day']?: string
  /**
   * 夜间风级
   * @type { string }
   * @memberof StandardModel77
   */
  ['wind_level_night']?: string
  /**
   * 白天风速
   * @type { string }
   * @memberof StandardModel77
   */
  ['wind_speed_day']?: string
  /**
   * 夜间风速
   * @type { string }
   * @memberof StandardModel77
   */
  ['wind_speed_night']?: string
}

/**
 *
 * @summary StandardModel78
 * @interface StandardModel78
 */
export interface StandardModel78 {
  /**
   * 预测数据时间
   * @type { string }
   * @memberof StandardModel78
   */
  ['predictTime']?: string
  /**
   * 接口返回集合
   * @type { StandardModel77[] }
   * @memberof StandardModel78
   */
  ['result']?: StandardModel77[]
}

/**
 *
 * @summary StandardModel79
 * @interface StandardModel79
 */
export interface StandardModel79 {
  /**
   * 指标计算精确参数,比如查询某一个设备的用气量,精确查询和类型查询两者只能用其中的某一个,当两者都存在时,使用精确查询
   * @type { CalculateInstenceParam[] }
   * @memberof StandardModel79
   */
  ['calcInstenceParams']?: CalculateInstenceParam[]
  /**
   * 查询时间范围,距离现在多少天
   * @type { number }
   * @memberof StandardModel79
   */
  ['days']: number
  /**
   * 过滤条件，用来筛选返回结果，比如：T&lt;&#x3D;100,T&lt;100,T&gt;&#x3D;100,T&#x3D;&#x3D;100,T&gt;100
   * @type { string }
   * @memberof StandardModel79
   */
  ['filterCondition']?: string
  /**
   * 是否需要返回指标计算详情,true或false,默认false
   * @type { boolean }
   * @memberof StandardModel79
   */
  ['needParams']?: boolean
  /**
   * 指标计算时间类型,1minute 1分钟,15minute 15分钟,hour 小时级,day 天级,month 月级,year 年级
   * @type { string }
   * @memberof StandardModel79
   */
  ['timeType']: string
  /**
   * userKey
   * @type { string }
   * @memberof StandardModel79
   */
  ['userKey']: string
}

/**
 *
 * @summary StandardModel80
 * @interface StandardModel80
 */
export interface StandardModel80 {
  /**
   * 获取指标计算数据集合
   * @type { StandardModel48[] }
   * @memberof StandardModel80
   */
  ['data']?: StandardModel48[]
  /**
   * 返回消息內容
   * @type { string }
   * @memberof StandardModel80
   */
  ['msg']?: string
  /**
   * 0:成功,其他:失败,详细:1,访问的资源不存在 2,调用方法不被支持 3,接口请求JSON数据格式错误 4,检查输入参数:参数有问题 5,运行时错误 6,HTTP请求头需要包含认证信息 7,HTTP请求头的认证信息不对 8,参数已经存在 9,参数不存在 10,信息不存在 11,结果存在 12,结果不存在
   * @type { number }
   * @memberof StandardModel80
   */
  ['retCode']?: number
}

/**
 *
 * @summary StandardModel81
 * @interface StandardModel81
 */
export interface StandardModel81 {
  /**
   * 入参查询条件
   * @type { StandardModel82[] }
   * @memberof StandardModel81
   */
  ['params']?: StandardModel82[]
}

/**
 *
 * @summary StandardModel82
 * @interface StandardModel82
 */
export interface StandardModel82 {
  /**
   * 城市ID
   * @type { string }
   * @memberof StandardModel82
   */
  ['cityId']?: string
  /**
   * 查询结束时间,格式:yyyy-MM-dd HH:mm:ss
   * @type { string }
   * @memberof StandardModel82
   */
  ['endTime']?: string
  /**
   * 间隔小时数,指定获取间隔几小时的数据,为空则返回全部的天气预测数据
   * @type { number }
   * @memberof StandardModel82
   */
  ['hourInterval']?: number
  /**
   * 预测时间,格式:yyyy-MM-dd HH:mm:ss,什么时间预测的天气数据,当输入预测时间时,以预测时间为准,起始结束时间不用。
   * @type { string }
   * @memberof StandardModel82
   */
  ['predictDate']?: string
  /**
   * 查询开始时间,格式:yyyy-MM-dd HH:mm:ss
   * @type { string }
   * @memberof StandardModel82
   */
  ['startTime']?: string
}

/**
 *
 * @summary StandardModel83
 * @interface StandardModel83
 */
export interface StandardModel83 {
  /**
   * 预测时间
   * @type { string }
   * @memberof StandardModel83
   */
  ['predictTime']?: string
  /**
   * 预测时间对应的天气预测集合
   * @type { StandardModel86[] }
   * @memberof StandardModel83
   */
  ['result']?: StandardModel86[]
}

/**
 *
 * @summary StandardModel84
 * @interface StandardModel84
 */
export interface StandardModel84 {
  /**
   * 接口返回集合
   * @type { StandardModel85[] }
   * @memberof StandardModel84
   */
  ['citys']?: StandardModel85[]
  /**
   * 返回消息內容
   * @type { string }
   * @memberof StandardModel84
   */
  ['msg']?: string
  /**
   * 0:成功,其他:失败,详细:1,访问的资源不存在 2,调用方法不被支持 3,接口请求JSON数据格式错误 4,检查输入参数:参数有问题 5,运行时错误 6,HTTP请求头需要包含认证信息 7,HTTP请求头的认证信息不对 8,参数已经存在 9,参数不存在 10,信息不存在 11,结果存在 12,结果不存在
   * @type { number }
   * @memberof StandardModel84
   */
  ['retCode']?: number
}

/**
 *
 * @summary StandardModel85
 * @interface StandardModel85
 */
export interface StandardModel85 {
  /**
   * 城市ID
   * @type { string }
   * @memberof StandardModel85
   */
  ['cityId']?: string
  /**
   * 城市对应天气时间集合
   * @type { StandardModel83[] }
   * @memberof StandardModel85
   */
  ['times']?: StandardModel83[]
}

/**
 *
 * @summary StandardModel86
 * @interface StandardModel86
 */
export interface StandardModel86 {
  /**
   * 城市ID
   * @type { string }
   * @memberof StandardModel86
   */
  ['cityId']?: string
  /**
   * 预测时间间隔
   * @type { number }
   * @memberof StandardModel86
   */
  ['hoursAhead']?: number
  /**
   * 湿度
   * @type { string }
   * @memberof StandardModel86
   */
  ['humidity']?: string
  /**
   * 降水概率
   * @type { string }
   * @memberof StandardModel86
   */
  ['pop']?: string
  /**
   * 气压
   * @type { string }
   * @memberof StandardModel86
   */
  ['pressure']?: string
  /**
   * 定量降水预报（mm）
   * @type { string }
   * @memberof StandardModel86
   */
  ['qpf']?: string
  /**
   * 体感温度
   * @type { string }
   * @memberof StandardModel86
   */
  ['realFeel']?: string
  /**
   * 降雪量
   * @type { string }
   * @memberof StandardModel86
   */
  ['snow']?: string
  /**
   * 查询时间
   * @type { string }
   * @memberof StandardModel86
   */
  ['sysTime']?: string
  /**
   * 实时温度
   * @type { string }
   * @memberof StandardModel86
   */
  ['temp']?: string
  /**
   * 预报时间
   * @type { string }
   * @memberof StandardModel86
   */
  ['time']?: string
  /**
   * 紫外线强度
   * @type { string }
   * @memberof StandardModel86
   */
  ['uvi']?: string
  /**
   * 天气状况
   * @type { string }
   * @memberof StandardModel86
   */
  ['weather']?: string
  /**
   * 风向角度
   * @type { string }
   * @memberof StandardModel86
   */
  ['windDegrees']?: string
  /**
   * 风向
   * @type { string }
   * @memberof StandardModel86
   */
  ['windDir']?: string
  /**
   * 风级
   * @type { string }
   * @memberof StandardModel86
   */
  ['windLevel']?: string
  /**
   * 风速
   * @type { string }
   * @memberof StandardModel86
   */
  ['windSpeed']?: string
}

/**
 *
 * @summary StandardModel87
 * @interface StandardModel87
 */
export interface StandardModel87 {
  /**
   * 业务code
   * @type { string }
   * @memberof StandardModel87
   */
  ['calcCode']: string
  /**
   * 设备id
   * @type { string }
   * @memberof StandardModel87
   */
  ['deviceId']?: string
  /**
   * 系统Code
   * @type { string }
   * @memberof StandardModel87
   */
  ['systemCode']?: string
}

/**
 *
 * @summary StandardModel88
 * @interface StandardModel88
 */
export interface StandardModel88 {
  /**
   * 指标计算code
   * @type { string }
   * @memberof StandardModel88
   */
  ['calcCode']?: string
  /**
   * deviceId
   * @type { string }
   * @memberof StandardModel88
   */
  ['deviceId']?: string
  /**
   * 指标参数列表
   * @type { StandardModel34[] }
   * @memberof StandardModel88
   */
  ['params']?: StandardModel34[]
  /**
   * systemCode
   * @type { string }
   * @memberof StandardModel88
   */
  ['systemCode']?: string
}

/**
 *
 * @summary StandardModel89
 * @interface StandardModel89
 */
export interface StandardModel89 {
  /**
   * 聚合方法(sum,avg,max,min),查询起始结束时间内聚合方法的结果,该功能和过滤条件功能只能二选一。
   * @type { string }
   * @memberof StandardModel89
   */
  ['aggregator']?: string
  /**
   * 指标计算精确参数,比如查询某一个设备的用气量,精确查询和类型查询两者只能用其中的某一个,当两者都存在时,使用精确查询
   * @type { CalculateInstenceParam[] }
   * @memberof StandardModel89
   */
  ['calcInstenceParams']?: CalculateInstenceParam[]
  /**
   *
   * @type { CalculateTypeParam }
   * @memberof StandardModel89
   */
  ['calcTypeParam']?: CalculateTypeParam
  /**
   * 检查该指标是否存在,true或false,默认false
   * @type { boolean }
   * @memberof StandardModel89
   */
  ['check']?: boolean
  /**
   * 查询结束时间,yyyy-MM-dd HH:mm:ss
   * @type { string }
   * @memberof StandardModel89
   */
  ['endTime']: string
  /**
   * 过滤条件，用来筛选返回结果，比如：T&lt;&#x3D;100,T&lt;100,T&gt;&#x3D;100,T&#x3D;&#x3D;100,T&gt;100,该功能和聚合方法功能只能二选一。
   * @type { string }
   * @memberof StandardModel89
   */
  ['filterCondition']?: string
  /**
   * 是否需要返回指标计算详情,true或false,默认false
   * @type { boolean }
   * @memberof StandardModel89
   */
  ['needParams']?: boolean
  /**
   * 查询起始时间,yyyy-MM-dd HH:mm:ss
   * @type { string }
   * @memberof StandardModel89
   */
  ['startTime']: string
  /**
   * 指标计算时间类型,1minute 1分钟,15minute 15分钟,hour 小时级,day 天级,month 月级,year 年级
   * @type { string }
   * @memberof StandardModel89
   */
  ['timeType']: string
  /**
   * userKey
   * @type { string }
   * @memberof StandardModel89
   */
  ['userKey']: string
}

/**
 *
 * @summary StandardModel90
 * @interface StandardModel90
 */
export interface StandardModel90 {
  /**
   * 获取指标计算数据集合
   * @type { StandardModel49[] }
   * @memberof StandardModel90
   */
  ['data']?: StandardModel49[]
  /**
   * 返回消息內容
   * @type { string }
   * @memberof StandardModel90
   */
  ['msg']?: string
  /**
   * 0:成功,其他:失败,详细:1,访问的资源不存在 2,调用方法不被支持 3,接口请求JSON数据格式错误 4,检查输入参数:参数有问题 5,运行时错误 6,HTTP请求头需要包含认证信息 7,HTTP请求头的认证信息不对 8,参数已经存在 9,参数不存在 10,信息不存在 11,结果存在 12,结果不存在
   * @type { number }
   * @memberof StandardModel90
   */
  ['retCode']?: number
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
 * @summary StandardModel96
 * @interface StandardModel96
 */
export interface StandardModel96 {
  /**
   * 设备列表
   * @type { StandardModel60[] }
   * @memberof StandardModel96
   */
  ['listQueries']?: StandardModel60[]
  /**
   * userKey
   * @type { string }
   * @memberof StandardModel96
   */
  ['userKey']: string
}

/**
 *
 * @summary StandardModel97
 * @interface StandardModel97
 */
export interface StandardModel97 {
  /**
   * 园区id
   * @type { string }
   * @memberof StandardModel97
   */
  ['parkId']: string
  /**
   * 企业id或者泛能站id
   * @type { string[] }
   * @memberof StandardModel97
   */
  ['systemId']: string[]
  /**
   * 时间(天)
   * @type { string }
   * @memberof StandardModel97
   */
  ['time']: string
}

/**
 *
 * @summary StandardModel98
 * @interface StandardModel98
 */
export interface StandardModel98 {
  /**
   * 返回消息內容
   * @type { string }
   * @memberof StandardModel98
   */
  ['msg']?: string
  /**
   * 泛能站能源价格接口返回结果参数
   * @type { StandardModel70[] }
   * @memberof StandardModel98
   */
  ['priceResult']?: StandardModel70[]
  /**
   * 0:成功,其他:失败,详细:1,访问的资源不存在 2,调用方法不被支持 3,接口请求JSON数据格式错误 4,检查输入参数:参数有问题 5,运行时错误 6,HTTP请求头需要包含认证信息 7,HTTP请求头的认证信息不对 8,参数已经存在 9,参数不存在 10,信息不存在 11,结果存在 12,结果不存在
   * @type { number }
   * @memberof StandardModel98
   */
  ['retCode']?: number
}

/**
 *
 * @summary StandardModel99
 * @interface StandardModel99
 */
export interface StandardModel99 {
  /**
   * 设备编码
   * @type { string }
   * @memberof StandardModel99
   */
  ['deviceId']: string
  /**
   * 设备数值主键标识,当该参数有值时,deviceId与stationId取值无效
   * @type { number }
   * @memberof StandardModel99
   */
  ['devicePrimaryId']?: number
  /**
   * 当前页面
   * @type { number }
   * @memberof StandardModel99
   */
  ['pageNumber']: number
  /**
   * 页面大小
   * @type { number }
   * @memberof StandardModel99
   */
  ['pageSize']: number
  /**
   * 采集点编码,模糊匹配
   * @type { string }
   * @memberof StandardModel99
   */
  ['pointCode']?: string
  /**
   * 采集点名称,模糊数据匹配
   * @type { string }
   * @memberof StandardModel99
   */
  ['pointName']?: string
  /**
   * 站点标识
   * @type { string }
   * @memberof StandardModel99
   */
  ['stationId']: string
}

/**
 *
 * @summary StandardModel100
 * @interface StandardModel100
 */
export interface StandardModel100 {
  /**
   * 设备列表
   * @type { StandardModel101[] }
   * @memberof StandardModel100
   */
  ['listQueries']?: StandardModel101[]
  /**
   * 查询起始时间,查询结果包含该时间点
   * @type { string }
   * @memberof StandardModel100
   */
  ['startTime']?: string
  /**
   * userKey
   * @type { string }
   * @memberof StandardModel100
   */
  ['userKey']: string
}

/**
 *
 * @summary StandardModel101
 * @interface StandardModel101
 */
export interface StandardModel101 {
  /**
   * 业务域
   * @type { string }
   * @memberof StandardModel101
   */
  ['domain']: string
  /**
   * 设备id
   * @type { string }
   * @memberof StandardModel101
   */
  ['equipID']: string
  /**
   * 设备类型
   * @type { string }
   * @memberof StandardModel101
   */
  ['equipMK']: string
  /**
   * 站ID
   * @type { string }
   * @memberof StandardModel101
   */
  ['systemCode']: string
}

/**
 *
 * @summary StandardModel102
 * @interface StandardModel102
 */
export interface StandardModel102 {
  /**
   * 城市id
   * @type { string }
   * @memberof StandardModel102
   */
  ['cityid']: string
  /**
   * 查询时间
   * @type { string }
   * @memberof StandardModel102
   */
  ['date']: string
  /**
   * 小时倍数，1,2...
   * @type { string }
   * @memberof StandardModel102
   */
  ['intervalHour']?: string
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
 * @summary StandardModel104
 * @interface StandardModel104
 */
export interface StandardModel104 {
  /**
   *
   * @type { DataCheckResult }
   * @memberof StandardModel104
   */
  ['data']?: DataCheckResult
  /**
   * 返回消息內容
   * @type { string }
   * @memberof StandardModel104
   */
  ['msg']?: string
  /**
   * 0:成功,其他:失败,详细:1,访问的资源不存在 2,调用方法不被支持 3,接口请求JSON数据格式错误 4,检查输入参数:参数有问题 5,运行时错误 6,HTTP请求头需要包含认证信息 7,HTTP请求头的认证信息不对 8,参数已经存在 9,参数不存在 10,信息不存在 11,结果存在 12,结果不存在
   * @type { number }
   * @memberof StandardModel104
   */
  ['retCode']?: number
}

/**
 *
 * @summary StandardModel105
 * @interface StandardModel105
 */
export interface StandardModel105 {
  /**
   *
   * @type { DataCheckDetail }
   * @memberof StandardModel105
   */
  ['data']?: DataCheckDetail
  /**
   * 返回消息內容
   * @type { string }
   * @memberof StandardModel105
   */
  ['msg']?: string
  /**
   * 0:成功,其他:失败,详细:1,访问的资源不存在 2,调用方法不被支持 3,接口请求JSON数据格式错误 4,检查输入参数:参数有问题 5,运行时错误 6,HTTP请求头需要包含认证信息 7,HTTP请求头的认证信息不对 8,参数已经存在 9,参数不存在 10,信息不存在 11,结果存在 12,结果不存在
   * @type { number }
   * @memberof StandardModel105
   */
  ['retCode']?: number
}

/**
 *
 * @summary StandardModel106
 * @interface StandardModel106
 */
export interface StandardModel106 {
  /**
   * 智慧检测项基本信息
   * @type { DataCheckDetail[] }
   * @memberof StandardModel106
   */
  ['data']?: DataCheckDetail[]
  /**
   * 返回消息內容
   * @type { string }
   * @memberof StandardModel106
   */
  ['msg']?: string
  /**
   * 0:成功,其他:失败,详细:1,访问的资源不存在 2,调用方法不被支持 3,接口请求JSON数据格式错误 4,检查输入参数:参数有问题 5,运行时错误 6,HTTP请求头需要包含认证信息 7,HTTP请求头的认证信息不对 8,参数已经存在 9,参数不存在 10,信息不存在 11,结果存在 12,结果不存在
   * @type { number }
   * @memberof StandardModel106
   */
  ['retCode']?: number
}

/**
 *
 * @summary StandardModel107
 * @interface StandardModel107
 */
export interface StandardModel107 {
  /**
   * 返回消息內容
   * @type { string }
   * @memberof StandardModel107
   */
  ['msg']?: string
  /**
   * 小时级天气
   * @type { StandardModel27[] }
   * @memberof StandardModel107
   */
  ['result']?: StandardModel27[]
  /**
   * 0:成功,其他:失败,详细:1,访问的资源不存在 2,调用方法不被支持 3,接口请求JSON数据格式错误 4,检查输入参数:参数有问题 5,运行时错误 6,HTTP请求头需要包含认证信息 7,HTTP请求头的认证信息不对 8,参数已经存在 9,参数不存在 10,信息不存在 11,结果存在 12,结果不存在
   * @type { number }
   * @memberof StandardModel107
   */
  ['retCode']?: number
}

/**
 *
 * @summary StandardModel108
 * @interface StandardModel108
 */
export interface StandardModel108 {
  /**
   * 结果集合
   * @type { StandardModel36[] }
   * @memberof StandardModel108
   */
  ['data']?: StandardModel36[]
  /**
   * 返回消息內容
   * @type { string }
   * @memberof StandardModel108
   */
  ['msg']?: string
  /**
   * 0:成功,其他:失败,详细:1,访问的资源不存在 2,调用方法不被支持 3,接口请求JSON数据格式错误 4,检查输入参数:参数有问题 5,运行时错误 6,HTTP请求头需要包含认证信息 7,HTTP请求头的认证信息不对 8,参数已经存在 9,参数不存在 10,信息不存在 11,结果存在 12,结果不存在
   * @type { number }
   * @memberof StandardModel108
   */
  ['retCode']?: number
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
 * @summary StandardModel110
 * @interface StandardModel110
 */
export interface StandardModel110 {}

/**
 *
 * @summary StandardRequestBody0
 * @interface StandardRequestBody0
 * @description req
 * @required true
 */
export type StandardRequestBody0 = StandardModel10

/**
 *
 * @summary StandardRequestBody0
 * @interface StandardRequestBody0
 */
export interface StandardRequestBody0 {}

/**
 *
 * @summary StandardRequestBody1
 * @interface StandardRequestBody1
 * @description req
 * @required true
 */
export type StandardRequestBody1 = StandardModel81

/**
 *
 * @summary StandardRequestBody1
 * @interface StandardRequestBody1
 */
export interface StandardRequestBody1 {}

/**
 *
 * @summary SwitchRouteReq
 * @interface SwitchRouteReq
 * @description req
 * @required true
 */
/**
 *
 * @summary SwitchRouteReq
 * @interface SwitchRouteReq
 */
export interface SwitchRouteReq {}

/**
 *
 * @summary StandardRequestBody2
 * @interface StandardRequestBody2
 * @description req
 * @required true
 */
export type StandardRequestBody2 = StandardModel35

/**
 *
 * @summary StandardRequestBody2
 * @interface StandardRequestBody2
 */
export interface StandardRequestBody2 {}

/**
 *
 * @summary StandardRequestBody3
 * @interface StandardRequestBody3
 * @description req
 * @required true
 */
export type StandardRequestBody3 = StandardModel31

/**
 *
 * @summary StandardRequestBody3
 * @interface StandardRequestBody3
 */
export interface StandardRequestBody3 {}

/**
 *
 * @summary GetProvideConsumeRequest
 * @interface GetProvideConsumeRequest
 * @description 查询园区产耗能信息条件
 * @required true
 */
/**
 *
 * @summary GetProvideConsumeRequest
 * @interface GetProvideConsumeRequest
 */
export interface GetProvideConsumeRequest {}

/**
 *
 * @summary RouteWhiteListReq
 * @interface RouteWhiteListReq
 * @description req
 * @required true
 */
/**
 *
 * @summary RouteWhiteListReq
 * @interface RouteWhiteListReq
 */
export interface RouteWhiteListReq {}

/**
 * @tags 数据检测接口API
 * @summary 执行数据检测规则
 * @param {DataCheckExecuteParam} [body] executeParam
 * @param {AxiosInstance} local_options
 */
export const postDataCheckExecute = async (
  body?: DataCheckExecuteParam,
  local_options?: AxiosInstance
): Promise<StandardModel104> => {
  let local_url = '/data-check/execute'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel104>
}

/**
 * @tags 数据检测接口API
 * @summary 执行指定站指定设备类型的数据检测规则
 * @param {string} stationID stationID
 * @param {string} deviceType deviceType
 * @param {string} ruleCode ruleCode
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const getDataCheckExecuteBatch = async (
  stationID: string,
  deviceType: string,
  ruleCode?: string,
  local_options?: AxiosInstance
): Promise<StandardModel104> => {
  let local_url = '/data-check/execute/batch/'

  let local_params = {
    stationID,
    deviceType,
    ruleCode,
  }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel104>
}

/**
 * @tags 数据检测接口API
 * @summary 批量查询数据检测规则详细信息
 * @param {DataCheckQueryParam} [body] queryParam
 * @param {AxiosInstance} local_options
 */
export const postDataCheckQueryDetail = async (
  body?: DataCheckQueryParam,
  local_options?: AxiosInstance
): Promise<StandardModel106> => {
  let local_url = '/data-check/query/detail/'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel106>
}

/**
 * @tags 数据检测接口API
 * @summary 查询数据检测规则详细信息
 * @param {string} deviceType 设备类型
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const getDataCheckQueryDetailByDeviceType = async (
  deviceType: string,
  local_options?: AxiosInstance
): Promise<StandardModel105> => {
  let local_url = '/data-check/query/detail/{deviceType}'
  local_url = local_url.replace(
    '{deviceType}',
    encodeURIComponent(String(deviceType))
  )

  let local_params = {
    deviceType,
  }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel105>
}

/**
 * @tags 数据服务接口API
 * @summary 接收数据点数据
 * @param {Sourcedata} [body] 根据条件接收数据点数据
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataAcceptSourcedata = async (
  body?: Sourcedata,
  local_options?: AxiosInstance
): Promise<DataResult> => {
  let local_url = '/internal/bigdata/accept/sourcedata'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<DataResult>
}

/**
 * @tags 算法服务接口API
 * @summary 指数平滑法
 * @param {StandardModel14} [body] req
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataAlgorithmPrimaryIndex = async (
  body?: StandardModel14,
  local_options?: AxiosInstance
): Promise<StandardModel15> => {
  let local_url = '/internal/bigdata/algorithm/primary_index'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel15>
}

/**
 * @tags 算法服务接口API
 * @summary 移动平均法
 * @param {StandardModel18} [body] req
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataAlgorithmSecondMovingAverage = async (
  body?: StandardModel18,
  local_options?: AxiosInstance
): Promise<StandardModel19> => {
  let local_url = '/internal/bigdata/algorithm/second_moving_average'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel19>
}

/**
 * @tags 算法服务接口API
 * @summary 抛物线算法
 * @param {StandardModel38} [body] req
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataAlgorithmThirdParabola = async (
  body?: StandardModel38,
  local_options?: AxiosInstance
): Promise<StandardModel39> => {
  let local_url = '/internal/bigdata/algorithm/third_parabola'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel39>
}

/**
 * @tags 数据服务接口API
 * @summary 业务数据接口
 * @param {StandardModel46} [body] 业务数据查询条件
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataBusinessGet = async (
  body?: StandardModel46,
  local_options?: AxiosInstance
): Promise<StandardModel71> => {
  let local_url = '/internal/bigdata/business/get'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel71>
}

/**
 * @tags 指标计算接口API
 * @summary 查询尖峰平谷数据
 * @param {SpecificCalculateResultReq} [body] request
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataCalculationGetSpecificResult = async (
  body?: SpecificCalculateResultReq,
  local_options?: AxiosInstance
): Promise<StandardModel104> => {
  let local_url = '/internal/bigdata/calculation/get-specific-result'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel104>
}

/**
 * @tags 指标计算接口API
 * @summary 查询指标计算参数
 * @param {StandardModel87} [body] req
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataCalculationGetParams = async (
  body?: StandardModel87,
  local_options?: AxiosInstance
): Promise<StandardModel88> => {
  let local_url = '/internal/bigdata/calculation/get_params'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel88>
}

/**
 * @tags 指标计算接口API
 * @summary 查询指标计算数据
 * @param {StandardModel89} [body] req
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataCalculationGetResult = async (
  body?: StandardModel89,
  local_options?: AxiosInstance
): Promise<StandardModel90> => {
  let local_url = '/internal/bigdata/calculation/get_result'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel90>
}

/**
 * @tags 根据园区获取指标结果接口API
 * @summary 根据园区查询指标计算数据
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataCalculationParkResult = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<StandardModel108> => {
  let local_url = '/internal/bigdata/calculation/park/result'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel108>
}

/**
 * @tags 根据园区获取指标结果接口API
 * @summary 同步指标结果到mysql
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataCalculationParkResultSync = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<StandardModel108> => {
  let local_url = '/internal/bigdata/calculation/park/result/sync'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel108>
}

/**
 * @tags 指标计算接口API
 * @summary 查询实时指标计算数据
 * @param {StandardModel79} [body] req
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataCalculationRealtimeGetResult = async (
  body?: StandardModel79,
  local_options?: AxiosInstance
): Promise<StandardModel80> => {
  let local_url = '/internal/bigdata/calculation/realtime/get_result'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel80>
}

/**
 * @tags cim加工接口API
 * @summary 获取采集点接口
 * @param {StandardModel99} [body] req
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataCimProcessGetMetric = async (
  body?: StandardModel99,
  local_options?: AxiosInstance
): Promise<StandardModel51> => {
  let local_url = '/internal/bigdata/cim_process/get_metric'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel51>
}

/**
 * @tags 数据服务接口API
 * @summary 获取设备/测点最早最新上数时间
 * @param {StandardModel96} [body] req
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataDeviceLatestInfo = async (
  body?: StandardModel96,
  local_options?: AxiosInstance
): Promise<StandardModel37> => {
  let local_url = '/internal/bigdata/deviceLatestInfo'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel37>
}

/**
 * @tags 数据服务接口API
 * @summary 查询园区产耗能信息
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataEnergyGetSupplyConsume = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<StandardModel72> => {
  let local_url = '/internal/bigdata/energy/get_supply_consume'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel72>
}

/**
 * @tags 数据服务接口API
 * @summary 预测园区产耗能信息
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataEnergyPredictGetSupplyConsume = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<StandardModel72> => {
  let local_url = '/internal/bigdata/energy/predict/get_supply_consume'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel72>
}

/**
 * @tags 价格接口API
 * @summary 能源价格接口(已废弃)
 * @param {StandardModel97} [body] req
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataEnergyPrice = async (
  body?: StandardModel97,
  local_options?: AxiosInstance
): Promise<StandardModel98> => {
  let local_url = '/internal/bigdata/energy/price'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel98>
}

/**
 * @tags 气象服务接口API
 * @summary 湿球温度接口
 * @param {string} humidity humidity
 * @param {string} dryball dryball
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataGetWetBallByDryball = async (
  humidity: string,
  dryball: string,
  body?: any,
  local_options?: AxiosInstance
): Promise<StandardModel62> => {
  let local_url = '/internal/bigdata/getWetBall/{humidity}/{dryball}'
  local_url = local_url
    .replace('{humidity}', encodeURIComponent(String(humidity)))
    .replace('{dryball}', encodeURIComponent(String(dryball)))

  let local_params = {
    humidity,
    dryball,
  }
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel62>
}

/**
 * @tags 气象服务接口API
 * @summary 湿球温度单值接口
 * @param {number} humidity humidity
 * @param {number} dryball dryball
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataGetWetBallOneByDryball = async (
  humidity: number,
  dryball: number,
  body?: any,
  local_options?: AxiosInstance
): Promise<number> => {
  let local_url = '/internal/bigdata/getWetBallOne/{humidity}/{dryball}'
  local_url = local_url
    .replace('{humidity}', encodeURIComponent(String(humidity)))
    .replace('{dryball}', encodeURIComponent(String(dryball)))

  let local_params = {
    humidity,
    dryball,
  }
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<number>
}

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
 * @tags 数据服务接口API
 * @summary hbase数据接口
 * @param {StandardModel5} [body] req
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataHbaseGetData = async (
  body?: StandardModel5,
  local_options?: AxiosInstance
): Promise<StandardModel7> => {
  let local_url = '/internal/bigdata/hbase/get_data'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel7>
}

/**
 * @tags 气象服务接口API
 * @summary 历史天气城市接口
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataHistoryGetCity = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<StandardModel107> => {
  let local_url = '/internal/bigdata/history/get_city'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel107>
}

/**
 * @tags 气象服务接口API
 * @summary 历史天气接口
 * @param {StandardModel102} [body] req
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataHistoryGetWeather = async (
  body?: StandardModel102,
  local_options?: AxiosInstance
): Promise<StandardModel107> => {
  let local_url = '/internal/bigdata/history/get_weather'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel107>
}

/**
 * @tags 智慧算法公共服务
 * @summary 获取数据
 * @param {string} startTime startTime
 * @param {string} endTime endTime
 * @param {string} domain domain
 * @param {string} aliasId aliasId
 * @param {string} deviceType deviceType
 * @param {string} deviceId deviceId
 * @param {string} metric metric
 * @param {string} standard standard
 * @param {string} aggregator aggregator
 * @param {string} downsample downsample
 * @param {string} condition condition
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataIntelligentAlgorithmGetDatasByParams = async (
  startTime?: string,
  endTime?: string,
  domain?: string,
  aliasId?: string,
  deviceType?: string,
  deviceId?: string,
  metric?: string,
  standard?: string,
  aggregator?: string,
  downsample?: string,
  condition?: string,
  body?: any,
  local_options?: AxiosInstance
): Promise<DataResult> => {
  let local_url = '/internal/bigdata/intelligent/algorithm/getDatasByParams'

  let local_params = {
    startTime,
    endTime,
    domain,
    aliasId,
    deviceType,
    deviceId,
    metric,
    standard,
    aggregator,
    downsample,
    condition,
  }
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<DataResult>
}

/**
 * @tags 智慧算法公共服务
 * @summary 获取数据点
 * @param {string} startTime startTime
 * @param {string} endTime endTime
 * @param {string} domain domain
 * @param {string} aliasId aliasId
 * @param {string} deviceType deviceType
 * @param {string} deviceId deviceId
 * @param {string} metric metric
 * @param {string} standard standard
 * @param {string} aggregator aggregator
 * @param {string} downsample downsample
 * @param {string} condition condition
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataIntelligentAlgorithmGetRecentCollectPointData =
  async (
    startTime?: string,
    endTime?: string,
    domain?: string,
    aliasId?: string,
    deviceType?: string,
    deviceId?: string,
    metric?: string,
    standard?: string,
    aggregator?: string,
    downsample?: string,
    condition?: string,
    body?: any,
    local_options?: AxiosInstance
  ): Promise<StandardModel4> => {
    let local_url =
      '/internal/bigdata/intelligent/algorithm/getRecentCollectPointData'

    let local_params = {
      startTime,
      endTime,
      domain,
      aliasId,
      deviceType,
      deviceId,
      metric,
      standard,
      aggregator,
      downsample,
      condition,
    }
    let local_body = body || {}
    const result = (await fetch({
      url: local_url,
      method: 'post',
      params: local_params,
      data: local_body,
      ...(local_options || {}),
    })) as unknown
    return result as Promise<StandardModel4>
  }

/**
 * @tags json映射API
 * @summary 根据jsonmapping的id获取结果
 * @param {string} name name
 * @param {string} [body] actualParameters
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataJsonmappingNameByName = async (
  name: string,
  body?: string,
  local_options?: AxiosInstance
): Promise<string> => {
  let local_url = '/internal/bigdata/jsonmapping/name/{name}'
  local_url = local_url.replace('{name}', encodeURIComponent(String(name)))

  let local_params = {
    name,
  }
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<string>
}

/**
 * @tags 元数据接口API
 * @summary 根据业务域查看数据库连接信息
 * @param {string} domain domain
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const getInternalBigdataMetadataBusinessdatabaseSelect = async (
  domain?: string,
  local_options?: AxiosInstance
): Promise<StandardModel44> => {
  let local_url = '/internal/bigdata/metadata/businessdatabase_select'

  let local_params = {
    domain,
  }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel44>
}

/**
 * @tags 元数据接口API
 * @summary 判断datacode是否存在
 * @param {string} datacode datacode
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const getInternalBigdataMetadataDatacodeExist = async (
  datacode?: string,
  local_options?: AxiosInstance
): Promise<StandardModel25> => {
  let local_url = '/internal/bigdata/metadata/datacode_exist'

  let local_params = {
    datacode,
  }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel25>
}

/**
 * @tags 元数据接口API
 * @summary 根据条件查看datacode数据
 * @param {StandardModel54} [body] req
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataMetadataParamQuery = async (
  body?: StandardModel54,
  local_options?: AxiosInstance
): Promise<StandardModel55> => {
  let local_url = '/internal/bigdata/metadata/param_query'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel55>
}

/**
 * @tags 新版气象服务接口API
 * @summary 获取城市信息
 * @param {number} pageNum 当前页
 * @param {number} pageSize 页数量
 * @param {string} provinceName 省份
 * @param {string} cityName 城市
 * @param {number} isPrediction 是否获取预测信息
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataNewWeatherCity = async (
  pageNum: number,
  pageSize: number,
  provinceName?: string,
  cityName?: string,
  isPrediction?: number,
  body?: any,
  local_options?: AxiosInstance
): Promise<StandardModel73> => {
  let local_url = '/internal/bigdata/new/weather/city'

  let local_params = {
    pageNum,
    pageSize,
    provinceName,
    cityName,
    isPrediction,
  }
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel73>
}

/**
 * @tags 新版气象服务接口API
 * @summary 获取天级天气数据
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataNewWeatherDayData = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<StandardModel76> => {
  let local_url = '/internal/bigdata/new/weather/day/data'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel76>
}

/**
 * @tags 新版气象服务接口API
 * @summary 获取小时级天气数据
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataNewWeatherHourData = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<StandardModel84> => {
  let local_url = '/internal/bigdata/new/weather/hour/data'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel84>
}

/**
 * @tags 指标计算接口API
 * @summary 全局路由关闭-(仅作测试和服务降级使用-不对外)
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataSwitchClose = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<StandardModel104> => {
  let local_url = '/internal/bigdata/switch/close'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel104>
}

/**
 * @tags 指标计算接口API
 * @summary 全局路由开启-(仅作测试和服务降级使用-不对外)
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataSwitchOpen = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<StandardModel104> => {
  let local_url = '/internal/bigdata/switch/open'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel104>
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

/**
 * @tags 数据服务接口API
 * @summary 实时设备数据接口
 * @param {StandardModel100} [body] req
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataTimeSeriesGetDeviceRealTime = async (
  body?: StandardModel100,
  local_options?: AxiosInstance
): Promise<StandardModel33> => {
  let local_url = '/internal/bigdata/time_series/get_device_real_time'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel33>
}

/**
 * @tags 数据服务接口API
 * @summary 历史时序数据接口
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataTimeSeriesGetHistory = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<StandardModel11> => {
  let local_url = '/internal/bigdata/time_series/get_history'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel11>
}

/**
 * @tags 数据服务接口API
 * @summary 实时数据接口
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataTimeSeriesGetRealTime = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<StandardModel32> => {
  let local_url = '/internal/bigdata/time_series/get_real_time'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel32>
}

/**
 * @tags 气象服务接口API
 * @summary 天气预报接口
 * @param {number} hourNum 小时数
 * @param {string} cityId 城市id
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const getInternalBigdataWeatherGetPrediction = async (
  hourNum: number,
  cityId: string,
  local_options?: AxiosInstance
): Promise<StandardModel29> => {
  let local_url = '/internal/bigdata/weather/get_prediction'

  let local_params = {
    hourNum,
    cityId,
  }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel29>
}

/**
 * @tags 数据服务接口核对API-不对外
 * @summary 企业路由白名单添加-(仅作测试使用-不对外)
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataCheckAddWhiteList = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<StandardModel104> => {
  let local_url = '/internal/bigdataCheck/addWhiteList'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel104>
}

/**
 * @tags 数据服务接口核对API-不对外
 * @summary 企业路由白名单删除-(仅作测试使用-不对外)
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataCheckDelWhiteList = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<StandardModel104> => {
  let local_url = '/internal/bigdataCheck/delWhiteList'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel104>
}

/**
 * @tags 数据服务接口核对API-不对外
 * @summary 历史时序数据接口-核对Api-不对外
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataCheckTimeSeriesGetHistoryCheck = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<StandardModel11> => {
  let local_url = '/internal/bigdataCheck/time_series/get_history_check'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel11>
}

/**
 * @tags 数据服务接口核对API-不对外
 * @summary 实时数据接口-核对Api-不对外
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postInternalBigdataCheckTimeSeriesGetRealTimeCheck = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<StandardModel32> => {
  let local_url = '/internal/bigdataCheck/time_series/get_real_time_check'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel32>
}

/**
 * @tags 运维管理
 * @summary 根据园区id获取拓扑信息
 * @param {number} systemId systemId
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const getOperationApiByBySystemId = async (
  systemId: number,
  local_options?: AxiosInstance
): Promise<DataResultListTopologyResultVO> => {
  let local_url = '/operation/api/by/{systemId}'
  local_url = local_url.replace(
    '{systemId}',
    encodeURIComponent(String(systemId))
  )

  let local_params = {
    systemId,
  }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<DataResultListTopologyResultVO>
}

/**
 * @tags 用户行为接口
 * @summary 根据systemCode查询pvuv
 * @param {string} systemCode 多个systemCode用英文","隔开
 * @param {string} date 日期,格式:yyyy-MM-dd
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postUserBehaviorQuery = async (
  systemCode?: string,
  date?: string,
  body?: any,
  local_options?: AxiosInstance
): Promise<Response> => {
  let local_url = '/userBehavior/query'

  let local_params = {
    systemCode,
    date,
  }
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<Response>
}

/**
 * @tags user-key-action
 * @summary change userkey(内部使用，请勿调用)
 * @param {string} token token
 * @param {string} userKey userKey
 * @param {string} isNewDB isNewDB
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const getUserkeyChange = async (
  token: string,
  userKey: string,
  isNewDB: string,
  local_options?: AxiosInstance
): Promise<string> => {
  let local_url = '/userkey/change'

  let local_params = {
    token,
    userKey,
    isNewDB,
  }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<string>
}

/**
 * @tags user-key-action
 * @summary 生成 userkey(内部使用，请勿调用)
 * @param {string} appid appid
 * @param {string} user user
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const getUserkeyCreateByUser = async (
  appid: string,
  user: string,
  local_options?: AxiosInstance
): Promise<string> => {
  let local_url = '/userkey/create/{appid}/{user}'
  local_url = local_url
    .replace('{appid}', encodeURIComponent(String(appid)))
    .replace('{user}', encodeURIComponent(String(user)))

  let local_params = {
    appid,
    user,
  }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<string>
}
