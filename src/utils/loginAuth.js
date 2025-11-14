import Login from '../component/Login';
export default function (Component) { 
    return function (props) {
        let isLogin = false;
        if(isLogin){
            return <Component {...props} />
        }
        return <Login {...props} />
    }
}