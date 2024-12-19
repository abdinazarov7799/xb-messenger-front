import React from 'react';
import { Layout, } from 'antd';
import {Outlet} from "react-router-dom";
import MainHeader from "./MainHeader.jsx";
import DashboardSidebar from "./DashboardSidebar";
const { Content} = Layout;



const MainLayout = () => {

  return(
      <Layout hasSider>

          <DashboardSidebar />

          <Layout style={{marginLeft: 200, minHeight: '100vh'}}>
              <MainHeader />

              <Content
                  style={{
                      padding: '24px 16px',
                      overflow: 'initial',
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "start"
                  }}
              >
                  <Outlet />
              </Content>

          </Layout>
      </Layout>
  )
}
export default MainLayout
