import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, ThemeSettings, Sidebar } from "./components/index";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Customers,
  Kanban,
  Editor,
} from "./pages";
import LineChart from "./pages/Charts/Line";
import AreaChart from "./pages/Charts/Area";
import BarChart from "./pages/Charts/Bar";
import PieChart from "./pages/Charts/Pie";
import FinancialChart from "./pages/Charts/Financial";
import ColorPicker from "./pages/ColorPicker";
import ColorMappingChart from "./pages/Charts/ColorMapping";
import PyramidChart from "./pages/Charts/Pyramid";
import StackedChart from "./pages/Charts/Stacked";

import "./App.css";
import { useStateContext } from './contexts/ContextProvider'

export const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <BrowserRouter>
      <div className="flex relative dark:bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="settings" position="Top">
            <button
              type="button"
              className="text-3xl p-3 hover:drop-shadow-x1 hover:bg-light-gray text-white"
              style={{ background: "#333", borderRadius: "50%" }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0  dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>
          <Routes>
            {/* dashBoard */}
            <Route path="/" element={<Ecommerce />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            {/* pages */}
            <Route path="/orders" element={<Orders />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/customers" element={<Customers />} />
            {/* Apps */}
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/color-picker" element={<ColorPicker />} />
            {/* Graficos */}
            <Route path="/line" element={<LineChart />} />
            <Route path="/area" element={<AreaChart />} />
            <Route path="/bar" element={<BarChart />} />
            <Route path="/pie" element={<PieChart />} />
            <Route path="/financial" element={<FinancialChart />} />
            <Route path="/color-mapping" element={<ColorMappingChart />} />
            <Route path="/pyramid" element={<PyramidChart />} />
            <Route path="/staked" element={<StackedChart />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}