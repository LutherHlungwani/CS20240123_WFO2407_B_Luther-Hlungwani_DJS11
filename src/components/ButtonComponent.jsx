import React from "react";
import { Button } from "@mui/material";
import { Link} from "react-router-dom";
import PropTypes from "prop-types";

const ButtonComponent = ({label, variant, color, size, link, external, onClick, ...props}) => {
    const renderButton = () => (
        <Button 
            variant={variant}
            color={color}
            size={size}
            onClick={onClick}
            {...props}
        >
            {label}
        </Button>
    );

    if (link) {
        return external ? (
            <a href={Link} target='_blank' rel="noopener noreffer" style={{textDecoration: 'none'}}>
                {renderButton()}
            </a>
        ) : (
            <Link to={link} style={{textDecoration: 'none'}}>
                {renderButton()}
            </Link>
        );
    }

    return renderButton();

};

ButtonComponent.PropTypes = {
    label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'info', 'success', 'warning']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  link: PropTypes.string,
  external: PropTypes.bool,
  onClick: PropTypes.func,
};

ButtonComponent.defaultProps = {
  variant: 'contained',
  color: 'primary',
  size: 'medium',
  link: null,
  external: false,
  onClick: null,
};

export default ButtonComponent;
