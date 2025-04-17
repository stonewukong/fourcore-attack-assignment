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
  Globe,
  Shield,
  Download,
  Activity,
  ShieldAlert,
  ChartArea,
  Aperture,
  ChevronRight,
  ChevronLeft,
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
  Button,
} from 'antd';
import FourcoreLogo from './assets/fourcore.svg';
import RadarChart from './components/RadarChart';
import AreaChart from './components/AreaChart';

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
      <Layout
        style={{ backgroundColor: 'transparent' }}
        className="flex h-screen flex-1 flex-col"
      >
        <Sider
          breakpoint="lg"
          trigger={null}
          collapsible
          collapsedWidth={0}
          onCollapse={(value) => setCollapsed(value)}
          collapsed={collapsed}
          style={siderStyle}
          className="border-r border-stroke "
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
            <div className="flex justify-center gap-4 items-end">
              <Button
                type="text"
                icon={
                  collapsed ? (
                    <ChevronRight size={16} />
                  ) : (
                    <ChevronLeft size={16} />
                  )
                }
                onClick={() => setCollapsed(!collapsed)}
                className="w-4 h-4 p-0 rounded-full hover:bg-stroke transition-colors duration-200"
              />
              <Breadcrumb
                className="flex items-center h-full "
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
                style={{
                  backgroundColor: 'transparent',
                  borderColor: '#1e293b',
                }}
                className="mr-2 max-w-36 sm:max-w-auto sm:w-auto"
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
              <Avatar icon={<User size={'16px'} />} className="flex-none" />
            </div>
          </Header>
          <Content
            id="content-container"
            className="h-full p-2 sm:p-4 bg-background overflow-y-auto"
          >
            <div className="flex justify-between items-start sm:items-center mb-4 gap-2">
              <h1 className="text-lg sm:text-xl font-semibold text-white">
                Welcome back Aarush! Let's ATTACK!
              </h1>
              <button className="flex self-end  cursor-pointer items-center gap-2 bg-[#154AC0] hover:bg-blue-800 transition duration-200 text-white py-1 px-3 rounded-md">
                <Download size={16} />
                <span className="hidden sm:block">Download Report</span>
              </button>
            </div>

            <div className="flex flex-col lg:flex-row w-full justify-center gap-4">
              {/* Simulation Overview Section */}
              <div className="w-full lg:w-1/2 border border-stroke bg-container rounded-md p-3 sm:p-4 lg:mb-0 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <Activity size={18} className="dark:text-white" />

                  <h2 className="text-lg font-medium dark:text-white">
                    Simulation Overview
                  </h2>
                </div>
                <div className="flex flex-col sm:flex-row justify-between flex-1 gap-4">
                  {/* Attacks Blocked */}
                  <div className="flex-1 flex flex-col">
                    <p className="text-gray-400 mb-2">Attacks Blocked</p>
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-3xl sm:text-4xl tracking-tight font-bold text-green-400">
                        31.49%
                      </div>
                      <Shield size={48} className="text-green-400" />
                    </div>
                    <div className="text-sm text-gray-400 mt-1">57/181</div>
                    <div className="w-full h-2 bg-blue-900 mt-1 rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 w-[31.49%]"></div>
                    </div>
                    <div className="mt-4 text-sm text-gray-400">
                      <div className="flex justify-between mb-1">
                        <span>Network Attacks</span>
                        <span className="text-green-400">18/52</span>
                      </div>
                      <div className="flex justify-between mb-1">
                        <span>Malware Attempts</span>
                        <span className="text-green-400">24/63</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Privilege Escalation</span>
                        <span className="text-green-400">15/66</span>
                      </div>
                    </div>
                  </div>
                  <div className="sm:h-full h-px w-full sm:w-px bg-stroke my-2 sm:my-0 sm:mx-2"></div>
                  {/* Attacks Detected */}
                  <div className="flex-1 flex flex-col">
                    <p className="text-gray-400 mb-2">Attacks Detected</p>
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-3xl sm:text-4xl font-bold text-yellow-500">
                        51.93%
                      </div>
                      <ShieldAlert size={48} className="text-yellow-500" />
                    </div>
                    <div className="text-sm text-gray-400 mt-1">94/181</div>
                    <div className="w-full h-2 bg-blue-900 mt-1 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 w-[51.93%]"></div>
                    </div>
                    <div className="mt-4 text-sm text-gray-400">
                      <div className="flex justify-between mb-1">
                        <span>Network Attacks</span>
                        <span className="text-yellow-500">32/52</span>
                      </div>
                      <div className="flex justify-between mb-1">
                        <span>Malware Attempts</span>
                        <span className="text-yellow-500">38/63</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Privilege Escalation</span>
                        <span className="text-yellow-500">24/66</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Cards Grid */}
              <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Endpoint Security */}
                <div className="border border-stroke bg-container rounded-md p-4">
                  <div className="flex items-center gap-2 mb-4 text-amber-500">
                    <Shield size={16} />
                    <span className="font-medium">Endpoint Security</span>
                  </div>
                  <div className="flex">
                    <div className="flex-1">
                      <p className="text-gray-400 mb-1 text-sm">Block Score</p>
                      <p className="text-3xl font-bold text-white">
                        28
                        <span className="text-sm text-gray-400">/100</span>
                      </p>
                    </div>
                    <div className="w-px h-16 bg-gray-800 mx-2"></div>
                    <div className="flex-1">
                      <p className="text-gray-400 mb-1 text-sm">Detect Score</p>
                      <p className="text-3xl font-bold text-white">
                        54
                        <span className="text-sm text-gray-400">/100</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email Infiltration */}
                <div className="border border-stroke bg-container rounded-md p-4">
                  <div className="flex items-center gap-2 mb-4 text-blue-500">
                    <Mail size={16} />
                    <span className="font-medium">Email Infiltration</span>
                  </div>
                  <div className="flex">
                    <div className="flex-1">
                      <p className="text-gray-400 mb-1 text-sm">Block Score</p>
                      <p className="text-3xl font-bold text-white">
                        100
                        <span className="text-sm text-gray-400">/100</span>
                      </p>
                    </div>
                    <div className="w-px h-16 bg-gray-800 mx-2"></div>
                    <div className="flex-1">
                      <p className="text-gray-400 mb-1 text-sm">Detect Score</p>
                      <p className="text-3xl font-bold text-white">
                        0<span className="text-sm text-gray-400">/100</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Web Gateway */}
                <div className="border border-stroke bg-container rounded-md p-4">
                  <div className="flex items-center gap-2 mb-4 text-green-500">
                    <Globe size={16} />
                    <span className="font-medium">Web Gateway</span>
                  </div>
                  <div className="flex">
                    <div className="flex-1">
                      <p className="text-gray-400 mb-1 text-sm">Block Score</p>
                      <p className="text-3xl font-bold text-white">
                        0 <span className="text-sm text-gray-400">/100</span>
                      </p>
                    </div>
                    <div className="w-px h-16 bg-gray-800 mx-2"></div>
                    <div className="flex-1">
                      <p className="text-gray-400 mb-1 text-sm">Detect Score</p>
                      <p className="text-3xl font-bold text-white">
                        0<span className="text-sm text-gray-400">/100</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* WAF */}
                <div className="border border-stroke bg-container rounded-md p-4">
                  <div className="flex items-center gap-2 mb-4 text-red-500">
                    <Shield size={16} />
                    <span className="font-medium">WAF</span>
                  </div>
                  <div className="flex">
                    <div className="flex-1">
                      <p className="text-gray-400 mb-1 text-sm">Block Score</p>
                      <p className="text-3xl font-bold text-white">
                        0<span className="text-sm text-gray-400">/100</span>
                      </p>
                    </div>
                    <div className="w-px h-16 bg-gray-800 mx-2"></div>
                    <div className="flex-1">
                      <p className="text-gray-400 mb-1 text-sm">Detect Score</p>
                      <p className="text-3xl font-bold text-white">
                        0<span className="text-sm text-gray-400">/100</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 bg-background">
              {/* Attack Coverage Section */}
              <div className="border border-stroke bg-container rounded-md p-4 overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <Aperture size={18} className="text-white" />

                  <h2 className="text-lg font-medium text-white">
                    Attack Coverage
                  </h2>
                </div>
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span className="text-xs text-gray-400">Available</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#FF928A]"></div>
                    <span className="text-xs text-gray-400">Current</span>
                  </div>
                </div>
                <div className="h-[260px] w-full bg-container">
                  <RadarChart />
                </div>
              </div>

              {/* ATT&CK Trend Section */}
              <div className="border border-stroke bg-container rounded-md p-4 overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <ChartArea size={18} className="text-white" />

                  <h2 className="text-lg font-medium text-white">
                    ATT&CK Trend
                  </h2>
                </div>
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span className="text-xs text-gray-400">
                      Blocked Techniques
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <span className="text-xs text-gray-400">
                      Total Techniques
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                    <span className="text-xs text-gray-400">
                      Detected Techniques
                    </span>
                  </div>
                </div>
                <div className="h-[260px] w-full bg-container">
                  <AreaChart />
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
