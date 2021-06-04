/**
 * Settings:
 * + align: "start | center | end"
 * + justify: "start | end | center | space-around | space-between"
 * + wrap: boolean
 */
 class Row extends React.Component {
    bindClass() {
      let className = [
        "display-flex"
      ];
      if (this.props.className) {
        className.push(this.props.className)
      }
      switch (this.props.align) {
        case "start":
          className.push("align-items-flex-start")
          break;
        case "center":
          className.push("align-items-center")
          break;
        case "end":
          className.push("align-items-flex-end")
          break;
      }
      switch (this.props.justify) {
        case "start":
          className.push("justify-content-flex-start")
          break;
        case "center":
          className.push("justify-content-center")
          break;
        case "end":
          className.push("justify-content-flex-end")
          break;
        case "space-around":
          className.push("justify-content-space-around")
          break;
        case "space-between":
          className.push("justify-content-space-between")
          break;
      }
      return className.join(" ")
    }

    render() {
      return (
        <div className={this.bindClass()}>
          {this.props.children}
        </div>
      )
    };
  }
  