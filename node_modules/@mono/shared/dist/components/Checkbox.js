import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Checkbox = ({ label, id, ...props }) => {
    return (_jsx("div", { className: "form-field", children: _jsxs("label", { htmlFor: id, children: [_jsx("input", { type: "checkbox", id: id, ...props }), label && _jsx("span", { children: label })] }) }));
};
