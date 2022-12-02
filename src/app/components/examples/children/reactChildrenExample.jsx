import React from "react";
import PropTypes from "prop-types";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import TextField from "../../common/form/textField";
import SmallTitle from "../../common/typografy/smallTitle";

const FormComponent = ({ children }) => {
    // const [data, setData] = useState({});
    // const handleChange = (target) => {
    //     setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    // };

    // console.log(children);
    return React.Children.map(children, (child) => {
        console.log(child);
        return child;
    });
};
FormComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
const ReactChildrenExample = () => {
    return (
        <CardWrapper>
            <SmallTitle>Clone form and add props</SmallTitle>
            <Divider />
            <FormComponent>
                <TextField name="email" label="email" />
                <TextField name="password" label="пароль" type="password" />
            </FormComponent>
        </CardWrapper>
    );
};

export default ReactChildrenExample;
