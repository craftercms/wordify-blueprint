(function () {

  const { React, ReactDOM } = CrafterCMSNext;

  CStudioAuthoring.Module.moduleLoaded('react-sample', {
    initialize(config) {
      ReactDOM.render(
        React.createElement(
          'div',
          {
            style: { margin: '10px 0' },
            onClick() {
              console.log(config);
            }
          },
          'Hello, this is a custom react plugin on the sidebar. ' +
          'Click me to print my config values on the browser console.'
        ),
        config.containerEl
      );
    }
  });

})();
