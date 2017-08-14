/*
* @Author: Issac
* @Date:   2017-08-14 08:26:18
* @Last Modified by:   Issac
* @Last Modified time: 2017-08-14 10:17:51
*/

'use strict';
import React from 'react';
import {Link} from 'react-router-dom';

export default class Content extends React.Component{
	render(){
		return(
          <div id='container'>
              <h1>Canvas</h1>
              <Link to={`/cartoon`} class='btn btn-primary'>Canvas球动画</Link>
              <Link to={`/light`} class='btn btn-primary'>Canvas探照灯</Link>
              <Link to={`/controll`} class='btn btn-primary'>Canvas控制</Link>
              <Link to={`/corver`} class='btn btn-primary'>Canvas遮盖</Link>
              <Link to={`/font`} class='btn btn-primary'>Canvas字体效果</Link>
              <Link to={`/time`} class='btn btn-primary'>Canvas炫丽时钟</Link>
              <Link to={`/connect`} class='btn btn-primary'>Canvas实现交互</Link>
              <Link to={`/again`} class='btn btn-primary'>Canvas重复绘制</Link>
              <Link to={`/color`} class='btn btn-primary'>Canvas渐变色</Link>
              <Link to={`/grad`} class='btn btn-primary'>Canvas2048</Link>
              <Link to={`/star`} class='btn btn-primary'>Canvas星空图</Link>
              <Link to={`/cut`} class='btn btn-primary'>Canvas剪纸效果</Link>
          </div>
		)
	}
}