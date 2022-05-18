import React, {useState} from 'react';
import {Menu, Layout} from "antd";
import {
    HomeOutlined,
    LoginOutlined,
    LogoutOutlined,
    UserAddOutlined,
    MenuFoldOutlined
} from "@ant-design/icons";

const {Header} = Layout;

const AppHeader = ({collapseSidebar}) => {
    const [toggleLogin, setToggleLogin] = useState(false);

    const toggleLoginLogout = () => {
        setToggleLogin(prev => !prev)
    };

    return (
        <Header className="header">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item
                    key="1"
                    icon={<HomeOutlined />}>
                    Home
                </Menu.Item>

                <Menu.Item
                    key="2"
                    onClick={toggleLoginLogout}
                    icon={toggleLogin? <LoginOutlined />: <LogoutOutlined />}>
                    {toggleLogin ? 'Logout': 'Login'}
                </Menu.Item>

                <Menu.Item
                    key="3"
                    icon={<UserAddOutlined />}>
                    Profile
                </Menu.Item>
            </Menu>
        </Header>
    );
};

export default AppHeader;
