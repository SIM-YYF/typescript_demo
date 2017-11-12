import * as React from 'react'
import * as ReactNative from 'react-native'

export interface PropsDefine extends ReactNative.ViewProperties {
    index:number

}

export class Props  implements PropsDefine {
     index = 0
}