
import firebase from 'firebase/compat/app';
//import { StyledFirebaseAuth } from 'react-firebaseui';
import { useSelector } from 'react-redux';
import { uiConfig } from './uiConfig';

export const WindowAuth = (props) => {
    const screenSize = useSelector(state => state.screenSize);
    const statusAuth = useSelector(state => state.statusAuth);
    return (
        <div>
            { !statusAuth ? <div
                style={{
                    position: "absolute",
                    top: 0,
                }}
            >
                <div
                    onClick={props.ShowAuth}
                    style={{
                        backgroundColor: "white",
                        height: 2000,
                        width: 2000,
                        position: "absolute",
                        opacity: 0.6,
                        // backdropFilter: 'blur(100px)'
                    }}
                >
                </div>
                <div
                    style={{
                        position: "relative",
                        width: 370,
                        height: 370,
                        left: (screenSize.x / 2) - (370 / 2),
                        top: 300,
                        justifyContent: "center"
                    }}
                >
                    <h2>Sign up and share your algorithms with the community !</h2>
                    
                </div>
            </div>
                : null}
        </div>
    );
}