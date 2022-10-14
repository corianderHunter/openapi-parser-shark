// tslint:disable

import { AxiosInstance } from 'axios'
import fetch from './service'

/**
 *
 * @summary TestEnum
 * @enum TestEnum
 */
export enum TestEnum {
  qq = 'qq',
  AA = 'AA',
}

/**
 *
 * @summary AuditDTO
 * @interface AuditDTO
 */
export interface AuditDTO {
  /**
   * 审核状态 0：驳回 1：通过
   * @type { string }
   * @memberof AuditDTO
   */
  ['auditStatus']: string
  /**
   * 批次编码
   * @type { string }
   * @memberof AuditDTO
   */
  ['batchCode']: string
  /**
   * 驳回原因
   * @type { string }
   * @memberof AuditDTO
   */
  ['msg']?: string
}

/**
 *
 * @summary BatchListForChart
 * @interface BatchListForChart
 */
export interface BatchListForChart {
  /**
   * 批次编码
   * @type { string }
   * @memberof BatchListForChart
   */
  ['batchCode']?: string
  /**
   * 批次名称
   * @type { string }
   * @memberof BatchListForChart
   */
  ['batchName']?: string
  /**
   * 排放量
   * @type { number }
   * @memberof BatchListForChart
   */
  ['totalEmissions']?: number
}

/**
 *
 * @summary BomListDTO
 * @interface BomListDTO
 */
export interface BomListDTO {
  /**
   * 产品型号
   * @type { string }
   * @memberof BomListDTO
   */
  ['modeCode']: string
  /**
   * 当前页码
   * @type { number }
   * @memberof BomListDTO
   */
  ['pageNum']: number
  /**
   * 每页大小
   * @type { number }
   * @memberof BomListDTO
   */
  ['pageSize']: number
}

/**
 *
 * @summary BomSyncRawMaterialInfoDTO
 * @interface BomSyncRawMaterialInfoDTO
 */
export interface BomSyncRawMaterialInfoDTO {
  /**
   * 批次编码
   * @type { string }
   * @memberof BomSyncRawMaterialInfoDTO
   */
  ['batchCode']: string
  /**
   * 产品唯一标识
   * @type { string }
   * @memberof BomSyncRawMaterialInfoDTO
   */
  ['modeCode']: string
  /**
   * 产品编码
   * @type { string }
   * @memberof BomSyncRawMaterialInfoDTO
   */
  ['productCode']: string
}

/**
 *
 * @summary CarbonNeutralUserDTO
 * @interface CarbonNeutralUserDTO
 */
export interface CarbonNeutralUserDTO {
  /**
   * 模糊查询买卖方名称
   * @type { string }
   * @memberof CarbonNeutralUserDTO
   */
  ['nameParam']?: string
  /**
   * 买卖方类型，b买s卖
   * @type { string }
   * @memberof CarbonNeutralUserDTO
   */
  ['nameType']?: string
}

/**
 *
 * @summary CarbonProof
 * @interface CarbonProof
 */
export interface CarbonProof {
  /**
   * 凭证文件名称
   * @type { string }
   * @memberof CarbonProof
   */
  ['carbonProofName']?: string
  /**
   * 凭证文件url
   * @type { string }
   * @memberof CarbonProof
   */
  ['carbonProofUrl']?: string
  /**
   *
   * @type { number }
   * @memberof CarbonProof
   */
  ['id']?: number
}

/**
 *
 * @summary CellDTO
 * @interface CellDTO
 */
export interface CellDTO {
  /**
   * 过程Id
   * @type { string }
   * @memberof CellDTO
   */
  ['cellId']: string
  /**
   * 过程名称
   * @type { string }
   * @memberof CellDTO
   */
  ['cellName']: string
  /**
   * 输入设置
   * @type { InputData[] }
   * @memberof CellDTO
   */
  ['inputData']?: InputData[]
  /**
   * 输出设置
   * @type { OutputData[] }
   * @memberof CellDTO
   */
  ['outputData']?: OutputData[]
}

/**
 *
 * @summary CellTempInfoVO
 * @interface CellTempInfoVO
 */
export interface CellTempInfoVO {
  /**
   * 过程Id
   * @type { string }
   * @memberof CellTempInfoVO
   */
  ['cellId']?: string
  /**
   * 过程名称
   * @type { string }
   * @memberof CellTempInfoVO
   */
  ['cellName']?: string
  /**
   * 主键id
   * @type { number }
   * @memberof CellTempInfoVO
   */
  ['id']?: number
  /**
   * 输入设置
   * @type { InputData[] }
   * @memberof CellTempInfoVO
   */
  ['inputData']?: InputData[]
  /**
   * 模型编码
   * @type { string }
   * @memberof CellTempInfoVO
   */
  ['modelCode']?: string
  /**
   * 输出设置
   * @type { OutputData[] }
   * @memberof CellTempInfoVO
   */
  ['outputData']?: OutputData[]
}

/**
 *
 * @summary ComputePipelineDTO
 * @interface ComputePipelineDTO
 */
export interface ComputePipelineDTO {
  /**
   * 压气站
   * @type { number }
   * @memberof ComputePipelineDTO
   */
  ['compressorStation']?: number
  /**
   *
   * @type { number }
   * @memberof ComputePipelineDTO
   */
  ['id']?: number
  /**
   * 管线(逆止阀)
   * @type { number }
   * @memberof ComputePipelineDTO
   */
  ['linePipelineNum']?: number
  /**
   * 计量站/分输站数量
   * @type { number }
   * @memberof ComputePipelineDTO
   */
  ['meteringPipelineNum']?: number
  /**
   * 清管站数量
   * @type { number }
   * @memberof ComputePipelineDTO
   */
  ['piggingPipelineNum']?: number
  /**
   * 运输里程
   * @type { number }
   * @memberof ComputePipelineDTO
   */
  ['transportMileage']?: number
}

/**
 *
 * @summary ComputeResultDTO
 * @interface ComputeResultDTO
 */
export interface ComputeResultDTO {
  /**
   *
   * @type { number }
   * @memberof ComputeResultDTO
   */
  ['carbonEmission']?: number
  /**
   *
   * @type { number }
   * @memberof ComputeResultDTO
   */
  ['id']?: number
}

/**
 *
 * @summary ComputeWasteDTO
 * @interface ComputeWasteDTO
 */
export interface ComputeWasteDTO {
  /**
   *
   * @type { number }
   * @memberof ComputeWasteDTO
   */
  ['amount']?: number
  /**
   *
   * @type { number }
   * @memberof ComputeWasteDTO
   */
  ['carbonAmount']?: number
  /**
   *
   * @type { string }
   * @memberof ComputeWasteDTO
   */
  ['code']?: string
}

/**
 *
 * @summary DataStatusVO
 * @interface DataStatusVO
 */
export interface DataStatusVO {
  /**
   * 校验结果
   * @type { boolean }
   * @memberof DataStatusVO
   */
  ['result']?: boolean
  /**
   * 生命周期阶段id
   * @type { string }
   * @memberof DataStatusVO
   */
  ['step']?: string
}

/**
 *
 * @summary DefinedEmissionFactorReq
 * @interface DefinedEmissionFactorReq
 */
export interface DefinedEmissionFactorReq {
  /**
   *
   * @type { string }
   * @memberof DefinedEmissionFactorReq
   */
  ['belongIndustry']?: string
  /**
   *
   * @type { string }
   * @memberof DefinedEmissionFactorReq
   */
  ['dataSource']?: string
  /**
   *
   * @type { string }
   * @memberof DefinedEmissionFactorReq
   */
  ['entId']?: string
  /**
   *
   * @type { string }
   * @memberof DefinedEmissionFactorReq
   */
  ['factorCode']?: string
  /**
   *
   * @type { string }
   * @memberof DefinedEmissionFactorReq
   */
  ['factorSource']?: string
  /**
   *
   * @type { number }
   * @memberof DefinedEmissionFactorReq
   */
  ['factorType']?: number
  /**
   *
   * @type { string }
   * @memberof DefinedEmissionFactorReq
   */
  ['factorUnit']?: string
  /**
   *
   * @type { number }
   * @memberof DefinedEmissionFactorReq
   */
  ['factorValue']?: number
  /**
   *
   * @type { string }
   * @memberof DefinedEmissionFactorReq
   */
  ['factorYear']?: string
  /**
   *
   * @type { string }
   * @memberof DefinedEmissionFactorReq
   */
  ['importantLink']?: string
  /**
   *
   * @type { string }
   * @memberof DefinedEmissionFactorReq
   */
  ['materialModel']?: string
  /**
   *
   * @type { string }
   * @memberof DefinedEmissionFactorReq
   */
  ['materialName']?: string
  /**
   *
   * @type { string }
   * @memberof DefinedEmissionFactorReq
   */
  ['mediumCategory']?: string
  /**
   *
   * @type { number }
   * @memberof DefinedEmissionFactorReq
   */
  ['recommendPriority']?: number
  /**
   *
   * @type { string }
   * @memberof DefinedEmissionFactorReq
   */
  ['standardType']?: string
  /**
   *
   * @type { string }
   * @memberof DefinedEmissionFactorReq
   */
  ['usedRange']?: string
}

/**
 *
 * @summary EnergyConsumeDTO
 * @interface EnergyConsumeDTO
 */
export interface EnergyConsumeDTO {
  /**
   * 消耗量
   * @type { number }
   * @memberof EnergyConsumeDTO
   */
  ['consumeAmount']?: number
  /**
   * 能源类型
   * @type { string }
   * @memberof EnergyConsumeDTO
   */
  ['energyType']?: string
  /**
   *
   * @type { string }
   * @memberof EnergyConsumeDTO
   */
  ['energyTypeCode']?: string
  /**
   * 单位
   * @type { string }
   * @memberof EnergyConsumeDTO
   */
  ['unit']?: string
}

/**
 *
 * @summary EnergyConsumeVO
 * @interface EnergyConsumeVO
 */
export interface EnergyConsumeVO {
  /**
   * 批次编码
   * @type { string }
   * @memberof EnergyConsumeVO
   */
  ['batchCode']?: string
  /**
   * 碳排占比
   * @type { number }
   * @memberof EnergyConsumeVO
   */
  ['carbonMix']?: number
  /**
   * 消耗量
   * @type { number }
   * @memberof EnergyConsumeVO
   */
  ['consumeAmount']?: number
  /**
   * 能源消耗范围
   * @type { string }
   * @memberof EnergyConsumeVO
   */
  ['energyRange']?: string
  /**
   * 能源类型
   * @type { string }
   * @memberof EnergyConsumeVO
   */
  ['energyType']?: string
  /**
   * 能源类型
   * @type { string }
   * @memberof EnergyConsumeVO
   */
  ['energyTypeCode']?: string
  /**
   *
   * @type { number }
   * @memberof EnergyConsumeVO
   */
  ['id']?: number
  /**
   * 0:原材料运输 1:产品制造 2:产品分销物流 3:产品使用
   * @type { number }
   * @memberof EnergyConsumeVO
   */
  ['stage']?: number
  /**
   * 产品步骤编码
   * @type { string }
   * @memberof EnergyConsumeVO
   */
  ['stageCode']?: string
  /**
   * 单位
   * @type { string }
   * @memberof EnergyConsumeVO
   */
  ['unit']?: string
}

/**
 *
 * @summary ExamineListFileVO
 * @interface ExamineListFileVO
 */
export interface ExamineListFileVO {
  /**
   *
   * @type { string }
   * @memberof ExamineListFileVO
   */
  ['batchCode']?: string
  /**
   * 文件名称
   * @type { string }
   * @memberof ExamineListFileVO
   */
  ['fileName']?: string
  /**
   * 证明文件地址
   * @type { string }
   * @memberof ExamineListFileVO
   */
  ['fileUrl']?: string
  /**
   *
   * @type { number }
   * @memberof ExamineListFileVO
   */
  ['id']?: number
  /**
   *
   * @type { string }
   * @memberof ExamineListFileVO
   */
  ['itemCode']?: string
}

/**
 *
 * @summary ExamineOrgResVO
 * @interface ExamineOrgResVO
 */
export interface ExamineOrgResVO {
  /**
   * 核查机构编码
   * @type { string }
   * @memberof ExamineOrgResVO
   */
  ['institutionCode']?: string
  /**
   * 核查机构名称
   * @type { string }
   * @memberof ExamineOrgResVO
   */
  ['institutionName']?: string
  /**
   * 租户id
   * @type { string }
   * @memberof ExamineOrgResVO
   */
  ['institutionTenantId']?: string
}

/**
 *
 * @summary ExamineResultVO
 * @interface ExamineResultVO
 */
export interface ExamineResultVO {
  /**
   * 阶段细项是否可编辑 1-可编辑，0-不可编辑
   * @type { string }
   * @memberof ExamineResultVO
   */
  ['editable']?: string
  /**
   * 阶段细项审核结果 0-表示待审核,1-审核通过,2-驳回
   * @type { string }
   * @memberof ExamineResultVO
   */
  ['itemStatus']?: string
  /**
   * 驳回原因
   * @type { string }
   * @memberof ExamineResultVO
   */
  ['rejectionReason']?: string
}

/**
 *
 * @summary ExcelStorageEnergyConsumeVO
 * @interface ExcelStorageEnergyConsumeVO
 */
export interface ExcelStorageEnergyConsumeVO {
  /**
   * 产品批次
   * @type { string }
   * @memberof ExcelStorageEnergyConsumeVO
   */
  ['batchCode']?: string
  /**
   * 碳排占比
   * @type { number }
   * @memberof ExcelStorageEnergyConsumeVO
   */
  ['carbonMix']?: number
  /**
   * 消耗量
   * @type { number }
   * @memberof ExcelStorageEnergyConsumeVO
   */
  ['consumeAmount']?: number
  /**
   * 能源消耗范围
   * @type { string }
   * @memberof ExcelStorageEnergyConsumeVO
   */
  ['energyRange']?: string
  /**
   * 能源类型
   * @type { string }
   * @memberof ExcelStorageEnergyConsumeVO
   */
  ['energyType']?: string
  /**
   * 能源类型code
   * @type { string }
   * @memberof ExcelStorageEnergyConsumeVO
   */
  ['energyTypeCode']?: string
  /**
   * 单位
   * @type { string }
   * @memberof ExcelStorageEnergyConsumeVO
   */
  ['unit']?: string
}

/**
 *
 * @summary GetAuditListDTO
 * @interface GetAuditListDTO
 */
export interface GetAuditListDTO {
  /**
   * 审核状态 0：待审核 1：已审核
   * @type { string }
   * @memberof GetAuditListDTO
   */
  ['auditStatus']: string
  /**
   * 批次编码
   * @type { string }
   * @memberof GetAuditListDTO
   */
  ['batchCode']?: string
  /**
   * 当前页码
   * @type { number }
   * @memberof GetAuditListDTO
   */
  ['pageNum']: number
  /**
   * 每页大小
   * @type { number }
   * @memberof GetAuditListDTO
   */
  ['pageSize']: number
  /**
   * 产品型号
   * @type { string }
   * @memberof GetAuditListDTO
   */
  ['productMode']?: string
  /**
   * 产品名称
   * @type { string }
   * @memberof GetAuditListDTO
   */
  ['productName']?: string
}

/**
 *
 * @summary GetProductInfoListVO
 * @interface GetProductInfoListVO
 */
export interface GetProductInfoListVO {
  /**
   * 图表数据
   * @type { BatchListForChart[] }
   * @memberof GetProductInfoListVO
   */
  ['charts']?: BatchListForChart[]
  /**
   * id
   * @type { number }
   * @memberof GetProductInfoListVO
   */
  ['id']?: number
  /**
   * 产品唯一标识
   * @type { string }
   * @memberof GetProductInfoListVO
   */
  ['modeCode']?: string
  /**
   * 产品编码
   * @type { string }
   * @memberof GetProductInfoListVO
   */
  ['productCode']?: string
  /**
   * 产品型号
   * @type { string }
   * @memberof GetProductInfoListVO
   */
  ['productMode']?: string
  /**
   * 产品名称
   * @type { string }
   * @memberof GetProductInfoListVO
   */
  ['productName']?: string
  /**
   * 产品类别编码
   * @type { string }
   * @memberof GetProductInfoListVO
   */
  ['productType']?: string
  /**
   * 碳排总量
   * @type { number }
   * @memberof GetProductInfoListVO
   */
  ['total']?: number
  /**
   * 产品类别名称
   * @type { string }
   * @memberof GetProductInfoListVO
   */
  ['typeName']?: string
}

/**
 *
 * @summary GetQueryListVO
 * @interface GetQueryListVO
 */
export interface GetQueryListVO {
  /**
   * 编码
   * @type { string }
   * @memberof GetQueryListVO
   */
  ['code']?: string
  /**
   * 名称
   * @type { string }
   * @memberof GetQueryListVO
   */
  ['name']?: string
}

/**
 *
 * @summary StandardModel$673dbe0e
 * @interface StandardModel$673dbe0e
 */
export interface StandardModel$673dbe0e {}

/**
 *
 * @summary HashMapStringListSysEmissionFactorVO
 * @interface HashMapStringListSysEmissionFactorVO
 */
export interface HashMapStringListSysEmissionFactorVO {}

/**
 *
 * @summary IdDto
 * @interface IdDto
 */
export interface IdDto {
  /**
   * 主键id
   * @type { number }
   * @memberof IdDto
   */
  ['id']: number
}

/**
 *
 * @summary ImportResultVO
 * @interface ImportResultVO
 */
export interface ImportResultVO {
  /**
   * 批次号
   * @type { string }
   * @memberof ImportResultVO
   */
  ['batchCode']?: string
  /**
   * 数据集合
   * @type { ExcelStorageEnergyConsumeVO[] }
   * @memberof ImportResultVO
   */
  ['consumeList']?: ExcelStorageEnergyConsumeVO[]
  /**
   * 编码
   * @type { string }
   * @memberof ImportResultVO
   */
  ['dealCode']?: string
  /**
   * 状态
   * @type { string }
   * @memberof ImportResultVO
   */
  ['status']?: string
}

/**
 *
 * @summary IndustryCalculateCarbonRes
 * @interface IndustryCalculateCarbonRes
 */
export interface IndustryCalculateCarbonRes {
  /**
   *
   * @type { number }
   * @memberof IndustryCalculateCarbonRes
   */
  ['carbonEmissions']?: number
  /**
   *
   * @type { string }
   * @memberof IndustryCalculateCarbonRes
   */
  ['categoryCode']?: string
  /**
   *
   * @type { string }
   * @memberof IndustryCalculateCarbonRes
   */
  ['id']?: string
  /**
   *
   * @type { string }
   * @memberof IndustryCalculateCarbonRes
   */
  ['typeCode']?: string
}

/**
 *
 * @summary InputData
 * @interface InputData
 */
export interface InputData {
  /**
   * 单位产品消耗量
   * @type { number }
   * @memberof InputData
   */
  ['amount']?: number
  /**
   * 选项编码
   * @type { string }
   * @memberof InputData
   */
  ['code']?: string
  /**
   * 排放因子编码
   * @type { string }
   * @memberof InputData
   */
  ['factorCode']?: string
  /**
   * 排放因子值
   * @type { number }
   * @memberof InputData
   */
  ['factorCodeAmount']?: number
  /**
   * 排放因子名称
   * @type { string }
   * @memberof InputData
   */
  ['factorCodeName']?: string
  /**
   * 排放因子单位
   * @type { string }
   * @memberof InputData
   */
  ['factorCodeUnit']?: string
  /**
   * id
   * @type { number }
   * @memberof InputData
   */
  ['id']?: number
  /**
   * 选项名称
   * @type { string }
   * @memberof InputData
   */
  ['name']?: string
  /**
   * 标题
   * @type { string }
   * @memberof InputData
   */
  ['title']?: string
  /**
   * 类别，1:耗材，2:能资；3:共用能资
   * @type { string }
   * @memberof InputData
   */
  ['type']?: string
  /**
   * 单位
   * @type { string }
   * @memberof InputData
   */
  ['unit']?: string
  /**
   * 单位材料重量
   * @type { number }
   * @memberof InputData
   */
  ['weight']?: number
  /**
   * 重量单位
   * @type { string }
   * @memberof InputData
   */
  ['weightUnit']?: string
}

/**
 *
 * @summary ItemListVO
 * @interface ItemListVO
 */
export interface ItemListVO {
  /**
   * 单位产品消耗量
   * @type { number }
   * @memberof ItemListVO
   */
  ['amount']?: number
  /**
   * 编码
   * @type { string }
   * @memberof ItemListVO
   */
  ['code']?: string
  /**
   * 名称
   * @type { string }
   * @memberof ItemListVO
   */
  ['name']?: string
  /**
   * 单位
   * @type { string }
   * @memberof ItemListVO
   */
  ['unit']?: string
  /**
   *
   * @type { boolean }
   * @memberof ItemListVO
   */
  ['valid']?: boolean
  /**
   * 单位材料重量
   * @type { number }
   * @memberof ItemListVO
   */
  ['weight']?: number
  /**
   * 重量单位
   * @type { string }
   * @memberof ItemListVO
   */
  ['weightUnit']?: string
}

/**
 *
 * @summary LifeCycleModelPageListVO
 * @interface LifeCycleModelPageListVO
 */
export interface LifeCycleModelPageListVO {
  /**
   * 包含单元过程
   * @type { string }
   * @memberof LifeCycleModelPageListVO
   */
  ['cellName']?: string
  /**
   *
   * @type { string[] }
   * @memberof LifeCycleModelPageListVO
   */
  ['cellNameList']?: string[]
  /**
   * 主键id
   * @type { number }
   * @memberof LifeCycleModelPageListVO
   */
  ['id']?: number
  /**
   * 模型编码
   * @type { string }
   * @memberof LifeCycleModelPageListVO
   */
  ['modelCode']?: string
  /**
   * 模型名称
   * @type { string }
   * @memberof LifeCycleModelPageListVO
   */
  ['modelName']?: string
  /**
   * 适用生命周期阶段
   * @type { string }
   * @memberof LifeCycleModelPageListVO
   */
  ['modelStage']?: string
  /**
   * 类型
   * @type { string }
   * @memberof LifeCycleModelPageListVO
   */
  ['modelType']?: string
  /**
   * 类型
   * @type { string }
   * @memberof LifeCycleModelPageListVO
   */
  ['typeCode']?: string
  /**
   *
   * @type { string }
   * @memberof LifeCycleModelPageListVO
   */
  ['usedStage']?: string
}

/**
 *
 * @summary LifecycleConfigChartVO
 * @interface LifecycleConfigChartVO
 */
export interface LifecycleConfigChartVO {
  /**
   * 排放量
   * @type { number }
   * @memberof LifecycleConfigChartVO
   */
  ['carbonEmission']?: number
  /**
   * 占比
   * @type { string }
   * @memberof LifecycleConfigChartVO
   */
  ['per']?: string
  /**
   * 声明周期编码
   * @type { string }
   * @memberof LifecycleConfigChartVO
   */
  ['step']?: string
  /**
   * 声明周期名称
   * @type { string }
   * @memberof LifecycleConfigChartVO
   */
  ['stepName']?: string
}

/**
 *
 * @summary LifecycleConfigVO
 * @interface LifecycleConfigVO
 */
export interface LifecycleConfigVO {
  /**
   * 各阶段生命周期数据
   * @type { LifecycleConfigChartVO[] }
   * @memberof LifecycleConfigVO
   */
  ['list']?: LifecycleConfigChartVO[]
  /**
   * 总量
   * @type { number }
   * @memberof LifecycleConfigVO
   */
  ['total']?: number
}

/**
 *
 * @summary LifecycleModelListDTO
 * @interface LifecycleModelListDTO
 */
export interface LifecycleModelListDTO {
  /**
   * step
   * @type { string }
   * @memberof LifecycleModelListDTO
   */
  ['step']: string
}

/**
 *
 * @summary ModelInfoVO
 * @interface ModelInfoVO
 */
export interface ModelInfoVO {
  /**
   * 单元过程信息
   * @type { CellTempInfoVO[] }
   * @memberof ModelInfoVO
   */
  ['cellTempData']?: CellTempInfoVO[]
  /**
   * 主键id
   * @type { number }
   * @memberof ModelInfoVO
   */
  ['id']?: number
  /**
   * 模型编码
   * @type { string }
   * @memberof ModelInfoVO
   */
  ['modelCode']?: string
  /**
   * 模型数据
   * @type { string }
   * @memberof ModelInfoVO
   */
  ['modelData']?: string
  /**
   * 模型名称
   * @type { string }
   * @memberof ModelInfoVO
   */
  ['modelName']?: string
  /**
   * 模型类型
   * @type { string }
   * @memberof ModelInfoVO
   */
  ['modelType']?: string
  /**
   * 适用阶段
   * @type { string }
   * @memberof ModelInfoVO
   */
  ['usedStage']?: string
  /**
   * 适用阶段数组
   * @type { string[] }
   * @memberof ModelInfoVO
   */
  ['usedStageList']?: string[]
}

/**
 *
 * @summary ModelListVO
 * @interface ModelListVO
 */
export interface ModelListVO {
  /**
   * 模型编码
   * @type { string }
   * @memberof ModelListVO
   */
  ['code']?: string
  /**
   * 模型名称
   * @type { string }
   * @memberof ModelListVO
   */
  ['name']?: string
  /**
   *
   * @type { boolean }
   * @memberof ModelListVO
   */
  ['valid']?: boolean
}

/**
 *
 * @summary NeutralRecordDTO
 * @interface NeutralRecordDTO
 */
export interface NeutralRecordDTO {
  /**
   *
   * @type { string }
   * @memberof NeutralRecordDTO
   */
  ['neutralCode']?: string
}

/**
 *
 * @summary NeutralRecordStatusDTO
 * @interface NeutralRecordStatusDTO
 */
export interface NeutralRecordStatusDTO {
  /**
   *
   * @type { string }
   * @memberof NeutralRecordStatusDTO
   */
  ['neutralCode']?: string
  /**
   *
   * @type { number }
   * @memberof NeutralRecordStatusDTO
   */
  ['neutralStatus']?: number
}

/**
 *
 * @summary OutputData
 * @interface OutputData
 */
export interface OutputData {
  /**
   * 单位产品消耗量
   * @type { number }
   * @memberof OutputData
   */
  ['amount']?: number
  /**
   * 选项编码
   * @type { string }
   * @memberof OutputData
   */
  ['code']?: string
  /**
   * id
   * @type { number }
   * @memberof OutputData
   */
  ['id']?: number
  /**
   * 选项名称
   * @type { string }
   * @memberof OutputData
   */
  ['name']?: string
  /**
   * 标题
   * @type { string }
   * @memberof OutputData
   */
  ['title']?: string
  /**
   * 类别，1:中间品，2:产品；3:能源，4:固体废物
   * @type { string }
   * @memberof OutputData
   */
  ['type']?: string
  /**
   * 单位
   * @type { string }
   * @memberof OutputData
   */
  ['unit']?: string
  /**
   * 单位材料重量
   * @type { number }
   * @memberof OutputData
   */
  ['weight']?: number
  /**
   * 重量单位
   * @type { string }
   * @memberof OutputData
   */
  ['weightUnit']?: string
}

/**
 *
 * @summary PagedRdfaResultDefinedEmissionFactorReq
 * @interface PagedRdfaResultDefinedEmissionFactorReq
 */
export interface PagedRdfaResultDefinedEmissionFactorReq {
  /**
   *
   * @type { string }
   * @memberof PagedRdfaResultDefinedEmissionFactorReq
   */
  ['code']?: string
  /**
   *
   * @type { DefinedEmissionFactorReq[] }
   * @memberof PagedRdfaResultDefinedEmissionFactorReq
   */
  ['data']?: DefinedEmissionFactorReq[]
  /**
   *
   * @type { string }
   * @memberof PagedRdfaResultDefinedEmissionFactorReq
   */
  ['message']?: string
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultDefinedEmissionFactorReq
   */
  ['pageNum']?: number
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultDefinedEmissionFactorReq
   */
  ['pageSize']?: number
  /**
   *
   * @type { boolean }
   * @memberof PagedRdfaResultDefinedEmissionFactorReq
   */
  ['success']?: boolean
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultDefinedEmissionFactorReq
   */
  ['totalCount']?: number
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultDefinedEmissionFactorReq
   */
  ['totalPages']?: number
}

/**
 *
 * @summary PagedRdfaResultGetProductInfoListVO
 * @interface PagedRdfaResultGetProductInfoListVO
 */
export interface PagedRdfaResultGetProductInfoListVO {
  /**
   *
   * @type { string }
   * @memberof PagedRdfaResultGetProductInfoListVO
   */
  ['code']?: string
  /**
   *
   * @type { GetProductInfoListVO[] }
   * @memberof PagedRdfaResultGetProductInfoListVO
   */
  ['data']?: GetProductInfoListVO[]
  /**
   *
   * @type { string }
   * @memberof PagedRdfaResultGetProductInfoListVO
   */
  ['message']?: string
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultGetProductInfoListVO
   */
  ['pageNum']?: number
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultGetProductInfoListVO
   */
  ['pageSize']?: number
  /**
   *
   * @type { boolean }
   * @memberof PagedRdfaResultGetProductInfoListVO
   */
  ['success']?: boolean
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultGetProductInfoListVO
   */
  ['totalCount']?: number
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultGetProductInfoListVO
   */
  ['totalPages']?: number
}

/**
 *
 * @summary PagedRdfaResultIndustryCalculateCarbonRes
 * @interface PagedRdfaResultIndustryCalculateCarbonRes
 */
export interface PagedRdfaResultIndustryCalculateCarbonRes {
  /**
   *
   * @type { string }
   * @memberof PagedRdfaResultIndustryCalculateCarbonRes
   */
  ['code']?: string
  /**
   *
   * @type { IndustryCalculateCarbonRes[] }
   * @memberof PagedRdfaResultIndustryCalculateCarbonRes
   */
  ['data']?: IndustryCalculateCarbonRes[]
  /**
   *
   * @type { string }
   * @memberof PagedRdfaResultIndustryCalculateCarbonRes
   */
  ['message']?: string
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultIndustryCalculateCarbonRes
   */
  ['pageNum']?: number
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultIndustryCalculateCarbonRes
   */
  ['pageSize']?: number
  /**
   *
   * @type { boolean }
   * @memberof PagedRdfaResultIndustryCalculateCarbonRes
   */
  ['success']?: boolean
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultIndustryCalculateCarbonRes
   */
  ['totalCount']?: number
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultIndustryCalculateCarbonRes
   */
  ['totalPages']?: number
}

/**
 *
 * @summary PagedRdfaResultLifeCycleModelPageListVO
 * @interface PagedRdfaResultLifeCycleModelPageListVO
 */
export interface PagedRdfaResultLifeCycleModelPageListVO {
  /**
   *
   * @type { string }
   * @memberof PagedRdfaResultLifeCycleModelPageListVO
   */
  ['code']?: string
  /**
   *
   * @type { LifeCycleModelPageListVO[] }
   * @memberof PagedRdfaResultLifeCycleModelPageListVO
   */
  ['data']?: LifeCycleModelPageListVO[]
  /**
   *
   * @type { string }
   * @memberof PagedRdfaResultLifeCycleModelPageListVO
   */
  ['message']?: string
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultLifeCycleModelPageListVO
   */
  ['pageNum']?: number
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultLifeCycleModelPageListVO
   */
  ['pageSize']?: number
  /**
   *
   * @type { boolean }
   * @memberof PagedRdfaResultLifeCycleModelPageListVO
   */
  ['success']?: boolean
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultLifeCycleModelPageListVO
   */
  ['totalCount']?: number
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultLifeCycleModelPageListVO
   */
  ['totalPages']?: number
}

/**
 *
 * @summary PagedRdfaResultProductBatchListVO
 * @interface PagedRdfaResultProductBatchListVO
 */
export interface PagedRdfaResultProductBatchListVO {
  /**
   *
   * @type { string }
   * @memberof PagedRdfaResultProductBatchListVO
   */
  ['code']?: string
  /**
   *
   * @type { ProductBatchListVO[] }
   * @memberof PagedRdfaResultProductBatchListVO
   */
  ['data']?: ProductBatchListVO[]
  /**
   *
   * @type { string }
   * @memberof PagedRdfaResultProductBatchListVO
   */
  ['message']?: string
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultProductBatchListVO
   */
  ['pageNum']?: number
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultProductBatchListVO
   */
  ['pageSize']?: number
  /**
   *
   * @type { boolean }
   * @memberof PagedRdfaResultProductBatchListVO
   */
  ['success']?: boolean
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultProductBatchListVO
   */
  ['totalCount']?: number
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultProductBatchListVO
   */
  ['totalPages']?: number
}

/**
 *
 * @summary PagedRdfaResultProductBomListVO
 * @interface PagedRdfaResultProductBomListVO
 */
export interface PagedRdfaResultProductBomListVO {
  /**
   *
   * @type { string }
   * @memberof PagedRdfaResultProductBomListVO
   */
  ['code']?: string
  /**
   *
   * @type { ProductBomListVO[] }
   * @memberof PagedRdfaResultProductBomListVO
   */
  ['data']?: ProductBomListVO[]
  /**
   *
   * @type { string }
   * @memberof PagedRdfaResultProductBomListVO
   */
  ['message']?: string
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultProductBomListVO
   */
  ['pageNum']?: number
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultProductBomListVO
   */
  ['pageSize']?: number
  /**
   *
   * @type { boolean }
   * @memberof PagedRdfaResultProductBomListVO
   */
  ['success']?: boolean
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultProductBomListVO
   */
  ['totalCount']?: number
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultProductBomListVO
   */
  ['totalPages']?: number
}

/**
 *
 * @summary PagedRdfaResultReportVO
 * @interface PagedRdfaResultReportVO
 */
export interface PagedRdfaResultReportVO {
  /**
   *
   * @type { string }
   * @memberof PagedRdfaResultReportVO
   */
  ['code']?: string
  /**
   *
   * @type { ReportVO[] }
   * @memberof PagedRdfaResultReportVO
   */
  ['data']?: ReportVO[]
  /**
   *
   * @type { string }
   * @memberof PagedRdfaResultReportVO
   */
  ['message']?: string
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultReportVO
   */
  ['pageNum']?: number
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultReportVO
   */
  ['pageSize']?: number
  /**
   *
   * @type { boolean }
   * @memberof PagedRdfaResultReportVO
   */
  ['success']?: boolean
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultReportVO
   */
  ['totalCount']?: number
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultReportVO
   */
  ['totalPages']?: number
}

/**
 *
 * @summary PagedRdfaResultSaleStorageListVO
 * @interface PagedRdfaResultSaleStorageListVO
 */
export interface PagedRdfaResultSaleStorageListVO {
  /**
   *
   * @type { string }
   * @memberof PagedRdfaResultSaleStorageListVO
   */
  ['code']?: string
  /**
   *
   * @type { SaleStorageListVO[] }
   * @memberof PagedRdfaResultSaleStorageListVO
   */
  ['data']?: SaleStorageListVO[]
  /**
   *
   * @type { string }
   * @memberof PagedRdfaResultSaleStorageListVO
   */
  ['message']?: string
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultSaleStorageListVO
   */
  ['pageNum']?: number
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultSaleStorageListVO
   */
  ['pageSize']?: number
  /**
   *
   * @type { boolean }
   * @memberof PagedRdfaResultSaleStorageListVO
   */
  ['success']?: boolean
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultSaleStorageListVO
   */
  ['totalCount']?: number
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultSaleStorageListVO
   */
  ['totalPages']?: number
}

/**
 *
 * @summary PagedRdfaResultSaleTransportListVO
 * @interface PagedRdfaResultSaleTransportListVO
 */
export interface PagedRdfaResultSaleTransportListVO {
  /**
   *
   * @type { string }
   * @memberof PagedRdfaResultSaleTransportListVO
   */
  ['code']?: string
  /**
   *
   * @type { SaleTransportListVO[] }
   * @memberof PagedRdfaResultSaleTransportListVO
   */
  ['data']?: SaleTransportListVO[]
  /**
   *
   * @type { string }
   * @memberof PagedRdfaResultSaleTransportListVO
   */
  ['message']?: string
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultSaleTransportListVO
   */
  ['pageNum']?: number
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultSaleTransportListVO
   */
  ['pageSize']?: number
  /**
   *
   * @type { boolean }
   * @memberof PagedRdfaResultSaleTransportListVO
   */
  ['success']?: boolean
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultSaleTransportListVO
   */
  ['totalCount']?: number
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultSaleTransportListVO
   */
  ['totalPages']?: number
}

/**
 *
 * @summary PagedRdfaResultUseListVO
 * @interface PagedRdfaResultUseListVO
 */
export interface PagedRdfaResultUseListVO {
  /**
   *
   * @type { string }
   * @memberof PagedRdfaResultUseListVO
   */
  ['code']?: string
  /**
   *
   * @type { UseListVO[] }
   * @memberof PagedRdfaResultUseListVO
   */
  ['data']?: UseListVO[]
  /**
   *
   * @type { string }
   * @memberof PagedRdfaResultUseListVO
   */
  ['message']?: string
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultUseListVO
   */
  ['pageNum']?: number
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultUseListVO
   */
  ['pageSize']?: number
  /**
   *
   * @type { boolean }
   * @memberof PagedRdfaResultUseListVO
   */
  ['success']?: boolean
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultUseListVO
   */
  ['totalCount']?: number
  /**
   *
   * @type { number }
   * @memberof PagedRdfaResultUseListVO
   */
  ['totalPages']?: number
}

/**
 *
 * @summary StandardModel$4506f6b2
 * @interface StandardModel$4506f6b2
 */
export interface StandardModel$4506f6b2 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$4506f6b2
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$7b21d989[] }
   * @memberof StandardModel$4506f6b2
   */
  ['data']?: StandardModel$7b21d989[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$4506f6b2
   */
  ['message']?: string
  /**
   *
   * @type { number }
   * @memberof StandardModel$4506f6b2
   */
  ['pageNum']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$4506f6b2
   */
  ['pageSize']?: number
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$4506f6b2
   */
  ['success']?: boolean
  /**
   *
   * @type { number }
   * @memberof StandardModel$4506f6b2
   */
  ['totalCount']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$4506f6b2
   */
  ['totalPages']?: number
}

/**
 *
 * @summary StandardModel$6c9ef65a
 * @interface StandardModel$6c9ef65a
 */
export interface StandardModel$6c9ef65a {
  /**
   *
   * @type { string }
   * @memberof StandardModel$6c9ef65a
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$25809bb8[] }
   * @memberof StandardModel$6c9ef65a
   */
  ['data']?: StandardModel$25809bb8[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$6c9ef65a
   */
  ['message']?: string
  /**
   *
   * @type { number }
   * @memberof StandardModel$6c9ef65a
   */
  ['pageNum']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$6c9ef65a
   */
  ['pageSize']?: number
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$6c9ef65a
   */
  ['success']?: boolean
  /**
   *
   * @type { number }
   * @memberof StandardModel$6c9ef65a
   */
  ['totalCount']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$6c9ef65a
   */
  ['totalPages']?: number
}

/**
 *
 * @summary StandardModel$15c1a157
 * @interface StandardModel$15c1a157
 */
export interface StandardModel$15c1a157 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$15c1a157
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$beb987fa[] }
   * @memberof StandardModel$15c1a157
   */
  ['data']?: StandardModel$beb987fa[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$15c1a157
   */
  ['message']?: string
  /**
   *
   * @type { number }
   * @memberof StandardModel$15c1a157
   */
  ['pageNum']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$15c1a157
   */
  ['pageSize']?: number
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$15c1a157
   */
  ['success']?: boolean
  /**
   *
   * @type { number }
   * @memberof StandardModel$15c1a157
   */
  ['totalCount']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$15c1a157
   */
  ['totalPages']?: number
}

/**
 *
 * @summary StandardModel$708dafe3
 * @interface StandardModel$708dafe3
 */
export interface StandardModel$708dafe3 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$708dafe3
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$5f772676[] }
   * @memberof StandardModel$708dafe3
   */
  ['data']?: StandardModel$5f772676[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$708dafe3
   */
  ['message']?: string
  /**
   *
   * @type { number }
   * @memberof StandardModel$708dafe3
   */
  ['pageNum']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$708dafe3
   */
  ['pageSize']?: number
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$708dafe3
   */
  ['success']?: boolean
  /**
   *
   * @type { number }
   * @memberof StandardModel$708dafe3
   */
  ['totalCount']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$708dafe3
   */
  ['totalPages']?: number
}

/**
 *
 * @summary StandardModel$d3cc374d
 * @interface StandardModel$d3cc374d
 */
export interface StandardModel$d3cc374d {
  /**
   *
   * @type { string }
   * @memberof StandardModel$d3cc374d
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$2dbfd5ea[] }
   * @memberof StandardModel$d3cc374d
   */
  ['data']?: StandardModel$2dbfd5ea[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$d3cc374d
   */
  ['message']?: string
  /**
   *
   * @type { number }
   * @memberof StandardModel$d3cc374d
   */
  ['pageNum']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$d3cc374d
   */
  ['pageSize']?: number
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$d3cc374d
   */
  ['success']?: boolean
  /**
   *
   * @type { number }
   * @memberof StandardModel$d3cc374d
   */
  ['totalCount']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$d3cc374d
   */
  ['totalPages']?: number
}

/**
 *
 * @summary ProductBatchFileVO
 * @interface ProductBatchFileVO
 */
export interface ProductBatchFileVO {
  /**
   *
   * @type { string }
   * @memberof ProductBatchFileVO
   */
  ['batchCode']?: string
  /**
   *
   * @type { string }
   * @memberof ProductBatchFileVO
   */
  ['certificateType']?: string
  /**
   *
   * @type { string }
   * @memberof ProductBatchFileVO
   */
  ['code']?: string
  /**
   *
   * @type { string }
   * @memberof ProductBatchFileVO
   */
  ['fileName']?: string
  /**
   *
   * @type { number }
   * @memberof ProductBatchFileVO
   */
  ['id']?: number
  /**
   *
   * @type { string }
   * @memberof ProductBatchFileVO
   */
  ['name']?: string
  /**
   *
   * @type { number }
   * @memberof ProductBatchFileVO
   */
  ['type']?: number
  /**
   *
   * @type { string }
   * @memberof ProductBatchFileVO
   */
  ['url']?: string
}

/**
 *
 * @summary ProductBatchInfoVO
 * @interface ProductBatchInfoVO
 */
export interface ProductBatchInfoVO {
  /**
   * 碳足迹核算标准
   * @type { string }
   * @memberof ProductBatchInfoVO
   */
  ['accountingStandard']?: string
  /**
   * 数量
   * @type { number }
   * @memberof ProductBatchInfoVO
   */
  ['amount']?: number
  /**
   * 审核方法
   * @type { string }
   * @memberof ProductBatchInfoVO
   */
  ['auditMethod']?: string
  /**
   * 审核状态
   * @type { string }
   * @memberof ProductBatchInfoVO
   */
  ['auditStatus']?: string
  /**
   * 批次编码
   * @type { string }
   * @memberof ProductBatchInfoVO
   */
  ['batchCode']?: string
  /**
   * 批次名称
   * @type { string }
   * @memberof ProductBatchInfoVO
   */
  ['batchName']?: string
  /**
   * 数据采集方式
   * @type { string }
   * @memberof ProductBatchInfoVO
   */
  ['collectType']?: string
  /**
   * 租户id
   * @type { string }
   * @memberof ProductBatchInfoVO
   */
  ['companyId']?: string
  /**
   * 生命周期配置
   * @type { StandardModel$2a327e1b[] }
   * @memberof ProductBatchInfoVO
   */
  ['configList']?: StandardModel$2a327e1b[]
  /**
   * 产品创建人id
   * @type { string }
   * @memberof ProductBatchInfoVO
   */
  ['createBy']?: string
  /**
   * 温室气体排放源临界点
   * @type { string }
   * @memberof ProductBatchInfoVO
   */
  ['cutOff']?: string
  /**
   * 结束时间
   * @type { string }
   * @memberof ProductBatchInfoVO
   */
  ['endTime']?: string
  /**
   * 产品唯一标识
   * @type { string }
   * @memberof ProductBatchInfoVO
   */
  ['modeCode']?: string
  /**
   * 产品编码
   * @type { string }
   * @memberof ProductBatchInfoVO
   */
  ['productCode']?: string
  /**
   * 产品型号
   * @type { string }
   * @memberof ProductBatchInfoVO
   */
  ['productMode']?: string
  /**
   * 产品名称
   * @type { string }
   * @memberof ProductBatchInfoVO
   */
  ['productName']?: string
  /**
   * 产品类别
   * @type { string }
   * @memberof ProductBatchInfoVO
   */
  ['productType']?: string
  /**
   * 驳回原因
   * @type { string }
   * @memberof ProductBatchInfoVO
   */
  ['rejectReason']?: string
  /**
   * 开始时间
   * @type { string }
   * @memberof ProductBatchInfoVO
   */
  ['startTime']?: string
  /**
   * 单位编码
   * @type { string }
   * @memberof ProductBatchInfoVO
   */
  ['unit']?: string
  /**
   * 单位名称
   * @type { string }
   * @memberof ProductBatchInfoVO
   */
  ['unitName']?: string
  /**
   * 产品使用阶段标识 0：一般产品使用 1：能源燃烧产品
   * @type { string }
   * @memberof ProductBatchInfoVO
   */
  ['usedFlag']?: string
}

/**
 *
 * @summary ProductBatchListDTO
 * @interface ProductBatchListDTO
 */
export interface ProductBatchListDTO {
  /**
   * 状态
   * @type { string }
   * @memberof ProductBatchListDTO
   */
  ['auditStatus']?: string
  /**
   * 批次编码
   * @type { string }
   * @memberof ProductBatchListDTO
   */
  ['batchCode']?: string
  /**
   * 当前页码
   * @type { number }
   * @memberof ProductBatchListDTO
   */
  ['pageNum']: number
  /**
   * 每页大小
   * @type { number }
   * @memberof ProductBatchListDTO
   */
  ['pageSize']: number
  /**
   * 产品型号
   * @type { string }
   * @memberof ProductBatchListDTO
   */
  ['productMode']?: string
  /**
   * 产品名称
   * @type { string }
   * @memberof ProductBatchListDTO
   */
  ['productName']?: string
}

/**
 *
 * @summary ProductBatchListVO
 * @interface ProductBatchListVO
 */
export interface ProductBatchListVO {
  /**
   * 产品碳足迹标准id
   * @type { string }
   * @memberof ProductBatchListVO
   */
  ['accountingStandard']?: string
  /**
   * 单位数量
   * @type { number }
   * @memberof ProductBatchListVO
   */
  ['amount']?: number
  /**
   * 审核状态：（ 0 创建中  1 待采集 2 审核中 3 审核驳回 4 审核通过 ）
   * @type { string }
   * @memberof ProductBatchListVO
   */
  ['auditStatus']?: string
  /**
   * 批次编码
   * @type { string }
   * @memberof ProductBatchListVO
   */
  ['batchCode']?: string
  /**
   * 批次名称
   * @type { string }
   * @memberof ProductBatchListVO
   */
  ['batchName']?: string
  /**
   * 生产企业名称
   * @type { string }
   * @memberof ProductBatchListVO
   */
  ['companyName']?: string
  /**
   * 创建时间
   * @type { string }
   * @memberof ProductBatchListVO
   */
  ['createTime']?: string
  /**
   * 结束时间
   * @type { string }
   * @memberof ProductBatchListVO
   */
  ['endTime']?: string
  /**
   * 批次id
   * @type { string }
   * @memberof ProductBatchListVO
   */
  ['id']?: string
  /**
   * 产品唯一标识
   * @type { string }
   * @memberof ProductBatchListVO
   */
  ['modeCode']?: string
  /**
   * 产品编码
   * @type { string }
   * @memberof ProductBatchListVO
   */
  ['productCode']?: string
  /**
   * 产品型号
   * @type { string }
   * @memberof ProductBatchListVO
   */
  ['productMode']?: string
  /**
   * 产品名称
   * @type { string }
   * @memberof ProductBatchListVO
   */
  ['productName']?: string
  /**
   * 产品类别
   * @type { string }
   * @memberof ProductBatchListVO
   */
  ['productType']?: string
  /**
   * 产品碳足迹标准名称
   * @type { string }
   * @memberof ProductBatchListVO
   */
  ['standardName']?: string
  /**
   * 开始时间
   * @type { string }
   * @memberof ProductBatchListVO
   */
  ['startTime']?: string
  /**
   * 状态描述
   * @type { string }
   * @memberof ProductBatchListVO
   */
  ['statusName']?: string
  /**
   * 单位Code
   * @type { string }
   * @memberof ProductBatchListVO
   */
  ['unit']?: string
  /**
   * 单位名称
   * @type { string }
   * @memberof ProductBatchListVO
   */
  ['unitName']?: string
  /**
   * 产品使用阶段标识 0：一般产品使用 1：能源燃烧产品
   * @type { string }
   * @memberof ProductBatchListVO
   */
  ['usedFlag']?: string
}

/**
 *
 * @summary ProductBomListVO
 * @interface ProductBomListVO
 */
export interface ProductBomListVO {
  /**
   * 单位产品消耗量
   * @type { number }
   * @memberof ProductBomListVO
   */
  ['consumePerUnitProduct']?: number
  /**
   * 获取方式
   * @type { string }
   * @memberof ProductBomListVO
   */
  ['gainType']?: string
  /**
   * 主键id
   * @type { number }
   * @memberof ProductBomListVO
   */
  ['id']?: number
  /**
   * 层级
   * @type { number }
   * @memberof ProductBomListVO
   */
  ['level']?: number
  /**
   * 物料类型
   * @type { string }
   * @memberof ProductBomListVO
   */
  ['materialType']?: string
  /**
   * 产品唯一标识
   * @type { string }
   * @memberof ProductBomListVO
   */
  ['modeCode']?: string
  /**
   * 父项编码
   * @type { string }
   * @memberof ProductBomListVO
   */
  ['parentCode']?: string
  /**
   * 产品编码
   * @type { string }
   * @memberof ProductBomListVO
   */
  ['productCode']?: string
  /**
   * 单位产品消耗量+单位
   * @type { string }
   * @memberof ProductBomListVO
   */
  ['productStr']?: string
  /**
   * 物料编码
   * @type { string }
   * @memberof ProductBomListVO
   */
  ['rawMaterialCode']?: string
  /**
   * 规格型号
   * @type { string }
   * @memberof ProductBomListVO
   */
  ['rawMaterialMode']?: string
  /**
   * 物料名称
   * @type { string }
   * @memberof ProductBomListVO
   */
  ['rawMaterialName']?: string
  /**
   * 消耗量单位
   * @type { string }
   * @memberof ProductBomListVO
   */
  ['rawMaterialUnit']?: string
  /**
   * 单位物料重量
   * @type { number }
   * @memberof ProductBomListVO
   */
  ['unitMaterialWeight']?: number
  /**
   * 单位物料重量+单位
   * @type { string }
   * @memberof ProductBomListVO
   */
  ['weightStr']?: string
  /**
   * 重量单位
   * @type { string }
   * @memberof ProductBomListVO
   */
  ['weightUnit']?: string
}

/**
 *
 * @summary ProductInfoVO
 * @interface ProductInfoVO
 */
export interface ProductInfoVO {
  /**
   * 产品唯一标识
   * @type { string }
   * @memberof ProductInfoVO
   */
  ['modeCode']?: string
  /**
   * 图片地址
   * @type { string }
   * @memberof ProductInfoVO
   */
  ['picUrl']?: string
  /**
   * 产品编码
   * @type { string }
   * @memberof ProductInfoVO
   */
  ['productCode']?: string
  /**
   * 产品型号
   * @type { string }
   * @memberof ProductInfoVO
   */
  ['productMode']?: string
  /**
   * 产品名称
   * @type { string }
   * @memberof ProductInfoVO
   */
  ['productName']?: string
  /**
   * 产品类别编码
   * @type { string }
   * @memberof ProductInfoVO
   */
  ['productType']?: string
  /**
   * 类别名称
   * @type { string }
   * @memberof ProductInfoVO
   */
  ['typeName']?: string
}

/**
 *
 * @summary ProductList
 * @interface ProductList
 */
export interface ProductList {
  /**
   * 是否碳中和， 0：否 1：是
   * @type { string }
   * @memberof ProductList
   */
  ['isNeutral']?: string
  /**
   * 产品唯一标识
   * @type { string }
   * @memberof ProductList
   */
  ['modeCode']?: string
  /**
   * 累计中和量
   * @type { number }
   * @memberof ProductList
   */
  ['neutralNum']?: number
  /**
   * 产品编码
   * @type { string }
   * @memberof ProductList
   */
  ['productCode']?: string
  /**
   * 产品型号
   * @type { string }
   * @memberof ProductList
   */
  ['productMode']?: string
  /**
   * 产品名称
   * @type { string }
   * @memberof ProductList
   */
  ['productName']?: string
  /**
   * 碳足迹
   * @type { number }
   * @memberof ProductList
   */
  ['totalEmissions']?: number
  /**
   * 碳足迹单位编码
   * @type { string }
   * @memberof ProductList
   */
  ['unitCode']?: string
  /**
   * 碳足迹单位名称
   * @type { string }
   * @memberof ProductList
   */
  ['unitName']?: string
}

/**
 *
 * @summary ProductListVO
 * @interface ProductListVO
 */
export interface ProductListVO {
  /**
   * 产品列表
   * @type { ProductList[] }
   * @memberof ProductListVO
   */
  ['list']?: ProductList[]
  /**
   * 碳中和产品数
   * @type { number }
   * @memberof ProductListVO
   */
  ['neutralProductCount']?: number
  /**
   * 总累计中和量
   * @type { number }
   * @memberof ProductListVO
   */
  ['neutralTotal']?: number
  /**
   * 产品个数
   * @type { number }
   * @memberof ProductListVO
   */
  ['total']?: number
}

/**
 *
 * @summary QueryExamineResultReqDTO
 * @interface QueryExamineResultReqDTO
 */
export interface QueryExamineResultReqDTO {
  /**
   * 产品批次
   * @type { string }
   * @memberof QueryExamineResultReqDTO
   */
  ['batchCode']?: string
  /**
   * code集合，itemCode,产品证明文件itemCode不需要传产品物流运输：PRODUCT_STORSGE_02 产品仓储：PRODUCT_STORSGE_01材料运输：RAW_MATERIAL_02   材料生产：RAW_MATERIAL_01  产品使用阶段：BATCH_STAGE_3  产品制造阶段：BATCH_STAGE_1
   * @type { string }
   * @memberof QueryExamineResultReqDTO
   */
  ['code']?: string
}

/**
 *
 * @summary QueryModelDataDTO
 * @interface QueryModelDataDTO
 */
export interface QueryModelDataDTO {
  /**
   *
   * @type { string }
   * @memberof QueryModelDataDTO
   */
  ['modelCode']?: string
}

/**
 *
 * @summary QueryReportListDTO
 * @interface QueryReportListDTO
 */
export interface QueryReportListDTO {
  /**
   * 批次编号
   * @type { string }
   * @memberof QueryReportListDTO
   */
  ['batchCode']?: string
  /**
   * 公司id
   * @type { string }
   * @memberof QueryReportListDTO
   */
  ['companyId']?: string
  /**
   * 核证状态：（0:未认证 1:认证中 2:已认证）
   * @type { string }
   * @memberof QueryReportListDTO
   */
  ['inspectStatus']?: string
  /**
   * 页面编码
   * @type { number }
   * @memberof QueryReportListDTO
   */
  ['pageNum']: number
  /**
   * 页面条数
   * @type { number }
   * @memberof QueryReportListDTO
   */
  ['pageSize']: number
  /**
   * 产品型号
   * @type { string }
   * @memberof QueryReportListDTO
   */
  ['productMode']?: string
  /**
   * 产品名称
   * @type { string }
   * @memberof QueryReportListDTO
   */
  ['productName']?: string
  /**
   *
   * @type { string }
   * @memberof QueryReportListDTO
   */
  ['standardName']?: string
  /**
   * 单位碳排
   * @type { number }
   * @memberof QueryReportListDTO
   */
  ['unitCarbonFootprint']?: number
}

/**
 *
 * @summary QueryStorageListDTO
 * @interface QueryStorageListDTO
 */
export interface QueryStorageListDTO {
  /**
   * 批次编码
   * @type { string }
   * @memberof QueryStorageListDTO
   */
  ['batchCode']: string
  /**
   * 页面编码
   * @type { number }
   * @memberof QueryStorageListDTO
   */
  ['pageNum']: number
  /**
   * 页面条数
   * @type { number }
   * @memberof QueryStorageListDTO
   */
  ['pageSize']: number
}

/**
 *
 * @summary QueryTransportDTO
 * @interface QueryTransportDTO
 */
export interface QueryTransportDTO {
  /**
   * 批次编码
   * @type { string }
   * @memberof QueryTransportDTO
   */
  ['batchCode']: string
  /**
   * 页面编码
   * @type { number }
   * @memberof QueryTransportDTO
   */
  ['pageNum']: number
  /**
   * 页面条数
   * @type { number }
   * @memberof QueryTransportDTO
   */
  ['pageSize']: number
}

/**
 *
 * @summary QueryUseListDTO
 * @interface QueryUseListDTO
 */
export interface QueryUseListDTO {
  /**
   * 批次编码
   * @type { string }
   * @memberof QueryUseListDTO
   */
  ['batchCode']: string
  /**
   * 页面编码
   * @type { number }
   * @memberof QueryUseListDTO
   */
  ['pageNum']: number
  /**
   * 页面条数
   * @type { number }
   * @memberof QueryUseListDTO
   */
  ['pageSize']: number
}

/**
 *
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
 *
 * @summary RdfaResultArrayListWorkPlanTreeRes
 * @interface RdfaResultArrayListWorkPlanTreeRes
 */
export interface RdfaResultArrayListWorkPlanTreeRes {
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListWorkPlanTreeRes
   */
  ['code']?: string
  /**
   *
   * @type { WorkPlanTreeRes[][] }
   * @memberof RdfaResultArrayListWorkPlanTreeRes
   */
  ['data']?: WorkPlanTreeRes[][]
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListWorkPlanTreeRes
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultArrayListWorkPlanTreeRes
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultArrayListBatchListForChart
 * @interface RdfaResultArrayListBatchListForChart
 */
export interface RdfaResultArrayListBatchListForChart {
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListBatchListForChart
   */
  ['code']?: string
  /**
   *
   * @type { BatchListForChart[] }
   * @memberof RdfaResultArrayListBatchListForChart
   */
  ['data']?: BatchListForChart[]
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListBatchListForChart
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultArrayListBatchListForChart
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultArrayListDefinedEmissionFactorReq
 * @interface RdfaResultArrayListDefinedEmissionFactorReq
 */
export interface RdfaResultArrayListDefinedEmissionFactorReq {
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListDefinedEmissionFactorReq
   */
  ['code']?: string
  /**
   *
   * @type { DefinedEmissionFactorReq[] }
   * @memberof RdfaResultArrayListDefinedEmissionFactorReq
   */
  ['data']?: DefinedEmissionFactorReq[]
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListDefinedEmissionFactorReq
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultArrayListDefinedEmissionFactorReq
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultArrayListExamineListFileVO
 * @interface RdfaResultArrayListExamineListFileVO
 */
export interface RdfaResultArrayListExamineListFileVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListExamineListFileVO
   */
  ['code']?: string
  /**
   *
   * @type { ExamineListFileVO[] }
   * @memberof RdfaResultArrayListExamineListFileVO
   */
  ['data']?: ExamineListFileVO[]
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListExamineListFileVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultArrayListExamineListFileVO
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultArrayListExamineOrgResVO
 * @interface RdfaResultArrayListExamineOrgResVO
 */
export interface RdfaResultArrayListExamineOrgResVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListExamineOrgResVO
   */
  ['code']?: string
  /**
   *
   * @type { ExamineOrgResVO[] }
   * @memberof RdfaResultArrayListExamineOrgResVO
   */
  ['data']?: ExamineOrgResVO[]
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListExamineOrgResVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultArrayListExamineOrgResVO
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultArrayListGetQueryListVO
 * @interface RdfaResultArrayListGetQueryListVO
 */
export interface RdfaResultArrayListGetQueryListVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListGetQueryListVO
   */
  ['code']?: string
  /**
   *
   * @type { GetQueryListVO[] }
   * @memberof RdfaResultArrayListGetQueryListVO
   */
  ['data']?: GetQueryListVO[]
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListGetQueryListVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultArrayListGetQueryListVO
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultArrayListItemListVO
 * @interface RdfaResultArrayListItemListVO
 */
export interface RdfaResultArrayListItemListVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListItemListVO
   */
  ['code']?: string
  /**
   *
   * @type { ItemListVO[] }
   * @memberof RdfaResultArrayListItemListVO
   */
  ['data']?: ItemListVO[]
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListItemListVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultArrayListItemListVO
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultArrayListModelListVO
 * @interface RdfaResultArrayListModelListVO
 */
export interface RdfaResultArrayListModelListVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListModelListVO
   */
  ['code']?: string
  /**
   *
   * @type { ModelListVO[] }
   * @memberof RdfaResultArrayListModelListVO
   */
  ['data']?: ModelListVO[]
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListModelListVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultArrayListModelListVO
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultArrayListProductBatchFileVO
 * @interface RdfaResultArrayListProductBatchFileVO
 */
export interface RdfaResultArrayListProductBatchFileVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListProductBatchFileVO
   */
  ['code']?: string
  /**
   *
   * @type { ProductBatchFileVO[] }
   * @memberof RdfaResultArrayListProductBatchFileVO
   */
  ['data']?: ProductBatchFileVO[]
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListProductBatchFileVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultArrayListProductBatchFileVO
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultArrayListSaveEnergyConsumeDTO
 * @interface RdfaResultArrayListSaveEnergyConsumeDTO
 */
export interface RdfaResultArrayListSaveEnergyConsumeDTO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListSaveEnergyConsumeDTO
   */
  ['code']?: string
  /**
   *
   * @type { SaveEnergyConsumeDTO[] }
   * @memberof RdfaResultArrayListSaveEnergyConsumeDTO
   */
  ['data']?: SaveEnergyConsumeDTO[]
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListSaveEnergyConsumeDTO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultArrayListSaveEnergyConsumeDTO
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultArrayListSceneCalculateResultRes
 * @interface RdfaResultArrayListSceneCalculateResultRes
 */
export interface RdfaResultArrayListSceneCalculateResultRes {
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListSceneCalculateResultRes
   */
  ['code']?: string
  /**
   *
   * @type { SceneCalculateResultRes[] }
   * @memberof RdfaResultArrayListSceneCalculateResultRes
   */
  ['data']?: SceneCalculateResultRes[]
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListSceneCalculateResultRes
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultArrayListSceneCalculateResultRes
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultArrayListSyncOrderListVO
 * @interface RdfaResultArrayListSyncOrderListVO
 */
export interface RdfaResultArrayListSyncOrderListVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListSyncOrderListVO
   */
  ['code']?: string
  /**
   *
   * @type { SyncOrderListVO[] }
   * @memberof RdfaResultArrayListSyncOrderListVO
   */
  ['data']?: SyncOrderListVO[]
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListSyncOrderListVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultArrayListSyncOrderListVO
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultArrayListSysEmissionFactorVO
 * @interface RdfaResultArrayListSysEmissionFactorVO
 */
export interface RdfaResultArrayListSysEmissionFactorVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListSysEmissionFactorVO
   */
  ['code']?: string
  /**
   *
   * @type { SysEmissionFactorVO[] }
   * @memberof RdfaResultArrayListSysEmissionFactorVO
   */
  ['data']?: SysEmissionFactorVO[]
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListSysEmissionFactorVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultArrayListSysEmissionFactorVO
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultArrayListTenantRoleVO
 * @interface RdfaResultArrayListTenantRoleVO
 */
export interface RdfaResultArrayListTenantRoleVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListTenantRoleVO
   */
  ['code']?: string
  /**
   *
   * @type { TenantRoleVO[] }
   * @memberof RdfaResultArrayListTenantRoleVO
   */
  ['data']?: TenantRoleVO[]
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListTenantRoleVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultArrayListTenantRoleVO
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultArrayListToDoListVO
 * @interface RdfaResultArrayListToDoListVO
 */
export interface RdfaResultArrayListToDoListVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListToDoListVO
   */
  ['code']?: string
  /**
   *
   * @type { ToDoListVO[] }
   * @memberof RdfaResultArrayListToDoListVO
   */
  ['data']?: ToDoListVO[]
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListToDoListVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultArrayListToDoListVO
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultArrayListWaterShipCalculateCarbonRes
 * @interface RdfaResultArrayListWaterShipCalculateCarbonRes
 */
export interface RdfaResultArrayListWaterShipCalculateCarbonRes {
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListWaterShipCalculateCarbonRes
   */
  ['code']?: string
  /**
   *
   * @type { WaterShipCalculateCarbonRes[] }
   * @memberof RdfaResultArrayListWaterShipCalculateCarbonRes
   */
  ['data']?: WaterShipCalculateCarbonRes[]
  /**
   *
   * @type { string }
   * @memberof RdfaResultArrayListWaterShipCalculateCarbonRes
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultArrayListWaterShipCalculateCarbonRes
   */
  ['success']?: boolean
}

/**
 *
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
 *
 * @summary StandardModel$b348ebe6
 * @interface StandardModel$b348ebe6
 */
export interface StandardModel$b348ebe6 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$b348ebe6
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$87d7da8a[] }
   * @memberof StandardModel$b348ebe6
   */
  ['data']?: StandardModel$87d7da8a[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$b348ebe6
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$b348ebe6
   */
  ['success']?: boolean
}

/**
 *
 * @summary StandardModel$f2eef798
 * @interface StandardModel$f2eef798
 */
export interface StandardModel$f2eef798 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$f2eef798
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$4bfa8668[] }
   * @memberof StandardModel$f2eef798
   */
  ['data']?: StandardModel$4bfa8668[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$f2eef798
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$f2eef798
   */
  ['success']?: boolean
}

/**
 *
 * @summary StandardModel$1c2b61e7
 * @interface StandardModel$1c2b61e7
 */
export interface StandardModel$1c2b61e7 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$1c2b61e7
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$5f772676[] }
   * @memberof StandardModel$1c2b61e7
   */
  ['data']?: StandardModel$5f772676[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$1c2b61e7
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$1c2b61e7
   */
  ['success']?: boolean
}

/**
 *
 * @summary StandardModel$ca895f35
 * @interface StandardModel$ca895f35
 */
export interface StandardModel$ca895f35 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$ca895f35
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$ded31d5e[] }
   * @memberof StandardModel$ca895f35
   */
  ['data']?: StandardModel$ded31d5e[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$ca895f35
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$ca895f35
   */
  ['success']?: boolean
}

/**
 *
 * @summary StandardModel$f71df107
 * @interface StandardModel$f71df107
 */
export interface StandardModel$f71df107 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$f71df107
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$d3372629[] }
   * @memberof StandardModel$f71df107
   */
  ['data']?: StandardModel$d3372629[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$f71df107
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$f71df107
   */
  ['success']?: boolean
}

/**
 *
 * @summary StandardModel$edd2da34
 * @interface StandardModel$edd2da34
 */
export interface StandardModel$edd2da34 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$edd2da34
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$52c5f892[] }
   * @memberof StandardModel$edd2da34
   */
  ['data']?: StandardModel$52c5f892[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$edd2da34
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$edd2da34
   */
  ['success']?: boolean
}

/**
 *
 * @summary StandardModel$97757867
 * @interface StandardModel$97757867
 */
export interface StandardModel$97757867 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$97757867
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$1383433b[] }
   * @memberof StandardModel$97757867
   */
  ['data']?: StandardModel$1383433b[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$97757867
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$97757867
   */
  ['success']?: boolean
}

/**
 *
 * @summary StandardModel$2bd31f0a
 * @interface StandardModel$2bd31f0a
 */
export interface StandardModel$2bd31f0a {
  /**
   *
   * @type { string }
   * @memberof StandardModel$2bd31f0a
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$a64269f1[] }
   * @memberof StandardModel$2bd31f0a
   */
  ['data']?: StandardModel$a64269f1[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$2bd31f0a
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$2bd31f0a
   */
  ['success']?: boolean
}

/**
 *
 * @summary StandardModel$5bd37753
 * @interface StandardModel$5bd37753
 */
export interface StandardModel$5bd37753 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$5bd37753
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$26dd47d9[] }
   * @memberof StandardModel$5bd37753
   */
  ['data']?: StandardModel$26dd47d9[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$5bd37753
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$5bd37753
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultCellTempInfoVO
 * @interface RdfaResultCellTempInfoVO
 */
export interface RdfaResultCellTempInfoVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultCellTempInfoVO
   */
  ['code']?: string
  /**
   *
   * @type { CellTempInfoVO }
   * @memberof RdfaResultCellTempInfoVO
   */
  ['data']?: CellTempInfoVO
  /**
   *
   * @type { string }
   * @memberof RdfaResultCellTempInfoVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultCellTempInfoVO
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultDataStatusVO
 * @interface RdfaResultDataStatusVO
 */
export interface RdfaResultDataStatusVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultDataStatusVO
   */
  ['code']?: string
  /**
   *
   * @type { DataStatusVO }
   * @memberof RdfaResultDataStatusVO
   */
  ['data']?: DataStatusVO
  /**
   *
   * @type { string }
   * @memberof RdfaResultDataStatusVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultDataStatusVO
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultDefinedEmissionFactorReq
 * @interface RdfaResultDefinedEmissionFactorReq
 */
export interface RdfaResultDefinedEmissionFactorReq {
  /**
   *
   * @type { string }
   * @memberof RdfaResultDefinedEmissionFactorReq
   */
  ['code']?: string
  /**
   *
   * @type { DefinedEmissionFactorReq }
   * @memberof RdfaResultDefinedEmissionFactorReq
   */
  ['data']?: DefinedEmissionFactorReq
  /**
   *
   * @type { string }
   * @memberof RdfaResultDefinedEmissionFactorReq
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultDefinedEmissionFactorReq
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultExamineResultVO
 * @interface RdfaResultExamineResultVO
 */
export interface RdfaResultExamineResultVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultExamineResultVO
   */
  ['code']?: string
  /**
   *
   * @type { ExamineResultVO }
   * @memberof RdfaResultExamineResultVO
   */
  ['data']?: ExamineResultVO
  /**
   *
   * @type { string }
   * @memberof RdfaResultExamineResultVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultExamineResultVO
   */
  ['success']?: boolean
}

/**
 *
 * @summary StandardModel$9ca0c8f7
 * @interface StandardModel$9ca0c8f7
 */
export interface StandardModel$9ca0c8f7 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$9ca0c8f7
   */
  ['code']?: string
  /**
   *
   * @type { any }
   * @memberof StandardModel$9ca0c8f7
   */
  ['data']?: any
  /**
   *
   * @type { string }
   * @memberof StandardModel$9ca0c8f7
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$9ca0c8f7
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultHashMapStringListSysEmissionFactorVO
 * @interface RdfaResultHashMapStringListSysEmissionFactorVO
 */
export interface RdfaResultHashMapStringListSysEmissionFactorVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultHashMapStringListSysEmissionFactorVO
   */
  ['code']?: string
  /**
   *
   * @type { any }
   * @memberof RdfaResultHashMapStringListSysEmissionFactorVO
   */
  ['data']?: any
  /**
   *
   * @type { string }
   * @memberof RdfaResultHashMapStringListSysEmissionFactorVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultHashMapStringListSysEmissionFactorVO
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultImportResultVO
 * @interface RdfaResultImportResultVO
 */
export interface RdfaResultImportResultVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultImportResultVO
   */
  ['code']?: string
  /**
   *
   * @type { ImportResultVO }
   * @memberof RdfaResultImportResultVO
   */
  ['data']?: ImportResultVO
  /**
   *
   * @type { string }
   * @memberof RdfaResultImportResultVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultImportResultVO
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultLifecycleConfigVO
 * @interface RdfaResultLifecycleConfigVO
 */
export interface RdfaResultLifecycleConfigVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultLifecycleConfigVO
   */
  ['code']?: string
  /**
   *
   * @type { LifecycleConfigVO }
   * @memberof RdfaResultLifecycleConfigVO
   */
  ['data']?: LifecycleConfigVO
  /**
   *
   * @type { string }
   * @memberof RdfaResultLifecycleConfigVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultLifecycleConfigVO
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultModelInfoVO
 * @interface RdfaResultModelInfoVO
 */
export interface RdfaResultModelInfoVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultModelInfoVO
   */
  ['code']?: string
  /**
   *
   * @type { ModelInfoVO }
   * @memberof RdfaResultModelInfoVO
   */
  ['data']?: ModelInfoVO
  /**
   *
   * @type { string }
   * @memberof RdfaResultModelInfoVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultModelInfoVO
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultProductBatchInfoVO
 * @interface RdfaResultProductBatchInfoVO
 */
export interface RdfaResultProductBatchInfoVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultProductBatchInfoVO
   */
  ['code']?: string
  /**
   *
   * @type { ProductBatchInfoVO }
   * @memberof RdfaResultProductBatchInfoVO
   */
  ['data']?: ProductBatchInfoVO
  /**
   *
   * @type { string }
   * @memberof RdfaResultProductBatchInfoVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultProductBatchInfoVO
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultProductInfoVO
 * @interface RdfaResultProductInfoVO
 */
export interface RdfaResultProductInfoVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultProductInfoVO
   */
  ['code']?: string
  /**
   *
   * @type { ProductInfoVO }
   * @memberof RdfaResultProductInfoVO
   */
  ['data']?: ProductInfoVO
  /**
   *
   * @type { string }
   * @memberof RdfaResultProductInfoVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultProductInfoVO
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultProductListVO
 * @interface RdfaResultProductListVO
 */
export interface RdfaResultProductListVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultProductListVO
   */
  ['code']?: string
  /**
   *
   * @type { ProductListVO }
   * @memberof RdfaResultProductListVO
   */
  ['data']?: ProductListVO
  /**
   *
   * @type { string }
   * @memberof RdfaResultProductListVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultProductListVO
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultReportDetailPcVO
 * @interface RdfaResultReportDetailPcVO
 */
export interface RdfaResultReportDetailPcVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultReportDetailPcVO
   */
  ['code']?: string
  /**
   *
   * @type { ReportDetailPcVO }
   * @memberof RdfaResultReportDetailPcVO
   */
  ['data']?: ReportDetailPcVO
  /**
   *
   * @type { string }
   * @memberof RdfaResultReportDetailPcVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultReportDetailPcVO
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultReportVO
 * @interface RdfaResultReportVO
 */
export interface RdfaResultReportVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultReportVO
   */
  ['code']?: string
  /**
   *
   * @type { ReportVO }
   * @memberof RdfaResultReportVO
   */
  ['data']?: ReportVO
  /**
   *
   * @type { string }
   * @memberof RdfaResultReportVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultReportVO
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultSaleStorageListVO
 * @interface RdfaResultSaleStorageListVO
 */
export interface RdfaResultSaleStorageListVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultSaleStorageListVO
   */
  ['code']?: string
  /**
   *
   * @type { SaleStorageListVO }
   * @memberof RdfaResultSaleStorageListVO
   */
  ['data']?: SaleStorageListVO
  /**
   *
   * @type { string }
   * @memberof RdfaResultSaleStorageListVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultSaleStorageListVO
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultStageComputeDTO
 * @interface RdfaResultStageComputeDTO
 */
export interface RdfaResultStageComputeDTO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultStageComputeDTO
   */
  ['code']?: string
  /**
   *
   * @type { StageComputeDTO }
   * @memberof RdfaResultStageComputeDTO
   */
  ['data']?: StageComputeDTO
  /**
   *
   * @type { string }
   * @memberof RdfaResultStageComputeDTO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultStageComputeDTO
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultStageUseVO
 * @interface RdfaResultStageUseVO
 */
export interface RdfaResultStageUseVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultStageUseVO
   */
  ['code']?: string
  /**
   *
   * @type { StageUseVO }
   * @memberof RdfaResultStageUseVO
   */
  ['data']?: StageUseVO
  /**
   *
   * @type { string }
   * @memberof RdfaResultStageUseVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultStageUseVO
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultTransportCodeVO
 * @interface RdfaResultTransportCodeVO
 */
export interface RdfaResultTransportCodeVO {
  /**
   *
   * @type { string }
   * @memberof RdfaResultTransportCodeVO
   */
  ['code']?: string
  /**
   *
   * @type { TransportCodeVO }
   * @memberof RdfaResultTransportCodeVO
   */
  ['data']?: TransportCodeVO
  /**
   *
   * @type { string }
   * @memberof RdfaResultTransportCodeVO
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultTransportCodeVO
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultWaterShipCalculateCarbonRes
 * @interface RdfaResultWaterShipCalculateCarbonRes
 */
export interface RdfaResultWaterShipCalculateCarbonRes {
  /**
   *
   * @type { string }
   * @memberof RdfaResultWaterShipCalculateCarbonRes
   */
  ['code']?: string
  /**
   *
   * @type { WaterShipCalculateCarbonRes }
   * @memberof RdfaResultWaterShipCalculateCarbonRes
   */
  ['data']?: WaterShipCalculateCarbonRes
  /**
   *
   * @type { string }
   * @memberof RdfaResultWaterShipCalculateCarbonRes
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultWaterShipCalculateCarbonRes
   */
  ['success']?: boolean
}

/**
 *
 * @summary RdfaResultBigdecimal
 * @interface RdfaResultBigdecimal
 */
export interface RdfaResultBigdecimal {
  /**
   *
   * @type { string }
   * @memberof RdfaResultBigdecimal
   */
  ['code']?: string
  /**
   *
   * @type { number }
   * @memberof RdfaResultBigdecimal
   */
  ['data']?: number
  /**
   *
   * @type { string }
   * @memberof RdfaResultBigdecimal
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultBigdecimal
   */
  ['success']?: boolean
}

/**
 *
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
 *
 * @summary RdfaResultString
 * @interface RdfaResultString
 */
export interface RdfaResultString {
  /**
   *
   * @type { string }
   * @memberof RdfaResultString
   */
  ['code']?: string
  /**
   *
   * @type { string }
   * @memberof RdfaResultString
   */
  ['data']?: string
  /**
   *
   * @type { string }
   * @memberof RdfaResultString
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof RdfaResultString
   */
  ['success']?: boolean
}

/**
 *
 * @summary StandardModel$c1486bb5
 * @interface StandardModel$c1486bb5
 */
export interface StandardModel$c1486bb5 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$c1486bb5
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$7b21d989 }
   * @memberof StandardModel$c1486bb5
   */
  ['data']?: StandardModel$7b21d989
  /**
   *
   * @type { string }
   * @memberof StandardModel$c1486bb5
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$c1486bb5
   */
  ['success']?: boolean
}

/**
 *
 * @summary StandardModel$8d379724
 * @interface StandardModel$8d379724
 */
export interface StandardModel$8d379724 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$8d379724
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$b07cf829 }
   * @memberof StandardModel$8d379724
   */
  ['data']?: StandardModel$b07cf829
  /**
   *
   * @type { string }
   * @memberof StandardModel$8d379724
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$8d379724
   */
  ['success']?: boolean
}

/**
 *
 * @summary StandardModel$593c1de1
 * @interface StandardModel$593c1de1
 */
export interface StandardModel$593c1de1 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$593c1de1
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$beb987fa }
   * @memberof StandardModel$593c1de1
   */
  ['data']?: StandardModel$beb987fa
  /**
   *
   * @type { string }
   * @memberof StandardModel$593c1de1
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$593c1de1
   */
  ['success']?: boolean
}

/**
 *
 * @summary StandardModel$ebceec6d
 * @interface StandardModel$ebceec6d
 */
export interface StandardModel$ebceec6d {
  /**
   *
   * @type { string }
   * @memberof StandardModel$ebceec6d
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$fafc4542 }
   * @memberof StandardModel$ebceec6d
   */
  ['data']?: StandardModel$fafc4542
  /**
   *
   * @type { string }
   * @memberof StandardModel$ebceec6d
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$ebceec6d
   */
  ['success']?: boolean
}

/**
 *
 * @summary StandardModel$9d4d0de1
 * @interface StandardModel$9d4d0de1
 */
export interface StandardModel$9d4d0de1 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$9d4d0de1
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$bc12d19c }
   * @memberof StandardModel$9d4d0de1
   */
  ['data']?: StandardModel$bc12d19c
  /**
   *
   * @type { string }
   * @memberof StandardModel$9d4d0de1
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$9d4d0de1
   */
  ['success']?: boolean
}

/**
 *
 * @summary StandardModel$045f4ed6
 * @interface StandardModel$045f4ed6
 */
export interface StandardModel$045f4ed6 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$045f4ed6
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$d2bc4854 }
   * @memberof StandardModel$045f4ed6
   */
  ['data']?: StandardModel$d2bc4854
  /**
   *
   * @type { string }
   * @memberof StandardModel$045f4ed6
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$045f4ed6
   */
  ['success']?: boolean
}

/**
 *
 * @summary StandardModel$5bf14096
 * @interface StandardModel$5bf14096
 */
export interface StandardModel$5bf14096 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$5bf14096
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$3fb3d3d0 }
   * @memberof StandardModel$5bf14096
   */
  ['data']?: StandardModel$3fb3d3d0
  /**
   *
   * @type { string }
   * @memberof StandardModel$5bf14096
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$5bf14096
   */
  ['success']?: boolean
}

/**
 *
 * @summary StandardModel$a0afb73e
 * @interface StandardModel$a0afb73e
 */
export interface StandardModel$a0afb73e {
  /**
   *
   * @type { string }
   * @memberof StandardModel$a0afb73e
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$d3372629 }
   * @memberof StandardModel$a0afb73e
   */
  ['data']?: StandardModel$d3372629
  /**
   *
   * @type { string }
   * @memberof StandardModel$a0afb73e
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$a0afb73e
   */
  ['success']?: boolean
}

/**
 *
 * @summary StandardModel$5bb81f71
 * @interface StandardModel$5bb81f71
 */
export interface StandardModel$5bb81f71 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$5bb81f71
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$58699bdd }
   * @memberof StandardModel$5bb81f71
   */
  ['data']?: StandardModel$58699bdd
  /**
   *
   * @type { string }
   * @memberof StandardModel$5bb81f71
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$5bb81f71
   */
  ['success']?: boolean
}

/**
 *
 * @summary StandardModel$06c13dc3
 * @interface StandardModel$06c13dc3
 */
export interface StandardModel$06c13dc3 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$06c13dc3
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$78f6de3a }
   * @memberof StandardModel$06c13dc3
   */
  ['data']?: StandardModel$78f6de3a
  /**
   *
   * @type { string }
   * @memberof StandardModel$06c13dc3
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$06c13dc3
   */
  ['success']?: boolean
}

/**
 *
 * @summary StandardModel$e7110dae
 * @interface StandardModel$e7110dae
 */
export interface StandardModel$e7110dae {
  /**
   *
   * @type { string }
   * @memberof StandardModel$e7110dae
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$cc1d820e }
   * @memberof StandardModel$e7110dae
   */
  ['data']?: StandardModel$cc1d820e
  /**
   *
   * @type { string }
   * @memberof StandardModel$e7110dae
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$e7110dae
   */
  ['success']?: boolean
}

/**
 *
 * @summary StandardModel$25861b3b
 * @interface StandardModel$25861b3b
 */
export interface StandardModel$25861b3b {
  /**
   *
   * @type { string }
   * @memberof StandardModel$25861b3b
   */
  ['code']?: string
  /**
   *
   * @type { StandardModel$439c1950 }
   * @memberof StandardModel$25861b3b
   */
  ['data']?: StandardModel$439c1950
  /**
   *
   * @type { string }
   * @memberof StandardModel$25861b3b
   */
  ['message']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$25861b3b
   */
  ['success']?: boolean
}

/**
 *
 * @summary ReportDetailPcVO
 * @interface ReportDetailPcVO
 */
export interface ReportDetailPcVO {
  /**
   * 碳足迹标准
   * @type { string }
   * @memberof ReportDetailPcVO
   */
  ['accountingStandard']?: string
  /**
   * 批次名称
   * @type { string }
   * @memberof ReportDetailPcVO
   */
  ['batchName']?: string
  /**
   * 企业名称
   * @type { string }
   * @memberof ReportDetailPcVO
   */
  ['companyName']?: string
  /**
   * 结束时间
   * @type { string }
   * @memberof ReportDetailPcVO
   */
  ['endTime']?: string
  /**
   *
   * @type { LifecycleConfigVO }
   * @memberof ReportDetailPcVO
   */
  ['lifecycleChart']?: LifecycleConfigVO
  /**
   * 图片地址
   * @type { string }
   * @memberof ReportDetailPcVO
   */
  ['picUrl']?: string
  /**
   * 产品制造阶段碳排数据
   * @type { number }
   * @memberof ReportDetailPcVO
   */
  ['produceAmount']?: number
  /**
   * 产品制造阶段列表
   * @type { StandardModel$2157140f[] }
   * @memberof ReportDetailPcVO
   */
  ['produceList']?: StandardModel$2157140f[]
  /**
   * 型号
   * @type { string }
   * @memberof ReportDetailPcVO
   */
  ['productMode']?: string
  /**
   * 产品名称
   * @type { string }
   * @memberof ReportDetailPcVO
   */
  ['productName']?: string
  /**
   * 产品类别,PRODUCT_TYPE_01 能源燃烧 不是PRODUCT_TYPE_01都是一般产品
   * @type { string }
   * @memberof ReportDetailPcVO
   */
  ['productType']?: string
  /**
   * 批次单位
   * @type { string }
   * @memberof ReportDetailPcVO
   */
  ['productUnit']?: string
  /**
   * 原材料获取阶段碳排量
   * @type { number }
   * @memberof ReportDetailPcVO
   */
  ['rawMaterialAmount']?: number
  /**
   * 原材料生产列表
   * @type { StandardModel$b6ee19bb[] }
   * @memberof ReportDetailPcVO
   */
  ['rawMaterialInfoList']?: StandardModel$b6ee19bb[]
  /**
   * 原材料运输列表
   * @type { StandardModel$c5de351f[] }
   * @memberof ReportDetailPcVO
   */
  ['rawMaterialTransportList']?: StandardModel$c5de351f[]
  /**
   * 产品分销阶段
   * @type { number }
   * @memberof ReportDetailPcVO
   */
  ['saleAmount']?: number
  /**
   * 产品分销仓储列表
   * @type { StandardModel$14d9bcb6[] }
   * @memberof ReportDetailPcVO
   */
  ['saleStorageList']?: StandardModel$14d9bcb6[]
  /**
   * 产品分销运输列表
   * @type { StandardModel$4246ce91[] }
   * @memberof ReportDetailPcVO
   */
  ['saleTransportList']?: StandardModel$4246ce91[]
  /**
   * 桑吉图
   * @type { StandardModel$9eb4fc9c[] }
   * @memberof ReportDetailPcVO
   */
  ['sankeyList']?: StandardModel$9eb4fc9c[]
  /**
   * 起始时间
   * @type { string }
   * @memberof ReportDetailPcVO
   */
  ['startTime']?: string
  /**
   * 每功能单位碳足迹数值
   * @type { number }
   * @memberof ReportDetailPcVO
   */
  ['unitCarbonFootprint']?: number
  /**
   * 产品使用阶段碳排量
   * @type { number }
   * @memberof ReportDetailPcVO
   */
  ['useAmount']?: number
  /**
   * 产品使用列表
   * @type { StandardModel$6fe99fc2[] }
   * @memberof ReportDetailPcVO
   */
  ['useList']?: StandardModel$6fe99fc2[]
}

/**
 *
 * @summary ReportSummary
 * @interface ReportSummary
 */
export interface ReportSummary {
  /**
   * 批次
   * @type { string }
   * @memberof ReportSummary
   */
  ['batchCode']?: string
  /**
   * 碳排量
   * @type { number }
   * @memberof ReportSummary
   */
  ['carbonEmission']?: number
  /**
   *
   * @type { string }
   * @memberof ReportSummary
   */
  ['createBy']?: string
  /**
   *
   * @type { string }
   * @memberof ReportSummary
   */
  ['createTime']?: string
  /**
   * 数据层级
   * @type { number }
   * @memberof ReportSummary
   */
  ['dataLevel']?: number
  /**
   *
   * @type { boolean }
   * @memberof ReportSummary
   */
  ['deleted']?: boolean
  /**
   *
   * @type { number }
   * @memberof ReportSummary
   */
  ['id']?: number
  /**
   * 编码
   * @type { string }
   * @memberof ReportSummary
   */
  ['selfCode']?: string
  /**
   * 子编码
   * @type { string }
   * @memberof ReportSummary
   */
  ['sonCode']?: string
  /**
   * 数据阶段 0:原材料 1:产品制造 2:分销 3:产品使用
   * @type { number }
   * @memberof ReportSummary
   */
  ['step']?: number
  /**
   * 阶段名称
   * @type { string }
   * @memberof ReportSummary
   */
  ['stepName']?: string
  /**
   * 细分阶段 0:原材料生产 1:原材料运输 2:产品制造 3:销售仓储 4:销售物流 5:使用阶段
   * @type { number }
   * @memberof ReportSummary
   */
  ['subdivideStep']?: number
  /**
   *
   * @type { string }
   * @memberof ReportSummary
   */
  ['updateBy']?: string
  /**
   *
   * @type { string }
   * @memberof ReportSummary
   */
  ['updateTime']?: string
}

/**
 *
 * @summary ReportVO
 * @interface ReportVO
 */
export interface ReportVO {
  /**
   * 碳足迹标准
   * @type { string }
   * @memberof ReportVO
   */
  ['accountingStandard']?: string
  /**
   *
   * @type { string }
   * @memberof ReportVO
   */
  ['auditMethod']?: string
  /**
   * 碳足迹认证状态
   * @type { string }
   * @memberof ReportVO
   */
  ['auditStatus']?: string
  /**
   * 批次编号
   * @type { string }
   * @memberof ReportVO
   */
  ['batchCode']?: string
  /**
   * 批次名称
   * @type { string }
   * @memberof ReportVO
   */
  ['batchName']?: string
  /**
   * 批次单位
   * @type { string }
   * @memberof ReportVO
   */
  ['batchUnit']?: string
  /**
   * 批次单位code
   * @type { string }
   * @memberof ReportVO
   */
  ['batchUnitCode']?: string
  /**
   * 公司编号
   * @type { string }
   * @memberof ReportVO
   */
  ['companyId']?: string
  /**
   * 企业名称
   * @type { string }
   * @memberof ReportVO
   */
  ['companyName']?: string
  /**
   * 结束时间
   * @type { string }
   * @memberof ReportVO
   */
  ['endTime']?: string
  /**
   * 核证状态
   * @type { string }
   * @memberof ReportVO
   */
  ['identificationStatus']?: string
  /**
   * 核证状态code
   * @type { string }
   * @memberof ReportVO
   */
  ['inspectStatus']?: string
  /**
   * 产品唯一标识
   * @type { string }
   * @memberof ReportVO
   */
  ['modeCode']?: string
  /**
   * 产品编码
   * @type { string }
   * @memberof ReportVO
   */
  ['productCode']?: string
  /**
   * 型号
   * @type { string }
   * @memberof ReportVO
   */
  ['productMode']?: string
  /**
   * 产品名称
   * @type { string }
   * @memberof ReportVO
   */
  ['productName']?: string
  /**
   * 标准名称
   * @type { string }
   * @memberof ReportVO
   */
  ['standardName']?: string
  /**
   * 起始时间
   * @type { string }
   * @memberof ReportVO
   */
  ['startTime']?: string
  /**
   * 每功能单位碳足迹数值
   * @type { number }
   * @memberof ReportVO
   */
  ['unitCarbonFootprint']?: number
}

/**
 *
 * @summary RestartExamineReqDTO
 * @interface RestartExamineReqDTO
 */
export interface RestartExamineReqDTO {
  /**
   * 产品批次
   * @type { string }
   * @memberof RestartExamineReqDTO
   */
  ['batchCode']?: string
  /**
   * code集合，itemCode,产品证明文件itemCode不需要传产品物流运输：PRODUCT_STORSGE_02 产品仓储：PRODUCT_STORSGE_01材料运输：RAW_MATERIAL_02   材料生产：RAW_MATERIAL_01  产品使用阶段：BATCH_STAGE_3  产品制造阶段：BATCH_STAGE_1
   * @type { string[] }
   * @memberof RestartExamineReqDTO
   */
  ['codeList']?: string[]
}

/**
 *
 * @summary SaleStorageListVO
 * @interface SaleStorageListVO
 */
export interface SaleStorageListVO {
  /**
   * 年度碳排量
   * @type { number }
   * @memberof SaleStorageListVO
   */
  ['carbonEmissionsAnnual']?: number
  /**
   * 占比
   * @type { number }
   * @memberof SaleStorageListVO
   */
  ['carbonMix']?: number
  /**
   * 核查报告名称
   * @type { string }
   * @memberof SaleStorageListVO
   */
  ['checkReportName']?: string
  /**
   * 核查报告
   * @type { string }
   * @memberof SaleStorageListVO
   */
  ['checkReportUrl']?: string
  /**
   * 结束时间
   * @type { string }
   * @memberof SaleStorageListVO
   */
  ['endTime']?: string
  /**
   * 能源消耗数据
   * @type { EnergyConsumeVO[] }
   * @memberof SaleStorageListVO
   */
  ['energyConsumeList']?: EnergyConsumeVO[]
  /**
   * 碳排范围一
   * @type { number }
   * @memberof SaleStorageListVO
   */
  ['firstScope']?: number
  /**
   * id
   * @type { number }
   * @memberof SaleStorageListVO
   */
  ['id']?: number
  /**
   * 占比
   * @type { number }
   * @memberof SaleStorageListVO
   */
  ['mix']?: number
  /**
   * 物理分配类型 physics_01:重量 physics_02:体积 physics_03:数量 physics_04:尺寸
   * @type { string }
   * @memberof SaleStorageListVO
   */
  ['physicsType']?: string
  /**
   * 量化依据 0:排查报告 1:量化项目计算
   * @type { number }
   * @memberof SaleStorageListVO
   */
  ['quantifyBasis']?: number
  /**
   * 物理分配原因
   * @type { string }
   * @memberof SaleStorageListVO
   */
  ['reason']?: string
  /**
   * 碳排范围二
   * @type { number }
   * @memberof SaleStorageListVO
   */
  ['secondScope']?: number
  /**
   * 分摊方式 0:物理分配 1:经济分配 2:不分配
   * @type { number }
   * @memberof SaleStorageListVO
   */
  ['shareType']?: number
  /**
   * 开始时间
   * @type { string }
   * @memberof SaleStorageListVO
   */
  ['startTime']?: string
  /**
   * 仓储名称
   * @type { string }
   * @memberof SaleStorageListVO
   */
  ['storageName']?: string
  /**
   * 碳排范围三
   * @type { number }
   * @memberof SaleStorageListVO
   */
  ['thirdScope']?: number
  /**
   * 年度中转量
   * @type { number }
   * @memberof SaleStorageListVO
   */
  ['turnoverAnnual']?: number
  /**
   * 单位产品碳排量
   * @type { number }
   * @memberof SaleStorageListVO
   */
  ['unitCarbonEmission']?: number
  /**
   * 产值比例
   * @type { number }
   * @memberof SaleStorageListVO
   */
  ['valueMix']?: number
  /**
   * 重量占比
   * @type { number }
   * @memberof SaleStorageListVO
   */
  ['weightMix']?: number
}

/**
 *
 * @summary SaleTransportListVO
 * @interface SaleTransportListVO
 */
export interface SaleTransportListVO {
  /**
   *
   * @type { string }
   * @memberof SaleTransportListVO
   */
  ['allFuelType']?: string
  /**
   *
   * @type { string }
   * @memberof SaleTransportListVO
   */
  ['allMileage']?: string
  /**
   *
   * @type { string }
   * @memberof SaleTransportListVO
   */
  ['allMileageUnit']?: string
  /**
   *
   * @type { string }
   * @memberof SaleTransportListVO
   */
  ['allTransportType']?: string
  /**
   * 产品运输数量
   * @type { number }
   * @memberof SaleTransportListVO
   */
  ['amount']?: number
  /**
   * 批次编号
   * @type { string }
   * @memberof SaleTransportListVO
   */
  ['batchCode']?: string
  /**
   * 碳排量
   * @type { number }
   * @memberof SaleTransportListVO
   */
  ['carbonEmissions']?: number
  /**
   * 单位碳排量
   * @type { number }
   * @memberof SaleTransportListVO
   */
  ['carbonEmissionsAnnual']?: number
  /**
   * 占比
   * @type { number }
   * @memberof SaleTransportListVO
   */
  ['carbonMix']?: number
  /**
   * 燃料类型
   * @type { string }
   * @memberof SaleTransportListVO
   */
  ['fuelType']?: string
  /**
   * id
   * @type { number }
   * @memberof SaleTransportListVO
   */
  ['id']?: number
  /**
   * 占比
   * @type { number }
   * @memberof SaleTransportListVO
   */
  ['mix']?: number
  /**
   * 单位
   * @type { string }
   * @memberof SaleTransportListVO
   */
  ['productUnit']?: string
  /**
   * 运输里程
   * @type { number }
   * @memberof SaleTransportListVO
   */
  ['transportMileage']?: number
  /**
   * 运输方式
   * @type { TransportVO[] }
   * @memberof SaleTransportListVO
   */
  ['transportTypeList']?: TransportVO[]
}

/**
 *
 * @summary SaveEnergyConsumeDTO
 * @interface SaveEnergyConsumeDTO
 */
export interface SaveEnergyConsumeDTO {
  /**
   * 产品批次
   * @type { string }
   * @memberof SaveEnergyConsumeDTO
   */
  ['batchCode']?: string
  /**
   * 碳排占比
   * @type { number }
   * @memberof SaveEnergyConsumeDTO
   */
  ['carbonMix']?: number
  /**
   * 消耗量
   * @type { number }
   * @memberof SaveEnergyConsumeDTO
   */
  ['consumeAmount']?: number
  /**
   * 能源消耗范围
   * @type { string }
   * @memberof SaveEnergyConsumeDTO
   */
  ['energyRange']?: string
  /**
   * 能源类型
   * @type { string }
   * @memberof SaveEnergyConsumeDTO
   */
  ['energyType']?: string
  /**
   * 能源类型code
   * @type { string }
   * @memberof SaveEnergyConsumeDTO
   */
  ['energyTypeCode']?: string
  /**
   * 能源类型名称
   * @type { string }
   * @memberof SaveEnergyConsumeDTO
   */
  ['energyTypeName']?: string
  /**
   * 单位
   * @type { string }
   * @memberof SaveEnergyConsumeDTO
   */
  ['unit']?: string
}

/**
 *
 * @summary SaveModelInfoDTO
 * @interface SaveModelInfoDTO
 */
export interface SaveModelInfoDTO {
  /**
   * 模型对应单元过程配置项集合
   * @type { CellDTO[] }
   * @memberof SaveModelInfoDTO
   */
  ['cellDTOList']: CellDTO[]
  /**
   * 模型编码
   * @type { string }
   * @memberof SaveModelInfoDTO
   */
  ['modelCode']?: string
  /**
   * 模型图
   * @type { string }
   * @memberof SaveModelInfoDTO
   */
  ['modelData']: string
  /**
   * 模型名称
   * @type { string }
   * @memberof SaveModelInfoDTO
   */
  ['modelName']: string
  /**
   * 类型
   * @type { string }
   * @memberof SaveModelInfoDTO
   */
  ['modelType']: string
  /**
   * 使用阶段
   * @type { string }
   * @memberof SaveModelInfoDTO
   */
  ['usedStage']?: string
  /**
   * 使用阶段数组
   * @type { string[] }
   * @memberof SaveModelInfoDTO
   */
  ['usedStages']: string[]
}

/**
 *
 * @summary SceneCalculateResultRes
 * @interface SceneCalculateResultRes
 */
export interface SceneCalculateResultRes {
  /**
   *
   * @type { string }
   * @memberof SceneCalculateResultRes
   */
  ['bizCode']?: string
  /**
   *
   * @type { number }
   * @memberof SceneCalculateResultRes
   */
  ['carbonEmission']?: number
  /**
   *
   * @type { string }
   * @memberof SceneCalculateResultRes
   */
  ['sceneCode']?: string
  /**
   *
   * @type { TimeSeriesResultRes[] }
   * @memberof SceneCalculateResultRes
   */
  ['timeSeriesResultList']?: TimeSeriesResultRes[]
  /**
   *
   * @type { string }
   * @memberof SceneCalculateResultRes
   */
  ['unit']?: string
}

/**
 *
 * @summary Serializable
 * @interface Serializable
 */
export interface Serializable {}

/**
 *
 * @summary StageComputeDTO
 * @interface StageComputeDTO
 */
export interface StageComputeDTO {
  /**
   *
   * @type { number }
   * @memberof StageComputeDTO
   */
  ['totalCarbonEmissions']?: number
  /**
   *
   * @type { number }
   * @memberof StageComputeDTO
   */
  ['unitCarbonEmissions']?: number
}

/**
 *
 * @summary StageUseVO
 * @interface StageUseVO
 */
export interface StageUseVO {
  /**
   * 批次编码
   * @type { string }
   * @memberof StageUseVO
   */
  ['batchCode']?: string
  /**
   * 单位热值含碳量
   * @type { string }
   * @memberof StageUseVO
   */
  ['carbonContent']?: string
  /**
   * 碳排放量
   * @type { number }
   * @memberof StageUseVO
   */
  ['carbonEmission']?: number
  /**
   * 碳氧化率
   * @type { number }
   * @memberof StageUseVO
   */
  ['carbonOxidationRate']?: number
  /**
   * 能源消耗集合
   * @type { EnergyConsumeVO[] }
   * @memberof StageUseVO
   */
  ['consumeList']?: EnergyConsumeVO[]
  /**
   *
   * @type { number }
   * @memberof StageUseVO
   */
  ['id']?: number
  /**
   * 产品使用寿命单位
   * @type { string }
   * @memberof StageUseVO
   */
  ['lifeUnit']?: string
  /**
   * 低位热值
   * @type { string }
   * @memberof StageUseVO
   */
  ['lowCalorificValue']?: string
  /**
   * 使用寿命
   * @type { number }
   * @memberof StageUseVO
   */
  ['serviceLife']?: number
  /**
   * 阶段编码
   * @type { string }
   * @memberof StageUseVO
   */
  ['stageCode']?: string
  /**
   * 单位
   * @type { string }
   * @memberof StageUseVO
   */
  ['unit']?: string
  /**
   * 单位时间能源消耗
   * @type { number }
   * @memberof StageUseVO
   */
  ['unitEnergyConsume']?: number
  /**
   * 使用阶段名称
   * @type { string }
   * @memberof StageUseVO
   */
  ['useName']?: string
}

/**
 *
 * @summary StartExamineReqDTO
 * @interface StartExamineReqDTO
 */
export interface StartExamineReqDTO {
  /**
   * 产品批次
   * @type { string }
   * @memberof StartExamineReqDTO
   */
  ['batchCode']?: string
  /**
   * 核查结构编码
   * @type { string }
   * @memberof StartExamineReqDTO
   */
  ['institutionCode']?: string
  /**
   * 核查结构名称
   * @type { string }
   * @memberof StartExamineReqDTO
   */
  ['institutionName']?: string
  /**
   * 租户id
   * @type { string }
   * @memberof StartExamineReqDTO
   */
  ['institutionTenantId']?: string
}

/**
 *
 * @summary SyncOrderDTO
 * @interface SyncOrderDTO
 */
export interface SyncOrderDTO {
  /**
   * 批次编码
   * @type { string }
   * @memberof SyncOrderDTO
   */
  ['batchCode']: string
  /**
   * 批次名称
   * @type { string }
   * @memberof SyncOrderDTO
   */
  ['batchName']: string
  /**
   * 买方名称
   * @type { string }
   * @memberof SyncOrderDTO
   */
  ['demanderName']: string
  /**
   * 订单时间
   * @type { string }
   * @memberof SyncOrderDTO
   */
  ['orderDate']: string
  /**
   * 订单编号
   * @type { string }
   * @memberof SyncOrderDTO
   */
  ['orderNum']: string
  /**
   * 产品数量
   * @type { number }
   * @memberof SyncOrderDTO
   */
  ['productCount']: number
  /**
   * 产品单位
   * @type { string }
   * @memberof SyncOrderDTO
   */
  ['productUnit']: string
  /**
   * 卖方名称
   * @type { string }
   * @memberof SyncOrderDTO
   */
  ['supplierName']: string
}

/**
 *
 * @summary SyncOrderListDTO
 * @interface SyncOrderListDTO
 */
export interface SyncOrderListDTO {
  /**
   * 订单实体
   * @type { SyncOrderDTO[] }
   * @memberof SyncOrderListDTO
   */
  ['list']: SyncOrderDTO[]
  /**
   * 租户id
   * @type { string }
   * @memberof SyncOrderListDTO
   */
  ['tenantId']: string
}

/**
 *
 * @summary SyncOrderListVO
 * @interface SyncOrderListVO
 */
export interface SyncOrderListVO {
  /**
   * 状态描述
   * @type { string }
   * @memberof SyncOrderListVO
   */
  ['msg']?: string
  /**
   * 订单编码
   * @type { string }
   * @memberof SyncOrderListVO
   */
  ['orderNum']?: string
  /**
   * 状态编码
   * @type { number }
   * @memberof SyncOrderListVO
   */
  ['status']?: number
}

/**
 *
 * @summary SysEmissionFactorVO
 * @interface SysEmissionFactorVO
 */
export interface SysEmissionFactorVO {
  /**
   * 类别编码  陆运里程燃料类型(land_mileage_energy_type)  陆运车辆类型(land_vehicle_type) 水运燃料(water_transport)  陆运燃料类型(land_energy_type) Excel燃料类型(energy_type)
   * @type { string }
   * @memberof SysEmissionFactorVO
   */
  ['code']?: string
  /**
   * 描述
   * @type { string }
   * @memberof SysEmissionFactorVO
   */
  ['description']?: string
  /**
   * 编码
   * @type { string }
   * @memberof SysEmissionFactorVO
   */
  ['factorCode']?: string
  /**
   * 描述
   * @type { string }
   * @memberof SysEmissionFactorVO
   */
  ['factorDesc']?: string
  /**
   * 类型
   * @type { string }
   * @memberof SysEmissionFactorVO
   */
  ['flagCode']?: string
  /**
   * 单位
   * @type { string }
   * @memberof SysEmissionFactorVO
   */
  ['unit']?: string
}

/**
 *
 * @summary TenantRoleVO
 * @interface TenantRoleVO
 */
export interface TenantRoleVO {
  /**
   *
   * @type { string }
   * @memberof TenantRoleVO
   */
  ['appId']?: string
  /**
   *
   * @type { string }
   * @memberof TenantRoleVO
   */
  ['appTenantId']?: string
  /**
   *
   * @type { string }
   * @memberof TenantRoleVO
   */
  ['createdTime']?: string
  /**
   *
   * @type { number }
   * @memberof TenantRoleVO
   */
  ['isApply']?: number
  /**
   *
   * @type { number }
   * @memberof TenantRoleVO
   */
  ['isDel']?: number
  /**
   *
   * @type { number }
   * @memberof TenantRoleVO
   */
  ['isSelect']?: number
  /**
   *
   * @type { number }
   * @memberof TenantRoleVO
   */
  ['operationType']?: number
  /**
   *
   * @type { string }
   * @memberof TenantRoleVO
   */
  ['roleDesc']?: string
  /**
   *
   * @type { string }
   * @memberof TenantRoleVO
   */
  ['roleId']?: string
  /**
   *
   * @type { string }
   * @memberof TenantRoleVO
   */
  ['roleName']?: string
  /**
   *
   * @type { string }
   * @memberof TenantRoleVO
   */
  ['roleType']?: string
  /**
   *
   * @type { number }
   * @memberof TenantRoleVO
   */
  ['status']?: number
  /**
   *
   * @type { string }
   * @memberof TenantRoleVO
   */
  ['tenantId']?: string
  /**
   *
   * @type { string }
   * @memberof TenantRoleVO
   */
  ['updateTime']?: string
}

/**
 *
 * @summary TimeSeriesResultRes
 * @interface TimeSeriesResultRes
 */
export interface TimeSeriesResultRes {
  /**
   *
   * @type { number }
   * @memberof TimeSeriesResultRes
   */
  ['carbonEmission']?: number
  /**
   *
   * @type { string }
   * @memberof TimeSeriesResultRes
   */
  ['timePoint']?: string
}

/**
 *
 * @summary ToDoListVO
 * @interface ToDoListVO
 */
export interface ToDoListVO {
  /**
   * 批次编码
   * @type { string }
   * @memberof ToDoListVO
   */
  ['batchCode']?: string
  /**
   * 批次id
   * @type { string }
   * @memberof ToDoListVO
   */
  ['id']?: string
  /**
   * 产品唯一标识
   * @type { string }
   * @memberof ToDoListVO
   */
  ['modeCode']?: string
  /**
   * 批次名称
   * @type { string }
   * @memberof ToDoListVO
   */
  ['name']?: string
  /**
   * 产品编码
   * @type { string }
   * @memberof ToDoListVO
   */
  ['productCode']?: string
  /**
   * 类别：0 数据审核
   * @type { string }
   * @memberof ToDoListVO
   */
  ['type']?: string
}

/**
 *
 * @summary TransportCodeVO
 * @interface TransportCodeVO
 */
export interface TransportCodeVO {
  /**
   * 陆运燃料类型-计量方式燃料消耗量
   * @type { SysEmissionFactorVO[] }
   * @memberof TransportCodeVO
   */
  ['energyConsumeList']?: SysEmissionFactorVO[]
  /**
   * 能源类型 excel导入/能源消耗使用
   * @type { SysEmissionFactorVO[] }
   * @memberof TransportCodeVO
   */
  ['excelEnergyConsumeList']?: SysEmissionFactorVO[]
  /**
   * 陆运燃料类型
   * @type { SysEmissionFactorVO[] }
   * @memberof TransportCodeVO
   */
  ['landEnergyTypeList']?: SysEmissionFactorVO[]
  /**
   * 陆运车辆载重
   * @type { SysEmissionFactorVO[] }
   * @memberof TransportCodeVO
   */
  ['landVehicleTypeList']?: SysEmissionFactorVO[]
  /**
   * 水运
   * @type { SysEmissionFactorVO[] }
   * @memberof TransportCodeVO
   */
  ['waterList']?: SysEmissionFactorVO[]
}

/**
 *
 * @summary TransportVO
 * @interface TransportVO
 */
export interface TransportVO {
  /**
   * 燃料类型 0:汽油 1:柴油 2:天然气 3:电力
   * @type { string }
   * @memberof TransportVO
   */
  ['fuelType']?: string
  /**
   * 运输里程
   * @type { string }
   * @memberof TransportVO
   */
  ['transportMileage']?: string
  /**
   * 运输里程单位
   * @type { string }
   * @memberof TransportVO
   */
  ['transportMileageUnit']?: string
  /**
   * 运输方式,0:陆运  1:水运 2:铁路 3:空运 4.管道
   * @type { string }
   * @memberof TransportVO
   */
  ['transportType']?: string
}

/**
 *
 * @summary UploadFormDataVO
 * @interface UploadFormDataVO
 */
export interface UploadFormDataVO {
  /**
   * 文件名称
   * @type { string }
   * @memberof UploadFormDataVO
   */
  ['filename']?: string
  /**
   * 文件路径
   * @type { string }
   * @memberof UploadFormDataVO
   */
  ['path']?: string
}

/**
 *
 * @summary UploadProveFileReqBaseDTO
 * @interface UploadProveFileReqBaseDTO
 */
export interface UploadProveFileReqBaseDTO {
  /**
   * 文件名称，文件名称+类型一块传过来
   * @type { string }
   * @memberof UploadProveFileReqBaseDTO
   */
  ['fileName']?: string
  /**
   * 文件地址
   * @type { string }
   * @memberof UploadProveFileReqBaseDTO
   */
  ['fileUrl']?: string
  /**
   * itemCode,产品证明文件itemCode不需要传 产品物流运输：PRODUCT_STORSGE_02 产品仓储：PRODUCT_STORSGE_01 材料运输：RAW_MATERIAL_02   材料生产：RAW_MATERIAL_01  产品使用阶段：BATCH_STAGE_3  产品制造阶段：BATCH_STAGE_1
   * @type { string }
   * @memberof UploadProveFileReqBaseDTO
   */
  ['itemCode']?: string
}

/**
 *
 * @summary UploadProveFileReqDTO
 * @interface UploadProveFileReqDTO
 */
export interface UploadProveFileReqDTO {
  /**
   * 产品批次
   * @type { string }
   * @memberof UploadProveFileReqDTO
   */
  ['batchCode']?: string
  /**
   * 文件list
   * @type { UploadProveFileReqBaseDTO[] }
   * @memberof UploadProveFileReqDTO
   */
  ['list']?: UploadProveFileReqBaseDTO[]
}

/**
 *
 * @summary UseEnergyConsumeVO
 * @interface UseEnergyConsumeVO
 */
export interface UseEnergyConsumeVO {
  /**
   * 消耗量
   * @type { number }
   * @memberof UseEnergyConsumeVO
   */
  ['consumeAmount']?: number
  /**
   * 能源类型
   * @type { string }
   * @memberof UseEnergyConsumeVO
   */
  ['energyType']?: string
  /**
   * 能源类型名字
   * @type { string }
   * @memberof UseEnergyConsumeVO
   */
  ['energyTypeName']?: string
  /**
   * 单位
   * @type { string }
   * @memberof UseEnergyConsumeVO
   */
  ['unit']?: string
}

/**
 *
 * @summary UseListVO
 * @interface UseListVO
 */
export interface UseListVO {
  /**
   * 批次编号
   * @type { string }
   * @memberof UseListVO
   */
  ['batchCode']?: string
  /**
   * 单位热值含碳量
   * @type { number }
   * @memberof UseListVO
   */
  ['carbonContent']?: number
  /**
   * 碳排量
   * @type { number }
   * @memberof UseListVO
   */
  ['carbonEmissions']?: number
  /**
   * 占比
   * @type { number }
   * @memberof UseListVO
   */
  ['carbonMix']?: number
  /**
   * 碳氧化率
   * @type { number }
   * @memberof UseListVO
   */
  ['carbonOxidationRate']?: number
  /**
   * 燃料消耗集合
   * @type { UseEnergyConsumeVO[] }
   * @memberof UseListVO
   */
  ['energyConsumeList']?: UseEnergyConsumeVO[]
  /**
   * id
   * @type { number }
   * @memberof UseListVO
   */
  ['id']?: number
  /**
   * 产品使用寿命单位
   * @type { string }
   * @memberof UseListVO
   */
  ['lifeUnit']?: string
  /**
   * 低位热值
   * @type { number }
   * @memberof UseListVO
   */
  ['lowCalorificValue']?: number
  /**
   * 占比
   * @type { number }
   * @memberof UseListVO
   */
  ['mix']?: number
  /**
   * 使用寿命
   * @type { number }
   * @memberof UseListVO
   */
  ['serviceLife']?: number
  /**
   * 单位
   * @type { string }
   * @memberof UseListVO
   */
  ['unit']?: string
  /**
   * 单位产品仓储碳排量
   * @type { number }
   * @memberof UseListVO
   */
  ['unitCarbonEmission']?: number
  /**
   * 单位时间内能源消耗数据
   * @type { number }
   * @memberof UseListVO
   */
  ['unitEnergyConsume']?: number
  /**
   * 使用阶段名称
   * @type { string }
   * @memberof UseListVO
   */
  ['useName']?: string
}

/**
 *
 * @summary ViewInputDataDTO
 * @interface ViewInputDataDTO
 */
export interface ViewInputDataDTO {
  /**
   * 碳排放范围一
   * @type { number }
   * @memberof ViewInputDataDTO
   */
  ['carbonOne']?: number
  /**
   * 碳排放范围三
   * @type { number }
   * @memberof ViewInputDataDTO
   */
  ['carbonThree']?: number
  /**
   * 碳排放范围二
   * @type { number }
   * @memberof ViewInputDataDTO
   */
  ['carbonTwo']?: number
  /**
   * 选项编码
   * @type { string }
   * @memberof ViewInputDataDTO
   */
  ['code']?: string
  /**
   * 消耗量/产量
   * @type { number }
   * @memberof ViewInputDataDTO
   */
  ['consumeAmount']?: number
  /**
   * 消耗量/产量单位
   * @type { string }
   * @memberof ViewInputDataDTO
   */
  ['consumeUnit']?: string
  /**
   * 选择项目树是必输-结束时间 YYYY-MM
   * @type { string }
   * @memberof ViewInputDataDTO
   */
  ['endDate']?: string
  /**
   * 排放因子编码
   * @type { string }
   * @memberof ViewInputDataDTO
   */
  ['factorCode']?: string
  /**
   * 排放因子值
   * @type { number }
   * @memberof ViewInputDataDTO
   */
  ['factorCodeAmount']?: number
  /**
   * 排放因子名称
   * @type { string }
   * @memberof ViewInputDataDTO
   */
  ['factorCodeName']?: string
  /**
   * 排放因子单位
   * @type { string }
   * @memberof ViewInputDataDTO
   */
  ['factorCodeUnit']?: string
  /**
   * 选项名称
   * @type { string }
   * @memberof ViewInputDataDTO
   */
  ['name']?: string
  /**
   * 物理分配类型 physics_01:重量 physics_02:体积 physics_03:数量 physics_04:尺寸
   * @type { string }
   * @memberof ViewInputDataDTO
   */
  ['physicsType']?: string
  /**
   * 选择项目树是必输-planCode集合
   * @type { string[] }
   * @memberof ViewInputDataDTO
   */
  ['planCodeList']?: string[]
  /**
   * 选择项目树是必输-项目编码
   * @type { string }
   * @memberof ViewInputDataDTO
   */
  ['projectCode']?: string
  /**
   * 量化依据 0:实时计算 1:盘查报告 2:量化引擎
   * @type { number }
   * @memberof ViewInputDataDTO
   */
  ['quantifyBasis']?: number
  /**
   * 盘查报告文件名称
   * @type { string }
   * @memberof ViewInputDataDTO
   */
  ['quantifyReportName']?: string
  /**
   * 盘查报告文件地址
   * @type { string }
   * @memberof ViewInputDataDTO
   */
  ['quantifyReportUrl']?: string
  /**
   * 原因（物理）
   * @type { string }
   * @memberof ViewInputDataDTO
   */
  ['reason']?: string
  /**
   * 分摊占比
   * @type { number }
   * @memberof ViewInputDataDTO
   */
  ['shareMix']?: number
  /**
   * 分摊方式 0:物理分配 1:经济分配 2:不分配
   * @type { number }
   * @memberof ViewInputDataDTO
   */
  ['shareType']?: number
  /**
   * 选择项目树是必输-开始时间 YYYY-MM
   * @type { string }
   * @memberof ViewInputDataDTO
   */
  ['startDate']?: string
  /**
   * 数据类型 1:耗材，2:能资；3:共用能资
   * @type { number }
   * @memberof ViewInputDataDTO
   */
  ['type']?: number
  /**
   * 单位
   * @type { string }
   * @memberof ViewInputDataDTO
   */
  ['unit']?: string
  /**
   * 产值占比（经济）
   * @type { number }
   * @memberof ViewInputDataDTO
   */
  ['valueMix']?: number
  /**
   * 重量占比（物理）
   * @type { number }
   * @memberof ViewInputDataDTO
   */
  ['weightMix']?: number
}

/**
 *
 * @summary ViewInputDataVO
 * @interface ViewInputDataVO
 */
export interface ViewInputDataVO {
  /**
   * 碳排放范围一
   * @type { number }
   * @memberof ViewInputDataVO
   */
  ['carbonOne']?: number
  /**
   * 碳排放范围三
   * @type { number }
   * @memberof ViewInputDataVO
   */
  ['carbonThree']?: number
  /**
   * 碳排放范围二
   * @type { number }
   * @memberof ViewInputDataVO
   */
  ['carbonTwo']?: number
  /**
   * 选项编码
   * @type { string }
   * @memberof ViewInputDataVO
   */
  ['code']?: string
  /**
   * 消耗量/产量
   * @type { number }
   * @memberof ViewInputDataVO
   */
  ['consumeAmount']?: number
  /**
   * 消耗量/产量单位
   * @type { string }
   * @memberof ViewInputDataVO
   */
  ['consumeUnit']?: string
  /**
   * 选择项目树是必输-结束时间 YYYY-MM
   * @type { string }
   * @memberof ViewInputDataVO
   */
  ['endDate']?: string
  /**
   * 排放因子编码
   * @type { string }
   * @memberof ViewInputDataVO
   */
  ['factorCode']?: string
  /**
   * 排放因子值
   * @type { string }
   * @memberof ViewInputDataVO
   */
  ['factorCodeAmount']?: string
  /**
   * 排放因子名称
   * @type { string }
   * @memberof ViewInputDataVO
   */
  ['factorCodeName']?: string
  /**
   * 排放因子单位
   * @type { string }
   * @memberof ViewInputDataVO
   */
  ['factorCodeUnit']?: string
  /**
   * 选项名称
   * @type { string }
   * @memberof ViewInputDataVO
   */
  ['name']?: string
  /**
   * 物理分配类型 physics_01:重量 physics_02:体积 physics_03:数量 physics_04:尺寸
   * @type { string }
   * @memberof ViewInputDataVO
   */
  ['physicsType']?: string
  /**
   * 选择项目树是必输-planCode集合
   * @type { string[] }
   * @memberof ViewInputDataVO
   */
  ['planCodeList']?: string[]
  /**
   * 选择项目树是必输-项目编码
   * @type { string }
   * @memberof ViewInputDataVO
   */
  ['projectCode']?: string
  /**
   * 量化依据 0:盘查报告 1:量化项目计算 2:CIM物联
   * @type { number }
   * @memberof ViewInputDataVO
   */
  ['quantifyBasis']?: number
  /**
   * 盘查报告文件名称
   * @type { string }
   * @memberof ViewInputDataVO
   */
  ['quantifyReportName']?: string
  /**
   * 盘查报告文件地址
   * @type { string }
   * @memberof ViewInputDataVO
   */
  ['quantifyReportUrl']?: string
  /**
   * 原因（物理）
   * @type { string }
   * @memberof ViewInputDataVO
   */
  ['reason']?: string
  /**
   * 分摊占比
   * @type { number }
   * @memberof ViewInputDataVO
   */
  ['shareMix']?: number
  /**
   * 分摊方式 0:物理分配 1:经济分配 2:不分配
   * @type { number }
   * @memberof ViewInputDataVO
   */
  ['shareType']?: number
  /**
   * 选择项目树是必输-开始时间 YYYY-MM
   * @type { string }
   * @memberof ViewInputDataVO
   */
  ['startDate']?: string
  /**
   * 类别，1:耗材，2:能资；3:共用能资
   * @type { number }
   * @memberof ViewInputDataVO
   */
  ['type']?: number
  /**
   * 单位
   * @type { string }
   * @memberof ViewInputDataVO
   */
  ['unit']?: string
  /**
   * 产值占比（经济）
   * @type { number }
   * @memberof ViewInputDataVO
   */
  ['valueMix']?: number
  /**
   * 重量占比（物理）
   * @type { number }
   * @memberof ViewInputDataVO
   */
  ['weightMix']?: number
}

/**
 *
 * @summary ViewOutputDataDTO
 * @interface ViewOutputDataDTO
 */
export interface ViewOutputDataDTO {
  /**
   * 选项编码
   * @type { string }
   * @memberof ViewOutputDataDTO
   */
  ['code']?: string
  /**
   * 消耗量/产量
   * @type { number }
   * @memberof ViewOutputDataDTO
   */
  ['consumeAmount']?: number
  /**
   * 消耗量/产量单位
   * @type { string }
   * @memberof ViewOutputDataDTO
   */
  ['consumeUnit']?: string
  /**
   * 排放因子编码
   * @type { string }
   * @memberof ViewOutputDataDTO
   */
  ['factorCode']?: string
  /**
   * 排放因子值
   * @type { number }
   * @memberof ViewOutputDataDTO
   */
  ['factorCodeAmount']?: number
  /**
   * 排放因子名称
   * @type { string }
   * @memberof ViewOutputDataDTO
   */
  ['factorCodeName']?: string
  /**
   * 排放因子单位
   * @type { string }
   * @memberof ViewOutputDataDTO
   */
  ['factorCodeUnit']?: string
  /**
   * 选项名称
   * @type { string }
   * @memberof ViewOutputDataDTO
   */
  ['name']?: string
  /**
   * 数据类型 1:中间品，2:产品；3:能源，4:固体废物
   * @type { string }
   * @memberof ViewOutputDataDTO
   */
  ['type']?: string
  /**
   * 类别名称
   * @type { string }
   * @memberof ViewOutputDataDTO
   */
  ['typeName']?: string
  /**
   * 单位
   * @type { string }
   * @memberof ViewOutputDataDTO
   */
  ['unit']?: string
}

/**
 *
 * @summary ViewOutputDataVO
 * @interface ViewOutputDataVO
 */
export interface ViewOutputDataVO {
  /**
   * 单位产品消耗量
   * @type { number }
   * @memberof ViewOutputDataVO
   */
  ['amount']?: number
  /**
   * 选项编码
   * @type { string }
   * @memberof ViewOutputDataVO
   */
  ['code']?: string
  /**
   * 消耗量/产量
   * @type { number }
   * @memberof ViewOutputDataVO
   */
  ['consumeAmount']?: number
  /**
   * 消耗量/产量单位
   * @type { string }
   * @memberof ViewOutputDataVO
   */
  ['consumeUnit']?: string
  /**
   * 选择项目树是必输-结束时间 YYYY-MM
   * @type { string }
   * @memberof ViewOutputDataVO
   */
  ['endDate']?: string
  /**
   * 排放因子编码
   * @type { string }
   * @memberof ViewOutputDataVO
   */
  ['factorCode']?: string
  /**
   * 排放因子值
   * @type { number }
   * @memberof ViewOutputDataVO
   */
  ['factorCodeAmount']?: number
  /**
   * 排放因子名称
   * @type { string }
   * @memberof ViewOutputDataVO
   */
  ['factorCodeName']?: string
  /**
   * 排放因子单位
   * @type { string }
   * @memberof ViewOutputDataVO
   */
  ['factorCodeUnit']?: string
  /**
   * 选项名称
   * @type { string }
   * @memberof ViewOutputDataVO
   */
  ['name']?: string
  /**
   * 选择项目树是必输-开始时间 YYYY-MM
   * @type { string }
   * @memberof ViewOutputDataVO
   */
  ['startDate']?: string
  /**
   * 数据类型 1:中间品，2:产品；3:能源，4:固体废物
   * @type { number }
   * @memberof ViewOutputDataVO
   */
  ['type']?: number
  /**
   * 类别名称
   * @type { string }
   * @memberof ViewOutputDataVO
   */
  ['typeName']?: string
  /**
   * 单位
   * @type { string }
   * @memberof ViewOutputDataVO
   */
  ['unit']?: string
  /**
   * 重量单位
   * @type { string }
   * @memberof ViewOutputDataVO
   */
  ['weightUnit']?: string
}

/**
 *
 * @summary WaterShipCalculateCarbonRes
 * @interface WaterShipCalculateCarbonRes
 */
export interface WaterShipCalculateCarbonRes {
  /**
   *
   * @type { number }
   * @memberof WaterShipCalculateCarbonRes
   */
  ['carbonEmissions']?: number
  /**
   *
   * @type { string }
   * @memberof WaterShipCalculateCarbonRes
   */
  ['typeCode']?: string
}

/**
 *
 * @summary WorkPlanTreeRes
 * @interface WorkPlanTreeRes
 */
export interface WorkPlanTreeRes {
  /**
   *
   * @type { WorkPlanTreeRes[] }
   * @memberof WorkPlanTreeRes
   */
  ['childPlanList']?: WorkPlanTreeRes[]
  /**
   *
   * @type { number }
   * @memberof WorkPlanTreeRes
   */
  ['levelNum']?: number
  /**
   *
   * @type { string }
   * @memberof WorkPlanTreeRes
   */
  ['parentCode']?: string
  /**
   *
   * @type { string }
   * @memberof WorkPlanTreeRes
   */
  ['planCode']?: string
  /**
   *
   * @type { string }
   * @memberof WorkPlanTreeRes
   */
  ['planName']?: string
  /**
   *
   * @type { string }
   * @memberof WorkPlanTreeRes
   */
  ['projectCode']?: string
}

/**
 *
 * @summary StandardModel$4e11816a
 * @interface StandardModel$4e11816a
 */
export interface StandardModel$4e11816a {
  /**
   * authorization
   * @type { string }
   * @memberof StandardModel$4e11816a
   */
  ['authorization']?: string
  /**
   * x-qs-date
   * @type { string }
   * @memberof StandardModel$4e11816a
   */
  ['x-qs-date']?: string
  /**
   * x-qs-encryption-customer-algorithm
   * @type { string }
   * @memberof StandardModel$4e11816a
   */
  ['x-qs-encryption-customer-algorithm']?: string
  /**
   * x-qs-encryption-customer-key
   * @type { string }
   * @memberof StandardModel$4e11816a
   */
  ['x-qs-encryption-customer-key']?: string
  /**
   * x-qs-encryption-customer-key-MD5
   * @type { string }
   * @memberof StandardModel$4e11816a
   */
  ['x-qs-encryption-customer-key-MD5']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$4e11816a
   */
  ['xqsDate']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$4e11816a
   */
  ['xqsEncryptionCustomerAlgorithm']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$4e11816a
   */
  ['xqsEncryptionCustomerKey']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$4e11816a
   */
  ['xqsEncryptionCustomerKeyMD5']?: string
}

/**
 *
 * @summary StandardModel$87d7da8a
 * @interface StandardModel$87d7da8a
 */
export interface StandardModel$87d7da8a {
  /**
   * 编码
   * @type { string }
   * @memberof StandardModel$87d7da8a
   */
  ['code']?: string
  /**
   * 名称
   * @type { string }
   * @memberof StandardModel$87d7da8a
   */
  ['name']?: string
}

/**
 *
 * @summary StandardModel$6fe99fc2
 * @interface StandardModel$6fe99fc2
 */
export interface StandardModel$6fe99fc2 {
  /**
   * 单位热值含碳量
   * @type { number }
   * @memberof StandardModel$6fe99fc2
   */
  ['carbonContent']?: number
  /**
   * 碳排放量
   * @type { number }
   * @memberof StandardModel$6fe99fc2
   */
  ['carbonEmission']?: number
  /**
   * 当前阶段占比
   * @type { number }
   * @memberof StandardModel$6fe99fc2
   */
  ['carbonEmissionMix']?: number
  /**
   * 碳氧化率
   * @type { number }
   * @memberof StandardModel$6fe99fc2
   */
  ['carbonOxidationRate']?: number
  /**
   * 单位热值含碳量
   * @type { number }
   * @memberof StandardModel$6fe99fc2
   */
  ['lowCalorificValue']?: number
  /**
   * 单位
   * @type { string }
   * @memberof StandardModel$6fe99fc2
   */
  ['productUnit']?: string
  /**
   * 使用寿命
   * @type { number }
   * @memberof StandardModel$6fe99fc2
   */
  ['serviceLife']?: number
  /**
   * 单位时间内能源消耗
   * @type { number }
   * @memberof StandardModel$6fe99fc2
   */
  ['unitEnergyConsume']?: number
  /**
   * 使用阶段名称
   * @type { string }
   * @memberof StandardModel$6fe99fc2
   */
  ['useName']?: string
}

/**
 *
 * @summary StandardModel$14d9bcb6
 * @interface StandardModel$14d9bcb6
 */
export interface StandardModel$14d9bcb6 {
  /**
   * 碳排总量
   * @type { number }
   * @memberof StandardModel$14d9bcb6
   */
  ['carbonEmission']?: number
  /**
   * 当前阶段占比
   * @type { number }
   * @memberof StandardModel$14d9bcb6
   */
  ['carbonEmissionMix']?: number
  /**
   * 量化依据
   * @type { string }
   * @memberof StandardModel$14d9bcb6
   */
  ['quantifyBasis']?: string
  /**
   * 仓储名称
   * @type { string }
   * @memberof StandardModel$14d9bcb6
   */
  ['storageName']?: string
  /**
   * 产品年度周转量
   * @type { number }
   * @memberof StandardModel$14d9bcb6
   */
  ['turnoverAnnual']?: number
  /**
   * 产品单位仓储碳排
   * @type { number }
   * @memberof StandardModel$14d9bcb6
   */
  ['unitCarbonEmission']?: number
}

/**
 *
 * @summary StandardModel$4246ce91
 * @interface StandardModel$4246ce91
 */
export interface StandardModel$4246ce91 {
  /**
   * 运输数量
   * @type { string }
   * @memberof StandardModel$4246ce91
   */
  ['amount']?: string
  /**
   * 碳排放量
   * @type { number }
   * @memberof StandardModel$4246ce91
   */
  ['carbonEmission']?: number
  /**
   * 当前阶段占比
   * @type { number }
   * @memberof StandardModel$4246ce91
   */
  ['carbonEmissionMix']?: number
  /**
   * 燃料类型
   * @type { string }
   * @memberof StandardModel$4246ce91
   */
  ['fuelType']?: string
  /**
   * 运输里程
   * @type { number }
   * @memberof StandardModel$4246ce91
   */
  ['transportMileage']?: number
  /**
   * 运输方式
   * @type { string }
   * @memberof StandardModel$4246ce91
   */
  ['transportType']?: string
  /**
   * 运输方式
   * @type { TransportVO[] }
   * @memberof StandardModel$4246ce91
   */
  ['transportTypeVOList']?: TransportVO[]
}

/**
 *
 * @summary StandardModel$2157140f
 * @interface StandardModel$2157140f
 */
export interface StandardModel$2157140f {
  /**
   * 碳排总量
   * @type { number }
   * @memberof StandardModel$2157140f
   */
  ['carbonEmission']?: number
  /**
   * 当前阶段占比
   * @type { number }
   * @memberof StandardModel$2157140f
   */
  ['carbonEmissionMix']?: number
  /**
   * 产品数量
   * @type { number }
   * @memberof StandardModel$2157140f
   */
  ['outputAnnual']?: number
  /**
   * 产品单位
   * @type { string }
   * @memberof StandardModel$2157140f
   */
  ['productUnit']?: string
  /**
   * 生产过程阶段
   * @type { string }
   * @memberof StandardModel$2157140f
   */
  ['productionLine']?: string
  /**
   * 量化依据
   * @type { string }
   * @memberof StandardModel$2157140f
   */
  ['quantifyBasis']?: string
  /**
   * 材料碳排系数
   * @type { number }
   * @memberof StandardModel$2157140f
   */
  ['rawMaterialCoefficient']?: number
  /**
   * 单位产品碳排量
   * @type { number }
   * @memberof StandardModel$2157140f
   */
  ['unitCarbonEmission']?: number
}

/**
 *
 * @summary StandardModel$7b21d989
 * @interface StandardModel$7b21d989
 */
export interface StandardModel$7b21d989 {
  /**
   * 批次编码(修改带)
   * @type { string }
   * @memberof StandardModel$7b21d989
   */
  ['batchCode']?: string
  /**
   * 年度碳排总量
   * @type { number }
   * @memberof StandardModel$7b21d989
   */
  ['carbonEmissionsAnnual']?: number
  /**
   * 碳排占比
   * @type { number }
   * @memberof StandardModel$7b21d989
   */
  ['carbonMix']?: number
  /**
   * 碳排放范围一
   * @type { number }
   * @memberof StandardModel$7b21d989
   */
  ['carbonOne']?: number
  /**
   * 碳排放范围三
   * @type { number }
   * @memberof StandardModel$7b21d989
   */
  ['carbonThree']?: number
  /**
   * 碳排放范围二
   * @type { number }
   * @memberof StandardModel$7b21d989
   */
  ['carbonTwo']?: number
  /**
   * 生产过程
   * @type { string }
   * @memberof StandardModel$7b21d989
   */
  ['cellName']?: string
  /**
   * 结束日期（量化）
   * @type { string }
   * @memberof StandardModel$7b21d989
   */
  ['endTime']?: string
  /**
   * 能源消耗数据
   * @type { SaveEnergyConsumeDTO[] }
   * @memberof StandardModel$7b21d989
   */
  ['energyConsumeDTOList']?: SaveEnergyConsumeDTO[]
  /**
   * id(修改带)
   * @type { number }
   * @memberof StandardModel$7b21d989
   */
  ['id']?: number
  /**
   * 年产量
   * @type { number }
   * @memberof StandardModel$7b21d989
   */
  ['outputAnnual']?: number
  /**
   * 产出物
   * @type { string }
   * @memberof StandardModel$7b21d989
   */
  ['outputProduct']?: string
  /**
   * 产出物数量
   * @type { number }
   * @memberof StandardModel$7b21d989
   */
  ['outputProductAmount']?: number
  /**
   * 单位
   * @type { string }
   * @memberof StandardModel$7b21d989
   */
  ['outputUnit']?: string
  /**
   * 物理分配类型 physics_01:重量 physics_02:体积 physics_03:数量 physics_04:尺寸
   * @type { string }
   * @memberof StandardModel$7b21d989
   */
  ['physicsType']?: string
  /**
   * 单位产品碳排
   * @type { number }
   * @memberof StandardModel$7b21d989
   */
  ['productCarbon']?: number
  /**
   * 生产线
   * @type { string }
   * @memberof StandardModel$7b21d989
   */
  ['productionLine']?: string
  /**
   * 量化依据 0:盘查报告 1:量化项目计算
   * @type { number }
   * @memberof StandardModel$7b21d989
   */
  ['quantifyBasis']?: number
  /**
   * 盘查报告文件名称
   * @type { string }
   * @memberof StandardModel$7b21d989
   */
  ['quantifyReportName']?: string
  /**
   * 盘查报告文件地址
   * @type { string }
   * @memberof StandardModel$7b21d989
   */
  ['quantifyReportUrl']?: string
  /**
   * 原因（物理）
   * @type { string }
   * @memberof StandardModel$7b21d989
   */
  ['reason']?: string
  /**
   * 分摊方式 0:物理分配 1:经济分配 2:不分配
   * @type { number }
   * @memberof StandardModel$7b21d989
   */
  ['shareType']?: number
  /**
   * 阶段编码(修改带)
   * @type { string }
   * @memberof StandardModel$7b21d989
   */
  ['stageCode']?: string
  /**
   * 开始日期（量化）
   * @type { string }
   * @memberof StandardModel$7b21d989
   */
  ['startTime']?: string
  /**
   * 碳排总量
   * @type { number }
   * @memberof StandardModel$7b21d989
   */
  ['totalEmissions']?: number
  /**
   * 产值占比（经济）
   * @type { number }
   * @memberof StandardModel$7b21d989
   */
  ['valueMix']?: number
  /**
   * 重量占比（物理）
   * @type { number }
   * @memberof StandardModel$7b21d989
   */
  ['weightMix']?: number
}

/**
 *
 * @summary StandardModel$b07cf829
 * @interface StandardModel$b07cf829
 */
export interface StandardModel$b07cf829 {
  /**
   * 材料运输方式
   * @type { StandardModel$b1bda0cc[] }
   * @memberof StandardModel$b07cf829
   */
  ['saleTransportDTOList']?: StandardModel$b1bda0cc[]
  /**
   * 材料运输方式
   * @type { StandardModel$b1bda0cc[] }
   * @memberof StandardModel$b07cf829
   */
  ['stageRawMaterialTransportVOList']?: StandardModel$b1bda0cc[]
  /**
   *
   * @type { StandardModel$1562c017 }
   * @memberof StandardModel$b07cf829
   */
  ['useTransportRelDTO']?: StandardModel$1562c017
  /**
   *
   * @type { StandardModel$1562c017 }
   * @memberof StandardModel$b07cf829
   */
  ['useTransportRelVO']?: StandardModel$1562c017
}

/**
 *
 * @summary StandardModel$a8253cb5
 * @interface StandardModel$a8253cb5
 */
export interface StandardModel$a8253cb5 {
  /**
   * 产品功能单位数量
   * @type { number }
   * @memberof StandardModel$a8253cb5
   */
  ['amount']: number
  /**
   * 批次编码
   * @type { string }
   * @memberof StandardModel$a8253cb5
   */
  ['batchCode']?: string
  /**
   * 批次名称
   * @type { string }
   * @memberof StandardModel$a8253cb5
   */
  ['batchName']: string
  /**
   * 数据采集方式(0：管理员统一录入 1：各业务成员录入)
   * @type { string }
   * @memberof StandardModel$a8253cb5
   */
  ['collectType']: string
  /**
   * 温室气体排放源临界点(0：大于1%  1：大于5%)
   * @type { string }
   * @memberof StandardModel$a8253cb5
   */
  ['cutOff']: string
  /**
   * 批次结束时间
   * @type { string }
   * @memberof StandardModel$a8253cb5
   */
  ['endTime']: string
  /**
   * 产品唯一标识
   * @type { string }
   * @memberof StandardModel$a8253cb5
   */
  ['modeCode']: string
  /**
   * 产品编码
   * @type { string }
   * @memberof StandardModel$a8253cb5
   */
  ['productCode']: string
  /**
   * 批次开始时间
   * @type { string }
   * @memberof StandardModel$a8253cb5
   */
  ['startTime']: string
  /**
   * 单位
   * @type { string }
   * @memberof StandardModel$a8253cb5
   */
  ['unit']: string
}

/**
 *
 * @summary StandardModel$5df2010c
 * @interface StandardModel$5df2010c
 */
export interface StandardModel$5df2010c {
  /**
   * 减排措施名称
   * @type { string }
   * @memberof StandardModel$5df2010c
   */
  ['measureTypeName']?: string
  /**
   * 预估减排量
   * @type { number }
   * @memberof StandardModel$5df2010c
   */
  ['reductionAmount']?: number
  /**
   * 减排措施编码
   * @type { string }
   * @memberof StandardModel$5df2010c
   */
  ['reductionMeasureCode']?: string
  /**
   * 实际减排措施描述
   * @type { string }
   * @memberof StandardModel$5df2010c
   */
  ['reductionSchemeDescribe']?: string
}

/**
 *
 * @summary StandardModel$4bfa8668
 * @interface StandardModel$4bfa8668
 */
export interface StandardModel$4bfa8668 {
  /**
   * 编码
   * @type { string }
   * @memberof StandardModel$4bfa8668
   */
  ['code']?: string
  /**
   * id
   * @type { number }
   * @memberof StandardModel$4bfa8668
   */
  ['id']?: number
  /**
   * 名称
   * @type { string }
   * @memberof StandardModel$4bfa8668
   */
  ['name']?: string
  /**
   * 父级编码
   * @type { string }
   * @memberof StandardModel$4bfa8668
   */
  ['parentCode']?: string
  /**
   * 默认选中
   * @type { string }
   * @memberof StandardModel$4bfa8668
   */
  ['selected']?: string
  /**
   * 排序
   * @type { string }
   * @memberof StandardModel$4bfa8668
   */
  ['sort']?: string
}

/**
 *
 * @summary StandardModel$93c16b57
 * @interface StandardModel$93c16b57
 */
export interface StandardModel$93c16b57 {
  /**
   * 当前页码
   * @type { number }
   * @memberof StandardModel$93c16b57
   */
  ['pageNum']: number
  /**
   * 每页大小
   * @type { number }
   * @memberof StandardModel$93c16b57
   */
  ['pageSize']: number
  /**
   * 产品型号
   * @type { string }
   * @memberof StandardModel$93c16b57
   */
  ['productMode']?: string
  /**
   * 产品名称
   * @type { string }
   * @memberof StandardModel$93c16b57
   */
  ['productName']?: string
}

/**
 *
 * @summary StandardModel$a8e27bed
 * @interface StandardModel$a8e27bed
 */
export interface StandardModel$a8e27bed {
  /**
   *
   * @type { string }
   * @memberof StandardModel$a8e27bed
   */
  ['companyId']?: string
  /**
   * 买方名称列表
   * @type { string[] }
   * @memberof StandardModel$a8e27bed
   */
  ['demanderNameList']?: string[]
  /**
   * 中和状态 0 待中和 1已中和
   * @type { number }
   * @memberof StandardModel$a8e27bed
   */
  ['neutralStatus']?: number
  /**
   * 外围系统订单编号
   * @type { string }
   * @memberof StandardModel$a8e27bed
   */
  ['orderNum']?: string
  /**
   * 页面编码
   * @type { number }
   * @memberof StandardModel$a8e27bed
   */
  ['pageNum']: number
  /**
   * 页面条数
   * @type { number }
   * @memberof StandardModel$a8e27bed
   */
  ['pageSize']: number
  /**
   * 产品名称
   * @type { string }
   * @memberof StandardModel$a8e27bed
   */
  ['productName']?: string
  /**
   * 卖方名称列表
   * @type { string[] }
   * @memberof StandardModel$a8e27bed
   */
  ['supplierNameList']?: string[]
}

/**
 *
 * @summary StandardModel$43cac21f
 * @interface StandardModel$43cac21f
 */
export interface StandardModel$43cac21f {
  /**
   * 应用id
   * @type { string }
   * @memberof StandardModel$43cac21f
   */
  ['appId']?: string
  /**
   * 指定bean
   * @type { string }
   * @memberof StandardModel$43cac21f
   */
  ['beanName']?: string
  /**
   * 鉴权参数
   * @type { string }
   * @memberof StandardModel$43cac21f
   */
  ['ennUnifiedAuthorization']: string
  /**
   * 鉴权token
   * @type { string }
   * @memberof StandardModel$43cac21f
   */
  ['ennUnifiedCsrfToken']: string
  /**
   * 接口地址
   * @type { string }
   * @memberof StandardModel$43cac21f
   */
  ['interfaceUrl']: string
}

/**
 *
 * @summary StandardModel$25809bb8
 * @interface StandardModel$25809bb8
 */
export interface StandardModel$25809bb8 {
  /**
   * 数量
   * @type { number }
   * @memberof StandardModel$25809bb8
   */
  ['amount']?: number
  /**
   * 碳排量
   * @type { number }
   * @memberof StandardModel$25809bb8
   */
  ['carbonEmissions']?: number
  /**
   * 碳排占比
   * @type { number }
   * @memberof StandardModel$25809bb8
   */
  ['carbonMix']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$25809bb8
   */
  ['id']?: number
  /**
   * 材料名称
   * @type { string }
   * @memberof StandardModel$25809bb8
   */
  ['rawMaterialName']?: string
  /**
   * 单位材料运输碳排
   * @type { number }
   * @memberof StandardModel$25809bb8
   */
  ['transportCarbon']?: number
  /**
   * 运输类型
   * @type { StandardModel$26efd52b[] }
   * @memberof StandardModel$25809bb8
   */
  ['transportDTOList']?: StandardModel$26efd52b[]
  /**
   * 单位名称
   * @type { string }
   * @memberof StandardModel$25809bb8
   */
  ['unitName']?: string
}

/**
 *
 * @summary StandardModel$26efd52b
 * @interface StandardModel$26efd52b
 */
export interface StandardModel$26efd52b {
  /**
   * 燃料类型
   * @type { string }
   * @memberof StandardModel$26efd52b
   */
  ['factorDesc']?: string
  /**
   * 运输里程
   * @type { number }
   * @memberof StandardModel$26efd52b
   */
  ['transportMileage']?: number
  /**
   * 运输类型
   * @type { string }
   * @memberof StandardModel$26efd52b
   */
  ['transportType']?: string
}

/**
 *
 * @summary StandardModel$84301a20
 * @interface StandardModel$84301a20
 */
export interface StandardModel$84301a20 {
  /**
   * 批次编码
   * @type { string }
   * @memberof StandardModel$84301a20
   */
  ['batchCode']?: string
  /**
   * 单位产品材料消耗量
   * @type { number }
   * @memberof StandardModel$84301a20
   */
  ['consumption']?: number
  /**
   * 排放因子编码
   * @type { string }
   * @memberof StandardModel$84301a20
   */
  ['emissionFactorCode']?: string
  /**
   * 数据说明
   * @type { string }
   * @memberof StandardModel$84301a20
   */
  ['explain']?: string
  /**
   * 0 手动新增 1 来自bom
   * @type { string }
   * @memberof StandardModel$84301a20
   */
  ['fromBom']?: string
  /**
   * 原材料id（修改时传入）
   * @type { number }
   * @memberof StandardModel$84301a20
   */
  ['id']?: number
  /**
   * 材料编码 （用户输入的）
   * @type { string }
   * @memberof StandardModel$84301a20
   */
  ['materialCodeInput']?: string
  /**
   * 产品编码
   * @type { string }
   * @memberof StandardModel$84301a20
   */
  ['productCode']?: string
  /**
   * 材料型号
   * @type { string }
   * @memberof StandardModel$84301a20
   */
  ['rawMaterialMode']?: string
  /**
   * 材料名称
   * @type { string }
   * @memberof StandardModel$84301a20
   */
  ['rawMaterialName']?: string
  /**
   * 单位id
   * @type { string }
   * @memberof StandardModel$84301a20
   */
  ['unitId']?: string
  /**
   * 单位材料重量
   * @type { number }
   * @memberof StandardModel$84301a20
   */
  ['unitMaterialWeight']?: number
}

/**
 *
 * @summary StandardModel$beb987fa
 * @interface StandardModel$beb987fa
 */
export interface StandardModel$beb987fa {
  /**
   * 批次编码
   * @type { string }
   * @memberof StandardModel$beb987fa
   */
  ['batchCode']?: string
  /**
   * 碳排量
   * @type { number }
   * @memberof StandardModel$beb987fa
   */
  ['carbonEmission']?: number
  /**
   * 碳排占比
   * @type { number }
   * @memberof StandardModel$beb987fa
   */
  ['carbonMix']?: number
  /**
   * 单位产品材料消耗量
   * @type { number }
   * @memberof StandardModel$beb987fa
   */
  ['consumption']?: number
  /**
   *
   * @type { string }
   * @memberof StandardModel$beb987fa
   */
  ['createBy']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$beb987fa
   */
  ['createTime']?: string
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$beb987fa
   */
  ['deleted']?: boolean
  /**
   * 排放因子编码
   * @type { string }
   * @memberof StandardModel$beb987fa
   */
  ['emissionFactorCode']?: string
  /**
   * 材料碳排系数
   * @type { string }
   * @memberof StandardModel$beb987fa
   */
  ['emissionFactorCoefficient']?: string
  /**
   * 数据说明
   * @type { string }
   * @memberof StandardModel$beb987fa
   */
  ['explain']?: string
  /**
   * 0 手动新增 1 来自bom
   * @type { number }
   * @memberof StandardModel$beb987fa
   */
  ['fromBom']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$beb987fa
   */
  ['id']?: number
  /**
   * 材料唯一编码
   * @type { string }
   * @memberof StandardModel$beb987fa
   */
  ['materialCode']?: string
  /**
   * 材料编码 （用户输入的）
   * @type { string }
   * @memberof StandardModel$beb987fa
   */
  ['materialCodeInput']?: string
  /**
   * 产品编码
   * @type { string }
   * @memberof StandardModel$beb987fa
   */
  ['productCode']?: string
  /**
   * 材料型号
   * @type { string }
   * @memberof StandardModel$beb987fa
   */
  ['rawMaterialMode']?: string
  /**
   * 材料名称
   * @type { string }
   * @memberof StandardModel$beb987fa
   */
  ['rawMaterialName']?: string
  /**
   * 单位id
   * @type { string }
   * @memberof StandardModel$beb987fa
   */
  ['unitId']?: string
  /**
   * 单位材料重量
   * @type { number }
   * @memberof StandardModel$beb987fa
   */
  ['unitMaterialWeight']?: number
  /**
   * 单位名称
   * @type { string }
   * @memberof StandardModel$beb987fa
   */
  ['unitName']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$beb987fa
   */
  ['updateBy']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$beb987fa
   */
  ['updateTime']?: string
  /**
   * 单位材料重量单位
   * @type { string }
   * @memberof StandardModel$beb987fa
   */
  ['weightUnit']?: string
}

/**
 *
 * @summary StandardModel$b6ee19bb
 * @interface StandardModel$b6ee19bb
 */
export interface StandardModel$b6ee19bb {
  /**
   * 碳排量
   * @type { number }
   * @memberof StandardModel$b6ee19bb
   */
  ['carbonEmission']?: number
  /**
   * 当前阶段占比
   * @type { number }
   * @memberof StandardModel$b6ee19bb
   */
  ['carbonEmissionMix']?: number
  /**
   * 单位产品消耗量
   * @type { number }
   * @memberof StandardModel$b6ee19bb
   */
  ['consumption']?: number
  /**
   * 单位产品消耗量单位
   * @type { string }
   * @memberof StandardModel$b6ee19bb
   */
  ['consumptionUnit']?: string
  /**
   * 数据说明
   * @type { string }
   * @memberof StandardModel$b6ee19bb
   */
  ['dataExplain']?: string
  /**
   * 材料碳排系数
   * @type { number }
   * @memberof StandardModel$b6ee19bb
   */
  ['rawMaterialCoefficient']?: number
  /**
   * 材料碳排系数单位
   * @type { string }
   * @memberof StandardModel$b6ee19bb
   */
  ['rawMaterialCoefficientUnit']?: string
  /**
   * 原材料名称
   * @type { string }
   * @memberof StandardModel$b6ee19bb
   */
  ['rawMaterialName']?: string
}

/**
 *
 * @summary StandardModel$c5de351f
 * @interface StandardModel$c5de351f
 */
export interface StandardModel$c5de351f {
  /**
   * 材料运输数量
   * @type { number }
   * @memberof StandardModel$c5de351f
   */
  ['amount']?: number
  /**
   * 材料运输碳排
   * @type { number }
   * @memberof StandardModel$c5de351f
   */
  ['carbonEmission']?: number
  /**
   * 当前阶段占比
   * @type { number }
   * @memberof StandardModel$c5de351f
   */
  ['carbonEmissionMix']?: number
  /**
   * 原材料名称
   * @type { string }
   * @memberof StandardModel$c5de351f
   */
  ['rawMaterialName']?: string
  /**
   * 运输数量单位
   * @type { string }
   * @memberof StandardModel$c5de351f
   */
  ['transportAmountUnit']?: string
  /**
   * 运输里程
   * @type { number }
   * @memberof StandardModel$c5de351f
   */
  ['transportMileage']?: number
  /**
   * 运输方式
   * @type { string }
   * @memberof StandardModel$c5de351f
   */
  ['transportType']?: string
  /**
   * 运输方式集合
   * @type { string[] }
   * @memberof StandardModel$c5de351f
   */
  ['transportTypeList']?: string[]
  /**
   * 运输方式
   * @type { TransportVO[] }
   * @memberof StandardModel$c5de351f
   */
  ['transportTypeVOList']?: TransportVO[]
}

/**
 *
 * @summary StandardModel$eaa8308e
 * @interface StandardModel$eaa8308e
 */
export interface StandardModel$eaa8308e {
  /**
   * 记录id
   * @type { number }
   * @memberof StandardModel$eaa8308e
   */
  ['id']?: number
  /**
   *
   * @type { StandardModel$a64269f1 }
   * @memberof StandardModel$eaa8308e
   */
  ['institutionVo']?: StandardModel$a64269f1
  /**
   * 减排措施
   * @type { StandardModel$5df2010c[] }
   * @memberof StandardModel$eaa8308e
   */
  ['measureVoList']?: StandardModel$5df2010c[]
}

/**
 *
 * @summary StandardModel$fafc4542
 * @interface StandardModel$fafc4542
 */
export interface StandardModel$fafc4542 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$fafc4542
   */
  ['batchCode']?: string
  /**
   * 碳排总量
   * @type { number }
   * @memberof StandardModel$fafc4542
   */
  ['carbonEmissions']?: number
  /**
   * 碳指标所有者
   * @type { string[] }
   * @memberof StandardModel$fafc4542
   */
  ['carbonIndexOwner']?: string[]
  /**
   * 抵消凭证
   * @type { CarbonProof[] }
   * @memberof StandardModel$fafc4542
   */
  ['carbonProofList']?: CarbonProof[]
  /**
   * 购买碳指标数量
   * @type { number }
   * @memberof StandardModel$fafc4542
   */
  ['carbonQuantity']?: number
  /**
   * 碳指标类型
   * @type { string }
   * @memberof StandardModel$fafc4542
   */
  ['carbonType']?: string
  /**
   * 主体
   * @type { string }
   * @memberof StandardModel$fafc4542
   */
  ['companyName']?: string
  /**
   * 证书名称
   * @type { string }
   * @memberof StandardModel$fafc4542
   */
  ['fileName']?: string
  /**
   * 证书类型
   * @type { string }
   * @memberof StandardModel$fafc4542
   */
  ['fileType']?: string
  /**
   * 证书地址
   * @type { string }
   * @memberof StandardModel$fafc4542
   */
  ['fileUrl']?: string
  /**
   * 产品碳足迹证书编号
   * @type { string }
   * @memberof StandardModel$fafc4542
   */
  ['footprintCertificateNumber']?: string
  /**
   * 产品碳足迹报告编号
   * @type { string }
   * @memberof StandardModel$fafc4542
   */
  ['footprintReportNumber']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$fafc4542
   */
  ['listingCode']?: string
  /**
   * 中和项目编号
   * @type { string }
   * @memberof StandardModel$fafc4542
   */
  ['neutralCode']?: string
  /**
   * 订单列表
   * @type { string[] }
   * @memberof StandardModel$fafc4542
   */
  ['orderNumList']?: string[]
  /**
   * 产品数量
   * @type { number }
   * @memberof StandardModel$fafc4542
   */
  ['productCount']?: number
  /**
   * 单位产品的碳足迹
   * @type { number }
   * @memberof StandardModel$fafc4542
   */
  ['productFootprint']?: number
  /**
   * 产品型号
   * @type { string }
   * @memberof StandardModel$fafc4542
   */
  ['productMode']?: string
  /**
   * 产品名称
   * @type { string }
   * @memberof StandardModel$fafc4542
   */
  ['productName']?: string
}

/**
 *
 * @summary StandardModel$db99a4af
 * @interface StandardModel$db99a4af
 */
export interface StandardModel$db99a4af {
  /**
   * 批次编码
   * @type { string }
   * @memberof StandardModel$db99a4af
   */
  ['batchCode']?: string
  /**
   * 碳足迹量化批次名称
   * @type { string }
   * @memberof StandardModel$db99a4af
   */
  ['batchName']?: string
  /**
   * 碳排总量
   * @type { number }
   * @memberof StandardModel$db99a4af
   */
  ['carbonEmissions']?: number
  /**
   *
   * @type { string }
   * @memberof StandardModel$db99a4af
   */
  ['companyId']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$db99a4af
   */
  ['createBy']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$db99a4af
   */
  ['listingCode']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$db99a4af
   */
  ['neutralCode']?: string
  /**
   * 外围系统订单编号
   * @type { string[] }
   * @memberof StandardModel$db99a4af
   */
  ['orderNumList']?: string[]
  /**
   * 产品数量
   * @type { number }
   * @memberof StandardModel$db99a4af
   */
  ['productCount']?: number
  /**
   * 产品型号
   * @type { string }
   * @memberof StandardModel$db99a4af
   */
  ['productMode']?: string
  /**
   * 产品名称
   * @type { string }
   * @memberof StandardModel$db99a4af
   */
  ['productName']?: string
}

/**
 *
 * @summary StandardModel$5f772676
 * @interface StandardModel$5f772676
 */
export interface StandardModel$5f772676 {
  /**
   * 批次编码
   * @type { string }
   * @memberof StandardModel$5f772676
   */
  ['batchCode']?: string
  /**
   * 批次名称
   * @type { string }
   * @memberof StandardModel$5f772676
   */
  ['batchName']?: string
}

/**
 *
 * @summary StandardModel$bc12d19c
 * @interface StandardModel$bc12d19c
 */
export interface StandardModel$bc12d19c {
  /**
   * 碳足迹标准
   * @type { string }
   * @memberof StandardModel$bc12d19c
   */
  ['accountingStandard']?: string
  /**
   * 碳足迹报告url
   * @type { string }
   * @memberof StandardModel$bc12d19c
   */
  ['carbonFootprintReport']?: string
  /**
   * 证书url
   * @type { string }
   * @memberof StandardModel$bc12d19c
   */
  ['credentialUrl']?: string
  /**
   * 结束时间
   * @type { string }
   * @memberof StandardModel$bc12d19c
   */
  ['endTime']?: string
  /**
   * 起始时间
   * @type { string }
   * @memberof StandardModel$bc12d19c
   */
  ['startTime']?: string
  /**
   * 每功能单位碳足迹数值
   * @type { number }
   * @memberof StandardModel$bc12d19c
   */
  ['unitCarbonFootprint']?: number
}

/**
 *
 * @summary StandardModel$ded31d5e
 * @interface StandardModel$ded31d5e
 */
export interface StandardModel$ded31d5e {
  /**
   *
   * @type { string }
   * @memberof StandardModel$ded31d5e
   */
  ['statusCode']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$ded31d5e
   */
  ['statusName']?: string
}

/**
 *
 * @summary StandardModel$d2bc4854
 * @interface StandardModel$d2bc4854
 */
export interface StandardModel$d2bc4854 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$d2bc4854
   */
  ['batchCode']?: string
  /**
   * 碳排总量
   * @type { number }
   * @memberof StandardModel$d2bc4854
   */
  ['carbonEmissions']?: number
  /**
   * 碳指标所有者
   * @type { string[] }
   * @memberof StandardModel$d2bc4854
   */
  ['carbonIndexOwner']?: string[]
  /**
   * 抵消凭证
   * @type { CarbonProof[] }
   * @memberof StandardModel$d2bc4854
   */
  ['carbonProofList']?: CarbonProof[]
  /**
   * 购买碳指标数量
   * @type { number }
   * @memberof StandardModel$d2bc4854
   */
  ['carbonQuantity']?: number
  /**
   * 碳指标类型
   * @type { string }
   * @memberof StandardModel$d2bc4854
   */
  ['carbonType']?: string
  /**
   * 主体
   * @type { string }
   * @memberof StandardModel$d2bc4854
   */
  ['companyName']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$d2bc4854
   */
  ['listingCode']?: string
  /**
   * 中和项目编号
   * @type { string }
   * @memberof StandardModel$d2bc4854
   */
  ['neutralCode']?: string
  /**
   * 订单列表
   * @type { string[] }
   * @memberof StandardModel$d2bc4854
   */
  ['orderNumList']?: string[]
  /**
   * 产品数量
   * @type { number }
   * @memberof StandardModel$d2bc4854
   */
  ['productCount']?: number
  /**
   * 产品型号
   * @type { string }
   * @memberof StandardModel$d2bc4854
   */
  ['productMode']?: string
  /**
   * 产品名称
   * @type { string }
   * @memberof StandardModel$d2bc4854
   */
  ['productName']?: string
}

/**
 *
 * @summary StandardModel$3fb3d3d0
 * @interface StandardModel$3fb3d3d0
 */
export interface StandardModel$3fb3d3d0 {
  /**
   * 上传成功后文件的访问地址
   * @type { string }
   * @memberof StandardModel$3fb3d3d0
   */
  ['fileUrl']?: string
  /**
   * 上传文件请求类型
   * @type { string }
   * @memberof StandardModel$3fb3d3d0
   */
  ['requestMethod']?: string
  /**
   * 上传服务接口地址
   * @type { string }
   * @memberof StandardModel$3fb3d3d0
   */
  ['serviceUrl']?: string
  /**
   * ContentType类型
   * @type { string }
   * @memberof StandardModel$3fb3d3d0
   */
  ['uploadContentType']?: string
  /**
   * 文件上传类型oss/gofastdfs
   * @type { string }
   * @memberof StandardModel$3fb3d3d0
   */
  ['uploadEnvironmentFlag']?: string
  /**
   *
   * @type { UploadFormDataVO }
   * @memberof StandardModel$3fb3d3d0
   */
  ['uploadFormData']?: UploadFormDataVO
  /**
   *
   * @type { StandardModel$4e11816a }
   * @memberof StandardModel$3fb3d3d0
   */
  ['uploadHeaders']?: StandardModel$4e11816a
}

/**
 *
 * @summary StandardModel$52e8942d
 * @interface StandardModel$52e8942d
 */
export interface StandardModel$52e8942d {
  /**
   * bom清单上传标识编码
   * @type { string }
   * @memberof StandardModel$52e8942d
   */
  ['dealCode']?: string
  /**
   * 产品图片
   * @type { string }
   * @memberof StandardModel$52e8942d
   */
  ['picUrl']?: string
  /**
   * 产品型号
   * @type { string }
   * @memberof StandardModel$52e8942d
   */
  ['productMode']: string
  /**
   * 产品名称
   * @type { string }
   * @memberof StandardModel$52e8942d
   */
  ['productName']: string
  /**
   * 产品类别
   * @type { string }
   * @memberof StandardModel$52e8942d
   */
  ['productType']: string
}

/**
 *
 * @summary StandardModel$515dc2dd
 * @interface StandardModel$515dc2dd
 */
export interface StandardModel$515dc2dd {
  /**
   * 产品碳足迹核算标准 0：《ISO14067 温室气体-产品碳足迹量化要求及指南》 1：《PAS 2050 商品和服务在生命周期内的温室气体排放评价规范》 2：自定义
   * @type { string }
   * @memberof StandardModel$515dc2dd
   */
  ['accountingStandard']: string
  /**
   * 审核方法 0：B2B 1：B2C 2：自定义
   * @type { string }
   * @memberof StandardModel$515dc2dd
   */
  ['auditMethod']?: string
  /**
   * 批次编码
   * @type { string }
   * @memberof StandardModel$515dc2dd
   */
  ['batchCode']: string
  /**
   * 生命周期集合
   * @type { StandardModel$2a327e1b[] }
   * @memberof StandardModel$515dc2dd
   */
  ['configDTOList']: StandardModel$2a327e1b[]
  /**
   * 产品唯一标识
   * @type { string }
   * @memberof StandardModel$515dc2dd
   */
  ['modeCode']: string
}

/**
 *
 * @summary StandardModel$c64131d4
 * @interface StandardModel$c64131d4
 */
export interface StandardModel$c64131d4 {
  /**
   * 批次编码
   * @type { string }
   * @memberof StandardModel$c64131d4
   */
  ['batchCode']?: string
  /**
   * 排查报告文件名
   * @type { string }
   * @memberof StandardModel$c64131d4
   */
  ['checkReportName']?: string
  /**
   * 排查报告地址
   * @type { string }
   * @memberof StandardModel$c64131d4
   */
  ['checkReportUrl']?: string
  /**
   * 结束时间
   * @type { string }
   * @memberof StandardModel$c64131d4
   */
  ['endTime']?: string
  /**
   * 能源消耗数据
   * @type { SaveEnergyConsumeDTO[] }
   * @memberof StandardModel$c64131d4
   */
  ['energyConsumeList']?: SaveEnergyConsumeDTO[]
  /**
   * 碳排范围一
   * @type { number }
   * @memberof StandardModel$c64131d4
   */
  ['firstScope']?: number
  /**
   * id
   * @type { number }
   * @memberof StandardModel$c64131d4
   */
  ['id']?: number
  /**
   * 物理分配类型 physics_01:重量 physics_02:体积 physics_03:数量 physics_04:尺寸
   * @type { string }
   * @memberof StandardModel$c64131d4
   */
  ['physicsType']?: string
  /**
   * 量化依据 0:排查报告 1:量化项目计算
   * @type { number }
   * @memberof StandardModel$c64131d4
   */
  ['quantifyBasis']: number
  /**
   * 物理分配原因
   * @type { string }
   * @memberof StandardModel$c64131d4
   */
  ['reason']?: string
  /**
   * 碳排范围二
   * @type { number }
   * @memberof StandardModel$c64131d4
   */
  ['secondScope']?: number
  /**
   * 分摊方式 0:物理分配 1:经济分配 2:不分配
   * @type { number }
   * @memberof StandardModel$c64131d4
   */
  ['shareType']?: number
  /**
   * 起始时间
   * @type { string }
   * @memberof StandardModel$c64131d4
   */
  ['startTime']?: string
  /**
   * 仓储名字
   * @type { string }
   * @memberof StandardModel$c64131d4
   */
  ['storageName']: string
  /**
   * 碳排范围三
   * @type { number }
   * @memberof StandardModel$c64131d4
   */
  ['thirdScope']?: number
  /**
   * 周转量
   * @type { number }
   * @memberof StandardModel$c64131d4
   */
  ['turnoverAnnual']?: number
  /**
   * 周转量单位
   * @type { string }
   * @memberof StandardModel$c64131d4
   */
  ['turnoverAnnualUnit']?: string
  /**
   * 产值比例
   * @type { number }
   * @memberof StandardModel$c64131d4
   */
  ['valueMix']?: number
  /**
   * 重量占比
   * @type { number }
   * @memberof StandardModel$c64131d4
   */
  ['weightMix']?: number
}

/**
 *
 * @summary StandardModel$101a2398
 * @interface StandardModel$101a2398
 */
export interface StandardModel$101a2398 {
  /**
   * 批次编号
   * @type { string }
   * @memberof StandardModel$101a2398
   */
  ['batchCode']: string
  /**
   * 单位热值含碳量
   * @type { number }
   * @memberof StandardModel$101a2398
   */
  ['carbonContent']?: number
  /**
   * 碳氧化率
   * @type { number }
   * @memberof StandardModel$101a2398
   */
  ['carbonOxidationRate']?: number
  /**
   * 能源消耗数据
   * @type { EnergyConsumeDTO[] }
   * @memberof StandardModel$101a2398
   */
  ['energyConsumeList']?: EnergyConsumeDTO[]
  /**
   * id,修改时毕传
   * @type { number }
   * @memberof StandardModel$101a2398
   */
  ['id']?: number
  /**
   * 产品使用寿命单位
   * @type { string }
   * @memberof StandardModel$101a2398
   */
  ['lifeUnit']?: string
  /**
   * 低位热值
   * @type { number }
   * @memberof StandardModel$101a2398
   */
  ['lowCalorificValue']?: number
  /**
   * 使用年限
   * @type { number }
   * @memberof StandardModel$101a2398
   */
  ['serviceLife']?: number
  /**
   * 功能单位
   * @type { string }
   * @memberof StandardModel$101a2398
   */
  ['unit']?: string
  /**
   * 使用阶段名称
   * @type { string }
   * @memberof StandardModel$101a2398
   */
  ['useName']: string
}

/**
 *
 * @summary StandardModel$262e0ecb
 * @interface StandardModel$262e0ecb
 */
export interface StandardModel$262e0ecb {
  /**
   * 批次编码
   * @type { string }
   * @memberof StandardModel$262e0ecb
   */
  ['batchCode']?: string
  /**
   * 请求参数集合
   * @type { any[] }
   * @memberof StandardModel$262e0ecb
   */
  ['cellDataList']?: any[]
}

/**
 *
 * @summary StandardModel$d3372629
 * @interface StandardModel$d3372629
 */
export interface StandardModel$d3372629 {
  /**
   * 批次编码
   * @type { string }
   * @memberof StandardModel$d3372629
   */
  ['batchCode']?: string
  /**
   * 过程id
   * @type { string }
   * @memberof StandardModel$d3372629
   */
  ['cellId']?: string
  /**
   * 输入数据
   * @type { ViewInputDataVO[] }
   * @memberof StandardModel$d3372629
   */
  ['inputData']?: ViewInputDataVO[]
  /**
   * 输出数据
   * @type { ViewOutputDataVO[] }
   * @memberof StandardModel$d3372629
   */
  ['outputData']?: ViewOutputDataVO[]
}

/**
 *
 * @summary StandardModel$58699bdd
 * @interface StandardModel$58699bdd
 */
export interface StandardModel$58699bdd {
  /**
   *
   * @type { StandardModel$1562c017 }
   * @memberof StandardModel$58699bdd
   */
  ['stageMaterialTransportRelDTO']?: StandardModel$1562c017
  /**
   * 材料运输方式
   * @type { StandardModel$b1bda0cc[] }
   * @memberof StandardModel$58699bdd
   */
  ['stageRawMaterialTransportDTOList']?: StandardModel$b1bda0cc[]
}

/**
 *
 * @summary StandardModel$1562c017
 * @interface StandardModel$1562c017
 */
export interface StandardModel$1562c017 {
  /**
   * 数量
   * @type { number }
   * @memberof StandardModel$1562c017
   */
  ['amount']?: number
  /**
   * 批次编码
   * @type { string }
   * @memberof StandardModel$1562c017
   */
  ['batchCode']?: string
  /**
   * id,修改时必传
   * @type { number }
   * @memberof StandardModel$1562c017
   */
  ['id']?: number
  /**
   * 单位
   * @type { string }
   * @memberof StandardModel$1562c017
   */
  ['productUnit']?: string
}

/**
 *
 * @summary StandardModel$b1bda0cc
 * @interface StandardModel$b1bda0cc
 */
export interface StandardModel$b1bda0cc {
  /**
   * 载重
   * @type { string }
   * @memberof StandardModel$b1bda0cc
   */
  ['carLoad']?: string
  /**
   * 压气站/增压站数量
   * @type { number }
   * @memberof StandardModel$b1bda0cc
   */
  ['compressorStation']?: number
  /**
   * 燃料数据
   * @type { StandardModel$c89ee63c[] }
   * @memberof StandardModel$b1bda0cc
   */
  ['energyConsumeDTOList']?: StandardModel$c89ee63c[]
  /**
   * 燃料数据
   * @type { StandardModel$c89ee63c[] }
   * @memberof StandardModel$b1bda0cc
   */
  ['energyConsumeVOList']?: StandardModel$c89ee63c[]
  /**
   * 燃料类型
   * @type { string }
   * @memberof StandardModel$b1bda0cc
   */
  ['fuelType']?: string
  /**
   * 管线(逆止阀)数量
   * @type { number }
   * @memberof StandardModel$b1bda0cc
   */
  ['linePipelineNum']?: number
  /**
   * 计量站/分输站数量
   * @type { number }
   * @memberof StandardModel$b1bda0cc
   */
  ['meteringPipelineNum']?: number
  /**
   * 清管站数量
   * @type { number }
   * @memberof StandardModel$b1bda0cc
   */
  ['piggingPipelineNum']?: number
  /**
   * 省管网输送总量
   * @type { number }
   * @memberof StandardModel$b1bda0cc
   */
  ['totalPipelineNum']?: number
  /**
   * 省管网输送总量单位
   * @type { string }
   * @memberof StandardModel$b1bda0cc
   */
  ['totalPipelineUnit']?: string
  /**
   * 运输里程
   * @type { number }
   * @memberof StandardModel$b1bda0cc
   */
  ['transportMileage']?: number
  /**
   * 运输方式 0:陆运  1:水运 2:铁路 3:空运 4:管道
   * @type { number }
   * @memberof StandardModel$b1bda0cc
   */
  ['transportType']?: number
  /**
   * 计量方式 0:按运输里程 1:按燃烧消耗量
   * @type { number }
   * @memberof StandardModel$b1bda0cc
   */
  ['weighingMethod']?: number
}

/**
 *
 * @summary StandardModel$52c5f892
 * @interface StandardModel$52c5f892
 */
export interface StandardModel$52c5f892 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$52c5f892
   */
  ['batchCode']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$52c5f892
   */
  ['batchName']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$52c5f892
   */
  ['companyId']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$52c5f892
   */
  ['modeCode']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$52c5f892
   */
  ['productCode']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$52c5f892
   */
  ['productMode']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$52c5f892
   */
  ['productName']?: string
  /**
   *
   * @type { number }
   * @memberof StandardModel$52c5f892
   */
  ['unitCarbonEmissions']?: number
}

/**
 *
 * @summary StandardModel$cfebce00
 * @interface StandardModel$cfebce00
 */
export interface StandardModel$cfebce00 {
  /**
   * 当前页码
   * @type { number }
   * @memberof StandardModel$cfebce00
   */
  ['pageNum']: number
  /**
   * 每页大小
   * @type { number }
   * @memberof StandardModel$cfebce00
   */
  ['pageSize']: number
  /**
   * 租户id
   * @type { string }
   * @memberof StandardModel$cfebce00
   */
  ['tenantId']?: string
}

/**
 *
 * @summary StandardModel$14875a37
 * @interface StandardModel$14875a37
 */
export interface StandardModel$14875a37 {
  /**
   * modelName
   * @type { string }
   * @memberof StandardModel$14875a37
   */
  ['modelName']?: string
  /**
   * modelType
   * @type { string }
   * @memberof StandardModel$14875a37
   */
  ['modelType']?: string
  /**
   * 当前页码
   * @type { number }
   * @memberof StandardModel$14875a37
   */
  ['pageNum']: number
  /**
   * 每页大小
   * @type { number }
   * @memberof StandardModel$14875a37
   */
  ['pageSize']: number
}

/**
 *
 * @summary StandardModel$aa6acc18
 * @interface StandardModel$aa6acc18
 */
export interface StandardModel$aa6acc18 {
  /**
   * 结束时间 YYYY-MM
   * @type { string }
   * @memberof StandardModel$aa6acc18
   */
  ['endDate']?: string
  /**
   * planCode集合
   * @type { string[] }
   * @memberof StandardModel$aa6acc18
   */
  ['planCodeList']?: string[]
  /**
   * 项目编码
   * @type { string }
   * @memberof StandardModel$aa6acc18
   */
  ['projectCode']?: string
  /**
   * 开始时间 YYYY-MM
   * @type { string }
   * @memberof StandardModel$aa6acc18
   */
  ['startDate']?: string
}

/**
 *
 * @summary StandardModel$9eb4fc9c
 * @interface StandardModel$9eb4fc9c
 */
export interface StandardModel$9eb4fc9c {
  /**
   * 碳排量
   * @type { number }
   * @memberof StandardModel$9eb4fc9c
   */
  ['carbonEmission']?: number
  /**
   * 数据层级
   * @type { number }
   * @memberof StandardModel$9eb4fc9c
   */
  ['dataLevel']?: number
  /**
   * 下个阶段数据集合
   * @type { StandardModel$9eb4fc9c[] }
   * @memberof StandardModel$9eb4fc9c
   */
  ['nextStepList']?: StandardModel$9eb4fc9c[]
  /**
   * 编码
   * @type { string }
   * @memberof StandardModel$9eb4fc9c
   */
  ['selfCode']?: string
  /**
   * 阶段名称
   * @type { string }
   * @memberof StandardModel$9eb4fc9c
   */
  ['stepName']?: string
}

/**
 *
 * @summary StandardModel$c89ee63c
 * @interface StandardModel$c89ee63c
 */
export interface StandardModel$c89ee63c {
  /**
   * 消耗量
   * @type { number }
   * @memberof StandardModel$c89ee63c
   */
  ['consumeAmount']?: number
  /**
   * 燃料类型
   * @type { string }
   * @memberof StandardModel$c89ee63c
   */
  ['fuelType']?: string
  /**
   * 单位
   * @type { string }
   * @memberof StandardModel$c89ee63c
   */
  ['fuelUnit']?: string
}

/**
 *
 * @summary StandardModel$2a327e1b
 * @interface StandardModel$2a327e1b
 */
export interface StandardModel$2a327e1b {
  /**
   * 角色编码
   * @type { string }
   * @memberof StandardModel$2a327e1b
   */
  ['dataEntryRole']?: string
  /**
   * 生命周期建模编码
   * @type { string }
   * @memberof StandardModel$2a327e1b
   */
  ['modelCode']?: string
  /**
   * 生命周期建模名称
   * @type { string }
   * @memberof StandardModel$2a327e1b
   */
  ['modelName']?: string
  /**
   * 周期id 0:原材料获取阶段 1:产品制造阶段 2:产品分销阶段 3:产品使用阶段
   * @type { string }
   * @memberof StandardModel$2a327e1b
   */
  ['productStep']?: string
}

/**
 *
 * @summary StandardModel$2dbfd5ea
 * @interface StandardModel$2dbfd5ea
 */
export interface StandardModel$2dbfd5ea {
  /**
   * 批次编码
   * @type { string }
   * @memberof StandardModel$2dbfd5ea
   */
  ['batchCode']?: string
  /**
   * 碳足迹量化批次名称
   * @type { string }
   * @memberof StandardModel$2dbfd5ea
   */
  ['batchName']?: string
  /**
   * 碳排放量
   * @type { number }
   * @memberof StandardModel$2dbfd5ea
   */
  ['carbonEmissions']?: number
  /**
   * 生产企业id
   * @type { string }
   * @memberof StandardModel$2dbfd5ea
   */
  ['companyId']?: string
  /**
   * 需方名称
   * @type { string }
   * @memberof StandardModel$2dbfd5ea
   */
  ['demanderName']?: string
  /**
   * 主键
   * @type { number }
   * @memberof StandardModel$2dbfd5ea
   */
  ['id']?: number
  /**
   *  所属中和项目，项目状态 0:抵消中 1:抵消失败 2:待发起认证 3:认证中 4:认证失败 5:已认证
   * @type { number }
   * @memberof StandardModel$2dbfd5ea
   */
  ['neutralRecordStatus']?: number
  /**
   * 中和状态 0 待中和 1已中和
   * @type { number }
   * @memberof StandardModel$2dbfd5ea
   */
  ['neutralStatus']?: number
  /**
   * 订单时间
   * @type { string }
   * @memberof StandardModel$2dbfd5ea
   */
  ['orderDate']?: string
  /**
   * 外围系统订单编号
   * @type { string }
   * @memberof StandardModel$2dbfd5ea
   */
  ['orderNum']?: string
  /**
   * 产品数量
   * @type { number }
   * @memberof StandardModel$2dbfd5ea
   */
  ['productCount']?: number
  /**
   * 产品型号
   * @type { string }
   * @memberof StandardModel$2dbfd5ea
   */
  ['productMode']?: string
  /**
   * 产品名称
   * @type { string }
   * @memberof StandardModel$2dbfd5ea
   */
  ['productName']?: string
  /**
   * 产品单位
   * @type { string }
   * @memberof StandardModel$2dbfd5ea
   */
  ['productUnit']?: string
  /**
   * 供方名称
   * @type { string }
   * @memberof StandardModel$2dbfd5ea
   */
  ['supplierName']?: string
}

/**
 *
 * @summary StandardModel$78f6de3a
 * @interface StandardModel$78f6de3a
 */
export interface StandardModel$78f6de3a {
  /**
   * 年度产量
   * @type { number }
   * @memberof StandardModel$78f6de3a
   */
  ['annualOutput']?: number
  /**
   * 年度产量单位
   * @type { string }
   * @memberof StandardModel$78f6de3a
   */
  ['annualUnit']?: string
  /**
   * 年度碳排总量
   * @type { number }
   * @memberof StandardModel$78f6de3a
   */
  ['carbonEmissionsAnnual']?: number
  /**
   * 碳排放单位 carbon_01 kgCO2e carbon_02 tCO2e
   * @type { string }
   * @memberof StandardModel$78f6de3a
   */
  ['carbonUnit']?: string
  /**
   * 盘查报告地址
   * @type { string }
   * @memberof StandardModel$78f6de3a
   */
  ['checkReportUrl']?: string
  /**
   * 能量消耗code(修改带)
   * @type { string }
   * @memberof StandardModel$78f6de3a
   */
  ['consumeCode']?: string
  /**
   * 数据环节
   * @type { string }
   * @memberof StandardModel$78f6de3a
   */
  ['dataLink']?: string
  /**
   * 数据来源
   * @type { string }
   * @memberof StandardModel$78f6de3a
   */
  ['dataSource']?: string
  /**
   * 能源消耗数据
   * @type { SaveEnergyConsumeDTO[] }
   * @memberof StandardModel$78f6de3a
   */
  ['energyConsumeDTOList']?: SaveEnergyConsumeDTO[]
  /**
   * 排放因子值
   * @type { number }
   * @memberof StandardModel$78f6de3a
   */
  ['factorValue']?: number
  /**
   * 碳排范围一
   * @type { number }
   * @memberof StandardModel$78f6de3a
   */
  ['firstScope']?: number
  /**
   * id(修改带)
   * @type { number }
   * @memberof StandardModel$78f6de3a
   */
  ['id']?: number
  /**
   * 行业
   * @type { string }
   * @memberof StandardModel$78f6de3a
   */
  ['industry']?: string
  /**
   * 时间内材料产量
   * @type { number }
   * @memberof StandardModel$78f6de3a
   */
  ['materialOutput']?: number
  /**
   * 中类
   * @type { string }
   * @memberof StandardModel$78f6de3a
   */
  ['midClass']?: string
  /**
   * 物理分配类型 physics_01:重量 physics_02:体积 physics_03:数量 physics_04:尺寸
   * @type { string }
   * @memberof StandardModel$78f6de3a
   */
  ['physicsType']?: string
  /**
   * 材料型号
   * @type { string }
   * @memberof StandardModel$78f6de3a
   */
  ['rawMaterialModel']?: string
  /**
   * 材料名称
   * @type { string }
   * @memberof StandardModel$78f6de3a
   */
  ['rawMaterialName']?: string
  /**
   * 原因（物理）
   * @type { string }
   * @memberof StandardModel$78f6de3a
   */
  ['reason']?: string
  /**
   * 碳排范围二
   * @type { number }
   * @memberof StandardModel$78f6de3a
   */
  ['secondScope']?: number
  /**
   * 分摊方式 0:物理分配 1:经济分配 2:不分配
   * @type { number }
   * @memberof StandardModel$78f6de3a
   */
  ['shareType']?: number
  /**
   * 排放因子来源  0:盘查计算 1:量化项目计算 2:直接引用
   * @type { number }
   * @memberof StandardModel$78f6de3a
   */
  ['source']?: number
  /**
   * 推荐等级（0.5 半星  1 一星）
   * @type { number }
   * @memberof StandardModel$78f6de3a
   */
  ['starLevel']?: number
  /**
   * 碳排范围三
   * @type { number }
   * @memberof StandardModel$78f6de3a
   */
  ['thirdScope']?: number
  /**
   * 计量时间单位(0 月度 1 季度 2 年度)
   * @type { number }
   * @memberof StandardModel$78f6de3a
   */
  ['timeUnit']?: number
  /**
   * 产值占比（经济）
   * @type { number }
   * @memberof StandardModel$78f6de3a
   */
  ['valueMix']?: number
  /**
   * 重量占比（物理）
   * @type { number }
   * @memberof StandardModel$78f6de3a
   */
  ['weightMix']?: number
  /**
   * 年份
   * @type { number }
   * @memberof StandardModel$78f6de3a
   */
  ['year']?: number
}

/**
 *
 * @summary StandardModel$cc1d820e
 * @interface StandardModel$cc1d820e
 */
export interface StandardModel$cc1d820e {
  /**
   * 挂牌均价
   * @type { number }
   * @memberof StandardModel$cc1d820e
   */
  ['listingAveragePrice']?: number
  /**
   * 上一个交易日期
   * @type { string }
   * @memberof StandardModel$cc1d820e
   */
  ['tradeDate']?: string
}

/**
 *
 * @summary StandardModel$897b3d93
 * @interface StandardModel$897b3d93
 */
export interface StandardModel$897b3d93 {
  /**
   * bom清单上传标识编码
   * @type { string }
   * @memberof StandardModel$897b3d93
   */
  ['dealCode']?: string
  /**
   * modeCode
   * @type { string }
   * @memberof StandardModel$897b3d93
   */
  ['modeCode']: string
  /**
   * 产品图片
   * @type { string }
   * @memberof StandardModel$897b3d93
   */
  ['picUrl']?: string
  /**
   * productCode
   * @type { string }
   * @memberof StandardModel$897b3d93
   */
  ['productCode']: string
  /**
   * 产品型号
   * @type { string }
   * @memberof StandardModel$897b3d93
   */
  ['productMode']?: string
  /**
   * 产品名称
   * @type { string }
   * @memberof StandardModel$897b3d93
   */
  ['productName']: string
  /**
   * 产品类别
   * @type { string }
   * @memberof StandardModel$897b3d93
   */
  ['productType']: string
}

/**
 *
 * @summary StandardModel$1383433b
 * @interface StandardModel$1383433b
 */
export interface StandardModel$1383433b {
  /**
   *
   * @type { string }
   * @memberof StandardModel$1383433b
   */
  ['demanderName']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$1383433b
   */
  ['supplierName']?: string
}

/**
 *
 * @summary StandardModel$a64269f1
 * @interface StandardModel$a64269f1
 */
export interface StandardModel$a64269f1 {
  /**
   * 机构编码
   * @type { string }
   * @memberof StandardModel$a64269f1
   */
  ['institutionCode']?: string
  /**
   * 机构名称
   * @type { string }
   * @memberof StandardModel$a64269f1
   */
  ['institutionName']?: string
  /**
   * 租户id
   * @type { string }
   * @memberof StandardModel$a64269f1
   */
  ['institutionTenantId']?: string
}

/**
 *
 * @summary StandardModel$439c1950
 * @interface StandardModel$439c1950
 */
export interface StandardModel$439c1950 {
  /**
   * 失败信息
   * @type { string }
   * @memberof StandardModel$439c1950
   */
  ['errorMsg']?: string
  /**
   * 进程处理状态1:处理中 2 成功 3 失败
   * @type { number }
   * @memberof StandardModel$439c1950
   */
  ['processStatus']?: number
}

/**
 *
 * @summary StandardModel$6e9255e9
 * @interface StandardModel$6e9255e9
 */
export interface StandardModel$6e9255e9 {
  /**
   * 父级code, 产品类别：product_type；产品计量单位：material_unit；产品使用寿命单位：product_used_life
   * @type { string[] }
   * @memberof StandardModel$6e9255e9
   */
  ['values']: string[]
}

/**
 *
 * @summary StandardModel$aeff53ef
 * @interface StandardModel$aeff53ef
 */
export interface StandardModel$aeff53ef {
  /**
   * id
   * @type { number }
   * @memberof StandardModel$aeff53ef
   */
  ['id']: number
}

/**
 *
 * @summary StandardModel$26dd47d9
 * @interface StandardModel$26dd47d9
 */
export interface StandardModel$26dd47d9 {
  /**
   * 消耗量
   * @type { number }
   * @memberof StandardModel$26dd47d9
   */
  ['activityData']?: number
  /**
   * 消耗量单位
   * @type { string }
   * @memberof StandardModel$26dd47d9
   */
  ['activityUnit']?: string
  /**
   * 碳排量
   * @type { number }
   * @memberof StandardModel$26dd47d9
   */
  ['carbonEmission']?: number
  /**
   * 能源编码
   * @type { string }
   * @memberof StandardModel$26dd47d9
   */
  ['exampleCode']?: string
  /**
   * 能源类型
   * @type { string }
   * @memberof StandardModel$26dd47d9
   */
  ['exampleName']?: string
}

/**
 *
 * @summary StandardModel$4d9b5b84
 * @interface StandardModel$4d9b5b84
 */
export interface StandardModel$4d9b5b84 {
  /**
   *
   * @type { string }
   * @memberof StandardModel$4d9b5b84
   */
  ['code']?: string
  /**
   *
   * @type { any[] }
   * @memberof StandardModel$4d9b5b84
   */
  ['data']?: any[]
  /**
   *
   * @type { string }
   * @memberof StandardModel$4d9b5b84
   */
  ['message']?: string
  /**
   *
   * @type { number }
   * @memberof StandardModel$4d9b5b84
   */
  ['pageNum']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$4d9b5b84
   */
  ['pageSize']?: number
  /**
   *
   * @type { boolean }
   * @memberof StandardModel$4d9b5b84
   */
  ['success']?: boolean
  /**
   *
   * @type { number }
   * @memberof StandardModel$4d9b5b84
   */
  ['totalCount']?: number
  /**
   *
   * @type { number }
   * @memberof StandardModel$4d9b5b84
   */
  ['totalPages']?: number
}

/**
 *
 * @summary StandardModel$95603619
 * @interface StandardModel$95603619
 */
export interface StandardModel$95603619 {
  /**
   * 批次编码
   * @type { string }
   * @memberof StandardModel$95603619
   */
  ['batchCode']?: string
  /**
   * 碳足迹量化批次名称
   * @type { string }
   * @memberof StandardModel$95603619
   */
  ['batchName']?: string
  /**
   * 碳排总量
   * @type { number }
   * @memberof StandardModel$95603619
   */
  ['carbonEmissions']?: number
  /**
   * 碳指标类型
   * @type { string }
   * @memberof StandardModel$95603619
   */
  ['carbonType']?: string
  /**
   * 生产企业id
   * @type { string }
   * @memberof StandardModel$95603619
   */
  ['companyId']?: string
  /**
   * 创建人
   * @type { string }
   * @memberof StandardModel$95603619
   */
  ['createBy']?: string
  /**
   * 创建时间
   * @type { string }
   * @memberof StandardModel$95603619
   */
  ['createTime']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$95603619
   */
  ['demanderName']?: string
  /**
   * 买方名称列表
   * @type { string[] }
   * @memberof StandardModel$95603619
   */
  ['demanderNameList']?: string[]
  /**
   * 主键
   * @type { number }
   * @memberof StandardModel$95603619
   */
  ['id']?: number
  /**
   * 交易挂牌编码
   * @type { string }
   * @memberof StandardModel$95603619
   */
  ['listingCode']?: string
  /**
   * 中和项目编号
   * @type { string }
   * @memberof StandardModel$95603619
   */
  ['neutralCode']?: string
  /**
   * 抵消认证状态 0:抵消中 1:抵消失败 2:待发起认证 3:认证中 4:认证失败 5:已认证
   * @type { number }
   * @memberof StandardModel$95603619
   */
  ['neutralStatus']?: number
  /**
   * 订单列表
   * @type { string[] }
   * @memberof StandardModel$95603619
   */
  ['orderNumList']?: string[]
  /**
   * 产品数量
   * @type { number }
   * @memberof StandardModel$95603619
   */
  ['productCount']?: number
  /**
   * 产品型号
   * @type { string }
   * @memberof StandardModel$95603619
   */
  ['productMode']?: string
  /**
   * 产品名称
   * @type { string }
   * @memberof StandardModel$95603619
   */
  ['productName']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$95603619
   */
  ['supplierName']?: string
  /**
   * 卖方名称列表
   * @type { string[] }
   * @memberof StandardModel$95603619
   */
  ['supplierNameList']?: string[]
}

/**
 *
 * @summary StandardModel$a5768f5c
 * @interface StandardModel$a5768f5c
 */
export interface StandardModel$a5768f5c {
  /**
   *
   * @type { string }
   * @memberof StandardModel$a5768f5c
   */
  ['companyId']?: string
  /**
   * 买方名称列表
   * @type { string[] }
   * @memberof StandardModel$a5768f5c
   */
  ['demanderNameList']?: string[]
  /**
   * 中和项目编号
   * @type { string }
   * @memberof StandardModel$a5768f5c
   */
  ['neutralCode']?: string
  /**
   * 抵消认证状态 0:抵消中 1:抵消失败 2:待发起认证 3:认证中 4:认证失败 5:已认证
   * @type { number }
   * @memberof StandardModel$a5768f5c
   */
  ['neutralStatus']?: number
  /**
   * 页面编码
   * @type { number }
   * @memberof StandardModel$a5768f5c
   */
  ['pageNum']: number
  /**
   * 页面条数
   * @type { number }
   * @memberof StandardModel$a5768f5c
   */
  ['pageSize']: number
  /**
   * 产品名称
   * @type { string }
   * @memberof StandardModel$a5768f5c
   */
  ['productName']?: string
  /**
   * 卖方名称列表
   * @type { string[] }
   * @memberof StandardModel$a5768f5c
   */
  ['supplierNameList']?: string[]
}

/**
 *
 * @summary StandardModel$15a88b0b
 * @interface StandardModel$15a88b0b
 */
export interface StandardModel$15a88b0b {
  /**
   * 过程id
   * @type { string }
   * @memberof StandardModel$15a88b0b
   */
  ['cellId']?: string
  /**
   *
   * @type { string }
   * @memberof StandardModel$15a88b0b
   */
  ['cellName']?: string
  /**
   * 输入数据
   * @type { ViewInputDataDTO[] }
   * @memberof StandardModel$15a88b0b
   */
  ['inputData']?: ViewInputDataDTO[]
  /**
   * 输出数据
   * @type { ViewOutputDataDTO[] }
   * @memberof StandardModel$15a88b0b
   */
  ['outputData']?: ViewOutputDataDTO[]
}

/**
 *
 * @summary StandardRequestBody$84301a20
 * @interface StandardRequestBody$84301a20
 * @description materialInfoDTO
 * @required true
 */
export type StandardRequestBody$84301a20 = StandardModel$84301a20

/**
 *
 * @summary StandardRequestBody$78f6de3a
 * @interface StandardRequestBody$78f6de3a
 * @description factoryInfoDTO
 * @required true
 */
export type StandardRequestBody$78f6de3a = StandardModel$78f6de3a

/**
 *
 * @summary StandardRequestBody$aa6acc18
 * @interface StandardRequestBody$aa6acc18
 * @description queryProjectCarbonReqDTO
 * @required true
 */
export type StandardRequestBody$aa6acc18 = StandardModel$aa6acc18

/**
 *
 * @summary StandardRequestBody$c64131d4
 * @interface StandardRequestBody$c64131d4
 * @description saveStorageDTO
 * @required true
 */
export type StandardRequestBody$c64131d4 = StandardModel$c64131d4

/**
 *
 * @summary StandardRequestBody$b07cf829
 * @interface StandardRequestBody$b07cf829
 * @description saveTransportDTO
 * @required true
 */
export type StandardRequestBody$b07cf829 = StandardModel$b07cf829

/**
 *
 * @summary computeCarbonEmissionPerStageUsingPOSTBatchcode
 * @interface computeCarbonEmissionPerStageUsingPOSTBatchcode
 * @description batchCode
 * @required
 */
export interface computeCarbonEmissionPerStageUsingPOSTBatchcode {}

/**
 *
 * @summary extractDataUsingPOST
 * @interface extractDataUsingPOST
 * @description
 * @required true
 */
export interface extractDataUsingPOST {}

/**
 *
 * @summary StandardRequestBody$262e0ecb
 * @interface StandardRequestBody$262e0ecb
 * @description addProduceDTO
 * @required true
 */
export type StandardRequestBody$262e0ecb = StandardModel$262e0ecb

/**
 *
 * @summary StandardRequestBody$58699bdd
 * @interface StandardRequestBody$58699bdd
 * @description stageRawMaterialTransportListDTO
 * @required true
 */
export type StandardRequestBody$58699bdd = StandardModel$58699bdd

/**
 *
 * @summary StandardRequestBody$101a2398
 * @interface StandardRequestBody$101a2398
 * @description saveUseDTO
 * @required true
 */
export type StandardRequestBody$101a2398 = StandardModel$101a2398

/**
 *
 * @summary StandardRequestBody$43cac21f
 * @interface StandardRequestBody$43cac21f
 * @description requestParam
 * @required true
 */
export type StandardRequestBody$43cac21f = StandardModel$43cac21f

/**
 * @tags 开发自测接口
 * @summary 计算水运
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontComputeBatchWater = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListWaterShipCalculateCarbonRes> => {
  let local_url = '/api/front/compute/batchWater'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListWaterShipCalculateCarbonRes>
}

/**
 * @tags 开发自测接口
 * @summary computeCarbonEmissionPerStage
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontComputeComputeCarbonEmissionPerStage = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<number> => {
  let local_url = '/api/front/compute/computeCarbonEmissionPerStage'

  let local_params = {}
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
 * @tags 开发自测接口
 * @summary 计算Excel导入
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontComputeComputeExcelEnergyConsume = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<PagedRdfaResultIndustryCalculateCarbonRes> => {
  let local_url = '/api/front/compute/computeExcelEnergyConsume'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<PagedRdfaResultIndustryCalculateCarbonRes>
}

/**
 * @tags 开发自测接口
 * @summary 陆运按照能量消耗计算
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontComputeComputeLandEnergy = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListSceneCalculateResultRes> => {
  let local_url = '/api/front/compute/computeLandEnergy'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListSceneCalculateResultRes>
}

/**
 * @tags 开发自测接口
 * @summary computeProductUnitCarbonTest
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontComputeComputeProductUnitCarbonTest = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<any> => {
  let local_url = '/api/front/compute/computeProductUnitCarbonTest'

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
 * @tags 开发自测接口
 * @summary computeStorage
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontComputeComputeStorage = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultStageComputeDTO> => {
  let local_url = '/api/front/compute/computeStorage'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultStageComputeDTO>
}

/**
 * @tags 开发自测接口
 * @summary computeStorageMix
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontComputeComputeStorageMix = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<any> => {
  let local_url = '/api/front/compute/computeStorageMix'

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
 * @tags 开发自测接口
 * @summary computeTest
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontComputeComputeTest = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultStageComputeDTO> => {
  let local_url = '/api/front/compute/computeTest'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultStageComputeDTO>
}

/**
 * @tags 开发自测接口
 * @summary computeTransportMix
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontComputeComputeTransportMix = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<any> => {
  let local_url = '/api/front/compute/computeTransportMix'

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
 * @tags 开发自测接口
 * @summary computeUse
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontComputeComputeUse = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultStageComputeDTO> => {
  let local_url = '/api/front/compute/computeUse'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultStageComputeDTO>
}

/**
 * @tags 开发自测接口
 * @summary computeUseMix
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontComputeComputeUseMix = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<any> => {
  let local_url = '/api/front/compute/computeUseMix'

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
 * @tags 开发自测接口
 * @summary computeWaste
 * @param {ComputeWasteDTO} [body] computeWasteDTO
 * @param {AxiosInstance} local_options
 */
export const postApiFrontComputeComputeWaste = async (
  body?: ComputeWasteDTO,
  local_options?: AxiosInstance
): Promise<ComputeWasteDTO> => {
  let local_url = '/api/front/compute/computeWaste'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<ComputeWasteDTO>
}

/**
 * @tags 开发自测接口
 * @summary createReport
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontComputeCreateReport = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/compute/createReport'

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
 * @tags 开发自测接口
 * @summary deleteReportCache
 * @param {string} batchCode batchCode
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontComputeDeleteReportCache = async (
  batchCode: string,
  body?: any,
  local_options?: AxiosInstance
): Promise<boolean> => {
  let local_url = '/api/front/compute/deleteReportCache'

  let local_params = { batchCode }
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<boolean>
}

/**
 * @tags 开发自测接口
 * @summary getPlanInfoTree
 * @param {string} [body] tenantId
 * @param {AxiosInstance} local_options
 */
export const postApiFrontComputeGetPlanInfoTree = async (
  body?: string,
  local_options?: AxiosInstance
): Promise<WorkPlanTreeRes[][]> => {
  let local_url = '/api/front/compute/getPlanInfoTree'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<WorkPlanTreeRes[][]>
}

/**
 * @tags 开发自测接口
 * @summary getProjectCarbon
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontComputeGetProjectCarbon = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<StandardModel$26dd47d9[]> => {
  let local_url = '/api/front/compute/getProjectCarbon'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$26dd47d9[]>
}

/**
 * @tags 开发自测接口
 * @summary 陆运按照里程计算
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontComputeLandMileage = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListSceneCalculateResultRes> => {
  let local_url = '/api/front/compute/landMileage'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListSceneCalculateResultRes>
}

/**
 * @tags 开发自测接口
 * @summary 报表数据
 * @param {string} batchCode batchCode
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontComputeStatisticsReportData = async (
  batchCode?: string,
  body?: any,
  local_options?: AxiosInstance
): Promise<any> => {
  let local_url = '/api/front/compute/statisticsReportData'

  let local_params = { batchCode }
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
 * @tags 开发自测接口
 * @summary testDingding
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontComputeTestDingding = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<any> => {
  let local_url = '/api/front/compute/testDingding'

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
 * @tags 开发自测接口
 * @summary testPipe
 * @param {ComputePipelineDTO} [body] computePipelineDTO
 * @param {AxiosInstance} local_options
 */
export const postApiFrontComputeTestPipe = async (
  body?: ComputePipelineDTO,
  local_options?: AxiosInstance
): Promise<ComputeResultDTO[]> => {
  let local_url = '/api/front/compute/testPipe'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<ComputeResultDTO[]>
}

/**
 * @tags 开发自测接口
 * @summary testSelectProduceInfo
 * @param {StandardModel$52c5f892[]} [body] list
 * @param {AxiosInstance} local_options
 */
export const postApiFrontComputeTestSelectProduceInfo = async (
  body?: StandardModel$52c5f892[],
  local_options?: AxiosInstance
): Promise<StandardModel$edd2da34> => {
  let local_url = '/api/front/compute/testSelectProduceInfo'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$edd2da34>
}

/**
 * @tags 开发自测接口
 * @summary testSummary
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontComputeTestSummary = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<ReportSummary[]> => {
  let local_url = '/api/front/compute/testSummary'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<ReportSummary[]>
}

/**
 * @tags 开发自测接口
 * @summary 计算水运
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontComputeWater = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultWaterShipCalculateCarbonRes> => {
  let local_url = '/api/front/compute/water'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultWaterShipCalculateCarbonRes>
}

/**
 * @tags 核查
 * @summary 删除证明文件
 * @param {number} id id
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontExamineDeleteProveFile = async (
  id: number,
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/examine/deleteProveFile'

  let local_params = { id }
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
 * @tags 核查
 * @summary 证明文件下载
 * @param {number} id id
 * @param {AxiosInstance} local_options
 */
export const getApiFrontExamineDownload = async (
  id: number,
  local_options?: AxiosInstance
): Promise<any> => {
  let local_url = '/api/front/examine/download'

  let local_params = { id }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<any>
}

/**
 * @tags 核查
 * @summary 查询核查机构
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontExamineGetExamineOrg = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListExamineOrgResVO> => {
  let local_url = '/api/front/examine/getExamineOrg'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListExamineOrgResVO>
}

/**
 * @tags 核查
 * @summary 查询审核结果
 * @param {QueryExamineResultReqDTO} [body] queryExamineResultReqDTO
 * @param {AxiosInstance} local_options
 */
export const postApiFrontExamineGetExamineResult = async (
  body?: QueryExamineResultReqDTO,
  local_options?: AxiosInstance
): Promise<RdfaResultExamineResultVO> => {
  let local_url = '/api/front/examine/getExamineResult'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultExamineResultVO>
}

/**
 * @tags 核查
 * @summary 查询产品信息
 * @param {string} batchCode batchCode
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontExamineGetProductInfo = async (
  batchCode: string,
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultReportVO> => {
  let local_url = '/api/front/examine/getProductInfo'

  let local_params = { batchCode }
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultReportVO>
}

/**
 * @tags 核查
 * @summary 查询证明文件
 * @param {string} batchCode batchCode
 * @param {string} itemCode itemCode
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontExamineGetProveFile = async (
  batchCode: string,
  itemCode: string,
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListExamineListFileVO> => {
  let local_url = '/api/front/examine/getProveFile'

  let local_params = { batchCode, itemCode }
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListExamineListFileVO>
}

/**
 * @tags 核查
 * @summary 重新发起审核
 * @param {RestartExamineReqDTO} [body] restartExamineReqDTO
 * @param {AxiosInstance} local_options
 */
export const postApiFrontExamineRestartExamine = async (
  body?: RestartExamineReqDTO,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/examine/restartExamine'

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
 * @tags 核查
 * @summary 发起核查
 * @param {StartExamineReqDTO} [body] startExamineReqDTO
 * @param {AxiosInstance} local_options
 */
export const postApiFrontExamineStartExamine = async (
  body?: StartExamineReqDTO,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/examine/startExamine'

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
 * @tags 核查
 * @summary 上传证明文件
 * @param {UploadProveFileReqDTO} [body] uploadProveFileReqDTO
 * @param {AxiosInstance} local_options
 */
export const postApiFrontExamineUploadProveFile = async (
  body?: UploadProveFileReqDTO,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/examine/uploadProveFile'

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
 * @tags 碳排因子库-杨泽
 * @summary 删除碳排因子
 * @param {string} id id
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontFactoryInfoDelete = async (
  id: string,
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/factoryInfo/delete'

  let local_params = { id }
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
 * @tags 碳排因子库-杨泽
 * @summary 模板下载
 * @param {AxiosInstance} local_options
 */
export const getApiFrontFactoryInfoDownloadTemplate = async (
  local_options?: AxiosInstance
): Promise<RdfaResultString> => {
  let local_url = '/api/front/factoryInfo/download/template'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultString>
}

/**
 * @tags 碳排因子库-杨泽
 * @summary excel解析
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontFactoryInfoExtractData = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/factoryInfo/extractData'

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
 * @tags 碳排因子库-杨泽
 * @summary 行业列表
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontFactoryInfoIndustry = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<StandardModel$f2eef798> => {
  let local_url = '/api/front/factoryInfo/industry'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$f2eef798>
}

/**
 * @tags 碳排因子库-杨泽
 * @summary 新增碳排因子
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontFactoryInfoInsert = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/factoryInfo/insert'

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
 * @tags 碳排因子库-杨泽
 * @summary 查询碳排因子
 * @param {string} id id
 * @param {AxiosInstance} local_options
 */
export const getApiFrontFactoryInfoSelect = async (
  id?: string,
  local_options?: AxiosInstance
): Promise<StandardModel$06c13dc3> => {
  let local_url = '/api/front/factoryInfo/select'

  let local_params = { id }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$06c13dc3>
}

/**
 * @tags 碳排因子库-杨泽
 * @summary 根据中类查固体废料
 * @param {string} mediumCategory 中类名称
 * @param {AxiosInstance} local_options
 */
export const getApiFrontFactoryInfoSelectByMediumCategory = async (
  mediumCategory?: string,
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListDefinedEmissionFactorReq> => {
  let local_url = '/api/front/factoryInfo/selectByMediumCategory'

  let local_params = { mediumCategory }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListDefinedEmissionFactorReq>
}

/**
 * @tags 碳排因子库-杨泽
 * @summary 查询碳排因子-量化
 * @param {string} id 碳排因子id
 * @param {AxiosInstance} local_options
 */
export const getApiFrontFactoryInfoSelectCompute = async (
  id?: string,
  local_options?: AxiosInstance
): Promise<RdfaResultDefinedEmissionFactorReq> => {
  let local_url = '/api/front/factoryInfo/selectCompute'

  let local_params = { id }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultDefinedEmissionFactorReq>
}

/**
 * @tags 碳排因子库-杨泽
 * @summary 查询碳排因子列表
 * @param {number} pageSize 每页大小
 * @param {number} pageNum 当前页码
 * @param {string} materialName 材料名称
 * @param {string} belongIndustry 行业
 * @param {AxiosInstance} local_options
 */
export const getApiFrontFactoryInfoSelectList = async (
  pageSize: number,
  pageNum: number,
  materialName?: string,
  belongIndustry?: string,
  local_options?: AxiosInstance
): Promise<PagedRdfaResultDefinedEmissionFactorReq> => {
  let local_url = '/api/front/factoryInfo/selectList'

  let local_params = { pageSize, pageNum, materialName, belongIndustry }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<PagedRdfaResultDefinedEmissionFactorReq>
}

/**
 * @tags 碳排因子库-杨泽
 * @summary 修改碳排因子
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontFactoryInfoUpdate = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/factoryInfo/update'

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
 * @tags 文件上传-陈敏
 * @summary 上传授权
 * @param {string} fileType fileType
 * @param {AxiosInstance} local_options
 */
export const getApiFrontFileCommonUploadSign = async (
  fileType: string,
  local_options?: AxiosInstance
): Promise<StandardModel$5bf14096> => {
  let local_url = '/api/front/file/commonUploadSign'

  let local_params = { fileType }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$5bf14096>
}

/**
 * @tags 文件上传-陈敏
 * @summary 获取文件上传方式oss/gofastdfs
 * @param {AxiosInstance} local_options
 */
export const getApiFrontFileGetUploadType = async (
  local_options?: AxiosInstance
): Promise<RdfaResultString> => {
  let local_url = '/api/front/file/getUploadType'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultString>
}

/**
 * @tags 文件上传-陈敏
 * @summary 上传文件
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontFileUpload = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultString> => {
  let local_url = '/api/front/file/upload'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultString>
}

/**
 * @tags 生命周期模型-陈敏
 * @summary 输入设置-辅耗材选项列表
 * @param {AxiosInstance} local_options
 */
export const getApiFrontLifeModelConsumableList = async (
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListItemListVO> => {
  let local_url = '/api/front/lifeModel/consumableList'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListItemListVO>
}

/**
 * @tags 生命周期模型-陈敏
 * @summary 删除生命周期模型
 * @param {string} modelCode modelCode
 * @param {AxiosInstance} local_options
 */
export const getApiFrontLifeModelDelete = async (
  modelCode: string,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/lifeModel/delete'

  let local_params = { modelCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultBoolean>
}

/**
 * @tags 生命周期模型-陈敏
 * @summary 根据过程id，查询过程配置项信息
 * @param {string} cellId cellId
 * @param {AxiosInstance} local_options
 */
export const getApiFrontLifeModelGetCellData = async (
  cellId: string,
  local_options?: AxiosInstance
): Promise<RdfaResultCellTempInfoVO> => {
  let local_url = '/api/front/lifeModel/getCellData'

  let local_params = { cellId }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultCellTempInfoVO>
}

/**
 * @tags 生命周期模型-陈敏
 * @summary 根据批次号查询过程配置项信息
 * @param {string} batchCode batchCode
 * @param {string} cellId cellId
 * @param {AxiosInstance} local_options
 */
export const getApiFrontLifeModelGetCellDataByBatchCode = async (
  batchCode: string,
  cellId: string,
  local_options?: AxiosInstance
): Promise<RdfaResultCellTempInfoVO> => {
  let local_url = '/api/front/lifeModel/getCellDataByBatchCode'

  let local_params = { batchCode, cellId }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultCellTempInfoVO>
}

/**
 * @tags 生命周期模型-陈敏
 * @summary 查询生命周期模型详情
 * @param {IdDto} [body] dto
 * @param {AxiosInstance} local_options
 */
export const postApiFrontLifeModelGetInfo = async (
  body?: IdDto,
  local_options?: AxiosInstance
): Promise<RdfaResultModelInfoVO> => {
  let local_url = '/api/front/lifeModel/getInfo'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultModelInfoVO>
}

/**
 * @tags 生命周期模型-陈敏
 * @summary 输出设置-中间品选项列表
 * @param {AxiosInstance} local_options
 */
export const getApiFrontLifeModelIntermediatesList = async (
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListItemListVO> => {
  let local_url = '/api/front/lifeModel/intermediatesList'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListItemListVO>
}

/**
 * @tags 生命周期模型-陈敏
 * @summary 输入设置-能资/共用能资&amp;输出设置-能源选项列表
 * @param {AxiosInstance} local_options
 */
export const getApiFrontLifeModelInvestorsList = async (
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListItemListVO> => {
  let local_url = '/api/front/lifeModel/investorsList'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListItemListVO>
}

/**
 * @tags 生命周期模型-陈敏
 * @summary 生命周期模型列表
 * @param {StandardModel$14875a37} [body] dto
 * @param {AxiosInstance} local_options
 */
export const postApiFrontLifeModelPageList = async (
  body?: StandardModel$14875a37,
  local_options?: AxiosInstance
): Promise<PagedRdfaResultLifeCycleModelPageListVO> => {
  let local_url = '/api/front/lifeModel/pageList'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<PagedRdfaResultLifeCycleModelPageListVO>
}

/**
 * @tags 生命周期模型-陈敏
 * @summary 输出设置-产品选项列表
 * @param {AxiosInstance} local_options
 */
export const getApiFrontLifeModelProductList = async (
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListItemListVO> => {
  let local_url = '/api/front/lifeModel/productList'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListItemListVO>
}

/**
 * @tags 生命周期模型-陈敏
 * @summary 生命周期模型保存
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontLifeModelSave = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/lifeModel/save'

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
 * @tags 生命周期模型-陈敏
 * @summary 查询生命周期模型-适用阶段枚举
 * @param {AxiosInstance} local_options
 */
export const getApiFrontLifeModelStage = async (
  local_options?: AxiosInstance
): Promise<StandardModel$f2eef798> => {
  let local_url = '/api/front/lifeModel/stage'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$f2eef798>
}

/**
 * @tags 生命周期模型-陈敏
 * @summary 查询生命周期模型-类别枚举
 * @param {AxiosInstance} local_options
 */
export const getApiFrontLifeModelType = async (
  local_options?: AxiosInstance
): Promise<StandardModel$f2eef798> => {
  let local_url = '/api/front/lifeModel/type'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$f2eef798>
}

/**
 * @tags 生命周期模型-陈敏
 * @summary 编辑生命周期模型信息
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontLifeModelUpdate = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/lifeModel/update'

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
 * @tags 生命周期模型-陈敏
 * @summary 校验生命周期模型名称重复
 * @param {string} modelName modelName
 * @param {string} modelCode modelCode
 * @param {AxiosInstance} local_options
 */
export const getApiFrontLifeModelValidName = async (
  modelName: string,
  modelCode?: string,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/lifeModel/validName'

  let local_params = { modelName, modelCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultBoolean>
}

/**
 * @tags 生命周期模型-陈敏
 * @summary 输出设置-固体废物选项列表
 * @param {AxiosInstance} local_options
 */
export const getApiFrontLifeModelWasteList = async (
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListItemListVO> => {
  let local_url = '/api/front/lifeModel/wasteList'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListItemListVO>
}

/**
 * @tags 原材料单位-杨泽
 * @summary 查询所有单位
 * @param {AxiosInstance} local_options
 */
export const getApiFrontMaterialUnitSelectAll = async (
  local_options?: AxiosInstance
): Promise<StandardModel$f2eef798> => {
  let local_url = '/api/front/materialUnit/selectAll'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$f2eef798>
}

/**
 * @tags 碳中和操作
 * @summary 产品订单-获取中和证书详情
 * @param {number} id id
 * @param {AxiosInstance} local_options
 */
export const getApiFrontNeutralGetNeutralDetail = async (
  id?: number,
  local_options?: AxiosInstance
): Promise<StandardModel$ebceec6d> => {
  let local_url = '/api/front/neutral/getNeutralDetail'

  let local_params = { id }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$ebceec6d>
}

/**
 * @tags 碳中和操作
 * @summary 抵消认证状态列表
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontNeutralGetNeutralStatusList = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<StandardModel$ca895f35> => {
  let local_url = '/api/front/neutral/getNeutralStatusList'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$ca895f35>
}

/**
 * @tags 碳中和操作
 * @summary 产品订单-获取买卖方名称
 * @param {CarbonNeutralUserDTO} [body] carbonNeutralUserDTO
 * @param {AxiosInstance} local_options
 */
export const postApiFrontNeutralGetTradingUsers = async (
  body?: CarbonNeutralUserDTO,
  local_options?: AxiosInstance
): Promise<StandardModel$97757867> => {
  let local_url = '/api/front/neutral/getTradingUsers'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$97757867>
}

/**
 * @tags 碳中和操作
 * @summary 发起碳中和认证
 * @param {StandardModel$db99a4af} [body] launchCarbonNeutralReqDTO
 * @param {AxiosInstance} local_options
 */
export const postApiFrontNeutralLaunchCarbonNeutral = async (
  body?: StandardModel$db99a4af,
  local_options?: AxiosInstance
): Promise<RdfaResultString> => {
  let local_url = '/api/front/neutral/launchCarbonNeutral'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultString>
}

/**
 * @tags 碳中和操作
 * @summary 获取下载碳中和导入订单模版地址
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontNeutralNeutralDownloadTemp = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultString> => {
  let local_url = '/api/front/neutral/neutralDownloadTemp'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultString>
}

/**
 * @tags 碳中和抵消/认证操作-杨泽
 * @summary 获取中和证书详情
 * @param {number} id id
 * @param {AxiosInstance} local_options
 */
export const getApiFrontNeutralOffsetGetNeutralDetail = async (
  id?: number,
  local_options?: AxiosInstance
): Promise<StandardModel$ebceec6d> => {
  let local_url = '/api/front/neutral/offset/getNeutralDetail'

  let local_params = { id }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$ebceec6d>
}

/**
 * @tags 碳中和抵消/认证操作-杨泽
 * @summary 获取发起中和认证详情
 * @param {number} id id
 * @param {AxiosInstance} local_options
 */
export const getApiFrontNeutralOffsetGetNeutralOffsetDetailVo = async (
  id?: number,
  local_options?: AxiosInstance
): Promise<StandardModel$ebceec6d> => {
  let local_url = '/api/front/neutral/offset/getNeutralOffsetDetailVo'

  let local_params = { id }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$ebceec6d>
}

/**
 * @tags 碳中和抵消/认证操作-杨泽
 * @summary 获取抵消证明详情
 * @param {number} id id
 * @param {AxiosInstance} local_options
 */
export const getApiFrontNeutralOffsetGetOffsetDetailVo = async (
  id?: number,
  local_options?: AxiosInstance
): Promise<StandardModel$045f4ed6> => {
  let local_url = '/api/front/neutral/offset/getOffsetDetailVo'

  let local_params = { id }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$045f4ed6>
}

/**
 * @tags 碳中和抵消/认证操作-杨泽
 * @summary 获取认证机构列表
 * @param {AxiosInstance} local_options
 */
export const getApiFrontNeutralOffsetInstitutionList = async (
  local_options?: AxiosInstance
): Promise<StandardModel$2bd31f0a> => {
  let local_url = '/api/front/neutral/offset/institutionList'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$2bd31f0a>
}

/**
 * @tags 碳中和抵消/认证操作-杨泽
 * @summary 发起中和认证
 * @param {StandardModel$eaa8308e} [body] launchNeutralDTO
 * @param {AxiosInstance} local_options
 */
export const postApiFrontNeutralOffsetLaunchNeutral = async (
  body?: StandardModel$eaa8308e,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/neutral/offset/launchNeutral'

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
 * @tags 碳中和抵消/认证操作-杨泽
 * @summary 获取减排措施
 * @param {AxiosInstance} local_options
 */
export const getApiFrontNeutralOffsetSelectCerm = async (
  local_options?: AxiosInstance
): Promise<StandardModel$f2eef798> => {
  let local_url = '/api/front/neutral/offset/selectCerm'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$f2eef798>
}

/**
 * @tags 碳中和操作
 * @summary 分页查询碳中和抵消/认证列表
 * @param {any} [body] pageNeutralReqDTO
 * @param {AxiosInstance} local_options
 */
export const postApiFrontNeutralPageNeutralList = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<any> => {
  let local_url = '/api/front/neutral/pageNeutralList'

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
 * @tags 碳中和操作
 * @summary 分页查询碳中和导入订单列表
 * @param {StandardModel$a8e27bed} [body] pageNeutralOrderReqDTO
 * @param {AxiosInstance} local_options
 */
export const postApiFrontNeutralPageNeutralOrderList = async (
  body?: StandardModel$a8e27bed,
  local_options?: AxiosInstance
): Promise<StandardModel$d3cc374d> => {
  let local_url = '/api/front/neutral/pageNeutralOrderList'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$d3cc374d>
}

/**
 * @tags 碳中和操作
 * @summary 轮询查询碳中和订单导入结果
 * @param {string} uplodadFileCode 生成本次导入流水编号
 * @param {AxiosInstance} local_options
 */
export const getApiFrontNeutralPollUploadOrder = async (
  uplodadFileCode: string,
  local_options?: AxiosInstance
): Promise<StandardModel$25861b3b> => {
  let local_url = '/api/front/neutral/pollUploadOrder'

  let local_params = { uplodadFileCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$25861b3b>
}

/**
 * @tags 碳中和操作
 * @summary 碳中和订单导入
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontNeutralUploadOrder = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultString> => {
  let local_url = '/api/front/neutral/uploadOrder'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultString>
}

/**
 * @tags 推送数据到好气网
 * @summary 向好气网推送产品碳中和数据
 * @param {NeutralRecordDTO} [body] neutralRecordDTO
 * @param {AxiosInstance} local_options
 */
export const postApiFrontNeutralRecordPushNeutralRecordData = async (
  body?: NeutralRecordDTO,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/neutralRecord/pushNeutralRecordData'

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
 * @tags 推送数据到好气网
 * @summary 中和结束后推送状态给好气网
 * @param {NeutralRecordStatusDTO} [body] neutralRecordStatusDTO
 * @param {AxiosInstance} local_options
 */
export const postApiFrontNeutralRecordPushNeutralRecordStatus = async (
  body?: NeutralRecordStatusDTO,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/neutralRecord/pushNeutralRecordStatus'

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
 * @tags 文件上传
 * @summary uploadFile
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontOssUploadFile = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultString> => {
  let local_url = '/api/front/oss/uploadFile'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultString>
}

/**
 * @tags 产品相关查询条件-陈敏
 * @summary 产品批次下拉框查询
 * @param {string} productCode productCode
 * @param {string} productMode productMode
 * @param {AxiosInstance} local_options
 */
export const getApiFrontProductQueryGetBatchList = async (
  productCode?: string,
  productMode?: string,
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListGetQueryListVO> => {
  let local_url = '/api/front/product/query/getBatchList'

  let local_params = { productCode, productMode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListGetQueryListVO>
}

/**
 * @tags 产品相关查询条件-陈敏
 * @summary 产品批次下拉框查询-工作台(审核通过的批次)
 * @param {string} productCode productCode
 * @param {string} productMode productMode
 * @param {AxiosInstance} local_options
 */
export const getApiFrontProductQueryGetBatchs = async (
  productCode?: string,
  productMode?: string,
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListGetQueryListVO> => {
  let local_url = '/api/front/product/query/getBatchs'

  let local_params = { productCode, productMode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListGetQueryListVO>
}

/**
 * @tags 产品相关查询条件-陈敏
 * @summary 产品名称下拉框查询
 * @param {string} productName productName
 * @param {AxiosInstance} local_options
 */
export const getApiFrontProductQueryGetProductList = async (
  productName?: string,
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListGetQueryListVO> => {
  let local_url = '/api/front/product/query/getProductList'

  let local_params = { productName }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListGetQueryListVO>
}

/**
 * @tags 产品相关查询条件-陈敏
 * @summary 产品型号下拉框查询
 * @param {string} productCode productCode
 * @param {AxiosInstance} local_options
 */
export const getApiFrontProductQueryGetProductModeList = async (
  productCode?: string,
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListGetQueryListVO> => {
  let local_url = '/api/front/product/query/getProductModeList'

  let local_params = { productCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListGetQueryListVO>
}

/**
 * @tags 碳足迹量化-陈敏
 * @summary 数据审核-开始审核
 * @param {AuditDTO} [body] dto
 * @param {AxiosInstance} local_options
 */
export const postApiFrontProductBatchAudit = async (
  body?: AuditDTO,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/productBatch/audit'

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
 * @tags 碳足迹量化-陈敏
 * @summary 校验是否所有阶段已录入数据
 * @param {string} batchCode batchCode
 * @param {AxiosInstance} local_options
 */
export const getApiFrontProductBatchCheckData = async (
  batchCode: string,
  local_options?: AxiosInstance
): Promise<RdfaResultDataStatusVO> => {
  let local_url = '/api/front/productBatch/checkData'

  let local_params = { batchCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultDataStatusVO>
}

/**
 * @tags 碳足迹量化-陈敏
 * @summary 删除批次
 * @param {string} batchCode batchCode
 * @param {AxiosInstance} local_options
 */
export const getApiFrontProductBatchDelete = async (
  batchCode: string,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/productBatch/delete'

  let local_params = { batchCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultBoolean>
}

/**
 * @tags 碳足迹量化-陈敏
 * @summary 查看详情-产品批次信息&amp;生命周期流程配置
 * @param {string} batchCode batchCode
 * @param {AxiosInstance} local_options
 */
export const getApiFrontProductBatchGetInfo = async (
  batchCode: string,
  local_options?: AxiosInstance
): Promise<RdfaResultProductBatchInfoVO> => {
  let local_url = '/api/front/productBatch/getInfo'

  let local_params = { batchCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultProductBatchInfoVO>
}

/**
 * @tags 碳足迹量化-陈敏
 * @summary 查询当前用户批次的生命周期阶段
 * @param {string} batchCode batchCode
 * @param {AxiosInstance} local_options
 */
export const getApiFrontProductBatchGetLifeConfig = async (
  batchCode: string,
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListString> => {
  let local_url = '/api/front/productBatch/getLifeConfig'

  let local_params = { batchCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListString>
}

/**
 * @tags 碳足迹量化-陈敏
 * @summary 数据审核-审核列表
 * @param {GetAuditListDTO} [body] dto
 * @param {AxiosInstance} local_options
 */
export const postApiFrontProductBatchGetList = async (
  body?: GetAuditListDTO,
  local_options?: AxiosInstance
): Promise<PagedRdfaResultProductBatchListVO> => {
  let local_url = '/api/front/productBatch/getList'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<PagedRdfaResultProductBatchListVO>
}

/**
 * @tags 碳足迹量化-陈敏
 * @summary 查询当前租户下生命周期模型列表
 * @param {LifecycleModelListDTO} [body] dto
 * @param {AxiosInstance} local_options
 */
export const postApiFrontProductBatchGetModelList = async (
  body?: LifecycleModelListDTO,
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListModelListVO> => {
  let local_url = '/api/front/productBatch/getModelList'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListModelListVO>
}

/**
 * @tags 碳足迹量化-陈敏
 * @summary 查询租户下角色列表
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontProductBatchGetRoleList = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListTenantRoleVO> => {
  let local_url = '/api/front/productBatch/getRoleList'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListTenantRoleVO>
}

/**
 * @tags 碳足迹量化-陈敏
 * @summary 判度是否是管理员角色， true:是，false:否
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontProductBatchIsAdmin = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/productBatch/isAdmin'

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
 * @tags 碳足迹量化-陈敏
 * @summary 碳足迹量化列表
 * @param {ProductBatchListDTO} [body] dto
 * @param {AxiosInstance} local_options
 */
export const postApiFrontProductBatchList = async (
  body?: ProductBatchListDTO,
  local_options?: AxiosInstance
): Promise<PagedRdfaResultProductBatchListVO> => {
  let local_url = '/api/front/productBatch/list'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<PagedRdfaResultProductBatchListVO>
}

/**
 * @tags 碳足迹量化-陈敏
 * @summary 产品批次生命周期流程配置
 * @param {StandardModel$515dc2dd} [body] dto
 * @param {AxiosInstance} local_options
 */
export const postApiFrontProductBatchSaveConfig = async (
  body?: StandardModel$515dc2dd,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/productBatch/saveConfig'

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
 * @tags 碳足迹量化-陈敏
 * @summary 产品批次信息配置
 * @param {StandardModel$a8253cb5} [body] dto
 * @param {AxiosInstance} local_options
 */
export const postApiFrontProductBatchSaveInfo = async (
  body?: StandardModel$a8253cb5,
  local_options?: AxiosInstance
): Promise<RdfaResultString> => {
  let local_url = '/api/front/productBatch/saveInfo'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultString>
}

/**
 * @tags 碳足迹量化-陈敏
 * @summary 录入数据保存接口
 * @param {string} batchCode batchCode
 * @param {AxiosInstance} local_options
 */
export const getApiFrontProductBatchStartAudit = async (
  batchCode: string,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/productBatch/startAudit'

  let local_params = { batchCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultBoolean>
}

/**
 * @tags 碳足迹量化-陈敏
 * @summary 校验批次名称(同租户，同产品下，批次名称不能重复), true:校验通过，false:校验不通过
 * @param {string} modeCode modeCode
 * @param {string} batchName batchName
 * @param {string} batchCode batchCode
 * @param {AxiosInstance} local_options
 */
export const getApiFrontProductBatchValid = async (
  modeCode: string,
  batchName: string,
  batchCode?: string,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/productBatch/valid'

  let local_params = { modeCode, batchName, batchCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultBoolean>
}

/**
 * @tags bom清单-陈敏
 * @summary 删除bom清单数据
 * @param {StandardModel$aeff53ef} [body] dto
 * @param {AxiosInstance} local_options
 */
export const postApiFrontProductBomDelete = async (
  body?: StandardModel$aeff53ef,
  local_options?: AxiosInstance
): Promise<RdfaResult> => {
  let local_url = '/api/front/productBom/delete'

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
 * @tags bom清单-陈敏
 * @summary 获取bom清单导入模板
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontProductBomFile = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultString> => {
  let local_url = '/api/front/productBom/file'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultString>
}

/**
 * @tags bom清单-陈敏
 * @summary 查询产品bom清单列表
 * @param {BomListDTO} [body] dto
 * @param {AxiosInstance} local_options
 */
export const postApiFrontProductBomPageList = async (
  body?: BomListDTO,
  local_options?: AxiosInstance
): Promise<PagedRdfaResultProductBomListVO> => {
  let local_url = '/api/front/productBom/pageList'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<PagedRdfaResultProductBomListVO>
}

/**
 * @tags bom清单-陈敏
 * @summary bom清单数据同步原材料列表
 * @param {BomSyncRawMaterialInfoDTO} [body] dto
 * @param {AxiosInstance} local_options
 */
export const postApiFrontProductBomSyncRawMaterialInfo = async (
  body?: BomSyncRawMaterialInfoDTO,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/productBom/syncRawMaterialInfo'

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
 * @tags bom清单-陈敏
 * @summary 上传bom清单,返回dealCode
 * @param {string} modeCode modeCode
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontProductBomUploadFile = async (
  modeCode?: string,
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultString> => {
  let local_url = '/api/front/productBom/uploadFile'

  let local_params = { modeCode }
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultString>
}

/**
 * @tags bom清单-陈敏
 * @summary 查询bom清单上传结果
 * @param {string} dealCode dealCode
 * @param {AxiosInstance} local_options
 */
export const getApiFrontProductBomUploadResult = async (
  dealCode: string,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/productBom/uploadResult'

  let local_params = { dealCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultBoolean>
}

/**
 * @tags 产品管理-陈敏
 * @summary 删除产品
 * @param {string} modeCode modeCode
 * @param {AxiosInstance} local_options
 */
export const getApiFrontProductInfoDelete = async (
  modeCode: string,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/productInfo/delete'

  let local_params = { modeCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultBoolean>
}

/**
 * @tags 产品管理-陈敏
 * @summary 查询产品详情
 * @param {string} modeCode modeCode
 * @param {AxiosInstance} local_options
 */
export const getApiFrontProductInfoDetail = async (
  modeCode?: string,
  local_options?: AxiosInstance
): Promise<RdfaResultProductInfoVO> => {
  let local_url = '/api/front/productInfo/detail'

  let local_params = { modeCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultProductInfoVO>
}

/**
 * @tags 产品管理-陈敏
 * @summary 编辑产品
 * @param {StandardModel$897b3d93} [body] dto
 * @param {AxiosInstance} local_options
 */
export const postApiFrontProductInfoEdit = async (
  body?: StandardModel$897b3d93,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/productInfo/edit'

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
 * @tags 产品管理-陈敏
 * @summary 查询产品管理列表
 * @param {StandardModel$93c16b57} [body] dto
 * @param {AxiosInstance} local_options
 */
export const postApiFrontProductInfoGetList = async (
  body?: StandardModel$93c16b57,
  local_options?: AxiosInstance
): Promise<PagedRdfaResultGetProductInfoListVO> => {
  let local_url = '/api/front/productInfo/getList'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<PagedRdfaResultGetProductInfoListVO>
}

/**
 * @tags 产品管理-陈敏
 * @summary 新增产品
 * @param {StandardModel$52e8942d} [body] dto
 * @param {AxiosInstance} local_options
 */
export const postApiFrontProductInfoSave = async (
  body?: StandardModel$52e8942d,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/productInfo/save'

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
 * @tags 产品管理-陈敏
 * @summary 校验产品型号(同租户，同产品下，型号不能重复), true:校验通过，false:校验不通过
 * @param {string} productName productName
 * @param {string} modeCode modeCode
 * @param {string} productMode productMode
 * @param {AxiosInstance} local_options
 */
export const getApiFrontProductInfoValidMode = async (
  productName: string,
  modeCode?: string,
  productMode?: string,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/productInfo/valid/mode'

  let local_params = { productName, modeCode, productMode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultBoolean>
}

/**
 * @tags 碳足迹报告
 * @summary 获取核查证书
 * @param {string} batchCode batchCode
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontReportGetExamineCert = async (
  batchCode: string,
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListProductBatchFileVO> => {
  let local_url = '/api/front/report/getExamineCert'

  let local_params = { batchCode }
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListProductBatchFileVO>
}

/**
 * @tags 碳足迹报告
 * @summary 查询报告详情app端
 * @param {string} batchCode batchCode
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontReportQueryReportDetailForApp = async (
  batchCode: string,
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultReportDetailPcVO> => {
  let local_url = '/api/front/report/queryReportDetailForApp'

  let local_params = { batchCode }
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultReportDetailPcVO>
}

/**
 * @tags 碳足迹报告
 * @summary 查询报告详情pc端
 * @param {string} batchCode batchCode
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontReportQueryReportDetailForPc = async (
  batchCode: string,
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultReportDetailPcVO> => {
  let local_url = '/api/front/report/queryReportDetailForPc'

  let local_params = { batchCode }
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultReportDetailPcVO>
}

/**
 * @tags 碳足迹报告
 * @summary 查询报告列表
 * @param {QueryReportListDTO} [body] queryReportListDTO
 * @param {AxiosInstance} local_options
 */
export const postApiFrontReportQueryReportList = async (
  body?: QueryReportListDTO,
  local_options?: AxiosInstance
): Promise<PagedRdfaResultReportVO> => {
  let local_url = '/api/front/report/queryReportList'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<PagedRdfaResultReportVO>
}

/**
 * @tags 产品生产-杨泽
 * @summary 计算碳排量测试接口
 * @param {string} batchCode batchCode
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageProduceComputeCarbonEmission = async (
  batchCode: string,
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBigdecimal> => {
  let local_url = '/api/front/stageProduce/computeCarbonEmission'

  let local_params = { batchCode }
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultBigdecimal>
}

/**
 * @tags 产品生产-杨泽
 * @summary 删除产品生产
 * @param {number} id id
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageProduceDelete = async (
  id: number,
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/stageProduce/delete'

  let local_params = { id }
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
 * @tags 产品生产-杨泽
 * @summary 模板下载
 * @param {AxiosInstance} local_options
 */
export const getApiFrontStageProduceDownloadTemplate = async (
  local_options?: AxiosInstance
): Promise<RdfaResultString> => {
  let local_url = '/api/front/stageProduce/download/template'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultString>
}

/**
 * @tags 产品生产-杨泽
 * @summary excel解析
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageProduceExtractData = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListSaveEnergyConsumeDTO> => {
  let local_url = '/api/front/stageProduce/extractData'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListSaveEnergyConsumeDTO>
}

/**
 * @tags 产品生产-杨泽
 * @summary 查询所有过程数据
 * @param {string} batchCode batchCode
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageProduceGetAllProcessData = async (
  batchCode: string,
  body?: any,
  local_options?: AxiosInstance
): Promise<StandardModel$f71df107> => {
  let local_url = '/api/front/stageProduce/getAllProcessData'

  let local_params = { batchCode }
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$f71df107>
}

/**
 * @tags 产品生产-杨泽
 * @summary 获取生产阶段拓扑图数据
 * @param {QueryModelDataDTO} [body] queryModelDataDTO
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageProduceGetModelData = async (
  body?: QueryModelDataDTO,
  local_options?: AxiosInstance
): Promise<RdfaResultString> => {
  let local_url = '/api/front/stageProduce/getModelData'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultString>
}

/**
 * @tags 产品生产-杨泽
 * @summary 查询某一个过程数据
 * @param {string} cellId cellId
 * @param {string} batchCode batchCode
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageProduceGetProcessData = async (
  cellId: string,
  batchCode: string,
  body?: any,
  local_options?: AxiosInstance
): Promise<StandardModel$a0afb73e> => {
  let local_url = '/api/front/stageProduce/getProcessData'

  let local_params = { cellId, batchCode }
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$a0afb73e>
}

/**
 * @tags 产品生产-杨泽
 * @summary 获取项目树碳排信息
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageProduceGetProjectCarbonInfo = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<StandardModel$5bd37753> => {
  let local_url = '/api/front/stageProduce/getProjectCarbonInfo'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$5bd37753>
}

/**
 * @tags 产品生产-杨泽
 * @summary 获取项目树信息
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageProduceGetProjectTree = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListWorkPlanTreeRes> => {
  let local_url = '/api/front/stageProduce/getProjectTree'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListWorkPlanTreeRes>
}

/**
 * @tags 产品生产-杨泽
 * @summary 新增产品生产
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageProduceInsert = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/stageProduce/insert'

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
 * @tags 产品生产-杨泽
 * @summary 查询产品生产
 * @param {number} id id
 * @param {AxiosInstance} local_options
 */
export const getApiFrontStageProduceSelect = async (
  id?: number,
  local_options?: AxiosInstance
): Promise<StandardModel$c1486bb5> => {
  let local_url = '/api/front/stageProduce/select'

  let local_params = { id }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$c1486bb5>
}

/**
 * @tags 产品生产-杨泽
 * @summary 查询产品生产列表
 * @param {number} pageSize 每页大小
 * @param {number} pageNum 当前页码
 * @param {string} batchCode 批次编码
 * @param {AxiosInstance} local_options
 */
export const getApiFrontStageProduceSelectList = async (
  pageSize: number,
  pageNum: number,
  batchCode?: string,
  local_options?: AxiosInstance
): Promise<StandardModel$4506f6b2> => {
  let local_url = '/api/front/stageProduce/selectList'

  let local_params = { pageSize, pageNum, batchCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$4506f6b2>
}

/**
 * @tags 产品生产-杨泽
 * @summary 修改产品生产
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageProduceUpdate = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/stageProduce/update'

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
 * @tags 原材料-杨泽
 * @summary 删除原材料
 * @param {number} id id
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageRawMaterialInfoDelete = async (
  id: number,
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/stageRawMaterialInfo/delete'

  let local_params = { id }
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
 * @tags 原材料-杨泽
 * @summary 新增原材料
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageRawMaterialInfoInsert = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/stageRawMaterialInfo/insert'

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
 * @tags 原材料-杨泽
 * @summary 查询原材料
 * @param {number} id id
 * @param {AxiosInstance} local_options
 */
export const getApiFrontStageRawMaterialInfoSelect = async (
  id?: number,
  local_options?: AxiosInstance
): Promise<StandardModel$593c1de1> => {
  let local_url = '/api/front/stageRawMaterialInfo/select'

  let local_params = { id }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$593c1de1>
}

/**
 * @tags 原材料-杨泽
 * @summary 查询原材料下拉列表
 * @param {string} batchCode 批次code
 * @param {AxiosInstance} local_options
 */
export const getApiFrontStageRawMaterialInfoSelectCombo = async (
  batchCode?: string,
  local_options?: AxiosInstance
): Promise<StandardModel$b348ebe6> => {
  let local_url = '/api/front/stageRawMaterialInfo/selectCombo'

  let local_params = { batchCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$b348ebe6>
}

/**
 * @tags 原材料-杨泽
 * @summary 查询原材料列表
 * @param {number} pageSize 每页大小
 * @param {number} pageNum 当前页码
 * @param {string} batchCode 批次编码
 * @param {AxiosInstance} local_options
 */
export const getApiFrontStageRawMaterialInfoSelectList = async (
  pageSize: number,
  pageNum: number,
  batchCode?: string,
  local_options?: AxiosInstance
): Promise<StandardModel$15c1a157> => {
  let local_url = '/api/front/stageRawMaterialInfo/selectList'

  let local_params = { pageSize, pageNum, batchCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$15c1a157>
}

/**
 * @tags 原材料-杨泽
 * @summary 修改原材料
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageRawMaterialInfoUpdate = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/stageRawMaterialInfo/update'

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
 * @tags 原材料运输-杨泽
 * @summary 删除原材料运输
 * @param {number} id id
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageRawMaterialTransprotDelete = async (
  id: number,
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/stageRawMaterialTransprot/delete'

  let local_params = { id }
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
 * @tags 原材料运输-杨泽
 * @summary 新增原材料运输
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageRawMaterialTransprotInsert = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/stageRawMaterialTransprot/insert'

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
 * @tags 原材料运输-杨泽
 * @summary 查询原材料运输
 * @param {number} id id
 * @param {AxiosInstance} local_options
 */
export const getApiFrontStageRawMaterialTransprotSelectById = async (
  id?: number,
  local_options?: AxiosInstance
): Promise<StandardModel$5bb81f71> => {
  let local_url = '/api/front/stageRawMaterialTransprot/selectById'

  let local_params = { id }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$5bb81f71>
}

/**
 * @tags 原材料运输-杨泽
 * @summary 查询原材料运输列表
 * @param {number} pageSize 每页大小
 * @param {number} pageNum 当前页码
 * @param {string} batchCode 批次编码
 * @param {AxiosInstance} local_options
 */
export const getApiFrontStageRawMaterialTransprotSelectList = async (
  pageSize: number,
  pageNum: number,
  batchCode?: string,
  local_options?: AxiosInstance
): Promise<StandardModel$6c9ef65a> => {
  let local_url = '/api/front/stageRawMaterialTransprot/selectList'

  let local_params = { pageSize, pageNum, batchCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$6c9ef65a>
}

/**
 * @tags 原材料运输-杨泽
 * @summary 修改原材料运输
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageRawMaterialTransprotUpdate = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/stageRawMaterialTransprot/update'

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
 * @tags 产品分销阶段
 * @summary 新增产品仓储
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageStorageAdd = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/stageStorage/add'

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
 * @tags 产品分销阶段
 * @summary 删除产品仓储
 * @param {number} id id
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageStorageDelete = async (
  id: number,
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/stageStorage/delete'

  let local_params = { id }
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
 * @tags 产品分销阶段
 * @summary 获取上传文件列表数据
 * @param {string} dealCode dealCode
 * @param {string} batchCode batchCode
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageStorageGetFileData = async (
  dealCode: string,
  batchCode: string,
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultImportResultVO> => {
  let local_url = '/api/front/stageStorage/getFileData'

  let local_params = { dealCode, batchCode }
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultImportResultVO>
}

/**
 * @tags 产品分销阶段
 * @summary 分页查询产品分销阶段列表
 * @param {QueryStorageListDTO} [body] queryStorageListDTO
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageStoragePageList = async (
  body?: QueryStorageListDTO,
  local_options?: AxiosInstance
): Promise<PagedRdfaResultSaleStorageListVO> => {
  let local_url = '/api/front/stageStorage/pageList'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<PagedRdfaResultSaleStorageListVO>
}

/**
 * @tags 产品分销阶段
 * @summary 查询仓储详情
 * @param {number} id id
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageStorageSelectStorageDetail = async (
  id: number,
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultSaleStorageListVO> => {
  let local_url = '/api/front/stageStorage/selectStorageDetail'

  let local_params = { id }
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultSaleStorageListVO>
}

/**
 * @tags 产品分销阶段
 * @summary 修改产品仓储
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageStorageUpdate = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/stageStorage/update'

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
 * @tags 产品分销阶段
 * @summary 上传文件,返回dealCode
 * @param {string} batchCode batchCode
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageStorageUploadFile = async (
  batchCode: string,
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultString> => {
  let local_url = '/api/front/stageStorage/uploadFile'

  let local_params = { batchCode }
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultString>
}

/**
 * @tags 产品分销运输阶段
 * @summary 删除产品运输
 * @param {number} id id
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageTransportDelete = async (
  id: number,
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/stageTransport/delete'

  let local_params = { id }
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
 * @tags 产品分销运输阶段
 * @summary 获取下载能源消耗模版地址
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageTransportDownloadTemp = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultString> => {
  let local_url = '/api/front/stageTransport/downloadTemp'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultString>
}

/**
 * @tags 产品分销运输阶段
 * @summary 查询产品运输列表
 * @param {QueryTransportDTO} [body] queryTransportDTO
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageTransportPageList = async (
  body?: QueryTransportDTO,
  local_options?: AxiosInstance
): Promise<PagedRdfaResultSaleTransportListVO> => {
  let local_url = '/api/front/stageTransport/pageList'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<PagedRdfaResultSaleTransportListVO>
}

/**
 * @tags 产品分销运输阶段
 * @summary 新增产品运输
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageTransportSave = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/stageTransport/save'

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
 * @tags 产品分销运输阶段
 * @summary 查询详情
 * @param {number} id id
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageTransportSelectSaleTransportDetail = async (
  id: number,
  body?: any,
  local_options?: AxiosInstance
): Promise<StandardModel$8d379724> => {
  let local_url = '/api/front/stageTransport/selectSaleTransportDetail'

  let local_params = { id }
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$8d379724>
}

/**
 * @tags 产品分销运输阶段
 * @summary 修改产品运输
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageTransportUpdate = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/stageTransport/update'

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
 * @tags 产品使用阶段
 * @summary 新增产品使用
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageUseAdd = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/stageUse/add'

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
 * @tags 产品使用阶段
 * @summary 删除产品使用
 * @param {number} id id
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageUseDelete = async (
  id: number,
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/stageUse/delete'

  let local_params = { id }
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
 * @tags 产品使用阶段
 * @summary 获取下载能源消耗模版地址
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageUseDownloadTemp = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultString> => {
  let local_url = '/api/front/stageUse/downloadTemp'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultString>
}

/**
 * @tags 产品使用阶段
 * @summary 获取上传文件列表数据
 * @param {string} dealCode dealCode
 * @param {string} batchCode batchCode
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageUseGetFileData = async (
  dealCode: string,
  batchCode: string,
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultImportResultVO> => {
  let local_url = '/api/front/stageUse/getFileData'

  let local_params = { dealCode, batchCode }
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultImportResultVO>
}

/**
 * @tags 产品使用阶段
 * @summary 查询产品使用阶段详情
 * @param {number} [body] id
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageUseSelectDetail = async (
  body?: number,
  local_options?: AxiosInstance
): Promise<RdfaResultStageUseVO> => {
  let local_url = '/api/front/stageUse/selectDetail'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultStageUseVO>
}

/**
 * @tags 产品使用阶段
 * @summary 查询产品使用
 * @param {QueryUseListDTO} [body] queryUseListDTO
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageUseSelectUse = async (
  body?: QueryUseListDTO,
  local_options?: AxiosInstance
): Promise<PagedRdfaResultUseListVO> => {
  let local_url = '/api/front/stageUse/selectUse'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<PagedRdfaResultUseListVO>
}

/**
 * @tags 产品使用阶段
 * @summary 修改产品使用
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageUseUpdate = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultBoolean> => {
  let local_url = '/api/front/stageUse/update'

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
 * @tags 产品使用阶段
 * @summary 上传文件,返回dealCode
 * @param {string} batchCode batchCode
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontStageUseUploadFile = async (
  batchCode: string,
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultString> => {
  let local_url = '/api/front/stageUse/uploadFile'

  let local_params = { batchCode }
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultString>
}

/**
 * @tags 数据项-陈敏
 * @summary 查询分类下的数据项
 * @param {StandardModel$6e9255e9} [body] list
 * @param {AxiosInstance} local_options
 */
export const postApiFrontSysDataItemSelect = async (
  body?: StandardModel$6e9255e9,
  local_options?: AxiosInstance
): Promise<StandardModel$9ca0c8f7> => {
  let local_url = '/api/front/sysDataItem/select'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$9ca0c8f7>
}

/**
 * @tags 量化因子编码
 * @summary 查询excel导入排放因子编码
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontSysEmissionFactorSelectExcelCode = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListSysEmissionFactorVO> => {
  let local_url = '/api/front/sysEmissionFactor/selectExcelCode'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListSysEmissionFactorVO>
}

/**
 * @tags 量化因子编码
 * @summary 查询运输相关的排放因子编码
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontSysEmissionFactorSelectTransportCode = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultTransportCodeVO> => {
  let local_url = '/api/front/sysEmissionFactor/selectTransportCode'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultTransportCodeVO>
}

/**
 * @tags 量化因子编码
 * @summary 查询排放因子编码
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontSysEmissionFactorSelectTransportCodeTyped = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultHashMapStringListSysEmissionFactorVO> => {
  let local_url = '/api/front/sysEmissionFactor/selectTransportCodeTyped'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultHashMapStringListSysEmissionFactorVO>
}

/**
 * @tags 量化因子编码
 * @summary 查询陆运电力排放因子编码
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontSysEmissionFactorSelectTransportCodeTypedElec = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListSysEmissionFactorVO> => {
  let local_url = '/api/front/sysEmissionFactor/selectTransportCodeTypedElec'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListSysEmissionFactorVO>
}

/**
 * @tags 工作台-陈敏
 * @summary 产品碳足迹趋势
 * @param {string} modeCode modeCode
 * @param {AxiosInstance} local_options
 */
export const getApiFrontWorkbenchGetBatchChart = async (
  modeCode: string,
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListBatchListForChart> => {
  let local_url = '/api/front/workbench/getBatchChart'

  let local_params = { modeCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListBatchListForChart>
}

/**
 * @tags 工作台-陈敏
 * @summary 产品各生命周期碳足迹
 * @param {string} batchCode batchCode
 * @param {AxiosInstance} local_options
 */
export const getApiFrontWorkbenchGetLifecycleChart = async (
  batchCode: string,
  local_options?: AxiosInstance
): Promise<RdfaResultLifecycleConfigVO> => {
  let local_url = '/api/front/workbench/getLifecycleChart'

  let local_params = { batchCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultLifecycleConfigVO>
}

/**
 * @tags 工作台-陈敏
 * @summary 企业产品碳足迹概况
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontWorkbenchGetProductList = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultProductListVO> => {
  let local_url = '/api/front/workbench/getProductList'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultProductListVO>
}

/**
 * @tags 工作台-陈敏
 * @summary 待办事项
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiFrontWorkbenchGetToDoNum = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListToDoListVO> => {
  let local_url = '/api/front/workbench/getToDoNum'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListToDoListVO>
}

/**
 * @tags 好气网-订单推送
 * @summary 好气网订单数据推送碳足迹
 * @param {SyncOrderListDTO} [body] dto
 * @param {AxiosInstance} local_options
 */
export const postApiHqwOrderSync = async (
  body?: SyncOrderListDTO,
  local_options?: AxiosInstance
): Promise<RdfaResultArrayListSyncOrderListVO> => {
  let local_url = '/api/hqw/order/sync'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultArrayListSyncOrderListVO>
}

/**
 * @tags 支持好气网商品信息-周忠鹏
 * @summary 查询最新的碳配额价格信息
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiHqwProductGetLastCea = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<StandardModel$e7110dae> => {
  let local_url = '/api/hqw/product/getLastCea'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$e7110dae>
}

/**
 * @tags 好气网产品批次
 * @summary 好气网根据批次号查询碳足迹参数
 * @param {string} batchCode batchCode
 * @param {AxiosInstance} local_options
 */
export const getApiHqwProductBatchGetCarbonFootParamByBatchCode = async (
  batchCode: string,
  local_options?: AxiosInstance
): Promise<StandardModel$9d4d0de1> => {
  let local_url = '/api/hqw/productBatch/getCarbonFootParamByBatchCode'

  let local_params = { batchCode }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$9d4d0de1>
}

/**
 * @tags 好气网产品批次
 * @summary 好气网根据租户id分页查询批次信息
 * @param {StandardModel$cfebce00} [body] dto
 * @param {AxiosInstance} local_options
 */
export const postApiHqwProductBatchGetHqwBatchInfoPageByTenantId = async (
  body?: StandardModel$cfebce00,
  local_options?: AxiosInstance
): Promise<StandardModel$708dafe3> => {
  let local_url = '/api/hqw/productBatch/getHqwBatchInfoPageByTenantId'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$708dafe3>
}

/**
 * @tags 好气网产品批次
 * @summary 好气网根据租户id查询批次信息
 * @param {string} tenantId tenantId
 * @param {AxiosInstance} local_options
 */
export const getApiHqwProductBatchGetHqwBatchInfosByTenantId = async (
  tenantId: string,
  local_options?: AxiosInstance
): Promise<StandardModel$1c2b61e7> => {
  let local_url = '/api/hqw/productBatch/getHqwBatchInfosByTenantId'

  let local_params = { tenantId }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<StandardModel$1c2b61e7>
}

/**
 * @tags 好气网-碳足迹报告
 * @summary 好气网-查询报告详情pc端
 * @param {string} batchCode batchCode
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postApiHqwReportQueryReportDetailForPc = async (
  batchCode: string,
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultReportDetailPcVO> => {
  let local_url = '/api/hqw/report/queryReportDetailForPc'

  let local_params = { batchCode }
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultReportDetailPcVO>
}

/**
 * @tags get-all-beans-in-spring-controller
 * @summary getAllBeansInSpring
 * @param {AxiosInstance} local_options
 */
export const getSpringBeans = async (
  local_options?: AxiosInstance
): Promise<any[]> => {
  let local_url = '/spring/beans'

  let local_params = {}
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<any[]>
}

/**
 * @tags get-all-beans-in-spring-controller
 * @summary getGivenBeansInSpring
 * @param {string} beanName beanName
 * @param {AxiosInstance} local_options
 */
export const getSpringBeans2 = async (
  beanName?: string,
  local_options?: AxiosInstance
): Promise<any[]> => {
  let local_url = '/spring/beans2'

  let local_params = { beanName }
  const result = (await fetch({
    url: local_url,
    method: 'get',
    params: local_params,

    ...(local_options || {}),
  })) as unknown
  return result as Promise<any[]>
}

/**
 * @tags get-all-beans-in-spring-controller
 * @summary sendBeansToAuth
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postSpringSendBeansToAuth = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultString> => {
  let local_url = '/spring/sendBeansToAuth'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultString>
}

/**
 * @tags get-all-beans-in-spring-controller
 * @summary sendBeansToAuth2
 * @param {any} [body]
 * @param {AxiosInstance} local_options
 */
export const postSpringSendBeansToAuth2 = async (
  body?: any,
  local_options?: AxiosInstance
): Promise<RdfaResultString> => {
  let local_url = '/spring/sendBeansToAuth2'

  let local_params = {}
  let local_body = body || {}
  const result = (await fetch({
    url: local_url,
    method: 'post',
    params: local_params,
    data: local_body,
    ...(local_options || {}),
  })) as unknown
  return result as Promise<RdfaResultString>
}
