/*
* @Author: Issac
* @Date:   2017-08-14 09:30:16
* @Last Modified by:   Issac
* @Last Modified time: 2017-08-14 10:48:29
*/

'use strict';
import React from 'react';

export default class Cut extends React.Component{
	render(){
		return(
        <canvas id="canvas" style={{border:"1px solid #aaa",display:"block",margin:"50px auto"}}>
         当前浏览器不支持canvas，请更换浏览器后再试。
        </canvas>
		)
	}
}