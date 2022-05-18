import React, {useState} from "react";
import {Layout} from 'antd';
import AppHeader from "./AppHeader";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const {Footer} = Layout;

const AppLayout = () => {
    const [collapse, setCollapse] = useState(false);

    const collapseSidebar = () => {
        setCollapse(!collapse);
    };

    return (
        <Layout>
            <AppHeader collapseSidebar={collapseSidebar}/>
            <Layout style={{height: '100vh'}}>
                <Sidebar collapse={collapse} collapseSidebar={collapseSidebar}/>
                <Layout>
                    {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
                    {/*    <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                    {/*    <Breadcrumb.Item>List</Breadcrumb.Item>*/}
                    {/*    <Breadcrumb.Item>App</Breadcrumb.Item>*/}
                    {/*</Breadcrumb>*/}
                    <MainContent />
                </Layout>
            </Layout>
            <Footer style={{textAlign: 'center'}}>
                Something ©2022 Created by Someone
            </Footer>
        </Layout>
    );
};

export default AppLayout;
