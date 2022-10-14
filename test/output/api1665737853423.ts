// tslint:disable

/**
 * 文件由openapi-parser-shark自动生成，尽量不要手动修改。
 * 文件中出现类似StandardModel$2a327e1b,这种以$+hash码结尾的变量名，
 * 说明swagger文档不规范，这里为了保证代码正确，用hash避免了，更好方案
 * 应该是联系文档输出人，修正文档。
 * 文档源：http://ecb-mengniu-customize.test.fnwintranet.com/v2/api-docs
 */

import { AxiosInstance } from 'axios'
import fetch from './service'

/**
 * @summary StandardModel$6b811323
 * @interface StandardModel$6b811323
 */
export interface StandardModel$6b811323 {
  /**
   * 详情描述
   * @type { string }
   * @memberof StandardModel$6b811323
   */
  ['detail']?: string
  /**
   * 当前是否告警
   * @type { boolean }
   * @memberof StandardModel$6b811323
   */
  ['isAlarm']?: boolean
  /**
   * 系统名称
   * @type { string }
   * @memberof StandardModel$6b811323
   */
  ['systemName']?: string
  /**
   * 系统类型
   * @type { string }
   * @memberof StandardModel$6b811323
   */
  ['systemType']?: string
  /**
   * 系统url
   * @type { string }
   * @memberof StandardModel$6b811323
   */
  ['systemUrl']?: string
  /**
   *
   * @type { number }
   * @memberof StandardModel$6b811323
   */
  ['xaxis']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$6b811323
   */
  ['yaxis']?: number
}

/**
 * @summary AlarmDetailRespVO
 * @interface AlarmDetailRespVO
 */
export interface AlarmDetailRespVO {
  /**
   * 告警描述
   * @type { string }
   * @memberof AlarmDetailRespVO
   */
  ['alarmDesc']?: string
  /**
   * 告警id
   * @type { string }
   * @memberof AlarmDetailRespVO
   */
  ['alarmId']?: string
  /**
   * 告警等级
   * @type { string }
   * @memberof AlarmDetailRespVO
   */
  ['alarmMainLevel']?: string
  /**
   * 处理状态
   * @type { string }
   * @memberof AlarmDetailRespVO
   */
  ['alarmStatus']?: string
  /**
   * 告警时间
   * @type { string }
   * @memberof AlarmDetailRespVO
   */
  ['alarmTime']?: string
  /**
   * 告警标题
   * @type { string }
   * @memberof AlarmDetailRespVO
   */
  ['alarmTitle']?: string
  /**
   * 告警类别
   * @type { string }
   * @memberof AlarmDetailRespVO
   */
  ['alarmTypeName']?: string
  /**
   * 关闭说明
   * @type { string }
   * @memberof AlarmDetailRespVO
   */
  ['closeDesc']?: string
  /**
   * 设备名称
   * @type { string }
   * @memberof AlarmDetailRespVO
   */
  ['equipName']?: string
  /**
   * 文件集合
   * @type { StandardModel$816072dd[] }
   * @memberof AlarmDetailRespVO
   */
  ['fileList']?: StandardModel$816072dd[]
  /**
   * 恢复状态
   * @type { string }
   * @memberof AlarmDetailRespVO
   */
  ['recoveryStatus']?: string
  /**
   * 子系统名称
   * @type { string }
   * @memberof AlarmDetailRespVO
   */
  ['subSystemName']?: string
}

/**
 * @summary AlarmMessgeBatchCloseVO
 * @interface AlarmMessgeBatchCloseVO
 */
export interface AlarmMessgeBatchCloseVO {
  /**
   * 告警id集合
   * @type { string[] }
   * @memberof AlarmMessgeBatchCloseVO
   */
  ['alarmIdList']?: string[]
}

/**
 * @summary AlarmMessgeCloseVO
 * @interface AlarmMessgeCloseVO
 */
export interface AlarmMessgeCloseVO {
  /**
   * 告警详情
   * @type { string }
   * @memberof AlarmMessgeCloseVO
   */
  ['alarmDesc']?: string
  /**
   * 告警id
   * @type { number }
   * @memberof AlarmMessgeCloseVO
   */
  ['alarmId']?: number
  /**
   * 告警等级
   * @type { string }
   * @memberof AlarmMessgeCloseVO
   */
  ['alarmMainLevel']?: string
  /**
   * 告警时间
   * @type { string }
   * @memberof AlarmMessgeCloseVO
   */
  ['alarmTime']?: string
  /**
   * 告警类型
   * @type { string }
   * @memberof AlarmMessgeCloseVO
   */
  ['alarmTypeName']?: string
  /**
   * 关闭说明
   * @type { string }
   * @memberof AlarmMessgeCloseVO
   */
  ['closeDesc']?: string
  /**
   * 设备名称
   * @type { string }
   * @memberof AlarmMessgeCloseVO
   */
  ['equipName']?: string
  /**
   * 文件集合
   * @type { StandardModel$816072dd[] }
   * @memberof AlarmMessgeCloseVO
   */
  ['fileList']?: StandardModel$816072dd[]
  /**
   * 告警系统
   * @type { string }
   * @memberof AlarmMessgeCloseVO
   */
  ['subSystemName']?: string
}

/**
 * @summary AlarmOperationReqVO
 * @interface AlarmOperationReqVO
 */
export interface AlarmOperationReqVO {
  /**
   * alarmId
   * @type { number }
   * @memberof AlarmOperationReqVO
   */
  ['alarmId']?: number
  /**
   * 告警级别
   * @type { string }
   * @memberof AlarmOperationReqVO
   */
  ['alarmMainLevel']?: string
  /**
   * 告警内容
   * @type { string }
   * @memberof AlarmOperationReqVO
   */
  ['alarmMsg']?: string
  /**
   * 告警处理状态
   * @type { string }
   * @memberof AlarmOperationReqVO
   */
  ['alarmStatus']?: string
  /**
   * 告警时间
   * @type { string }
   * @memberof AlarmOperationReqVO
   */
  ['alarmTime']?: string
  /**
   * 告警标题
   * @type { string }
   * @memberof AlarmOperationReqVO
   */
  ['alarmTitle']?: string
  /**
   * 告警类型名称
   * @type { string }
   * @memberof AlarmOperationReqVO
   */
  ['alarmTypeName']?: string
  /**
   * 设备名称
   * @type { string }
   * @memberof AlarmOperationReqVO
   */
  ['equipName']?: string
  /**
   * 处理人
   * @type { string }
   * @memberof AlarmOperationReqVO
   */
  ['handler']?: string
  /**
   * 是否配置恢复规则
   * @type { number }
   * @memberof AlarmOperationReqVO
   */
  ['hasRecovery']?: number
  /**
   * 处理时间
   * @type { string }
   * @memberof AlarmOperationReqVO
   */
  ['processTime']?: string
  /**
   * 恢复时间
   * @type { string }
   * @memberof AlarmOperationReqVO
   */
  ['recoveryTime']?: string
  /**
   * 区域名称
   * @type { string }
   * @memberof AlarmOperationReqVO
   */
  ['regionName']?: string
  /**
   * 三方告警id
   * @type { string }
   * @memberof AlarmOperationReqVO
   */
  ['sourceAlarmId']?: string
  /**
   * 恢复状态
   * @type { string }
   * @memberof AlarmOperationReqVO
   */
  ['status']?: string
  /**
   * 系统名称
   * @type { string }
   * @memberof AlarmOperationReqVO
   */
  ['subSystemName']?: string
}

/**
 * @summary AlarmPageRequestVO
 * @interface AlarmPageRequestVO
 */
export interface AlarmPageRequestVO {
  /**
   * 告警主键id
   * @type { string }
   * @memberof AlarmPageRequestVO
   */
  ['alarmId']?: string
  /**
   * 告警等级
   * @type { string }
   * @memberof AlarmPageRequestVO
   */
  ['alarmLevel']?: string
  /**
   * 告警状态
   * @type { string }
   * @memberof AlarmPageRequestVO
   */
  ['alarmStatus']?: string
  /**
   * 告警类型
   * @type { string }
   * @memberof AlarmPageRequestVO
   */
  ['alarmType']?: string
  /**
   * 确认状态
   * @type { string }
   * @memberof AlarmPageRequestVO
   */
  ['confirmStatus']?: string
  /**
   * 结束时间
   * @type { string }
   * @memberof AlarmPageRequestVO
   */
  ['endTime']?: string
  /**
   * 设备id
   * @type { string }
   * @memberof AlarmPageRequestVO
   */
  ['equipId']?: string
  /**
   * 报警设备
   * @type { string }
   * @memberof AlarmPageRequestVO
   */
  ['equipName']?: string
  /**
   *
   * @type { string }
   * @memberof AlarmPageRequestVO
   */
  ['opsEntId']?: string
  /**
   * 排序类型，正序:asc, 倒叙:desc
   * @type { string }
   * @memberof AlarmPageRequestVO
   */
  ['orderWay']?: string
  /**
   * 页码
   * @type { number }
   * @memberof AlarmPageRequestVO
   */
  ['pageNum']?: number
  /**
   * 页大小
   * @type { number }
   * @memberof AlarmPageRequestVO
   */
  ['pageSize']?: number
  /**
   * 页面类型，0：待处理， 1：历史报警
   * @type { string }
   * @memberof AlarmPageRequestVO
   */
  ['pageType']?: string
  /**
   * 恢复状态
   * @type { string }
   * @memberof AlarmPageRequestVO
   */
  ['recoveryStatus']?: string
  /**
   * 报警区域
   * @type { string }
   * @memberof AlarmPageRequestVO
   */
  ['regionName']?: string
  /**
   * 排序字段， alarmStatus:处理状态，status：恢复状态，alarmTime：发生时间，recoveryTime：恢复时间，processTime：处理时间
   * @type { string }
   * @memberof AlarmPageRequestVO
   */
  ['sortField']?: string
  /**
   * 起始时间
   * @type { string }
   * @memberof AlarmPageRequestVO
   */
  ['startTime']?: string
  /**
   * 企业编码id
   * @type { string }
   * @memberof AlarmPageRequestVO
   */
  ['systemCode']?: string
  /**
   * 报警系统
   * @type { string }
   * @memberof AlarmPageRequestVO
   */
  ['systemName']?: string
}

/**
 * @summary AlarmResultInfoVO
 * @interface AlarmResultInfoVO
 */
export interface AlarmResultInfoVO {
  /**
   * alarmId
   * @type { number }
   * @memberof AlarmResultInfoVO
   */
  ['alarmId']?: number
  /**
   * 告警级别
   * @type { string }
   * @memberof AlarmResultInfoVO
   */
  ['alarmMainLevel']?: string
  /**
   * 告警内容
   * @type { string }
   * @memberof AlarmResultInfoVO
   */
  ['alarmMsg']?: string
  /**
   * 告警处理状态
   * @type { number }
   * @memberof AlarmResultInfoVO
   */
  ['alarmStatus']?: number
  /**
   * 告警时间
   * @type { string }
   * @memberof AlarmResultInfoVO
   */
  ['alarmTime']?: string
  /**
   * 告警标题
   * @type { string }
   * @memberof AlarmResultInfoVO
   */
  ['alarmTitle']?: string
  /**
   * 告警类型名称
   * @type { string }
   * @memberof AlarmResultInfoVO
   */
  ['alarmTypeName']?: string
  /**
   * 设备名称
   * @type { string }
   * @memberof AlarmResultInfoVO
   */
  ['equipName']?: string
  /**
   * 处理人
   * @type { string }
   * @memberof AlarmResultInfoVO
   */
  ['handler']?: string
  /**
   * 是否配置恢复规则
   * @type { number }
   * @memberof AlarmResultInfoVO
   */
  ['hasRecovery']?: number
  /**
   * 处理时间
   * @type { string }
   * @memberof AlarmResultInfoVO
   */
  ['processTime']?: string
  /**
   * 恢复时间
   * @type { string }
   * @memberof AlarmResultInfoVO
   */
  ['recoveryTime']?: string
  /**
   * 区域名称
   * @type { string }
   * @memberof AlarmResultInfoVO
   */
  ['regionName']?: string
  /**
   * 三方告警id
   * @type { string }
   * @memberof AlarmResultInfoVO
   */
  ['sourceAlarmId']?: string
  /**
   * 恢复状态
   * @type { number }
   * @memberof AlarmResultInfoVO
   */
  ['status']?: number
  /**
   * 系统名称
   * @type { string }
   * @memberof AlarmResultInfoVO
   */
  ['subSystemName']?: string
}

/**
 * @summary AlarmSelectorVO
 * @interface AlarmSelectorVO
 */
export interface AlarmSelectorVO {
  /**
   *
   * @type { string }
   * @memberof AlarmSelectorVO
   */
  ['name']?: string
  /**
   *
   * @type { DropDownBoxVO[] }
   * @memberof AlarmSelectorVO
   */
  ['selector']?: DropDownBoxVO[]
  /**
   *
   * @type { string }
   * @memberof AlarmSelectorVO
   */
  ['type']?: string
}

/**
 * @summary CarbonEmissionCompareVO
 * @interface CarbonEmissionCompareVO
 */
export interface CarbonEmissionCompareVO {
  /**
   *
   * @type { EmissionCompareItemVO }
   * @memberof CarbonEmissionCompareVO
   */
  ['productEmission']?: EmissionCompareItemVO
  /**
   *
   * @type { EmissionCompareItemVO }
   * @memberof CarbonEmissionCompareVO
   */
  ['yearEmission']?: EmissionCompareItemVO
}

/**
 * @summary CarbonEmissionDistributionVO
 * @interface CarbonEmissionDistributionVO
 */
export interface CarbonEmissionDistributionVO {
  /**
   *
   * @type { EmissionDistributionVO }
   * @memberof CarbonEmissionDistributionVO
   */
  ['nodeEmission']?: EmissionDistributionVO
  /**
   *
   * @type { EmissionDistributionVO }
   * @memberof CarbonEmissionDistributionVO
   */
  ['rangeEmission']?: EmissionDistributionVO
}

/**
 * @summary CarbonEmissionStatisticVO
 * @interface CarbonEmissionStatisticVO
 */
export interface CarbonEmissionStatisticVO {
  /**
   * 碳排放范围分布
   * @type { RangeEmissionItemVO[] }
   * @memberof CarbonEmissionStatisticVO
   */
  ['rangeEmissionList']?: RangeEmissionItemVO[]
  /**
   * 今日碳排放量
   * @type { number }
   * @memberof CarbonEmissionStatisticVO
   */
  ['todayEmission']?: number
  /**
   * 昨日碳排放量
   * @type { number }
   * @memberof CarbonEmissionStatisticVO
   */
  ['yesterdayEmission']?: number
}

/**
 * @summary CompositeEnergyDetailVO
 * @interface CompositeEnergyDetailVO
 */
export interface CompositeEnergyDetailVO {
  /**
   * 编码
   * @type { string }
   * @memberof CompositeEnergyDetailVO
   */
  ['energyType']?: string
  /**
   * 名称
   * @type { string }
   * @memberof CompositeEnergyDetailVO
   */
  ['energyTypeName']?: string
  /**
   * 单位
   * @type { string }
   * @memberof CompositeEnergyDetailVO
   */
  ['unit']?: string
  /**
   * 值集合
   * @type { CompositeEnergyValueVO[] }
   * @memberof CompositeEnergyDetailVO
   */
  ['values']?: CompositeEnergyValueVO[]
}

/**
 * @summary CompositeEnergyValueVO
 * @interface CompositeEnergyValueVO
 */
export interface CompositeEnergyValueVO {
  /**
   * 时间
   * @type { string }
   * @memberof CompositeEnergyValueVO
   */
  ['time']?: string
  /**
   * 单位
   * @type { string }
   * @memberof CompositeEnergyValueVO
   */
  ['unit']?: string
  /**
   * 值
   * @type { number }
   * @memberof CompositeEnergyValueVO
   */
  ['value']?: number
}

/**
 * @summary CostRatioRespVO
 * @interface CostRatioRespVO
 */
export interface CostRatioRespVO {
  /**
   * 成本
   * @type { string }
   * @memberof CostRatioRespVO
   */
  ['cost']?: string
  /**
   * 类型名称
   * @type { string }
   * @memberof CostRatioRespVO
   */
  ['name']?: string
  /**
   * 占比(%)
   * @type { string }
   * @memberof CostRatioRespVO
   */
  ['ratio']?: string
  /**
   * 类型
   * @type { string }
   * @memberof CostRatioRespVO
   */
  ['type']?: string
  /**
   * 单位
   * @type { string }
   * @memberof CostRatioRespVO
   */
  ['unit']?: string
}

/**
 * @summary CostTrendRespVO
 * @interface CostTrendRespVO
 */
export interface CostTrendRespVO {
  /**
   * 指标编码
   * @type { string }
   * @memberof CostTrendRespVO
   */
  ['code']?: string
  /**
   * 名称
   * @type { string }
   * @memberof CostTrendRespVO
   */
  ['name']?: string
  /**
   * 类型:电-ELEC,水-WAT,燃气-GAS,综合能源-CEC,环比-MOM,同比-YOY
   * @type { string }
   * @memberof CostTrendRespVO
   */
  ['type']?: string
  /**
   * 单位
   * @type { string }
   * @memberof CostTrendRespVO
   */
  ['unit']?: string
  /**
   * 值集合
   * @type { CostValuesVO[] }
   * @memberof CostTrendRespVO
   */
  ['values']?: CostValuesVO[]
}

/**
 * @summary CostValuesVO
 * @interface CostValuesVO
 */
export interface CostValuesVO {
  /**
   * 时间
   * @type { string }
   * @memberof CostValuesVO
   */
  ['time']?: string
  /**
   * 值
   * @type { string }
   * @memberof CostValuesVO
   */
  ['value']?: string
}

/**
 * @summary DropDownBoxVO
 * @interface DropDownBoxVO
 */
export interface DropDownBoxVO {
  /**
   *
   * @type { string }
   * @memberof DropDownBoxVO
   */
  ['dicName']?: string
  /**
   *
   * @type { number }
   * @memberof DropDownBoxVO
   */
  ['id']?: number
}

/**
 * @summary EcbDicVO
 * @interface EcbDicVO
 */
export interface EcbDicVO {
  /**
   * 字典名称
   * @type { string }
   * @memberof EcbDicVO
   */
  ['dicName']?: string
  /**
   * id
   * @type { number }
   * @memberof EcbDicVO
   */
  ['id']?: number
}

/**
 * @summary EcbOverScheduleDicVO
 * @interface EcbOverScheduleDicVO
 */
export interface EcbOverScheduleDicVO {
  /**
   * 字典名称
   * @type { string }
   * @memberof EcbOverScheduleDicVO
   */
  ['dicName']?: string
  /**
   * id
   * @type { number }
   * @memberof EcbOverScheduleDicVO
   */
  ['id']?: number
}

/**
 * @summary EcbOverhaulSchedulePageVO
 * @interface EcbOverhaulSchedulePageVO
 */
export interface EcbOverhaulSchedulePageVO {
  /**
   *
   * @type { string }
   * @memberof EcbOverhaulSchedulePageVO
   */
  ['overhaulScheduleName']?: string
  /**
   *
   * @type { number }
   * @memberof EcbOverhaulSchedulePageVO
   */
  ['overhaulStatus']?: number
  /**
   *
   * @type { number }
   * @memberof EcbOverhaulSchedulePageVO
   */
  ['pageNum']?: number
  /**
   *
   * @type { number }
   * @memberof EcbOverhaulSchedulePageVO
   */
  ['pageSize']?: number
}

/**
 * @summary EcbRiskLevelVO
 * @interface EcbRiskLevelVO
 */
export interface EcbRiskLevelVO {
  /**
   * 风险等级
   * @type { string }
   * @memberof EcbRiskLevelVO
   */
  ['riskLevel']?: string
  /**
   * 风险等级id
   * @type { number }
   * @memberof EcbRiskLevelVO
   */
  ['riskLevelId']?: number
}

/**
 * @summary EcbRiskWaringPageVO
 * @interface EcbRiskWaringPageVO
 */
export interface EcbRiskWaringPageVO {
  /**
   *
   * @type { number }
   * @memberof EcbRiskWaringPageVO
   */
  ['pageNum']?: number
  /**
   *
   * @type { number }
   * @memberof EcbRiskWaringPageVO
   */
  ['pageSize']?: number
  /**
   *
   * @type { number }
   * @memberof EcbRiskWaringPageVO
   */
  ['riskLevelId']?: number
  /**
   *
   * @type { string }
   * @memberof EcbRiskWaringPageVO
   */
  ['riskName']?: string
  /**
   *
   * @type { number }
   * @memberof EcbRiskWaringPageVO
   */
  ['riskTypeId']?: number
}

/**
 * @summary EmissionCompareItemVO
 * @interface EmissionCompareItemVO
 */
export interface EmissionCompareItemVO {
  /**
   * 同比
   * @type { number }
   * @memberof EmissionCompareItemVO
   */
  ['emissionPercent']?: number
  /**
   * 碳排放量
   * @type { number }
   * @memberof EmissionCompareItemVO
   */
  ['emissionValue']?: number
}

/**
 * @summary EmissionDistributionVO
 * @interface EmissionDistributionVO
 */
export interface EmissionDistributionVO {
  /**
   * 范围一/生产排放量占比
   * @type { number }
   * @memberof EmissionDistributionVO
   */
  ['oneEmissionRatio']?: number
  /**
   * 范围一/生产碳排放量
   * @type { number }
   * @memberof EmissionDistributionVO
   */
  ['oneEmissionValue']?: number
  /**
   * 范围二/附属排放量占比
   * @type { number }
   * @memberof EmissionDistributionVO
   */
  ['twoEmissionRatio']?: number
  /**
   * 范围二/附属碳排放量
   * @type { number }
   * @memberof EmissionDistributionVO
   */
  ['twoEmissionValue']?: number
}

/**
 * @summary EnergyCostValueVO
 * @interface EnergyCostValueVO
 */
export interface EnergyCostValueVO {
  /**
   * 时间
   * @type { string }
   * @memberof EnergyCostValueVO
   */
  ['time']?: string
  /**
   * 单位
   * @type { string }
   * @memberof EnergyCostValueVO
   */
  ['unit']?: string
  /**
   * 值
   * @type { number }
   * @memberof EnergyCostValueVO
   */
  ['value']?: number
}

/**
 * @summary EnergyStructuralAnalysisCimCodeVO
 * @interface EnergyStructuralAnalysisCimCodeVO
 */
export interface EnergyStructuralAnalysisCimCodeVO {
  /**
   *
   * @type { string }
   * @memberof EnergyStructuralAnalysisCimCodeVO
   */
  ['cimCode']?: string
  /**
   *
   * @type { string }
   * @memberof EnergyStructuralAnalysisCimCodeVO
   */
  ['energyName']?: string
  /**
   *
   * @type { string }
   * @memberof EnergyStructuralAnalysisCimCodeVO
   */
  ['energyType']?: string
  /**
   *
   * @type { string }
   * @memberof EnergyStructuralAnalysisCimCodeVO
   */
  ['scale']?: string
  /**
   *
   * @type { string }
   * @memberof EnergyStructuralAnalysisCimCodeVO
   */
  ['unit']?: string
  /**
   *
   * @type { number }
   * @memberof EnergyStructuralAnalysisCimCodeVO
   */
  ['value']?: number
}

/**
 * @summary EnergyStructuralAnalysisVO
 * @interface EnergyStructuralAnalysisVO
 */
export interface EnergyStructuralAnalysisVO {
  /**
   *
   * @type { EnergyStructuralAnalysisCimCodeVO[] }
   * @memberof EnergyStructuralAnalysisVO
   */
  ['comprehensiveConsumption']?: EnergyStructuralAnalysisCimCodeVO[]
  /**
   *
   * @type { EnergyStructuralAnalysisCimCodeVO[] }
   * @memberof EnergyStructuralAnalysisVO
   */
  ['consumption']?: EnergyStructuralAnalysisCimCodeVO[]
  /**
   *
   * @type { EnergyStructuralAnalysisCimCodeVO[] }
   * @memberof EnergyStructuralAnalysisVO
   */
  ['energyCost']?: EnergyStructuralAnalysisCimCodeVO[]
}

/**
 * @summary LineDataVO
 * @interface LineDataVO
 */
export interface LineDataVO {
  /**
   *
   * @type { string }
   * @memberof LineDataVO
   */
  ['time']?: string
  /**
   *
   * @type { number }
   * @memberof LineDataVO
   */
  ['value']?: number
}

/**
 * @summary StandardModel$3a4d1c14
 * @interface StandardModel$3a4d1c14
 */
export interface StandardModel$3a4d1c14 {
  /**
   *
   * @type { number }
   * @memberof StandardModel$3a4d1c14
   */
  ['endRow']?: number
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$3a4d1c14
   */
  ['hasNextPage']?: boolean
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$3a4d1c14
   */
  ['hasPreviousPage']?: boolean
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$3a4d1c14
   */
  ['isFirstPage']?: boolean
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$3a4d1c14
   */
  ['isLastPage']?: boolean
  /**
   *
   * @type { StandardModel$4c91aad0[] }
   * @memberof StandardModel$3a4d1c14
   */
  ['list']?: StandardModel$4c91aad0[]
  /**
   *
   * @type { number }
   * @memberof StandardModel$3a4d1c14
   */
  ['navigateFirstPage']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$3a4d1c14
   */
  ['navigateLastPage']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$3a4d1c14
   */
  ['navigatePages']?: number
  /**
   *
   * @type { number[] }
   * @memberof StandardModel$3a4d1c14
   */
  ['navigatepageNums']?: number[]
  /**
   *
   * @type { number }
   * @memberof StandardModel$3a4d1c14
   */
  ['nextPage']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$3a4d1c14
   */
  ['pageNum']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$3a4d1c14
   */
  ['pageSize']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$3a4d1c14
   */
  ['pages']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$3a4d1c14
   */
  ['prePage']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$3a4d1c14
   */
  ['size']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$3a4d1c14
   */
  ['startRow']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$3a4d1c14
   */
  ['total']?: number
}

/**
 * @summary StandardModel$f27ae6b8
 * @interface StandardModel$f27ae6b8
 */
export interface StandardModel$f27ae6b8 {
  /**
   *
   * @type { number }
   * @memberof StandardModel$f27ae6b8
   */
  ['endRow']?: number
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$f27ae6b8
   */
  ['hasNextPage']?: boolean
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$f27ae6b8
   */
  ['hasPreviousPage']?: boolean
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$f27ae6b8
   */
  ['isFirstPage']?: boolean
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$f27ae6b8
   */
  ['isLastPage']?: boolean
  /**
   *
   * @type { StandardModel$43acc24a[] }
   * @memberof StandardModel$f27ae6b8
   */
  ['list']?: StandardModel$43acc24a[]
  /**
   *
   * @type { number }
   * @memberof StandardModel$f27ae6b8
   */
  ['navigateFirstPage']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$f27ae6b8
   */
  ['navigateLastPage']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$f27ae6b8
   */
  ['navigatePages']?: number
  /**
   *
   * @type { number[] }
   * @memberof StandardModel$f27ae6b8
   */
  ['navigatepageNums']?: number[]
  /**
   *
   * @type { number }
   * @memberof StandardModel$f27ae6b8
   */
  ['nextPage']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$f27ae6b8
   */
  ['pageNum']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$f27ae6b8
   */
  ['pageSize']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$f27ae6b8
   */
  ['pages']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$f27ae6b8
   */
  ['prePage']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$f27ae6b8
   */
  ['size']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$f27ae6b8
   */
  ['startRow']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$f27ae6b8
   */
  ['total']?: number
}

/**
 * @summary StandardModel$8db2752d
 * @interface StandardModel$8db2752d
 */
export interface StandardModel$8db2752d {
  /**
   *
   * @type { number }
   * @memberof StandardModel$8db2752d
   */
  ['endRow']?: number
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$8db2752d
   */
  ['hasNextPage']?: boolean
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$8db2752d
   */
  ['hasPreviousPage']?: boolean
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$8db2752d
   */
  ['isFirstPage']?: boolean
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$8db2752d
   */
  ['isLastPage']?: boolean
  /**
   *
   * @type { StandardModel$7efa1f96[] }
   * @memberof StandardModel$8db2752d
   */
  ['list']?: StandardModel$7efa1f96[]
  /**
   *
   * @type { number }
   * @memberof StandardModel$8db2752d
   */
  ['navigateFirstPage']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$8db2752d
   */
  ['navigateLastPage']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$8db2752d
   */
  ['navigatePages']?: number
  /**
   *
   * @type { number[] }
   * @memberof StandardModel$8db2752d
   */
  ['navigatepageNums']?: number[]
  /**
   *
   * @type { number }
   * @memberof StandardModel$8db2752d
   */
  ['nextPage']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$8db2752d
   */
  ['pageNum']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$8db2752d
   */
  ['pageSize']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$8db2752d
   */
  ['pages']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$8db2752d
   */
  ['prePage']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$8db2752d
   */
  ['size']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$8db2752d
   */
  ['startRow']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$8db2752d
   */
  ['total']?: number
}

/**
 * @summary StandardModel$a79cd8ac
 * @interface StandardModel$a79cd8ac
 */
export interface StandardModel$a79cd8ac {
  /**
   *
   * @type { number }
   * @memberof StandardModel$a79cd8ac
   */
  ['endRow']?: number
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$a79cd8ac
   */
  ['hasNextPage']?: boolean
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$a79cd8ac
   */
  ['hasPreviousPage']?: boolean
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$a79cd8ac
   */
  ['isFirstPage']?: boolean
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$a79cd8ac
   */
  ['isLastPage']?: boolean
  /**
   *
   * @type { StandardModel$51352897[] }
   * @memberof StandardModel$a79cd8ac
   */
  ['list']?: StandardModel$51352897[]
  /**
   *
   * @type { number }
   * @memberof StandardModel$a79cd8ac
   */
  ['navigateFirstPage']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$a79cd8ac
   */
  ['navigateLastPage']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$a79cd8ac
   */
  ['navigatePages']?: number
  /**
   *
   * @type { number[] }
   * @memberof StandardModel$a79cd8ac
   */
  ['navigatepageNums']?: number[]
  /**
   *
   * @type { number }
   * @memberof StandardModel$a79cd8ac
   */
  ['nextPage']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$a79cd8ac
   */
  ['pageNum']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$a79cd8ac
   */
  ['pageSize']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$a79cd8ac
   */
  ['pages']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$a79cd8ac
   */
  ['prePage']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$a79cd8ac
   */
  ['size']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$a79cd8ac
   */
  ['startRow']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$a79cd8ac
   */
  ['total']?: number
}

/**
 * @summary StandardModel$7e142a0b
 * @interface StandardModel$7e142a0b
 */
export interface StandardModel$7e142a0b {
  /**
   *
   * @type { string }
   * @memberof StandardModel$7e142a0b
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$140bdd5b[] }
   * @memberof StandardModel$7e142a0b
   */
  ['data']?: StandardModel$140bdd5b[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$7e142a0b
   */
  ['message']?: string
  /**
   *
   * @type { number }
   * @memberof StandardModel$7e142a0b
   */
  ['pageNum']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$7e142a0b
   */
  ['pageSize']?: number
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$7e142a0b
   */
  ['success']?: boolean
  /**
   *
   * @type { number }
   * @memberof StandardModel$7e142a0b
   */
  ['totalCount']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$7e142a0b
   */
  ['totalPages']?: number
}

/**
 * @summary StandardModel$70716eb6
 * @interface StandardModel$70716eb6
 */
export interface StandardModel$70716eb6 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$70716eb6
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$ec51e3d1[] }
   * @memberof StandardModel$70716eb6
   */
  ['data']?: StandardModel$ec51e3d1[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$70716eb6
   */
  ['message']?: string
  /**
   *
   * @type { number }
   * @memberof StandardModel$70716eb6
   */
  ['pageNum']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$70716eb6
   */
  ['pageSize']?: number
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$70716eb6
   */
  ['success']?: boolean
  /**
   *
   * @type { number }
   * @memberof StandardModel$70716eb6
   */
  ['totalCount']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$70716eb6
   */
  ['totalPages']?: number
}

/**
 * @summary RangeEmissionItemVO
 * @interface RangeEmissionItemVO
 */
export interface RangeEmissionItemVO {
  /**
   * 排放量占比
   * @type { number }
   * @memberof RangeEmissionItemVO
   */
  ['emissionRatio']?: number
  /**
   * 排放量
   * @type { number }
   * @memberof RangeEmissionItemVO
   */
  ['emissionValue']?: number
  /**
   * 范围名称
   * @type { string }
   * @memberof RangeEmissionItemVO
   */
  ['rangeName']?: string
}

/**
 * @summary RdfaResult
 * @interface RdfaResult
 */
export interface RdfaResult {
  /**
   *
   * @type { string }
   * @memberof RdfaResult
   */
  ['code']?: string
  /**
   *
   * @type { Serializable }
   * @memberof RdfaResult
   */
  ['data']?: Serializable
  /**
   *
   * @type { string }
   * @memberof RdfaResult
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResult
   */
  ['success']?: boolean
}

/**
 * @summary RdfaResultAlarmDetailRespVO
 * @interface RdfaResultAlarmDetailRespVO
 */
export interface RdfaResultAlarmDetailRespVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultAlarmDetailRespVO
   */
  ['code']?: string
  /**
   *
   * @type { AlarmDetailRespVO }
   * @memberof RdfaResultAlarmDetailRespVO
   */
  ['data']?: AlarmDetailRespVO
  /**
   *
   * @type { string }
   * @memberof RdfaResultAlarmDetailRespVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultAlarmDetailRespVO
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$68806dab
 * @interface StandardModel$68806dab
 */
export interface StandardModel$68806dab {
  /**
   *
   * @type { string }
   * @memberof StandardModel$68806dab
   */
  ['code']?: string
  /**
   *
   * @type { any[] }
   * @memberof StandardModel$68806dab
   */
  ['data']?: any[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$68806dab
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$68806dab
   */
  ['success']?: boolean
}

/**
 * @summary RdfaResultArrayListAlarmSelectorVO
 * @interface RdfaResultArrayListAlarmSelectorVO
 */
export interface RdfaResultArrayListAlarmSelectorVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListAlarmSelectorVO
   */
  ['code']?: string
  /**
   *
   * @type { AlarmSelectorVO[] }
   * @memberof RdfaResultArrayListAlarmSelectorVO
   */
  ['data']?: AlarmSelectorVO[]
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListAlarmSelectorVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultArrayListAlarmSelectorVO
   */
  ['success']?: boolean
}

/**
 * @summary RdfaResultArrayListCompositeEnergyDetailVO
 * @interface RdfaResultArrayListCompositeEnergyDetailVO
 */
export interface RdfaResultArrayListCompositeEnergyDetailVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListCompositeEnergyDetailVO
   */
  ['code']?: string
  /**
   *
   * @type { CompositeEnergyDetailVO[] }
   * @memberof RdfaResultArrayListCompositeEnergyDetailVO
   */
  ['data']?: CompositeEnergyDetailVO[]
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListCompositeEnergyDetailVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultArrayListCompositeEnergyDetailVO
   */
  ['success']?: boolean
}

/**
 * @summary RdfaResultArrayListCostRatioRespVO
 * @interface RdfaResultArrayListCostRatioRespVO
 */
export interface RdfaResultArrayListCostRatioRespVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListCostRatioRespVO
   */
  ['code']?: string
  /**
   *
   * @type { CostRatioRespVO[] }
   * @memberof RdfaResultArrayListCostRatioRespVO
   */
  ['data']?: CostRatioRespVO[]
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListCostRatioRespVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultArrayListCostRatioRespVO
   */
  ['success']?: boolean
}

/**
 * @summary RdfaResultArrayListCostTrendRespVO
 * @interface RdfaResultArrayListCostTrendRespVO
 */
export interface RdfaResultArrayListCostTrendRespVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListCostTrendRespVO
   */
  ['code']?: string
  /**
   *
   * @type { CostTrendRespVO[] }
   * @memberof RdfaResultArrayListCostTrendRespVO
   */
  ['data']?: CostTrendRespVO[]
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListCostTrendRespVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultArrayListCostTrendRespVO
   */
  ['success']?: boolean
}

/**
 * @summary RdfaResultArrayListDropDownBoxVO
 * @interface RdfaResultArrayListDropDownBoxVO
 */
export interface RdfaResultArrayListDropDownBoxVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListDropDownBoxVO
   */
  ['code']?: string
  /**
   *
   * @type { DropDownBoxVO[] }
   * @memberof RdfaResultArrayListDropDownBoxVO
   */
  ['data']?: DropDownBoxVO[]
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListDropDownBoxVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultArrayListDropDownBoxVO
   */
  ['success']?: boolean
}

/**
 * @summary RdfaResultArrayListEcbDicVO
 * @interface RdfaResultArrayListEcbDicVO
 */
export interface RdfaResultArrayListEcbDicVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListEcbDicVO
   */
  ['code']?: string
  /**
   *
   * @type { EcbDicVO[] }
   * @memberof RdfaResultArrayListEcbDicVO
   */
  ['data']?: EcbDicVO[]
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListEcbDicVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultArrayListEcbDicVO
   */
  ['success']?: boolean
}

/**
 * @summary RdfaResultArrayListEcbOverScheduleDicVO
 * @interface RdfaResultArrayListEcbOverScheduleDicVO
 */
export interface RdfaResultArrayListEcbOverScheduleDicVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListEcbOverScheduleDicVO
   */
  ['code']?: string
  /**
   *
   * @type { EcbOverScheduleDicVO[] }
   * @memberof RdfaResultArrayListEcbOverScheduleDicVO
   */
  ['data']?: EcbOverScheduleDicVO[]
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListEcbOverScheduleDicVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultArrayListEcbOverScheduleDicVO
   */
  ['success']?: boolean
}

/**
 * @summary RdfaResultArrayListEcbRiskLevelVO
 * @interface RdfaResultArrayListEcbRiskLevelVO
 */
export interface RdfaResultArrayListEcbRiskLevelVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListEcbRiskLevelVO
   */
  ['code']?: string
  /**
   *
   * @type { EcbRiskLevelVO[] }
   * @memberof RdfaResultArrayListEcbRiskLevelVO
   */
  ['data']?: EcbRiskLevelVO[]
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListEcbRiskLevelVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultArrayListEcbRiskLevelVO
   */
  ['success']?: boolean
}

/**
 * @summary RdfaResultArrayListString
 * @interface RdfaResultArrayListString
 */
export interface RdfaResultArrayListString {
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListString
   */
  ['code']?: string
  /**
   *
   * @type { string[] }
   * @memberof RdfaResultArrayListString
   */
  ['data']?: string[]
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListString
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultArrayListString
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$8c730013
 * @interface StandardModel$8c730013
 */
export interface StandardModel$8c730013 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$8c730013
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$eb250dca[] }
   * @memberof StandardModel$8c730013
   */
  ['data']?: StandardModel$eb250dca[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$8c730013
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$8c730013
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$8f497ba4
 * @interface StandardModel$8f497ba4
 */
export interface StandardModel$8f497ba4 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$8f497ba4
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$deb4dfdb[] }
   * @memberof StandardModel$8f497ba4
   */
  ['data']?: StandardModel$deb4dfdb[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$8f497ba4
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$8f497ba4
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$9de93b20
 * @interface StandardModel$9de93b20
 */
export interface StandardModel$9de93b20 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$9de93b20
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$1ce98014[] }
   * @memberof StandardModel$9de93b20
   */
  ['data']?: StandardModel$1ce98014[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$9de93b20
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$9de93b20
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$06cedf6a
 * @interface StandardModel$06cedf6a
 */
export interface StandardModel$06cedf6a {
  /**
   *
   * @type { string }
   * @memberof StandardModel$06cedf6a
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$7e18c3a8[] }
   * @memberof StandardModel$06cedf6a
   */
  ['data']?: StandardModel$7e18c3a8[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$06cedf6a
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$06cedf6a
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$33aa852a
 * @interface StandardModel$33aa852a
 */
export interface StandardModel$33aa852a {
  /**
   *
   * @type { string }
   * @memberof StandardModel$33aa852a
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$6830794a[] }
   * @memberof StandardModel$33aa852a
   */
  ['data']?: StandardModel$6830794a[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$33aa852a
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$33aa852a
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$0d6449e4
 * @interface StandardModel$0d6449e4
 */
export interface StandardModel$0d6449e4 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$0d6449e4
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$73319104[] }
   * @memberof StandardModel$0d6449e4
   */
  ['data']?: StandardModel$73319104[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$0d6449e4
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$0d6449e4
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$8e200d1b
 * @interface StandardModel$8e200d1b
 */
export interface StandardModel$8e200d1b {
  /**
   *
   * @type { string }
   * @memberof StandardModel$8e200d1b
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$2f2ce52c[] }
   * @memberof StandardModel$8e200d1b
   */
  ['data']?: StandardModel$2f2ce52c[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$8e200d1b
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$8e200d1b
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$f24a06e1
 * @interface StandardModel$f24a06e1
 */
export interface StandardModel$f24a06e1 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$f24a06e1
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$fbb75ab7[] }
   * @memberof StandardModel$f24a06e1
   */
  ['data']?: StandardModel$fbb75ab7[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$f24a06e1
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$f24a06e1
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$9244e3e4
 * @interface StandardModel$9244e3e4
 */
export interface StandardModel$9244e3e4 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$9244e3e4
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$0c8142eb[] }
   * @memberof StandardModel$9244e3e4
   */
  ['data']?: StandardModel$0c8142eb[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$9244e3e4
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$9244e3e4
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$9a6fc462
 * @interface StandardModel$9a6fc462
 */
export interface StandardModel$9a6fc462 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$9a6fc462
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$e34cac17[] }
   * @memberof StandardModel$9a6fc462
   */
  ['data']?: StandardModel$e34cac17[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$9a6fc462
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$9a6fc462
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$693a7461
 * @interface StandardModel$693a7461
 */
export interface StandardModel$693a7461 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$693a7461
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$648f58aa[] }
   * @memberof StandardModel$693a7461
   */
  ['data']?: StandardModel$648f58aa[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$693a7461
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$693a7461
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$a20cfa01
 * @interface StandardModel$a20cfa01
 */
export interface StandardModel$a20cfa01 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$a20cfa01
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$039e49b5[] }
   * @memberof StandardModel$a20cfa01
   */
  ['data']?: StandardModel$039e49b5[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$a20cfa01
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$a20cfa01
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$6384cc5a
 * @interface StandardModel$6384cc5a
 */
export interface StandardModel$6384cc5a {
  /**
   *
   * @type { string }
   * @memberof StandardModel$6384cc5a
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$0fbf74c7[] }
   * @memberof StandardModel$6384cc5a
   */
  ['data']?: StandardModel$0fbf74c7[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$6384cc5a
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$6384cc5a
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$b1ca0344
 * @interface StandardModel$b1ca0344
 */
export interface StandardModel$b1ca0344 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$b1ca0344
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$af8cf071[] }
   * @memberof StandardModel$b1ca0344
   */
  ['data']?: StandardModel$af8cf071[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$b1ca0344
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$b1ca0344
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$e8a8c20d
 * @interface StandardModel$e8a8c20d
 */
export interface StandardModel$e8a8c20d {
  /**
   *
   * @type { string }
   * @memberof StandardModel$e8a8c20d
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$0488cff2[] }
   * @memberof StandardModel$e8a8c20d
   */
  ['data']?: StandardModel$0488cff2[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$e8a8c20d
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$e8a8c20d
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$a9580953
 * @interface StandardModel$a9580953
 */
export interface StandardModel$a9580953 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$a9580953
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$3a6d5902[] }
   * @memberof StandardModel$a9580953
   */
  ['data']?: StandardModel$3a6d5902[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$a9580953
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$a9580953
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$38e9fb1b
 * @interface StandardModel$38e9fb1b
 */
export interface StandardModel$38e9fb1b {
  /**
   *
   * @type { string }
   * @memberof StandardModel$38e9fb1b
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$5a9a3539[] }
   * @memberof StandardModel$38e9fb1b
   */
  ['data']?: StandardModel$5a9a3539[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$38e9fb1b
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$38e9fb1b
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$02f7a5f6
 * @interface StandardModel$02f7a5f6
 */
export interface StandardModel$02f7a5f6 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$02f7a5f6
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$12e79520[] }
   * @memberof StandardModel$02f7a5f6
   */
  ['data']?: StandardModel$12e79520[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$02f7a5f6
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$02f7a5f6
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$1aedee8a
 * @interface StandardModel$1aedee8a
 */
export interface StandardModel$1aedee8a {
  /**
   *
   * @type { string }
   * @memberof StandardModel$1aedee8a
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$7c4efc7e[] }
   * @memberof StandardModel$1aedee8a
   */
  ['data']?: StandardModel$7c4efc7e[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$1aedee8a
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$1aedee8a
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$aeabb6b1
 * @interface StandardModel$aeabb6b1
 */
export interface StandardModel$aeabb6b1 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$aeabb6b1
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$8de0f664[] }
   * @memberof StandardModel$aeabb6b1
   */
  ['data']?: StandardModel$8de0f664[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$aeabb6b1
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$aeabb6b1
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$07ca8dcb
 * @interface StandardModel$07ca8dcb
 */
export interface StandardModel$07ca8dcb {
  /**
   *
   * @type { string }
   * @memberof StandardModel$07ca8dcb
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$0dc79754[] }
   * @memberof StandardModel$07ca8dcb
   */
  ['data']?: StandardModel$0dc79754[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$07ca8dcb
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$07ca8dcb
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$3b4c1d01
 * @interface StandardModel$3b4c1d01
 */
export interface StandardModel$3b4c1d01 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$3b4c1d01
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$849a085a[] }
   * @memberof StandardModel$3b4c1d01
   */
  ['data']?: StandardModel$849a085a[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$3b4c1d01
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$3b4c1d01
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$2fe5c099
 * @interface StandardModel$2fe5c099
 */
export interface StandardModel$2fe5c099 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$2fe5c099
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$a1cc0629[] }
   * @memberof StandardModel$2fe5c099
   */
  ['data']?: StandardModel$a1cc0629[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$2fe5c099
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$2fe5c099
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$5ff51914
 * @interface StandardModel$5ff51914
 */
export interface StandardModel$5ff51914 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$5ff51914
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$76872393[] }
   * @memberof StandardModel$5ff51914
   */
  ['data']?: StandardModel$76872393[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$5ff51914
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$5ff51914
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$ba215b74
 * @interface StandardModel$ba215b74
 */
export interface StandardModel$ba215b74 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$ba215b74
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$a59b7e24[] }
   * @memberof StandardModel$ba215b74
   */
  ['data']?: StandardModel$a59b7e24[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$ba215b74
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$ba215b74
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$26aece8f
 * @interface StandardModel$26aece8f
 */
export interface StandardModel$26aece8f {
  /**
   *
   * @type { string }
   * @memberof StandardModel$26aece8f
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$e32b5406[] }
   * @memberof StandardModel$26aece8f
   */
  ['data']?: StandardModel$e32b5406[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$26aece8f
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$26aece8f
   */
  ['success']?: boolean
}

/**
 * @summary RdfaResultCarbonEmissionCompareVO
 * @interface RdfaResultCarbonEmissionCompareVO
 */
export interface RdfaResultCarbonEmissionCompareVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultCarbonEmissionCompareVO
   */
  ['code']?: string
  /**
   *
   * @type { CarbonEmissionCompareVO }
   * @memberof RdfaResultCarbonEmissionCompareVO
   */
  ['data']?: CarbonEmissionCompareVO
  /**
   *
   * @type { string }
   * @memberof RdfaResultCarbonEmissionCompareVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultCarbonEmissionCompareVO
   */
  ['success']?: boolean
}

/**
 * @summary RdfaResultCarbonEmissionDistributionVO
 * @interface RdfaResultCarbonEmissionDistributionVO
 */
export interface RdfaResultCarbonEmissionDistributionVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultCarbonEmissionDistributionVO
   */
  ['code']?: string
  /**
   *
   * @type { CarbonEmissionDistributionVO }
   * @memberof RdfaResultCarbonEmissionDistributionVO
   */
  ['data']?: CarbonEmissionDistributionVO
  /**
   *
   * @type { string }
   * @memberof RdfaResultCarbonEmissionDistributionVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultCarbonEmissionDistributionVO
   */
  ['success']?: boolean
}

/**
 * @summary RdfaResultCarbonEmissionStatisticVO
 * @interface RdfaResultCarbonEmissionStatisticVO
 */
export interface RdfaResultCarbonEmissionStatisticVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultCarbonEmissionStatisticVO
   */
  ['code']?: string
  /**
   *
   * @type { CarbonEmissionStatisticVO }
   * @memberof RdfaResultCarbonEmissionStatisticVO
   */
  ['data']?: CarbonEmissionStatisticVO
  /**
   *
   * @type { string }
   * @memberof RdfaResultCarbonEmissionStatisticVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultCarbonEmissionStatisticVO
   */
  ['success']?: boolean
}

/**
 * @summary RdfaResultEnergyStructuralAnalysisVO
 * @interface RdfaResultEnergyStructuralAnalysisVO
 */
export interface RdfaResultEnergyStructuralAnalysisVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultEnergyStructuralAnalysisVO
   */
  ['code']?: string
  /**
   *
   * @type { EnergyStructuralAnalysisVO }
   * @memberof RdfaResultEnergyStructuralAnalysisVO
   */
  ['data']?: EnergyStructuralAnalysisVO
  /**
   *
   * @type { string }
   * @memberof RdfaResultEnergyStructuralAnalysisVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultEnergyStructuralAnalysisVO
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$237b5c01
 * @interface StandardModel$237b5c01
 */
export interface StandardModel$237b5c01 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$237b5c01
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$3a4d1c14 }
   * @memberof StandardModel$237b5c01
   */
  ['data']?: StandardModel$3a4d1c14
  /**
   *
   * @type { string }
   * @memberof StandardModel$237b5c01
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$237b5c01
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$ff9ddbc3
 * @interface StandardModel$ff9ddbc3
 */
export interface StandardModel$ff9ddbc3 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$ff9ddbc3
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$f27ae6b8 }
   * @memberof StandardModel$ff9ddbc3
   */
  ['data']?: StandardModel$f27ae6b8
  /**
   *
   * @type { string }
   * @memberof StandardModel$ff9ddbc3
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$ff9ddbc3
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$37912255
 * @interface StandardModel$37912255
 */
export interface StandardModel$37912255 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$37912255
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$8db2752d }
   * @memberof StandardModel$37912255
   */
  ['data']?: StandardModel$8db2752d
  /**
   *
   * @type { string }
   * @memberof StandardModel$37912255
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$37912255
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$34d4bd71
 * @interface StandardModel$34d4bd71
 */
export interface StandardModel$34d4bd71 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$34d4bd71
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$a79cd8ac }
   * @memberof StandardModel$34d4bd71
   */
  ['data']?: StandardModel$a79cd8ac
  /**
   *
   * @type { string }
   * @memberof StandardModel$34d4bd71
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$34d4bd71
   */
  ['success']?: boolean
}

/**
 * @summary RdfaResultBoolean
 * @interface RdfaResultBoolean
 */
export interface RdfaResultBoolean {
  /**
   *
   * @type { string }
   * @memberof RdfaResultBoolean
   */
  ['code']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultBoolean
   */
  ['data']?: boolean
  /**
   *
   * @type { string }
   * @memberof RdfaResultBoolean
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultBoolean
   */
  ['success']?: boolean
}

/**
 * @summary RdfaResultInt
 * @interface RdfaResultInt
 */
export interface RdfaResultInt {
  /**
   *
   * @type { string }
   * @memberof RdfaResultInt
   */
  ['code']?: string
  /**
   *
   * @type { number }
   * @memberof RdfaResultInt
   */
  ['data']?: number
  /**
   *
   * @type { string }
   * @memberof RdfaResultInt
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultInt
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$d1f3d3c6
 * @interface StandardModel$d1f3d3c6
 */
export interface StandardModel$d1f3d3c6 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$d1f3d3c6
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$8075efbc }
   * @memberof StandardModel$d1f3d3c6
   */
  ['data']?: StandardModel$8075efbc
  /**
   *
   * @type { string }
   * @memberof StandardModel$d1f3d3c6
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$d1f3d3c6
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$3eab4373
 * @interface StandardModel$3eab4373
 */
export interface StandardModel$3eab4373 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$3eab4373
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$61d47e60 }
   * @memberof StandardModel$3eab4373
   */
  ['data']?: StandardModel$61d47e60
  /**
   *
   * @type { string }
   * @memberof StandardModel$3eab4373
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$3eab4373
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$d1a61c3c
 * @interface StandardModel$d1a61c3c
 */
export interface StandardModel$d1a61c3c {
  /**
   *
   * @type { string }
   * @memberof StandardModel$d1a61c3c
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$9c8a1964 }
   * @memberof StandardModel$d1a61c3c
   */
  ['data']?: StandardModel$9c8a1964
  /**
   *
   * @type { string }
   * @memberof StandardModel$d1a61c3c
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$d1a61c3c
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$a4ef4dd6
 * @interface StandardModel$a4ef4dd6
 */
export interface StandardModel$a4ef4dd6 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$a4ef4dd6
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$e5177513 }
   * @memberof StandardModel$a4ef4dd6
   */
  ['data']?: StandardModel$e5177513
  /**
   *
   * @type { string }
   * @memberof StandardModel$a4ef4dd6
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$a4ef4dd6
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$29218860
 * @interface StandardModel$29218860
 */
export interface StandardModel$29218860 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$29218860
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$d5bf0fd3 }
   * @memberof StandardModel$29218860
   */
  ['data']?: StandardModel$d5bf0fd3
  /**
   *
   * @type { string }
   * @memberof StandardModel$29218860
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$29218860
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$814c591c
 * @interface StandardModel$814c591c
 */
export interface StandardModel$814c591c {
  /**
   *
   * @type { string }
   * @memberof StandardModel$814c591c
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$003a4e1a }
   * @memberof StandardModel$814c591c
   */
  ['data']?: StandardModel$003a4e1a
  /**
   *
   * @type { string }
   * @memberof StandardModel$814c591c
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$814c591c
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$15001e59
 * @interface StandardModel$15001e59
 */
export interface StandardModel$15001e59 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$15001e59
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$8bda56d9 }
   * @memberof StandardModel$15001e59
   */
  ['data']?: StandardModel$8bda56d9
  /**
   *
   * @type { string }
   * @memberof StandardModel$15001e59
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$15001e59
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$8e5c56f2
 * @interface StandardModel$8e5c56f2
 */
export interface StandardModel$8e5c56f2 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$8e5c56f2
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$05560998 }
   * @memberof StandardModel$8e5c56f2
   */
  ['data']?: StandardModel$05560998
  /**
   *
   * @type { string }
   * @memberof StandardModel$8e5c56f2
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$8e5c56f2
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$cb20ddf8
 * @interface StandardModel$cb20ddf8
 */
export interface StandardModel$cb20ddf8 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$cb20ddf8
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$d67c214e }
   * @memberof StandardModel$cb20ddf8
   */
  ['data']?: StandardModel$d67c214e
  /**
   *
   * @type { string }
   * @memberof StandardModel$cb20ddf8
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$cb20ddf8
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$2b86401e
 * @interface StandardModel$2b86401e
 */
export interface StandardModel$2b86401e {
  /**
   *
   * @type { string }
   * @memberof StandardModel$2b86401e
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$fbb75ab7 }
   * @memberof StandardModel$2b86401e
   */
  ['data']?: StandardModel$fbb75ab7
  /**
   *
   * @type { string }
   * @memberof StandardModel$2b86401e
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$2b86401e
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$bb4baa89
 * @interface StandardModel$bb4baa89
 */
export interface StandardModel$bb4baa89 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$bb4baa89
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$140bdd5b }
   * @memberof StandardModel$bb4baa89
   */
  ['data']?: StandardModel$140bdd5b
  /**
   *
   * @type { string }
   * @memberof StandardModel$bb4baa89
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$bb4baa89
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$3bf24054
 * @interface StandardModel$3bf24054
 */
export interface StandardModel$3bf24054 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$3bf24054
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$3573ed00 }
   * @memberof StandardModel$3bf24054
   */
  ['data']?: StandardModel$3573ed00
  /**
   *
   * @type { string }
   * @memberof StandardModel$3bf24054
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$3bf24054
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$c34ed10c
 * @interface StandardModel$c34ed10c
 */
export interface StandardModel$c34ed10c {
  /**
   *
   * @type { string }
   * @memberof StandardModel$c34ed10c
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$980d7104 }
   * @memberof StandardModel$c34ed10c
   */
  ['data']?: StandardModel$980d7104
  /**
   *
   * @type { string }
   * @memberof StandardModel$c34ed10c
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$c34ed10c
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$5ef558af
 * @interface StandardModel$5ef558af
 */
export interface StandardModel$5ef558af {
  /**
   *
   * @type { string }
   * @memberof StandardModel$5ef558af
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$4c91aad0 }
   * @memberof StandardModel$5ef558af
   */
  ['data']?: StandardModel$4c91aad0
  /**
   *
   * @type { string }
   * @memberof StandardModel$5ef558af
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$5ef558af
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$c909571e
 * @interface StandardModel$c909571e
 */
export interface StandardModel$c909571e {
  /**
   *
   * @type { string }
   * @memberof StandardModel$c909571e
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$04252f76 }
   * @memberof StandardModel$c909571e
   */
  ['data']?: StandardModel$04252f76
  /**
   *
   * @type { string }
   * @memberof StandardModel$c909571e
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$c909571e
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$5313f39c
 * @interface StandardModel$5313f39c
 */
export interface StandardModel$5313f39c {
  /**
   *
   * @type { string }
   * @memberof StandardModel$5313f39c
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$b924d8a7 }
   * @memberof StandardModel$5313f39c
   */
  ['data']?: StandardModel$b924d8a7
  /**
   *
   * @type { string }
   * @memberof StandardModel$5313f39c
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$5313f39c
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$1616d58d
 * @interface StandardModel$1616d58d
 */
export interface StandardModel$1616d58d {
  /**
   *
   * @type { string }
   * @memberof StandardModel$1616d58d
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$99834ca1 }
   * @memberof StandardModel$1616d58d
   */
  ['data']?: StandardModel$99834ca1
  /**
   *
   * @type { string }
   * @memberof StandardModel$1616d58d
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$1616d58d
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$bca2dcff
 * @interface StandardModel$bca2dcff
 */
export interface StandardModel$bca2dcff {
  /**
   *
   * @type { string }
   * @memberof StandardModel$bca2dcff
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$02558f12 }
   * @memberof StandardModel$bca2dcff
   */
  ['data']?: StandardModel$02558f12
  /**
   *
   * @type { string }
   * @memberof StandardModel$bca2dcff
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$bca2dcff
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$ab4ac05e
 * @interface StandardModel$ab4ac05e
 */
export interface StandardModel$ab4ac05e {
  /**
   *
   * @type { string }
   * @memberof StandardModel$ab4ac05e
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$9f971b86 }
   * @memberof StandardModel$ab4ac05e
   */
  ['data']?: StandardModel$9f971b86
  /**
   *
   * @type { string }
   * @memberof StandardModel$ab4ac05e
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$ab4ac05e
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$14ef1887
 * @interface StandardModel$14ef1887
 */
export interface StandardModel$14ef1887 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$14ef1887
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$ec51e3d1 }
   * @memberof StandardModel$14ef1887
   */
  ['data']?: StandardModel$ec51e3d1
  /**
   *
   * @type { string }
   * @memberof StandardModel$14ef1887
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$14ef1887
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$012f57b8
 * @interface StandardModel$012f57b8
 */
export interface StandardModel$012f57b8 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$012f57b8
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$ca5541df }
   * @memberof StandardModel$012f57b8
   */
  ['data']?: StandardModel$ca5541df
  /**
   *
   * @type { string }
   * @memberof StandardModel$012f57b8
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$012f57b8
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$93362358
 * @interface StandardModel$93362358
 */
export interface StandardModel$93362358 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$93362358
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$7efa1f96 }
   * @memberof StandardModel$93362358
   */
  ['data']?: StandardModel$7efa1f96
  /**
   *
   * @type { string }
   * @memberof StandardModel$93362358
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$93362358
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$83177c74
 * @interface StandardModel$83177c74
 */
export interface StandardModel$83177c74 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$83177c74
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$d8df56a8 }
   * @memberof StandardModel$83177c74
   */
  ['data']?: StandardModel$d8df56a8
  /**
   *
   * @type { string }
   * @memberof StandardModel$83177c74
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$83177c74
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$7e00e49a
 * @interface StandardModel$7e00e49a
 */
export interface StandardModel$7e00e49a {
  /**
   *
   * @type { string }
   * @memberof StandardModel$7e00e49a
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$51352897 }
   * @memberof StandardModel$7e00e49a
   */
  ['data']?: StandardModel$51352897
  /**
   *
   * @type { string }
   * @memberof StandardModel$7e00e49a
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$7e00e49a
   */
  ['success']?: boolean
}

/**
 * @summary StandardModel$7ce105c3
 * @interface StandardModel$7ce105c3
 */
export interface StandardModel$7ce105c3 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$7ce105c3
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$a49df917 }
   * @memberof StandardModel$7ce105c3
   */
  ['data']?: StandardModel$a49df917
  /**
   *
   * @type { string }
   * @memberof StandardModel$7ce105c3
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$7ce105c3
   */
  ['success']?: boolean
}

/**
 * @summary Serializable
 * @interface Serializable
 */
export interface Serializable {}

/**
 * @summary UserVO
 * @interface UserVO
 */
export interface UserVO {
  /**
   * 用户Id
   * @type { string }
   * @memberof UserVO
   */
  ['userId']?: string
  /**
   * 用户姓名
   * @type { string }
   * @memberof UserVO
   */
  ['userName']?: string
}

/**
 * @summary StandardModel$8075efbc
 * @interface StandardModel$8075efbc
 */
export interface StandardModel$8075efbc {
  /**
   * 用户名
   * @type { string }
   * @memberof StandardModel$8075efbc
   */
  ['entName']?: string
  /**
   * 用户根目录ID
   * @type { number }
   * @memberof StandardModel$8075efbc
   */
  ['rootFileId']?: number
  /**
   * 用户根目录文件名称
   * @type { string }
   * @memberof StandardModel$8075efbc
   */
  ['rootFilename']?: string
}

/**
 * @summary StandardModel$cb2bb3a8
 * @interface StandardModel$cb2bb3a8
 */
export interface StandardModel$cb2bb3a8 {
  /**
   * 分区名称
   * @type { string }
   * @memberof StandardModel$cb2bb3a8
   */
  ['emissionNodeName']?: string
  /**
   * 排放量
   * @type { number }
   * @memberof StandardModel$cb2bb3a8
   */
  ['emissionValue']?: number
  /**
   * 排放量占比
   * @type { number }
   * @memberof StandardModel$cb2bb3a8
   */
  ['emissionValueRatio']?: number
}

/**
 * @summary StandardModel$61d47e60
 * @interface StandardModel$61d47e60
 */
export interface StandardModel$61d47e60 {
  /**
   * 分区统计
   * @type { StandardModel$cb2bb3a8[] }
   * @memberof StandardModel$61d47e60
   */
  ['treeAnalysis']?: StandardModel$cb2bb3a8[]
}

/**
 * @summary StandardModel$9c8a1964
 * @interface StandardModel$9c8a1964
 */
export interface StandardModel$9c8a1964 {
  /**
   *
   * @type { AlarmResultInfoVO[] }
   * @memberof StandardModel$9c8a1964
   */
  ['list']?: AlarmResultInfoVO[]
  /**
   *
   * @type { number }
   * @memberof StandardModel$9c8a1964
   */
  ['pageNum']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$9c8a1964
   */
  ['pageSize']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$9c8a1964
   */
  ['pageTotal']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$9c8a1964
   */
  ['total']?: number
}

/**
 * @summary StandardModel$e5177513
 * @interface StandardModel$e5177513
 */
export interface StandardModel$e5177513 {
  /**
   *
   * @type { StandardModel$a3a913cf[] }
   * @memberof StandardModel$e5177513
   */
  ['list']?: StandardModel$a3a913cf[]
  /**
   *
   * @type { number }
   * @memberof StandardModel$e5177513
   */
  ['pageNum']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$e5177513
   */
  ['pageSize']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$e5177513
   */
  ['pageTotal']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$e5177513
   */
  ['total']?: number
}

/**
 * @summary StandardModel$5788a977
 * @interface StandardModel$5788a977
 */
export interface StandardModel$5788a977 {
  /**
   * 文件夹名称
   * @type { string }
   * @memberof StandardModel$5788a977
   */
  ['folderName']: string
  /**
   * 页码
   * @type { number }
   * @memberof StandardModel$5788a977
   */
  ['pageNum']: number
  /**
   * 每页记录数
   * @type { number }
   * @memberof StandardModel$5788a977
   */
  ['pageSize']: number
  /**
   * 父级ID
   * @type { number }
   * @memberof StandardModel$5788a977
   */
  ['parentId']: number
}

/**
 * @summary StandardModel$c9e2c231
 * @interface StandardModel$c9e2c231
 */
export interface StandardModel$c9e2c231 {
  /**
   * 要删除的文件记录ID，多个用__,__隔开
   * @type { string }
   * @memberof StandardModel$c9e2c231
   */
  ['fileIds']: string
  /**
   * 页码
   * @type { number }
   * @memberof StandardModel$c9e2c231
   */
  ['pageNum']: number
  /**
   * 每页记录数
   * @type { number }
   * @memberof StandardModel$c9e2c231
   */
  ['pageSize']: number
  /**
   * 父级ID
   * @type { number }
   * @memberof StandardModel$c9e2c231
   */
  ['parentId']: number
}

/**
 * @summary StandardModel$8d5e8237
 * @interface StandardModel$8d5e8237
 */
export interface StandardModel$8d5e8237 {
  /**
   * 时间
   * @type { string }
   * @memberof StandardModel$8d5e8237
   */
  ['time']?: string
  /**
   * 数值
   * @type { number }
   * @memberof StandardModel$8d5e8237
   */
  ['value']?: number
}

/**
 * @summary StandardModel$83288cd2
 * @interface StandardModel$83288cd2
 */
export interface StandardModel$83288cd2 {
  /**
   * 结束时间
   * @type { string }
   * @memberof StandardModel$83288cd2
   */
  ['endDate']?: string
  /**
   * 开始日期
   * @type { string }
   * @memberof StandardModel$83288cd2
   */
  ['startDate']?: string
  /**
   * 时间粒度(D:日;M:月;Y:年;C:自定义;)
   * @type { string }
   * @memberof StandardModel$83288cd2
   */
  ['timeScale']?: string
}

/**
 * @summary StandardModel$eb250dca
 * @interface StandardModel$eb250dca
 */
export interface StandardModel$eb250dca {
  /**
   * 统计时间
   * @type { string }
   * @memberof StandardModel$eb250dca
   */
  ['emissionDate']?: string
  /**
   * 碳排量
   * @type { number }
   * @memberof StandardModel$eb250dca
   */
  ['emissionValue']?: number
  /**
   * 产量
   * @type { number }
   * @memberof StandardModel$eb250dca
   */
  ['productValue']?: number
}

/**
 * @summary StandardModel$deb4dfdb
 * @interface StandardModel$deb4dfdb
 */
export interface StandardModel$deb4dfdb {
  /**
   * 编码
   * @type { string }
   * @memberof StandardModel$deb4dfdb
   */
  ['code']?: string
  /**
   * 名称
   * @type { string }
   * @memberof StandardModel$deb4dfdb
   */
  ['name']?: string
  /**
   * 单位
   * @type { string }
   * @memberof StandardModel$deb4dfdb
   */
  ['unit']?: string
  /**
   * 系统报警集合
   * @type { StandardModel$455dcba9[] }
   * @memberof StandardModel$deb4dfdb
   */
  ['values']?: StandardModel$455dcba9[]
}

/**
 * @summary StandardModel$816072dd
 * @interface StandardModel$816072dd
 */
export interface StandardModel$816072dd {
  /**
   * 文件名称
   * @type { string }
   * @memberof StandardModel$816072dd
   */
  ['fileName']?: string
  /**
   * 文件上传地址
   * @type { string }
   * @memberof StandardModel$816072dd
   */
  ['fileUploadUrl']?: string
  /**
   * id
   * @type { number }
   * @memberof StandardModel$816072dd
   */
  ['id']?: number
  /**
   * 操作日志id
   * @type { string }
   * @memberof StandardModel$816072dd
   */
  ['operationLogId']?: string
}

/**
 * @summary StandardModel$d5bf0fd3
 * @interface StandardModel$d5bf0fd3
 */
export interface StandardModel$d5bf0fd3 {
  /**
   * 已关闭数
   * @type { number }
   * @memberof StandardModel$d5bf0fd3
   */
  ['closed']?: number
  /**
   * 待处理数
   * @type { number }
   * @memberof StandardModel$d5bf0fd3
   */
  ['pending']?: number
  /**
   * 告警总数
   * @type { number }
   * @memberof StandardModel$d5bf0fd3
   */
  ['total']?: number
}

/**
 * @summary StandardModel$1ce98014
 * @interface StandardModel$1ce98014
 */
export interface StandardModel$1ce98014 {
  /**
   * 图例code
   * @type { string }
   * @memberof StandardModel$1ce98014
   */
  ['code']?: string
  /**
   * 已处理/未处理/处理率
   * @type { string }
   * @memberof StandardModel$1ce98014
   */
  ['name']?: string
  /**
   * 单位
   * @type { string }
   * @memberof StandardModel$1ce98014
   */
  ['unit']?: string
  /**
   * 告警数据集合
   * @type { StandardModel$a5f2dfb6[] }
   * @memberof StandardModel$1ce98014
   */
  ['values']?: StandardModel$a5f2dfb6[]
}

/**
 * @summary StandardModel$a3a913cf
 * @interface StandardModel$a3a913cf
 */
export interface StandardModel$a3a913cf {
  /**
   * 告警等级
   * @type { string }
   * @memberof StandardModel$a3a913cf
   */
  ['alarmLevel']?: string
  /**
   * 告警等级名称
   * @type { string }
   * @memberof StandardModel$a3a913cf
   */
  ['alarmLevelName']?: string
  /**
   * 告警关联的id
   * @type { string }
   * @memberof StandardModel$a3a913cf
   */
  ['alarmRelatedId']?: string
  /**
   * 告警标题
   * @type { string }
   * @memberof StandardModel$a3a913cf
   */
  ['alarmTitle']?: string
  /**
   * 告警类型
   * @type { string }
   * @memberof StandardModel$a3a913cf
   */
  ['alarmType']?: string
  /**
   * 告警时间
   * @type { string }
   * @memberof StandardModel$a3a913cf
   */
  ['createTime']?: string
  /**
   * 告警是否处理，0:未处理，1:已处理
   * @type { string }
   * @memberof StandardModel$a3a913cf
   */
  ['dealStatus']?: string
  /**
   * 告警内容
   * @type { string }
   * @memberof StandardModel$a3a913cf
   */
  ['description']?: string
  /**
   * 设备名称
   * @type { string }
   * @memberof StandardModel$a3a913cf
   */
  ['equipName']?: string
  /**
   * 告警id
   * @type { string }
   * @memberof StandardModel$a3a913cf
   */
  ['id']?: string
  /**
   * 告警是否已读，0:未读，1:已读
   * @type { string }
   * @memberof StandardModel$a3a913cf
   */
  ['readStatus']?: string
  /**
   * 告警是否恢复，0:未恢复，1:已恢复
   * @type { string }
   * @memberof StandardModel$a3a913cf
   */
  ['recoverStatus']?: string
}

/**
 * @summary StandardModel$7e18c3a8
 * @interface StandardModel$7e18c3a8
 */
export interface StandardModel$7e18c3a8 {
  /**
   * 告警主键id
   * @type { string }
   * @memberof StandardModel$7e18c3a8
   */
  ['alarmId']?: string
  /**
   * 告警内容
   * @type { string }
   * @memberof StandardModel$7e18c3a8
   */
  ['content']?: string
  /**
   * 告警等级
   * @type { string }
   * @memberof StandardModel$7e18c3a8
   */
  ['level']?: string
  /**
   * 告警状态
   * @type { string }
   * @memberof StandardModel$7e18c3a8
   */
  ['status']?: string
  /**
   * 告警时间
   * @type { string }
   * @memberof StandardModel$7e18c3a8
   */
  ['time']?: string
}

/**
 * @summary StandardModel$6830794a
 * @interface StandardModel$6830794a
 */
export interface StandardModel$6830794a {
  /**
   * 等级编码
   * @type { string }
   * @memberof StandardModel$6830794a
   */
  ['code']?: string
  /**
   * 等级名字
   * @type { string }
   * @memberof StandardModel$6830794a
   */
  ['name']?: string
  /**
   * 单位
   * @type { string }
   * @memberof StandardModel$6830794a
   */
  ['unit']?: string
  /**
   * 趋势数据
   * @type { LineDataVO[] }
   * @memberof StandardModel$6830794a
   */
  ['values']?: LineDataVO[]
}

/**
 * @summary StandardModel$957cc2b2
 * @interface StandardModel$957cc2b2
 */
export interface StandardModel$957cc2b2 {
  /**
   * 告警类别
   * @type { string }
   * @memberof StandardModel$957cc2b2
   */
  ['alarmType']?: string
  /**
   * 告警类别名称
   * @type { string }
   * @memberof StandardModel$957cc2b2
   */
  ['alarmTypeName']?: string
  /**
   * 告警类别分组告警次数
   * @type { StandardModel$ed52de17[] }
   * @memberof StandardModel$957cc2b2
   */
  ['lineData']?: StandardModel$ed52de17[]
}

/**
 * @summary StandardModel$73319104
 * @interface StandardModel$73319104
 */
export interface StandardModel$73319104 {
  /**
   * 报警类别编码
   * @type { string }
   * @memberof StandardModel$73319104
   */
  ['code']?: string
  /**
   * 报警类别名称
   * @type { string }
   * @memberof StandardModel$73319104
   */
  ['name']?: string
  /**
   * 趋势数据
   * @type { StandardModel$ed52de17[] }
   * @memberof StandardModel$73319104
   */
  ['values']?: StandardModel$ed52de17[]
}

/**
 * @summary StandardModel$382c9479
 * @interface StandardModel$382c9479
 */
export interface StandardModel$382c9479 {
  /**
   * 告警id
   * @type { string }
   * @memberof StandardModel$382c9479
   */
  ['alarmId']?: string
  /**
   * 指标编码
   * @type { string }
   * @memberof StandardModel$382c9479
   */
  ['code']?: string
  /**
   * 当前值
   * @type { number }
   * @memberof StandardModel$382c9479
   */
  ['currentValue']?: number
  /**
   * 状态：0：未处理，1：已处理
   * @type { number }
   * @memberof StandardModel$382c9479
   */
  ['dealStatus']?: number
  /**
   * 指标编号
   * @type { number }
   * @memberof StandardModel$382c9479
   */
  ['id']?: number
  /**
   * 指标名称
   * @type { string }
   * @memberof StandardModel$382c9479
   */
  ['name']?: string
  /**
   * 标准值
   * @type { string }
   * @memberof StandardModel$382c9479
   */
  ['standardInterval']?: string
  /**
   * 状态：0：不达标，1：达标
   * @type { number }
   * @memberof StandardModel$382c9479
   */
  ['status']?: number
  /**
   * 单位
   * @type { string }
   * @memberof StandardModel$382c9479
   */
  ['unit']?: string
}

/**
 * @summary StandardModel$69693e6b
 * @interface StandardModel$69693e6b
 */
export interface StandardModel$69693e6b {
  /**
   * 要删除的文件记录ID，多个用__,__隔开
   * @type { string }
   * @memberof StandardModel$69693e6b
   */
  ['fileIds']: string
  /**
   * 页码
   * @type { number }
   * @memberof StandardModel$69693e6b
   */
  ['pageNum']: number
  /**
   * 每页记录数
   * @type { number }
   * @memberof StandardModel$69693e6b
   */
  ['pageSize']: number
}

/**
 * @summary StandardModel$4163b1fe
 * @interface StandardModel$4163b1fe
 */
export interface StandardModel$4163b1fe {
  /**
   * 要复制的文件ID，多个用__,__隔开
   * @type { string }
   * @memberof StandardModel$4163b1fe
   */
  ['fileIds']: string
  /**
   * 页码
   * @type { number }
   * @memberof StandardModel$4163b1fe
   */
  ['pageNum']: number
  /**
   * 每页记录数
   * @type { number }
   * @memberof StandardModel$4163b1fe
   */
  ['pageSize']: number
  /**
   * 当前目录的父级目录ID
   * @type { number }
   * @memberof StandardModel$4163b1fe
   */
  ['parentId']: number
  /**
   * 要复制到的文件夹ID
   * @type { number }
   * @memberof StandardModel$4163b1fe
   */
  ['targetParentId']: number
}

/**
 * @summary StandardModel$393c2934
 * @interface StandardModel$393c2934
 */
export interface StandardModel$393c2934 {
  /**
   * 告警编号
   * @type { string }
   * @memberof StandardModel$393c2934
   */
  ['alarmId']?: string
  /**
   * 告警级别，1：严重，2：重要，3：一般，4：提醒
   * @type { string }
   * @memberof StandardModel$393c2934
   */
  ['alarmMainLevel']?: string
  /**
   * 告警内容
   * @type { string }
   * @memberof StandardModel$393c2934
   */
  ['alarmMsg']?: string
  /**
   * 告警发生时间
   * @type { string }
   * @memberof StandardModel$393c2934
   */
  ['alarmTime']?: string
  /**
   * 状态：0：未处理，1：已处理
   * @type { number }
   * @memberof StandardModel$393c2934
   */
  ['dealStatus']?: number
  /**
   * 告警恢复状态,0:未恢复，1：恢复
   * @type { string }
   * @memberof StandardModel$393c2934
   */
  ['status']?: string
}

/**
 * @summary StandardModel$003a4e1a
 * @interface StandardModel$003a4e1a
 */
export interface StandardModel$003a4e1a {
  /**
   * 饼图数据
   * @type { StandardModel$2f2ce52c[] }
   * @memberof StandardModel$003a4e1a
   */
  ['yearEmissionCompareBarVOList']?: StandardModel$2f2ce52c[]
  /**
   *
   * @type { StandardModel$8bda56d9 }
   * @memberof StandardModel$003a4e1a
   */
  ['yearEmissionCompareColumnarVo']?: StandardModel$8bda56d9
}

/**
 * @summary StandardModel$580625cf
 * @interface StandardModel$580625cf
 */
export interface StandardModel$580625cf {
  /**
   * 结束年份
   * @type { string }
   * @memberof StandardModel$580625cf
   */
  ['endYear']?: string
  /**
   * 开始年份
   * @type { string }
   * @memberof StandardModel$580625cf
   */
  ['startYear']?: string
}

/**
 * @summary StandardModel$8bda56d9
 * @interface StandardModel$8bda56d9
 */
export interface StandardModel$8bda56d9 {
  /**
   *
   * @type { string[] }
   * @memberof StandardModel$8bda56d9
   */
  ['xdata']?: string[]
  /**
   *
   * @type { any }
   * @memberof StandardModel$8bda56d9
   */
  ['ydata']?: any
}

/**
 * @summary StandardModel$2f2ce52c
 * @interface StandardModel$2f2ce52c
 */
export interface StandardModel$2f2ce52c {
  /**
   * 饼图数据
   * @type { StandardModel$effec77e[] }
   * @memberof StandardModel$2f2ce52c
   */
  ['data']?: StandardModel$effec77e[]
  /**
   * 类型 scope:范围对比 product:生产附属对比
   * @type { string }
   * @memberof StandardModel$2f2ce52c
   */
  ['type']?: string
  /**
   * 年份
   * @type { string }
   * @memberof StandardModel$2f2ce52c
   */
  ['year']?: string
}

/**
 * @summary StandardModel$05560998
 * @interface StandardModel$05560998
 */
export interface StandardModel$05560998 {
  /**
   * 年度维修费用预算
   * @type { string }
   * @memberof StandardModel$05560998
   */
  ['budget']?: string
  /**
   * 年度维修费用结余
   * @type { string }
   * @memberof StandardModel$05560998
   */
  ['remained']?: string
  /**
   * 已产生维修金额
   * @type { string }
   * @memberof StandardModel$05560998
   */
  ['used']?: string
}

/**
 * @summary StandardModel$d67c214e
 * @interface StandardModel$d67c214e
 */
export interface StandardModel$d67c214e {
  /**
   * 能源制造总成本
   * @type { string }
   * @memberof StandardModel$d67c214e
   */
  ['productionTotalCost']?: string
  /**
   * 制造成本单位
   * @type { string }
   * @memberof StandardModel$d67c214e
   */
  ['productionUnit']?: string
  /**
   * 能源购入总成本
   * @type { string }
   * @memberof StandardModel$d67c214e
   */
  ['purchaseTotalCost']?: string
  /**
   * 购入成本单位
   * @type { string }
   * @memberof StandardModel$d67c214e
   */
  ['purchaseUnit']?: string
}

/**
 * @summary StandardModel$fbb75ab7
 * @interface StandardModel$fbb75ab7
 */
export interface StandardModel$fbb75ab7 {
  /**
   * 压缩空气制造（药剂费）
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['airCompressionMedicinePrice']?: number
  /**
   * 压缩空气制造
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['airCompressionPrice']?: number
  /**
   * 压缩空气制造（维修费）
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['airCompressionRepairPrice']?: number
  /**
   * 压缩空气制造标准单成
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['airCompressionStandardUnit']?: number
  /**
   * 核准责任人
   * @type { string }
   * @memberof StandardModel$fbb75ab7
   */
  ['approvedPerson']?: string
  /**
   * 成本归属时间 YYYY-MM
   * @type { string }
   * @memberof StandardModel$fbb75ab7
   */
  ['costTime']: string
  /**
   * 所属年份
   * @type { string }
   * @memberof StandardModel$fbb75ab7
   */
  ['costYear']?: string
  /**
   * 电月度能购入总成本
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['electricityTotalCost']?: number
  /**
   * 制造成本集合
   * @type { StandardModel$c0f3adc2[] }
   * @memberof StandardModel$fbb75ab7
   */
  ['fabricatingCostList']?: StandardModel$c0f3adc2[]
  /**
   * 月度能制造总成本
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['fabricatingTotalCost']?: number
  /**
   * 信息填报人
   * @type { string }
   * @memberof StandardModel$fbb75ab7
   */
  ['fillingPerson']?: string
  /**
   * 完成
   * @type { boolean }
   * @memberof StandardModel$fbb75ab7
   */
  ['finish']?: boolean
  /**
   * 燃气月度能购入总成本
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['gasTotalCost']?: number
  /**
   * 购气单价
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['gasUnitPrice']?: number
  /**
   * 冰水制造（药剂费）
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['iceWaterMedicinePrice']?: number
  /**
   * 冰水制造
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['iceWaterPrice']?: number
  /**
   * 冰水制造（维修费）
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['iceWaterRepairPrice']?: number
  /**
   * 冰水制造标准单成
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['iceWaterStandardUnit']?: number
  /**
   *  成本id
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['id']?: number
  /**
   * 污泥处置费
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['mudDisposalPrice']?: number
  /**
   * 购电单价
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['powerUnitPrice']?: number
  /**
   * 纯净水制造（药剂费）
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['pureWaterMedicinePrice']?: number
  /**
   * 纯净水制造
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['pureWaterPrice']?: number
  /**
   * 纯净水制造（维修费）
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['pureWaterRepairPrice']?: number
  /**
   * 纯净水制造标准单成
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['pureWaterStandardUnit']?: number
  /**
   * 污水处理（药剂费）
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['sewageMedicinePrice']?: number
  /**
   * 污水处理制造
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['sewagePrice']?: number
  /**
   * 污水处理（维修费）
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['sewageRepairPrice']?: number
  /**
   * 单吨污水处理标准成本
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['sewageStandardUnit']?: number
  /**
   * 软化水制造（药剂费）
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['softWaterMedicinePrice']?: number
  /**
   * 软化水制造
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['softWaterPrice']?: number
  /**
   * 软化水制造（维修费）
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['softWaterRepairPrice']?: number
  /**
   * 软化水制造标准单成
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['softWaterStandardUnit']?: number
  /**
   * 蒸汽制造（药剂费）
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['steamMedicinePrice']?: number
  /**
   * 蒸汽制造
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['steamPrice']?: number
  /**
   * 蒸汽制造（维修费)
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['steamRepairPrice']?: number
  /**
   * 蒸汽制造标准单成
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['steamStandardUnit']?: number
  /**
   * 系统code
   * @type { string }
   * @memberof StandardModel$fbb75ab7
   */
  ['systemCode']?: string
  /**
   * 月能耗总成本
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['totalCost']?: number
  /**
   * 更新时间
   * @type { string }
   * @memberof StandardModel$fbb75ab7
   */
  ['updateDate']?: string
  /**
   * 水月度能购入总成本
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['waterTotalCost']?: number
  /**
   * 购水单价
   * @type { number }
   * @memberof StandardModel$fbb75ab7
   */
  ['waterUnitPrice']?: number
}

/**
 * @summary StandardModel$299397e8
 * @interface StandardModel$299397e8
 */
export interface StandardModel$299397e8 {
  /**
   * 系统code
   * @type { string }
   * @memberof StandardModel$299397e8
   */
  ['systemCode']: string
  /**
   * 导出年份
   * @type { string }
   * @memberof StandardModel$299397e8
   */
  ['year']: string
}

/**
 * @summary StandardModel$d92b6d43
 * @interface StandardModel$d92b6d43
 */
export interface StandardModel$d92b6d43 {
  /**
   * 压缩空气制造（药剂费）
   * @type { number }
   * @memberof StandardModel$d92b6d43
   */
  ['airCompressionMedicinePrice']?: number
  /**
   * 压缩空气制造（维修费）
   * @type { number }
   * @memberof StandardModel$d92b6d43
   */
  ['airCompressionRepairPrice']?: number
  /**
   * 压缩空气制造标准单成
   * @type { number }
   * @memberof StandardModel$d92b6d43
   */
  ['airCompressionStandardUnit']?: number
  /**
   * 核准责任人
   * @type { string }
   * @memberof StandardModel$d92b6d43
   */
  ['approvedPerson']?: string
  /**
   * 成本归属时间 YYYY-MM
   * @type { string }
   * @memberof StandardModel$d92b6d43
   */
  ['costTime']: string
  /**
   * 所属年份
   * @type { string }
   * @memberof StandardModel$d92b6d43
   */
  ['costYear']?: string
  /**
   * 信息填报人
   * @type { string }
   * @memberof StandardModel$d92b6d43
   */
  ['fillingPerson']?: string
  /**
   * 购气单价
   * @type { number }
   * @memberof StandardModel$d92b6d43
   */
  ['gasUnitPrice']?: number
  /**
   * 冰水制造（药剂费）
   * @type { number }
   * @memberof StandardModel$d92b6d43
   */
  ['iceWaterMedicinePrice']?: number
  /**
   * 冰水制造（维修费）
   * @type { number }
   * @memberof StandardModel$d92b6d43
   */
  ['iceWaterRepairPrice']?: number
  /**
   * 冰水制造标准单成
   * @type { number }
   * @memberof StandardModel$d92b6d43
   */
  ['iceWaterStandardUnit']?: number
  /**
   *  成本id
   * @type { number }
   * @memberof StandardModel$d92b6d43
   */
  ['id']?: number
  /**
   * 污泥处置费
   * @type { number }
   * @memberof StandardModel$d92b6d43
   */
  ['mudDisposalPrice']?: number
  /**
   * 购电单价
   * @type { number }
   * @memberof StandardModel$d92b6d43
   */
  ['powerUnitPrice']?: number
  /**
   * 纯净水制造（药剂费）
   * @type { number }
   * @memberof StandardModel$d92b6d43
   */
  ['pureWaterMedicinePrice']?: number
  /**
   * 纯净水制造（维修费）
   * @type { number }
   * @memberof StandardModel$d92b6d43
   */
  ['pureWaterRepairPrice']?: number
  /**
   * 纯净水制造标准单成
   * @type { number }
   * @memberof StandardModel$d92b6d43
   */
  ['pureWaterStandardUnit']?: number
  /**
   * 污水处理（药剂费）
   * @type { number }
   * @memberof StandardModel$d92b6d43
   */
  ['sewageMedicinePrice']?: number
  /**
   * 污水处理（维修费）
   * @type { number }
   * @memberof StandardModel$d92b6d43
   */
  ['sewageRepairPrice']?: number
  /**
   * 单吨污水处理标准成本
   * @type { number }
   * @memberof StandardModel$d92b6d43
   */
  ['sewageStandardUnit']?: number
  /**
   * 软化水制造（药剂费）
   * @type { number }
   * @memberof StandardModel$d92b6d43
   */
  ['softWaterMedicinePrice']?: number
  /**
   * 软化水制造（维修费）
   * @type { number }
   * @memberof StandardModel$d92b6d43
   */
  ['softWaterRepairPrice']?: number
  /**
   * 软化水制造标准单成
   * @type { number }
   * @memberof StandardModel$d92b6d43
   */
  ['softWaterStandardUnit']?: number
  /**
   * 蒸汽制造（药剂费）
   * @type { number }
   * @memberof StandardModel$d92b6d43
   */
  ['steamMedicinePrice']?: number
  /**
   * 蒸汽制造（维修费)
   * @type { number }
   * @memberof StandardModel$d92b6d43
   */
  ['steamRepairPrice']?: number
  /**
   * 蒸汽制造标准单成
   * @type { number }
   * @memberof StandardModel$d92b6d43
   */
  ['steamStandardUnit']?: number
  /**
   * 系统code
   * @type { string }
   * @memberof StandardModel$d92b6d43
   */
  ['systemCode']?: string
  /**
   * 购水单价
   * @type { number }
   * @memberof StandardModel$d92b6d43
   */
  ['waterUnitPrice']?: number
}

/**
 * @summary StandardModel$0c8142eb
 * @interface StandardModel$0c8142eb
 */
export interface StandardModel$0c8142eb {
  /**
   * 能源名称
   * @type { string }
   * @memberof StandardModel$0c8142eb
   */
  ['name']?: string
  /**
   * 展示顺序
   * @type { string }
   * @memberof StandardModel$0c8142eb
   */
  ['sort']?: string
  /**
   * 能源类型
   * @type { string }
   * @memberof StandardModel$0c8142eb
   */
  ['type']?: string
}

/**
 * @summary StandardModel$e34cac17
 * @interface StandardModel$e34cac17
 */
export interface StandardModel$e34cac17 {
  /**
   * 编码,1:严重，2：重要，3：一般，4：提醒
   * @type { string }
   * @memberof StandardModel$e34cac17
   */
  ['code']?: string
  /**
   * 统计对象，严重，重要，一般，提醒
   * @type { string }
   * @memberof StandardModel$e34cac17
   */
  ['name']?: string
  /**
   * 统计值
   * @type { number }
   * @memberof StandardModel$e34cac17
   */
  ['value']?: number
}

/**
 * @summary StandardModel$648f58aa
 * @interface StandardModel$648f58aa
 */
export interface StandardModel$648f58aa {
  /**
   * 统计对象
   * @type { string }
   * @memberof StandardModel$648f58aa
   */
  ['name']?: string
  /**
   * 统计值
   * @type { number }
   * @memberof StandardModel$648f58aa
   */
  ['value']?: number
}

/**
 * @summary StandardModel$362c5c88
 * @interface StandardModel$362c5c88
 */
export interface StandardModel$362c5c88 {
  /**
   * 查询日期
   * @type { string }
   * @memberof StandardModel$362c5c88
   */
  ['queryDate']?: string
  /**
   * 时间粒度(D:日;M:月;Y:年;C:自定义;)
   * @type { string }
   * @memberof StandardModel$362c5c88
   */
  ['timeScale']?: string
}

/**
 * @summary StandardModel$039e49b5
 * @interface StandardModel$039e49b5
 */
export interface StandardModel$039e49b5 {
  /**
   * 排放源
   * @type { string }
   * @memberof StandardModel$039e49b5
   */
  ['emissionCategoryDetail']?: string
  /**
   * 排放量
   * @type { number }
   * @memberof StandardModel$039e49b5
   */
  ['emissionValue']?: number
  /**
   * 排放量占比
   * @type { number }
   * @memberof StandardModel$039e49b5
   */
  ['emissionValueRatio']?: number
}

/**
 * @summary StandardModel$ed52de17
 * @interface StandardModel$ed52de17
 */
export interface StandardModel$ed52de17 {
  /**
   * 时间
   * @type { string }
   * @memberof StandardModel$ed52de17
   */
  ['time']?: string
  /**
   * 值
   * @type { string }
   * @memberof StandardModel$ed52de17
   */
  ['value']?: string
}

/**
 * @summary StandardModel$0fbf74c7
 * @interface StandardModel$0fbf74c7
 */
export interface StandardModel$0fbf74c7 {
  /**
   * 子节点
   * @type { StandardModel$0fbf74c7[] }
   * @memberof StandardModel$0fbf74c7
   */
  ['children']?: StandardModel$0fbf74c7[]
  /**
   * 唯一标识
   * @type { number }
   * @memberof StandardModel$0fbf74c7
   */
  ['id']?: number
  /**
   * 节点显示标题
   * @type { string }
   * @memberof StandardModel$0fbf74c7
   */
  ['label']?: string
  /**
   * 父文件夹ID
   * @type { number }
   * @memberof StandardModel$0fbf74c7
   */
  ['parentId']?: number
}

/**
 * @summary StandardModel$d186030e
 * @interface StandardModel$d186030e
 */
export interface StandardModel$d186030e {
  /**
   * 文件对应的md5
   * @type { string }
   * @memberof StandardModel$d186030e
   */
  ['md5']: string
  /**
   * 文件名称
   * @type { string }
   * @memberof StandardModel$d186030e
   */
  ['name']: string
  /**
   * 父id
   * @type { number }
   * @memberof StandardModel$d186030e
   */
  ['parentId']: number
}

/**
 * @summary StandardModel$140bdd5b
 * @interface StandardModel$140bdd5b
 */
export interface StandardModel$140bdd5b {
  /**
   * 创建时间
   * @type { string }
   * @memberof StandardModel$140bdd5b
   */
  ['createTime']?: string
  /**
   * 主键
   * @type { number }
   * @memberof StandardModel$140bdd5b
   */
  ['fileId']?: number
  /**
   * 文件大小
   * @type { string }
   * @memberof StandardModel$140bdd5b
   */
  ['fileSizeDesc']?: string
  /**
   * 文件类型 文件类型（1 文件 2 压缩文件 3 excel 4 word 5 pdf 6 txt 7 图片 8 音频 9 视频 10 ppt 11 源码文件）
   * @type { number }
   * @memberof StandardModel$140bdd5b
   */
  ['fileType']?: number
  /**
   * 文件名称
   * @type { string }
   * @memberof StandardModel$140bdd5b
   */
  ['filename']?: string
  /**
   * 文件夹标识 0 否 1 是
   * @type { number }
   * @memberof StandardModel$140bdd5b
   */
  ['folderFlag']?: number
  /**
   * 父id
   * @type { number }
   * @memberof StandardModel$140bdd5b
   */
  ['parentId']?: number
  /**
   * 更新时间
   * @type { string }
   * @memberof StandardModel$140bdd5b
   */
  ['updateTime']?: string
}

/**
 * @summary StandardModel$3573ed00
 * @interface StandardModel$3573ed00
 */
export interface StandardModel$3573ed00 {
  /**
   * 能源品质数据
   * @type { StandardModel$2d1785f5[] }
   * @memberof StandardModel$3573ed00
   */
  ['energyQualityList']?: StandardModel$2d1785f5[]
  /**
   * 设备运行报警
   * @type { StandardModel$393c2934[] }
   * @memberof StandardModel$3573ed00
   */
  ['equipmentAlarmList']?: StandardModel$393c2934[]
  /**
   * 系统安全报警
   * @type { StandardModel$393c2934[] }
   * @memberof StandardModel$3573ed00
   */
  ['systemAlarmList']?: StandardModel$393c2934[]
}

/**
 * @summary StandardModel$0cea3455
 * @interface StandardModel$0cea3455
 */
export interface StandardModel$0cea3455 {
  /**
   * 文件记录ID
   * @type { number }
   * @memberof StandardModel$0cea3455
   */
  ['fileId']: number
  /**
   * 新文件名
   * @type { string }
   * @memberof StandardModel$0cea3455
   */
  ['newFilename']: string
  /**
   * 页码
   * @type { number }
   * @memberof StandardModel$0cea3455
   */
  ['pageNum']: number
  /**
   * 每页记录数
   * @type { number }
   * @memberof StandardModel$0cea3455
   */
  ['pageSize']: number
}

/**
 * @summary StandardModel$c0f3adc2
 * @interface StandardModel$c0f3adc2
 */
export interface StandardModel$c0f3adc2 {
  /**
   * 实际制造单成
   * @type { string }
   * @memberof StandardModel$c0f3adc2
   */
  ['actualUnit']?: string
  /**
   * 月度制造总成本
   * @type { string }
   * @memberof StandardModel$c0f3adc2
   */
  ['energyFabricatingCost']?: string
  /**
   * 能介名称
   * @type { string }
   * @memberof StandardModel$c0f3adc2
   */
  ['energyName']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$c0f3adc2
   */
  ['scale']?: string
  /**
   * 标准制造单成
   * @type { string }
   * @memberof StandardModel$c0f3adc2
   */
  ['standardUnit']?: string
}

/**
 * @summary StandardModel$980d7104
 * @interface StandardModel$980d7104
 */
export interface StandardModel$980d7104 {
  /**
   * 告警消息
   * @type { number }
   * @memberof StandardModel$980d7104
   */
  ['alarm']?: number
  /**
   * 站内信
   * @type { number }
   * @memberof StandardModel$980d7104
   */
  ['mail']?: number
}

/**
 * @summary StandardModel$5a5a88de
 * @interface StandardModel$5a5a88de
 */
export interface StandardModel$5a5a88de {
  /**
   * 维修月份结束区间yyyy-MM
   * @type { string }
   * @memberof StandardModel$5a5a88de
   */
  ['endDate']?: string
  /**
   * 费用状态（1-超额，2-未超额，0或空-全部）
   * @type { string }
   * @memberof StandardModel$5a5a88de
   */
  ['feeStatus']?: string
  /**
   * 维修位置(模糊查询)
   * @type { string }
   * @memberof StandardModel$5a5a88de
   */
  ['location']?: string
  /**
   * 维修进度（1-未开始，2-进行中，3-已结束，0或空-全部）
   * @type { string }
   * @memberof StandardModel$5a5a88de
   */
  ['maintainStatus']?: string
  /**
   * 维修月份开始区间yyyy-MM
   * @type { string }
   * @memberof StandardModel$5a5a88de
   */
  ['startDate']?: string
}

/**
 * @summary StandardModel$4c91aad0
 * @interface StandardModel$4c91aad0
 */
export interface StandardModel$4c91aad0 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$4c91aad0
   */
  ['createDate']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$4c91aad0
   */
  ['createName']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$4c91aad0
   */
  ['creator']?: string
  /**
   *
   * @type { number }
   * @memberof StandardModel$4c91aad0
   */
  ['id']?: number
  /**
   *
   * @type { string }
   * @memberof StandardModel$4c91aad0
   */
  ['liablePerson']?: string
  /**
   *
   * @type { number }
   * @memberof StandardModel$4c91aad0
   */
  ['liablePersonId']?: number
  /**
   *
   * @type { string }
   * @memberof StandardModel$4c91aad0
   */
  ['overhaulEndTime']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$4c91aad0
   */
  ['overhaulMeasures']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$4c91aad0
   */
  ['overhaulPlace']?: string
  /**
   *
   * @type { number }
   * @memberof StandardModel$4c91aad0
   */
  ['overhaulPlaceId']?: number
  /**
   *
   * @type { string }
   * @memberof StandardModel$4c91aad0
   */
  ['overhaulScheduleName']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$4c91aad0
   */
  ['overhaulStartTime']?: string
  /**
   *
   * @type { number }
   * @memberof StandardModel$4c91aad0
   */
  ['overhaulStatus']?: number
  /**
   *
   * @type { string }
   * @memberof StandardModel$4c91aad0
   */
  ['overhaulStatusDesc']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$4c91aad0
   */
  ['tenantId']?: string
}

/**
 * @summary StandardModel$c5fa3293
 * @interface StandardModel$c5fa3293
 */
export interface StandardModel$c5fa3293 {
  /**
   * 责任人
   * @type { string }
   * @memberof StandardModel$c5fa3293
   */
  ['liablePerson']?: string
  /**
   * 责任人id
   * @type { number }
   * @memberof StandardModel$c5fa3293
   */
  ['liablePersonId']?: number
  /**
   * 检修结束时间
   * @type { string }
   * @memberof StandardModel$c5fa3293
   */
  ['overhaulEndTime']?: string
  /**
   * 保障措施
   * @type { string }
   * @memberof StandardModel$c5fa3293
   */
  ['overhaulMeasures']?: string
  /**
   * 检修位置
   * @type { string }
   * @memberof StandardModel$c5fa3293
   */
  ['overhaulPlace']?: string
  /**
   *
   * @type { number }
   * @memberof StandardModel$c5fa3293
   */
  ['overhaulPlaceId']?: number
  /**
   * 检修计划名称
   * @type { string }
   * @memberof StandardModel$c5fa3293
   */
  ['overhaulScheduleName']?: string
  /**
   * 检修开始时间
   * @type { string }
   * @memberof StandardModel$c5fa3293
   */
  ['overhaulStartTime']?: string
  /**
   * 检修状态 0:进行中,1:已结束,2:未开始
   * @type { number }
   * @memberof StandardModel$c5fa3293
   */
  ['overhaulStatus']?: number
  /**
   * 检修描述
   * @type { string }
   * @memberof StandardModel$c5fa3293
   */
  ['overhaulStatusDesc']?: string
}

/**
 * @summary StandardModel$af8cf071
 * @interface StandardModel$af8cf071
 */
export interface StandardModel$af8cf071 {
  /**
   * 图标
   * @type { string }
   * @memberof StandardModel$af8cf071
   */
  ['icon']?: string
  /**
   * 显示名称
   * @type { string }
   * @memberof StandardModel$af8cf071
   */
  ['titleName']?: string
  /**
   * 单位
   * @type { string }
   * @memberof StandardModel$af8cf071
   */
  ['unit']?: string
  /**
   * 气象值
   * @type { string }
   * @memberof StandardModel$af8cf071
   */
  ['value']?: string
}

/**
 * @summary StandardModel$04252f76
 * @interface StandardModel$04252f76
 */
export interface StandardModel$04252f76 {
  /**
   * 排放数据
   * @type { StandardModel$599cdad3[] }
   * @memberof StandardModel$04252f76
   */
  ['dataLine']: StandardModel$599cdad3[]
  /**
   * 同比
   * @type { StandardModel$599cdad3[] }
   * @memberof StandardModel$04252f76
   */
  ['momValueDataLine']: StandardModel$599cdad3[]
  /**
   * 污染物名称
   * @type { string }
   * @memberof StandardModel$04252f76
   */
  ['pollutantName']?: string
  /**
   * 污染物类型
   * @type { string }
   * @memberof StandardModel$04252f76
   */
  ['pollutantType']?: string
  /**
   * 单位
   * @type { string }
   * @memberof StandardModel$04252f76
   */
  ['unit']?: string
  /**
   * 环比
   * @type { StandardModel$599cdad3[] }
   * @memberof StandardModel$04252f76
   */
  ['yoyValueDataLine']: StandardModel$599cdad3[]
}

/**
 * @summary StandardModel$599cdad3
 * @interface StandardModel$599cdad3
 */
export interface StandardModel$599cdad3 {
  /**
   * 时间
   * @type { string }
   * @memberof StandardModel$599cdad3
   */
  ['time']: string
  /**
   * 排放量
   * @type { string }
   * @memberof StandardModel$599cdad3
   */
  ['value']: string
}

/**
 * @summary StandardModel$0488cff2
 * @interface StandardModel$0488cff2
 */
export interface StandardModel$0488cff2 {
  /**
   * 污染物名称
   * @type { string }
   * @memberof StandardModel$0488cff2
   */
  ['pollutantName']?: string
  /**
   * 污染物类型
   * @type { string }
   * @memberof StandardModel$0488cff2
   */
  ['pollutantType']?: string
  /**
   * 展示顺序
   * @type { string }
   * @memberof StandardModel$0488cff2
   */
  ['sort']?: string
}

/**
 * @summary StandardModel$b924d8a7
 * @interface StandardModel$b924d8a7
 */
export interface StandardModel$b924d8a7 {
  /**
   * 权限点位
   * @type { string[] }
   * @memberof StandardModel$b924d8a7
   */
  ['authCodes']?: string[]
  /**
   *
   * @type { UserVO }
   * @memberof StandardModel$b924d8a7
   */
  ['userInfo']?: UserVO
}

/**
 * @summary StandardModel$3a6d5902
 * @interface StandardModel$3a6d5902
 */
export interface StandardModel$3a6d5902 {
  /**
   * 搜索历史文案
   * @type { string }
   * @memberof StandardModel$3a6d5902
   */
  ['value']?: string
}

/**
 * @summary StandardModel$7965a422
 * @interface StandardModel$7965a422
 */
export interface StandardModel$7965a422 {
  /**
   * 排放日期
   * @type { string }
   * @memberof StandardModel$7965a422
   */
  ['emissionDate']?: string
  /**
   * 所属排放范围
   * @type { string }
   * @memberof StandardModel$7965a422
   */
  ['emissionScope']?: string
  /**
   * 排放量
   * @type { number }
   * @memberof StandardModel$7965a422
   */
  ['emissionValue']?: number
}

/**
 * @summary StandardModel$8ae4e888
 * @interface StandardModel$8ae4e888
 */
export interface StandardModel$8ae4e888 {
  /**
   * 时间粒度(D:日;M:月;Y:年;C:自定义;)
   * @type { string }
   * @memberof StandardModel$8ae4e888
   */
  ['dateType']?: string
  /**
   * 结束时间
   * @type { string }
   * @memberof StandardModel$8ae4e888
   */
  ['endDate']?: string
  /**
   * 开始时间
   * @type { string }
   * @memberof StandardModel$8ae4e888
   */
  ['startDate']?: string
}

/**
 * @summary StandardModel$99834ca1
 * @interface StandardModel$99834ca1
 */
export interface StandardModel$99834ca1 {
  /**
   * 碳排放趋势
   * @type { StandardModel$7965a422[][] }
   * @memberof StandardModel$99834ca1
   */
  ['emissionTrendList']?: StandardModel$7965a422[][]
}

/**
 * @summary StandardModel$d5e1062c
 * @interface StandardModel$d5e1062c
 */
export interface StandardModel$d5e1062c {
  /**
   * 查询时间
   * @type { string }
   * @memberof StandardModel$d5e1062c
   */
  ['queryDate']?: string
  /**
   * 时间粒度(D:日;M:月;Y:年;Q:季度;)
   * @type { string }
   * @memberof StandardModel$d5e1062c
   */
  ['timeScale']?: string
}

/**
 * @summary StandardModel$455dcba9
 * @interface StandardModel$455dcba9
 */
export interface StandardModel$455dcba9 {
  /**
   * 系统名称
   * @type { string }
   * @memberof StandardModel$455dcba9
   */
  ['time']?: string
  /**
   * 报警数量
   * @type { number }
   * @memberof StandardModel$455dcba9
   */
  ['value']?: number
}

/**
 * @summary StandardModel$5a9a3539
 * @interface StandardModel$5a9a3539
 */
export interface StandardModel$5a9a3539 {
  /**
   * 系统code
   * @type { string }
   * @memberof StandardModel$5a9a3539
   */
  ['code']?: string
  /**
   * 系统名称
   * @type { string }
   * @memberof StandardModel$5a9a3539
   */
  ['name']?: string
  /**
   *
   * @type { StandardModel$a5f2dfb6[] }
   * @memberof StandardModel$5a9a3539
   */
  ['values']?: StandardModel$a5f2dfb6[]
}

/**
 * @summary StandardModel$a5f2dfb6
 * @interface StandardModel$a5f2dfb6
 */
export interface StandardModel$a5f2dfb6 {
  /**
   * 时间
   * @type { string }
   * @memberof StandardModel$a5f2dfb6
   */
  ['time']?: string
  /**
   * 值
   * @type { string }
   * @memberof StandardModel$a5f2dfb6
   */
  ['value']?: string
}

/**
 * @summary StandardModel$12e79520
 * @interface StandardModel$12e79520
 */
export interface StandardModel$12e79520 {
  /**
   * 系统告警数量
   * @type { number }
   * @memberof StandardModel$12e79520
   */
  ['systemAlarmCount']?: number
  /**
   * 系统code，airCompressorSystem：空压系统,boilerSystem：锅炉系统，coolingSystem：制冷系统，powerDistributionSystem：配电系统，waterProcessingSystem：水处理系统
   * @type { string }
   * @memberof StandardModel$12e79520
   */
  ['systemCode']?: string
  /**
   * 系统名称
   * @type { string }
   * @memberof StandardModel$12e79520
   */
  ['systemName']?: string
}

/**
 * @summary StandardModel$02558f12
 * @interface StandardModel$02558f12
 */
export interface StandardModel$02558f12 {
  /**
   * 全年维修计划条数
   * @type { number }
   * @memberof StandardModel$02558f12
   */
  ['allCount']?: number
  /**
   * 年度维修费用预算
   * @type { string }
   * @memberof StandardModel$02558f12
   */
  ['budget']?: string
  /**
   * 已完成维修条数
   * @type { number }
   * @memberof StandardModel$02558f12
   */
  ['doneCount']?: number
  /**
   * 维修计划完成率(%)
   * @type { string }
   * @memberof StandardModel$02558f12
   */
  ['donePercent']?: string
  /**
   * 已产生维修金额
   * @type { string }
   * @memberof StandardModel$02558f12
   */
  ['used']?: string
  /**
   * 费用使用进度(%)
   * @type { string }
   * @memberof StandardModel$02558f12
   */
  ['usedPercent']?: string
}

/**
 * @summary StandardModel$a9ca2765
 * @interface StandardModel$a9ca2765
 */
export interface StandardModel$a9ca2765 {
  /**
   * 维修责任人
   * @type { string }
   * @memberof StandardModel$a9ca2765
   */
  ['chargePerson']?: string
  /**
   * 验收日期yyyy-MM-dd
   * @type { string }
   * @memberof StandardModel$a9ca2765
   */
  ['checkDate']?: string
  /**
   * 验收责任人
   * @type { string }
   * @memberof StandardModel$a9ca2765
   */
  ['checker']?: string
  /**
   * 维修金额
   * @type { string }
   * @memberof StandardModel$a9ca2765
   */
  ['cost']: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$a9ca2765
   */
  ['createDate']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$a9ca2765
   */
  ['createName']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$a9ca2765
   */
  ['creator']?: string
  /**
   *
   * @type { number }
   * @memberof StandardModel$a9ca2765
   */
  ['deleted']?: number
  /**
   * 维修说明
   * @type { string }
   * @memberof StandardModel$a9ca2765
   */
  ['explanation']?: string
  /**
   * 主键id
   * @type { number }
   * @memberof StandardModel$a9ca2765
   */
  ['id']?: number
  /**
   * 维修发生时间yyyy-MM-dd
   * @type { string }
   * @memberof StandardModel$a9ca2765
   */
  ['occurDate']: string
  /**
   * 维修人员
   * @type { string }
   * @memberof StandardModel$a9ca2765
   */
  ['personnel']?: string
  /**
   * 关联的维修计划id
   * @type { number }
   * @memberof StandardModel$a9ca2765
   */
  ['planId']?: number
  /**
   * 维修结果验收(1-未验收、2-验收通过、3-验收未通过)
   * @type { number }
   * @memberof StandardModel$a9ca2765
   */
  ['resultCheck']?: number
  /**
   * 详单排序
   * @type { number }
   * @memberof StandardModel$a9ca2765
   */
  ['sort']: number
  /**
   *
   * @type { string }
   * @memberof StandardModel$a9ca2765
   */
  ['updateDate']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$a9ca2765
   */
  ['updateName']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$a9ca2765
   */
  ['updater']?: string
}

/**
 * @summary StandardModel$9f971b86
 * @interface StandardModel$9f971b86
 */
export interface StandardModel$9f971b86 {
  /**
   * 实际费用
   * @type { string }
   * @memberof StandardModel$9f971b86
   */
  ['actualCost']?: string
  /**
   * 预算
   * @type { string }
   * @memberof StandardModel$9f971b86
   */
  ['budget']?: string
  /**
   * 维修位置
   * @type { string }
   * @memberof StandardModel$9f971b86
   */
  ['location']?: string
  /**
   * 超支费用
   * @type { string }
   * @memberof StandardModel$9f971b86
   */
  ['overspend']?: string
  /**
   * 结余费用
   * @type { string }
   * @memberof StandardModel$9f971b86
   */
  ['remained']?: string
  /**
   * 排名
   * @type { number }
   * @memberof StandardModel$9f971b86
   */
  ['sort']?: number
}

/**
 * @summary StandardModel$ec51e3d1
 * @interface StandardModel$ec51e3d1
 */
export interface StandardModel$ec51e3d1 {
  /**
   * 实际维修费用
   * @type { string }
   * @memberof StandardModel$ec51e3d1
   */
  ['actualCost']?: string
  /**
   * 维修费用预算
   * @type { string }
   * @memberof StandardModel$ec51e3d1
   */
  ['budget']: string
  /**
   * 维修责任人
   * @type { string }
   * @memberof StandardModel$ec51e3d1
   */
  ['chargePerson']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$ec51e3d1
   */
  ['createDate']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$ec51e3d1
   */
  ['createName']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$ec51e3d1
   */
  ['creator']?: string
  /**
   *
   * @type { number }
   * @memberof StandardModel$ec51e3d1
   */
  ['deleted']?: number
  /**
   * 关联的维修详单
   * @type { StandardModel$a9ca2765[] }
   * @memberof StandardModel$ec51e3d1
   */
  ['details']?: StandardModel$a9ca2765[]
  /**
   * 维修计划说明
   * @type { string }
   * @memberof StandardModel$ec51e3d1
   */
  ['explanation']: string
  /**
   * 主键id
   * @type { number }
   * @memberof StandardModel$ec51e3d1
   */
  ['id']?: number
  /**
   * 计划维修位置
   * @type { string }
   * @memberof StandardModel$ec51e3d1
   */
  ['location']: string
  /**
   * 维修进度（1-未开始，2-进行中，3-已结束）
   * @type { number }
   * @memberof StandardModel$ec51e3d1
   */
  ['maintainStatus']?: number
  /**
   * 维修时间yyyy-MM
   * @type { string }
   * @memberof StandardModel$ec51e3d1
   */
  ['planDate']: string
  /**
   * 计划名称
   * @type { string }
   * @memberof StandardModel$ec51e3d1
   */
  ['planName']: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$ec51e3d1
   */
  ['updateDate']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$ec51e3d1
   */
  ['updateName']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$ec51e3d1
   */
  ['updater']?: string
}

/**
 * @summary StandardModel$7c4efc7e
 * @interface StandardModel$7c4efc7e
 */
export interface StandardModel$7c4efc7e {
  /**
   * 维修费用预算
   * @type { string }
   * @memberof StandardModel$7c4efc7e
   */
  ['budget']?: string
  /**
   * 月份yyyy-MM
   * @type { string }
   * @memberof StandardModel$7c4efc7e
   */
  ['month']?: string
  /**
   * 维修费用结余
   * @type { string }
   * @memberof StandardModel$7c4efc7e
   */
  ['remained']?: string
  /**
   * 已产生维修金额
   * @type { string }
   * @memberof StandardModel$7c4efc7e
   */
  ['used']?: string
}

/**
 * @summary StandardModel$43acc24a
 * @interface StandardModel$43acc24a
 */
export interface StandardModel$43acc24a {
  /**
   * id
   * @type { number }
   * @memberof StandardModel$43acc24a
   */
  ['id']?: number
  /**
   * 购入月份
   * @type { string }
   * @memberof StandardModel$43acc24a
   */
  ['purchaseMonth']?: string
  /**
   * 购入绿电量
   * @type { number }
   * @memberof StandardModel$43acc24a
   */
  ['purchaseVolume']?: number
  /**
   * 系统code
   * @type { string }
   * @memberof StandardModel$43acc24a
   */
  ['systemCode']?: string
}

/**
 * @summary StandardModel$8de0f664
 * @interface StandardModel$8de0f664
 */
export interface StandardModel$8de0f664 {
  /**
   * 编码
   * @type { string }
   * @memberof StandardModel$8de0f664
   */
  ['code']?: string
  /**
   * 名称
   * @type { string }
   * @memberof StandardModel$8de0f664
   */
  ['codeName']?: string
  /**
   * 单位
   * @type { string }
   * @memberof StandardModel$8de0f664
   */
  ['codeUnit']?: string
  /**
   * 用量
   * @type { number }
   * @memberof StandardModel$8de0f664
   */
  ['consumption']?: number
}

/**
 * @summary StandardModel$0dc79754
 * @interface StandardModel$0dc79754
 */
export interface StandardModel$0dc79754 {
  /**
   * 指标code
   * @type { string }
   * @memberof StandardModel$0dc79754
   */
  ['code']?: string
  /**
   * 指标单位
   * @type { string }
   * @memberof StandardModel$0dc79754
   */
  ['codeUnit']?: string
  /**
   * 指标值
   * @type { string }
   * @memberof StandardModel$0dc79754
   */
  ['codeValue']?: string
  /**
   * 环比值
   * @type { number }
   * @memberof StandardModel$0dc79754
   */
  ['linkRelativeRatio']?: number
  /**
   * 指标名字
   * @type { string }
   * @memberof StandardModel$0dc79754
   */
  ['name']?: string
  /**
   * 同环比单位
   * @type { string }
   * @memberof StandardModel$0dc79754
   */
  ['ratioUnit']?: string
  /**
   * 同比值
   * @type { number }
   * @memberof StandardModel$0dc79754
   */
  ['yearOnYearRatio']?: number
}

/**
 * @summary StandardModel$849a085a
 * @interface StandardModel$849a085a
 */
export interface StandardModel$849a085a {
  /**
   * 能介码
   * @type { string }
   * @memberof StandardModel$849a085a
   */
  ['code']?: string
  /**
   * 环比
   * @type { number }
   * @memberof StandardModel$849a085a
   */
  ['monthOnMonth']?: number
  /**
   * 环比比率单位
   * @type { string }
   * @memberof StandardModel$849a085a
   */
  ['monthOnMonthUnit']?: string
  /**
   * 能介名称
   * @type { string }
   * @memberof StandardModel$849a085a
   */
  ['name']?: string
  /**
   * 能介单位
   * @type { string }
   * @memberof StandardModel$849a085a
   */
  ['unit']?: string
  /**
   * 能介数值
   * @type { number }
   * @memberof StandardModel$849a085a
   */
  ['value']?: number
  /**
   * 同比
   * @type { number }
   * @memberof StandardModel$849a085a
   */
  ['yearOnYear']?: number
  /**
   * 同比比率单位
   * @type { string }
   * @memberof StandardModel$849a085a
   */
  ['yearOnYearUnit']?: string
}

/**
 * @summary StandardModel$a1cc0629
 * @interface StandardModel$a1cc0629
 */
export interface StandardModel$a1cc0629 {
  /**
   * 能介码
   * @type { string }
   * @memberof StandardModel$a1cc0629
   */
  ['code']?: string
  /**
   * 能介名称
   * @type { string }
   * @memberof StandardModel$a1cc0629
   */
  ['name']?: string
  /**
   * 今日变化趋势
   * @type { StandardModel$8d5e8237[] }
   * @memberof StandardModel$a1cc0629
   */
  ['today']?: StandardModel$8d5e8237[]
  /**
   * 单位
   * @type { string }
   * @memberof StandardModel$a1cc0629
   */
  ['unit']?: string
}

/**
 * @summary StandardModel$9d2d3734
 * @interface StandardModel$9d2d3734
 */
export interface StandardModel$9d2d3734 {
  /**
   * 能耗单位
   * @type { string }
   * @memberof StandardModel$9d2d3734
   */
  ['consumptionUnit']?: string
  /**
   * 能耗
   * @type { string }
   * @memberof StandardModel$9d2d3734
   */
  ['consumptionValue']?: string
  /**
   * 能介名称
   * @type { string }
   * @memberof StandardModel$9d2d3734
   */
  ['energyName']?: string
  /**
   * 能介类型
   * @type { string }
   * @memberof StandardModel$9d2d3734
   */
  ['energyType']?: string
  /**
   * 用量环比单位
   * @type { string }
   * @memberof StandardModel$9d2d3734
   */
  ['momUnit']?: string
  /**
   * 用量环比
   * @type { string }
   * @memberof StandardModel$9d2d3734
   */
  ['momValue']?: string
  /**
   * 占比
   * @type { string }
   * @memberof StandardModel$9d2d3734
   */
  ['ratio']?: string
  /**
   * 用量单位
   * @type { string }
   * @memberof StandardModel$9d2d3734
   */
  ['useUnit']?: string
  /**
   * 用量
   * @type { string }
   * @memberof StandardModel$9d2d3734
   */
  ['useValue']?: string
  /**
   * 用量同比单位
   * @type { string }
   * @memberof StandardModel$9d2d3734
   */
  ['yoyUnit']?: string
  /**
   * 用量同比
   * @type { string }
   * @memberof StandardModel$9d2d3734
   */
  ['yoyValue']?: string
}

/**
 * @summary StandardModel$76872393
 * @interface StandardModel$76872393
 */
export interface StandardModel$76872393 {
  /**
   * 系统类型
   * @type { string }
   * @memberof StandardModel$76872393
   */
  ['systemType']?: string
  /**
   *
   * @type { StandardModel$957cc2b2 }
   * @memberof StandardModel$76872393
   */
  ['values']?: StandardModel$957cc2b2
}

/**
 * @summary StandardModel$2d1785f5
 * @interface StandardModel$2d1785f5
 */
export interface StandardModel$2d1785f5 {
  /**
   * 品质数据
   * @type { StandardModel$382c9479[] }
   * @memberof StandardModel$2d1785f5
   */
  ['qualityData']?: StandardModel$382c9479[]
  /**
   * 指标类型，0：电能质量指标 1：制冷质量指标 2：蒸汽质量指标 3：压缩空气质量指标 4：自来水质量指标 5：软化水质量指标 6：纯净水质量指标 7：中水质量指标；
   * @type { string }
   * @memberof StandardModel$2d1785f5
   */
  ['type']?: string
}

/**
 * @summary StandardModel$a59b7e24
 * @interface StandardModel$a59b7e24
 */
export interface StandardModel$a59b7e24 {
  /**
   * 能介类型名称
   * @type { string }
   * @memberof StandardModel$a59b7e24
   */
  ['energyName']?: string
  /**
   * 能源类型
   * @type { string }
   * @memberof StandardModel$a59b7e24
   */
  ['energyType']?: string
  /**
   * 单位
   * @type { string }
   * @memberof StandardModel$a59b7e24
   */
  ['unit']?: string
  /**
   *
   * @type { EnergyCostValueVO[] }
   * @memberof StandardModel$a59b7e24
   */
  ['values']?: EnergyCostValueVO[]
}

/**
 * @summary StandardModel$ca5541df
 * @interface StandardModel$ca5541df
 */
export interface StandardModel$ca5541df {
  /**
   * 综合能耗总量
   * @type { string }
   * @memberof StandardModel$ca5541df
   */
  ['cecConsumption']?: string
  /**
   * 综合能耗单位
   * @type { string }
   * @memberof StandardModel$ca5541df
   */
  ['cecUnit']?: string
  /**
   * 分能介能耗详情
   * @type { StandardModel$9d2d3734[] }
   * @memberof StandardModel$ca5541df
   */
  ['details']?: StandardModel$9d2d3734[]
  /**
   * 单耗环比
   * @type { string }
   * @memberof StandardModel$ca5541df
   */
  ['momUecConsumption']?: string
  /**
   * 单耗环比单位
   * @type { string }
   * @memberof StandardModel$ca5541df
   */
  ['momUecConsumptionUnit']?: string
  /**
   * 产品产量单位
   * @type { string }
   * @memberof StandardModel$ca5541df
   */
  ['productUnit']?: string
  /**
   * 产品产量
   * @type { string }
   * @memberof StandardModel$ca5541df
   */
  ['productValue']?: string
  /**
   * 产品单耗
   * @type { string }
   * @memberof StandardModel$ca5541df
   */
  ['uecConsumption']?: string
  /**
   * 单耗单位
   * @type { string }
   * @memberof StandardModel$ca5541df
   */
  ['uecUnit']?: string
  /**
   * 单耗同比
   * @type { string }
   * @memberof StandardModel$ca5541df
   */
  ['yoyUecConsumption']?: string
  /**
   * 单耗同比单位
   * @type { string }
   * @memberof StandardModel$ca5541df
   */
  ['yoyUecConsumptionUnit']?: string
}

/**
 * @summary StandardModel$b8838edb
 * @interface StandardModel$b8838edb
 */
export interface StandardModel$b8838edb {
  /**
   * 告警消息id
   * @type { string }
   * @memberof StandardModel$b8838edb
   */
  ['alarmId']: string
  /**
   * cim平台系统Code
   * @type { string }
   * @memberof StandardModel$b8838edb
   */
  ['systemCode']: string
}

/**
 * @summary StandardModel$7efa1f96
 * @interface StandardModel$7efa1f96
 */
export interface StandardModel$7efa1f96 {
  /**
   * 信息详情
   * @type { string }
   * @memberof StandardModel$7efa1f96
   */
  ['content']?: string
  /**
   * id
   * @type { number }
   * @memberof StandardModel$7efa1f96
   */
  ['id']?: number
  /**
   * 文件上传地址
   * @type { string }
   * @memberof StandardModel$7efa1f96
   */
  ['imageUploadUrl']?: string
  /**
   * 信息标题
   * @type { string }
   * @memberof StandardModel$7efa1f96
   */
  ['title']?: string
  /**
   * 更新时间
   * @type { string }
   * @memberof StandardModel$7efa1f96
   */
  ['updateDate']?: string
}

/**
 * @summary StandardModel$b25754f2
 * @interface StandardModel$b25754f2
 */
export interface StandardModel$b25754f2 {
  /**
   * 转移的文件ID，多个用__,__隔开
   * @type { string }
   * @memberof StandardModel$b25754f2
   */
  ['fileIds']: string
  /**
   * 页码
   * @type { number }
   * @memberof StandardModel$b25754f2
   */
  ['pageNum']: number
  /**
   * 每页记录数
   * @type { number }
   * @memberof StandardModel$b25754f2
   */
  ['pageSize']: number
  /**
   * 当前目录的父级目录ID
   * @type { number }
   * @memberof StandardModel$b25754f2
   */
  ['parentId']: number
  /**
   * 要转移到的文件夹ID
   * @type { number }
   * @memberof StandardModel$b25754f2
   */
  ['targetParentId']: number
}

/**
 * @summary StandardModel$30fc2929
 * @interface StandardModel$30fc2929
 */
export interface StandardModel$30fc2929 {
  /**
   * 要还原的文件记录ID，多个用__,__隔开
   * @type { string }
   * @memberof StandardModel$30fc2929
   */
  ['fileIds']: string
  /**
   * 页码
   * @type { number }
   * @memberof StandardModel$30fc2929
   */
  ['pageNum']: number
  /**
   * 每页记录数
   * @type { number }
   * @memberof StandardModel$30fc2929
   */
  ['pageSize']: number
}

/**
 * @summary StandardModel$c0d0d307
 * @interface StandardModel$c0d0d307
 */
export interface StandardModel$c0d0d307 {
  /**
   * 编码
   * @type { string }
   * @memberof StandardModel$c0d0d307
   */
  ['code']?: string
  /**
   * 颜色
   * @type { string }
   * @memberof StandardModel$c0d0d307
   */
  ['color']?: string
  /**
   * 名称
   * @type { string }
   * @memberof StandardModel$c0d0d307
   */
  ['name']?: string
}

/**
 * @summary StandardModel$e32b5406
 * @interface StandardModel$e32b5406
 */
export interface StandardModel$e32b5406 {
  /**
   * 面包屑主键
   * @type { number }
   * @memberof StandardModel$e32b5406
   */
  ['id']?: number
  /**
   * 面包屑名称
   * @type { string }
   * @memberof StandardModel$e32b5406
   */
  ['name']?: string
  /**
   * 父id
   * @type { number }
   * @memberof StandardModel$e32b5406
   */
  ['parentId']?: number
}

/**
 * @summary StandardModel$d8df56a8
 * @interface StandardModel$d8df56a8
 */
export interface StandardModel$d8df56a8 {
  /**
   * 告警类型选择器
   * @type { StandardModel$c0d0d307[] }
   * @memberof StandardModel$d8df56a8
   */
  ['alarmTypeSelector']?: StandardModel$c0d0d307[]
  /**
   * 系统类型选择器
   * @type { StandardModel$c0d0d307[] }
   * @memberof StandardModel$d8df56a8
   */
  ['systemTypeSelector']?: StandardModel$c0d0d307[]
}

/**
 * @summary StandardModel$51352897
 * @interface StandardModel$51352897
 */
export interface StandardModel$51352897 {
  /**
   * 记录人
   * @type { string }
   * @memberof StandardModel$51352897
   */
  ['createName']?: string
  /**
   * 描述信息
   * @type { string }
   * @memberof StandardModel$51352897
   */
  ['description']?: string
  /**
   * id
   * @type { number }
   * @memberof StandardModel$51352897
   */
  ['id']?: number
  /**
   * 责任人
   * @type { string }
   * @memberof StandardModel$51352897
   */
  ['liablePerson']?: string
  /**
   * 责任人id
   * @type { number }
   * @memberof StandardModel$51352897
   */
  ['liablePersonId']?: number
  /**
   * 整改时间结束时间
   * @type { string }
   * @memberof StandardModel$51352897
   */
  ['rectifyEndTime']?: string
  /**
   * 整改措施
   * @type { string }
   * @memberof StandardModel$51352897
   */
  ['rectifyMeasures']?: string
  /**
   * 整改时间开始时间
   * @type { string }
   * @memberof StandardModel$51352897
   */
  ['rectifyStartTime']?: string
  /**
   * 风险关闭时间
   * @type { string }
   * @memberof StandardModel$51352897
   */
  ['riskClosedTime']?: string
  /**
   * 风险等级
   * @type { string }
   * @memberof StandardModel$51352897
   */
  ['riskLevel']?: string
  /**
   * 风险等级id
   * @type { number }
   * @memberof StandardModel$51352897
   */
  ['riskLevelId']?: number
  /**
   * 风险名称
   * @type { string }
   * @memberof StandardModel$51352897
   */
  ['riskName']?: string
  /**
   * 风险类型
   * @type { string }
   * @memberof StandardModel$51352897
   */
  ['riskType']?: string
  /**
   * 风险类型id
   * @type { number }
   * @memberof StandardModel$51352897
   */
  ['riskTypeId']?: number
  /**
   * 租户id
   * @type { string }
   * @memberof StandardModel$51352897
   */
  ['tenantId']?: string
}

/**
 * @summary StandardModel$cac6fb04
 * @interface StandardModel$cac6fb04
 */
export interface StandardModel$cac6fb04 {
  /**
   * 描述信息
   * @type { string }
   * @memberof StandardModel$cac6fb04
   */
  ['description']?: string
  /**
   * id
   * @type { number }
   * @memberof StandardModel$cac6fb04
   */
  ['id']?: number
  /**
   * 责任人
   * @type { string }
   * @memberof StandardModel$cac6fb04
   */
  ['liablePerson']?: string
  /**
   * 责任人id
   * @type { number }
   * @memberof StandardModel$cac6fb04
   */
  ['liablePersonId']?: number
  /**
   * 整改时间结束时间
   * @type { string }
   * @memberof StandardModel$cac6fb04
   */
  ['rectifyEndTime']?: string
  /**
   * 整改措施
   * @type { string }
   * @memberof StandardModel$cac6fb04
   */
  ['rectifyMeasures']?: string
  /**
   * 整改时间开始时间
   * @type { string }
   * @memberof StandardModel$cac6fb04
   */
  ['rectifyStartTime']?: string
  /**
   * 风险关闭时间
   * @type { string }
   * @memberof StandardModel$cac6fb04
   */
  ['riskClosedTime']?: string
  /**
   * 风险等级id
   * @type { number }
   * @memberof StandardModel$cac6fb04
   */
  ['riskLevelId']?: number
  /**
   * 风险名称
   * @type { string }
   * @memberof StandardModel$cac6fb04
   */
  ['riskName']?: string
  /**
   * 风险类型
   * @type { string }
   * @memberof StandardModel$cac6fb04
   */
  ['riskType']?: string
  /**
   * 风险类型id
   * @type { number }
   * @memberof StandardModel$cac6fb04
   */
  ['riskTypeId']?: number
}

/**
 * @summary StandardModel$effec77e
 * @interface StandardModel$effec77e
 */
export interface StandardModel$effec77e {
  /**
   * 名称
   * @type { string }
   * @memberof StandardModel$effec77e
   */
  ['name']?: string
  /**
   * 数据
   * @type { number }
   * @memberof StandardModel$effec77e
   */
  ['percentage']?: number
  /**
   * 数值
   * @type { number }
   * @memberof StandardModel$effec77e
   */
  ['value']?: number
}

/**
 * @summary StandardModel$4760aa53
 * @interface StandardModel$4760aa53
 */
export interface StandardModel$4760aa53 {
  /**
   * 结束时间
   * @type { string }
   * @memberof StandardModel$4760aa53
   */
  ['endDate']?: string
  /**
   * 开始时间
   * @type { string }
   * @memberof StandardModel$4760aa53
   */
  ['startDate']?: string
  /**
   * 时间粒度(D:日;M:月;Y:年;C:自定义;)
   * @type { string }
   * @memberof StandardModel$4760aa53
   */
  ['timeScale']?: string
}

/**
 * @summary StandardModel$a49df917
 * @interface StandardModel$a49df917
 */
export interface StandardModel$a49df917 {
  /**
   * 碳排放源分布
   * @type { StandardModel$039e49b5[] }
   * @memberof StandardModel$a49df917
   */
  ['emissionCategoryList']?: StandardModel$039e49b5[]
  /**
   * 碳排放趋势
   * @type { StandardModel$7965a422[][] }
   * @memberof StandardModel$a49df917
   */
  ['emissionTrendList']?: StandardModel$7965a422[][]
  /**
   * 累计碳排放量
   * @type { string }
   * @memberof StandardModel$a49df917
   */
  ['emissionValue']?: string
  /**
   * 单吨产品碳排放量
   * @type { string }
   * @memberof StandardModel$a49df917
   */
  ['emissionValueProduct']?: string
  /**
   *
   * @type { StandardModel$0dc79754 }
   * @memberof StandardModel$a49df917
   */
  ['greenEnergy']?: StandardModel$0dc79754
  /**
   * 产品产量
   * @type { string }
   * @memberof StandardModel$a49df917
   */
  ['productValue']?: string
}

/**
 * @summary StandardRequestBody$c5fa3293
 * @interface StandardRequestBody$c5fa3293
 * @description overhaulScheduleReqVo
 * @required true
 */
export type StandardRequestBody$c5fa3293 = StandardModel$c5fa3293

/**
 * @summary StandardRequestBody$580625cf
 * @interface StandardRequestBody$580625cf
 * @description yearEmissionCompareVO
 * @required true
 */
export type StandardRequestBody$580625cf = StandardModel$580625cf

/**
 * @summary StandardRequestBody$d92b6d43
 * @interface StandardRequestBody$d92b6d43
 * @description ecbMnCostManagementReqVo
 * @required true
 */
export type StandardRequestBody$d92b6d43 = StandardModel$d92b6d43

/**
 * @summary StandardRequestBody$7efa1f96
 * @interface StandardRequestBody$7efa1f96
 * @description ecbInformationReqVo
 * @required true
 */
export type StandardRequestBody$7efa1f96 = StandardModel$7efa1f96

/**
 * @summary getProductDataUsingPOSTJsonobject
 * @interface getProductDataUsingPOSTJsonobject
 * @description jsonObject
 * @required true
 */
export interface getProductDataUsingPOSTJsonobject {}

/**
 * @tags 预警中心
 * @summary 告警处理率
 * @param {string} dateType 日期类型，日：D，月：M,年：Y,自定义：N
 * @param {string} systemCode 系统编码
 * @param {string} endDate 查询结束日期
 * @param {string} queryDate 查询日期
 * @param {string} startDate 查询开始日期
 * @param {AxiosInstance} local_options
 */
export const getAlarmCenterCockpitAlarmHandleRatio = async (
  dateType: string,
  systemCode: string,
  endDate?: string,
  queryDate?: string,
  startDate?: string,
  local_options?: AxiosInstance
): Promise<StandardModel$29218860> => {
  let local_url = '/alarm-center/cockpit/alarm-handle/ratio'

  let local_params = { dateType, systemCode, endDate, queryDate, startDate }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$29218860>
}

/**
 * @tags 预警中心
 * @summary 告警处理趋势分析
 * @param {string} dateType 日期类型，日：D，月：M,年：Y,自定义：N
 * @param {string} systemCode 系统编码
 * @param {string} alarmTypeName 告警类型
 * @param {string} endDate 查询结束日期
 * @param {string} queryDate 查询日期
 * @param {string} startDate 查询开始日期
 * @param {string} subSystemName 系统类型
 * @param {AxiosInstance} local_options
 */
export const getAlarmCenterCockpitAlarmHandleTrend = async (
  dateType: string,
  systemCode: string,
  alarmTypeName?: string,
  endDate?: string,
  queryDate?: string,
  startDate?: string,
  subSystemName?: string,
  local_options?: AxiosInstance
): Promise<StandardModel$9de93b20> => {
  let local_url = '/alarm-center/cockpit/alarm-handle/trend'

  let local_params = {
    dateType,
    systemCode,
    alarmTypeName,
    endDate,
    queryDate,
    startDate,
    subSystemName,
  }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$9de93b20>
}

/**
 * @tags 预警中心
 * @summary 报警等级分析
 * @param {string} dateType 日期类型，日：D，月：M,年：Y,自定义：N
 * @param {string} systemCode 系统编码
 * @param {string} endDate 查询结束日期
 * @param {string} queryDate 查询日期
 * @param {string} startDate 查询开始日期
 * @param {AxiosInstance} local_options
 */
export const getAlarmCenterCockpitAlarmLevel = async (
  dateType: string,
  systemCode: string,
  endDate?: string,
  queryDate?: string,
  startDate?: string,
  local_options?: AxiosInstance
): Promise<StandardModel$9a6fc462> => {
  let local_url = '/alarm-center/cockpit/alarm-level'

  let local_params = { dateType, systemCode, endDate, queryDate, startDate }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$9a6fc462>
}

/**
 * @tags 预警中心
 * @summary 告警等级趋势分析
 * @param {string} dateType 日期类型，日：D，月：M,年：Y,自定义：N
 * @param {string} systemCode 系统编码
 * @param {string} alarmTypeName 告警类型
 * @param {string} endDate 查询结束日期
 * @param {string} queryDate 查询日期
 * @param {string} startDate 查询开始日期
 * @param {string} subSystemName 系统类型
 * @param {AxiosInstance} local_options
 */
export const getAlarmCenterCockpitAlarmLevelTrend = async (
  dateType: string,
  systemCode: string,
  alarmTypeName?: string,
  endDate?: string,
  queryDate?: string,
  startDate?: string,
  subSystemName?: string,
  local_options?: AxiosInstance
): Promise<StandardModel$33aa852a> => {
  let local_url = '/alarm-center/cockpit/alarm-level/trend'

  let local_params = {
    dateType,
    systemCode,
    alarmTypeName,
    endDate,
    queryDate,
    startDate,
    subSystemName,
  }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$33aa852a>
}

/**
 * @tags 预警中心
 * @summary 告警类别分析
 * @param {string} dateType 日期类型，日：D，月：M,年：Y,自定义：N
 * @param {string} systemCode 系统编码
 * @param {string} endDate 查询结束日期
 * @param {string} queryDate 查询日期
 * @param {string} startDate 查询开始日期
 * @param {AxiosInstance} local_options
 */
export const getAlarmCenterCockpitAlarmType = async (
  dateType: string,
  systemCode: string,
  endDate?: string,
  queryDate?: string,
  startDate?: string,
  local_options?: AxiosInstance
): Promise<StandardModel$693a7461> => {
  let local_url = '/alarm-center/cockpit/alarm-type'

  let local_params = { dateType, systemCode, endDate, queryDate, startDate }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$693a7461>
}

/**
 * @tags 预警中心
 * @summary 告警类别趋势分析
 * @param {string} dateType 日期类型，日：D，月：M,年：Y,自定义：N
 * @param {string} systemCode 系统编码
 * @param {string} endDate 查询结束日期
 * @param {string} queryDate 查询日期
 * @param {string} startDate 查询开始日期
 * @param {AxiosInstance} local_options
 */
export const getAlarmCenterCockpitAlarmTypeTrend = async (
  dateType: string,
  systemCode: string,
  endDate?: string,
  queryDate?: string,
  startDate?: string,
  local_options?: AxiosInstance
): Promise<StandardModel$0d6449e4> => {
  let local_url = '/alarm-center/cockpit/alarm-type/trend'

  let local_params = { dateType, systemCode, endDate, queryDate, startDate }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$0d6449e4>
}

/**
 * @tags 预警中心
 * @summary 告警查询页面下拉框列表(全部)
 * @param {string} systemCode 系统编码
 * @param {string} pageType 页面，  驾驶舱:cockpit,  分析中心:analysis
 * @param {string} type 下拉框类型，  告警类型:type,  告警系统:system, 告警区域:region, 告警等级:level, 告警恢复状态:recovery, 告警处理状态:status
 * @param {AxiosInstance} local_options
 */
export const getAlarmCenterCockpitAlarmAllDroplist = async (
  systemCode: string,
  pageType?: string,
  type?: string,
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListAlarmSelectorVO> => {
  let local_url = '/alarm-center/cockpit/alarmAllDroplist'

  let local_params = { systemCode, pageType, type }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListAlarmSelectorVO>
}

/**
 * @tags 预警中心
 * @summary 告警查询页面下拉框列表
 * @param {string} systemCode 系统编码
 * @param {string} type 下拉框类型，  告警类型:type,  告警系统:system, 告警区域:region, 告警等级:level, 告警恢复状态:recovery, 告警处理状态:status
 * @param {AxiosInstance} local_options
 */
export const getAlarmCenterCockpitAlarmDroplist = async (
  systemCode: string,
  type?: string,
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListAlarmSelectorVO> => {
  let local_url = '/alarm-center/cockpit/alarmDroplist'

  let local_params = { systemCode, type }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListAlarmSelectorVO>
}

/**
 * @tags 预警中心
 * @summary 车间各区域报警分析
 * @param {string} dateType 日期类型：年：Y，月：M，天：D，小时：H，自定义：N
 * @param {string} systemCode cim平台系统Code
 * @param {string} endDate 结束日期，日期类型是自定义时存在，yyyy-MM-dd
 * @param {string} queryDate 查询精确日期，年yyyy，月yyyy-MM，日yyyy-MM-dd
 * @param {string} startDate 开始日期，日期类型是自定义时存在，yyyy-MM-dd
 * @param {string} type 统计类型, 0:按告警处理，1：按告警等级， 2：按告警处类别
 * @param {AxiosInstance} local_options
 */
export const getAlarmCenterCockpitAreaAnalysis = async (
  dateType: string,
  systemCode: string,
  endDate?: string,
  queryDate?: string,
  startDate?: string,
  type?: string,
  local_options?: AxiosInstance
): Promise<StandardModel$8f497ba4> => {
  let local_url = '/alarm-center/cockpit/area/analysis'

  let local_params = {
    dateType,
    systemCode,
    endDate,
    queryDate,
    startDate,
    type,
  }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$8f497ba4>
}

/**
 * @tags 预警中心
 * @summary 告警记录总数
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postAlarmCenterCockpitCount = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultInt> => {
  let local_url = '/alarm-center/cockpit/count'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultInt>
}

/**
 * @tags 预警中心
 * @summary 告警页面数据导出
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postAlarmCenterCockpitExport = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<any> => {
  let local_url = '/alarm-center/cockpit/export'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<any>
}

/**
 * @tags 预警中心
 * @summary 告警记录分页列表
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postAlarmCenterCockpitPage = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<StandardModel$d1a61c3c> => {
  let local_url = '/alarm-center/cockpit/page'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$d1a61c3c>
}

/**
 * @tags 预警中心
 * @summary 报警信息滚动条
 * @param {string} systemCode 系统编码
 * @param {AxiosInstance} local_options
 */
export const getAlarmCenterCockpitScrollbar = async (
  systemCode?: string,
  local_options?: AxiosInstance
): Promise<StandardModel$06cedf6a> => {
  let local_url = '/alarm-center/cockpit/scrollbar'

  let local_params = { systemCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$06cedf6a>
}

/**
 * @tags 预警中心
 * @summary 获取预警中心选择器
 * @param {AxiosInstance} local_options
 */
export const getAlarmCenterCockpitSelectors = async (
  local_options?: AxiosInstance
): Promise<StandardModel$83177c74> => {
  let local_url = '/alarm-center/cockpit/selectors'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$83177c74>
}

/**
 * @tags 预警中心
 * @summary 各系统报警分析
 * @param {string} dateType 日期类型：年：Y，月：M，天：D，小时：H，自定义：N
 * @param {string} systemCode cim平台系统Code
 * @param {string} endDate 结束日期，日期类型是自定义时存在，yyyy-MM-dd
 * @param {string} queryDate 查询精确日期，年yyyy，月yyyy-MM，日yyyy-MM-dd
 * @param {string} startDate 开始日期，日期类型是自定义时存在，yyyy-MM-dd
 * @param {string} type 统计类型, 0:按告警处理，1：按告警等级， 2：按告警处类别
 * @param {AxiosInstance} local_options
 */
export const getAlarmCenterCockpitSystemAlarmAnalysis = async (
  dateType: string,
  systemCode: string,
  endDate?: string,
  queryDate?: string,
  startDate?: string,
  type?: string,
  local_options?: AxiosInstance
): Promise<StandardModel$8f497ba4> => {
  let local_url = '/alarm-center/cockpit/system-alarm/analysis'

  let local_params = {
    dateType,
    systemCode,
    endDate,
    queryDate,
    startDate,
    type,
  }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$8f497ba4>
}

/**
 * @tags 预警中心
 * @summary 系统报警趋势
 * @param {string} dateType 日期类型：年：Y，月：M，天：D，小时：H，自定义：N
 * @param {string} systemCode cim平台系统Code
 * @param {string} endDate 结束日期，日期类型是自定义时存在，yyyy-MM-dd
 * @param {string} queryDate 查询精确日期，年yyyy，月yyyy-MM，日yyyy-MM-dd
 * @param {string} startDate 开始日期，日期类型是自定义时存在，yyyy-MM-dd
 * @param {string} type 统计类型, 0:按告警处理，1：按告警等级， 2：按告警处类别
 * @param {AxiosInstance} local_options
 */
export const getAlarmCenterCockpitSystemAlarmTrend = async (
  dateType: string,
  systemCode: string,
  endDate?: string,
  queryDate?: string,
  startDate?: string,
  type?: string,
  local_options?: AxiosInstance
): Promise<StandardModel$38e9fb1b> => {
  let local_url = '/alarm-center/cockpit/system-alarm/trend'

  let local_params = {
    dateType,
    systemCode,
    endDate,
    queryDate,
    startDate,
    type,
  }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$38e9fb1b>
}

/**
 * @tags 预警中心
 * @summary 能源各系统报警占比
 * @param {string} dateType 日期类型：年：Y，月：M，天：D，小时：H，自定义：N
 * @param {string} systemCode cim平台系统Code
 * @param {string} endDate 结束日期，日期类型是自定义时存在，yyyy-MM-dd
 * @param {string} queryDate 查询精确日期，年yyyy，月yyyy-MM，日yyyy-MM-dd
 * @param {string} startDate 开始日期，日期类型是自定义时存在，yyyy-MM-dd
 * @param {string} type 统计类型, 0:按告警处理，1：按告警等级， 2：按告警处类别
 * @param {AxiosInstance} local_options
 */
export const getAlarmCenterCockpitSystemEnergyAlarmRatio = async (
  dateType: string,
  systemCode: string,
  endDate?: string,
  queryDate?: string,
  startDate?: string,
  type?: string,
  local_options?: AxiosInstance
): Promise<StandardModel$02f7a5f6> => {
  let local_url = '/alarm-center/cockpit/system-energy-alarm/ratio'

  let local_params = {
    dateType,
    systemCode,
    endDate,
    queryDate,
    startDate,
    type,
  }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$02f7a5f6>
}

/**
 * @tags 告警处理
 * @summary 告警批量关闭
 * @param {AlarmMessgeBatchCloseVO} [body] alarmCloseVo
 * @param {AxiosInstance} local_options
 */
export const postAlarmHandleBatchClose = async (
  body?: AlarmMessgeBatchCloseVO,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/alarm-handle/batch-close'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultBoolean>
}

/**
 * @tags 告警处理
 * @summary 告警关闭
 * @param {AlarmMessgeCloseVO} [body] alarmCloseVo
 * @param {AxiosInstance} local_options
 */
export const postAlarmHandleClose = async (
  body?: AlarmMessgeCloseVO,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/alarm-handle/close'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultBoolean>
}

/**
 * @tags 告警处理
 * @summary 操作记录查询
 * @param {AlarmOperationReqVO} [body] alarmOperationReqVo
 * @param {AxiosInstance} local_options
 */
export const postAlarmHandleOperationLog = async (
  body?: AlarmOperationReqVO,
  local_options?: AxiosInstance
): Promise<RdfaResultAlarmDetailRespVO> => {
  let local_url = '/alarm-handle/operation-log'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultAlarmDetailRespVO>
}

/**
 * @tags 告警消息
 * @summary 获取告警消息列表
 * @param {number} pageNum pageNum
 * @param {number} pageSize pageSize
 * @param {string} systemCode systemCode
 * @param {string} type type
 * @param {AxiosInstance} local_options
 */
export const getAlarmMessageList = async (
  pageNum: number,
  pageSize: number,
  systemCode: string,
  type: string,
  local_options?: AxiosInstance
): Promise<StandardModel$a4ef4dd6> => {
  let local_url = '/alarm-message/list'

  let local_params = { pageNum, pageSize, systemCode, type }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$a4ef4dd6>
}

/**
 * @tags 告警消息
 * @summary 告警消息已读
 * @param {StandardModel$b8838edb} [body] readReq
 * @param {AxiosInstance} local_options
 */
export const postAlarmMessageRead = async (
  body?: StandardModel$b8838edb,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/alarm-message/read'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultBoolean>
}

/**
 * @tags 告警消息
 * @summary 获取未读消息统计
 * @param {string} systemCode systemCode
 * @param {AxiosInstance} local_options
 */
export const getAlarmMessageUnreadCount = async (
  systemCode: string,
  local_options?: AxiosInstance
): Promise<StandardModel$c34ed10c> => {
  let local_url = '/alarm-message/unread-count'

  let local_params = { systemCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$c34ed10c>
}

/**
 * @tags 驾驶舱
 * @summary 碳排放趋势及分布
 * @param {StandardModel$4760aa53} [body] cockpitQueryReqVO
 * @param {AxiosInstance} local_options
 */
export const postApiFrontCarbonCockpitDataQuery = async (
  body?: StandardModel$4760aa53,
  local_options?: AxiosInstance
): Promise<StandardModel$7ce105c3> => {
  let local_url = '/api/front/carbon/cockpitDataQuery'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$7ce105c3>
}

/**
 * @tags 系统诊断-碳排放趋势
 * @summary 碳排放趋势数据查询
 * @param {StandardModel$d5e1062c} [body] emissionTrendReqVO
 * @param {AxiosInstance} local_options
 */
export const postApiFrontCarbonEmissionTrend = async (
  body?: StandardModel$d5e1062c,
  local_options?: AxiosInstance
): Promise<StandardModel$1616d58d> => {
  let local_url = '/api/front/carbon/emissionTrend'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$1616d58d>
}

/**
 * @tags 碳排数据总览
 * @summary 首页碳排放量
 * @param {AxiosInstance} local_options
 */
export const getApiFrontCarbonStatisticHomeEmission = async (
  local_options?: AxiosInstance
): Promise<RdfaResultCarbonEmissionStatisticVO> => {
  let local_url = '/api/front/carbon/statistic/home/emission'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultCarbonEmissionStatisticVO>
}

/**
 * @tags 碳排数据总览
 * @summary 碳排放分析-页头总览-碳排放同比
 * @param {AxiosInstance} local_options
 */
export const getApiFrontCarbonStatisticOverviewCompare = async (
  local_options?: AxiosInstance
): Promise<RdfaResultCarbonEmissionCompareVO> => {
  let local_url = '/api/front/carbon/statistic/overview/compare'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultCarbonEmissionCompareVO>
}

/**
 * @tags 碳排数据总览
 * @summary 碳排放分析-页头总览-碳排放分布
 * @param {AxiosInstance} local_options
 */
export const getApiFrontCarbonStatisticOverviewDistribution = async (
  local_options?: AxiosInstance
): Promise<RdfaResultCarbonEmissionDistributionVO> => {
  let local_url = '/api/front/carbon/statistic/overview/distribution'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultCarbonEmissionDistributionVO>
}

/**
 * @tags 年度排放量对比
 * @summary 年度排放对比
 * @param {StandardModel$580625cf} [body] yearEmissionCompareVo
 * @param {AxiosInstance} local_options
 */
export const postApiFrontCarbonEmissionCompareYear = async (
  body?: StandardModel$580625cf,
  local_options?: AxiosInstance
): Promise<StandardModel$814c591c> => {
  let local_url = '/api/front/carbonEmission/compare/year'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$814c591c>
}

/**
 * @tags 年度排放量对比
 * @summary 年度排放对比饼图
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontCarbonEmissionCompareYearBar = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<StandardModel$8e200d1b> => {
  let local_url = '/api/front/carbonEmission/compare/yearBar'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$8e200d1b>
}

/**
 * @tags 年度排放量对比
 * @summary 年度排放量对比
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontCarbonEmissionCompareYearColumnar = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<StandardModel$15001e59> => {
  let local_url = '/api/front/carbonEmission/compare/yearColumnar'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$15001e59>
}

/**
 * @tags 碳排分析
 * @summary 排放源碳排放排名
 * @param {StandardModel$362c5c88} [body] emissionCategoryRankResVO
 * @param {AxiosInstance} local_options
 */
export const postApiFrontCarbonEmissionAnalysisEmissionCategoryRank = async (
  body?: StandardModel$362c5c88,
  local_options?: AxiosInstance
): Promise<StandardModel$a20cfa01> => {
  let local_url = '/api/front/carbonEmissionAnalysis/emissionCategoryRank'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$a20cfa01>
}

/**
 * @tags 碳排分析
 * @summary 单吨产品碳排趋势
 * @param {StandardModel$83288cd2} [body] emissionProductTrendReqVO
 * @param {AxiosInstance} local_options
 */
export const postApiFrontCarbonEmissionAnalysisEmissionProductTrend = async (
  body?: StandardModel$83288cd2,
  local_options?: AxiosInstance
): Promise<StandardModel$8c730013> => {
  let local_url = '/api/front/carbonEmissionAnalysis/emissionProductTrend'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$8c730013>
}

/**
 * @tags 碳排分析
 * @summary 分区统计分析
 * @param {StandardModel$8ae4e888} [body] treeAnalysisQueryReqVo
 * @param {AxiosInstance} local_options
 */
export const postApiFrontCarbonEmissionAnalysisGetTreeAnalysis = async (
  body?: StandardModel$8ae4e888,
  local_options?: AxiosInstance
): Promise<StandardModel$3eab4373> => {
  let local_url = '/api/front/carbonEmissionAnalysis/getTreeAnalysis'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$3eab4373>
}

/**
 * @tags 成本分析
 * @summary 能源购入区域成本对比
 * @param {string} dateType 日期维度:月-M,年-Y
 * @param {string} energyType 类型:电-ELEC,水-WAT,燃气-GAS,综合能源-CEC(能源制造单成走势根据下拉框)
 * @param {string} queryDate 查询日期:yyyy(年格式),yyyy-MM(月格式)
 * @param {string} systemCode 系统编号
 * @param {AxiosInstance} local_options
 */
export const getCostAnalysisEnergyPurchaseAreaCostRatio = async (
  dateType?: string,
  energyType?: string,
  queryDate?: string,
  systemCode?: string,
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListCostRatioRespVO> => {
  let local_url = '/cost-analysis/energy-purchase/area-cost-ratio'

  let local_params = { dateType, energyType, queryDate, systemCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListCostRatioRespVO>
}

/**
 * @tags 成本分析
 * @summary 能源购入成本占比
 * @param {string} dateType 日期维度:月-M,年-Y,季度-Q(系统诊断使用)
 * @param {string} queryDate 查询日期:yyyy(年格式),yyyy-MM(月格式)
 * @param {string} systemCode 系统编号
 * @param {AxiosInstance} local_options
 */
export const getCostAnalysisEnergyPurchaseCostRatio = async (
  dateType?: string,
  queryDate?: string,
  systemCode?: string,
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListCostRatioRespVO> => {
  let local_url = '/cost-analysis/energy-purchase/cost-ratio'

  let local_params = { dateType, queryDate, systemCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListCostRatioRespVO>
}

/**
 * @tags 成本分析
 * @summary 能源购入成本走势
 * @param {string} dateType 日期维度:月-M,年-Y,季度-Q(系统诊断使用)
 * @param {string} queryDate 查询日期:yyyy(年格式),yyyy-MM(月格式)
 * @param {string} systemCode 系统编号
 * @param {AxiosInstance} local_options
 */
export const getCostAnalysisEnergyPurchaseCostTrend = async (
  dateType?: string,
  queryDate?: string,
  systemCode?: string,
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListCostTrendRespVO> => {
  let local_url = '/cost-analysis/energy-purchase/cost-trend'

  let local_params = { dateType, queryDate, systemCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListCostTrendRespVO>
}

/**
 * @tags 成本分析
 * @summary 能源购入区域成本对比-能源类型下拉
 * @param {AxiosInstance} local_options
 */
export const getCostAnalysisEnergyCostTypes = async (
  local_options?: AxiosInstance
): Promise<StandardModel$9244e3e4> => {
  let local_url = '/cost-analysis/energy/cost/types'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$9244e3e4>
}

/**
 * @tags 成本分析
 * @summary 能源制造成本走势
 * @param {string} dateType 日期维度:月-M,年-Y
 * @param {string} energyType 类型:电-ELEC,水-WAT,燃气-GAS,综合能源-CEC(能源制造单成走势根据下拉框)
 * @param {string} queryDate 查询日期:yyyy(年格式),yyyy-MM(月格式)
 * @param {string} systemCode 系统编号
 * @param {AxiosInstance} local_options
 */
export const getCostAnalysisEnergyFullCostTrend = async (
  dateType?: string,
  energyType?: string,
  queryDate?: string,
  systemCode?: string,
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListCostTrendRespVO> => {
  let local_url = '/cost-analysis/energy/full-cost-trend'

  let local_params = { dateType, energyType, queryDate, systemCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListCostTrendRespVO>
}

/**
 * @tags 成本分析
 * @summary 能源制造成本能源类型
 * @param {AxiosInstance} local_options
 */
export const getCostAnalysisEnergyFullTypes = async (
  local_options?: AxiosInstance
): Promise<StandardModel$9244e3e4> => {
  let local_url = '/cost-analysis/energy/full-types'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$9244e3e4>
}

/**
 * @tags 成本分析
 * @summary 能源制造单成走势-能源类型
 * @param {AxiosInstance} local_options
 */
export const getCostAnalysisEnergyTypes = async (
  local_options?: AxiosInstance
): Promise<StandardModel$9244e3e4> => {
  let local_url = '/cost-analysis/energy/types'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$9244e3e4>
}

/**
 * @tags 成本分析
 * @summary 能源制造单成走势
 * @param {string} dateType 日期维度:月-M,年-Y
 * @param {string} energyType 类型:电-ELEC,水-WAT,燃气-GAS,综合能源-CEC(能源制造单成走势根据下拉框)
 * @param {string} queryDate 查询日期:yyyy(年格式),yyyy-MM(月格式)
 * @param {string} systemCode 系统编号
 * @param {AxiosInstance} local_options
 */
export const getCostAnalysisEnergyUnitCostTrend = async (
  dateType?: string,
  energyType?: string,
  queryDate?: string,
  systemCode?: string,
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListCostTrendRespVO> => {
  let local_url = '/cost-analysis/energy/unit-cost-trend'

  let local_params = { dateType, energyType, queryDate, systemCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListCostTrendRespVO>
}

/**
 * @tags 成本分析
 * @summary 成本概览
 * @param {string} dateType 日期维度:月-M,年-Y,季度-Q(系统诊断使用)
 * @param {string} queryDate 查询日期:yyyy(年格式),yyyy-MM(月格式)
 * @param {string} systemCode 系统编号
 * @param {AxiosInstance} local_options
 */
export const getCostAnalysisOverview = async (
  dateType?: string,
  queryDate?: string,
  systemCode?: string,
  local_options?: AxiosInstance
): Promise<StandardModel$cb20ddf8> => {
  let local_url = '/cost-analysis/overview'

  let local_params = { dateType, queryDate, systemCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$cb20ddf8>
}

/**
 * @tags 成本管理
 * @summary 新增
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postCostManagementRecord = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/cost-management/record'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultBoolean>
}

/**
 * @tags 成本管理
 * @summary 导出
 * @param {StandardModel$299397e8} [body] exportReqVo
 * @param {AxiosInstance} local_options
 */
export const postCostManagementRecordExport = async (
  body?: StandardModel$299397e8,
  local_options?: AxiosInstance
): Promise<any> => {
  let local_url = '/cost-management/record/export'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<any>
}

/**
 * @tags 成本管理
 * @summary 详情
 * @param {number} id 成本管理id
 * @param {AxiosInstance} local_options
 */
export const getCostManagementRecordById = async (
  id: number,
  local_options?: AxiosInstance
): Promise<StandardModel$2b86401e> => {
  let local_url = '/cost-management/record/{id}'
  local_url = local_url.replace('{id}', encodeURIComponent(String(id)))

  let local_params = { id }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$2b86401e>
}

/**
 * @tags 成本管理
 * @summary 更新
 * @param {number} id 成本管理id
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const putCostManagementRecordById = async (
  id: number,
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/cost-management/record/{id}'
  local_url = local_url.replace('{id}', encodeURIComponent(String(id)))

  let local_params = { id }
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'put',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultBoolean>
}

/**
 * @tags 成本管理
 * @summary 列表
 * @param {AxiosInstance} local_options
 */
export const getCostManagementRecords = async (
  local_options?: AxiosInstance
): Promise<StandardModel$f24a06e1> => {
  let local_url = '/cost-management/records'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$f24a06e1>
}

/**
 * @tags 企业租户
 * @summary 获取企业顶层文件夹详情
 * @param {AxiosInstance} local_options
 */
export const getEnt = async (
  local_options?: AxiosInstance
): Promise<StandardModel$d1f3d3c6> => {
  let local_url = '/ent'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$d1f3d3c6>
}

/**
 * @tags 文件接口
 * @summary 查询文件详情
 * @param {number} fileId fileId
 * @param {AxiosInstance} local_options
 */
export const getFile = async (
  fileId?: number,
  local_options?: AxiosInstance
): Promise<StandardModel$bb4baa89> => {
  let local_url = '/file'

  let local_params = { fileId }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$bb4baa89>
}

/**
 * @tags 文件接口
 * @summary 文件重命名
 * @param {StandardModel$0cea3455} [body] vo
 * @param {AxiosInstance} local_options
 */
export const putFile = async (
  body?: StandardModel$0cea3455,
  local_options?: AxiosInstance
): Promise<StandardModel$7e142a0b> => {
  let local_url = '/file'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'put',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$7e142a0b>
}

/**
 * @tags 文件接口
 * @summary 删除文件(批量)
 * @param {AxiosInstance} local_options
 */
export const deleteFile = async (
  local_options?: AxiosInstance
): Promise<StandardModel$7e142a0b> => {
  let local_url = '/file'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'delete',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$7e142a0b>
}

/**
 * @tags 文件接口
 * @summary 获取面包屑列表
 * @param {number} fileId fileId
 * @param {AxiosInstance} local_options
 */
export const getFileBreadcrumbs = async (
  fileId?: number,
  local_options?: AxiosInstance
): Promise<StandardModel$26aece8f> => {
  let local_url = '/file/breadcrumbs'

  let local_params = { fileId }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$26aece8f>
}

/**
 * @tags 文件接口
 * @summary 复制文件(批量)
 * @param {StandardModel$4163b1fe} [body] copyVO
 * @param {AxiosInstance} local_options
 */
export const postFileCopy = async (
  body?: StandardModel$4163b1fe,
  local_options?: AxiosInstance
): Promise<StandardModel$7e142a0b> => {
  let local_url = '/file/copy'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$7e142a0b>
}

/**
 * @tags 文件接口
 * @summary 下载文件(只支持单个下载)
 * @param {number} fileId fileId
 * @param {AxiosInstance} local_options
 */
export const getFileDownload = async (
  fileId?: number,
  local_options?: AxiosInstance
): Promise<any> => {
  let local_url = '/file/download'

  let local_params = { fileId }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<any>
}

/**
 * @tags 文件接口
 * @summary 批量下载文件
 * @param {string} fileIds fileIds
 * @param {AxiosInstance} local_options
 */
export const getFileDownloadBatch = async (
  fileIds?: string,
  local_options?: AxiosInstance
): Promise<any> => {
  let local_url = '/file/download-batch'

  let local_params = { fileIds }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<any>
}

/**
 * @tags 文件接口
 * @summary 新建文件夹
 * @param {StandardModel$5788a977} [body] createFolderVO
 * @param {AxiosInstance} local_options
 */
export const postFileFolder = async (
  body?: StandardModel$5788a977,
  local_options?: AxiosInstance
): Promise<StandardModel$7e142a0b> => {
  let local_url = '/file/folder'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$7e142a0b>
}

/**
 * @tags 文件接口
 * @summary 获取文件夹树
 * @param {AxiosInstance} local_options
 */
export const getFileFolderTree = async (
  local_options?: AxiosInstance
): Promise<StandardModel$6384cc5a> => {
  let local_url = '/file/folder/tree'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$6384cc5a>
}

/**
 * @tags 文件接口
 * @summary 通过文件名搜索文件列表
 * @param {string} fileTypes fileTypes
 * @param {string} keyword keyword
 * @param {'ASC'|'DESC'|'DEFAULT_ORDER'} orderType orderType
 * @param {number} pageNum pageNum
 * @param {number} pageSize pageSize
 * @param {'FILE_NAME'|'FILE_SIZE'|'UPDATE_TIME'|'DEFAULT_FILED'} sortFiled sortFiled
 * @param {AxiosInstance} local_options
 */
export const getFileSearch = async (
  fileTypes?: string,
  keyword?: string,
  orderType?: 'ASC' | 'DESC' | 'DEFAULT_ORDER',
  pageNum?: number,
  pageSize?: number,
  sortFiled?: 'FILE_NAME' | 'FILE_SIZE' | 'UPDATE_TIME' | 'DEFAULT_FILED',
  local_options?: AxiosInstance
): Promise<StandardModel$7e142a0b> => {
  let local_url = '/file/search'

  let local_params = {
    fileTypes,
    keyword,
    orderType,
    pageNum,
    pageSize,
    sortFiled,
  }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$7e142a0b>
}

/**
 * @tags 文件接口
 * @summary 秒传文件
 * @param {StandardModel$d186030e} [body] fileSecUploadVO
 * @param {AxiosInstance} local_options
 */
export const postFileSecUpload = async (
  body?: StandardModel$d186030e,
  local_options?: AxiosInstance
): Promise<RdfaResult> => {
  let local_url = '/file/sec-upload'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResult>
}

/**
 * @tags 文件接口
 * @summary 转移文件(批量)
 * @param {StandardModel$b25754f2} [body] transferVO
 * @param {AxiosInstance} local_options
 */
export const postFileTransfer = async (
  body?: StandardModel$b25754f2,
  local_options?: AxiosInstance
): Promise<StandardModel$7e142a0b> => {
  let local_url = '/file/transfer'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$7e142a0b>
}

/**
 * @tags 文件接口
 * @summary 上传文件
 * @param {string} md5 文件对应的md5
 * @param {string} name 文件名称
 * @param {number} pageNum 页码
 * @param {number} pageSize 每页记录数
 * @param {number} parentId 父id
 * @param {number} size 文件大小
 * @param {number} chunk 分片下标
 * @param {boolean} chunked undefined
 * @param {number} chunks 总分片数
 * @param {string} [body] undefined
 * @param {AxiosInstance} local_options
 */
export const postFileUpload = async (
  md5: string,
  name: string,
  pageNum: number,
  pageSize: number,
  parentId: number,
  size: number,
  chunk?: number,
  chunked?: boolean,
  chunks?: number,
  body?: string,
  local_options?: AxiosInstance
): Promise<StandardModel$7e142a0b> => {
  let local_url = '/file/upload'

  let local_params = {
    md5,
    name,
    pageNum,
    pageSize,
    parentId,
    size,
    chunk,
    chunked,
    chunks,
  }
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$7e142a0b>
}

/**
 * @tags 文件接口
 * @summary 获取文件列表
 * @param {string} fileTypes fileTypes
 * @param {'ASC'|'DESC'|'DEFAULT_ORDER'} orderType orderType
 * @param {number} pageNum pageNum
 * @param {number} pageSize pageSize
 * @param {number} parentId parentId
 * @param {'FILE_NAME'|'FILE_SIZE'|'UPDATE_TIME'|'DEFAULT_FILED'} sortFiled sortFiled
 * @param {AxiosInstance} local_options
 */
export const getFiles = async (
  fileTypes?: string,
  orderType?: 'ASC' | 'DESC' | 'DEFAULT_ORDER',
  pageNum?: number,
  pageSize?: number,
  parentId?: number,
  sortFiled?: 'FILE_NAME' | 'FILE_SIZE' | 'UPDATE_TIME' | 'DEFAULT_FILED',
  local_options?: AxiosInstance
): Promise<StandardModel$7e142a0b> => {
  let local_url = '/files'

  let local_params = {
    fileTypes,
    orderType,
    pageNum,
    pageSize,
    parentId,
    sortFiled,
  }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$7e142a0b>
}

/**
 * @tags 绿电购入
 * @summary 分页查询接口
 * @param {number} pageNum 页码
 * @param {number} pageSize 每页记录数
 * @param {AxiosInstance} local_options
 */
export const getGreenElectricityPurchasePage = async (
  pageNum: number,
  pageSize: number,
  local_options?: AxiosInstance
): Promise<StandardModel$ff9ddbc3> => {
  let local_url = '/green-electricity-purchase/page'

  let local_params = { pageNum, pageSize }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$ff9ddbc3>
}

/**
 * @tags 绿电购入
 * @summary 批量新增
 * @param {StandardModel$43acc24a[]} [body] greenElectricityList
 * @param {AxiosInstance} local_options
 */
export const postGreenElectricityPurchaseRecord = async (
  body?: StandardModel$43acc24a[],
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/green-electricity-purchase/record'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultBoolean>
}

/**
 * @tags 绿能分析
 * @summary 获取绿色能源用量变化
 * @param {string} dateType 日期类型：年：Y，月：M，天：D，小时：H，自定义：N
 * @param {string} systemCode cim平台系统Code
 * @param {string} endDate 结束日期，日期类型是自定义时存在，yyyy-MM-dd
 * @param {string} queryDate 查询精确日期，年yyyy，月yyyy-MM，日yyyy-MM-dd
 * @param {string} startDate 开始日期，日期类型是自定义时存在，yyyy-MM-dd
 * @param {string} type 统计类型, 0:按告警处理，1：按告警等级， 2：按告警处类别
 * @param {AxiosInstance} local_options
 */
export const getGreenEnergyAnalysisConsumptionTrend = async (
  dateType: string,
  systemCode: string,
  endDate?: string,
  queryDate?: string,
  startDate?: string,
  type?: string,
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListCompositeEnergyDetailVO> => {
  let local_url = '/green-energy/analysis/consumption/trend'

  let local_params = {
    dateType,
    systemCode,
    endDate,
    queryDate,
    startDate,
    type,
  }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListCompositeEnergyDetailVO>
}

/**
 * @tags 绿能分析
 * @summary 获取绿色能源用量分布
 * @param {string} dateType 日期类型：年：Y，月：M，天：D，小时：H，自定义：N
 * @param {string} systemCode cim平台系统Code
 * @param {string} endDate 结束日期，日期类型是自定义时存在，yyyy-MM-dd
 * @param {string} queryDate 查询精确日期，年yyyy，月yyyy-MM，日yyyy-MM-dd
 * @param {string} startDate 开始日期，日期类型是自定义时存在，yyyy-MM-dd
 * @param {string} type 统计类型, 0:按告警处理，1：按告警等级， 2：按告警处类别
 * @param {AxiosInstance} local_options
 */
export const getGreenEnergyAnalysisStatisticRatio = async (
  dateType: string,
  systemCode: string,
  endDate?: string,
  queryDate?: string,
  startDate?: string,
  type?: string,
  local_options?: AxiosInstance
): Promise<StandardModel$aeabb6b1> => {
  let local_url = '/green-energy/analysis/statistic/ratio'

  let local_params = {
    dateType,
    systemCode,
    endDate,
    queryDate,
    startDate,
    type,
  }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$aeabb6b1>
}

/**
 * @tags 绿能分析
 * @summary 获取绿色能源统计指标
 * @param {string} dateType 日期类型：年：Y，月：M，天：D，小时：H，自定义：N
 * @param {string} systemCode cim平台系统Code
 * @param {string} endDate 结束日期，日期类型是自定义时存在，yyyy-MM-dd
 * @param {string} queryDate 查询精确日期，年yyyy，月yyyy-MM，日yyyy-MM-dd
 * @param {string} startDate 开始日期，日期类型是自定义时存在，yyyy-MM-dd
 * @param {string} type 统计类型, 0:按告警处理，1：按告警等级， 2：按告警处类别
 * @param {AxiosInstance} local_options
 */
export const getGreenEnergyAnalysisStatisticsIndicators = async (
  dateType: string,
  systemCode: string,
  endDate?: string,
  queryDate?: string,
  startDate?: string,
  type?: string,
  local_options?: AxiosInstance
): Promise<StandardModel$07ca8dcb> => {
  let local_url = '/green-energy/analysis/statistics/indicators'

  let local_params = {
    dateType,
    systemCode,
    endDate,
    queryDate,
    startDate,
    type,
  }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$07ca8dcb>
}

/**
 * @tags 智能分析中心
 * @summary 能源消耗
 * @param {string} dateType 日期类型：年：Y，月：M，天：D
 * @param {string} mediumType 能介类型，默认CEC
 * @param {string} queryDate 查询精确日期，年yyyy，月yyyy-MM，日yyyy-MM-dd
 * @param {string} queryDimension 查询维度:1-能耗,2-单耗,默认1-能耗
 * @param {string} systemCode cim平台系统Code
 * @param {AxiosInstance} local_options
 */
export const getIntelligentAnalysisCenterCockpitEnergyConsumption = async (
  dateType: string,
  mediumType: string,
  queryDate: string,
  queryDimension: string,
  systemCode: string,
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListCompositeEnergyDetailVO> => {
  let local_url = '/intelligent-analysis-center/cockpit/energy-consumption'

  let local_params = {
    dateType,
    mediumType,
    queryDate,
    queryDimension,
    systemCode,
  }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListCompositeEnergyDetailVO>
}

/**
 * @tags 智能分析中心
 * @summary 能耗分布
 * @param {string} dateType 日期维度:日-D,月-M,年-Y
 * @param {string} queryDate 查询日期
 * @param {string} systemCode 系统编号
 * @param {AxiosInstance} local_options
 */
export const getIntelligentAnalysisCenterCockpitEnergyConsumptionDistribution =
  async (
    dateType: string,
    queryDate: string,
    systemCode: string,
    local_options?: AxiosInstance
  ): Promise<StandardModel$012f57b8> => {
    let local_url =
      '/intelligent-analysis-center/cockpit/energy-consumption-distribution'

    let local_params = { dateType, queryDate, systemCode }
    const result = (await fetch({
      url: local_url,
      method: 'get',
      params: local_params,

      ...(local_options || {}),
    })) as unknown
    return result as Promise<StandardModel$012f57b8>
  }

/**
 * @tags 智能分析中心
 * @summary 能源成本
 * @param {AxiosInstance} local_options
 */
export const getIntelligentAnalysisCenterCockpitEnergyCost = async (
  local_options?: AxiosInstance
): Promise<StandardModel$ba215b74> => {
  let local_url = '/intelligent-analysis-center/cockpit/energy-cost'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$ba215b74>
}

/**
 * @tags 智能分析中心
 * @summary 结构分析
 * @param {AxiosInstance} local_options
 */
export const getIntelligentAnalysisCenterCockpitStructuralAnalysis = async (
  local_options?: AxiosInstance
): Promise<RdfaResultEnergyStructuralAnalysisVO> => {
  let local_url = '/intelligent-analysis-center/cockpit/structural-analysis'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultEnergyStructuralAnalysisVO>
}

/**
 * @tags 智能分析中心
 * @summary 可持续能源看板
 * @param {string} dateType 时间粒度(D:日;M:月;Y:年;)
 * @param {string} queryDate 查询时间
 * @param {string} systemCode cim平台系统Code
 * @param {AxiosInstance} local_options
 */
export const getIntelligentAnalysisCenterCockpitSustainableEnergyDashboard =
  async (
    dateType?: string,
    queryDate?: string,
    systemCode?: string,
    local_options?: AxiosInstance
  ): Promise<StandardModel$7ce105c3> => {
    let local_url =
      '/intelligent-analysis-center/cockpit/sustainable-energy-dashboard'

    let local_params = { dateType, queryDate, systemCode }
    const result = (await fetch({
      url: local_url,
      method: 'get',
      params: local_params,

      ...(local_options || {}),
    })) as unknown
    return result as Promise<StandardModel$7ce105c3>
  }

/**
 * @tags 智能分析中心
 * @summary 能源保障
 * @param {string} dateType 日期类型：年：Y，月：M，天：D
 * @param {string} queryDate 查询精确日期，年yyyy，月yyyy-MM，日yyyy-MM-dd
 * @param {string} systemCode cim平台系统Code
 * @param {string} systemType 系统类型
 * @param {string} type 查询类型：1：能源指标不达标；2：中断次数；3:故障率
 * @param {AxiosInstance} local_options
 */
export const getIntelligentAnalysisCenterEnergySecurity = async (
  dateType: string,
  queryDate: string,
  systemCode: string,
  systemType?: string,
  type?: string,
  local_options?: AxiosInstance
): Promise<StandardModel$5ff51914> => {
  let local_url = '/intelligent-analysis-center/energy/security'

  let local_params = { dateType, queryDate, systemCode, systemType, type }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$5ff51914>
}

/**
 * @tags 智能分析中心
 * @summary 能源保障系统类型
 * @param {string} systemCode 系统编码
 * @param {AxiosInstance} local_options
 */
export const getIntelligentAnalysisCenterEnergySecuritySystems = async (
  systemCode: string,
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListDropDownBoxVO> => {
  let local_url = '/intelligent-analysis-center/energy/security/systems'

  let local_params = { systemCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListDropDownBoxVO>
}

/**
 * @tags 智能分析中心
 * @summary 新增
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postIntelligentAnalysisCenterInformation = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/intelligent-analysis-center/information'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultBoolean>
}

/**
 * @tags 智能分析中心
 * @summary 删除资讯
 * @param {number[]} ids 资讯id集合
 * @param {AxiosInstance} local_options
 */
export const deleteIntelligentAnalysisCenterInformation = async (
  ids: number[],
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/intelligent-analysis-center/information'

  let local_params = { ids }
  const result = (await fetch({
    url: local_url,
    method: 'delete',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultBoolean>
}

/**
 * @tags 智能分析中心
 * @summary 详细
 * @param {number} id 资讯信息id
 * @param {AxiosInstance} local_options
 */
export const getIntelligentAnalysisCenterInformationDetailById = async (
  id: number,
  local_options?: AxiosInstance
): Promise<StandardModel$93362358> => {
  let local_url = '/intelligent-analysis-center/information/detail/{id}'
  local_url = local_url.replace('{id}', encodeURIComponent(String(id)))

  let local_params = { id }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$93362358>
}

/**
 * @tags 智能分析中心
 * @summary 分页查询接口
 * @param {number} pageNum pageNum
 * @param {number} pageSize pageSize
 * @param {string} title title
 * @param {AxiosInstance} local_options
 */
export const getIntelligentAnalysisCenterInformationPage = async (
  pageNum?: number,
  pageSize?: number,
  title?: string,
  local_options?: AxiosInstance
): Promise<StandardModel$37912255> => {
  let local_url = '/intelligent-analysis-center/information/page'

  let local_params = { pageNum, pageSize, title }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$37912255>
}

/**
 * @tags 智能分析中心
 * @summary 修改
 * @param {number} id 资讯id
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const putIntelligentAnalysisCenterInformationById = async (
  id: number,
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/intelligent-analysis-center/information/{id}'
  local_url = local_url.replace('{id}', encodeURIComponent(String(id)))

  let local_params = { id }
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'put',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultBoolean>
}

/**
 * @tags 智能分析中心
 * @summary 污染物排放分析
 * @param {string} dateType 日期类型：年：Y，月：M，天：D，小时：H
 * @param {string} pollutantType 污染物类型
 * @param {string} systemCode cim平台系统Code
 * @param {string} queryDate 查询精确日期，年yyyy，月yyyy-MM，日yyyy-MM-dd
 * @param {AxiosInstance} local_options
 */
export const getIntelligentAnalysisCenterPollutantAnalysis = async (
  dateType: string,
  pollutantType: string,
  systemCode: string,
  queryDate?: string,
  local_options?: AxiosInstance
): Promise<StandardModel$c909571e> => {
  let local_url = '/intelligent-analysis-center/pollutant/analysis'

  let local_params = { dateType, pollutantType, systemCode, queryDate }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$c909571e>
}

/**
 * @tags 智能分析中心
 * @summary 污染物类型
 * @param {AxiosInstance} local_options
 */
export const getIntelligentAnalysisCenterPollutantTypes = async (
  local_options?: AxiosInstance
): Promise<StandardModel$e8a8c20d> => {
  let local_url = '/intelligent-analysis-center/pollutant/types'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$e8a8c20d>
}

/**
 * @tags 智慧能源
 * @summary 实时能耗监测
 * @param {string} systemCode systemCode
 * @param {AxiosInstance} local_options
 */
export const getIntelligentEnergyConsumptionRealtime = async (
  systemCode: string,
  local_options?: AxiosInstance
): Promise<StandardModel$3b4c1d01> => {
  let local_url = '/intelligent-energy/consumption/realtime'

  let local_params = { systemCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$3b4c1d01>
}

/**
 * @tags 智慧能源
 * @summary 用能趋势分析
 * @param {string} systemCode systemCode
 * @param {AxiosInstance} local_options
 */
export const getIntelligentEnergyConsumptionTrend = async (
  systemCode: string,
  local_options?: AxiosInstance
): Promise<StandardModel$2fe5c099> => {
  let local_url = '/intelligent-energy/consumption/trend'

  let local_params = { systemCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$2fe5c099>
}

/**
 * @tags 智慧能源
 * @summary 智慧能源-工厂2.5D告警系统图
 * @param {string} endTime 查询结束日期
 * @param {string} startTime 查询开始日期
 * @param {string} systemCode 系统编码
 * @param {AxiosInstance} local_options
 */
export const getIntelligentEnergyFactorySystemAlarm = async (
  endTime: string,
  startTime: string,
  systemCode: string,
  local_options?: AxiosInstance
): Promise<any> => {
  let local_url = '/intelligent-energy/factory-system-alarm'

  let local_params = { endTime, startTime, systemCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<any>
}

/**
 * @tags 智慧能源
 * @summary 智慧能源-实时数据
 * @param {string} systemCode systemCode
 * @param {AxiosInstance} local_options
 */
export const getIntelligentEnergyRealTimeData = async (
  systemCode: string,
  local_options?: AxiosInstance
): Promise<StandardModel$3bf24054> => {
  let local_url = '/intelligent-energy/real-time-data'

  let local_params = { systemCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$3bf24054>
}

/**
 * @tags 智慧能源
 * @summary 气象数据
 * @param {string} systemCode 系统code
 * @param {AxiosInstance} local_options
 */
export const getIntelligentEnergyWeather = async (
  systemCode: string,
  local_options?: AxiosInstance
): Promise<StandardModel$b1ca0344> => {
  let local_url = '/intelligent-energy/weather'

  let local_params = { systemCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$b1ca0344>
}

/**
 * @tags 维修费用分析
 * @summary 年度费用汇总
 * @param {string} year year
 * @param {AxiosInstance} local_options
 */
export const getMaintenanceAnalysisAnnualFeeSummary = async (
  year: string,
  local_options?: AxiosInstance
): Promise<StandardModel$8e5c56f2> => {
  let local_url = '/maintenance/analysis/annual-fee-summary'

  let local_params = { year }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$8e5c56f2>
}

/**
 * @tags 维修费用分析
 * @summary 维修费用排名
 * @param {string} orderBy 排名依据：budget(维修预算)，actualCost(实际费用), overspend(超支费用)，remained(结余费用)，默认-budget(维修预算)
 * @param {string} orderSort 排序方式：desc降序，asc升序，默认-desc(降序)
 * @param {string} year 年份选择yyyy
 * @param {string} month 月份选择MM
 * @param {AxiosInstance} local_options
 */
export const getMaintenanceAnalysisFeeRanking = async (
  orderBy: string,
  orderSort: string,
  year: string,
  month?: string,
  local_options?: AxiosInstance
): Promise<StandardModel$ab4ac05e> => {
  let local_url = '/maintenance/analysis/fee-ranking'

  let local_params = { orderBy, orderSort, year, month }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$ab4ac05e>
}

/**
 * @tags 维修费用分析
 * @summary 维修费用跟踪
 * @param {string} year year
 * @param {AxiosInstance} local_options
 */
export const getMaintenanceAnalysisFeeTracking = async (
  year: string,
  local_options?: AxiosInstance
): Promise<StandardModel$1aedee8a> => {
  let local_url = '/maintenance/analysis/fee-tracking'

  let local_params = { year }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$1aedee8a>
}

/**
 * @tags 维修费用分析
 * @summary 维修计划统计
 * @param {string} year year
 * @param {AxiosInstance} local_options
 */
export const getMaintenanceAnalysisPlanStatistics = async (
  year: string,
  local_options?: AxiosInstance
): Promise<StandardModel$bca2dcff> => {
  let local_url = '/maintenance/analysis/plan-statistics'

  let local_params = { year }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$bca2dcff>
}

/**
 * @tags 维修费用管理
 * @summary 新增/修改维修计划(包含详单信息)
 * @param {StandardModel$ec51e3d1} [body] maintenancePlanVo
 * @param {AxiosInstance} local_options
 */
export const postMaintenancePlan = async (
  body?: StandardModel$ec51e3d1,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/maintenance/plan'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultBoolean>
}

/**
 * @tags 维修费用管理
 * @summary 删除维修费用计划
 * @param {number[]} ids 维修费用计划id集合
 * @param {AxiosInstance} local_options
 */
export const deleteMaintenancePlan = async (
  ids: number[],
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/maintenance/plan'

  let local_params = { ids }
  const result = (await fetch({
    url: local_url,
    method: 'delete',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultBoolean>
}

/**
 * @tags 维修费用管理
 * @summary 费用计划导出
 * @param {StandardModel$5a5a88de} [body] queryVo
 * @param {AxiosInstance} local_options
 */
export const postMaintenancePlanExport = async (
  body?: StandardModel$5a5a88de,
  local_options?: AxiosInstance
): Promise<any> => {
  let local_url = '/maintenance/plan/export'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<any>
}

/**
 * @tags 维修费用管理
 * @summary 查询位置列表
 * @param {AxiosInstance} local_options
 */
export const getMaintenancePlanLocation = async (
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListString> => {
  let local_url = '/maintenance/plan/location'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListString>
}

/**
 * @tags 维修费用管理
 * @summary 条件查询维修计划列表(不含详单信息)
 * @param {string} endDate 维修月份结束区间yyyy-MM
 * @param {string} feeStatus 费用状态（1-超额，2-未超额，0或空-全部）
 * @param {string} location 维修位置(模糊查询)
 * @param {string} maintainStatus 维修进度（1-未开始，2-进行中，3-已结束，0或空-全部）
 * @param {number} pageNum pageNum
 * @param {number} pageSize pageSize
 * @param {string} startDate 维修月份开始区间yyyy-MM
 * @param {AxiosInstance} local_options
 */
export const getMaintenancePlanPage = async (
  endDate?: string,
  feeStatus?: string,
  location?: string,
  maintainStatus?: string,
  pageNum?: number,
  pageSize?: number,
  startDate?: string,
  local_options?: AxiosInstance
): Promise<StandardModel$70716eb6> => {
  let local_url = '/maintenance/plan/page'

  let local_params = {
    endDate,
    feeStatus,
    location,
    maintainStatus,
    pageNum,
    pageSize,
    startDate,
  }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$70716eb6>
}

/**
 * @tags 维修费用管理
 * @summary 查询单条计划详情(包含详单信息)
 * @param {number} id id
 * @param {AxiosInstance} local_options
 */
export const getMaintenancePlanById = async (
  id: number,
  local_options?: AxiosInstance
): Promise<StandardModel$14ef1887> => {
  let local_url = '/maintenance/plan/{id}'
  local_url = local_url.replace('{id}', encodeURIComponent(String(id)))

  let local_params = { id }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$14ef1887>
}

/**
 * @tags 外部数据对接
 * @summary 产量数据对接
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postOuterProductData = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/outer/product/data'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultBoolean>
}

/**
 * @tags 外部数据对接
 * @summary 生产计划数据对接
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postOuterProductPlan = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/outer/product/plan'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultBoolean>
}

/**
 * @tags 检修计划
 * @summary 新增
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postOverhaulSchedule = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/overhaul-schedule'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultBoolean>
}

/**
 * @tags 检修计划
 * @summary 删除检修计划
 * @param {number[]} ids 检修计划id集合
 * @param {AxiosInstance} local_options
 */
export const deleteOverhaulSchedule = async (
  ids: number[],
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/overhaul-schedule'

  let local_params = { ids }
  const result = (await fetch({
    url: local_url,
    method: 'delete',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultBoolean>
}

/**
 * @tags 检修计划
 * @summary 详细
 * @param {number} id 检修计划id
 * @param {AxiosInstance} local_options
 */
export const getOverhaulScheduleDetailById = async (
  id: number,
  local_options?: AxiosInstance
): Promise<StandardModel$5ef558af> => {
  let local_url = '/overhaul-schedule/detail/{id}'
  local_url = local_url.replace('{id}', encodeURIComponent(String(id)))

  let local_params = { id }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$5ef558af>
}

/**
 * @tags 检修计划
 * @summary 目标列表导出
 * @param {EcbOverhaulSchedulePageVO} [body] ecbOverhaulSchedulePageVo
 * @param {AxiosInstance} local_options
 */
export const postOverhaulScheduleExport = async (
  body?: EcbOverhaulSchedulePageVO,
  local_options?: AxiosInstance
): Promise<any> => {
  let local_url = '/overhaul-schedule/export'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<any>
}

/**
 * @tags 检修计划
 * @summary 责任人列表
 * @param {AxiosInstance} local_options
 */
export const getOverhaulScheduleLiablePersons = async (
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListEcbOverScheduleDicVO> => {
  let local_url = '/overhaul-schedule/liable-persons'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListEcbOverScheduleDicVO>
}

/**
 * @tags 检修计划
 * @summary 分页查询接口
 * @param {string} overhaulScheduleName undefined
 * @param {number} overhaulStatus undefined
 * @param {number} pageNum undefined
 * @param {number} pageSize undefined
 * @param {AxiosInstance} local_options
 */
export const getOverhaulSchedulePage = async (
  overhaulScheduleName?: string,
  overhaulStatus?: number,
  pageNum?: number,
  pageSize?: number,
  local_options?: AxiosInstance
): Promise<StandardModel$237b5c01> => {
  let local_url = '/overhaul-schedule/page'

  let local_params = { overhaulScheduleName, overhaulStatus, pageNum, pageSize }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$237b5c01>
}

/**
 * @tags 检修计划
 * @summary 检修位置列表
 * @param {AxiosInstance} local_options
 */
export const getOverhaulSchedulePlaces = async (
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListEcbOverScheduleDicVO> => {
  let local_url = '/overhaul-schedule/places'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListEcbOverScheduleDicVO>
}

/**
 * @tags 检修计划
 * @summary 修改
 * @param {number} id 检修计划id
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const putOverhaulScheduleById = async (
  id: number,
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/overhaul-schedule/{id}'
  local_url = local_url.replace('{id}', encodeURIComponent(String(id)))

  let local_params = { id }
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'put',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultBoolean>
}

/**
 * @tags 文件接口
 * @summary 预览单个文件
 * @param {number} fileId fileId
 * @param {AxiosInstance} local_options
 */
export const getPreview = async (
  fileId?: number,
  local_options?: AxiosInstance
): Promise<any> => {
  let local_url = '/preview'

  let local_params = { fileId }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<any>
}

/**
 * @tags 回收站
 * @summary 回收站删除文件
 * @param {AxiosInstance} local_options
 */
export const deleteRecycle = async (
  local_options?: AxiosInstance
): Promise<StandardModel$7e142a0b> => {
  let local_url = '/recycle'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'delete',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$7e142a0b>
}

/**
 * @tags 回收站
 * @summary 还原文件
 * @param {StandardModel$30fc2929} [body] restoreVO
 * @param {AxiosInstance} local_options
 */
export const putRecycleRestore = async (
  body?: StandardModel$30fc2929,
  local_options?: AxiosInstance
): Promise<StandardModel$7e142a0b> => {
  let local_url = '/recycle/restore'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'put',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$7e142a0b>
}

/**
 * @tags 回收站
 * @summary 获取回收站的文件列表
 * @param {'ASC'|'DESC'|'DEFAULT_ORDER'} orderType orderType
 * @param {number} pageNum pageNum
 * @param {number} pageSize pageSize
 * @param {'FILE_NAME'|'FILE_SIZE'|'UPDATE_TIME'|'DEFAULT_FILED'} sortFiled sortFiled
 * @param {AxiosInstance} local_options
 */
export const getRecycles = async (
  orderType?: 'ASC' | 'DESC' | 'DEFAULT_ORDER',
  pageNum?: number,
  pageSize?: number,
  sortFiled?: 'FILE_NAME' | 'FILE_SIZE' | 'UPDATE_TIME' | 'DEFAULT_FILED',
  local_options?: AxiosInstance
): Promise<StandardModel$7e142a0b> => {
  let local_url = '/recycles'

  let local_params = { orderType, pageNum, pageSize, sortFiled }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$7e142a0b>
}

/**
 * @tags 风险警示
 * @summary 新增或修改
 * @param {StandardModel$cac6fb04} [body] ecbRiskWarningReqVo
 * @param {AxiosInstance} local_options
 */
export const postRiskWarning = async (
  body?: StandardModel$cac6fb04,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/risk/warning'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultBoolean>
}

/**
 * @tags 风险警示
 * @summary 删除风险警示
 * @param {number[]} ids 风险警示id集合
 * @param {AxiosInstance} local_options
 */
export const deleteRiskWarning = async (
  ids: number[],
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/risk/warning'

  let local_params = { ids }
  const result = (await fetch({
    url: local_url,
    method: 'delete',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultBoolean>
}

/**
 * @tags 风险警示
 * @summary 目标列表导出
 * @param {EcbRiskWaringPageVO} [body] ecbRiskWaringVo
 * @param {AxiosInstance} local_options
 */
export const postRiskWarningExport = async (
  body?: EcbRiskWaringPageVO,
  local_options?: AxiosInstance
): Promise<any> => {
  let local_url = '/risk/warning/export'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<any>
}

/**
 * @tags 风险警示
 * @summary 责任人列表
 * @param {AxiosInstance} local_options
 */
export const getRiskWarningLiablePersons = async (
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListEcbDicVO> => {
  let local_url = '/risk/warning/liable-persons'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListEcbDicVO>
}

/**
 * @tags 风险警示
 * @summary 分页查询接口
 * @param {number} pageNum undefined
 * @param {number} pageSize undefined
 * @param {number} riskLevelId undefined
 * @param {string} riskName undefined
 * @param {number} riskTypeId undefined
 * @param {AxiosInstance} local_options
 */
export const getRiskWarningPage = async (
  pageNum?: number,
  pageSize?: number,
  riskLevelId?: number,
  riskName?: string,
  riskTypeId?: number,
  local_options?: AxiosInstance
): Promise<StandardModel$34d4bd71> => {
  let local_url = '/risk/warning/page'

  let local_params = { pageNum, pageSize, riskLevelId, riskName, riskTypeId }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$34d4bd71>
}

/**
 * @tags 风险警示
 * @summary 风险等级列表
 * @param {AxiosInstance} local_options
 */
export const getRiskWarningRiskLevels = async (
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListEcbRiskLevelVO> => {
  let local_url = '/risk/warning/risk-levels'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListEcbRiskLevelVO>
}

/**
 * @tags 风险警示
 * @summary 风险类型列表
 * @param {AxiosInstance} local_options
 */
export const getRiskWarningRiskTypes = async (
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListEcbDicVO> => {
  let local_url = '/risk/warning/risk-types'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListEcbDicVO>
}

/**
 * @tags 风险警示
 * @summary 详细
 * @param {number} id 风险警示id
 * @param {AxiosInstance} local_options
 */
export const getRiskWarningById = async (
  id: number,
  local_options?: AxiosInstance
): Promise<StandardModel$7e00e49a> => {
  let local_url = '/risk/warning/{id}'
  local_url = local_url.replace('{id}', encodeURIComponent(String(id)))

  let local_params = { id }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$7e00e49a>
}

/**
 * @tags 用户信息及权限点位
 * @summary 能管平台登录校验接口
 * @param {AxiosInstance} local_options
 */
export const getUserAuth = async (
  local_options?: AxiosInstance
): Promise<StandardModel$5313f39c> => {
  let local_url = '/user/auth'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$5313f39c>
}

/**
 * @tags 用户信息及权限点位
 * @summary 集控中心登录校验接口
 * @param {AxiosInstance} local_options
 */
export const getUserLoginStatusVerify = async (
  local_options?: AxiosInstance
): Promise<StandardModel$5313f39c> => {
  let local_url = '/user/login-status/verify'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$5313f39c>
}

/**
 * @tags 用户搜索历史
 * @summary 获取企业用户最新的搜索历史列表，默认十条
 * @param {AxiosInstance} local_options
 */
export const getUserSearchHistories = async (
  local_options?: AxiosInstance
): Promise<StandardModel$a9580953> => {
  let local_url = '/user/search/histories'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$a9580953>
}
