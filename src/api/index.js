/*
包含n个接口请求函数的模块
 */
import ajax from "./ajax"
//接口请求函数
//获取位置
export const reqAddress =(genhash) => ajax('/position/${genhash}')
//获取食品列表
export const reqFoodTypes=() => ajax("/index_category")
//根据经纬度获取商铺列表
export const reqShops=(longitude,latitude) => ajax("/shop",{longitude,latitude})