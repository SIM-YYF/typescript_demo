import * as React from 'react'
import * as ReactNative from 'react-native'

import  Bcom from './Bcom'
import  * as bprop from './bprop'





export interface PropsDefine extends ReactNative.ViewProperties {
    /**
     * 图片数组
     */
    imageUrls: Array<string>
    index?: number
    enableImageZoom?: boolean

    /**
     * 渲染loading元素
     */
    loadingRender?: (bprop?: bprop.PropsDefine) => React.ReactElement<any>

    onLongPress?: () => void
    onClick?: (close?: Function) => void


}

export class Props  implements PropsDefine {
    imageUrls = ['sssssssssssss', 'sss', '222', '33333'] as Array<string>
    flipThreshold = 80
    index = 0
    enableImageZoom=false

    loadingRender = (bprop: bprop.PropsDefine) => {
        return React.createElement(
            Bcom, //嵌套的子组件
            { //设置子组件的属性（类属性，样式）
                style:{},
                pp:bprop
            },
            null //设置子组件需要嵌套的子组件

        )
    }


}