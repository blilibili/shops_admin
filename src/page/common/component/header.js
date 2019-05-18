import React from 'react';
import { Alert, Icon , Breadcrumb } from 'zent';

function Header() {
    return (
        <div style={{padding:'0 20px'}}>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <a href="//www.youzan.com" style={{fontWeight:'bold'}}>首页</a>
                </Breadcrumb.Item>
                <span>营销中心</span>
            </Breadcrumb>
        </div>
    );
}

export default Header;
