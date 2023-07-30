const Conditional = ({ showWhen, children }) => {
    if (showWhen)
        return React.createElement(React.Fragment, null, children);
    return React.createElement(React.Fragment, null);
};
