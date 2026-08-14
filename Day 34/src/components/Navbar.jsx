import { useDispatch, useSelector } from 'react-redux';
import { changeThemeToBrown, changeThemeToDark } from '../redux/slices/themeSlice';

const Navbar = () => {

    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.value)

    return (
        <>
            <h1>Current Theme is : {theme}</h1>

            <button onClick={() => { dispatch(changeThemeToDark()) }}>ChangeToDark</button>

            <button onClick={() => { dispatch(changeThemeToBrown()) }}>ChangeToBrown</button>
            
        </>
    )
}

export default Navbar