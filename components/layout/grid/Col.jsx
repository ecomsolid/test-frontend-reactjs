/**
 * c_uuid: string
 * Settings:
 * + order: number
 * + align: "start | center | end"
 * + justify: "start | end | center | space-around | space-between"
 * + wrap: boolean
 */
class Col extends React.Component {
    bindClass() {
      let className = [
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

    bindStyle() {
      let styles = {
        "min-height": "1px",
        "max-width": "100%",
        "position": "relative",
      }
      if (this.props.width) {
        styles.width = this.props.width + "%"
      }
      if (this.props.order) {
        styles.order = this.props.order
      }
      return styles
    }

    render() {
      return (
        <>
          <div className={`${this.bindClass()} a_${this.props.c_uuid}`} style={this.bindStyle()}>
            {this.props.children}
          </div>
        </>
      )
    };
  }
  