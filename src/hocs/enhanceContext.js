/**
 * props增强
 * @param {*} Component 
 * @param {*} otherProps 
 * @returns 
 */
export default function (Component, otherProps) { 
    return (props) => { 
        return <Component {...props} {...otherProps} />
    }
}