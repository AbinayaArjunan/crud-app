import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
 import "./App.css";
import Navbar from "./components/Navbar";
import Logout from "./components/Logout";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Createstudent from "./components/STUDENT/CreateStudent";
import AddStudent from "./components/STUDENT/AddStudent";
import Editstudent from "./components/STUDENT/EditStudent";
import { DataProvider } from "./Data/Data";
import "./admin.css";



function App() {

  return (
    <div id="page-top">
      <DataProvider>
        <Router>
          <div id="wrapper" className="">
            <Sidebar
              Link={Link}
            />

            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content" className="#0dcaf0 text-center">


                <Navbar />


                <Routes>
                  <Route
                    path="/"
                    element={
                      <Dashboard />
                    }
                  />
                  <Route
                    path="/Student"
                    element={
                      <Createstudent />
                    }
                  />
                  <Route
                    path="/Student/Add"
                    element={
                      <AddStudent />
                    }
                  />
                  <Route
                    path="/Student/Edit"
                    element={
                      <Editstudent />
                    }
                  />
                </Routes>
              </div>
              <Footer />
            </div>
          </div>
        </Router>

        <Logout />
      </DataProvider>
    </div>
  );
}

export default App;
