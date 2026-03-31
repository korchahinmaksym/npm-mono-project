import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Input = ({ label, id, ...props }) => {
    return (_jsxs("div", { className: "form-field", children: [label && _jsx("label", { htmlFor: id, children: label }), _jsx("input", { id: id, ...props })] }));
};
