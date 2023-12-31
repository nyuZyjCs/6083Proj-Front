import './App.css';
import {Button, ColorPicker, ConfigProvider, Divider, Input, Space} from "antd";
import {Route, Routes} from "react-router-dom";

import Login from "./components/Login/Login";
import Register from "./components/Login/Register"
import Reset from "./components/Login/Reset"
import SetOrder from "./components/SetOrder/SetOrder";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Main from 'components/Main/Main';

function App() {
    const [primary, setPrimary] = React.useState('#520396');
  return (
      <div>
          <ConfigProvider
              theme={{
                  token: {
                      colorPrimary: primary,
                  },
              }}
          >

              {/*<Space>*/}
              {/*    <Input placeholder="Please Input" />*/}
              {/*    <Button type="primary">Submit</Button>*/}
              {/*</Space>*/}
              <NavBar/>
              <Routes>
                
              <Route path="/" element={<Main/>} />
                  <Route path="/register" element={<Register/>} />
                  <Route path="/login" element={<Login/>} />
                  <Route path="/reset" element={<Reset/>} />
                  <Route path="/set-order" element={<SetOrder/>} />
              </Routes>
              <Footer/>
          </ConfigProvider>

      </div>


  );
}

export default App;
