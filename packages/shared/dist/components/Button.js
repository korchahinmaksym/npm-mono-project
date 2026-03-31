import { jsx as _jsx } from "react/jsx-runtime";
export const Button = ({ variant = "primary", children, ...props }) => {
    return (_jsx("button", { className: `btn btn-${variant}`, ...props, children: children }));
};
