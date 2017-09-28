/**
 * 功能描述:
 * @author: liuguanbang
 * 2017/9/28
 */

import React from 'react';
import ReactDOM from 'react-dom';
import TodoBox from './views/index.jsx';

let data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
ReactDOM.render(<TodoBox data={data} />, document.getElementById("app"));