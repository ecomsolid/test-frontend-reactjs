/**
 * c_uuid: string
 * Settings:
 * + order: number
 * + align: "start | center | end"
 * + justify: "start | end | center | space-around | space-between"
 * + wrap: boolean
 */

// Specifies the default values for props:
class Col extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.uid;
  }
  bindClass() {
    let className = [`a_${this.id}`];
    if (this.props.className) {
      className.push(this.props.className);
    }
    switch (this.props.align) {
      case "start":
        className.push("align-items-flex-start");
        break;
      case "center":
        className.push("align-items-center");
        break;
      case "end":
        className.push("align-items-flex-end");
        break;
    }
    switch (this.props.justify) {
      case "start":
        className.push("justify-content-flex-start");
        break;
      case "center":
        className.push("justify-content-center");
        break;
      case "end":
        className.push("justify-content-flex-end");
        break;
      case "space-around":
        className.push("justify-content-space-around");
        break;
      case "space-between":
        className.push("justify-content-space-between");
        break;
    }
    return className.join(" ");
  }

  bindStyle() {
    return `
      .a_${this.id} {
        color: red;
        min-height: 1px;
        max-width: 100%;
        position: relative;
        ${this.props.width && `width: ${this.props.width}%;`}
        ${this.props.order && `order: ${this.props.order};`}
      }
      @media (max-width: 992px) {
        .a_${this.id} {
          min-height: 4px;
        }
      }
    `;
  }

  render() {
    return (
      <>
        <style>{this.bindStyle()}</style>
        <div className={this.bindClass()}>{this.props.children}</div>
      </>
    );
  }
}
Col.propTypes = {
  c_uuid: PropTypes.string.isRequired,
};
