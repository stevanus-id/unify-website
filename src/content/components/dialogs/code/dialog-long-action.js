import React, { PureComponent } from 'react';
import { Button, Dialog } from 'unify-react-mobile';

class ComponentDemo extends PureComponent {
  state = {
    display: false
  }
  toggleDisplay = () => {
    this.setState({
      display: !this.state.display
    })
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <Button secondary block onClick={this.toggleDisplay}>Open Long Action Dialog</Button>
        </div>
        <Dialog
          title="Title Goes Here"
          longAction
          actionPrimaryText="Long Text CTA Here"
          onActionPrimaryClick={this.toggleDisplay}
          actionSecondaryText="CTA Secondary"
          onActionSecondaryClick={this.toggleDisplay}
          root={document.getElementById("root")}
          display={this.state.display}
          onClose={this.toggleDisplay}>
          Make the copy compact to communicate what you want, approx 50 character like this
        </Dialog>
      </React.Fragment>
    )
  }
}

export default <ComponentDemo />;
