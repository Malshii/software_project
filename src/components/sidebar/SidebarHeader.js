import React from "react";
import { Collapse, Navbar } from "reactstrap";
import '../../sidebarHeader.css';
export default class Example extends React.PureComponent {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { ontoggleNav } = this.props;
    return (
      <div>
        <Navbar className="mainheader" light expand="lg">
          <span className="hmbger" onClick={ontoggleNav}>
            &#9776;
          </span>

          <a href="/">
            <i id="homeicon" class="fa fa-fw fa-home" />
          </a>

          <Collapse isOpen={this.state.isOpen} navbar />
        </Navbar>
      </div>
    );
  }
}
