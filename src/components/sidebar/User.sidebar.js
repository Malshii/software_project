import React from "react";
import classnames from "classnames";
import SidebarHeader from "./SidebarHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../sidebar.css';
//import {user_menu_config,doctor_menu_config,admin_menu_config} from "./menu.config";

class Sidebar extends React.Component {
  state = {
    open: window.matchMedia("(min-width: 1024px)").matches || false
  };

  ontoggleNav = () => {
    this.setState((prevState) => ({
      open: !prevState.open
    }));
  };

  render() {
    const { open } = this.state;
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    console.log(mobile, open);
    return (
      <div>
        <div className="navHeaderWrap">
          <SidebarHeader ontoggleNav={this.ontoggleNav} />
        </div>
        <div className="bodyWrap">
          <div className={classnames({ blur: mobile && open })} />
          <div
            className={classnames(
              "sidenav",
              { sidenavOpen: open },
              { sidenavClose: !open }
            )}
          >
            <a
              href="javascript:void(0)"
              className="closebtn hidex"
              onClick={() => this.ontoggleNav("0px")}
            >
              &times;
            </a>

            <a className="sidebartextbox" href="/dashboard">
              Dashboard
            </a>
            <a className="sidebartextbox2" href="#">
              My Profile
            </a>
            <a className="sidebartextbox" href="#">
              Messages
            </a>
            <a className="sidebartextbox2" href="#">
              Scheduling
            </a>
            <a className="sidebartextbox" href="#">
              Reports
            </a>
            <a className="sidebartextbox2" href="#">
              Promotions
            </a>
            <a className="sidebartextbox" href="#">
              Upload Documents
            </a>
            <a className="sidebartextbox2" href="#">
              History
            </a>
            <a className="sidebartextbox" href="#">
              Settings
            </a>
            <a className="sidebartextbox2" href="#">
              About
            </a>
            <a className="sidebartextbox" href="#">
              Helps & Services
            </a>
            <a className="sidebartextbox" href="#"></a>
            <a className="sidebartextbox" href="#"></a>
            <a className="sidebartextbox" href="#"></a>

            <a className="sidebartextbox" href="#">
              Location
            </a>    
            <a className="sidebartextbox" href="#">
              Telephone
            </a>
            <a className="sidebartextbox" href="#">
              Email
            </a>
            <a className="sidebartextbox" href="#"></a>
            <a className="sidebartextbox" href="#"></a>
            <a className="sidebartextbox" href="#"></a>
            <a className="sidebartextbox" href="#"></a>
          </div>

          <div
            className={classnames(
              "main",
              { mainShrink: open },
              { mainExpand: !open },
              { noscroll: mobile && open }
            )}
          >            
          </div>
          
        </div>          

      </div>
    );
  }
}

export default Sidebar;
