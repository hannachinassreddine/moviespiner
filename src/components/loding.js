import React from 'react'
import { Spin } from 'antd';
import 'antd/dist/antd.css'
export default function loading() {
    return (
        <div className="loading">
          <div className="example">
          <Spin />
        </div>
        </div>
    )
}