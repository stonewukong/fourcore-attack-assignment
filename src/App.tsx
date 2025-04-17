import React, { useState } from 'react';
import {
  Bell,
  Boxes,
  Bug,
  FileSearch2,
  Home,
  LayoutDashboard,
  Mail,
  Moon,
  ScanEye,
  Search,
  Settings,
  Sheet,
  SquareAsterisk,
  SquareStack,
  Sun,
  Unplug,
  User,
} from 'lucide-react';
import type { MenuProps } from 'antd';
import {
  Avatar,
  Breadcrumb,
  Layout,
  Menu,
  Switch,
  Input,
  ConfigProvider,
  theme,
} from 'antd';
import FourcoreLogo from './assets/fourcore.svg';

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dashboard', '1', <LayoutDashboard size={'16px'} />),
  getItem('Assets', '2', <Boxes size={'16px'} />, [
    getItem('Servers', '21', null),
    getItem('Databases', '22', null),
    getItem('Storage', '23', null),
    getItem('Containers', '24', null),
    getItem('Virtual Machines', '25', null),
  ]),
  getItem('Attack Library', '3', <Bug size={'16px'} />),
  getItem('Assessments', '4', <Sheet size={'16px'} />),
  getItem('Threat Intelligence', '5', <ScanEye size={'16px'} />),
  getItem('Detections', '6', <SquareStack size={'16px'} />),
  getItem('Phishing', '7', <Mail size={'16px'} />),
  getItem('Reporting', '8', <FileSearch2 size={'16px'} />),
  getItem('ATTACK Matrix', '9', <SquareAsterisk size={'16px'} />),
  getItem('Integrations', '10', <Unplug size={'16px'} />),
  getItem('Settings', '11', <Settings size={'16px'} />),
];

const siderStyle: React.CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
  backgroundColor: '#050B1B',
};

const toggleChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

const onSearch = (value: string) => console.log(value);

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorBgBase: '#050B1B',
        },
        components: {
          Breadcrumb: {
            itemColor: 'rgba(255, 255, 255, 0.65)',
            separatorColor: 'rgba(255, 255, 255, 0.45)',
            lastItemColor: 'rgba(255, 255, 255, 0.85)',
            linkColor: 'rgba(255, 255, 255, 0.65)',
            linkHoverColor: 'rgba(255, 255, 255, 1)',
          },
        },
      }}
    >
      <Layout style={{ minHeight: '100vh', backgroundColor: 'transparent' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={siderStyle}
          className="border-r border-stroke"
        >
          <div className="flex justify-center gap-1 items-center h-16">
            <img src={FourcoreLogo} className="size-8" alt="Fourcore Logo" />
            <span
              className={`text-white text-2xl font-semibold ${
                collapsed ? 'hidden' : ''
              }  transition-all duration-300`}
            >
              FourCore
            </span>
          </div>
          <Menu
            theme="dark"
            defaultSelectedKeys={['1']}
            mode="inline"
            items={items}
            style={{
              backgroundColor: 'transparent',
              padding: collapsed ? '0px 12px' : '0px',
              transition: 'padding 0.15s ease',
            }}
          />
        </Sider>
        <Layout className="h-full" style={{ backgroundColor: 'transparent' }}>
          <Header
            style={{
              padding: '0 16px',
              width: '100%',
              backgroundColor: '#050B1B',
            }}
            className="flex justify-between w-full items-center border-b border-stroke"
          >
            <div className="flex justify-center items-center">
              <Breadcrumb
                className="flex items-center "
                items={[
                  {
                    href: '',
                    title: (
                      <Home
                        size={'16px'}
                        className="text-white flex items-center h-full"
                      />
                    ),
                  },
                  {
                    href: '',
                    title: <span className="text-white">Dashboard</span>,
                  },
                ]}
              />
            </div>
            <div className="flex gap-3 items-center">
              <Input
                placeholder="Search..."
                onInput={() => onSearch}
                style={{ width: 300 }}
                className="mr-2"
                prefix={<Search size={16} className="text-gray-400" />}
              />
              <Switch
                defaultChecked
                className="outline outline-stroke"
                onChange={toggleChange}
                checkedChildren={
                  <Moon size={'14px'} className="mt-[3px] mr-0.5" />
                }
                unCheckedChildren={
                  <Sun size={'14px'} className="mt-[1px] ml-0.5" />
                }
                style={{ backgroundColor: '#154AC0' }}
              />
              <div className="rounded-full cursor-pointer transition-colors duration-200 hover:bg-stroke p-2">
                <Bell size={16} className="dark:text-white" />
              </div>
              <Avatar
                style={{ backgroundColor: '#87d068' }}
                icon={<User size={'16px'} />}
              />
            </div>
          </Header>
          <Content className="h-full w-full">
            <div className="h-full border border-amber-600"></div>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
